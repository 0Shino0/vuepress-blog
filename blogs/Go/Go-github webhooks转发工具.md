---
title: github webhooks转发工具
tags: 
   - Go
categories: 
   - Go
summary: Golang小工具
description: Golang小工具
date: 2024-1-4 21:41:07
---

## 准备工作

- Golang开发工具
- 阿里云云函数FC
- github webhooks链接以及秘钥（我这里只打开了Issue和comment）



## 主要工作（难点）

- 解析JSON，拼接字符串
- 云函数踩坑
- 本地测试比较困难（需要公网ip服务器能够被github那边ping通）
- sha256加密解密



## 完整代码

```golang
package main

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"github.com/tidwall/gjson"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

type FrontReq struct {
	Projects      []string
	StartDateTime string
	EndDateTime   string
}

// 处理请求
func wsHandler(w http.ResponseWriter, r *http.Request) {
	var Secret = "github webhooks秘钥"

	action := r.Header.Get("x-github-event")
	if action == "issue_comment" || action == "issues" || action == "comment" {
		bodyContent, _ := ioutil.ReadAll(r.Body)
		r.Body.Close()
		//signature := r.Header.Get("X-Hub-Signature")
		signature := r.Header.Get("X-Hub-Signature-256")

		//fmt.Println(signature)
		if VerifySignature(signature, string(bodyContent), Secret) { // 检验 github 发过来的 签名
			// 处理json数据
			var githubObj Data
			err := json.Unmarshal(bodyContent, &githubObj)
			if err != nil {
				fmt.Sprintf("解析JSON失败：%s", err)
				fmt.Println()
			}

			// 初始化
			msg := ""
			actionName := ""

			// 加工markdown数据
			switch action {
			case "issues": // issue
				switch githubObj.Action {
				case "edited": // editor
					actionName = "更新了Issue-"
					dynamicInfo := "Issue标题：<font color=\"info\">" + githubObj.Issue.Title + "</font> \n" +
						"Issue地址：" + "[Issue](" + githubObj.Issue.Url + ") \n"
					msg = joinMsg(githubObj, actionName, dynamicInfo)
					break
				case "opened": // open
					actionName = "打开了新的Issue-"
					dynamicInfo := "Issue标题：<font color=\"info\">" + githubObj.Issue.Title + "</font> \n" +
						"Issue地址：" + "[Issue](" + githubObj.Issue.Url + ") \n"
					msg = joinMsg(githubObj, actionName, dynamicInfo)
					break
				case "closed": // close
					actionName = "关闭了Issue-"
					dynamicInfo := "Issue标题：<font color=\"info\">" + githubObj.Issue.Title + "</font> \n" +
						"Issue地址：" + "[Issue](" + githubObj.Issue.Url + ") \n"
					msg = joinMsg(githubObj, actionName, dynamicInfo)
					break
				default:
					fmt.Fprintln(w, "{\"code\":404, \"error\":\"please check action \"}")
					break
				}
				break
			case "issue_comment": // issue comment
				switch githubObj.Action {
				case "deleted": // delete
					actionName = "删除了一条评论-"
					dynamicInfo := "删除内容：" + githubObj.Comment.Body + " \n" +
						"Issue地址：" + "[Issue](" + githubObj.Comment.IssueUrl + ") \n"
					msg = joinMsg(githubObj, actionName, dynamicInfo)
					break
				case "created": // created
					actionName = "在Issue**【" + githubObj.Issue.Title + "】**下添加了一条评论-"
					dynamicInfo := "评论内容： " + githubObj.Comment.Body + " \n" +
						"评论地址：" + "[Comment](" + githubObj.Comment.HtmlUrl + ") \n" +
						"Issue地址：" + "[Issue](" + githubObj.Comment.IssueUrl + ") \n"
					msg = joinMsg(githubObj, actionName, dynamicInfo)
					break
				default:
					fmt.Fprintln(w, "{\"code\":404, \"error\":\"please check action \"}")
					break
				}
				break
			default:
				fmt.Fprintln(w, "{\"code\":404, \"error\":\"not found x-github-event \"}")
				break
			}

			//fmt.Println(githubObj.Action)
			//fmt.Printf("%+v", githubObj)

			// 发送给企微机器人
			params := MsgParams{
				MsgType: "markdown",
				Markdown: struct {
					Content string `json:"content"`
				}{
					Content: msg,
				},
			}
			wechatRobotsToMsg(params)

		} else {
			fmt.Fprintln(w, "{\"code\":200, \"error\":\"Signature error\"}")
		}
	} else {
		fmt.Fprintln(w, "{\"code\":200, \"error\":\"Unmatch x-github-event\"}")
	}
}

// main入口函数
func main() {
	// 当有请求访问ws时，执行此回调方法
	http.HandleFunc("/", wsHandler)
	// 监听127.0.0.1:7777
	err := http.ListenAndServe("0.0.0.0:9000", nil)
	if err != nil {
		log.Fatal("ListenAndServe", err.Error())
	}
}

// 根据 密钥和 body 生成签名
func generateHashSignature(message string, secret string) string {
	//h := hmac.New(sha1.New, []byte(secret))
	h := hmac.New(sha256.New, []byte(secret))
	h.Write([]byte(message))

	//fmt.Println("sha256=" + hex.EncodeToString(h.Sum(nil)))
	return "sha256=" + hex.EncodeToString(h.Sum(nil))
}

// VerifySignature 比较签名结果
func VerifySignature(signature string, data string, secret string) bool {
	return signature == generateHashSignature(string(data), secret)
}

// 企微机器人
func wechatRobotsToMsg(params MsgParams) {

	//fmt.Printf("%v\n", params)
	jsonDate, err := json.Marshal(&params)
	if err != nil {
		fmt.Sprintf("序列化失败：%s", err)
		fmt.Println()
	}
	//fmt.Printf("序列化后：%v\n", string(json_date))

	// POST
	var wxSendUrl = "企微机器人链接"

	//fmt.Println(wx_send_url)
	response, err := http.Post(wxSendUrl, "text/html;application/json", strings.NewReader(string(jsonDate)))
	if err != nil {
		fmt.Println(err)
	}

	// Get errcode
	body, err := ioutil.ReadAll(response.Body)
	defer response.Body.Close()
	errcode := gjson.Get(string(body), "errcode").String()
	if errcode != "0" {
		fmt.Println("fail")
		//fmt.Println(json.Unmarshal([]byte(str), &body))
	} else {
		fmt.Println("success")
	}
}

// 拼接字符串
func joinMsg(githubObj Data, actionName string, dynamicInfo string) string {
	msg := ""
	msgRep := fmt.Sprintf("<font color=\\\"info\\\">[%s](%s)</font> 仓库有一条新的消息：\n", githubObj.Repository.FullName, githubObj.Repository.Url)
	msgIssue := ""
	sendName := "**" + githubObj.Sender.Login + "**" // 用户名 加粗

	msgIssue = sendName + actionName + ": \n" + dynamicInfo

	msg = msgRep + msgIssue

	return msg
}

type MsgParams struct {
	MsgType  string `json:"msgtype"`
	Markdown struct {
		Content string `json:"content"`
	} `json:"markdown"`
}

// github webhooks json数据
type Data struct {
	Action     string         `json:"action"`
	Issue      IssueType      `json:"issue"`
	Comment    CommentType    `json:"comment"`
	Repository RepositoryType `json:"repository"`
	Sender     SenderType     `json:"sender"`
}

// IssueType IssueComment Issue主体
type IssueType struct {
	Title    string `json:"title"`
	Url      string `json:"url"`
	State    string `json:"state"`
	Comments int64  `json:"comments"`
}

// CommentType Issue评论信息
type CommentType struct {
	Body     string `json:"body"`
	HtmlUrl  string `json:"html_url"`
	IssueUrl string `json:"issue_url"`
}

// RepositoryType 仓库信息
type RepositoryType struct {
	FullName string `json:"full_name"`
	Url      string `json:"url"`
}

// SenderType 发送主体
type SenderType struct {
	Login string `json:"login"`
}

```



## 效果预览

![image-20240104182247831](https://shinoimg.yyshino.top/img/202401041822905.png)



## 参考链接以及使用工具链接

- https://webhook.site/
- 部署平台阿里云函数 https://fcnext.console.aliyun.com/overview 


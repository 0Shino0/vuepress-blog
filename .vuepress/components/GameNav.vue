<template>
  <div class="g_main">
    <div class="g_game">
      <div class="g_title">
        <h3>{{ gameList.title }}</h3>
      </div>
      <div class="g_game_container">
        <!-- GameItem -->
        <a
          v-for="(item, index) in gameList.data"
          :key="index"
          class="g_game_item"
          :href="item.url"
        >
          <div class="g_game_item_cover">
            <div
              class="g_game_item_image"
              :style="{
                background: 'no-repeat ' + 'url(' + item.coverImg + ')',
                width: '100%',
                height: '100%',
                'background-size': 'cover',
              }"
            ></div>
            <div class="g_game_item_cover_labels">
              <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{
                tag
              }}</span>
            </div>
          </div>
          <div class="g_game_item_desc">{{ item.desc }}</div>
        </a>
      </div>
    </div>

    <div class="g_game">
      <div class="g_title">
        <h3>{{ effectsList.title }}</h3>
      </div>
      <div class="g_game_container">
        <!-- GameItem -->
        <a
          v-for="(item, index) in effectsList.data"
          :key="index"
          class="g_game_item"
          :href="item.url"
        >
          <div class="g_game_item_cover">
            <div
              class="g_game_item_image"
              :style="{
                background: 'no-repeat ' + 'url(' + item.coverImg + ')',
                width: '100%',
                height: '100%',
                'background-size': 'cover',
              }"
            ></div>
            <div class="g_game_item_cover_labels">
              <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{
                tag
              }}</span>
            </div>
          </div>
          <div class="g_game_item_desc">{{ item.desc }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameNav",
  data() {
    return {
      gameList: {
        title: "游戏",
        data: [
          {
            url: "https://blog.yyshino.top/game/2048/",
            coverImg: "http://shinoimg.yyshino.top/img/202210101022657.png",
            coverAlt: "2048",
            tags: ["小游戏"],
            desc: "原生JS构建2048",
          },
          {
            url: "https://v-2048.yyshino.top/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101704508.jpg",
            coverAlt: "Vue2048",
            tags: ["小游戏"],
            desc: "Vue-2048",
          },
        ],
      },
      effectsList: {
        title: "特效",
        data: [
          {
            url: "https://blog.yyshino.top/game/matrix/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622761.jpg",
            coverAlt: "矩阵雨",
            tags: ["小游戏"],
            desc: "矩阵雨",
          },
          {
            url: "https://blog.yyshino.top/game/storm/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622269.jpg",
            coverAlt: "storm粒子",
            tags: ["web特效"],
            desc: "粒子旋风",
          },
          {
            url: "https://blog.yyshino.top/game/windows/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622095.jpg",
            coverAlt: "仿Windows",
            tags: ["web特效"],
            desc: "仿Windows",
          },
          {
            url: "https://blog.yyshino.top/game/draw-animation/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622016.jpg",
            coverAlt: "钢笔特效",
            tags: ["web特效"],
            desc: "钢笔特效",
          },
          {
            url: "https://blog.yyshino.top/game/fire-works/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622436.jpg",
            coverAlt: "烟花特效",
            tags: ["web特效"],
            desc: "仿烟花",
          },
          {
            url: "https://blog.yyshino.top/game/notfound/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101621303.jpg",
            coverAlt: "404页面特效",
            tags: ["web特效"],
            desc: "404粒子页面",
          },
          {
            url: "https://blog.yyshino.top/game/mouse-shadow/",
            coverImg: "https://shinoimg.yyshino.top/img/202210101622640.jpg",
            coverAlt: "鼠标shadow",
            tags: ["web特效"],
            desc: "鼠标shadow",
          },
        ],
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.g_main {
  padding: 3.6rem 2rem 0;
  max-width: 960px;
  margin: 0 auto;
  display: block;
  border-top: 1px solid #eaecef;

  .g_game {
    .g_title {
      font-size: 1.35rem;
      margin-top: 1.5rem;
      padding-top: 0;
    }

    .g_game_container {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      align-content: stretch;

      .g_game_item {
        text-decoration: none;
        flex: 0 0 31%;
        box-sizing: border-box;
        position: relative;
        border: 1px solid #ececec99;
        border-radius: 14px;
        margin: 1%;
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);

        .g_game_item_cover {
          position: relative;
          min-width: 233.6px;
          height: 120px;
          line-height: 110px;
          text-align: center;
          border: 1px solid #e8e8e81a;
          border-radius: 15px;
          font-size: 24px;
          font-weight: 200;
          overflow: hidden;

          .g_game_item_image {
          }

          .g_game_item_cover_labels {
            position: absolute;
            bottom: 0;
            display: flex;
            line-height: 16px;
            font-size: 12px;
            padding: 5px;

            span {
              padding: 3px 5px;
              display: inline-block;
              margin-right: 5px;
              border-radius: 4px;
              zoom: 0.8;
              font-weight: 500;
            }
          }
        }

        .g_game_item_desc {
          width: 100%;
          line-height: 22px;
          padding: 5px 8px;
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          font-size: 14px;
        }
      }

      @media (max-width: 750px) {
        .g_game_item {
          flex: 0 0 100%;
        }
      }

      @media (max-width: 1199px) {
        .g_game_item {
          flex: 0 0 100%;
        }
      }

      .g_game_item:hover {
        -webkit-animation: shadow-g_game_item 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: shadow-g_game_item 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      @keyframes shadow-g_game_item {
        0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }

        100% {
          -webkit-transform: translateZ(50px);
          transform: translateZ(50px);
          -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
          box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
        }
      }

      @keyframes shadow-g_game_item {
        0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }

        100% {
          -webkit-transform: translateZ(50px);
          transform: translateZ(50px);
          -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
          box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
        }
      }
    }
  }
}
</style>
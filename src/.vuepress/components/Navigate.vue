<template>
  <div class="navagate_container">

    <div class="nav_container">
      <div class="nav_item" v-for="nav in navList" :key="nav.title">
        <div class="nav_item_title">
          <!-- <h2 :id="nav.title" tabindex="-1">{{  }}</h2> -->
          <h2 :id="nav.title" tabindex="-1">## {{nav.title}}</h2>
        </div>

        <div class="nav_item_main">
          <a
            class="nav_item_url"
            v-for="navItem in nav.arr"
            :key="navItem.id"
            :href="navItem.nav_url"
          >
            <div class="nav_item_text">{{ navItem.nav }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type PropType = {
  navList: any[]
}
const props = defineProps<PropType>()
</script>

<style lang="scss" scoped>
body {
  /*
  搜索框
  */
  .navagate_container {
    a {
      text-decoration: none;
    }

    

    /*
    导航区
    */
    .nav_container {
      display: flex;
      flex-wrap: wrap;
      // align-content: start;
      justify-content: center;
      align-content: flex-start;
      flex: 1;

      .nav_item {
        text-align: center;
        margin: 20px 40px;
        border-radius: 5px;
        flex: 1;

        .nav_item_title {
          margin: 10px;
        }

        .nav_item_main {
          padding: 20px;
          // width: 300px;
          border-radius: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.4s;

          .nav_item_url {
            text-decoration: none;
          }

          .nav_item_url:hover {
            -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          @keyframes slide-top {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
            }
          }

          @keyframes slide-top {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
            }
          }

          /*
            返回
          */
          .nav_item_url {
            -webkit-animation: reverse-slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
            animation: reverse-slide-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both;
          }

          @keyframes reverse-slide-top {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
            }
          }

          @keyframes reverse-slide-top {
            0% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }

            100% {
              -webkit-transform: translateY(-10px);
              transform: translateY(-10px);
            }
          }

          /*
              CSS gap 属性是用来设置网格行与列之间的间隙（gutters），该属性是 row-gap 和 column-gap 的简写形式。
          */
          .nav_item_text {
            // width: 96.662px;
            line-height: 90px;
            border-radius: 20px;
            // border: 1px solid #E7E7E7;
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .nav_item_main:hover {
          box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
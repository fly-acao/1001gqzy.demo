<template>
  <div>
    <!-- 头部 -->
    <top :title="audioMsg">
      <template #left>
        <img
          class="leftImg"
          src="../../assets/images/icon/ic_actionbar_search_icon.png"
          alt=""
        />
      </template>
      <!-- v-slot 简写  #right -->
      <template v-slot:right>
        <img
          class="rightImg"
          src="../../assets/images/icon/ic_chat_green.png"
          alt=""
        />
      </template>
    </top>
    <!-- 导航 -->
    <div class="audio_class">
      <div class="audio_class_nav">
        <!-- 点击赋值   动态属性是 判断 -->
        <span @click="curr=0" :class="{audio_acitve:curr==0}"><router-link to="/audio/movie">电影</router-link></span>
        <span @click="curr=1" :class="{audio_acitve:curr==1}"><router-link to="/audio/book">读书</router-link></span>
        <span @click="curr=2" :class="{audio_acitve:curr==2}"><router-link to="/audio/tv">电视</router-link></span>
        <span @click="curr=3" :class="{audio_acitve:curr==3}"><router-link to="/audio/city">同城</router-link></span>
        <span @click="curr=4" :class="{audio_acitve:curr==4}"><router-link to="/audio/music">音乐</router-link></span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import top from "../../header/top";
export default {
  components: {
    top,
  },
  data() {
    return {
      audioMsg: "书影音",
      curr:0
    };
  },
};
</script>
<style lang="less">
.audio_class_nav {
  width: 100%;
  border-bottom: 1px solid gainsboro;
  height: .6rem;
  display: flex;
  span{
    display: inline-block;
    flex: 1;
    text-align: center;
    a{text-decoration: none;line-height: .6rem;color: black;}
  }
  .audio_acitve{
    background: rgb(7, 214, 20);
  }
}
</style>
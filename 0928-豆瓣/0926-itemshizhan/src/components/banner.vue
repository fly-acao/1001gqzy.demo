<template>
    <div class="swiper-container" :class="swiperId">
      <div class="swiper-wrapper">
        <slot name="swiper-slide"></slot>
      </div>
      <!-- 分液器 -->
      <div :class="{'swiper-pagination':paginationShow,
      ['swiper-pagination'+swiperId]:paginationShow}"></div>

      <!-- 按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
    // 父传子
    props:{
        //轮播图id
        swiperId:{type:String,default:''},
        //是否显示分页器
        paginationShow:{type:Boolean,default:true},
        // 轮播图样式
        effect:{type:String,default:'slide'},
        // 分液器类型
        paginationtype:{type:String,default:'bullets'},
    },
  mounted(){
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>
<style>
</style>
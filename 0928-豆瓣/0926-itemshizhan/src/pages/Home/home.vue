<template>
<div class="home">
     <top>
        <template #home>
            <div class="bgd">
                <div class="homeClass">
                <img class="imgF" src="../../assets/images/icon/ic_group_search_small.png" alt="">
                <input type="text" value="影视 图书 唱片 小组等">
                <img src="../../assets/images/icon/ic_scan_gray.png" alt="">
            </div>
            </div>
        </template> 
         <template v-slot:right>
        <img
          class="rightImg"
          src="../../assets/images/icon/ic_chat_white.png"
          alt=""
        />
      </template>
     </top>
     <!-- 导航 -->
     <Banner swiperId='swiperId111' paginationtype="fraction">
         <template #swiper-slide>
             <div class="swiper-slide">
                 <img src='@/assets/images/轮播/01.jpg' alt="">
             </div>
             <div class="swiper-slide">
                 <img src='@/assets/images/轮播/02.jpg' alt="">
             </div>
             <div class="swiper-slide">
                 <img src='@/assets/images/轮播/03.jpg' alt="">
             </div>
         </template>
     </Banner>
     <Banner swiperId='swiperId222' :paginationShow="false">
         <template #swiper-slide>
             <div class="swiper-slide">
                 <img src='@/assets/images/轮播/01.jpg' alt="">
             </div>
             <div class="swiper-slide">
                 <img src='@/assets/images/轮播/02.jpg' alt="">
             </div>
         </template>
     </Banner>
     <!--轮播图  -->
            <Newslist v-for="(item,index) in arr" :key="index" 
        :imgSrc="item.target.cover_url" :item="item">
        </Newslist>
     <!-- Axios请求内容 -->
</div>
</template>
<script>
import top from "../../header/top"
import Banner from "../../components/banner"
import Newslist from "../../components/Newslist"
export default {
    components:{
        top,Banner,Newslist
    },
    data(){
        return {
            homemsg:'首页',
            arr:[]
        }
    },
    mounted() {
        this.$axios.get('../../../static/homeData.json')
        .then(
            res=>{
                //console.log("homedata:",res.data.recommend_feeds)
                this.arr=res.data.recommend_feeds
            }
        )
    },
}
</script>

<style>
.swiper-slide img{
    width: 100%;
}
</style>
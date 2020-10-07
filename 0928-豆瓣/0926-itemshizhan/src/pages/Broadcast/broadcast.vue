<template>
<div>
  <!-- 头部 -->
     <top :title="bdtMsg">
       <template v-slot:left>
        <img
          class="leftImg"
          src="../../assets/images/icon/ic_status_search_user.png"
          alt=""
        />
      </template>
      <template v-slot:right>
        <img
          class="rightImg"
          src="../../assets/images/icon/ic_chat_green.png"
          alt=""
        />
      </template>
     </top>
     <!-- axios渲染内容 -->
     <div>
       <div class="bdt_header">
        <img src="../../assets/images/icon/user_normal.jpg" alt="">
        <span>
          <router-link to="/login">
            登录发广播
          </router-link>
        </span>
       </div>
       <ul class="ul_class">
         <li>
           <div class="bdt_top">
             <span id="spanImg"><img :src=arr.img_url alt=""></span>
             <span>{{arr.title}}
               <br>
               {{arr.time}}
             </span>
           </div>
           <div class="bdt_center">
             <i></i>
             <p>{{arr.topic_title}}</p>
           </div>
         </li>
       </ul>
       <ul class="ul_class">
         <li>
           <div class="bdt_top">
             <span id="spanImg"><img :src=arr.img_url alt=""></span>
             <span>{{arr.title}}
               <br>
               {{arr.time}}
             </span>
           </div>
           <div class="bdt_center">
             <i></i>
             <p>{{arr.topic_title}}</p>
           </div>
         </li>
       </ul>
       <ul class="ul_class">
         <li>
           <div class="bdt_top">
             <span id="spanImg"><img :src=arr.img_url alt=""></span>
             <span>{{arr.title}}
               <br>
               {{arr.time}}
             </span>
           </div>
           <div class="bdt_center">
             <i></i>
             <p>{{arr.topic_title}}</p>
           </div>
         </li>
       </ul>
       <ul class="ul_class">
         <li>
           <div class="bdt_top">
             <span id="spanImg"><img :src=arr.img_url alt=""></span>
             <span>{{arr.title}}
               <br>
               {{arr.time}}
             </span>
           </div>
           <div class="bdt_center">
             <i></i>
             <p>{{arr.topic_title}}</p>
           </div>
         </li>
       </ul>
     </div>
</div>
</template>

<script>
import top from "../../header/top"
export default {
    components:{
        top
    },
    data(){
        return {
            bdtMsg:'广播',
            arr:[]
        }
    },
     mounted() {
    this.$axios.get("../../../static/radio.json").then((res)=>{
      console.log(res.data.radio_list);
      console.log(res.data.radio_list);
      this.arr=res.data.radio_list[0]
    })
  },
}
</script>

<style lang="less">
.ul_class{
  border-bottom: 1px solid gainsboro;
}
#spanImg{
  color: black;
    display: inline-block;
    width: .6rem;
    height: .6rem;
    border: 1px solid black;
    border-radius:50%;
    overflow: hidden;
    img{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
}
.bdt_top{
  box-sizing: border-box;
  padding: .15rem;
  width: 100%;
  height: .8rem;
  span{
    font-size: .23rem;
    color: black;
    float: left;
    margin-right: .2rem;
    line-height: .35rem;
  }
}
div.bdt_center{
  position: relative;
  i{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    border-radius:50%;
    background: rgb(145, 145, 145);
    position: absolute;
    top: .2rem;
    left: .7rem;
  }
  width: 100%;
  box-sizing: border-box;
  padding: .2rem .2rem .2rem 1.3rem;
  p{
    box-sizing: border-box;
    padding: .15rem;
    background: rgb(247, 247, 247);
    font-size: .3rem;
    color: black;
  }
}
.bdt_header{
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid gainsboro;
  line-height: 1rem;
  font-size: .3rem;
  box-sizing: border-box;
  padding: .1rem;
  img{
    border-radius: 50%;
    float: left;
  }
  span{
    float: left;
    height: 1rem;
    line-height: 1rem;
    padding-left: .2rem;
    }
}
</style>
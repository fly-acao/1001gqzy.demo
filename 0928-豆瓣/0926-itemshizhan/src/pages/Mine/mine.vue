<template>
<div>
     <top :title="mineMsg">
      <template v-slot:right>
        <img
          class="rightImg"
          src="../../assets/images/icon/ic_chat_green.png"
          alt=""
        />
      </template>
     </top>
     <div class="mine_top_class">
       <span><img src="../../assets/images/mine/lock.png" alt="">
       <br>
       密码管理
       </span>
       <span>
         <img src="../../assets/images/mine/card.png" alt="">
         <br>
         银行卡管理
       </span>
     </div>
     <ul>
       <li class="mineLi" v-for="(item,index) in mineArr" :key="index">
         <img class="mineImg" :src=item.img>
         {{item.title}}
         <span class="span_mineImg"><img src="../../assets/images/mine/jiantou.jpg" alt=""></span>
      </li>
     </ul>
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
            mineMsg:'我的',
            mineArr:[
              {img:require('../../assets/images/mine/menu.png'),title:"风险评估能力",},
              {img:require('../../assets/images/mine/anquan.png'),title:'安全保障',},
              {img:require('../../assets/images/mine/user.png'),title:'我的关注',},
              {img:require('../../assets/images/mine/wenhao.png'),title:'帮助中心',},
              {img:require('../../assets/images/mine/user.png'),title:'关于我们',},
              {img:require('../../assets/images/mine/fang.png'),title:'检查更新',},
              {img:require('../../assets/images/mine/kefu.png'),title:'联系客服',}
            ]
        }
    },
}
</script>

<style lang='less'>
div.mine_top_class{
  color: black;
  width: 100%;
  height: 1.3rem;
  border-bottom: 1px solid gainsboro;
  span{
    float: left;
    width: 50%;
    text-align: center;
  }
}
  li{
    list-style: none;
    text-indent: .8rem;
    line-height: 1rem;
    border-bottom: 1px solid gainsboro;
    position: relative;
    .mineImg{
      position: absolute;
      top: .21rem;
      left: .05rem;
    }
    .span_mineImg{
      position: absolute;
      top: .21rem;
      right: .2rem;
    }
  }
</style>
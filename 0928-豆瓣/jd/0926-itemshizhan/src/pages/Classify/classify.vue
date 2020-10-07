<template>
  <div>
    <!-- 头部 -->
    <top>
      <template #home>
        <div class="city_c">
          <span><input type="text" value="手机"></span>
        </div>
      </template>
      <template #left>
        <img class="city_l" src="../../assets/jdimg/img/jiantou.png" alt="">
      </template>
      <!-- v-slot 简写  #right -->
      <template v-slot:right>
       <img class="city_r" src="../../assets/jdimg/img/dis-nav.png" alt="">
      </template>
    </top>
    <!-- 导航 -->
    <nav class="ciy_nav">
      <span>京东物流</span>
      <span>品牌 <i></i></span>
      <span>屏幕尺寸 <i></i></span>
      <span>运行内存 <i></i></span>
    </nav>
    <div class="ciy_img_f">
      <img src="../../assets/jdimg/img/buyphone.jpg" alt="">
    </div>
    <div class="buy_phone">
      <ul>
        <li><div><span>游戏手机</span></div></li>
        <li><div><span>拍照手机</span></div></li>
        <li><div><span>长续航手机</span></div></li>
        <li><div><span>全面屏手机</span></div></li>
      </ul>
    </div>
    <div class="ciy_list">
      <dl>
        <dd>
          <div>
            <img src="../../assets/jdimg/img/buy-pro1.jpg" alt="">
          </div>
          <div>
            <h1>Apple iPhone 8 Plus</h1>
            <p><span>64GB</span><span>5.5英寸</span></p>
            <p><strong>￥6445.00</strong></p>
            <p><small>95%好评</small><small>100250人</small></p>
            <p><button>查看同款拍拍二手</button></p>
          </div>
        </dd>
        <dd>
          <div>
            <img src="../../assets/jdimg/img/buy-pro2.jpg" alt="">
          </div>
          <div>
            <h1>Apple iPhone 8 Plus</h1>
            <p><span>64GB</span><span>5.5英寸</span></p>
            <p><strong>￥6445.00</strong></p>
            <p><small>95%好评</small><small>100250人</small></p>
            <p><button>查看同款拍拍二手</button></p>
          </div>
        </dd>
        <dd>
          <div>
            <img src="../../assets/jdimg/img/buy-pro3.jpg" alt="">
          </div>
          <div>
            <h1>Apple iPhone 8 Plus</h1>
            <p><span>64GB</span><span>5.5英寸</span></p>
            <p><strong>￥6445.00</strong></p>
            <p><small>95%好评</small><small>100250人</small></p>
            <p><button>查看同款拍拍二手</button></p>
          </div>
        </dd>
        <dd>
          <div>
            <img src="../../assets/jdimg/img/buy-pro4.jpg" alt="">
          </div>
          <div>
            <h1>Apple iPhone 8 Plus</h1>
            <p><span>64GB</span><span>5.5英寸</span></p>
            <p><strong>￥6445.00</strong></p>
            <p><small>95%好评</small><small>100250人</small></p>
            <p><button>查看同款拍拍二手</button></p>
          </div>
        </dd>
      </dl>
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
      curr:0
    };
  },
};
</script>
<style lang="less">
// .audio_class_nav {
//   width: 100%;
//   border-bottom: 1px solid gainsboro;
//   height: .6rem;
//   display: flex;
//   span{
//     display: inline-block;
//     flex: 1;
//     text-align: center;
//     a{text-decoration: none;line-height: .6rem;color: black;}
//   }
//   .audio_acitve{
//     background: rgb(7, 214, 20);
//   }
// }
.city_c{
  width: 100%;
  position: relative;
  height: .8rem;
 background: rgb(244, 244, 244);
 span{
   display: inline-block;
   height: .6rem;
   width:80%;
   background: white;
   border-radius: .4rem;
   margin-top:.1rem;
   input{
     margin: 0;
     height: .6rem;
     margin-left:.2rem;
   }
 }
}
.city_l{
  position: absolute;
  left: .1rem;
  top: .2rem;
}
.city_r{
position: absolute;
  right: .1rem;
  top: .38rem;
}
.ciy_nav{
  padding-top:1rem;
  span{
    padding: .1rem;
    display: inline-block;
    background:rgb( 240, 242, 245);
    margin: 0 .21rem;
  }
  span:nth-of-type(1)~span{
    i{
      display: inline-block;
      width: .2rem;
      height: .2rem;
      // background: red;
      background: url("../../assets/jdimg/img/icon-updown-arrow.png")no-repeat;
      background-position: 10% 42%;
    }
  }
}
.ciy_img_f{
  img{width: 100%;}
}
.buy_phone{
  li{
    float: left;
    padding: .1rem;
    background: rgb(204, 204, 204);
    margin: 0 .1rem;
    border-radius:.1rem;
    list-style: none;
    div{
      span{
        display: inline-block;
        margin-top:.8rem;
        width: 100%;
        padding: .1rem 0;
        opacity: .9;
        text-align: center;
        background: rgb(204, 204, 204);
        color: white;
      }
    }
    }
  li:nth-of-type(1) div{
    width: 1.2rem;
    height: 1.2rem;
    background: url('../../assets/jdimg/img/buyphone01.jpg')no-repeat;
    background-size: 100%;
  }
  li:nth-of-type(2) div{
    width: 1.2rem;
    height: 1.2rem;
    background: url('../../assets/jdimg/img/buyphone02.jpg')no-repeat;
    background-size: 100%;
  }
  li:nth-of-type(3) div{
    width: 1.2rem;
    height: 1.2rem;
    background: url('../../assets/jdimg/img/buyphone03.jpg')no-repeat;
    background-size: 100%;
  }
  li:nth-of-type(4) div{
    width: 1.2rem;
    height: 1.2rem;
    background: url('../../assets/jdimg/img/buyphone04.jpg')no-repeat;
    background-size: 100%;
  }
}
.ciy_list{
  dl{
    margin-top: 1.6rem;
    width: 100%;
    dd{
      box-sizing: border-box;
      padding: .1rem;
      border: 1px solid gainsboro;
      width: 100%;
      display: flex;
      div{
        h1{margin-top: .2rem;margin-bottom: .3rem;}
        flex: 1;
        p{
          span{margin-right: .2rem;color:rgb(114, 104, 148);background: rgb(240, 242, 245);}
          strong{font-size: .25rem;}
          margin-bottom: .4rem;
          button{
            border: none;
            border:  1px solid gainsboro;
            border-radius: .1rem;
            padding: .1rem .3rem;
            background: white;
            margin-top: .3rem;
          }
        }
        p:last-child{margin: 0;}
        }
      div{img{width: 100%;}}
    }
  }
}
</style>
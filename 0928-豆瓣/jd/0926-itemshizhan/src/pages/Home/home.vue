<template>
  <div class="home">
    <!-- 导航 -->
    <top>
      <template #home>
        <div class="homeClass">
          <img class="home_log" src="../../assets/jdimg/img/buy-logo.png" />
          <img
            class="imgF"
            src="../../assets/images/icon/ic_group_search_small.png"
          />
          <input type="text" value="请输入你要查找的内容" />
        </div>
      </template>
      <template v-slot:right>
        <button class="home_btn">登录</button>
      </template>
    </top>
    <!--轮播图  -->
    <Banner swiperId="swiperId111" paginationtype="fraction">
      <template #swiper-slide>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/1.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/3.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/4.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/5.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/6.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/7.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/jdimg/img/8.jpg" alt="" />
        </div>
      </template>
    </Banner>
    <!--content_01-->
    <article class="home_article">
      <span
        ><img src="../../assets/jdimg/img/nav0.png" alt="" /><br />
        分类物流
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav1.png" alt="" /><br />
        物流查询
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav2.png" alt="" /><br />
        购物车
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav3.png" alt="" /><br />
        我的京东
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav4.png" alt="" /><br />
        京东生鲜
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav5.png" alt="" /><br />
        领劵中心
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav6.png" alt="" /><br />
        京东超市
      </span>
      <span
        ><img src="../../assets/jdimg/img/nav7.png" alt="" /><br />
        我的关注
      </span>
    </article>
    <!-- content_02 -->
    <section class="home_section">
      <img
        class="home_set_topimg"
        src="../../assets/jdimg/img/fuli.jpg"
        alt=""
      />
    </section>
    <!-- content_03 -->
    <section class="home_time">
      <p class="h_t_top_p">
        <img src="../../assets/jdimg/img/seckill-icon.png" alt="" />
        <span>掌上秒杀</span> 06：58：39
        <span>京选轮番秒</span>
      </p>
      <div class="h_t_content">
        <span
          ><img src="../../assets/jdimg/img/pro01.jpg" alt="" /> <br /><b
            >￥80</b
          ><br /><del>$150</del>
        </span>
        <span
          ><img src="../../assets/jdimg/img/pro02.jpg" alt="" /> <br /><b
            >￥10</b
          ><br /><del>$30</del>
        </span>
        <span
          ><img src="../../assets/jdimg/img/pro03.jpg" alt="" /> <br /><b
            >￥40</b
          ><br /><del>$100</del>
        </span>
        <span
          ><img src="../../assets/jdimg/img/pro04.jpg" alt="" /> <br /><b
            >￥80</b
          ><br /><del>$140</del>
        </span>
        <span
          ><img src="../../assets/jdimg/img/pro05.jpg" alt="" /> <br /><b
            >￥100</b
          ><br /><del>$100</del>
        </span>
        <span
          ><img src="../../assets/jdimg/img/pro07.jpg" alt="" /> <br /><b
            >￥100</b
          ><br /><del>$100</del>
        </span>
      </div>
      <div class="h_t_ash">
        <img src="../../assets/jdimg/img/aishenghuo.png" alt="" />
      </div>
    </section>
    <div class="home_center">
      <div>
        <span><img src="../../assets/jdimg/img/cp1.jpg" alt="" /></span>
        <span><img src="../../assets/jdimg/img/cp2.jpg" alt="" /></span>
        <span><img src="../../assets/jdimg/img/cp3.jpg" alt="" /></span>
      </div>
    </div>
    <footer class="home_footer">
      <div class="home_footer_top">
        <img src="../../assets/jdimg/img/scroll-to-top-icon.png" alt="" />
        为您推荐
      </div>
      <ul class="home_footer_pro">
        <li>
          <img src="../../assets/jdimg/img/item01.jpg" alt="" />
          <p>普腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机</p>
          <b>￥99</b><br />
          <span>好评94% <button>看相似</button></span>
        </li>
        <li>
          <img src="../../assets/jdimg/img/item02.jpg" alt="" />
          <p>普腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机</p>
          <b>￥99</b><br />
          <span>好评94% <button>看相似</button></span>
        </li>
        <li>
          <img src="../../assets/jdimg/img/item03.jpg" alt="" />
          <p>普腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机</p>
          <b>￥99</b><br />
          <span>好评94% <button>看相似</button></span>
        </li>
        <li>
          <img src="../../assets/jdimg/img/item04.jpg" alt="" />
          <p>普腾家用不锈钢手动压面机手摇多功能面条机水果榨汁机</p>
          <b>￥99</b><br />
          <span>好评94% <button>看相似</button></span>
        </li>
      </ul>
      <nav class="home_footer_nav">
        <span>登录</span>
        <span>注册</span>
        <span>反馈</span>
        <span>返回顶部</span>
      </nav>
      <dl class="home_footer_icon">
        <dd><span class="home_footer_icon_img"></span> <br />客户端</dd>
        <dd><span class="home_footer_icon_img"></span> <br />触屏版</dd>
        <dd><span class="home_footer_icon_img"></span> <br />电脑版</dd>
      </dl>
      <p class="home_copy">Copyright &copy; 2004-2018 京东JD.com 版权所有</p>
    </footer>
  </div>
</template>
<script>
import top from "../../header/top";
import Banner from "../../components/banner";
export default {
  components: {
    top,
    Banner,
  },
  data() {
    return {
      homemsg: "首页",
      arr: [],
    };
  },
};
</script>

<style lang="less">
.swiper-slide img {
  width: 100%;
}
.home_article {
  border-bottom: 1px solid gainsboro;
  height: 2.7rem;
  width: 100%;
  span {
    margin-top: 0.15rem;
    img {
      width: 0.8rem;
    }
    float: left;
    width: 25%;
    text-align: center;
  }
}
.home_set_topimg {
  width: 100%;
}
.home_time {
  .h_t_top_p {
    color: black;
    padding-left: 0.6rem;
    position: relative;
    height: 0.6rem;
    font-size: 0.25rem;
    line-height: 0.6rem;
    img {
      width: 0.4rem;
      position: absolute;
      top: 0.01rem;
      left: 0.1rem;
    }
    span {
      color: red;
      padding: 0 0.2rem;
    }
    span:last-child {
      text-align: right;
      padding-left: 1.3rem;
    }
  }
  .h_t_content {
    padding-top: 0.1rem;
    background: rgb(246, 246, 246);
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    span {
      img {
        width: 1.55rem;
        height: 1.5rem;
      }
      text-align: center;
      b {
        color: red;
      }
      del {
        color: black;
      }
      display: inline-block;
    }
  }
}
.h_t_ash {
  img {
    width: 100%;
  }
}
.home_center {
  width: 100%;
  span {
    width: 50%;
    box-sizing: border-box;
    border: 1px solid gainsboro;
    img {
      width: 100%;
    }
    float: left;
  }
  span:nth-of-type(1) {
    img {
      height: 3.556rem;
    }
  }
}
.home_footer {
  background: rgb(240, 242, 245);
  width: 100%;
  .home_footer_top {
    line-height: 1rem;
    position: relative;
    img {
      position: absolute;
      top: 4rem;
      left: 2.4rem;
      float: left;
      width: 0.3rem;
      height: 0.3rem;
    }
    text-align: center;
  }
  .home_footer_pro {
    width: 100%;
    li {
      background: rgb(240, 242, 245);
      box-sizing: border-box;
      padding: 0.1rem 0.1rem;
      float: left;
      p {
        color: black;
        margin-bottom: 0.1rem;
      }
      b {
        color: red;
        margin-bottom: 0.1rem;
      }
      span {
        color: 165, 177, 199;
        button {
          margin-left: 1.2rem;
          border: none;
          border: 1px solid gainsboro;
          border-radius: 0.1rem;
          background: rgb(240, 242, 245);
          padding: 0.05rem 0.05rem;
        }
      }
      img {
        width: 100%;
      }
      width: 50%;
      box-sizing: border-box;
      border: 1px solid gainsboro;
    }
  }
  nav.home_footer_nav {
    line-height: 0.8rem;
   // border-bottom: 1px solid rgb(152, 154, 157);
    span {
      color: rgb(152, 154, 157);
      border-right: 1px solid gainsboro;
      padding: 0 0.5rem;
    }
    span:last-child {
      border: none;
    }
  }
  dl.home_footer_icon {
    border-bottom: 1px solid rgb(152, 154, 157);
    dd {
      width: 33.333%;
      height: 1rem;
      float: left;
      text-align: center;
    }
    dd span {
      color: black;
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background: url("../../assets/jdimg/img/sprites.png") no-repeat;
      background-size: 4rem;
      background-position: 50% 40%;
    }
    dd:nth-of-type(1) span{
      background-size: 4rem;
      background-position: 75% 40%;
    }
    dd:nth-of-type(2) span{
      background-size: 4rem;
      background-position: 25% 40%;
    }
  }
}
.home_copy{
  text-align: center;
  color: rgb(163, 159, 156);
  margin-top: 1.2rem;
  padding-bottom:.1rem;
}
</style>
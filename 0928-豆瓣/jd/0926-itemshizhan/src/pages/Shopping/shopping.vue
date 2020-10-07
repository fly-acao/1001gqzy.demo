<template>
  <div>
    <!-- 头部 -->
    <top :title="groupMsg">
      <template v-slot:left> 购物车 </template>
      <template v-slot:right> </template>
    </top>
    <!-- NutUI -->
    <!-- Elevator 电梯楼层组件 -->
    <nut-elevator
      :dataArray="dataList"
      :showIndicator="true"
      :navHeight="40"
      :otherHeight="60"
      :initIndex="0"
      :hiddenTime="500"
      @clickNav="clickNav"
      @clickList="clickList"
    >
    </nut-elevator>
    <nut-luckycard content="1000万"></nut-luckycard>
    <br>
    <nut-luckycard 
        coverColor="#F9CC9D" 
        backgroundColor="#C3D08B" 
        content="<em>1000<em><strong>元</strong>"
        ></nut-luckycard>
        <br>
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
      dataList: [
        {
          title: "A",
          list: [
            //可以为空数组
            {
              name: "安其拉",
              id: "a1", //id字段可以没有
            },
            {
              name: "安琪",
              id: "a2",
            },
          ],
        },
        {
          title: "B",
          list: [
            //可以为空数组
            {
              name: "巴斯德",
              id: "a1", //id字段可以没有
            },
            {
              name: "波特阿和",
              id: "a2",
            },
          ],
        },
        {
          title: "C",
          list: [
            //可以为空数组
            {
              name: "陈羽凡",
              id: "a1", //id字段可以没有
            },
            {
              name: "陈情表",
              id: "a2",
            },
            {
              name: "陈霸气",
              id: "a3",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less">
.gp_content {
  margin-bottom: 1.3rem;
  color: black;
  ul h1 {
    font-size: 0.3rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    text-indent: 0.1rem;
  }
  ul {
    li {
      border-bottom: 1px solid gainsboro;
      height: 1.5rem;
      box-sizing: border-box;
      padding: 0.1rem;
      div {
        width: 100%;
        height: 0.8rem;
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
        img,
        span,
        strong {
          float: left;
          line-height: 0.8rem;
        }
        strong {
          text-indent: 0.15rem;
        }
        span {
          float: right;
        }
      }
      p {
        float: left;
        width: 100%;
        height: 0.3rem;
        color: gray;
      }
    }
  }
}
</style>
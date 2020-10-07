<template>
  <div>
    <!-- 头部 -->
    <top>
      <template v-slot:left> 发现 <br /> </template>
      <template v-slot:right> </template>
    </top>
    <!-- NutUI使用 -->
    NutUI使用
    <!-- icon -->
    <nut-icon type="top"></nut-icon> <br />
    <nut-icon type="action" size="40px"></nut-icon> <br />
    <nut-icon type="action" color="#f0250f"></nut-icon> <br />
    <nut-button @click="clickHandler" :disabled="disabled"> 去结算 </nut-button>
    <br />

    <nut-button disabled> 去结算（disabled） </nut-button><br />
    <nut-buttongroup shape="circle">
      <nut-button type="light"> 重置 </nut-button>
      <nut-button> 确定 </nut-button>
    </nut-buttongroup>
    <br />
    <nut-avatar size="large"></nut-avatar>
    <nut-avatar size="normal"></nut-avatar>
    <nut-avatar size="small"></nut-avatar>
    <br />
    <nut-tab @tab-switch="tabSwitch" line-width="20">
      <nut-tab-panel tab-title="页签1">页签1</nut-tab-panel>
      <nut-tab-panel tab-title="页签2">页签2</nut-tab-panel>
      <nut-tab-panel tab-title="页签3">页签3</nut-tab-panel>
    </nut-tab><br>
     <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar><br>
  </div>
</template>

<script>
import top from "../../header/top";
import { TabPanel } from "@nutui/nutui";
export default {
  components: {
    top,
  },
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    clickHandler(e) {
      // alert("我点击了按钮");
      console.log(e, "我点击了按钮");
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
    tabSwitch: function (index, event) {
      console.log(index + "--" + event);
    },
  },
};
</script>

<style lang="less">
.headerWrap {
  height: 2rem;
}
</style>
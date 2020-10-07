<template>
  <div>
    <top :title="groupMsg">
      <template v-slot:left>
        <img
          class="leftImg"
          src="../../assets/images/icon/ic_actionbar_search_icon.png"
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
    <!-- 头部 -->
    <!-- axios渲染安内容content -->
    <div class="gp_content">
      <ul class="gp_ul1">
        <h1>{{arr}}</h1>
        <li v-for="(item, index) in arr1" :key="index">
          <div>
            <img :src="item.img_url" alt="" />
            <strong>{{ item.group_name }}</strong>
            <span>{{ item.group_member }}</span>
          </div>
          <p>{{ item.topic_title }}</p>
        </li>
      </ul>
      <!-- 新组速报 -->
      <ul class="gp_ul2">
        <h1>{{arr}}</h1>
        <li v-for="(item, index) in arr2" :key="index">
          <div>
            <img :src="item.img_url" alt="" />
            <strong>{{ item.group_name }}</strong>
            <span>{{ item.group_member }}</span>
          </div>
          <p>{{ item.topic_title }}</p>
        </li>
      </ul>
      <!-- 热门小组 -->
      <ul class="gp_ul3">
        <h1>{{arr}}</h1>
        <li v-for="(item, index) in arr3" :key="index">
          <div>
            <img :src="item.img_url" alt="" />
            <strong>{{ item.group_name }}</strong>
            <span>{{ item.group_member }}</span>
          </div>
          <p>{{ item.topic_title }}</p>
        </li>
      </ul>
      <!-- 影视 -->
    </div>
    <!-- axios渲染安内容content_end -->
    <!-- <div class="div_null"></div> -->
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
      groupMsg: "小组",
      arr:[],
      arr1: [],
      arr2:[],
      arr3:[],
    };
  },
  mounted() {
    this.$axios.get("../../../static/groupData.json").then((res) => {
      // console.log("groupData:", res.data.group);
      // console.log("groupData:", res.data.group[0].title);
      console.log(res.data.group[2].group_list);
      this.arr = res.data.group[0].title
      this.arr1 = res.data.group[0].group_list
      console.log(this.arr1);
      this.arr2=res.data.group[1].group_list
      this.arr3=res.data.group[2].group_list
    });
  },
};
</script>

<style lang="less">
.gp_content{
  margin-bottom: 1.3rem;
  color: black;
  ul h1{font-size:.3rem;margin-bottom: .1rem;margin-top: .1rem;text-indent: .1rem;}
  ul{
    li{
      border-bottom:1px solid gainsboro;
      height: 1.5rem;
      box-sizing: border-box;
      padding: .1rem;
      div{
        width: 100%;
        height: .8rem;
        img{width: .8rem;height: .8rem;}
        img,span,strong{
          float: left;
          line-height: .8rem;
        }
        strong{text-indent:.15rem;}
        span{float:right;}
      }
      p{
        float: left;
        width: 100%;
        height: .3rem;
        color: gray;
      }
    }
  }
}
</style>
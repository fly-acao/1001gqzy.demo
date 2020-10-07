<template>
  <div>
    <!-- <h1>电影</h1>
    <div>
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      >
      </el-rate>
    </div> -->
    <!-- content -->
    <div class="movie_content">
      <h1 class="movie_content_h1">正在上映的电影-北京</h1>
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <img class="movie_img" :src="item.cover" alt="" />
          <br />
          <h3>{{ item.title }}</h3>
          <small>评分{{ item.rate }}</small>
        </li>
      </ul>
    </div>
    <div class="movie_content">
      <h1 class="movie_content_h1">正在上映的电影-北京</h1>
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <img class="movie_img" :src="item.cover" alt="" />
          <br />
          <h3>{{ item.title }}</h3>
          <small>评分{{ item.rate }}</small>
        </li>
      </ul>
    </div>
    <div class="movie_content">
      <h1 class="movie_content_h1">正在上映的电影-北京</h1>
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <img class="movie_img" :src="item.cover" alt="" />
          <br />
          <h3>{{ item.title }}</h3>
          <small>评分{{ item.rate }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7,
      arr: [],
    };
  },
  mounted() {
    this.$axios.get("../../../../static/movie.json").then((res) => {
      console.log(res.data.subjects);
      this.arr = res.data.subjects;
    });
  },
};
</script>

<style  lang="less">
.movie_content_h1{
 margin: .25rem .3rem;
}
div.movie_content {
  width: 100%;
  ul {
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    li {
      box-sizing: border-box;
      padding: .07rem;
      display: inline-block;
      text-align: center;
      color: black;
      .movie_img {
        display: inline-block;
        width: 2rem;
        height: 2.5rem;
      }
      h3{
        font-size: .22rem;
      }
      small{
        color: gray;
      }
    }
  }
}
</style>
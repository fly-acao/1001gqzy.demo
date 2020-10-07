<template>
  <ul>
      <li v-for="(item,index) in arr" :key="index">
          <!-- {{item}} -->
          <div class="book_child_img"><img :src=item.cover_url></div>
          <div class="book_child_txt">
              <p>书名:{{item.title}}</p>
              <p>关注数:{{item.score}}</p>
              <p>
                  <span>作者:{{item.author}}</span>
                  <span>出售:{{item.num}}本</span>
                  </p>
          </div>
      </li>
  </ul>
</template>

<script>
export default {
    data() {
        return {
            arr:'',
        }
    },
    mounted() {
    this.$axios.get("../../../../static/read.json").then((res) => {
        console.log(res.data.recommend_one);
        this.arr = res.data.recommend_one;
    });
  },
}
</script>
<style lang="less">
    li{
        padding: .1rem;
        display: flex;
        div.book_child_img{
            img{
                width: 2.2rem;
                height: 1.8rem;
            }
            flex: 1;
        }
        div.book_child_txt{
            box-sizing: border-box;
            padding: .2rem;
            padding-top: 0;
            flex: 3;
            p{
                color: black;
                margin-top: .25rem;
            }
        }
    }
</style>
<template>
  <ul>
      <li v-for="(item,index) in arr" :key="index">
          <div class="book_child_img"><img :src=item.cover></div>
          <div class="book_child_txt">
              <p>评分:{{item.rate}}</p>
              <p>电影名:{{item.title}}</p>
              <p>
                  <span>av号:{{item.id}}</span>
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
    this.$axios.get("../../../../static/tv.json").then((res) => {
        console.log(res.data.subjects);
        this.arr = res.data.subjects
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
                width: 1rem;
                height: 1rem;
            }
            flex: 1;
        }
        div.book_child_txt{
            box-sizing: border-box;
            padding: .2rem;
            padding-top: 0;
            flex: 5;
            display: flex;
            p{
                color: black;
                flex: 1;
                text-align: r;
            }
        }
    }
</style>
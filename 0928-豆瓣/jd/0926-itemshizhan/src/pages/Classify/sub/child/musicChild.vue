<template>
  <ul>
      <li v-for="(item,index) in arr" :key="index">
          <h1 class="h1">{{item.title}}</h1>
          <div class="music_child_content" v-for="(item,index) in item.group_list" :key="index">
              <div class="imgleft">
                  <img :src=item.cover_url>
              </div>
              <div class="txtright">
                  <h1>{{item.title}}</h1>
                  <p>评分:{{item.score}}</p>
                  <p>作者:{{item.author}}</p>
              </div>
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
    this.$axios.get("../../../../static/music.json").then((res) => {
        console.log(res.data.group);
        this.arr = res.data.group
    });
  },
}
</script>
<style lang="less">
ul{
    li{
        padding: .15rem;
        .h1{
            font-size: .35rem;
        }
        div.music_child_content{
             margin: .1rem 0;
            display: flex;
            align-items:center;
            div.imgleft img{
                flex: 1;
                width: 3rem;
                height: 3rem;
            }
             div.imgleft{
                flex: 1;
            }
            div.txtright{
                h1{font-size: .3rem;padding-left: .1rem;}
                flex: 1;
                p{text-align: center;margin-top: .5rem;}
            }
        }
    }
}
</style>
<template>
  <ul>
      <li v-for="(item,index) in arr" :key="index">
          <h1 class="h1">{{item.title}}</h1>
          <div class="city_child_content" v-for="(item,index) in item.city_list" :key="index">
              <div class="city_child_img"><img :src=item.img_url></div>
              <div class="city_child_txt">
                  <h1>{{item.group_name}}</h1>
                  <p>举行时间:{{item.group_time}}</p>
                  <p>举行地点:{{item.group_address}}</p>
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
    this.$axios.get("../../../../static/city.json").then((res) => {
        console.log(res.data.city);
        this.arr = res.data.city
    });
  },
}
</script>
<style lang="less">
    ul{
        li{
            box-sizing: border-box;
            padding: .15rem;
            .h1{font-size: .4rem;}
            div.city_child_content{
                display: flex;
                align-items:center;
                div.city_child_img{
                    flex: .9;
                }
                div.city_child_txt{
                    flex: 3;
                }
            }
        }
    }
</style>
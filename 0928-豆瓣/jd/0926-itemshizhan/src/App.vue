<template>
  <div id="app">
    <router-view/>
    <tabbar v-if="$route.meta.tbrShow"></tabbar>
  </div>
</template>
<script>
import tabbar from "../src/tabbar/tabbar"
import {obj} from "../static/util"
export default {
  components:{
    tabbar
  },
  meta:{
    tbrShow:true
  },
  name: 'App',
  mounted() {
    obj.setRem()
  }
}

</script>

<style lang="less">
*{margin: 0;padding: 0;}
body{
  font-size:.12rem;
  width: 100%;
}
div#app{
  margin-bottom:1.2rem;
}
div{
  color: green;
  p{
    color: red;
  }
}
</style>

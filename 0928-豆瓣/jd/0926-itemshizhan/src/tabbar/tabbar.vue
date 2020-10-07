<template>
  <div class="tabbarWrap">
    <item mark="home" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/jdimg/icon/icon-home.png">
      </template>
      <template v-slot:activeImg>
        <img src="../assets/jdimg/icon/icon-home-active.png">
      </template>
    </item>
    <item  mark="classify" :sel="selected" @change="getVal">
     <template v-slot:Img>
        <img src="../assets/jdimg/icon/icon-catergry.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/jdimg/icon/icon-catergry-active.png">
      </template>
    </item>
    <item txt="发现" mark="find" :sel="selected" @change="getVal">
     <template v-slot:Img>
        <img src="../assets/jdimg/icon/icon-find.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/jdimg/icon/icon-home-active.png">
      </template>
    </item>
    <item txt="购物车" mark="shopping" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/jdimg/icon/icon-cart.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/jdimg/icon/gouwuche.png">
      </template>
    </item>
    <item txt="我的" mark="mine" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/jdimg/icon/icon-me.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/jdimg/icon/icon-me-active.png">
      </template>
    </item>
  </div>
</template>
<script>
import item from "./item"
// 设置
export default {
  components:{
    item
  },
  data(){
    return{
      selected:0
    }
  },
  methods:{
    getVal:function(val){
     // console.log("mark:"+val);
      this.selected=val
    }
  }
}
</script>
<style>
*{margin: 0;padding: 0;}
.tabbarWrap{
  width: 100%;
  /* height: 1.3rem; */
  position: fixed;
  /* left: 0; */
  bottom:0rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: white;
}
</style>



<template>
  <div class="tabbarWrap">
    <item txt="首页" mark="home" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/img/1.png">
      </template>
      <template v-slot:activeImg>
        <img src="../assets/img/6.png">
      </template>
    </item>
    <item txt="书音影" mark="audio" :sel="selected" @change="getVal">
     <template v-slot:Img>
        <img src="../assets/img/2.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/img/7.png">
      </template>
    </item>
    <item txt="广播" mark="broadcast" :sel="selected" @change="getVal">
     <template v-slot:Img>
        <img src="../assets/img/3.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/img/8.png">
      </template>
    </item>
    <item txt="小组" mark="group" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/img/4.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/img/9.png">
      </template>
    </item>
    <item txt="我的" mark="mine" :sel="selected" @change="getVal">
      <template v-slot:Img>
        <img src="../assets/img/5.png">
      </template>
       <template v-slot:activeImg>
        <img src="../assets/img/10.png">
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
  height: 1.3rem;
  position: fixed;
  /* left: 0; */
  bottom:0rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  background: white;
}
</style>



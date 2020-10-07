<template>
    <div class="itemWrap" @click="clickFn()">
        <span v-show="bol"><slot name="Img"></slot></span>
        <span v-show="!bol"><slot name="activeImg"></slot></span>
    </div>
</template>
<script>
export default {
    props:[,"mark","sel"],
    computed:{
        bol:function(){
            if(this.mark==this.sel){
                return false;
            }
            return true;
        }
    },
    methods:{
        clickFn(){
           // console.log("mark:",this.mark);
           // console.log("sel:",this.sel);
            // 将当前被点击的item的mark值 传递给父级  赋予给select
            this.$emit("change",this.mark)
            this.$router.push('/'+this.mark)
            .catch(err=>{
                return 
            })
        }
    },

}
</script>
<style lang="less">
.itemWrap{
    width:20%;float: left;text-align: center;
}
.itemWrap img{
    width: 1rem;height: 1rem;
}
.itemWrap span{
    font-size: .2rem;
}
.itemWrap .active{color:rgb(66, 189, 86);}
</style>
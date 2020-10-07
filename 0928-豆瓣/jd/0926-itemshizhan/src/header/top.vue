<template>
    <div class="headerWrap">
        <slot name="home">
        </slot>
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style lang="less">
*{margin: 0;padding: 0;}
    .headerWrap{
        width: 100%;
        height:.8rem;
        text-align: center;
        line-height: 1rem;
        box-sizing: border-box;
        top: 0;
        z-index: 2;
        position: absolute;
        img{
            width: .35rem;
            position:absolute;
            z-index: 10;
        }
        img.rightImg{
            top: .23rem;
            right: .1rem;
        }
        img.leftImg{
            top: .23rem;
            right: .5rem;
        }
        font-size: .28rem;
        .homeClass{
            margin-top: .1rem;
            margin-left: .15rem;
            box-sizing: border-box;
            // border: .01rem solid red;
            border-radius: .3rem;
            padding-top: .1rem;
            width: 85%;
            height: .6rem;
            float: left;
            background: white;
        }
        img,input{
            float: left;
        }
        input{
            margin-left: 1.1rem;
            width: 60%;
            height: .4rem;
            box-sizing: border-box;
            border:none;
            color: gray;
            font-size: .28rem;
        }
        img.imgF{
            position: absolute;
            top: .25rem;
            left: .8rem;
        }
        .home_log{
            position: absolute;
            top: .23rem;
            left: .3rem;
        }
        .home_btn{
            border: none;
            background: none;
            color: white;
            font-size: .28rem;
            position: absolute;
            top: .2rem;
            right: .1rem;
        }
    }
</style>
<template>
    <div class="headerWrap">
        <span>{{title}}</span>
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
        border-bottom: 1px solid #ccc;
        background:rgb(247, 247, 247);
        text-align: center;
        line-height: 1rem;
        box-sizing: border-box;
        position: relative;
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
            box-sizing: border-box;
            // border: .01rem solid red;
            border-radius: .1rem;
            padding-top: .1rem;
            width: 90%;
            height: .6rem;
            background: rgb(255, 255, 255);
            float: left;
        }
        img,input{
            float: left;
        }
        input{
            margin-left: .8rem;
            width: 70%;
            height: .4rem;
            box-sizing: border-box;
            border:none;
            color: gray;
            font-size: .28rem;
        }
        img.imgF{
            position: absolute;
            top: .22rem;
            left: .3rem;
        }
        div.bgd{
            box-sizing: border-box;
            padding-top: .1rem;
            padding-left: .1rem;
            width: 100%;
            background: rgb(72, 189, 90);
            height: .8rem;
        }
    }
</style>
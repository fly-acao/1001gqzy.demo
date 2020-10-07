<template>
  <div>
    <div class="newsClass">
    <div class="newLeft">
      <h1>{{ item.title }}</h1>
      <p>{{ item.target.desc }}</p>
      <small>{{ item.target.author.name}}</small>
    </div>
    <div class="newRight">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
  <div class="null_div"></div>
  </div>
</template>

<script>
export default {
  props: [
      "imgSrc",
      "item",
      ],
};
</script>

<style lang="less">
    .newsClass{
        width: 100%;
        display: flex;
        box-sizing: border-box;
        border-bottom: 1px solid gainsboro;
        padding: .3rem .15rem;
        img{
            width: 2rem;
            height: 2rem;
        }
        div{
          box-sizing: border-box;
          h1,p{
            color: gray;
            margin-bottom: .2rem;
          }
        }
        .newLeft{
          flex: 2;
        }
        .newRight{
          flex: 1;
          margin-left: .1rem;
        }
    }
</style>
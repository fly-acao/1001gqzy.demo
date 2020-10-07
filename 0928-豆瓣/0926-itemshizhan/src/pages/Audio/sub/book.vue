<template>
  <div>
      读书
      <div class="book_content">
        <bookChild></bookChild>
      </div>
  </div>
</template>

<script>
import bookChild from './child/bookChild'
export default {
  components:{
    bookChild
  }
}
</script>

<style>

</style>
<template>
  <div class="container-sm header fixed" style="height: 60px;">
    <input type="text" placeholder="search..." style="width: calc(120px + 20vw);">
    <!-- TODO: 导航 -->
    <!-- <button class="btn-small" style="border-radius: 45%;">icon</button> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 10px;
  background-color: #fff;

  &.fixed {
    position: fixed;
  }
}
</style>
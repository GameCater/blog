<template>
  <div class="container-sm border border-primary" style="text-align: center; margin-top: 10px;">
    <h5 style="margin: 10px;">TAGS</h5>
    <div>
      <span class="badge" style="margin: 5px 6px;" v-for="item in 10" :key="item">tag</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
// class="container" style="display: flex; flex-wrap: wrap; justify-content: flex-start;"
</style>
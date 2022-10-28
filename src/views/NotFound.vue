<template>
  <div class="root" style="text-align: center;">
    <h1>NOT FOUND</h1>
    <button class="btn btn-small" @click="back">返回上一页</button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
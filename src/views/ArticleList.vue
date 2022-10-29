<template>
  <div class="container-lg border border-primary" style="margin-top: 60px; padding: 10px 20px;">
    <div class="container" v-for="item in 20" :key="item" style="border-bottom: 2px solid #eee;">
      <router-link to="/home/article/001" class="box">
        <div class="box-content">
          <h2 style="font-size: 2em;">Test Test Test Test Test Test Test Test Test Test Test</h2>
          <p>some description..... some description..... some description..... some description..... some description..... some description.....</p>
        </div>
        <div :class="{'hide': hideImage}">
          <img src="https://unsplash.it/900" style="width: 200px;">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hideImage'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
a {
  background-image: none;
}
.box {
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  &:hover {
    box-shadow: 5px 0 5px -5px #222,
	              -5px 0 5px -5px #222;
  }
}
</style>
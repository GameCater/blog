<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('@/assets/style.scss');
@import url('animate.css');
@import url('../node_modules/papercss/dist/paper.css');
@import url('../node_modules/css.gg/icons/all.css');
@import url('nprogress/nprogress.css');

// 全局icon为行内块
i {
  display: inline-block !important;
  margin-right: 8px;
  vertical-align: baseline;

  font-size: calc(5px + 1vw);
}

// 隐藏元素
.hide {
  display: none;
}
</style>
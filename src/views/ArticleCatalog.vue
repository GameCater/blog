<template>
  <div class="container-sm border border-primary paper" style="text-align: center; margin-top: 10px;" v-if="catalog.length">
    <h4 style="margin: 10px;">CATALOG</h4>
    <ul>
      <li v-for="item in catalog" :key="item.id" :style="`padding-left: ${item.tag - maxTitle + 1}em;`" @click="targetTo(item.id)">{{ item.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [],
      maxTitle: 6
    }
  },
  methods: {
    targetTo(id) {
      const target = `#toc-nav${id}`; 
      const headEl = document.querySelector(target);
      headEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      })
    }
  },
  created() {
    this.$bus.$on('catalog', (catalog, maxTitle) => {
      this.catalog = catalog;
      this.maxTitle = maxTitle;
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
li {
  padding: 2px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;

  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
}
li::before {
  display: none;
}
</style>
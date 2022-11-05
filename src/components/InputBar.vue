<template>
  <div class="container-sm header fixed" style="height: 60px;">
    <select class="select" style="border: none; width: 2px; margin-right: 5px;" v-model="keyword">
      <option value="title">文章标题</option>
      <option value="date">文章日期</option>
    </select>
    <input type="text" placeholder="search..." style="width: calc(120px + 20vw);" v-model="value" @keyup.enter="fetchSearchResults">
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: 'title', // 默认根据文章标题模糊搜索
      value: '',
      paging: {
        page: 1,
        pageSize: 5,
      }
    }
  },
  methods: {
    // 搜索结果
    fetchSearchResults() {
      if (!this.keyword.trim()) return;

      this.$http.get('/article/search', {
        params: {
          keyword: this.keyword,
          value: this.value,
          ...this.paging,
        }
      }).then(response => {
        console.log('Search results',response.data);
        this.$router.push(`/home/search?results=${encodeURIComponent(JSON.stringify(response.data))}&page=${this.paging.page}`);
        this.value = ''; // 重置搜索内容
      })
    }
  },
  created() {
    this.$bus.$on('search', (paging) => {
      this.paging = paging;
      this.fetchSearchResults();
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 10px;
  // background-color: #fff;

  &.fixed {
    position: fixed;
  }

  .select {
    font-size: .8em;
  }
}
</style>
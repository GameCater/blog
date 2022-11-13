<template>
  <div ref="mainBody" class="container-lg border border-primary paper" style="margin-top: 60px; padding: 10px 20px;">
    <!-- 文章列表 -->
    <ArticleCard
      v-for="(article, idx) in articlesInfo.data" 
      :key="idx"
      :article="article"
      :hideImage="hideImage">
    </ArticleCard>
    <p style="text-align: center; cursor: pointer;">{{ moreTip }}</p>
    <div class="bottom" v-if="articlesInfo.data.length">
      <button class="paper-btn btn-primary-outline btn-small" @click="prev">上一页</button>
      <button class="paper-btn btn-primary-outline btn-small" @click="next">下一页</button>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue';
export default {
  name: 'SearchResults',
  props: ['hideImage'],
  components: {
    ArticleCard,
  },
  data() {
    return {
      articlesInfo: {
        data: [],
        total: 0,
        maxPage: 1
      },
      paging: {
        pageSize: 5,
        page: 1
      },
    }
  },
  computed: {
    moreTip(val) {
      if (this.articlesInfo.total === 0) {
        return '搜索结果为空';
      }
    }
  },
  methods: {
    prev() {

    },
    next() {
      
    },
    loadMore() {
      if (this.paging.page >= this.articlesInfo.maxPage) return;
      
      this.paging.page += 1;

      this.$bus.$emit('search', this.paging);
    }
  },
  mounted() {
    let { results, page } = this.$route.query;
    results = JSON.parse(results);
    this.articlesInfo = results;
    console.log(results);
    if (page)
      this.paging.page = Number(page);
  },
  beforeUpdate() {
    // 通知父组件自己的高度
    this.$nextTick(() => {
      const el = this.$refs.mainBody;
      const height = window.getComputedStyle(el).height;
      this.$bus.$emit('on-height-change', height);
    })
  },
}
</script>

<style lang="scss" scoped>
.bottom {
  padding: 5px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  & > button {
    outline: none;
    border: none;
    box-shadow: none;

    &:hover {
      transform: none;
      background: none;
    }
  }
}
</style>
<template>
  <div class="container-lg border border-primary" style="margin-top: 60px; padding: 10px 20px;">
    <!-- 文章列表 -->
    <ArticleCard
      v-for="(article, idx) in articlesInfo.data" 
      :key="idx"
      :article="article"
      :hideImage="hideImage">
    </ArticleCard>
    <p style="text-align: center; cursor: pointer;" @click="loadMore">{{ moreTip }}</p>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue';
export default {
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
        pageSize: 3,
        page: 1
      }
    }
  },
  computed: {
    moreTip(val) {
      if (this.paging.page >= this.articlesInfo.maxPage) {
        return '已加载全部';
      } else {
        return '加载更多。。。';
      }
    }
  },
  methods: {
    fetchArticles() {
      this.$http.get('/article/list', {
        params: {
          ...this.paging
        }
      }).then((response) => {
        const { data } = response;
        if (!data.data) return;
        const handled = data.data.map(articleObj => {
          articleObj.link = articleObj._id;
          return articleObj;
        });
        this.articlesInfo.data.push(...handled);
        this.articlesInfo.total = data.total;
        this.articlesInfo.maxPage = data.maxPage;
      })
    },
    loadMore() {
      if (this.paging.page >= this.articlesInfo.maxPage) return;
      
      this.paging.page += 1;
      this.fetchArticles();
    }
  },
  created() {
    this.fetchArticles();
  }
}
</script>

<style lang="scss" scoped>

</style>
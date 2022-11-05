<template>
  <div class="container-lg border border-primary paper" style="margin-top: 60px; padding: 10px 20px;">
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
        pageSize: 10,
        page: 1
      },
      selectedTags: [],
      articleDataStack: [],
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
  watch: {
    selectedTags(val, oldVal) {
      // console.log(val === oldVal ,val.length, oldVal.length);
      // 筛选 选择包含选中标签的文章 标签越多 精确度越高
      this.articlesInfo.data = this.articlesInfo.data.filter((article) => {
        return val.every(tagId => {
          let i = 0;
          for (; i < article.tags.length; i ++) {
            if (article.tags[i]._id === tagId) {
              return true;
            }
          }
          if (i === article.tags.length) return false;
        });
      });

      // 撤销标签
      if (val.length < oldVal.length) {
        this.articleDataStack.pop();
        const data = [...this.articleDataStack[this.articleDataStack.length - 1]];

        this.articlesInfo.data = data;
      } else {
        // 选择标签时
        this.articleDataStack.push([...this.articlesInfo.data]);
      }
    },
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

        // 备份一份数据
        this.articleDataStack.splice(0, 1, [...this.articlesInfo.data]);
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
  },
  mounted() {
    this.$bus.$on('tagsChanged', (selectedTags) => {
      // console.log('监听到tagsChanged', selectedTags);
      this.selectedTags = [...selectedTags];
    });
  },
  beforeDestroy() {
    this.$bus.$off('tagsChanged');
  }
}
</script>

<style lang="scss" scoped>

</style>
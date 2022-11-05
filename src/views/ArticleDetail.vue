<template>
  <div>
    <div class="container-lg border border-primary paper" style="margin-top: 60px; padding: 10px 20px;">
      <div class="content" v-html="content">

      </div>
    </div>
    <div class="container-lg border border-primary paper" style="height: 300px; margin-top: 20px;">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    fetchArticleDetail() {
      this.$http.get(`/article/${this.$route.params.id}`).then(response => {
        // console.log(response.data);
        const { content } = response.data.data;
        this.content = content;
      })
    }
  },
  mounted() {
    this.fetchArticleDetail();
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  font-family: "Microsoft YaHei", arial, sans-serif;
  color: #444444;
  padding: 0 10px;
  font-size: .9em;
}
</style>
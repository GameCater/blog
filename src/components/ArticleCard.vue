<template>
  <div class="card-wrap" style="border-bottom: 2px solid #eee;" v-if="article">
    <router-link :to="`/home/article/${article._id}`" class="box">
      <div class="box-content">
        <h2 style="font-size: 2em;">{{ article.title }}</h2>
        <p>{{ article.introduction }}</p>
        <div class="infos animate__animated animate__zoomIn">
          <div class="date">
            <i class="gg-calendar-dates"></i><span> {{ article.date }} </span>
          </div>
          <div class="tags">
            <i class="gg-tag"></i>
            <span v-if="article.tags.length">
              <span v-for="(tag, idx) in article.tags" :key="idx" style="margin: 0 2px; padding: 0 3px;">{{ tag.name }}</span>
            </span>
            <span v-else>undefined</span>
          </div>
          <div class="comments">
            <i class="gg-comment"></i><span> {{ article.comment }} </span>
          </div>
        </div>
      </div>
      <div :class="{'hide': hideImage}">
        <img :src="article.cover" style="width: 200px;">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object,
    hideImage: Boolean
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
a {
  background-image: none;
  color: #222;
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
    
    .infos {
      display: block;
    }
  }
}

.infos {
  padding: 10px 0;
  display: none;

  & > div {
    display: inline-block;
    margin-right: 12px;

    font-size: calc(5px + 1vw);

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
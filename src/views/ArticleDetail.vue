<template>
  <div>
    <div class="container-lg border border-primary paper" style="margin-top: 60px; padding: 10px 20px;">
      <div class="title">
        {{ article.title }}
      </div>
      <!-- 文章信息 -->
      <div class="infos">
        <div class="date">
          <i class="gg-calendar-dates"></i><span> {{ article.date }} </span>
        </div>
        <div class="tags">
          <i class="gg-tag"></i>
          <span v-if="article.tags.length">
            <span v-for="(tag, idx) in article.tags" :key="idx" style="margin: 0 2px; padding: 0 3px;">{{ tag.name
            }}</span>
          </span>
          <span v-else>undefined</span>
        </div>
        <div class="comments">
          <i class="gg-comment"></i><span> {{ article.comment }} </span>
        </div>
      </div>

      <!-- 文章内容 -->
      <div ref="mainBody" class="content" v-html="md2html"></div>
    </div>
    <div class="container-lg border border-primary paper" style="height: 300px; margin-top: 20px;">

    </div>
  </div>
</template>

<script>
import { marked } from 'marked';
import hljs from 'highlight.js';

export default {
  data() {
    return {
      article: {
        tags: [],
        content: '',
        body: '',
        date: '',
        comment: 0,
        html: ''
      },
      maxTitle: 6, // 存储文章最大标签
      toc: [], // 文章所有标签
    }
  },
  computed: {
    // md解析为html
    md2html() {
      // return marked.parse(this.article.body || '');
      return this.article.html;
    }
  },
  watch: {
    toc() {
      this.$bus.$emit('catalog', this.toc, this.maxTitle);
    }
  },
  methods: {
    fetchArticleDetail() {
      this.$http.get(`/article/${this.$route.params.id}`).then(response => {
        console.log(response.data.data);
        this.article = response.data.data;
      })
    },
    initialMarked() {
      const renderer = new marked.Renderer();
      let anchor = 0;

      // 重写heading用于生成导航
      /*
        text 标题文本
        level 标题等级 h1~h6
      */
      renderer.heading = (text, level, raw) => {
        if (level < this.maxTitle) {
          this.maxTitle = level;
        }
        anchor += 1; // 锚点自增
        this.toc.push({
          id: anchor,
          text,
          tag: level,
        });
        return `<h${level} id='toc-nav${anchor}'>${text}</h${level}>`;
      }

      // 重写a标签 新标签页打开
      renderer.link = (href, title, text) => {
        return `<a href='${href}' title='${text}' target='_blank'>${text}</a>`;
      }

      marked.setOptions({
        renderer: renderer,
        highlight: function (code, lang) { // 语法高亮
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        },
        langPrefix: 'hljs language-',
        pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
        gfm: true, // 允许 Git Hub标准的markdown.
        breaks: false, // 允许回车换行。该选项要求 gfm 为true。
        smartypants: false, // 使用更为时髦的标点，比如在引用语法中加入破折号。
        xhtml: false
      });
    }
  },
  mounted() {
    this.fetchArticleDetail();
    this.initialMarked();
  },
  beforeUpdate() {
    // 通知父组件自己的高度
    this.$nextTick(() => {
      const el = this.$refs.mainBody;
      const height = window.getComputedStyle(el).height;
      this.$bus.$emit('on-height-change', height);
    })
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding: 15px;
  font-size: 1.6rem;
}

.content {
  margin: 0 auto;
  font-family: "Microsoft YaHei", arial, sans-serif;
  color: #444444;
  padding: 0 15px;
  font-size: .9em;
}

.infos {
  padding: 5px 15px;

  &>div {
    display: inline-block;
    margin-right: 12px;
    color: #aaa;

    font-size: .9rem;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.infos::after {
  content: ' ';
  display: block;
  border: 1px solid #ddd;
  margin: 5px 0 0;
}
</style>
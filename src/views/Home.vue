<template>
  <div class="root" id="#top">
    <!-- 主体 -->
    <div style="width: 80vw; margin: 0 auto; min-height: calc(100vh - 50px);">
      <!--  style="min-width: 400px;" -->
      <div class="row flex-top flex-spaces">
        <!-- 侧边栏 -->
        <div :class="{'hide': hideSide, 'col': true, 'md-3': true, 'aside': true}" style="min-width: 250px;">
          <!-- 站长信息 -->
          <AvatarBox></AvatarBox>
          <!-- 标签云 -->
          <TagsBox></TagsBox>
        </div>
        <!-- 文章栏 -->
        <div class="col sm-12 md-9">
          <!-- 搜索框 导航 -->
          <InputBar></InputBar>
          <!-- 列表 文章内容 -->
          <router-view :hideImage="hideImage"></router-view>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>

    <!-- toTop -->
    <div class="to-top">
      <span @click="backTop" class="paper-btn margin">^</span>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import AvatarBox from '@/components/AvatarBox.vue';
import TagsBox from '@/components/TagsBox.vue';
import InputBar from '@/components/InputBar.vue';
export default {
  name: 'Home',
  components: { Footer, AvatarBox, TagsBox, InputBar },
  data() {
    return {
      hideSide: false, // 隐藏侧边栏
      screenWidth: document.body.clientWidth, // 获取视口宽度
      timer: false, // 获取视口宽度计时器
      hideImage: false // 隐藏媒体元素
    }
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.timer = true;
        this.screenWidth = val;
        this.transformLayout();
        setTimeout(() => {
          this.timer = false;
        }, 50);
      }
    }
  },
  mounted() {
    let that = this;
    window.onresize = () => {
      return (() => {
          window.screenWidth = document.body.clientWidth;
          that.screenWidth = window.screenWidth
        }
      )();
    }
  },
  methods: {
    // 变换布局
    transformLayout() {
      if (this.screenWidth < 1280) {
        this.hideSide = true;
      } else {
        this.hideSide = false;
      }
      if (this.screenWidth < 685) {
        this.hideImage = true;
      } else {
        this.hideImage = false;
      }
    },
    // 回到顶部
    backTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timer = setInterval(() => {
        document.documentElement.scrollTop = document.body.scrollTop = top -= 30;
        if (top <= 0) {
          clearInterval(timer);
        }
      }, 10);
    }
  },
  created() {
    this.transformLayout();
  }
}
</script>

<style lang="scss" scoped>

.to-top {
  position: fixed;
  right: 50px;
  bottom: 10px;
  border-radius: 50%;
  padding: 1vw;
}
.root {
  font-size: calc(0.6rem + 0.5vw) !important;
}
</style>
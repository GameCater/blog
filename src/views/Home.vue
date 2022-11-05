<template>
  <div class="root">
    <!-- 主体 -->
    <div style="width: 80vw; margin: 0 auto; min-height: 100vh;">
      <!--  style="min-width: 400px;" -->
      <div class="row flex-top flex-spaces">
        <!-- 侧边栏 -->
        <div :class="{'hide': hideSide, 'col': true, 'md-3': true, 'aside': true}" style="min-width: 250px;">
          <!-- 站长信息 -->
          <AvatarBox class="paper"></AvatarBox>
          <!-- 标签云 -->
          <TagsBox class="paper"></TagsBox>
        </div>
        <!-- 文章栏 -->
        <div class="col sm-12 md-9">
          <!-- 搜索框 导航 -->
          <InputBar></InputBar>
          <!-- 列表 文章内容 -->
          <router-view :hideImage="hideImage" :key="$route.fullPath"></router-view>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <Footer></Footer>

    <!-- toTop -->
    <div class="tools">
      <span class="paper-btn btn-small">工具推荐</span>
      <span :class="{ 'tool-hide': $route.fullPath === '/home' }" @click="backHome" class="paper-btn btn-small animate__animated animate__fadeInRight">返回首页</span>
      <span @click="switchThemeMode" class="paper-btn btn-small">切换主题</span>
      <span @click="backTop" class="paper-btn btn-small">回到顶部</span>
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
      hideImage: false, // 隐藏媒体元素
      themeMode: true, // true 默认白色主题  false 黑色主题
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
    },
    // 回到首页
    backHome() {
      this.$router.push('/home');
    },
    // 切换深色模式 有问题
    switchThemeMode() {
      // class='dark'
      this.themeMode = !this.themeMode;
      const htmlEl = document.documentElement;
      if (!this.themeMode) {
        htmlEl.classList.add('dark');
      } else {
        htmlEl.classList.remove('dark');
      }
    }
  },
  created() {
    this.transformLayout();
  }
}
</script>

<style lang="scss" scoped>
.tool-hide {
  display: none;
}

.tools {
  position: fixed;
  right: 5vw;
  bottom: 10px;
  padding: 1vw;

  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-content: flex-start;
  align-items: center;

  & > span {
    height: calc(40px + .5vw);
    width: calc(40px + .5vw);
    text-align: center;
    line-height: 1.25;

    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 3px;
  }
}
.root {
  font-size: calc(0.6rem + 0.5vw) !important;
  position: relative;
}

</style>
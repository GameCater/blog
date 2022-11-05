<template>
    <div class="container-sm border border-primary" style="text-align: center;">
      <h4 style="margin: 10px;">AVATAR</h4>
      <div class="avatar">
        <img src="@/assets/logo_v0.5.png"/>
      </div>
      <h5 style="margin: 5px;">Alo</h5>
      <div class="container-sm" style="margin: 10px;">
        <label class="paper-btn btn-small" for="modal">Contact Me</label>
      </div>

      <!-- 模态框 -->
      <input class="modal-state" id="modal" type="checkbox">
      <div class="modal">
        <label class="modal-bg" for="modal"></label>
        <div class="modal-body">
          <label class="btn-close" for="modal">X</label>
          <h4 class="modal-title">联系方式</h4>
          <p class="modal-text">QQ 、微信、Twitter、Github、Gitee</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      avatarHovered: false
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  margin: 0 auto;
  height: 50%;
  width: 50%;
  position: relative;
}

.avatar img {
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: none;
}

@keyframes cycle-colors {
  0% { border-color: hsl(0, 100%, 50%); }
  15% { border-color: hsl(50, 100%, 50%); }
  30% { border-color: hsl(60, 100%, 50%); }
  45% { border-color: hsl(90, 100%, 50%); }
  60% { border-color: hsl(180, 100%, 50%); }
  75% { border-color: hsl(200, 100%, 50%); }
  90% { border-color: hsl(270, 100%, 50%); }
  100% { border-color: hsl(360, 100%, 50%); }
}

@keyframes pulse {
  to {
    opacity: 0;
    transform: scale(1);
  }
}

.avatar::before,
.avatar::after {
  animation: pulse 2s linear infinite;
  border: #fff solid 8px;
  border-radius: 9999px;
  box-sizing: border-box;
  content: ' ';
  height: 140%;
  left: -20%;
  opacity: .6;
  position: absolute;
  top: -20%;
  transform: scale(0.714);
  width: 140%;
  z-index: 1;
}

.avatar::after {
  animation-delay: 1s;
}

.avatar:hover::before,
.avatar:hover::after {
  animation: pulse 1s linear infinite, cycle-colors 6s linear infinite;
}

.avatar:hover::after {
  animation-delay: .5s;
}
</style>
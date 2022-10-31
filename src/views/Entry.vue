<template>
  <div class="body">
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, idx) in starsCount" :key="idx"></div>
    </div>
    <!-- <button class="btn" @click="toHome" style="position: relative; left: 50%; top: 50%; opacity: 0.2">Enter</button> -->
    <!-- 音乐播放器 from codePen -->
    <div id="player" class="animate__animated animate__fadeIn animate__slow" @click="controlAudio($refs.audio)">
      <span id="playback" :class="mode ? audioPlay : audioPause"></span>
    </div>
    <audio ref="audio">
      <source id="sourceMp3" type="audio/mp3" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  data() {
    return {
      starsCount: 800, // 星星数量
      distance: 900, // 间距

      audioPlay: {
        'fa': true,
        'fa-pause': true,
        'fa-lg': true,
        'beat': true,
      },
      audioPause: {
        'fa': true,
        'fa-play': true,
        'fa-lg': true,
      },
      mode: false, // 播放模式 true 为播放
    }
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    controlAudio(el) {
      if (el.paused) {
        el.play();
        this.mode = true;
      } else {
        el.pause();
        this.mode = false;
      }
    },
    genStars() {
      // 挂载所有星星
      let starNodes = Array.from(this.$refs.starsRef.children);
      starNodes.forEach((item) => {
        let speed = Math.random() * 1 + 0.2;
        let thisDistance = this.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `
          translate3d(0, 0, -${thisDistance}px)
          rotateY(${Math.random() * 360}deg)
          rotateX(${Math.random() * -50}deg)
          scale(${speed}, ${speed})
        `;
      });
    },
    initialAudioPlayer() {
      var song = this.$refs.audio;

      song.load();
    
      song.src = 'http://music.163.com/song/media/outer/url?id=1491607307.mp3';
      song.loop = true; // 循环播放
      song.autoplay = true;
    
      // song.play();
    
      song.addEventListener('ended', function () {
        song.pause();
        song.currentTime = 0;
        this.mode = true;
      });
    },
    removeAudio() {
      
    }
  },
  mounted() {
    this.genStars();

    this.initialAudioPlayer();
  },
  beforeDestroy() {

  }

  
}
</script>

<style lang="scss" scoped>
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #1b2947);
  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6);
  background-attachment: fixed;
  overflow: hidden;
}

@keyframes rotate {
  0% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(-360deg);
  }
}

.stars {
  transform: perspective(500px);
  transform-style: preserve-3d;
  position: absolute;
  perspective-origin: 50% 100%;
  left: 45%;
  animation: rotate 90s infinite linear;
  bottom: 0;
}

.star {
  width: 2px;
  height: 2px;
  background: #f7f7b6;
  position: absolute;
  left: 0;
  top: 0;
  backface-visibility: hidden;
}


@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css);

#player {
  position: relative;
  top: 65%;
  left: 50%;
  margin: -80px 0 0 -60px;
}

#player:after {
  position: absolute;
  content:'';
  width: 150px;
  height: 150px;
  left: 0;
  // background: linear-gradient(-45deg, #f7f7b6 0%, #e96f92 100%);
  border-radius: 25px;
  box-shadow: 0 0 20px -5px #fff, inset 0 0 10px #fff, inset 0 70px rgba(255, 255, 255, 0.2);
  transform: rotate(45deg);
}

#playback {
  position: absolute;
  color: #fff;
  opacity: .5;
  font-size: 3.7rem;
}
.fa-play {
  top: 45px;
  left: 55px;
}
.fa-pause {
  top: 45px;
  left: 40px;
}
.fa-lg {
  font-size: 5.3em;
}
@keyframes beat {
  0% {
      transform: scale(1);
      box-shadow: 0 0 10px #eee;
  }
  50% {
      transform: scale(1.1);
      box-shadow: 0 0 40px #eee;

  }
  100% {
      transform: scale(1);
      box-shadow: 0 0 10px #eee;
  }
}
.beat {
  animation: beat 0.8s ease 0s infinite normal;
}

</style>
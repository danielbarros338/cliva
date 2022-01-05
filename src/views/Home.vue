<template>
  <div class="home">
    <div class="container1">
      <WelcomeScreen :gear-rotate="rotate" />
    </div>
    <div class="container2">
      <img
        class="img_matheus"
        :src="require('@./../../public/img/mateus2.jpg')"
        alt="Logotipo Cliva"
      />
      <YoutubePlayer />
      <img
        class="img_icaro"
        :src="require('@./../../public/img/icaro.jpg')"
        alt="Logotipo Cliva"
      />
    </div>
    <div class="container3">
      <Diary />
    </div>
    <div class="footer">
      <p>
        Cliva Oficial 
        <img class="copy" :src="require('@./../../public/svgs/copyrights.svg')" /> 
        | Todos os direitos reservados.
      </p>
    </div>
  </div>
</template>

<script>
import Diary from "@/components/Diary.vue";
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import WelcomeScreen from "@/components/WelcomeScreen.vue";

export default {
  name: "Home",
  data() {
    return {
      rotate: 0,
    };
  },
  components: {
    YoutubePlayer,
    WelcomeScreen,
    Diary
  },
  created() {
    window.addEventListener("scroll", this.rotateGear);
  },
  methods: {
    rotateGear() {
      if (this.rotate < window.scrollY) this.rotate++;
      if (this.rotate > window.scrollY) this.rotate--;
      this.rotate = window.scrollY;
    },
  },
};
</script>

<style scoped>
/*@keyframes spinner {
  to {transform: rotate(360deg)};
}*/
.container1 {
  background-color: var(--color-primary);
}
.copy {
  height: 10px;
  margin-bottom: 2px;
}
.footer {
  background-color: var(--color-primary);
}
@media (max-width: 450px) {
  .img_matheus {
    height: 32.7vh;
  }
  .img_icaro {
    margin-top: -5px;
    height: 42.5vh;
  }
  .container3 {
    margin-top: -7px;
  }
}

@media (min-width: 1000px) {
  .container1 img {
    height: 30vh;
  }
}
@media (min-width: 500px) {
  .container1,
  .container2,
  .container3 {
    display: none;
  }
}
</style>

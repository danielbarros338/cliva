<template>
  <div class="home">
    <div class="container1">
      <WelcomeScreen :gear-rotate="rotate" />
    </div>
    <div class="container2">
      <img
        class="img_matheus"
        :src="require(`@./../../public/img/${imgs[0].img}`)"
        alt="Logotipo Cliva"
      />
      <YoutubePlayer />
      <img
        class="img_icaro"
        :src="require(`@./../../public/img/${imgs[1].img}`)"
        alt="Logotipo Cliva"
      />
    </div>
    <div class="container3">
      <Diary />
    </div>
    <div class="footer">
      <p>
        Cliva Oficial
        <img
          class="copy"
          :src="require('@./../../public/svgs/copyrights.svg')"
        />
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
      imgs: [
        {
          img: "mateus2.jpg",
        },
        {
          img: "icaro.jpg",
        },
      ],
    };
  },
  components: {
    YoutubePlayer,
    WelcomeScreen,
    Diary,
  },
  created() {
    window.addEventListener("scroll", this.rotateGear);
    this.checkScreen();
  },
  updated() {
    this.checkScreen();
  },
  methods: {
    rotateGear() {
      if (this.rotate < window.scrollY) this.rotate++;
      if (this.rotate > window.scrollY) this.rotate--;
      this.rotate = window.scrollY;
    },
    checkScreen() {
      window.innerWidth >= 1000
        ? (this.imgs[0].img = "mateusLg.jpg")(
            (this.imgs[1].img = "icaroLg.jpg")
          )
        : (this.imgs[0].img = "mateus2.jpg")((this.imgs[1].img = "icaro.jpg"));
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
.img_matheus,
.img_icaro {
  width: 100%;
  height: auto;
}
.footer {
  background-color: var(--color-primary);
}
@media (max-width: 450px) {
  .container3 {
    margin-top: -7px;
  }
  .img_icaro {
    margin-top: -5px;
  }
  .footer {
    margin-top: -7px;
  }
}
@media (min-width: 450px) {
  .img_icaro {
    margin-top: -6px;
  }
  .container3 {
    margin-top: -7px;
  }
}
</style>

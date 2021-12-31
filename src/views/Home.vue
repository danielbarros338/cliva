<template>
  <div class="home">
    <div class="container1">
      <img
        class="logo_cliva"
        :src="require('@./../../public/svgs/cliva.svg')"
        alt="Logotipo Cliva"
      />
      <img
        :style="`transform: rotate(${rotate}deg)`"
        class="gear"
        :src="require('@./../../public/svgs/gear.svg')"
        alt="Engrenagem"
      />
      <h3>EU SOU PORQUE NÓS SOMOS</h3>
      <div class="portal_containers">
        <a v-for="(portal, index) of portals" :key="index" :href="portal.url">
          <img
            class="portal_icons"
            :src="require(`@./../../public/svgs/${portal.svg}`)"
            alt="Facebook"
          />
        </a>
      </div>
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
  </div>
</template>

<script>
// import Diary from "@/components/Diary.vue";
import YoutubePlayer from "@/components/YoutubePlayer.vue";

export default {
  name: "Home",
  data() {
    return {
      portals: [
        {
          url: "https://www.facebook.com/bandacliva/",
          svg: "facebook.svg",
        },
        {
          url: "https://www.instagram.com/clivaoficial/",
          svg: "instagram.svg",
        },
        {
          url: "https://www.youtube.com/channel/UC97Uz26S362xo_hlusOQhMQ",
          svg: "youtube.svg",
        },
      ],
      rotate: 0,
    };
  },
  components: {
    YoutubePlayer,
    // Diary
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
.container1 .logo_cliva {
  width: 100vw;
}
.container2 {
  height: 500px;
}
.portal_containers {
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 450px) {
  .container1 .gear {
    margin: 140px 0;
    /*animation: spinner 7s linear infinite;*/
  }
  .portal_icons {
    height: 60px;
    margin: 50px 0;
  }
  .img_matheus {
    height: 32.7vh;
  }
  .img_icaro {
    margin-top: -5px;
    height: 42vh;
  }
}

@media (min-width: 1000px) {
  .container1 img {
    height: 30vh;
  }
}
</style>

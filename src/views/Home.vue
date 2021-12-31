<template>
  <div class="home">
    <div class="container1">
      <img class="logo_cliva" :src="require('@./../../public/images/cliva.svg')" alt="Logotipo Cliva">
      <img :style="`transform: rotate(${rotate}deg)`" class="gear" :src="require('@./../../public/images/gear.svg')" alt="Engrenagem">
      <div class="portal_containers">
        <a v-for="(portal, index) of portals" :key="index" :href="portal.url">
          <img class="portal_icons" :src="require(`@./../../public/images/${portal.svg}`)" alt="Facebook">
        </a>
      </div>
    </div>
    <div class="container2"></div>
  </div>
</template>

<script>
// import Diary from "@/components/Diary.vue";

export default {
  name: "Home",
  data() {
    return {
      portals: [
        { 
          url: "https://www.facebook.com/bandacliva/",
          svg: "facebook.svg"
        },{
          url: "https://www.instagram.com/clivaoficial/",
          svg: "instagram.svg"
        },{
          url: "https://www.youtube.com/channel/UC97Uz26S362xo_hlusOQhMQ",
          svg: "youtube.svg"
        } 
      ],
      rotate: 0
    }
  },
  components: {
    // Diary
  },
  created() {
    window.addEventListener('scroll', this.rotateGear);
  },
  methods: {
    rotateGear() {
      if (this.rotate < window.scrollY) this.rotate++;
      if (this.rotate > window.scrollY) this.rotate--;
      this.rotate = window.scrollY;
    }
  }
}
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
    margin: 130px 0;
    /*animation: spinner 7s linear infinite;*/
  }
  .portal_icons {
    height: 30px;
  }
}

@media (min-width: 1000px) {
  .container1 img {
    height: 30vh;
  }
}
</style>

<template>
  <div class="home">
    <div class="container1">
      <img class="logo_cliva" :src="require('@./../../public/images/cliva.svg')" alt="Logotipo Cliva">
      <div class="portal_containers">
        <a v-for="(portal, index) of portals" :key="index" :href="portal.url">
          <img class="portal_icons" :src="require(`@./../../public/images/${portal.svg}`)" alt="Facebook">
        </a>
      </div>
    </div>
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
      ]
    }
  },
  components: {
    // Diary
  }
}
</script>

<style scoped>
.container1 {
  background-color: var(--color-primary);
}
.container1 .logo_cliva {
  width: 100vw;
}
.portal_containers {
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 450px) {
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

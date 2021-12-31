<template>
  <div class="home">
    <div class="container1">
      <img class="logoCliva" :src="require('@./../../public/images/cliva.svg')" alt="Logotipo Cliva">
      <span>
        <a>
          <img class="portal_icons" :src="require(`@./../../public/images/instagram.svg`)" alt="Facebook">
        </a>
      </span>
    </div>
  </div>
</template>

<script>
// import Diary from "@/components/Diary.vue";

export default {
  name: "Home",
  data() {
    return {
      url: [
        "https://www.facebook.com/bandacliva/",
        "https://www.instagram.com/clivaoficial/",
        "https://www.youtube.com/channel/UC97Uz26S362xo_hlusOQhMQ"
      ],
      svgs: [
        "facebook.svg",
        "instragram.svg",
        "youtube.svg"
        // "whatsapp.svg"
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
.container1 img {
  width: 100vw;
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

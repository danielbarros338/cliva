<template>
  <div class="container">
    <img
      class="logo_cliva"
      :src="require(`@./../../public${imgs[0].urlPrin}`)"
      alt="Logotipo Cliva"
    />
    <img
      :style="`transform: rotate(${gearRotate}deg)`"
      class="gear"
      :src="require(`@./../../public${imgs[1].urlPrin}`)"
      alt="Engrenagem"
    />
    <h3 class="phrase_ubuntu">EU SOU PORQUE NÓS SOMOS</h3>
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
</template>

<script>
export default {
  name: "WelcomeScreen",
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
      imgs: [
        {
          urlPrin: "/svgs/cliva.svg"
        },{
          urlPrin: "/svgs/gear.svg"
        }
      ]
    };
  },
  props: {
    gearRotate: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.container .logo_cliva {
  width: 100vw;
}
.portal_containers {
  display: flex;
  justify-content: space-evenly;
}

@media (max-width: 450px) {
  .container .gear {
    margin: 140px 0;
    /*animation: spinner 7s linear infinite;*/
  }
  .portal_icons {
    height: 60px;
    margin: 50px 0;
  }
}
@media (min-width: 450px) {
  .container .gear {
    margin: 140px 0;
  }
  .portal_icons {
    height: 80px;
    margin: 50px 0;
  }
}
@media (min-width: 650px) {
  .container .logo_cliva {
    width: 98vw;
  }
}
@media (min-width: 1000px) { 
  .container .logo_cliva {
    width: 98.7vw;
  }
  .container .gear {
    height: 400px;
    /*animation: spinner 7s linear infinite;*/
  }
  .portal_icons {
    height: 170px;
    margin: 70px 0;
  }
  .phrase_ubuntu {
    font-size: 56px;
  }
}
</style>

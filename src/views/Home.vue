<template>
  <div class="home">
    <div @click="transformBg" :class="['container1', { bg_click: bgClick }]">
      <WelcomeDialog />
    </div>
  </div>
</template>

<script>
import WelcomeDialog from '@/components/WelcomeDialog'

export default {
  name: "Home",
  data() {
    return {
      bgClick: false
    }
  },
  components: {
    WelcomeDialog
  },
  methods: {
    transformBg()  {
      this.bgClick = !this.bgClick;
    }
  }
};
</script>

<style scoped>
.container1 {
  height: 100vh;
  width: 100vw;
  background-image: url("./../../public/images/skull.svg");
  background-size: cover;
  background-attachment: scroll;
  transition: ease-out 1s all;
}
.bg_click {
  background-color: #fff;
}
</style>

<template>
  <div class="home">
    <div @click="transformBg" :class="['container1', { bg_click: bgClick }]">
      <WelcomeCover />
      <div v-if="activeContent">
        <h1>Colocar logo da cliva</h1>
        <h1>**Colocar uma playlist?**</h1>
        <h1>VideoClipe</h1>
        <h1>Agenda de shows</h1>
        <h1>Capa dos EP's</h1>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeCover from '@/components/WelcomeCover'

export default {
  name: "Home",
  data() {
    return {
      bgClick: false,
      activeContent: false
    }
  },
  components: {
    WelcomeCover
  },
  methods: {
    transformBg()  {
      this.bgClick = !this.bgClick;
      setTimeout(() => this.activeContent = !this.activeContent, 2000);
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
  background-color: #fff;
  transition: ease-out 1.5s all;
}
.bg_click {
  background-color: var(--color-secondary);
}
h1 {
  color: #fff;
}
</style>

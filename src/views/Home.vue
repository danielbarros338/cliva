<template>
  <div class="home">
    <div class="container1">
      <img class="logoCliva" :src="require('@./../../public/images/cliva.svg')" alt="Logotipo Cliva">
      <Diary />
    </div>
  </div>
</template>

<script>
import Diary from "@/components/Diary.vue";

export default {
  name: "Home",
  components: {
    Diary
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

@media (min-width: 1000px) {
  .container1 img {
    height: 30vh;
  }
}
</style>

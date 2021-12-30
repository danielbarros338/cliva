<template>
  <button @click="hide" :class="['cover', { close: isOpen }]">
    <h1 :class="[{ close: isOpen }]">EU SOU PORQUE NÓS SOMOS</h1>
    <img :class="[{ close: isOpen }]" :src="require('@./../../public/images/gear.svg')" alt="">
  </button>
</template>

<script>
export default {
  name: "WelcomeCover",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    hide() {
      if (this.isOpen) return;
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
h1 {
  color: #fff;
}
.cover {
  height: 100vh;
  width: 100vw;
  background-color: var(--color-primary);
  border: none;
  transition: ease 1s all;
}
.close {
  opacity: 0;
  width: 0;
}
</style>
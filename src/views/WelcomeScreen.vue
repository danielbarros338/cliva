<template>
  <button v-if="show" @click="hide" :class="['cover', { close: isOpen }]">
    <h1 :class="[{ close: isOpen }]">EU SOU PORQUE NÓS SOMOS</h1>
    <img
      :class="[{ close: isOpen }]"
      :src="require('@./../../public/images/gear.svg')"
      alt=""
    />
  </button>
</template>

<script>
export default {
  name: "WelcomeScreen",
  data() {
    return {
      isOpen: false,
      show: true,
    };
  },
  methods: {
    hide() {
      this.isOpen = !this.isOpen;
      setTimeout(() => {
        this.$router.push("home");
      }, 400);
    },
  },
};
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
}
.close {
  transition: ease 1s all;
  opacity: 0;
}
</style>

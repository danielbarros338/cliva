<template>
  <div class="home">
    <div class="container1">
    </div>
    <div class="container2"></div>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped>
.container1,
.container2 {
  height: 100vh;
  width: 100vw;
}
.container1 {
  background-image: url("./../../public/images/skull.svg");
  background-size: cover;
  background-attachment: scroll;
}
</style>

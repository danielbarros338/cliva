<template>
  <div>
    <iframe
      src="https://www.youtube.com/embed/yaD8uLygi1g"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "YoutubePlayer",
};
</script>

<style scoped>
@media (max-width: 450px) {
  iframe {
    margin-top: -6px;
    margin-bottom: -1px;
    height: auto;
    width: 100%;
  }
}
@media (min-width: 450px) {
  iframe {
    margin: -6px 0;
    height: auto;
    width: 100%;
  }
}
@media (min-width: 650px) {
  iframe {
    margin: -6px 0;
    height: 500px;
    width: 100%;
  }
}
</style>

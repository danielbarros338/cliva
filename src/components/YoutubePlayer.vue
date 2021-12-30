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
  name: "YoutubePlayer"
}
</script>

<style scoped>
 @media (max-width: 400px) {
   iframe {
     width: 80vw;
   }
 }
</style>
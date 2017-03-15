<template>
  <div class="carousel-item">
    <img
      :src="image.src"
      :alt="image.alt"
    >
  </div>
</template>

<script>
  export default {
    name: 'carouselItem',
    props: {
      image: Object
    }
  }
</script>
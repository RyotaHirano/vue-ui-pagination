<template>
  <div class="carousel-wrapper">
    <carousel-item
      v-for="(image, key) in returnStoreImages"
      :image="image"
      :key="key"
    ></carousel-item>
  </div>
</template>

<script>
  import carouselItem from './carouselItem'

  export default {
    name: 'carouselView',
    computed: {
      returnStoreImages() {
        return this.$store.state.images
      }
    },
    components: {
      carouselItem
    }
  }
</script>
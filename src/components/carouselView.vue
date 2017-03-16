<template>
  <div class="carousel-wrapper">
    <div class="carousel-inner">
      <carousel-item
        :images="returnStoreImages"
        :totalImageNum="getTotalImages"
      ></carousel-item>
    </div>
    <div class="carousel-pager">
      <carousel-pager
        :images="returnStoreImages"
      >
      </carousel-pager>
    </div>
  </div>
</template>

<script>
  import carouselItem from './carouselItem'
  import carouselPager from './carouselPager'

  export default {
    name: 'carouselView',
    computed: {
      returnStoreImages: function() {
        return this.$store.state.images
      },
      getTotalImages: function() {
        return this.$store.state.prevIdx !== null ? this.$store.state.prevIdx : this.$store.state.images.length - 1
      }
    },
    components: {
      carouselItem,
      carouselPager
    }
  }
</script>
<template>
  <div class="carousel-wrapper">
    <carousel-item
      v-for="(item, key) in returnStoreItems"
      :item="item"
      :key="key"
    ></carousel-item>
  </div>
</template>

<script>
  import carouselItem from './carouselItem'

  export default {
    name: 'carouselView',
    computed: {
      returnStoreItems() {
        return this.$store.state.items
      }
    },
    components: {
      carouselItem
    }
  }
</script>
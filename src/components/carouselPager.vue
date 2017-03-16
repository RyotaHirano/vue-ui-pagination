<template>
  <ul class="pager-wrapper">
    <carousel-pager-item
      v-for="(image, key) in images"
      :image="image"
      :key="key"
    >
    </carousel-pager-item>
  </ul>
</template>

<script>
  import carouselPagerItem from './carouselPagerItem'

  export default {
    name: 'carousel-pager',
    props: {
      images: Array
    },
    computed: {
      returnStoreImages: function() {
        return this.$store.state.images
      },
    },
    components: {
      carouselPagerItem
    }
  }
</script>
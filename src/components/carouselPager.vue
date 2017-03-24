<template>
  <ul class="pager-wrapper">
    <carousel-pager-item
      v-for="(image, key) in returnStoreImages"
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
    computed: {
      returnStoreImages: function() {
        if(this.$store.state.images.length > 5) {
          if(this.$store.state.images.length > this.$store.state.currentIdx + 5) {
            return this.$store.state.images.slice(this.$store.state.currentIdx, this.$store.state.currentIdx + 5).concat()
          } else {
            return this.$store.state.images.slice(this.$store.state.images.length - 5, this.$store.state.images.length).concat()
          }
        } else {
          return this.$store.state.images.concat()
        }
      },
    },
    components: {
      carouselPagerItem
    }
  }
</script>
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
            // ロード時
            console.log('a');
            return this.$store.state.images.slice(this.$store.state.currentIdx, this.$store.state.currentIdx + 5).concat()
          } else if (this.$store.state.images.length - 1 === this.$store.state.currentIdx) {
            // 最後
            console.log('d');
            return this.$store.state.images.slice(this.$store.state.images.length - 6, this.$store.state.images.length - 1).concat()
          } else if (this.$store.state.images.length - 2 <= this.$store.state.currentIdx) {
            // 最後から2つ前〜１つ前
            console.log('c');
            return this.$store.state.images.slice(this.$store.state.images.length - 6, this.$store.state.images.length - 1).concat()
          } else {
            // 通常
            console.log('b');
            return this.$store.state.images.slice(this.$store.state.images.length - 6, this.$store.state.images.length - 1).concat()
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
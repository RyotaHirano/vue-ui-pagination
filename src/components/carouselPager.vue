<template>
  <div class="pager-wrapper">
    <ul class="pager-inner">
      <carousel-pager-item
        v-for="(image, key) in returnStoreImages"
        :image="image"
        :key="key"
        :style="{ transform: pagerTranslate}"
      >
      </carousel-pager-item>
    </ul>
  </div>
</template>

<script>
  import carouselPagerItem from './carouselPagerItem'
  const paginationDispNum = 6;
  const paginationTranslateStart = 3;

  export default {
    name: 'carousel-pager',
    computed: {
      returnStoreImages: function() {
        return this.$store.state.images.concat()
      },
      pagerTranslate: function() {
        let translateX = '0';
        if (this.$store.state.currentIdx + paginationTranslateStart >= this.$store.state.images.length ) {
          translateX = `-${(this.$store.state.images.length - paginationDispNum) * 32}px`;
        } else if (this.$store.state.currentIdx >= paginationTranslateStart) {
          translateX = `-${(this.$store.state.currentIdx - paginationTranslateStart) * 32}px`;
        } else {
          translateX = '0'
        }
        return `translate3d(${translateX}, 0, 0)`
      }
    },
    components: {
      carouselPagerItem
    }
  }
</script>
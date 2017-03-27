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

  export default {
    name: 'carousel-pager',
    computed: {
      returnStoreImages: function() {
        if(this.$store.state.images.length > 5) {
//          if(this.$store.state.currentIdx === 0) {
//            // 一つ目切替時
//            console.log('a');
//            return this.$store.state.images.slice(this.$store.state.currentIdx, this.$store.state.currentIdx + 5).concat()
//          } else if (this.$store.state.images.length - 1 === this.$store.state.currentIdx) {
//            // 最後
//            console.log('e');
//            return this.$store.state.images.slice(this.$store.state.images.length - 5, this.$store.state.images.length + 1).concat()
//          } else if (this.$store.state.images.length - 2 === this.$store.state.currentIdx) {
//            // 最後から一つ前
//            console.log('d');
//            return this.$store.state.images.slice(this.$store.state.currentIdx - 4, this.$store.state.currentIdx + 2).concat()
//          } else if (this.$store.state.currentIdx >= 3) {
//            // 最初から3つ目以降
//            console.log('c');
//            return this.$store.state.images.slice(this.$store.state.currentIdx - 3, this.$store.state.currentIdx + 3).concat()
//          } else {
//            // 通常
//            console.log('b');
//            return this.$store.state.images.slice(0, 5).concat()
//          }
          return this.$store.state.images.concat()
        } else {
          return this.$store.state.images.concat()
        }
      },
      pagerTranslate: function() {
        let translateX = '0';
        console.log(this.$store.state.currentIdx + 3);
        console.log(this.$store.state.images.length);
        if (this.$store.state.currentIdx + 3 <= this.$store.state.images.length ) {
          translateX = `-${(this.$store.state.images.length - 3) * 32}px`;
        } else if (this.$store.state.currentIdx >= 3) {
          translateX = `-${(this.$store.state.currentIdx - 3) * 32}px`;
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
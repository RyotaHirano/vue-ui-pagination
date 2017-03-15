<template>
  <div class="carousel-inner"
    v-bind:class="{
      'animate-prev': this.$store.state.isAnimatePrev,
      'animate-next': this.$store.state.isAnimateNext
    }"
    :style="{ transform: getMoveX }"
    @mousedown="startDrag"
    @mousemove="dragMove"
    @mouseup="finishDrag"
    @mouseout="finishDrag"
    @touchstart="startDrag"
    @touchmove="dragMove"
    @touchend="finishDrag"
    @transitionend="setCurrentIdx"
  >
    <div class="carousel-item carousel-item--prev">
      <img
        :src="getPrevImage()"
        :alt="getPrevImage('alt')"
      >
    </div>
    <div class="carousel-item">
      <img
        :src="getCurrentImage()"
        :alt="getCurrentImage('alt')"
      >
    </div>
    <div class="carousel-item carousel-item--next">
      <img
        :src="getNextImage()"
        :alt="getNextImage('alt')"
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carouselItem',
    props: {
      images: Array,
      totalImageNum: Number
    },
    computed: {
      getMoveX: function() {
        return this.$store.state.isDrag ? `translateX(${this.$store.state.moveX - this.$store.state.touchX}px)` : ""
      }
    },
    methods: {
      getCurrentImage(target='src') {
        return target === 'alt' ? this.images[this.$store.state.currentIdx].alt : this.images[this.$store.state.currentIdx].src
      },
      getPrevImage(target='src') {
        return target === 'alt' ? this.images[this.totalImageNum].alt : this.images[this.totalImageNum].src
      },
      getNextImage(target='src') {
        return target === 'alt' ? this.images[this.$store.state.nextIdx].alt : this.images[this.$store.state.nextIdx].src
      },
      startDrag: function(e) {
        e.preventDefault();
        if (event.touches) {
          this.$store.state.touchX = e.touches[0].clientX;
          this.$store.state.moveX = e.touches[0].clientX;
        } else {
          this.$store.state.touchX = e.clientX;
          this.$store.state.moveX = e.clientX;
        }
        this.$store.state.isDrag = true;
      },
      dragMove: function(e) {
        e.preventDefault();
        if(this.$store.state.isDrag) {
          if (e.touches) {
            this.$store.state.moveX = e.touches[0].clientX;
          } else {
            this.$store.state.moveX = e.clientX;
          }
        }
      },
      finishDrag: function() {
        if (this.$store.state.moveX - this.$store.state.touchX > 0) {
          this.$store.state.isAnimatePrev = true;
        } else if (this.$store.state.moveX - this.$store.state.touchX < 0) {
          this.$store.state.isAnimateNext = true;
        }
        this.$store.state.touchX = 0;
        this.$store.state.moveX = 0;
        this.$store.state.isDrag = false;
      },
      setCurrentIdx: function() {
        if (this.$store.state.isAnimatePrev) {
          this.$store.state.currentIdx = this.prevNum;
          this.$store.state.isAnimatePrev = false;
        } else if (this.$store.state.isAnimateNext) {
          this.$store.state.currentIdx = this.$store.state.nextIdx;
          this.$store.state.isAnimateNext = false;
        }
        this.$store.state.prevIdx = (this.$store.state.currentIdx === 0) ? this.$store.state.images.length - 1 : this.$store.state.currentIdx - 1;
        this.$store.state.nextIdx = (this.$store.state.currentIdx === this.$store.state.images.length - 1) ? 0 : this.$store.state.currentIdx + 1;
      }
    }
  }
</script>
<template>
  <div class="carousel-inner"
    :class="{
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
        if (e.touches) {
          this.$store.commit('updateTouchX', e.touches[0].clientX)
          this.$store.commit('updateMoveX', e.touches[0].clientX)
        } else {
          this.$store.commit('updateTouchX', e.clientX)
          this.$store.commit('updateMoveX', e.clientX)
        }
        this.$store.commit('updateIsDrag', true)
      },
      dragMove: function(e) {
        e.preventDefault();
        if(this.$store.state.isDrag) {
          if (e.touches) {
            this.$store.commit('updateMoveX', e.touches[0].clientX)
          } else {
            this.$store.commit('updateMoveX', e.clientX)
          }
        }
      },
      finishDrag: function() {
        if (this.$store.state.moveX - this.$store.state.touchX > 0) {
          this.$store.commit('setIsAnimatePrev', true)
        } else if (this.$store.state.moveX - this.$store.state.touchX < 0) {
          this.$store.commit('setIsAnimateNext', true)
        }
        this.$store.commit('updateTouchX', 0)
        this.$store.commit('updateMoveX', 0)
        this.$store.commit('updateIsDrag', false)
      },
      setCurrentIdx: function() {
        this.$store.commit('updateCurrentIdx')
        this.$store.commit('resetIsAnimatePrev')
        this.$store.commit('resetIsAnimateNext')
        this.$store.commit('updatePrevIdx')
        this.$store.commit('updateNextIdx')
      }
    }
  }
</script>
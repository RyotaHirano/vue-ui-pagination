<template>
  <li class="pager-item">
    <div
      class="pager-indicator"
      :class="classObjectPagerItem"
    >{{image.id}}</div>
  </li>
</template>

<script>
  export default {
    name: 'carousel-pager-item',
    props: {
      image: Object,
    },
    computed: {
      classObjectPagerItem: function() {
        if(this.$store.state.images.length > this.$store.state.paginationDispNum) {
          return {
            'is-active': this.image.id === this.$store.state.currentIdx + 1,
            'is-small': this.image.id !== this.$store.state.currentIdx + 1 && (this.image.id >= this.$store.state.currentIdx + 3 || this.$store.state.currentIdx - this.image.id >= 1 ),
            'is-small--last': this.image.id !== this.$store.state.currentIdx + 1 && ( this.image.id >= this.$store.state.currentIdx + 4 || this.$store.state.currentIdx - this.image.id >= 2 )
          }
        } else {
          return {
            'is-active': this.image.id === this.$store.state.currentIdx + 1
          }
        }
      }
    },
    methods: {
      selectImage(id) {
        this.$store.commit('setCurrentIdx', id)
        this.$store.commit('updatePrevIdx')
        this.$store.commit('updateNextIdx')
      }
    }
  }
</script>
<template>
  <li class="pager-item"
    :class="classObjectPagerItem"
    @click="selectImage(image.id)"
  >
    <span>{{image.id}}</span>
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
        return {
          'is-active': this.image.id === this.$store.state.currentIdx + 1
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
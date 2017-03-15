<template>
  <div class="carousel-item">
    {{item.id}}
  </div>
</template>

<script>
  export default {
    name: 'carouselItem',
    props: {
      item: Object
    }
  }
</script>
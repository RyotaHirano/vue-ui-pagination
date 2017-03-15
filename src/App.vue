<template>
  <div id="app">
    <section class="section">
      <h1>Vue Carousel</h1>
      <carousel-view></carousel-view>
    </section>
  </div>
</template>

<script>
  import carouselView from './components/carouselView'

  export default {
    name: 'app',
    components: {
      carouselView
    }
  }
</script>
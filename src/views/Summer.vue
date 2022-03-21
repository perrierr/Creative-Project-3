<template>
  <div class="summer">
    <SummerComponent :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import SummerComponent from '@/components/SummerComponent.vue'

export default {
  name: 'summer-view',
  components: {
    SummerComponent
  },
  computed: {
  products() {
    return this.$root.$data.products3;
  }
  },
}
</script>

<style scoped>
.summer {
  height: 200vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("../assets/logo.jpeg");
  background-size: cover;
}
</style>
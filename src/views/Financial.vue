<template>
  <div class="financial">
    <FinancialComponent :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import FinancialComponent from '@/components/FinancialComponent.vue'

export default {
  name: 'financial-view',
  components: {
    FinancialComponent
  },
  computed: {
  products() {
    return this.$root.$data.products2;
  }
  },
}
</script>

<style scoped>
.financial {
  height: 200vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("../assets/logo.jpeg");
  background-size: cover;
}
</style>
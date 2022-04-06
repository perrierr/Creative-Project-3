<template>
  <div class="financial">
    <FinancialComponent :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import FinancialComponent from '@/components/FinancialComponent'

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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
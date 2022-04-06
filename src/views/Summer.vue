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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
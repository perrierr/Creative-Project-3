<template>
  <div class="financial">
    <GoalComponent page="Financial"  />
  </div>
</template>

<script>
// @ is an alias to /src
import GoalComponent from '@/components/GoalComponent'

export default {
  name: 'financial-view',
  components: {
    GoalComponent
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
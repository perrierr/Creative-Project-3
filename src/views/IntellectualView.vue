<template>
  <div class="experience">
    <GoalComponent page="Intellectual" />
  </div>
</template>

<script>
// @ is an alias to /src
import GoalComponent from '@/components/GoalComponent.vue'

export default {
  name: 'intellectual-view',
  components: {
    GoalComponent
  },
  computed: {
  products() {
    return this.$root.$data.products;
  }
  },
}
</script>

<style scoped>
.experience {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>


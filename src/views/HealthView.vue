<template>
  <div class="experience">
    <ExperienceComponent :products="products" />
  </div>
</template>

<script>
// @ is an alias to /src
import ExperienceComponent from '@/components/ExperienceComponent.vue'

export default {
  name: 'experience-view',
  components: {
    ExperienceComponent
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


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
  height: 200vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("../assets/logo.jpeg");
  background-size: cover;
}
</style>


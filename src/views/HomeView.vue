<template>
  <div class="home">
    <h1 id="home-h1">Start Making Goals Today</h1>
    <h2 id="home-h2">And Live a Meaningful Life</h2>
    <div class="footer">
      <FooterComponent />
    </div>
  </div>
</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'summer-view',
  components: {
    FooterComponent
  },
}
</script>


<style scoped>
  #home-h1 {
    padding-top: 120px;
    margin-bottom: 30px;
  }

  .home {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #af829b;
  background-image: url("../assets/logo.jpeg");
  background-size: cover;
}


</style>

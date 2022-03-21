<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/financial">Financial Goals</router-link> |
      <router-link to="/experience">Experience Goals</router-link> |
      <router-link to="/summer">Summer Goals</router-link> |
      <router-link to="/emotional">Emotional Goals--to come</router-link> |
      <router-link to="/intellectual">Intellectual Goals--to come</router-link> 
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #af829b;
}

</style>

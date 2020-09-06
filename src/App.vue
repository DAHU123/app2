<template>
  <div id="microApp">
    <div class="top-nav">
      <router-link to="/Home">
        Home
      </router-link>
      <span style="margin: 0 20px"> | </span>
      <router-link to="/About">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  #microApp {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .top-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

</style>

<template>
  <div id="app">

    <searchbar/>

  </div>
</template>

<script>


import Searchbar from "@/components/Searchbar";
export default {
  name: 'App',
  components: {
    Searchbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

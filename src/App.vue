<template>
  <div id="app">

    <searchbar></searchbar>
    <button v-on:click="fetchData">Fetch</button>

  </div>
</template>

<script>


import Searchbar from "@/components/Searchbar";

export default {
  name: 'App',
  components: {
    Searchbar
  },
  methods: {
    fetchData() {
      fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=5')
          .then(response => response.json())
          .then(data => console.log(data));
    }
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

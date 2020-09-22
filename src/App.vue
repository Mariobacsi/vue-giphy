<template>
  <div id="app">

    <b-form-input v-model="search" placeholder="Search"/>
    <b-button v-on:click="fetchData">Search</b-button>
    <giph-list data=""></giph-list>

  </div>
</template>

<script>

import GiphList from "@/components/GiphList";

export default {
  name: 'App',
    components: {
    GiphList
  },
  data() {
    return {
      number_of_giphs: "100",
      data: '',
      search: ''
    }
  },
  methods: {
    fetchData() {
      var searchword = document.getElementById("tmp").innerText;
      console.log(searchword);

      fetch('http://api.giphy.com/v1/gifs/search?q=' + this.search + '&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=10')
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

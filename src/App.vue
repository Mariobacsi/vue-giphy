<template>
  <div id="app">

    <b-form-input v-model="search" placeholder="Enter your name"></b-form-input>
    <b-button v-on:click="fetchData">los</b-button>
    <giph-list :data="data.data"></giph-list>

    <!--<video controls autoplay>-->
    <img
        src="https://media2.giphy.com/media/5PhDdJQd2yG1MvHzJ6/giphy.gif?cid=dde7065cnm75w6mdtd7m6hv4b8ioaz20ei2p1zybthcmgsex&rid=giphy.gif"/>


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
      // var searchword = document.getElementById("tmp").innerText;
      console.log(this.search);

      fetch('http://api.giphy.com/v1/gifs/search?q=' + this.search + '&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=' + this.number_of_giphs)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            this.data = data
          })

      console.log(this.data);
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

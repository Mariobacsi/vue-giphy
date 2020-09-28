<template>
  <div id="giphy">
    <div class="row" style="margin-bottom: 2em">

      <!--Drop Down für Anzahl an gezeigten Gifs-->
      <b-form-select class="col-md-1" v-model="limit" :options="options_limit"></b-form-select>

      <div class="row col-md">

        <!--Die Eigentliche Searchbar-->
        <b-form-input class="col-md-11" v-model="search" placeholder="Search" @keyup.enter="fetchData"></b-form-input>

        <!--Button Zum searchen-->
        <b-button class="col" v-on:click="fetchData">Search</b-button>

      </div>
    </div>

    <giph-list :data="data.data"></giph-list>

  </div>
</template>

<script>
import GiphList from "@/components/GiphList";

export default {
  name: "Giphy",
  components: {
    GiphList
  },
  data() {
    return {
      limit: 5,
      options_limit: [
        {value: 5, text: '5'},
        {value: 10, text: '10'},
        {value: 15, text: '15'},
        {value: 20, text: '20'},
        {value: 25, text: '25'}
      ],
      data: '',
      search: ''
    }
  },
  methods: {
    fetchData: function () {
      // var searchword = document.getElementById("tmp").innerText;
      console.log(this.search);

      fetch('http://api.giphy.com/v1/gifs/search?q=' + this.search + '&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=' + this.limit)
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

<style scoped>

</style>
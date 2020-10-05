<!--Team: Seidl, Kraljevic, Scherling-->
<template>
  <div id="app">

    <!--Links zu den verschiedenen Views(Routers)-->
    <b-row>
      <b-row>
        <router-link to="/giphy">
          <b-button>Giphy</b-button>
        </router-link>
        <router-link to="/international">
          <b-button>International</b-button>
        </router-link>
      </b-row>
      <!--Sprachselector-->
      <b-form-select v-model="language"/>
    </b-row>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto auto;
  width: 90%;
}
</style>

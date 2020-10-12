<!--Team: Seidl, Kraljevic, Scherling-->
<template>
  <div id="app">

    <!--Links zu den verschiedenen Views(Routers)-->
    <b-row>
      <b-row class="col-md">
        <router-link to="/giphy">
          <b-button>{{ $t('giphy.title') }}</b-button>
        </router-link>
        <router-link to="/internationalization">
          <b-button>{{ $t('internationalization.title') }}</b-button>
        </router-link>
      </b-row>
      <!--Sprachselector-->
      <div class="locale-changer ">
        <label>
          <b-row>
            <p class="col-md">{{ $t('app.language') }}</p>
            <select v-model="$i18n.locale" style="width: fit-content">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">{{ lang.text }}</option>
            </select>
          </b-row>
        </label>
      </div>
    </b-row>

    <router-view></router-view>


  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      langs: {
        en: {value: "en", text: "English"},
        de: {value: "de", text: "Deutsch"}
      }
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
  margin: 60px auto auto;
  width: 90%;
}

.col-md-1 {
  flex: 0 0 8.333333%;
  max-width: 833.333333PX;
}
</style>

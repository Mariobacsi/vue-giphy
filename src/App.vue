<!--Team: Seidl, Kraljevic, Scherling-->
<template>
  <div id="app">

    <!--Links zu den verschiedenen Views(Routers)-->
    <div class="btn-toolbar justify-content-between mb-3" role="toolbar">
      <div class="col btn-group btn-block" role="group">
        <router-link class="btn btn-secondary" to="/giphy">{{ $t('giphy.title') }}</router-link>
        <router-link class="btn btn-secondary" to="/internationalization">{{ $t('internationalization.title') }}</router-link>
        <router-link to="/chat" class="btn btn-secondary">{{ $t('chat.title') }}</router-link>
        <router-link to="/translator" class="btn btn-secondary">{{ $t('translator.title') }}</router-link>
        <router-link to="/image" class="btn btn-secondary">{{ $t('image.title') }}</router-link>
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <div class="input-group-text"><font-awesome-icon icon="globe-americas"></font-awesome-icon></div>
        </div>
        <select class="form-control" v-model="$i18n.locale" id="languageSelector">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">{{ lang.text }}</option>
        </select>
      </div>
    </div>

    <router-view class="col"></router-view>

  </div>
</template>

<script>

import {library} from "@fortawesome/fontawesome-svg-core";
import {faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";

library.add(faGlobeAmericas)

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

.router-link-active a {

}
</style>

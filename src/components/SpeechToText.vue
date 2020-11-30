<template>
  <div>
    <button v-on:click="aufnehmen">aufnehmen</button>
    <vue-speech v-if="irgendwas" lang="de-DE"/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSpeech from 'vue-speech'

export default {
  name: "SpeechToText",
  data() {
    return {
      irgendwas: false
    }
  },
  methods: {
    aufnehmen: function () {
      if(this.irgendwas == true){
        this.irgendwas = false
      }else {
        this.irgendwas = true
      }
    }
  }

}
Vue.use(VueSpeech)


</script>

<style scoped>

</style>
<template>
  <div>
    <vue-speech />
  </div>
</template>

<script>
export default {
name: "textToSpeech"
}

import Vue from 'vue'
import VueSpeech from 'vue-speech'


Vue.use(VueSpeech)
</script>

<style scoped>

</style>
<template>
  <div class="row justify-content-around">
    <div class="col-6">
      <select class="form-control" v-model="langFrom">
        <option v-for="(lang, i) in $t('app.languages')" :key="`Lang${i}`" :value="lang.value">{{ lang.text }}</option>
      </select>
      <textarea class="form-control" v-model="text"></textarea>
      <div class="btn-group btn-block" role="group">
        <text-to-speech :text="this.text" :language="this.langFrom"></text-to-speech>
        <speech-to-text v-on:childToParent="(value) => this.text = value" :language="this.langFrom"></speech-to-text>
      </div>
    </div>
    <div class="col-6">
      <select class="form-control" v-model="langTo">
        <option v-for="(lang, i) in $t('app.languages')" :key="`Lang${i}`" :value="lang.value">{{ lang.text }}</option>
      </select>
      <textarea class="border form-control-plaintext" v-model="translatedText" disabled></textarea>
      <text-to-speech :text="this.translatedText" :language="this.langTo"></text-to-speech>
    </div>
  </div>
</template>

<script>

import TextToSpeech from "@/components/TextToSpeech";
import SpeechToText from "@/components/SpeechToText";
import axios from "axios"

export default {
  name: "Translator",
  components: {SpeechToText, TextToSpeech},
  data() {
    return {
      langFrom: 'de',
      langTo: 'en',
      text: '',
      translatedText: '',
      params: {}
    }
  },
  watch: {
    text: function () {
      this.watcher()
    },
    langFrom: function () {
      this.watcher()
    },
    langTo: function () {
      this.watcher()
    }
  },
  methods: {
    watcher() {
      if (this.text) {
        this.translate()
      } else this.translatedText = ""
    },
    translate() {
      let session_url = 'https://api.eu-de.language-translator.watson.cloud.ibm.com/instances/053e93ee-745d-4c99-85cf-13e321d576b5/v3/translate?version=2018-05-01'
      let uname = 'apikey'
      let pass = 'X0DGI2rmLP0WT2AyqUBOA_9sITvU0mFW417KrHq_KEj6'
      let translation = this.langFrom + "-" + this.langTo
      let that = this
      axios.post(
          session_url,
          {
            headers: {
              "Content-Type": "application/json",
            },
            text: this.text,
            model_id: translation,
          },
          {
            auth: {
              username: uname,
              password: pass
            }
          }).then(function (response) {
        that.translatedText = response.data.translations[0].translation;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

textarea {
  min-height: 15vw;
  resize: none;
}

</style>
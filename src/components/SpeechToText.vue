<template>
  <button class="btn btn-secondary btn-block"
          :class="{'btn-danger': this.recognizing, }"
          v-on:click="toggleRecord"
          :disabled="this.recognition === undefined">
    <font-awesome-icon icon="microphone"/>
  </button>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {faMicrophone, faMicrophoneSlash} from '@fortawesome/free-solid-svg-icons'

library.add(faMicrophone, faMicrophoneSlash)

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || undefined

export default {
  name: "SpeechToText",
  props: ['language'],
  data() {
    return {
      recognizing: false,
      recognition: SpeechRecognition ? new SpeechRecognition() : undefined
    }
  },
  created: () => {
    console.debug(SpeechRecognition ? SpeechRecognition : "Speech Recognition not supported")
  },
  methods: {
    speechEnd({sentences, text}) {
      console.log('text', text)
      console.log('sentences', sentences)
      this.sentences = sentences
    },
    stopRecord() {
      this.recognition.stop()
      this.recognizing = false
      this.recognition.onresult = (event) => {
        this.text = event.results[0][0].transcript
        this.$emit('childToParent', this.text)
        console.log(this.text)
      }
    },
    startRecord() {
      this.recognition.start();
      this.recognizing = true;
    },
    toggleRecord() {
      if (this.recognizing) {
        this.stopRecord()
      } else {
        this.startRecord()
      }
    }
  }
}

</script>

<style scoped>

</style>
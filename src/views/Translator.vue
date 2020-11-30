<template>
  <div>
    <b-card>
        <b-textarea class="col" v-model="text"></b-textarea>
        <b-textarea class="col" disabled>{{ this.translatedText }}</b-textarea>
    </b-card>
  </div>
</template>

<script>
/*import translate from 'translate-google'*/

export default {
  name: "Translator",
  components: {},
  data() {
    return {
      text: '',
      translatedText: 'hallo'
    }
  },
  methods: {
    /*translate() {
      translate(this.text, {from: 'en', to:'de'})
      .then(res => {
        console.log(res)
        this.translatedText = res;
      })
      .catch(err => {
        console.error(err)
      })
    }*/
  }
}
</script>

<style scoped>

</style>
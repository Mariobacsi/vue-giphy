<template>
  <div class="">
    <button class="btn btn-secondary" @click="getData">get Data</button>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "ImageRecognition",
  data() {
    return {
      imageUrl: 'https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg',
      apiKey: "acc_2db7600b6fe4ac0",
      apiSecret: "40c7c466795f517d0abfdcae3be834f6",
      streaming: false
    }
  },
  methods: {
    getData() {
      Axios.get('https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(this.imageUrl), {
        auth: {
          username: this.apiKey,
          password: this.apiSecret
        }
      }).then(response => console.log(response))
          .catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>

</style>
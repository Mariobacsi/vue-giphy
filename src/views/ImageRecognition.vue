<template>
  <div class="col row">
    <div class="col-8">
      <div class="input-group">
        <input class="form-control" type="url" v-model="imageUrl" placeholder="Image URL">
        <button class="btn btn-secondary" type="button" @click="getData">get Data</button>
      </div>
    </div>
    <tag-list class="col-4" :data="this.tags"></tag-list>
  </div>
</template>

<script>
import Axios from "axios";
import TagList from "@/components/TagList";

export default {
  name: "ImageRecognition",
  components: {TagList},
  data() {
    return {
      tags: [],
      imageUrl: '', //https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg
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
      }).then(response => {
        console.log(response)
        this.tags = response.data.result.tags
      }).catch(error => console.error(error))
    }
  }
}
</script>

<style scoped>

</style>
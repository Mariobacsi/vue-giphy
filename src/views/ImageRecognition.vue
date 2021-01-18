<template>
  <div class="col row">
    <div class="col-8">
      <img v-if="imageUrl" :src="imageUrl" class="col" style="max-height: 50vh; width: auto">
      <div class="input-group">
        <input class="col-9 form-control" type="url" v-model="imageUrl" placeholder="Image URL">
        <button class="col-3 btn btn-outline-secondary" type="button" @click="getTagsUrl">get Data</button>
      </div>
      <div class="input-group">
        <input class="col-9" type="file" @change="onFileChange">
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
      imageFile: undefined,
      imageUrl: '',
      //https://docs.imagga.com/static/images/docs/sample/japan-605234_1280.jpg
      //https://profile-images.xing.com/images/4e8bce2bc95b7a1eb42db975ee79285e-4/franz-stimpfl.1024x1024.jpg
      apiKey: "acc_2db7600b6fe4ac0",
      apiSecret: "40c7c466795f517d0abfdcae3be834f6",
      streaming: false
    }
  },
  methods: {
    //URL
    getTagsUrl() {
      if (this.imageUrl) {
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
    },
    //Dateien
    onFileChange(event) {
      this.imageFile = event.target.files[0]
      this.getTagsFile()
    },
    getTagsFile() {
      if (this.imageFile) {
        console.log(this.imageFile)
        let formData = new FormData()
        formData.append("image", this.imageFile, this.imageFile.name)
        Axios.post('https://api.imagga.com/v2/uploads', formData,{
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Basic YWNjXzJkYjc2MDBiNmZlNGFjMDo0MGM3YzQ2Njc5NWY1MTdkMGFiZmRjYWUzYmU4MzRmNg=='
          }
        }).then(response => {
          console.log(response)
          Axios.get('https://api.imagga.com/v2/tags?image_upload_id=' + response.data.result.upload_id, {
            auth: {
              username: this.apiKey,
              password: this.apiSecret
            }
          }).then(response => {
            console.log(response)
            this.tags = response.data.result.tags
          }).catch(error => console.error(error))
        }).catch(error => console.error(error))
      }
    }
  }
}
</script>

<style scoped>

</style>
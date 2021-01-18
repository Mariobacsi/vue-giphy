<template>
  <div class="col row">
    <div class="col-8">
      <div class="col input-group">
        <input class="col-9 form-control" type="url" v-model="imageUrl" placeholder="Image URL">
        <button class="col-3 btn btn-outline-secondary" type="button" @click="getTagsUrl">get Data</button>
      </div>
      <div class="col input-group">
        <input class="col" type="file" id="fileUpload" accept="image/*" @change="onFileChange">
        <label data-browse="Browse" for="fileUpload" class="custom-file-label">
          <span class="d-block form-file-text">{{ imageFile ? imageFile.name : 'Upload File here' }}</span>
        </label>
      </div>
      <img v-if="imageUrl" :src="imageUrl" class="col" style="max-height: 50vh; width: auto">
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
      API_AUTH: {
        username: "acc_2db7600b6fe4ac0",
        password: "40c7c466795f517d0abfdcae3be834f6"
      },
      API_URL: 'https://api.imagga.com/v2'
    }
  },
  methods: {
    //URL
    getTagsUrl() {
      this.imageFile = undefined
      if (this.imageUrl) {
        Axios.get(this.API_URL + '/tags?image_url=' + encodeURIComponent(this.imageUrl), {
          auth: this.API_AUTH
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
        Axios.post(this.API_URL + '/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Basic YWNjXzJkYjc2MDBiNmZlNGFjMDo0MGM3YzQ2Njc5NWY1MTdkMGFiZmRjYWUzYmU4MzRmNg=='
          }
        }).then(response => {
          this.imageUrl = window.URL.createObjectURL(this.imageFile)
          console.log(response)
          Axios.get(this.API_URL + '/tags?image_upload_id=' + response.data.result.upload_id, {
            auth: this.API_AUTH
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
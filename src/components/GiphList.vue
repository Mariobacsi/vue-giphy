<template>
  <div class="d-flex justify-content-around flex-row flex-md-wrap">
    <img v-for="giph in data" :key="giph.id"
         :src="giph.images.original.url"
         :alt="giph.title">
  </div>
</template>

<script>
export default {
  name: "GiphList",
  props: ['data']
}
</script>

<style scoped>

img{
  object-fit: fill;
  margin-bottom: 2em;
}

</style>
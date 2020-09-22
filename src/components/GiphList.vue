<template>
  <div>
    <b-card v-for="giph in data" :key="giph.id"
            :title="giph.title">
    <img :src="giph.images.original.url">
    </b-card>
  </div>
</template>

<script>
export default {
  name: "GiphList",
  props: ['data']
}
</script>

<style scoped>

</style>
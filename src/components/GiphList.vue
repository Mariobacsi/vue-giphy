<template>
  <div>
    <b-card v-for="giph in data" :key="giph.id"
            :img-src="giph.images.original.url"
            :title="giph.title"/>
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
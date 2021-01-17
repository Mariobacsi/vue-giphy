<template>
  <div>
    <b-table striped hover :items="data"></b-table>
  </div>
</template>

<script>
export default {
  name: "TagList",
  props: ['data']
}
</script>

<style scoped>

</style>
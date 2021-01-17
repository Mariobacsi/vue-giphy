<template>
  <div>
    <table>
      <tr>
        <th>Tag</th>
        <th>Confidence</th>
      </tr>
      <tr v-for="(tag, id) in data" :key="id">
        <td>{{ tag.tag.en }}</td>
        <td>{{ tag.confidence }}</td>
      </tr>
    </table>
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
<template>
  <div id="extra">
    <b-form-input v-model="text" placeholder="Text"/>
    <div v-if="text">
      <p>Text original: {{ text }}</p>
      <p>Text reversed: {{ reversedText }}</p>
    </div>
    <p v-else>Text ist leer</p>
  </div>
</template>

<script>
export default {
  name: "Extra",
  data() {
    return {
      text: ''
    }
  },
  computed: {
    reversedText: function () {
      // `this` points to the vm instance
      return this.text.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>

</style>
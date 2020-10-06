<template>
  <div>
    <h1>Title</h1>
    <b-form-datepicker v-model="date"
                       :locale="$i18n.locale"/>
    <h2>{{ date }}</h2>
    <!--<p>{{ money.message }}: {{ money.icon }}</p>-->
  </div>
</template>

<script>
export default {
  name: "Internationalization",
  data() {
    return {
      show_date: false,
      date: ""
    }
  }
}
</script>

<style scoped>

</style>
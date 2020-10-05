<template>
  <div>
    <h1>Title</h1>
    <button>Show Date</button>
    <div>
      <b-form-select v-model="date_day" :options="date_day_limit"/>
      <b-form-select v-model="date_month" :options="date_month_limit"/>
      <b-form-select v-model="date_year" :options="date_year_limit"/>
    </div>
  </div>
</template>

<script>
export default {
name: "Internationalization"
}
</script>

<style scoped>

</style>
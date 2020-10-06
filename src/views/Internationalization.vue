<template>
  <div>
    <h1>Title</h1>
    <b-button v-on:click="show_date = !show_date">Show Date</b-button>
    <div v-if="show_date">
      <b-row>
        <b-form-select class="col-md-1" v-model="date_day" :options="date_day_limit"/>
        <b-form-select class="col-md-2" v-model="date_month" :options="$t('internationalization.date.month_limit')"/>
        <b-form-input class="col-md-1" v-model="date_year"/>
      </b-row>
      <h2>{{ date_day }}.{{ date_month }}.{{ date_year }}</h2>
    </div>
    <!--<p>{{ money.message }}: {{ money.icon }}</p>-->
  </div>
</template>

<script>
export default {
  name: "Internationalization",
  data() {
    return {
      show_date: false,
      date_day: 0,
      date_month: "",
      date_year: 0
    }
  }
}
</script>

<style scoped>

</style>
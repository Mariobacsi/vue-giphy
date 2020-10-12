<template>
  <div>
    <h1>{{ $t('internationalization.title') }}</h1>
    <p>{{ $t('internationalization.text') }}</p>
    <b-form-datepicker v-model="date"
                       :locale="$i18n.locale"
                       style="margin-bottom: 1em"/>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $n(100, 'currency') }}</p>
  </div>
</template>

<script>
export default {
  name: "Internationalization",
  data() {
    return {
      date: undefined
    }
  }
}
</script>

<style scoped>

</style>
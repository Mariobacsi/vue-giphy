<template>
  <div>
    <h1>Title</h1>
    <b-form-datepicker v-model="date"
                       :locale="$i18n.locale"/>
    <p>{{ $t('internationalization.text') }}</p>
    <b-button class="mb-5">{{ $t('internationalization.button-yes') }}</b-button>
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
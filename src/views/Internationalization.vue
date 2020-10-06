<template>
    <div>
        <h1>Title</h1>
        <b-form-datepicker v-model="date"
                           :locale="$i18n.locale"/>
        <h2>{{ date }}</h2>
        <h1>{{$t('internationalization.currency')}}</h1>
        <p>{{ $t('internationalization.text') }}</p>
        <b-button class="mb-5">{{ $t('internationalization.button-yes') }}</b-button>
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
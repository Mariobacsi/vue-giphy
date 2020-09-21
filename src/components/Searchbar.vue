<template>
    <div>
        <b-form-input v-model="search_one" placeholder="Enter your name"></b-form-input>
        <button v-on:click="search_two=search_one">Search</button>
        <p class="type='none'" id="tmp">{{ search_two }}</p>
    </div>
</template>

<script>
    export default {
        name: "Searchbar",
        data() {
            return {search_one: "", search_two: ""}
        }
    }
</script>

<style scoped>

</style>
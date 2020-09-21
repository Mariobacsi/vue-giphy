<template>
    <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend">
      <span class="input-group-text cyan lighten-2" id="basic-text1">
        <i class="fas fa-search text-white" aria-hidden="true"></i>
      </span>
        </div>
        <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" v-model="search_one">
        <button v-on:click="search_two=search_one">Search</button>
        <p>Message is: {{ search_two }}</p>
    </div>
</template>

<script>
    export default {
        name: "Searchbar", data() {
            return {search_one: "", search_two: ""}
        }
    }
</script>

<style scoped>

</style>
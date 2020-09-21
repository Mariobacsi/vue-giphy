<template>
    <div id="app">

        <searchbar :search="data"></searchbar>
        <button v-on:click="fetchData">Fetch</button>
        <!--<br>Number of Giphs:<input v-model="number_of_giphs" placeholder="Number of Giphs">-->
        <!--<p>Message is: {{ search }}</p>-->

    </div>
</template>

<script>


    import Searchbar from "@/components/Searchbar";

    export default {
        name: 'App',
        data() {
            return {
                number_of_giphs: "100",
                data:''
            }
        },
        components: {
            Searchbar
        },
        methods: {
            fetchData() {
                var searchword = document.getElementById("tmp").innerText;
                console.log(searchword);

                fetch('http://api.giphy.com/v1/gifs/search?q=' + searchword +'&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=10')
                    .then(response => response.json())
                    .then(data => console.log(data));
            }
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

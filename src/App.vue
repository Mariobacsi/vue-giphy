<template>
    <div id="app">

        <b-form-input v-model="search" placeholder="Enter your name"></b-form-input>
        <b-button v-on:click="fetchData">los</b-button>
        <giph-list data=""></giph-list>

        <video controls autoplay>
            <source type="video/mp4"
                    src="https://media2.giphy.com/media/5PhDdJQd2yG1MvHzJ6/giphy.mp4?cid=dde7065ctjb0l52jkjyd9z9pext4zgsxiykvmow1gqij687u&rid=giphy.mp4">
        </video>
    </div>
</template>

<script>

    import GiphList from "@/components/GiphList";

    export default {
        name: 'App',
        components: {
            GiphList
        },
        data() {
            return {
                number_of_giphs: "100",
                data: '',
                search: ''
            }
        },
        methods: {
            fetchData() {
                // var searchword = document.getElementById("tmp").innerText;
                console.log(this.search);

                fetch('http://api.giphy.com/v1/gifs/search?q=' + this.search + '&api_key=ZCzC619AGEr8Re7Xz67lmb49QEg2aX9O&limit=' + this.number_of_giphs)
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

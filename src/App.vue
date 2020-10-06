<!--Team: Seidl, Kraljevic, Scherling-->
<template>
    <div id="app">

        <!--Links zu den verschiedenen Views(Routers)-->
        <b-row>
            <b-row class="col-md">
                <router-link to="/giphy">
                    <b-button>Giphy</b-button>
                </router-link>
                <router-link to="/internationalization">
                    <b-button>Internationalization</b-button>
                </router-link>
            </b-row>
            <!--Sprachselector-->
            <div class="locale-changer ">
                <select v-model="$i18n.locale" class="col-md-1">
                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
                </select>
            </div>
        </b-row>

        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {langs: ['en', 'de', 'ar']}
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
        margin: 60px auto auto;
        width: 90%;
    }
</style>

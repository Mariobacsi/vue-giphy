<template>
    <b-button v-on:click="speakk()">ICON</b-button>
</template>

<script>
    import VueTextToSpeech from 'vue-text-to-speech';
    import Vue from 'vue';

    Vue.use(VueTextToSpeech);
    export default {
        name: "TextToSpeech",
        props:['text','language'],
        data() {
            return {
                speaks: [
                    {
                        "name": "Alex",
                        "lang": "en"
                    },
                    {
                        "name": "Karen",
                        "lang": "de"
                    },
                    {
                        "name": "Yuri",
                        "lang": "ru-RU"
                    }
                ]
            }
        },
        methods: {
            speakk() {
                const msg = new SpeechSynthesisUtterance();
                msg.volume = 1; // 0 to 1
                msg.rate = 1; // 0.1 to 10
                msg.pitch = 1.5; // 0 to 2
                msg.text = this.text;


                const voice = this.language;
                msg.voiceURI = voice.name;
                msg.lang = voice.lang;


                speechSynthesis.speak(msg);
            }
        }
    }
</script>

<style scoped>

</style>
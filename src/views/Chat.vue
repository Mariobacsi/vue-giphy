<template>
  <div>

    <div class="row justify-content-between">
      <form class="form-inline justify-content-between" style="padding-left: 0">
        <button class="btn btn-dark" v-if="connection" @click.prevent="disconnect">{{ username }}</button>
        <button class="btn btn-light" v-if="!connection" @click.prevent="connect" :disabled="!username">Connect</button>
        <input id="username" name="username" type="text" class="col form-control" v-if="!connection" v-model="username"
               placeholder="Enter Username">
      </form>
      <form class="form-inline col" v-if="connection">
        <input type="text" v-model="text" class="col form-control" :disabled="!connection" placeholder="Enter Message">
        <button v-show="false" class="btn btn-light" @click.prevent="send" :disabled="!connection">Send</button>
      </form>
    </div>

    <div class="col" style="padding: 0; overflow: visible">
      <div v-for="msg in render_messaged" v-bind:key="msg.id">
        <div class="row" style="padding: .5em">
          <div style="width: 20vw" v-if="msg.own"/>
          <b-card class="col">
            <div class="row">
              <p>{{ msg.from }}</p>
              <p class="align-self-center _date">{{ msg.timestamp }}</p>
            </div>
            <p class="row align-content-start">{{ msg.text }}</p>
          </b-card>
          <div style="width: 20vw" v-if="!msg.own"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Stomp from "webstomp-client";

export default {
  name: "Chat",
  data() {
    return {
      received_messages: [],
      render_messaged: [],
      connection: false,
      username: undefined
    }
  },
  methods: {
    /**
     * Connects the client to the socket
     */
    connect() {
      if (!this.username) {
        throw "Username is empty"
      }
      this.socket = new WebSocket("ws://127.0.0.1:8080/chat");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect({}, frame => {
            this.connection = true
            this.text = ""
            console.log(frame)
            this.stompClient.subscribe('/topic/messages', tick => {
              console.log(tick)
              let msg = JSON.parse(tick.body)
              msg.from === this.username ? msg.own = true : msg.own = false
              this.received_messages.push(msg)
              this.render_messaged = this.received_messages.reverse()
            });
          }, error => {
            console.log(error)
            this.connection = false
          }
      )
    },
    /**
     * Closes the connection between socket and client and deletes the chat log
     */
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect()
      }
      this.connection = false
      this.received_messages = []
    },
    /**
     * Sends the new message to the server to distribute it to all clients
     */
    send() {
      if (this.text) {
        if (this.stompClient && this.stompClient.connected) {
          console.log("Send message:" + this.text)
          let msg = JSON.stringify({text: this.text, from: this.username})
          console.log(msg)
          this.stompClient.send("/app/chat", msg, {})
          this.text = ""
        }
      } else console.log("Message is empty")
    }
  }
}
</script>
<style scoped>

p {
  margin: 0;
}

._date {
  padding-left: 1em;
  font-size: .7em;
  color: #777777
}

</style>
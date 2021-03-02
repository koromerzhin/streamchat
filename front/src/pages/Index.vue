<template>
  <q-page class="flex flex-center">
    <a href="https://www.twitch.tv/popout/koromerzhin/chat?popout=" target="_blank">
      Popup
    </a>
  </q-page>
</template>

<script>
import io from 'socket.io-client'
import twitch from './../services/twitch'
export default {
  name: 'PageIndex',
  data () {
    return {
      messages: [],
      users: [],
      socket: io('back-streamchat.traefik.me', {
        withCredentials: true,
        extraHeaders: {
          'my-custom-header': 'abcd'
        }
      })
    }
  },
  mounted () {
    twitch.launch(this.socket, twitch)
  }
}
</script>

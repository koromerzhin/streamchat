<template>
  <q-page>
    users {{ users.length }}<br />
    messages {{ messages.length }}<br />
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
      socket: io('back-streamchat.traefik.me', {
        withCredentials: true,
        extraHeaders: {
          'my-custom-header': 'abcd'
        }
      })
    }
  },
  computed: {
    users () {
      return this.$store.getters['users/get']
    },
    messages () {
      return this.$store.getters['messages/get']
    }
  },
  mounted () {
    twitch.launch(this.socket, twitch, this.$store)
  }
}
</script>

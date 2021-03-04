<template>
  <q-page>
    <div class="row">
        <div class="col-2">
            users {{ users.length }}
        </div>
        <div class="col-10">
            messages {{ messages.length }}
            <q-list bordered separator>
              <q-item  v-for="data in messages" :key="data">
                <q-item-section><b>{{ data.userstate.username }}</b> : {{ data.message }}</q-item-section>
              </q-item>
            </q-list>
        </div>
    </div>
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

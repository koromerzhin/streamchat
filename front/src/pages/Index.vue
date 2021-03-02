<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
import io from 'socket.io-client'
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
  mounted () {
    this.socket.emit('SEND_MESSAGE', {
      coucou: 'test'
    })
    this.socket.on('twitch-message', data => {
      console.log('twitch-message', data)
    })
    this.socket.on('twitch-hosting', data => {
      console.log('twitch-hosting', data)
    })
    this.socket.on('twitch-join', data => {
      console.log('twitch-join', data)
    })
    this.socket.on('twitch-raided', data => {
      console.log('twitch-raided', data)
    })
    this.socket.on('twitch-subscription', data => {
      console.log('twitch-subscription', data)
    })
    this.socket.on('twitch-message', data => {
      console.log('twitch-message', data)
    })
    this.socket.on('twitch-vips', data => {
      console.log('twitch-vips', data)
    })
    this.socket.on('twitch-part', data => {
      console.log('twitch-part', data)
    })
    this.socket.on('twitch-cheer', data => {
      console.log('twitch-cheer', data)
    })
    this.socket.on('twitch-resub', data => {
      console.log('twitch-resub', data)
    })
    this.socket.on('twitch-unhost', data => {
      console.log('twitch-unhost', data)
    })
    this.socket.on('twitch-action', data => {
      console.log('twitch-action', data)
    })
    this.socket.on('twitch-subscribers', data => {
      console.log('twitch-subscribers', data)
    })
  }
}
</script>

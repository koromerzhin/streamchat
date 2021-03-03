export default {
  launch (socket, twitch, store) {
    const actions = [
      'action',
      'anongiftpaidupgrade',
      'ban',
      'chat',
      'cheer',
      'clearchat',
      'connected',
      'connecting',
      'disconnected',
      'emoteonly',
      'emotesets',
      'followersonly',
      'giftpaidupgrade',
      'hosted',
      'hosting',
      'join',
      'logon',
      'message',
      'messagedeleted',
      'mod',
      'mods',
      'notice',
      'part',
      'ping',
      'pong',
      'r9kbeta',
      'raided',
      'raw_message',
      'reconnect',
      'resub',
      'roomstate',
      'serverchange',
      'slowmode',
      'subgift',
      'submysterygift',
      'subscribers',
      'subscription',
      'timeout',
      'unhost',
      'unmod',
      'vips',
      'whisper'
    ]
    actions.forEach(element => {
      const name = 'twitch-' + element
      socket.on(name, data => {
        const fonction = name.replace('twitch-', '')
        switch (fonction) {
          case 'action':
            twitch.action(store, data)
            break
          case 'anongiftpaidupgrade':
            twitch.anongiftpaidupgrade(store, data)
            break
          case 'ban':
            twitch.ban(store, data)
            break
          case 'chat':
            twitch.chat(store, data)
            break
          case 'cheer':
            twitch.cheer(store, data)
            break
          case 'clearchat':
            twitch.clearchat(store, data)
            break
          case 'connected':
            twitch.connected(store, data)
            break
          case 'connecting':
            twitch.connecting(store, data)
            break
          case 'disconnected':
            twitch.disconnected(store, data)
            break
          case 'emoteonly':
            twitch.emoteonly(store, data)
            break
          case 'emotesets':
            twitch.emotesets(store, data)
            break
          case 'followersonly':
            twitch.followersonly(store, data)
            break
          case 'giftpaidupgrade':
            twitch.giftpaidupgrade(store, data)
            break
          case 'hosted':
            twitch.hosted(store, data)
            break
          case 'hosting':
            twitch.hosting(store, data)
            break
          case 'join':
            twitch.join(store, data)
            break
          case 'logon':
            twitch.logon(store, data)
            break
          case 'message':
            twitch.message(store, data)
            break
          case 'messagedeleted':
            twitch.messagedeleted(store, data)
            break
          case 'mod':
            twitch.mod(store, data)
            break
          case 'mods':
            twitch.mods(store, data)
            break
          case 'notice':
            twitch.notice(store, data)
            break
          case 'part':
            twitch.part(store, data)
            break
          case 'ping':
            twitch.ping(store, data)
            break
          case 'pong':
            twitch.pong(store, data)
            break
          case 'r9kbeta':
            twitch.r9kbeta(store, data)
            break
          case 'raided':
            twitch.raided(store, data)
            break
          case 'raw_message':
            twitch.rawMessage(store, data)
            break
          case 'reconnect':
            twitch.reconnect(store, data)
            break
          case 'resub':
            twitch.resub(store, data)
            break
          case 'roomstate':
            twitch.roomstate(store, data)
            break
          case 'serverchange':
            twitch.serverchange(store, data)
            break
          case 'slowmode':
            twitch.slowmode(store, data)
            break
          case 'subgift':
            twitch.subgift(store, data)
            break
          case 'submysterygift':
            twitch.submysterygift(store, data)
            break
          case 'subscribers':
            twitch.subscribers(store, data)
            break
          case 'subscription':
            twitch.subscription(store, data)
            break
          case 'timeout':
            twitch.timeout(store, data)
            break
          case 'unhost':
            twitch.unhost(store, data)
            break
          case 'unmod':
            twitch.unmod(store, data)
            break
          case 'vips':
            twitch.vips(store, data)
            break
          case 'whisper':
            twitch.whispe(store, data)
            break
          default:
        }
      })
    })
  },
  action (store, data) {
    console.log('action', data)
  },
  anongiftpaidupgrade (store, data) {
    console.log('anongiftpaidupgrade', data)
  },
  ban (store, data) {
    console.log('ban', data)
  },
  chat (store, data) {
    store.dispatch('messages/add', data)
  },
  cheer (store, data) {
    console.log('cheer', data)
  },
  clearchat (store, data) {
    console.log('clearchat', data)
  },
  connected (store, data) {
    console.log('connected', data)
  },
  connecting (store, data) {
    console.log('connecting', data)
  },
  disconnected (store, data) {
    console.log('disconnected', data)
  },
  emoteonly (store, data) {
    console.log('emoteonly', data)
  },
  emotesets (store, data) {
    console.log('emotesets', data)
  },
  followersonly (store, data) {
    console.log('followersonly', data)
  },
  giftpaidupgrade (store, data) {
    console.log('giftpaidupgrade', data)
  },
  hosted (store, data) {
    console.log('hosted', data)
  },
  hosting (store, data) {
    console.log('hosting', data)
  },
  join (store, data) {
    store.dispatch('users/add', data)
    console.log('join', data)
  },
  logon (store, data) {
    console.log('logon', data)
  },
  message (store, data) {
    console.log('message', data)
  },
  messagedeleted (store, data) {
    console.log('messagedeleted', data)
  },
  mod (store, data) {
    console.log('mod', data)
  },
  mods (store, data) {
    console.log('mods', data)
  },
  notice (store, data) {
    console.log('notice', data)
  },
  part (store, data) {
    console.log('part', data)
  },
  ping (store, data) {
    console.log('ping', data)
  },
  pong (store, data) {
    console.log('pong', data)
  },
  r9kbeta (store, data) {
    console.log('r9kbeta', data)
  },
  raided (store, data) {
    console.log('raided', data)
  },
  rawMessage (store, data) {
    console.log('rawMessage', data)
  },
  reconnect (store, data) {
    console.log('reconnect', data)
  },
  resub (store, data) {
    console.log('resub', data)
  },
  roomstate (store, data) {
    console.log('roomstate', data)
  },
  serverchange (store, data) {
    console.log('serverchange', data)
  },
  slowmode (store, data) {
    console.log('slowmode', data)
  },
  subgift (store, data) {
    console.log('subgift', data)
  },
  submysterygift (store, data) {
    console.log('submysterygift', data)
  },
  subscribers (store, data) {
    console.log('subscribers', data)
  },
  subscription (store, data) {
    console.log('subscription', data)
  },
  timeout (store, data) {
    console.log('timeout', data)
  },
  unhost (store, data) {
    console.log('unhost', data)
  },
  unmod (store, data) {
    console.log('unmod', data)
  },
  vips (store, data) {
    console.log('vips', data)
  },
  whisper (store, data) {
    console.log('whisper', data)
  }
}

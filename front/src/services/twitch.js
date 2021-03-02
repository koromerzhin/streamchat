export default {
  launch (socket, twitch) {
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
            twitch.action(data)
            break
          case 'anongiftpaidupgrade':
            twitch.anongiftpaidupgrade(data)
            break
          case 'ban':
            twitch.ban(data)
            break
          case 'chat':
            twitch.chat(data)
            break
          case 'cheer':
            twitch.cheer(data)
            break
          case 'clearchat':
            twitch.clearchat(data)
            break
          case 'connected':
            twitch.connected(data)
            break
          case 'connecting':
            twitch.connecting(data)
            break
          case 'disconnected':
            twitch.disconnected(data)
            break
          case 'emoteonly':
            twitch.emoteonly(data)
            break
          case 'emotesets':
            twitch.emotesets(data)
            break
          case 'followersonly':
            twitch.followersonly(data)
            break
          case 'giftpaidupgrade':
            twitch.giftpaidupgrade(data)
            break
          case 'hosted':
            twitch.hosted(data)
            break
          case 'hosting':
            twitch.hosting(data)
            break
          case 'join':
            twitch.join(data)
            break
          case 'logon':
            twitch.logon(data)
            break
          case 'message':
            twitch.message(data)
            break
          case 'messagedeleted':
            twitch.messagedeleted(data)
            break
          case 'mod':
            twitch.mod(data)
            break
          case 'mods':
            twitch.mods(data)
            break
          case 'notice':
            twitch.notice(data)
            break
          case 'part':
            twitch.part(data)
            break
          case 'ping':
            twitch.ping(data)
            break
          case 'pong':
            twitch.pong(data)
            break
          case 'r9kbeta':
            twitch.r9kbeta(data)
            break
          case 'raided':
            twitch.raided(data)
            break
          case 'raw_message':
            twitch.rawMessage(data)
            break
          case 'reconnect':
            twitch.reconnect(data)
            break
          case 'resub':
            twitch.resub(data)
            break
          case 'roomstate':
            twitch.roomstate(data)
            break
          case 'serverchange':
            twitch.serverchange(data)
            break
          case 'slowmode':
            twitch.slowmode(data)
            break
          case 'subgift':
            twitch.subgift(data)
            break
          case 'submysterygift':
            twitch.submysterygift(data)
            break
          case 'subscribers':
            twitch.subscribers(data)
            break
          case 'subscription':
            twitch.subscription(data)
            break
          case 'timeout':
            twitch.timeout(data)
            break
          case 'unhost':
            twitch.unhost(data)
            break
          case 'unmod':
            twitch.unmod(data)
            break
          case 'vips':
            twitch.vips(data)
            break
          case 'whisper':
            twitch.whispe(data)
            break
          default:
        }
      })
    })
  },
  action (data) {
    console.log('action', data)
  },
  anongiftpaidupgrade (data) {
    console.log('anongiftpaidupgrade', data)
  },
  ban (data) {
    console.log('ban', data)
  },
  chat (data) {
    console.log('chat', data)
  },
  cheer (data) {
    console.log('cheer', data)
  },
  clearchat (data) {
    console.log('clearchat', data)
  },
  connected (data) {
    console.log('connected', data)
  },
  connecting (data) {
    console.log('connecting', data)
  },
  disconnected (data) {
    console.log('disconnected', data)
  },
  emoteonly (data) {
    console.log('emoteonly', data)
  },
  emotesets (data) {
    console.log('emotesets', data)
  },
  followersonly (data) {
    console.log('followersonly', data)
  },
  giftpaidupgrade (data) {
    console.log('giftpaidupgrade', data)
  },
  hosted (data) {
    console.log('hosted', data)
  },
  hosting (data) {
    console.log('hosting', data)
  },
  join (data) {
    console.log('join', data)
  },
  logon (data) {
    console.log('logon', data)
  },
  message (data) {
    console.log('message', data)
  },
  messagedeleted (data) {
    console.log('messagedeleted', data)
  },
  mod (data) {
    console.log('mod', data)
  },
  mods (data) {
    console.log('mods', data)
  },
  notice (data) {
    console.log('notice', data)
  },
  part (data) {
    console.log('part', data)
  },
  ping (data) {
    console.log('ping', data)
  },
  pong (data) {
    console.log('pong', data)
  },
  r9kbeta (data) {
    console.log('r9kbeta', data)
  },
  raided (data) {
    console.log('raided', data)
  },
  rawMessage (data) {
    console.log('rawMessage', data)
  },
  reconnect (data) {
    console.log('reconnect', data)
  },
  resub (data) {
    console.log('resub', data)
  },
  roomstate (data) {
    console.log('roomstate', data)
  },
  serverchange (data) {
    console.log('serverchange', data)
  },
  slowmode (data) {
    console.log('slowmode', data)
  },
  subgift (data) {
    console.log('subgift', data)
  },
  submysterygift (data) {
    console.log('submysterygift', data)
  },
  subscribers (data) {
    console.log('subscribers', data)
  },
  subscription (data) {
    console.log('subscription', data)
  },
  timeout (data) {
    console.log('timeout', data)
  },
  unhost (data) {
    console.log('unhost', data)
  },
  unmod (data) {
    console.log('unmod', data)
  },
  vips (data) {
    console.log('vips', data)
  },
  whisper (data) {
    console.log('whisper', data)
  }
}

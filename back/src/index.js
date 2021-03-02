const express = require('express');
require('dotenv').config()
const tmi = require('tmi.js');
const app = express();
const port = 3000
const tmiConfig = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: process.env.TWITCH_CHANNEL,
    password: process.env.TWITCH_PASSWORD
  },
  channels: [
    process.env.TWITCH_CHANNEL
  ]
}

function connectTwitch(twitch, io, socket) {
  twitch.on("action", (channel, userstate, message, self) => {
    const data = {channel, userstate, message, self}
    io.emit('twitch-action', data)
  });
  twitch.on("anongiftpaidupgrade", (channel, userstate, message) => {
    const data = {channel, userstate, message}
    io.emit('twitch-anongiftpaidupgrade', data)
  });
  twitch.on("ban", (channel, username, reason, userstate) => {
    const data = {channel, username, reason, userstate}
    io.emit('twitch-ban', data)
  });
  twitch.on("chat", (channel, userstate, message, self) => {
    const data = {channel, userstate, message, self}
    io.emit('twitch-chat', data)
  });
  twitch.on("cheer", (channel, userstate, message) => {
    const data = {channel, userstate, message}
    io.emit('twitch-cheer', data)
  });
  twitch.on("clearchat", (channel) => {
    const data = {channel}
    io.emit('twitch-clearchat', data)
  });
  twitch.on("connected", (address, port) => {
    const data = {address, port}
    io.emit('twitch-connected', data)
  });
  twitch.on("connecting", (address, port) => {
    const data = {address, port}
    io.emit('twitch-connecting', data)
  });
  twitch.on("disconnected", (reason) => {
    const data = {reason}
    io.emit('twitch-disconnected', data)
  });
  twitch.on("emoteonly", (channel, enabled) => {
    const data = {channel, enabled}
    io.emit('twitch-emoteonly', data)
  });
  twitch.on("emoteonly", (channel, enabled) => {
    const data = {channel, enabled}
    io.emit('twitch-emoteonly', data)
  });
  twitch.on("emotesets", (sets, obj) => {
    const data = {sets, obj}
    io.emit('twitch-emotesets', data)
  });
  twitch.on("followersonly", (channel, enabled, length) => {
    const data = {channel, enabled, length}
    io.emit('twitch-followersonly', data)
  });
  twitch.on("giftpaidupgrade", (channel, username, sender, userstate) => {
    const data = {channel, username, sender, userstate}
    io.emit('twitch-giftpaidupgrade', data)
  });
  twitch.on("hosted", (channel, username, viewers, autohost) => {
    const data = {channel, username, viewers, autohost}
    io.emit('twitch-hosted', data)
  });
  twitch.on("hosting", (channel, target, viewers) => {
    const data = {channel, target, viewers}
    io.emit('twitch-hosting', data)
  });
  twitch.on("join", (channel, username, self) => {
    const data = {channel, username, self}
    io.emit('twitch-join', data)
  });
  twitch.on("logon", () => {
    const data = {}
    io.emit('twitch-logon', data)
  });
  twitch.on("message", (channel, userstate, message, self) => {
    const data = {channel, userstate, message, self}
    io.emit('twitch-message', data)
  });
  twitch.on("messagedeleted", (channel, username, deletedMessage, userstate) => {
    const data = {channel, username, deletedMessage, userstate}
    io.emit('twitch-messagedeleted', data)
  });
  twitch.on("mod", (channel, username) => {
    const data = {channel, username}
    io.emit('twitch-mod', data)
  });
  twitch.on("mods", (channel, mods) => {
    const data = {channel, mods}
    io.emit('twitch-mods', data)
  });
  twitch.on("notice", (channel, msgid, message) => {
    const data = {channel, msgid, message}
    io.emit('twitch-notice', data)
  });
  twitch.on("part", (channel, username, self) => {
    const data = {channel, username, self}
    io.emit('twitch-part', data)
  });
  twitch.on("ping", () => {
    const data = {}
    io.emit('twitch-ping', data)
  });
  twitch.on("pong", (latency) => {
    const data = {latency}
    io.emit('twitch-pong', data)
  });
  twitch.on("r9kbeta", (channel, enabled) => {
    const data = {channel, enabled}
    io.emit('twitch-r9kbeta', data)
  });
  twitch.on("raided", (channel, username, viewers) => {
    const data = {channel, username, viewers}
    io.emit('twitch-raided', data)
  });
  twitch.on("raw_message", (messageCloned, message) => {
    const data = {messageCloned, message}
    io.emit('twitch-raw_message', data)
  });
  twitch.on("reconnect", () => {
    const data = {}
    io.emit('twitch-reconnect', data)
  });
  twitch.on("resub", (channel, username, months, message, userstate, methods) => {
    const data = {channel, username, months, message, userstate, methods}
    io.emit('twitch-resub', data)
  });
  twitch.on("roomstate", (channel, state) => {
    const data = {channel, state}
    io.emit('twitch-roomstate', data)
  });
  twitch.on("serverchange", (channel) => {
    const data = {channel}
    io.emit('twitch-serverchange', data)
  });
  twitch.on("slowmode", (channel, enabled, length) => {
    const data = { latencychannel, enabled, length }
    io.emit('twitch-slowmode', data)
  });
  twitch.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
    const data = {channel, username, streakMonths, recipient, methods, userstate}
    io.emit('twitch-subgift', data)
  });
  twitch.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
    const data = {channel, username, numbOfSubs, methods, userstate}
    io.emit('twitch-submysterygift', data)
  });
  twitch.on("subscribers", (channel, enabled) => {
    const data = {channel, enabled}
    io.emit('twitch-subscribers', data)
  });
  twitch.on("subscription", (channel, username, method, message, userstate) => {
    const data = {channel, username, method, message, userstate}
    io.emit('twitch-subscription', data)
  });
  twitch.on("timeout", (channel, username, reason, duration, userstate) => {
    const data = {channel, username, reason, duration, userstate}
    io.emit('twitch-timeout', data)
  });
  twitch.on("unhost", (channel, viewers) => {
    const data = {channel, viewers}
    io.emit('twitch-unhost', data)
  });
  twitch.on("unmod", (channel, username) => {
    const data = {channel, username}
    io.emit('twitch-unmod', data)
  });
  twitch.on("vips", (lachannel, vipstency) => {
    const data = {channel, vips}
    io.emit('twitch-vips', data)
  });
  twitch.on("whisper", (from, userstate, message, self) => {
    const data = {from, userstate, message, self}
    io.emit('twitch-whisper', data)
  });
}


const server = app.listen(port, () =>  {
    console.log('server running on port '+port);
});
const io = require('socket.io')(server, {
  cors: {
    origin: "http://streamchat.traefik.me",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log(socket.id)
  let twitch = new tmi.client(tmiConfig);
  twitch.connect();
  connectTwitch(twitch, io, socket)
  socket.on('SEND_MESSAGE', (data) => {
      io.emit('MESSAGE', data)
  });
});
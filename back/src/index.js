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

  twitch.on("connected", (address, port) => {
    console.log('BOT activé');
  })


  twitch.on("hosting", (channel, target, viewers) => {
    const data = {
      channel,
      target,
      viewers
    };
    const name = "twitch-hosting"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("hosted", (channel, username, viewers, autohost) => {
    const data = {
      channel,
      username,
      target,
      viewers,
      autohost
    };
    const name = "twitch-hosted"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on('join', (channel, username, self) => {
    if (self) return;
    const data = {
      channel,
      username
    };
    const name = "twitch-join"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("raided", (channel, username, viewers) => {
    const data = {
      channel,
      username,
      viewers
    };
    const name = "twitch-raided"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on('subscription', (channel, username, method, message, userstate) => {
    const data = {
      channel,
      username,
      method,
      message,
      userstate
    };
    const name = "twitch-subscription"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("message", (channel, userstate, message, self) => {
    const data = {
      channel,
      userstate,
      message
    };
    const name = "twitch-message"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("vips", (channel, vips) => {
    const data = {
      channel,
      vips
    }
    const name = "twitch-vips"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("part", (channel, username, self) => {
    if (self) return;
    const data = {
      channel,
      username
    };
    const name = "twitch-part"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on('cheer', (channel, userstate, message) => {
    const data = {
      channel,
      userstate,
      message
    };
    const name = "twitch-cheer"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on('resub', (channel, username, months, message, userstate, methods) => {
    const data = {
      channel,
      username,
      months,
      message,
      userstate,
      methods
    };
    const name = "twitch-resub"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on('unhost', (channel, viewers) => {
    const data = {
      channel,
      viewers
    };
    const name = "twitch-unhost"
    console.log(name, data);
    io.emit(name, data);
  });

  twitch.on("whisper", (from, userstate, message, self) => {
    // Don't listen to my own messages..
    if (self) return;

    const data = {
      from,
      userstate,
      message
    };
    const name = "twitch-whisper"
    console.log(name, data);
    io.emit(name, data);
    // Do your stuff.
  });

  twitch.on("action", (channel, userstate, message, self) => {
    // Don't listen to my own messages..
    if (self) return;

    const data = {
      channel,
      userstate,
      message
    };
    const name = "twitch-action"
    console.log(name, data);
    io.emit(name, data);

    // Do your stuff.
  });

  twitch.on("subscribers", (channel, enabled) => {
    const data = {
      channel,
      enabled
    }
    const name = "twitch-subscribers"
    console.log(name, data);
    io.emit(name, data);
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
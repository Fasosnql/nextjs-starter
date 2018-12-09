const express = require('express');
const next = require('next');

const config = require('./config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dir: './src', dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(config.serverConfig.devPort, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${config.serverConfig.devPort}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });
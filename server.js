const express = require('express');
const next = require('next');

const config = require('./config');

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? config.serverConfig.devPort : config.serverConfig.prodPort;
const app = next({dir: './src', dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });

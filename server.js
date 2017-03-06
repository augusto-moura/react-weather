const express = require('express');

const PORTA = process.env.PORT || 3000;

const app = express();

app
  .use((req, res, next) => {
    if (req.headers['x-forwaded-proto'] === 'http') {
      next();
    } else {
      res.redirect(`http://${req.hostname + req.url}`);
    }
  })
  .use(express.static('public'))
  .listen(PORTA, () => console.log(`Servidor subiu na porta: ${PORTA}`));

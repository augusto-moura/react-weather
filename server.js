const express = require('express');

const PORTA = 3000;

const app = express();

app.use(express.static('public'));

app.listen(PORTA, () => console.log(`Servidor subiu na porta: ${PORTA}`));

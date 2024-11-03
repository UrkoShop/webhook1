// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000; // Vercel bo uporabil ta port, kadar zaženete lokalno

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Definiramo endpoint za Tebex webhook
app.post('/api/webhook', (req, res) => {
    console.log('Prejeta Tebex webhook data:', req.body);
    // Obdelajte podatke iz webhooka
    res.status(200).send('Webhook prejet');
});

// Zagon strežnika (potreben samo lokalno)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Strežnik deluje lokalno na portu ${PORT}`);
    });
}

module.exports = app;

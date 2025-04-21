
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const braintree = require('braintree');
const app = express();
app.use(bodyParser.json());

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: process.env.BT_MERCHANT_ID,
    publicKey: process.env.BT_PUBLIC_KEY,
    privateKey: process.env.BT_PRIVATE_KEY,
});

app.get('/client_token', async (req, res) => {
    try {
        const response = await gateway.clientToken.generate({});
        res.send({ clientToken: response.clientToken });
    } catch (err) {
        res.status(500).send({ error: 'Failed to generate token' });
    }
});

app.post('/checkout', async (req, res) => {
    try {
        const result = await gateway.transaction.sale({
            amount: '10.00',
            paymentMethodNonce: req.body.nonce,
            options: { submitForSettlement: true }
        });
        if (result.success) {
            res.send({ message: 'Transaction successful!' });
        } else {
            res.status(500).send({ message: 'Transaction failed.' });
        }
    } catch (err) {
        res.status(500).send({ message: 'Server error during transaction.' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

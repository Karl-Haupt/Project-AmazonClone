const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51HybYgLiB3sPftj43BhINjIqvP6CIAoWLlUrPVvv2knVfydUUZVeSKvBWYiJWWO5M7Mz0wozkekR3agPJuh4kb0l00uIYOzPPY');//api secret key

//API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true}));
app.use(express.json()); //Allows us to send data in a json form

// - Api Routes
app.get('/', ( request, response ) => response.status(200).send('Hello World'))


app.post('/payments/create', async (request, response ) => {
    const total = request.query.total;

    console.log('Payment request recieved ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //Subunits at the currency
        currency: "usd",
    });

    //Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})
// - Listen command
exports.api = functions.https.onRequest(app); 

//Endpoint: http://localhost:5001/clone-b0837/us-central1/api
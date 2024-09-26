/**
 * Lab Exercise 4 - Full Stack
 * @author: Jam Furaque
 */

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

// GET /hello:
app.get('/hello', (req, res) => {
    res.status(200);
    res.send('<h1> Hello, Express JS! </h1>');
});


// GET /user:
app.get('/user', (req, res) => {
    const { firstname = "Pritesh", lastname = "Patel"} = req.query;
    res.status(200);
    res.json({ firstname, lastname});
});


// POST /user:
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params
    res.status(200);
    res.json({ firstname , lastname});
});


app.listen(PORT, () => {
    console.log(`Listening to port http://localhost:${PORT}`);
});
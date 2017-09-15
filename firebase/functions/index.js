const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');

const app = express()
app.use(cors({ origin: true }))
app.get("/", (request, response) => {
	response.send("Hello from Express on Firebase with CORS!")
})
app.use(routes);

// app.listen(3000, function() {
// 	console.log('Servidor funcionando en http://localhost:3000');
// });

exports.app = functions.https.onRequest(app);
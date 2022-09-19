const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/product')
const latestProductRoutes = require('./routes/latestProduct')

const app = express();
const port = process.env.PORT || 4000; 
app.use(cors());

//middleware
app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', latestProductRoutes)


app.get('/latest-products', (request, response) => {
    response.send(` [
        { "id": 1, "image": "images/carousel/image1.jpg", "title": "Avatar"},
        { "id": 2, "image": "images/carousel/image2.jpg", "title": "Sueters"},
        { "id": 3, "image":"images/carousel/image3.jpg", "title": "StarWars"},
        { "id": 4, "image": "images/carousel/image4.jpg", "title": "Nikelodeon"}
    ]`);
})

app.get('/offices', (request, response) => {
    response.send(` [
        { "id": 1, "adress": "Bustillo 6200", "phone": "0303456" },
        { "id": 2, "adress": "Mitre 300", "phone": "0303456"},
        { "id": 3, "adress":"Martin Jereb 100", "phone": "0303456"},
        { "id": 4, "adress": "Felix Goye 700", "phone": "0303456"}
    ]`);
})

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to Mongo DB Atlas'))
.catch((error) => console.error(error));

app.listen(4000, () => {
    console.log('Server started', port)
});
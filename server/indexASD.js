const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; 
app.use(cors());

app.get('/main-products', (request, response) => {
    response.send(` [
        { "id": 1, "image": "images/articulos/buzo1.jpg", "title": "Buzo El beso", "price": 4500 },
        { "id": 2, "image": "images/articulos/camisa1.jpg", "title": "Camisa Chicas SP", "price": 3050 },
        { "id": 3, "image":"images/articulos/gorro1.jpg", "title": "Gorro Totoro", "price": 4000 },
        { "id": 4, "image": "images/articulos/gorro2.jpg", "title": "Gorro Star Wars", "price": 1500 },
        { "id": 5, "image": "images/articulos/pantalon1.jpg", "title": "Pantalón", "price": 3500 }
    ]`);
})

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

app.listen(3000, () => {
    console.log('Server started', port)
});
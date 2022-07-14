import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function Product(props) {
    const altText = `Imagen de un ${props.value.tittle}`;
    return (
        <article class = 'articulo'>
            <img src={props.value.image} alt={altText}/>
            <h3> {props.value.title} </h3>
            <h3> $ {props.value.price} </h3>
        </article>
    );
}

function ProductList(props) {
    const products = [
        { id: 1, image: "images/articulos/buzo1.jpg", title: "Buzo", price: 7500  },
        { id: 2, image: "images/articulos/camisa1.jpg", title: 'Camisa', price: 6000 },
        { id: 3, image: "images/articulos/gorro1.jpg", title: 'Gorro', price: 1500 },
        { id: 4, image: "images/articulos/gorro2.jpg", title: 'Gorro', price: 1500 },
        { id: 6, image: "images/articulos/pantalon1.jpg", title: 'Pantalon', price: 1200 },
      ];

    const productElements = products.map(product => (
        <Product value={product}/>
      ))

    return (
        <div className='articulos'>
            {productElements}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductList />);
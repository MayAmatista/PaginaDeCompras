import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import LikeComponent from './like-component';
import './styles.css';


function Product(props) {
    const [liked, setLiked] = useState(false);

    const altText = `Imagen de ${props.value.title}`;
    const currentClass = liked ? 'liked' : 'no-liked';

    return (
        <article className = {currentClass}>
            <img src = {props.value.image} alt = {altText} />
            <h3> {props.value.title} </h3>
            <h3> $ {props.value.price} </h3>
            <LikeComponent state = {liked} className = 'icon' onClick={() => setLiked(!liked)}></LikeComponent>
        </article>
    );
}

function ProductList(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3000/main-products';

        fetch(url)
            .then(response => response.json())
            .then((productos) => {
                setProducts(productos)
            })

            .catch(err => console.log(err))

    }, [])



    const productElements = products.map(product => (
        <Product key = {product.id} value = {product} />
    ))

    return (
        <div className='articulos'>
            {productElements}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('productos'));
root.render(<ProductList/>);



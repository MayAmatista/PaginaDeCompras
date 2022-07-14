import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';


function Product(props) {
    const altText = `Imagen de un ${props.value.title}`;
    return (
        <article className='articulo'>
            <img src={props.value.image} alt={altText} />
            <h3> {props.value.title} </h3>
            <h3> $ {props.value.price} </h3>
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
        <Product key={product.id} value={product} />
    ))

    return (
        <div className='articulos'>
            {productElements}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductList />);



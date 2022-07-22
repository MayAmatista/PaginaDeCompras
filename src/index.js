import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import LikeComponent from './like-component';
import './styles.css';

//Componente que renderiza al articulo
//Componente padre: ProductLis; componentes hijos: LikeComponent

function Product(props) {
    const [liked, setLiked] = useState(false);
    const [order, setOrder] = useState(0);

    const altText = `Imagen de ${props.value.title}`;
    const currentClass = liked ? 'liked' : 'no-liked';

    function onClick(){
        if (!liked){
            setOrder(props.maxOrder)
            props.onLike();
        } else {
            setOrder(0)
        }
        setLiked(!liked)
    }

    return (
        <article className = {currentClass} style = {{order: order}}>
            <img src = {props.value.image} alt = {altText} />
            <h3> {props.value.title} </h3>
            <h3> $ {props.value.price} </h3>
            <LikeComponent state = {liked} className = 'icon' onClick={onClick}></LikeComponent>
        </article>
    );
}


//Componente que renderiza la lista de productos desde la API
//Componentes hijos: Products

function ProductList(props) {

    const [products, setProducts] = useState([])
    const [maxOrder, setMaxOrder] = useState(0)

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
        <Product key = {product.id} value = {product} maxOrder={maxOrder} onLike={() => setMaxOrder(maxOrder - 1)}/>
    ))

    return (
        <div className='articulos'>
            {productElements}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('productos'));
root.render(<ProductList/>);



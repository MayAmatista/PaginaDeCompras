import React, { useState, useEffect } from 'react';
import LikeComponent from './like-component';
import '../styles.css';
import { render } from '@testing-library/react';

//Componente que renderiza al articulo
//Componente padre: ProductLis; componentes hijos: LikeComponent

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            order: 0
        }
    }

    render() {
        const altText = `Imagen de ${this.props.value.title}`;
        const currentClass = this.state.liked ? 'liked' : 'no-liked';

        return (
            <article className={currentClass} style={{ order: this.state.order }}>
                <img src={this.props.value.image} alt={altText} />
                <h3>{this.props.value.title} </h3>
                <h3> $ {this.props.value.price} </h3>
                <LikeComponent liked={this.state.liked} className='icon' onClick={() => this.onClick()}></LikeComponent>
            </article>
        );
    }

    onClick() {
        if (!this.state.liked) {
            this.setState({order: this.props.maxOrder -1});
            this.props.onLike();
        } else {
            this.setState({order: 0})
        }
        this.setState({liked: !this.state.liked})
    }

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
        <Product key={product.id} value={product} maxOrder={maxOrder} onLike={() => setMaxOrder(maxOrder - 1)} />
    ))

    return (
        <div className='articulos' >
            {productElements}
        </div>
    );
}

export { ProductList };
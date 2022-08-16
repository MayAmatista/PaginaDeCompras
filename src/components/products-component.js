import React from 'react';
import LikeComponent from './like-component';
import '../styles.css';

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
            this.setState({ order: this.props.maxOrder - 1 });
            this.props.onLike();
        } else {
            this.setState({ order: 0 })
        }
        this.setState({ liked: !this.state.liked })
    }

}


//Componente que renderiza la lista de productos desde la API
//Componentes hijos: Products
class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            maxOrder: 0
        }
    }



    componentDidMount() {
        const url = 'http://localhost:3000/main-products'

        fetch(url)
            .then(response => response.json())
            .then(productos => this.setState({ products: productos }))
            .catch(err => console.log(err));
    }

    filtrarProductos() {
        return (
            this.state.products.filter(product => product.title.toLowerCase().includes(this.props.search.toLowerCase()))
        )
    }


    render() {
        const productElements = this.filtrarProductos().map(product => (
            <Product key={product.id} value={product} maxOrder={this.state.maxOrder} onLike={() => this.setState({ maxOrder: this.state.maxOrder - 1 })}> </Product>
        ))
        return (
            <div className='articulos' >
                {productElements}
            </div>
        );

    }

}


export { ProductList };
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// Hacer un componente de clases para el buscador
//un metodo que se encargue de la busqueda seteando el estado search
// traer con fetch los articulos que coincidan con la búsqueda 
// renderizar la productList a partir de lo que obtenga de esa request
class SearchComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: '',
            products: ['buzo','gorro']
        }
    }

    searcher(e){
    const valor = this.setState({search: e.target.value})
    console.log(this.state.search);
    }
    render(){
        return (
            <div className="buscador"> 
                <input onChange = {(e) => this.searcher(e)}  type="text" placeholder="Buscar"></input>
                <FontAwesomeIcon className= 'lupa-icon' icon= {faMagnifyingGlass} />
                <h2> {this.state.search} </h2>
            </div>
        );
    }
}

export {SearchComponent}
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// Hacer un componente de clases para el buscador
//un metodo que se encargue de la busqueda seteando el estado search
// traer con fetch los articulos que coincidan con la búsqueda 
// renderizar la productList a partir de lo que obtenga de esa request

//Para el futuro, cuando empiece a hacer la navegación el searchComponent además de cambiar el estado
//tiene que redirigir a home
class SearchComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            search: ''
        }
    }

    searcher(e){
        this.setState({search: e.target.value})
        this.props.setSearch(e.target.value);
    }

    
    render(){
        return (
            <div className="buscador"> 
                <input onChange = {(e) => this.searcher(e)}  type="text" placeholder="Buscar"></input>
                <FontAwesomeIcon className= 'lupa-icon' icon= {faMagnifyingGlass} />
            </div>
        );
    }
}

export {SearchComponent}
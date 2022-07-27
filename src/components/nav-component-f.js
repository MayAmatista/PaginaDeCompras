import React from "react";
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {ProductList} from './products-component'

function NavComponent(props){
    return (
        <div className="buscador"> 
            <input type="text" placeholder="Buscar"></input>
            <FontAwesomeIcon className= 'lupa-icon' icon= {faMagnifyingGlass} />
        </div>
    );
}


export {NavComponent}; 
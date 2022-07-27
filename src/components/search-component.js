import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {ProductList} from './products-component'

function SearchComponent(props){
  const products = {ProductList}; 
    const [search, setSearch] = useState('');

    function searcher(e){
        setSearch(e.target.value);
        console.log({ProductList});
    }
    
    console.log(search)
    return (
        <div className="buscador"> 
            <input onChange={searcher} type="text" placeholder="Buscar"></input>
            <FontAwesomeIcon className= 'lupa-icon' icon= {faMagnifyingGlass} />
        </div>
    );
}


export {SearchComponent}; 
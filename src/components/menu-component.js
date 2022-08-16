import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

//Hacer un componente, que sea un div
//adentro tiene que tener una lista con distintas opciones
//una cruz para cerrarlo
//puede tener un estado que sea visible/no visible ver si vale la pena



const Menu = (props) => {
    const [open, setOpen] = useState(false);

    function redirect(){
        setOpen(false)
        props.cleanSearch()
    }

    return (
        <div className='menu'>
            <button className='hamburger-button' onClick={() => { setOpen(!open) }} ><FontAwesomeIcon icon={faAlignJustify} /></button>
            <NavWrapper open={open} onClick = {() => redirect()}></NavWrapper>
        </div>
    );
}

const NavWrapper = (props) => {
    const [open, setOpen] = useState(false);

    return props.open ? (
            <div className='menu-wrapper' onClick = { props.onClick }>
                <Link className="item-nav-wrapper" to='#'> Filtrar por: </Link>
                <Link className="item-nav-wrapper" to= '/offices'>Sucursales</Link>
                <Link className="item-nav-wrapper" to= '/offices'>Trabajá con nosotres</Link>
                <Link className="item-nav-wrapper" to= '#'>Contacto</Link>           
            </div>
    ) : (
        <ul>

        </ul>
    )
}

//El filtrar por, tiene que abrir otro menu, el mismo estará compuesto por:
//* Categorias -> abre otro menú -> nombre de las categorías,Todos los productos, Buzos, remeras, etc. Un Select
//* Precios -> un rango que vaya desde el producto más barato, al más alto, no usar valores harcodeados,
//* Ofertas -> todos aquellos productos en oferta, ver que lo determina. 
//* Más vedidos -> los primeros 6 productos más vendidos

//Sucursales: ver como incoporar os mapas, las sucursales son obtenidas por un fetch.

//Trabajá con nosotres, puede ser un form, para cargar datos,
// o bien cards con distintas ofertas, a las que se pueden postular

//Contacto, mail, telefono, oficina central


export { Menu };

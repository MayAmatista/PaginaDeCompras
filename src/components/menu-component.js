import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BranchOffices } from './branch-offices-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

//Hacer un componente, que sea un div
//adentro tiene que tener una lista con distintas opciones
//una cruz para cerrarlo
//puede tener un estado que sea visible/no visible ver si vale la pena



const Menu = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='menu'>
            <button className='hamburger-button' onClick={() => { setOpen(!open) }} ><FontAwesomeIcon icon={faAlignJustify} /></button>
            <NavWrapper open={open}></NavWrapper>
        </div>
    );
}

const NavWrapper = (props) => {
    return props.open ? (
            <div className='menu-wrapper'>
                <Link className="item-nav-wrapper" to='#'> Filtrar por</Link>
                <Link className="item-nav-wrapper" to='#'> Sale</Link>
                <Link className="item-nav-wrapper" to='#'>Más vendidos</Link> 
                <Link className="item-nav-wrapper" to= '/offices'>Sucursales</Link>
                <Link className="item-nav-wrapper" to= '#'>Contacto</Link>           
            </div>
    ) : (
        <ul>

        </ul>
    )
}


export { Menu };

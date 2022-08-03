import React, {useState} from "react";
import {BranchOffices} from './branch-offices-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
//Hacer un componente, que sea un div
//adentro tiene que tener una lista con distintas opciones
//una cruz para cerrarlo
//puede tener un estado que sea visible/no visible ver si vale la pena

const Menu = (props) => {
    const [open,setOpen] = useState(false);

        return (
            <div className= 'menu'>
                <button className='hamburger-button' onClick= {()=> {setOpen(!open)}} ><FontAwesomeIcon icon= {faAlignJustify} /></button>
                <NavWrapper open= {open}></NavWrapper>
            </div>
        );
    }

const NavWrapper = (props) => {
    return props.open?(
    <ul className= 'menu-wrapper'>
        <li><a href="">Sale</a></li>
        <li><a href="">Más vendidos</a></li>
        <li><a href="">Sucursales</a></li>
        <li><a href="">Contacto</a></li>
    </ul>
    ):(
    <ul>
        
    </ul>
    )
}

export {Menu};
    
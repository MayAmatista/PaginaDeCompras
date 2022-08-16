import ReactDOM from 'react-dom/client';
import React, {useState, useEffect} from 'react';
//import {GoogleMap, withScriptJs,withGoogleMap} from 'react-google-maps'

//Integrar mapa
//API KEY: AIzaSyBXaprf78yhDgeD1raD4-aAloAlspJLxX8

const Office = (props) => {
    return(
        <div className='office'>
            <h2>{props.value.adress}</h2>
            <h3>Teléfono: {props.value.phone}</h3>
        </div>
    )

}
const BranchOffices = (props) => {

    const [offices, setOffices] = useState([])

    useEffect(() => {
        const url = 'http://localhost:3000/offices';

        fetch(url)
            .then(response => response.json())
            .then((offices) => {
                setOffices(offices)
            })

            .catch(err => console.log(err))

    }, [])

    const officeElements= offices.map(office => (
        <Office key={office.id} value={office}> </Office>
    ))

    return (
        <main>
            <h1 className='office'>SUCURSALES</h1>
            {officeElements}
        </main>
    )
}

export { BranchOffices }
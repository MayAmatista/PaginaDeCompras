import React, { useState, useEffect } from 'react';

function Carousel(props){

    const [index, setIndex] = useState(0);
    const [imagenes, setImagenes] = useState([]);


    useEffect(() => {
        const url = 'http://localhost:4000/latest-products';

        fetch(url)
            .then(response => response.json())
            .then(ultimosProductos => setImagenes(ultimosProductos))
            .catch(err => console.log(err))

    }, [])

const latestProducts = imagenes.map(image => (
    <img src={image.image} alt={image.title} key = { image.id } value = { image } index= {imagenes.indexOf(image)}/>
))   

function previous(){
     index === 0 ? setIndex(imagenes.length - 1) : setIndex(index - 1);
}
function next(){
     index === imagenes.length - 1 ? setIndex(0) : setIndex(index + 1);
}


return(
    <div className = "carousel">
        {latestProducts[index]}
        <button className='carousel-button' id = 'button-previous' onClick={previous}> {'<'} </button>
        <button className='carousel-button' id = 'button-next' onClick={next}> {'>'} </button>
    </div>
)
}

export {Carousel}


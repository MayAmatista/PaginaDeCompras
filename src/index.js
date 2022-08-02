import { ProductList } from './components/products-component'
import { SearchComponent } from './components/nav-component-f'
import ReactDOM from 'react-dom/client';
import { Carousel } from './components/carousel-component'
import React, { useState, useEffect } from 'react';

const AppComponet = (props) => {
    const [searcher, setSearcher] = useState('');
    return (
        <div>
            <header>
                💳 3 y 6 cuotas sin interés! 🚀  envío gratis + $6000
            </header>
            <nav><SearchComponent setSearch = {setSearcher}/></nav>
            <main>
                <h1> THIS IS HAPPY NEW YEAR </h1>
                <Carousel/>
                <ProductList search= {searcher}/>
            </main>
            <footer>
                This is happy new year © 2022
                Todos los derechos reservados
            </footer>
        </div>
    );
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<AppComponet/>);
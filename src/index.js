import {ProductList} from './components/products-component';
import { SearchComponent } from './components/nav-component-f';
import ReactDOM from 'react-dom/client';
import {Carousel} from './components/carousel-component'

const nav = ReactDOM.createRoot(document.getElementById('search'));
nav.render(<SearchComponent/>); 
const carousel = ReactDOM.createRoot(document.getElementById('carousel'));
carousel.render(<Carousel/>); 
const root = ReactDOM.createRoot(document.getElementById('productos'));
root.render(<ProductList/>);



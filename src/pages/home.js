import { ProductList } from '../components/products-component'
import { Carousel } from '../components/carousel-component'
import React, { useState } from "react";
import { SearchComponent } from "../components/nav-component-f";

const Home = (props) => {
    const [searcher, setSearcher] = useState('');
    return (
        <div>
            <SearchComponent setSearch={setSearcher} />
            <main>
                <Carousel/>
                <ProductList search= {searcher}/>
            </main>
        </div>
    );
}

export {Home}
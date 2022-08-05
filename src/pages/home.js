import { ProductList } from '../components/products-component'
import { Carousel } from '../components/carousel-component'
import React, { useState } from "react";

const Home = (props) => {
    return (
            <main>
                <Carousel/>
                <ProductList search= {props.search}/>
            </main>
    );
}

export {Home}
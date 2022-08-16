import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu-component";
import ReactDOM from 'react-dom/client';
import { Home } from "./pages/home";
import { BranchOffices } from "./pages/branch-offices-component";
import { SearchComponent } from "./components/nav-component-f";
import React, { useState } from "react";

const App = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <header>
                💳 3 y 6 cuotas sin interés! 🚀  envío gratis + $6000
            </header>
            <BrowserRouter>
                <nav>
                    <Menu cleanSearch = {() => {setSearch('')}}></Menu>
                    <SearchComponent setSearch={setSearch} />
                    <h1> THIS IS HAPPY NEW YEAR </h1>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Home search={search} />}></Route>
                    <Route exact path="/offices" element={<BranchOffices />}></Route>
                </Routes>
            </BrowserRouter>
            <footer>
                This is happy new year © 2022
                Todos los derechos reservados
            </footer>
        </div>

    )
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);

export { App }
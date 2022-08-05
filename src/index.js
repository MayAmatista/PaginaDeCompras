import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu-component";
import ReactDOM from 'react-dom/client';
import { Home } from "./pages/home";
import { BranchOffices } from "./components/branch-offices-component";

const App = () => {
    return (
        <div>
            <header>
                💳 3 y 6 cuotas sin interés! 🚀  envío gratis + $6000
            </header>
            <nav>
                <h1> THIS IS HAPPY NEW YEAR </h1>
                <BrowserRouter>
                    <Menu></Menu>
                    <Routes>
                        <Route exact path="/" element={<Home/>}></Route>
                        <Route exact path="/offices" element={<BranchOffices/>}></Route>
                    </Routes>
                </BrowserRouter>
            </nav>
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Assistir from "./Pages/Assistir";
import PageNotFound from "./Pages/PageNotFound";
import Pesquisar from "./Pages/Pesquisar";
import Favoritos from "./Pages/Favoritos";
import FavoritesProvider from "./contexts/favoritos";
import VideoCadastro from "./Pages/VideoCadastro";

function AppRoutes() {
    return(
        <BrowserRouter>
          <FavoritesProvider >
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/assistir/:id" element={ <Assistir /> }></Route>
                <Route path="/pesquisar" element={ <Pesquisar /> }></Route>
                <Route path="/favoritos" element={ <Favoritos /> }></Route>
                <Route path="/cadastro" element={ <VideoCadastro /> }></Route>
                <Route path="*" element={ <PageNotFound /> }></Route>
            </Routes>
          </FavoritesProvider >  
        </BrowserRouter>
    )
}

export default AppRoutes;
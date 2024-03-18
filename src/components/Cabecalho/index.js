import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

function Cabecalho() {
    return(
       <header className={styles.cabecalho}>
            <Link to="/">
                <span>FILMESFLIX</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/pesquisar">Buscar</Link>
                <Link to="/favoritos">Favoritos</Link>
            </nav>
       </header>
    );
}

export default Cabecalho;
import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import styles from "./PageNotFound.module.css";
import erro404 from "./erro404.jpg";

function PageNotFound() {
    return(
        <>
            <Cabecalho />
            <section className={styles.container}>
                <h2>Ops! Página Não Encontrada</h2>
                <img src={erro404} alt="Logo do 404" />
            </section>
            <Rodape />
        </>
        
    )
}

export default PageNotFound;
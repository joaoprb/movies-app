import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import styles from "./Pesquisar.module.css";
import videos from "../../json/videos.json";
import BuscarVideoList from "../../components/BuscarVideoList";

function Pesquisar() {
    return(
        <>
            <Cabecalho />
            <Container>
                <section className={styles.pesquisar}>
                    <h2>Pesquisar</h2>
                    <BuscarVideoList videos={videos} />
                </section>
            </Container>
            <Rodape />
        </>
        
    )
}

export default Pesquisar;
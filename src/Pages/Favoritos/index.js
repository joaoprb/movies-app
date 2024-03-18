import styles from "./Favoritos.module.css";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/favoritos";

function Favoritos() {

    const { favorite } = useFavoriteContext();

    return(
        <>
            <Cabecalho />
            <Container>               
                <section className={styles.favoritos}>
                    <h2>Meus Favoritos</h2>
                    { <VideoList videos={favorite}/> }
                </section>
            </Container>
            <Rodape />
        </>
    )
}

export default Favoritos;
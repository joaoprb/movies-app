import styles from "./Assistir.module.css";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import { useParams } from "react-router-dom";
import videos from "../../json/videos.json";
import PageNotFound from "../PageNotFound";


function Assistir() {
    const parametros = useParams();
    const video = videos.find((video) => {return video.id === parametros.id })
    if(!video) {return <PageNotFound />}

    return(
       <>
        <Cabecalho />
        <Container>
            <section className={styles.assistir}>
                <h1>Assistir</h1>
                <iframe 
                    width="854" height="480" 
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </section>
        </Container>
        <Rodape />
       </> 
    )
}

export default Assistir;
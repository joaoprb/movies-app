import styles from "./BuscarVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader";

function filtrarVideos(videos, textoBuscado) {
    return videos.filter((video) => video.category.includes(textoBuscado) || 
    video.title.includes(textoBuscado))
}

function BuscarVideoList({ videos }) {

    const [textoBuscado, setTextoBuscado] = useState("");
    const videosAchados = filtrarVideos(videos, textoBuscado);

    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    return(
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={textoBuscado}
                onChange={e => setTextoBuscado(e.target.value)}
            />
            { loading ? <Loader /> :
                <VideoList 
                    videos={videosAchados}
                    emptyHeading={`Sem vídeos sobre ${textoBuscado}`}
                />
            }
        </section>
    )
}

export default BuscarVideoList;
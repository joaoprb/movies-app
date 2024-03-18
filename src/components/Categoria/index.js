import styles from "./Categoria.module.css";
import videos from "../../json/videos.json";

export const categorias = [
    "Ação",
    "Terror",
    "Drama",
    "Comédia"
  ]
  
export function filtrarCategoria(id) {
    return videos.filter( video => video.category === categorias[id])
  }

function Categoria({ categoria, children  }) {
    return(
       <section className={styles.categoria}>
            <h2>{categoria}</h2>
            <div>
                { children }
            </div>
        </section> 
    )
}

export default Categoria;
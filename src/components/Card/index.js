import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnfavorite from "./unfavorite.png";
import { useContext } from "react";
import { useFavoriteContext } from "../../contexts/favoritos";

function Card( {id} ) {

    const { favorite, addFavorite} = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = isFavorite ? iconUnfavorite : iconFavorite

    return (
        <section className={styles.card}>
            <Link to={`/assistir/${id}`}>
              <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
              alt="capa" className={styles.capa}/>
            </Link >
            <figure className={styles.icone}>
                <img 
                    src={icon} 
                    alt="icone"
                    onClick={() => addFavorite({id})}
                />
            </figure>
        </section>
    )
}

export default Card;
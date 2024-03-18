import styles from "./Banner.module.css";

function Banner({ imagem }) {
    return(
        <div
            className={styles.banner}
            style={{ backgroundImage: `url('/images/banner-${imagem}.jpg')` }}
          >
        </div>
    );
}

export default Banner;
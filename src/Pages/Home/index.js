import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import Categoria , { categorias, filtrarCategoria } from "../../components/Categoria";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import Carousel from "../../components/Carousel";


function Home() {

  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Container>

        {categorias.map((categoria, index) =>
          <Categoria categoria={categoria}>
            <Carousel>
              {filtrarCategoria(index).map((video) => <Card id={video.id} key={video.id}/>)}
            </Carousel>
          </Categoria>
        )}


      </Container>
      <Rodape />
    </>
    
  );
}

export default Home;

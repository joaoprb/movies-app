import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    )
}

export default Carousel;
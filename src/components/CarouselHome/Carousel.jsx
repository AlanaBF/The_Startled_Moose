import "../../assets/styles/components.css";
import Image1 from "../../assets/images/Illustration14.jpeg";
import Image2 from "../../assets/images/Illustration1.jpeg";
import Image3 from "../../assets/images/Illustration2.jpeg";
import Image4 from "../../assets/images/Illustration3.jpeg";
import Image5 from "../../assets/images/Illustration4.jpeg";
import Image6 from "../../assets/images/Illustration5.jpeg";
import Image7 from "../../assets/images/Illustration6.jpeg";
import Image8 from "../../assets/images/Illustration7.jpeg";
import Image9 from "../../assets/images/Illustration8.jpeg";
import Image10 from "../../assets/images/Illustration9.jpeg";
import Image11 from "../../assets/images/Illustration10.jpeg";
import Image12 from "../../assets/images/Illustration11.jpeg";
import Image13 from "../../assets/images/Illustration12.jpeg";
import Image14 from "../../assets/images/Illustration13.jpg";



function Carousel() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
  ];

  return (
    <div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={image} className="d-block w-100 carousel-image" alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;

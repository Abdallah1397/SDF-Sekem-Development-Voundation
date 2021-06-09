import "./sliderBanner.scss";
import mrHelmy from "../../assets/images/variousImage/mrHelmy.png";
import cover1 from "../../assets/images/cultural/school2.jpg";
import cover2 from "../../assets/images/cultural/DSC_3587.jpg";

const SliderBanner = () => {
  return (
    <div className="carouselBanner">
      <div id="myCarousel" className="carousel slide " data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner ">
          <div className="item active ">
            <div
              className="carouselBanner__image-div"
              style={{ backgroundImage: `url(${mrHelmy})` }}
            ></div>
          </div>

          <div className="item">
            <div
              className="carouselBanner__image-div"
              style={{ backgroundImage: `url(${cover1})` }}
            ></div>{" "}
          </div>

          <div className="item">
            <div
              className="carouselBanner__image-div"
              style={{ backgroundImage: `url(${cover2})` }}
            ></div>{" "}
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};
export default SliderBanner;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="/images/amazon-banner-1.jpg"
            alt="Amazon Banner 1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/images/amazon-banner-2.jpg"
            alt="Amazon Banner 2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="/images/amazon-banner-3.jpg"
            alt="Amazon Banner 3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

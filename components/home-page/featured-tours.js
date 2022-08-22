import classes from "./featured-tours.module.css";
import Button from "../ui/button";
import TourItem from "../tour/tour-item";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function FeaturedTours(props) {
  const { tours } = props;

  return (
    <section className={classes["featured-tour"]}>
      <div className={classes["featured-tour-header"]}>
        <div>
          <span>Sắp tới</span>
          <h2>Tour Tuyệt Nhất Trong Năm</h2>
        </div>
        <div>
          <Button link="/tours">Xem tất cả Tour</Button>
        </div>
      </div>
      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={4000}>
        {/* <TourList tours={tours} /> */}
        {tours.map((tour) => (
          <TourItem
            key={tour.tourId}
            tourId={tour.tourId}
            title={tour.title}
            duration={tour.duration}
            hotel={tour.hotel}
            vehicle={tour.vehicle}
            rating={tour.rating}
            type={tour.type}
            numberOfPeople={tour.numberOfPeople}
            price={tour.price}
            numberOfBooking={tour.numberOfBooking}
            image={tour.image}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default FeaturedTours;

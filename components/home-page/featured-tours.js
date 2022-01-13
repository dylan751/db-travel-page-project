import classes from "./featured-tours.module.css";
import TourList from "../tour/tour-list";
import Button from "../ui/button";
import { getAllTours, getFeaturedTours } from "../../lib/api-utils";

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
            key={tour.TourID}
            TourID={tour.TourID}
            TieuDe={tour.TieuDe}
            ThoiGian={tour.ThoiGian}
            KhachSan={tour.KhachSan}
            PhuongTien={tour.PhuongTien}
            DanhGia={tour.DanhGia}
            NoiNgoaiQuoc={tour.NoiNgoaiQuoc}
            SoLuongKhach={tour.SoLuongKhach}
            Gia={tour.Gia}
            SoLanDat={tour.SoLanDat}
            Anh={tour.Anh}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default FeaturedTours;

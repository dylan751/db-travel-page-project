import { Fragment, useState } from "react";
import Pagination from "../pagination";
import TourItem from "./tour-item";
import classes from "./tour-list.module.css";

function TourList(props) {
  const { tours } = props;

  const [pageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;

  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem);

  function selectCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <Fragment>
      <ul className={classes.list}>
        {currentTours.map((tour) => (
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
      </ul>
      <Pagination
        pageSize={pageSize}
        setCurrentPage={selectCurrentPage}
        currentPage={currentPage}
        total={tours.length}
      />
    </Fragment>
  );
}

export default TourList;

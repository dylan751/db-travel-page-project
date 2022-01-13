import Image from "next/image";
import Link from "next/link";

import { UserGroupIcon, StarIcon, ClockIcon, CurrencyDollarIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

import classes from "./tour-item.module.css";

function TourItem(props) {
  const {
    TourID,
    TieuDe,
    ThoiGian,
    KhachSan,
    PhuongTien,
    DanhGia,
    NoiNgoaiQuoc,
    SoLuongKhach,
    Gia,
    SoLanDat,
    Anh,
  } = props;

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image src={Anh} alt={TieuDe} width={500} height={300} />
        {/* <img src={Anh}  /> */}
      </div>
      <div className={classes.content}>
        <div className={classes["content-header"]}>
          <Link href={`/tours/${TourID}`}>
            <a>{TieuDe}</a>
          </Link>
          <p>
            <OfficeBuildingIcon className="inline-block w-5 h-5 text-clr_jaffa" />  {KhachSan}
          </p>
          <p>Kiểu tour: {NoiNgoaiQuoc}</p>
        </div>
        <div className={classes["more-information"]}>
          <div className={classes["more-information-item"]}>
            <ClockIcon className="inline-block w-4 h-4 text-clr_jaffa" /> {ThoiGian}
          </div>
          <div className={classes["more-information-item"]}>
            <StarIcon className="inline-block w-5 h-5 text-clr_jaffa" /> {DanhGia}
          </div>
          <div className={classes["more-information-item"]}>{PhuongTien}</div>
          <div className={classes["more-information-item"]}>
            <UserGroupIcon className="inline-block w-4 h-4 text-clr_jaffa" /> {SoLuongKhach}
          </div>
        </div>
        <div className={classes.price}>
          <span>Chỉ từ</span> <CurrencyDollarIcon className="inline-block w-5 h-5 " />
          {Gia}
        </div>
      </div>
    </li>
  );
}

export default TourItem;

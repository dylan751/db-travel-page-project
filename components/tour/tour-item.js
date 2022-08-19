import Image from "next/image";
import Link from "next/link";

import {
  UserGroupIcon,
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/solid";

import classes from "./tour-item.module.css";

function TourItem(props) {
  const {
    tourId,
    title,
    duration,
    hotel,
    vehicle,
    rating,
    type,
    numberOfPeople,
    price,
    numberOfBooking,
    image,
  } = props;

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <Image src={image} alt={title} width={500} height={300} />
        {/* <img src={image}  /> */}
      </div>
      <div className={classes.content}>
        <div className={classes["content-header"]}>
          <Link href={`/tours/${tourId}`}>
            <a>{title}</a>
          </Link>
          <p>
            <OfficeBuildingIcon className="inline-block w-5 h-5 text-clr_jaffa" />{" "}
            {hotel}
          </p>
          <p>Kiểu tour: {type}</p>
        </div>
        <div className={classes["more-information"]}>
          <div className={classes["more-information-item"]}>
            <ClockIcon className="inline-block w-4 h-4 text-clr_jaffa" />{" "}
            {duration}
          </div>
          <div className={classes["more-information-item"]}>
            <StarIcon className="inline-block w-5 h-5 text-clr_jaffa" />{" "}
            {rating}
          </div>
          <div className={classes["more-information-item"]}>{vehicle}</div>
          <div className={classes["more-information-item"]}>
            <UserGroupIcon className="inline-block w-4 h-4 text-clr_jaffa" />{" "}
            {numberOfPeople}
          </div>
        </div>
        <div className={classes.price}>
          <span>Chỉ từ</span>{" "}
          <CurrencyDollarIcon className="inline-block w-5 h-5 " />
          {price}
        </div>
      </div>
    </li>
  );
}

export default TourItem;

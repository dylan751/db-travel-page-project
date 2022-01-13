import Image from "next/image";
import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

import classes from "./destination-item.module.css";

function DestinationItem(props) {
  const { TourID, TenTour, TenDiaDiem, Anh, MoTa } = props;

  return (
    <li className={classes["destination-item"]}>
      <div className={classes["destination-item-container"]}>
        <div className={classes["image"]}>
          <Image src={Anh} alt={TenDiaDiem} width={550} height={310} />
          {/* <img src={Anh} alt={TenDiaDiem} /> */}
        </div>
        <div className={classes["content"]}>
          <div className={classes["content-container"]}>
            <Link href={`/tours/${TourID}`}>
              <a className={classes["name"]}>{TenDiaDiem}</a>
            </Link>
            <p className={classes["tour-name"]}>Tour: {TenTour}</p>
            <p>{MoTa}</p>
            <Link href={`/tours/${TourID}`}>
              <a className={classes["explore"]}>
                Explore{" "}
                <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default DestinationItem;

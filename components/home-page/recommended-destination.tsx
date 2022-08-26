import Link from "next/link";

import { ArrowSmRightIcon } from "@heroicons/react/solid";

import classes from "./recommended-destination.module.css";

const RecommendedDestination = () => {
  return (
    <section className={classes["recommended-destination"]}>
      <div className={classes["recommended-destination-container"]}>
        <span>All the</span>
        <h2>Best destinations</h2>
        <ul className={classes["destination"]}>
          <li>
            <img src="/images/destination/toronto.jpg" alt="Australia" />
            <div className={classes["description"]}>
              <Link href="/destination">
                <a className={classes["name"]}>Thành phố Toronto</a>
              </Link>
              <Link href="/destination">
                <a className={classes["explore"]}>
                  Explore <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
                </a>
              </Link>
            </div>
          </li>
          <li>
            <img src="/images/destination/istanbul.jpg" alt="Newzealand" />
            <div className={classes["description"]}>
              <Link href="/destination">
                <a className={classes["name"]}>Istanbul</a>
              </Link>
              <Link href="/destination">
                <a className={classes["explore"]}>
                  Explore <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
                </a>
              </Link>
            </div>
          </li>
          <li>
            <img src="/images/destination/pho-co.jpg" alt="Egypt" />
            <div className={classes["description"]}>
              <Link href="/destination">
                <a className={classes["name"]}>Phố cổ Hà Nội</a>
              </Link>
              <Link href="/destination">
                <a className={classes["explore"]}>
                  Explore <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
                </a>
              </Link>
            </div>
          </li>
          <li>
            <img src="/images/destination/mount-fuji.jpg" alt="Africa" />
            <div className={classes["description"]}>
              <Link href="/destination">
                <a className={classes["name"]}>Núi Phú Sỹ</a>
              </Link>
              <Link href="/destination">
                <a className={classes["explore"]}>
                  Explore <ArrowSmRightIcon className="w-5 h-5 inline-block text-clr_jaffa" />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RecommendedDestination;

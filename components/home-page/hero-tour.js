import classes from "./hero-tour.module.css";

import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";
import Button from "../ui/button";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function HeroTour() {
  return (
    <section className={classes["hero-tour-section"]}>
      <div className={classes["single-tour-item"]}>
        <div className={classes["single-tour-info"]}>
          <div className={classes["single-tour-price"]}>
            <p>10 ngày</p>
            <p>
              4 <StarIcon className="w-5 h-5 inline-block text-clr_jaffa" />
            </p>
          </div>
          <h2 className={classes["single-tour-header"]}>Trải nghiệm Bali</h2>
          <p>
            Hòn đảo xinh đẹp Bali của quốc gia vạn đảo Indonesia đã quá nổi
            tiếng trên bản đồ du lịch Thế Giới, đặc biệt là dành cho các kỳ nghỉ
            trăng mật. Du lịch Bali lại hấp dẫn như vậy bởi nơi đây có khí hậu
            nhiệt đới ấm áp, có biển xanh, nắng vàng, nhiều hòn đảo đẹp, ...
          </p>
          <Link href="/tours/2">
            <Button>Chi tiết</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroTour;

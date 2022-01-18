import Image from "next/image";

import classes from "./services.module.css";
import Button from "../ui/button";

function Services() {
  return (
    <section className={classes["services"]}>
      <div className={classes["services-header"]}>
        <div>
          <span>Tất cả</span>
          <h2>Dịch vụ của chúng tôi</h2>
        </div>
      </div>
      <div className={classes["services-content"]}>
        <div className={classes["services-item"]}>
          <div className={classes["image-container"]}>
            <div className={classes["image"]}>
              {" "}
              <Image
                src="/images/service/service-1.png"
                alt="Service 1"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Dịch vụ thuê xe</h2>
          <span>100+ Lần Đặt</span>
        </div>
        <div className={classes["services-item"]}>
          <div className={classes["image-container"]}>
            <div className={classes["image"]}>
              {" "}
              <Image
                src="/images/service/service-2.png"
                alt="Service 2"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Đặt Khách Sạn</h2>
          <span>78+ Lần Đặt</span>
        </div>
        <div className={classes["services-item"]}>
          <div className={classes["image-container"]}>
            <div className={classes["image"]}>
              {" "}
              <Image
                src="/images/service/service-3.png"
                alt="Service 3"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Nhà Hàng</h2>
          <span>50+ Lần Đặt</span>
        </div>
        <div className={classes["services-item"]}>
          <div className={classes["image-container"]}>
            <div className={classes["image"]}>
              {" "}
              <Image
                src="/images/service/service-4.png"
                alt="Service 4"
                width={240}
                height={240}
              />
            </div>
          </div>
          <h2>Club & Bar</h2>
          <span>90+ Lần Đặt</span>
        </div>
      </div>
    </section>
  );
}

export default Services;

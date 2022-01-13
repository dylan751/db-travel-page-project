import { MapIcon, CurrencyDollarIcon, CreditCardIcon, SpeakerphoneIcon } from "@heroicons/react/outline";
import classes from "./preview.module.css";

function Preview() {
  return (
    <section className={classes["preview-section"]}>
      <div className={classes["preview-list"]}>
        <div className={classes["preview-item"]}>
          <MapIcon className={classes["icon"]} />
          <h2>Lựa Chọn Tốt Nhất</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <CurrencyDollarIcon className={classes["icon"]} />
          <h2>Giá Cả Phải Chăng</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <CreditCardIcon className={classes["icon"]} />
          <h2>Thanh Toán An Toàn</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <SpeakerphoneIcon className={classes["icon"]} />
          <h2>Hỗ Trợ 24/7</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam
            nonumy eirmod.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Preview;

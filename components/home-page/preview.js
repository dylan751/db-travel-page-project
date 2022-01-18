import {
  MapIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import classes from "./preview.module.css";

function Preview() {
  return (
    <section className={classes["preview-section"]}>
      <div className={classes["preview-list"]}>
        <div className={classes["preview-item"]}>
          <MapIcon className={classes["icon"]} />
          <h2>Lựa Chọn Tốt Nhất</h2>
          <p>
            Bunichi là 1 trang Web du lịch đã phủ sóng tại hơn 100 quốc gia trên
            thế giới.
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <CurrencyDollarIcon className={classes["icon"]} />
          <h2>Giá Cả Phải Chăng</h2>
          <p>
            Chúng tôi cam kết "Tour của Bunichi rẻ số 2 thì không trang Web nào
            Chủ Nhật".
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <CreditCardIcon className={classes["icon"]} />
          <h2>Thanh Toán An Toàn</h2>
          <p>
            Bunichi cung cấp đầy đủ các phương thức thanh toán: Credit card,
            Paypal, VISA, ...
          </p>
        </div>
        <div className={classes["preview-item"]}>
          <SpeakerphoneIcon className={classes["icon"]} />
          <h2>Hỗ Trợ 24/7</h2>
          <p>
            Du lịch khó? Có Bunichi lo! Đừng ngần ngại liên hệ với chúng tôi để
            nhận sự hỗ trợ nhé!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Preview;

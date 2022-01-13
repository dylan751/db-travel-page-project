import classes from "./hero-content.module.css";

function HeroContent() {
  return (
    <div className={classes["hero-image"]}>
      <div className={classes["hero-text"]}>
        <span>Chào mừng đến với Bunichi</span>
        <h1>Khám Phá Những Địa Điểm Tuyệt Vời</h1>
      </div>
    </div>
  );
}

export default HeroContent;

import classes from "./hero-content.module.css";

const HeroContent = () => {
  return (
    <div className={classes["hero-image"]}>
      <div className={classes["hero-text"]}>
        <span>Welcome to Bunichi</span>
        <h1>Discover beautiful places</h1>
      </div>
    </div>
  );
}

export default HeroContent;

import classes from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div className={classes["hero-image"]}>
      <div className={classes["hero-text"]}>
        <span>Welcome to Bunichi</span>
        <h1>Let's Explore Your Awesome City</h1>
      </div>
    </div>
  );
}

export default HeroContent;

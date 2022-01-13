import { Fragment } from "react";
import { getAllProducts, getFeaturedTours } from "../lib/api-utils";

/* COMPONENTS */
import HeroContent from "../components/hero-content/hero-content";
import Preview from "../components/home-page/preview";
import FeaturedTours from "../components/home-page/featured-tours";
import RecommendedDestination from "../components/home-page/recommended-destination";
import Services from "../components/home-page/services";
import AboutUs from "../components/home-page/about-us";
import ContactUs from "../components/home-page/contact-us";
import Products from "../components/home-page/products";

function HomePage(props) {
  const { featuredTours, allProducts } = props;

  return (
    <Fragment>
      <HeroContent />
      <Preview />
      <FeaturedTours tours={featuredTours} />
      <RecommendedDestination />
      <Services />
      <AboutUs />
      <Products products={allProducts} />
      <ContactUs />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const featuredTours = await getFeaturedTours();
  const allProducts = await getAllProducts();

  return {
    props: {
      featuredTours: featuredTours,
      allProducts: allProducts,
    },
    // revalidate: 1800,
  };
}

export default HomePage;

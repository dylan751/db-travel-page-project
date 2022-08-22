import tourApi from '../services/tourApi';
import productApi from '../services/productApi';

/* COMPONENTS */
import HeroContent from '../components/hero-content/hero-content';
import Preview from '../components/home-page/preview';
import FeaturedTours from '../components/home-page/featured-tours';
import RecommendedDestination from '../components/home-page/recommended-destination';
import Services from '../components/home-page/services';
import AboutUs from '../components/home-page/about-us';
import ContactUs from '../components/home-page/contact-us';
import Products from '../components/home-page/products';
import HeroTour from '../components/home-page/hero-tour';
import { GetServerSideProps } from 'next';
import { Tour } from '../models/Tour';
import { Product } from '../models/Product';

interface HomePageProps {
  featuredTours: Tour[];
  allProducts: Product[];
}

function HomePage({ featuredTours, allProducts }: HomePageProps) {
  return (
    <>
      <HeroContent />
      <Preview />
      <HeroTour />
      <FeaturedTours tours={featuredTours} />
      <RecommendedDestination />
      <Services />
      <AboutUs />
      <Products products={allProducts} />
      <ContactUs />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const featuredTours = await tourApi.getFeaturedTours();
  const res = await productApi.getListProducts();
  const allProducts = res.data.data.edges;

  return {
    props: {
      featuredTours: featuredTours,
      allProducts: allProducts,
    },
    // revalidate: 1800,
  };
};

export default HomePage;

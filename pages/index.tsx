import tourApi from '../services/tourApi';
import productApi from '../services/productApi';

/* COMPONENTS */
import HeroContent from '../components/HeroContent/HeroContent';
import Preview from '../components/HomePage/Preview';
import FeaturedTours from '../components/HomePage/FeaturedTours';
import RecommendedDestination from '../components/HomePage/RecommendedDestination';
import Services from '../components/HomePage/Services';
import AboutUs from '../components/HomePage/AboutUs';
import ContactUs from '../components/HomePage/ContactUs';
import Products from '../components/HomePage/Products';
import HeroTour from '../components/HomePage/HeroTour';
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

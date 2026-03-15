import Hero from "../../components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import PromoBanners from "./components/PromoBanners";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <PromoBanners />
      <Categories />
      <Newsletter />
    </div>
  );
}

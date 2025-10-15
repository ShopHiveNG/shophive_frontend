import Banner from "../components/features/home/Banner";
import Benefit from "../components/features/home/Benefit";
import Brands from "../components/features/home/Brands";
import Newsletter from "../components/features/home/Newsletter";
import Products from "../components/features/home/Products";
import ShopCategory from "../components/features/home/ShopCategory";

export default function Home() {
  return (
    <section aria-label="Home page view" className="space-y-14">
      <Banner />

      <Benefit />

      <ShopCategory />

      <Products />

      <Brands />

      <Newsletter />
    </section>
  );
}

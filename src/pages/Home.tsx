import Banner from "../components/features/home/Banner";
import Benefit from "../components/features/home/Benefit";
import Brands from "../components/features/home/Brands";
import Products from "../components/features/home/Products";
import ShopCategory from "../components/features/home/ShopCategory";

export default function Home() {
  return (
    <section className="space-y-14">
      <Banner />
      <Benefit />
      <ShopCategory />
      <Products />
      <Brands />
    </section>
  );
}

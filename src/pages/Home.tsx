import Benefit from "@/components/features/home/Benefit";
import Brands from "@/components/features/home/Brands";
import HeroSection from "@/components/features/home/HeroSection";
import Newsletter from "@/components/features/home/Newsletter";
import Products from "@/components/features/home/Products";
import ShopCategory from "@/components/features/home/ShopCategory";

export function Home() {
  return (
    <section aria-label="Home page view" className="space-y-10">
      <HeroSection />

      <Benefit />

      <ShopCategory />

      <Products />

      <Brands />

      <Newsletter />
    </section>
  );
}

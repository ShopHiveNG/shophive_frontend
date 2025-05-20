import Banner from "../components/features/home/Banner";
import Benefit from "../components/features/home/Benefit";
import Category from "../components/features/home/Category";

export default function Home() {
  return (
    <section className="space-y-12">
      <Banner />
      <Benefit />
      <Category />
    </section>
  );
}

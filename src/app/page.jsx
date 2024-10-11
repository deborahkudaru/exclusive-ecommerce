import Ads from "@/components/Ads";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SellingProducts from "@/components/SellingProducts";
import SideMenu from "@/components/SideMenu";
import Todays from "@/components/TodaysItems";
import Top from "@/components/Top";

export default function Home() {
  return (
  <main className="">
    <Top />
    <Navbar />
    <div className="flex justify-between px-32">
      <SideMenu />
      <Ads />
    </div>
    <Todays />
    <Categories />
    <SellingProducts />
    <Footer />
  </main>
  );
}

import Ads from "@/components/Ads";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
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
  </main>
  );
}

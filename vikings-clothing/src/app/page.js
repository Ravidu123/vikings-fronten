import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* අපි වෙනම හදපු Hero Section එක මෙතනට කතා කරනවා */}
      <HeroSection />

      {/* ඉස්සරහට හදන New Arrivals කොටස එන්නේ මෙතනටයි */}
      {/* <NewArrivals /> */}

      {/* 2. අලුත් T-shirts 4 පෙන්වන කොටස */}
      <NewArrivals />

    </div>
  );
}
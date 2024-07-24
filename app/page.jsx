import Link from "next/link";
import HomePageHero from "@/components/HomePageHero";
const HomePage = () => {
  return (
    <main className="main-page">
      <Link href={"/vans"}>Go to vans</Link>
      <HomePageHero />
    </main>
  );
};
export default HomePage;

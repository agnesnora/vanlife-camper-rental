import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VanCard from "@/components/VanCard";
import Vans from "@/components/Vans";

export const metadata = {
  title: "Vanlife Camper Rental | Find the perfect camper",
  description: "Find your dream motorhome",
  keywords: "rental, find camper, find caravan, vanlife",
};
export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <Vans /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

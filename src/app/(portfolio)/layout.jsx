import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

import Image from "next/image";
//component
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import Form from "../components/Form";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Slide />
      <HeroSection />
      <Form />
      <Banner />
      <Footer />
    </main>
  );
}

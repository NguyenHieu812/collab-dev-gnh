import Image from "next/image";
//component
import Navbar from "./navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Slide from "./Slide";
import Form from "./Form";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Slide />
      <Form />
      <Banner />
      <Footer />
    </main>
  );
}

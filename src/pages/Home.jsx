import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
    </>
  );
}

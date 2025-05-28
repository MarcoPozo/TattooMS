import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
}

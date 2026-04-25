import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollLine from "./components/ScrollLine";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollLine />
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

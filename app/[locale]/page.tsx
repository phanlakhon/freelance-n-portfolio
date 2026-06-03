import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ProductPromo from "../components/ProductPromo";
import Services from "../components/Services";
import Work from "../components/Work";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProductPromo />
      <Services />
      <Work />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen animate-fade-in">
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="values">
          <Values />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default ContactPage;

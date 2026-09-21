import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Authority } from "./components/Authority/Authority";
import { Modules } from "./components/Modules/Modules";
import { Benefits } from "./components/Benefits/Benefits";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { FAQ } from "./components/FAQ/FAQ";
import { CTA } from "./components/CTA/Cta";
import { Footer } from "./components/Footer/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat/WhatsAppFloat";

export function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 font-sans selection:bg-[#ebd9bc] selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Modules />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
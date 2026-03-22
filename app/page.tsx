import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhySynapse from "@/components/WhySynapse";
import Values from "@/components/Values";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ScrollArrow from "@/components/ScrollArrow";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Navbar />
      <Chatbot />
      <main>
        <Hero />
        <PainPoints />
        <ScrollArrow targetId="services" />
        <Services />
        <ScrollArrow targetId="process" />
        <Process />
        <ScrollArrow targetId="why" />
        <WhySynapse />
        <ScrollArrow targetId="values" />
        <Values />
        <ScrollArrow targetId="contact" />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Capabilities from "@/components/Capabilities";
import Architecture from "@/components/Architecture";
import Security from "@/components/Security";
import Approach from "@/components/Approach";
import About from "@/components/About";
import WWU from "@/components/WWU";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Stats />
        <Work />
        <Capabilities />
        <Architecture />
        <Security />
        <Approach />
        <About />
        <WWU />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

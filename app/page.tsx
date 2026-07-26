import "./globals.css";
import Navbar from "@/components/Navbar";
import ContentWrapper from "@/components/ContentWrapper";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
      </main>
    </>
  );
}

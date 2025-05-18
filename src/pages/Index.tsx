
import React from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import About from "@/components/About";
import Stats from "@/components/Stats";
import LiveMonitoring from "@/components/LiveMonitoring";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <Stats />
        <About />
        <LiveMonitoring />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

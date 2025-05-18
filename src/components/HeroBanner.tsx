
import React from "react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-safety-blue to-blue-800 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              AI-Powered Road Safety Monitoring System
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Enhancing road safety with real-time object detection, action recognition, 
              and intelligent tracking technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-safety-blue hover:bg-blue-100">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View Demo
              </Button>
            </div>
          </div>
          
          <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm p-4">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-700/30"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
                  <span className="block h-16 w-16 rounded-full bg-safety-orange animate-pulse"></span>
                </div>
                <p className="text-lg font-medium">AI Monitoring Active</p>
                <p className="text-sm opacity-75">Processing road data in real-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroBanner;

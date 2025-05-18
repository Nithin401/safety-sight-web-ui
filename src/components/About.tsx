
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Activity, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 bg-safety-gray">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-safety-blue">
          About Our AI Road Safety Solution
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-blue-100">
                <Eye className="h-8 w-8 text-safety-blue" />
              </div>
              <CardTitle className="mt-4 text-center">Object Detection</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Using <strong>YOLOv5</strong>, <strong>DeepSORT</strong>, and{" "}
                <strong>OCR</strong> to identify vehicles, pedestrians, bicycles,
                and other road objects in real-time with high accuracy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-blue-100">
                <Activity className="h-8 w-8 text-safety-blue" />
              </div>
              <CardTitle className="mt-4 text-center">Action Recognition</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Advanced algorithms detect actions like moving forward, turning,
                stopping, or crossing to predict potential hazards before they occur.
              </p>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="p-2 rounded-full bg-blue-100">
                <MapPin className="h-8 w-8 text-safety-blue" />
              </div>
              <CardTitle className="mt-4 text-center">Location Awareness</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Identifies key road features like zebra crossings, pavements, traffic 
                signals, and other important landmarks to provide context-aware safety monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <p className="text-safety-darkgray">
            This system assists both self-driving and human-driven vehicles by creating 
            a comprehensive real-time understanding of the road environment. By identifying 
            objects, tracking their movements, and recognizing critical locations, our 
            AI solution helps prevent accidents and improves overall road safety.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

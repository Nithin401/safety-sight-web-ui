
import React from "react";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-safety-lightblue" />
            <span className="text-lg font-bold">
              AI Road Safety Monitoring System
            </span>
          </div>
          
          <div className="text-sm text-slate-300">
            © {new Date().getFullYear()} - AI Road Safety Tech - All Rights Reserved
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-3 text-safety-lightblue">Technology</h4>
            <ul className="space-y-2">
              <li>YOLOv5 Object Detection</li>
              <li>DeepSORT Tracking</li>
              <li>OCR License Recognition</li>
              <li>Real-time Action Recognition</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-safety-lightblue">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@airoadsafety.tech</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 AI Boulevard, Tech City</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-safety-lightblue">Resources</h4>
            <ul className="space-y-2">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Case Studies</li>
              <li>Research Papers</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

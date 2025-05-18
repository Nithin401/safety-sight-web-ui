
import React from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-safety-blue" />
          <span className="text-xl font-bold text-safety-blue hidden sm:inline-block">
            AI Road Safety Monitoring System
          </span>
          <span className="text-xl font-bold text-safety-blue sm:hidden">
            AI Road Safety
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            About
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Users, 
  AlertTriangle, 
  Clock 
} from "lucide-react";

const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-safety-blue">
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <Car className="h-6 w-6 text-safety-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Vehicles Tracked</p>
                <h3 className="text-2xl font-bold">12,542</h3>
                <p className="text-xs text-green-600">+15% this week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-safety-orange">
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="p-3 rounded-full bg-orange-100">
                <Users className="h-6 w-6 text-safety-orange" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Pedestrians Protected</p>
                <h3 className="text-2xl font-bold">8,372</h3>
                <p className="text-xs text-green-600">+12% this week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-red-500">
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="p-3 rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Incidents Prevented</p>
                <h3 className="text-2xl font-bold">241</h3>
                <p className="text-xs text-green-600">+8% this week</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6 flex gap-4 items-center">
              <div className="p-3 rounded-full bg-green-100">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Response Time</p>
                <h3 className="text-2xl font-bold">0.25s</h3>
                <p className="text-xs text-green-600">-15ms improvement</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stats;

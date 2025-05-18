
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

type MonitoringEntry = {
  timestamp: string;
  vehicleNumber: string;
  objectType: string;
  actionDetected: string;
  location: string;
};

// Sample data
const initialData: MonitoringEntry[] = [
  {
    timestamp: "12:30:15 PM",
    vehicleNumber: "ABC 1234",
    objectType: "Car",
    actionDetected: "Moving Forward",
    location: "Near Traffic Signal",
  },
  {
    timestamp: "12:30:17 PM",
    vehicleNumber: "XYZ 5678",
    objectType: "Pedestrian",
    actionDetected: "Crossing",
    location: "At Zebra Crossing",
  },
  {
    timestamp: "12:30:19 PM",
    vehicleNumber: "LMN 9876",
    objectType: "Truck",
    actionDetected: "Stopping",
    location: "Near Flyover",
  },
  {
    timestamp: "12:30:21 PM",
    vehicleNumber: "PQR 5432",
    objectType: "Bicycle",
    actionDetected: "Turning Left",
    location: "At Pavement",
  },
];

const statusMessages = [
  "Analyzing surroundings...",
  "Pedestrian detected...",
  "Vehicle stopping...",
  "Traffic signal changing to red...",
  "Bicycle approaching intersection...",
  "Monitoring zebra crossing...",
  "Vehicle changing lanes...",
  "Truck slowing down near school zone...",
  "Analyzing traffic flow patterns...",
  "Action recognition in progress...",
];

const LiveMonitoring = () => {
  const [status, setStatus] = useState("System initialized. Monitoring road activity...");
  const [data, setData] = useState(initialData);
  const [isNew, setIsNew] = useState(false);
  
  // Rotate through status messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = statusMessages[Math.floor(Math.random() * statusMessages.length)];
      setStatus(randomMessage);
      setIsNew(true);
      
      setTimeout(() => {
        setIsNew(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-safety-blue">
          Live Monitoring
        </h2>
        
        <Card className="shadow-md">
          <CardHeader className="bg-safety-blue text-white">
            <CardTitle className="flex items-center justify-between">
              <span>Real-time Road Activity</span>
              <Badge variant="outline" className="bg-green-600 text-white animate-pulse-light">
                LIVE
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-100">
                    <TableHead className="w-[120px]">Timestamp</TableHead>
                    <TableHead>Vehicle Number</TableHead>
                    <TableHead>Object Type</TableHead>
                    <TableHead>Action Detected</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono">{entry.timestamp}</TableCell>
                      <TableCell>{entry.vehicleNumber}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          entry.objectType === "Car" ? "bg-blue-100 text-blue-800" :
                          entry.objectType === "Pedestrian" ? "bg-green-100 text-green-800" :
                          entry.objectType === "Truck" ? "bg-amber-100 text-amber-800" :
                          "bg-purple-100 text-purple-800"
                        }>
                          {entry.objectType}
                        </Badge>
                      </TableCell>
                      <TableCell>{entry.actionDetected}</TableCell>
                      <TableCell className="hidden md:table-cell">{entry.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className={`p-4 bg-slate-50 border-t flex items-center gap-2 ${isNew ? 'bg-blue-50' : ''}`}>
              <AlertCircle className={`h-5 w-5 ${isNew ? 'text-safety-orange' : 'text-safety-blue'}`} />
              <p className="text-sm font-medium">{status}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LiveMonitoring;

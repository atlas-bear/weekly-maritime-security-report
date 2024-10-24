import React from 'react';
import { MapPin, Anchor, Clock, Shield, AlertTriangle, Navigation, Users, Ship, ChevronLeft } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Sample historical data for the area
const areaIncidentData = [
  { month: 'May', incidents: 2 },
  { month: 'Jun', incidents: 3 },
  { month: 'Jul', incidents: 2 },
  { month: 'Aug', incidents: 4 },
  { month: 'Sep', incidents: 3 },
  { month: 'Oct', incidents: 5 }
];

const IncidentDetails = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-8">
      {/* Header with Alert Status */}
      <div className="bg-orange-50 p-6 rounded-t-lg border-b border-orange-100">
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm">Back to Incidents</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                Alert ID: 2024-2662
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                Armed Robbery
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              MV ASPASIA LUCK
            </h1>
            <p className="text-gray-600">
              Bulk Carrier | IMO: 9223485 | Flag: Liberia
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Reported</p>
            <p className="text-lg font-semibold text-gray-900">Oct 17, 2024 18:08 UTC</p>
          </div>
        </div>
      </div>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-b border-gray-200">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p className="text-sm text-gray-600">Location</p>
            <p className="font-semibold text-gray-900">Singapore Strait</p>
            <p className="text-sm text-gray-600">1° 7' 52.8" N, 103° 30' 19.8" E</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Ship className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p className="text-sm text-gray-600">Vessel Status</p>
            <p className="font-semibold text-gray-900">Underway</p>
            <p className="text-sm text-gray-600">En route to PEBGB</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-gray-400 mt-1" />
          <div>
            <p className="text-sm text-gray-600">Crew Status</p>
            <p className="font-semibold text-gray-900">All Safe</p>
            <p className="text-sm text-gray-600">No injuries reported</p>
          </div>
        </div>
      </div>

      {/* Incident Map */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Location</h2>
        <svg viewBox="0 0 400 200" className="w-full h-48 bg-blue-50 rounded">
          {/* Simplified Singapore Strait map */}
          <path 
            d="M50,100 C100,90 300,110 350,100" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="1"
          />
          {/* Incident location */}
          <circle cx="200" cy="100" r="4" fill="#ef4444" className="animate-pulse" />
          {/* Direction arrow */}
          <path 
            d="M180,100 L220,100" 
            stroke="#666" 
            strokeWidth="1" 
            markerEnd="url(#arrow)" 
          />
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#666"/>
            </marker>
          </defs>
        </svg>
      </div>

      {/* Incident Details */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Incident Details</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">
              While underway in the Singapore Strait, the master reported to Singapore VTIS West 
              that 10 intruders armed with knives were sighted in the engine room. The alarm was 
              raised, and the crew mustered to conduct a search aboard the ship. No intruders 
              were found, but some engine spare parts were reported stolen.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Response Actions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Alarm raised and crew mustered</li>
              <li>Incident reported to Singapore VTIS West</li>
              <li>Safety navigational broadcast initiated</li>
              <li>Republic of Singapore Navy's MSTF notified</li>
              <li>Police Coast Guard (PCG) notified</li>
              <li>Information shared with Indonesian authorities</li>
              <li>PCG conducted search at Singapore Anchorage</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Stolen Items</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Engine spare parts (detailed inventory pending)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Analysis</h2>
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Key Findings</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Part of coordinated series of incidents on October 17</li>
              <li>Perpetrators were armed and well-organized</li>
              <li>Targeted approach to engine room suggests prior knowledge</li>
              <li>Quick response from authorities demonstrated</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Historical Context</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={areaIncidentData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="incidents" 
                    stroke="#f97316" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Incidents in Singapore Strait (Past 6 Months)
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Immediate Actions</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Enhance engine room security measures</li>
              <li>Increase watch rotations during night hours</li>
              <li>Review and update vessel security plan</li>
              <li>Conduct additional security drills</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Long-term Measures</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Install additional CCTV coverage</li>
              <li>Upgrade access control systems</li>
              <li>Enhance crew security training</li>
              <li>Implement new patrol procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetails;
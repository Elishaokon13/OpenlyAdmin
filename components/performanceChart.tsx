"use client"

import { Calendar, Download } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { date: "Mon", successful: 4820, failed: 210, providerHealth: 96 },
  { date: "Tue", successful: 5050, failed: 260, providerHealth: 95 },
  { date: "Wed", successful: 5340, failed: 340, providerHealth: 93 },
  { date: "Thu", successful: 4980, failed: 310, providerHealth: 94 },
  { date: "Fri", successful: 5210, failed: 290, providerHealth: 95 },
  { date: "Sat", successful: 4870, failed: 410, providerHealth: 91 },
  { date: "Sun", successful: 4720, failed: 450, providerHealth: 90 },
  { date: "Mon", successful: 5230, failed: 280, providerHealth: 95 },
  { date: "Tue", successful: 5480, failed: 360, providerHealth: 92 },
  { date: "Wed", successful: 5700, failed: 330, providerHealth: 93 },
  { date: "Thu", successful: 5560, failed: 300, providerHealth: 94 },
  { date: "Fri", successful: 5890, failed: 270, providerHealth: 96 }
]

export function PerformanceChart() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-[#0D0D0D] rounded-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-2 lg:gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium text-white">System-wide Payout Volume</h2>
          <div className="flex items-center gap-3 flex-wrap text-xs text-gray-400">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full border border-[#333]">
              <div className="w-2 h-2 rounded-full bg-[#86efac]" />
              <span className="font-medium text-white">Successful</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full border border-[#333]">
              <div className="w-2 h-2 rounded-full bg-[#f87171]" />
              <span className="font-medium text-white">Failed</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] rounded-full border border-[#333]">
              <div className="w-2 h-2 rounded-full bg-[#60a5fa]" />
              <span className="font-medium text-white">Provider Health</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <div className="flex items-center bg-[#1A1A1A] rounded-lg p-1">
            {['1D', '1M', '3M', '6M', '1Y'].map((period) => (
              <button
                key={period}
                className={`px-3 md:px-2 lg:px-3 py-1 text-sm md:text-xs lg:text-sm rounded-md transition-colors ${
                  period === '6M' 
                    ? 'bg-[#2A2A2A] text-white shadow-sm' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-white bg-[#1A1A1A] rounded-lg transition-colors">
              <Calendar className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white bg-[#1A1A1A] rounded-lg transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSuccessful" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#86efac" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#86efac" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorFailed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f87171" stopOpacity={0.25}/>
                <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProvider" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
            <XAxis 
              dataKey="date" 
              hide 
            />
            <YAxis 
              orientation="left" 
              tick={{ fill: '#666' }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#1A1A1A] border border-[#333] p-3 rounded-lg shadow-xl space-y-1">
                      <p className="text-white font-medium">{payload[0].payload.date}</p>
                      <p className="text-[#86efac] text-sm">Successful: {payload.find((entry) => entry.dataKey === "successful")?.value?.toLocaleString()}</p>
                      <p className="text-[#f87171] text-sm">Failed: {payload.find((entry) => entry.dataKey === "failed")?.value?.toLocaleString()}</p>
                      <p className="text-[#60a5fa] text-sm">Provider Health: {payload.find((entry) => entry.dataKey === "providerHealth")?.value}%</p>
                    </div>
                  )
                }
                return null
              }}
            />
            
            <Area 
              type="monotone" 
              dataKey="successful" 
              stroke="#86efac" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorSuccessful)" 
            />
            <Area 
              type="monotone" 
              dataKey="failed" 
              stroke="#f87171" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorFailed)" 
            />
            <Area 
              type="monotone" 
              dataKey="providerHealth" 
              stroke="#60a5fa" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorProvider)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

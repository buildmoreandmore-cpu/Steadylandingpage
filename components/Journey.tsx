
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { month: 'Jun', value: 42000, type: 'past' },
  { month: 'Jul', value: 43500, type: 'past' },
  { month: 'Aug', value: 45000, type: 'past' },
  { month: 'Sep', value: 46800, type: 'current' },
  { month: 'Oct', value: 48500, type: 'future' },
  { month: 'Nov', value: 50200, type: 'future' },
  { month: 'Dec', value: 52500, type: 'future' },
];

const Journey: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-steady-charcoal">
        <h2 className="text-3xl font-extrabold mb-2">Your Journey</h2>
        <p className="text-gray-500">A timeline of where you've been and where you're headed.</p>
      </div>

      <div className="h-64 bg-white rounded-3xl border border-gray-100 p-4 shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D7377" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#0D7377" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Snapshot']}
            />
            <Area type="monotone" dataKey="value" stroke="#0D7377" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            <ReferenceLine x="Sep" stroke="#0D7377" strokeDasharray="3 3" label={{ position: 'top', value: 'Now', fill: '#0D7377', fontSize: 12, fontWeight: 'bold' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-400 mb-1">Where you've been</p>
          <div className="space-y-3">
             <div className="flex justify-between items-center">
               <span className="text-xs text-gray-500">6 months ago</span>
               <span className="text-sm font-bold text-steady-charcoal">$38,200</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-xs text-gray-500">Today</span>
               <span className="text-sm font-bold text-steady-teal">$46,800</span>
             </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-400 mb-1">Where you're headed</p>
          <div className="space-y-3">
             <div className="flex justify-between items-center">
               <span className="text-xs text-gray-500">In 6 months</span>
               <span className="text-sm font-bold text-steady-charcoal">$54,500</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-xs text-gray-500">In 1 year</span>
               <span className="text-sm font-bold text-steady-success">$65,200</span>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-steady-charcoal text-white p-6 rounded-3xl">
        <h4 className="font-bold mb-4">Milestones ahead:</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-steady-teal">1</div>
            <div>
              <p className="font-bold">Debt-Free Milestone</p>
              <p className="text-xs opacity-70">Estimated: February 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-steady-teal">2</div>
            <div>
              <p className="font-bold">Full Emergency Fund</p>
              <p className="text-xs opacity-70">Estimated: May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

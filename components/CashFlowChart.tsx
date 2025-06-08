'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  ComposedChart,
} from 'recharts';
import { cashFlowData } from '@/lib/testData';

export default function CashFlowChart() {
  const formatCurrency = (value: number) => `£${(value / 1000).toFixed(0)}k`;

  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">💰 Cash Flow Analysis</h3>
        <p className="text-sm text-gray-400">
          Monthly cash inflows, outflows, and running balance
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#252528" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              axisLine={{ stroke: '#252528' }}
            />
            <YAxis 
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              axisLine={{ stroke: '#252528' }}
            />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), '']}
              contentStyle={{
                backgroundColor: '#111113',
                border: '1px solid #252528',
                borderRadius: '8px',
                color: '#fff'
              }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Legend 
              wrapperStyle={{ color: '#9ca3af' }}
            />
            <Bar 
              dataKey="inflow" 
              fill="#10b981" 
              name="Cash Inflow"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="outflow" 
              fill="#ef4444" 
              name="Cash Outflow"
              radius={[4, 4, 0, 0]}
            />
            <Line 
              type="monotone" 
              dataKey="balance" 
              stroke="#06b6d4" 
              strokeWidth={3}
              name="Running Balance"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Cash Flow Summary */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-green/20">
          <p className="text-sm font-medium text-white">Net Cash Flow</p>
          <p className="text-xl font-bold text-accent-green">£49,000</p>
          <p className="text-xs text-gray-400">This month</p>
        </div>
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-cyan/20">
          <p className="text-sm font-medium text-white">Current Balance</p>
          <p className="text-xl font-bold text-accent-cyan">£339,000</p>
          <p className="text-xs text-gray-400">As of today</p>
        </div>
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-amber-500/20">
          <p className="text-sm font-medium text-white">Burn Rate</p>
          <p className="text-xl font-bold text-amber-400">£89,000</p>
          <p className="text-xs text-gray-400">Monthly avg</p>
        </div>
      </div>
    </div>
  );
} 
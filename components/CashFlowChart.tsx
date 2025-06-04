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
    <div className="card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Cash Flow Analysis</h3>
        <p className="text-sm text-gray-600">
          Monthly cash inflows, outflows, and running balance
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
            />
            <YAxis 
              tickFormatter={formatCurrency}
              tick={{ fontSize: 12 }}
              axisLine={{ stroke: '#e0e0e0' }}
            />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), '']}
              labelStyle={{ color: '#374151' }}
            />
            <Legend />
            <Bar 
              dataKey="inflow" 
              fill="#22c55e" 
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
              stroke="#0ea5e9" 
              strokeWidth={3}
              name="Running Balance"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Cash Flow Summary */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-success-50 rounded-lg">
          <p className="text-sm font-medium text-success-800">Net Cash Flow</p>
          <p className="text-xl font-bold text-success-900">£49,000</p>
          <p className="text-xs text-success-600">This month</p>
        </div>
        <div className="text-center p-4 bg-primary-50 rounded-lg">
          <p className="text-sm font-medium text-primary-800">Current Balance</p>
          <p className="text-xl font-bold text-primary-900">£339,000</p>
          <p className="text-xs text-primary-600">As of today</p>
        </div>
        <div className="text-center p-4 bg-warning-50 rounded-lg">
          <p className="text-sm font-medium text-warning-800">Burn Rate</p>
          <p className="text-xl font-bold text-warning-900">£89,000</p>
          <p className="text-xs text-warning-600">Monthly avg</p>
        </div>
      </div>
    </div>
  );
} 
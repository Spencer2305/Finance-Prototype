'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Brain, Zap, TrendingUp, Target, Activity } from 'lucide-react';
import { revenueData, expenseData } from '@/lib/testData';

export default function ForecastingCharts() {
  const formatCurrency = (value: number) => `£${(value / 1000).toFixed(0)}k`;

  return (
    <div className="glass-card p-6 border-l-4 border-l-accent-purple">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="icon-container">
              <Brain className="h-6 w-6 text-accent-purple" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">📈 AI Revenue & Expense Forecasting</h3>
              <p className="text-sm text-gray-400">
                Neural network predictions with macro trends, pipeline probabilities, and ML-powered cost analysis
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="status-success">
              <Activity className="h-3 w-3 mr-1" />
              AI Models Active
            </span>
            <span className="status-cyber">
              <Target className="h-3 w-3 mr-1" />
              97% Accuracy
            </span>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-purple/20 mb-6">
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-accent-purple mt-1" />
            <div>
              <h4 className="font-medium text-white mb-2">🧠 AI Forecasting Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-accent-purple font-medium">Neural Network Analysis:</span>
                  <p className="text-gray-300">ML models predict 18% revenue growth trajectory based on 1,247 data points</p>
                </div>
                <div>
                  <span className="text-accent-purple font-medium">AI Risk Assessment:</span>
                  <p className="text-gray-300">Algorithmic variance analysis shows 94% confidence in forecast accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {/* AI Revenue Chart */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-accent-cyan" />
            <h4 className="text-md font-medium text-white">AI-Powered Revenue Forecast</h4>
            <span className="status-cyber">
              <Brain className="h-3 w-3 mr-1" />
              Machine Learning
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
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
                  labelStyle={{ color: '#fff' }}
                  contentStyle={{ 
                    backgroundColor: '#111113', 
                    border: '1px solid #252528',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#06b6d4" 
                  strokeWidth={3}
                  name="Actual Revenue"
                  connectNulls={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="AI Predicted Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="recurring" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="AI-Tracked Recurring"
                />
                <Line 
                  type="monotone" 
                  dataKey="pipeline" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="ML Pipeline Analysis"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Expense Chart */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-amber-400" />
            <h4 className="text-md font-medium text-white">AI-Optimized Expense Forecast</h4>
            <span className="status-warning">
              <Brain className="h-3 w-3 mr-1" />
              Cost Intelligence
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={expenseData}>
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
                  labelStyle={{ color: '#fff' }}
                  contentStyle={{ 
                    backgroundColor: '#111113', 
                    border: '1px solid #252528',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  name="Actual Expenses"
                  connectNulls={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#f97316" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="AI Predicted Expenses"
                />
                <Line 
                  type="monotone" 
                  dataKey="recurring" 
                  stroke="#6b7280" 
                  strokeWidth={2}
                  name="AI-Identified Recurring"
                />
                <Line 
                  type="monotone" 
                  dataKey="variable" 
                  stroke="#ec4899" 
                  strokeWidth={2}
                  name="ML Variable Analysis"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Forecasting Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-dark-200 rounded-lg border border-accent-cyan/20">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-4 w-4 text-accent-cyan" />
              <span className="text-sm font-medium text-white">ML Processing</span>
            </div>
            <p className="text-xs text-gray-300">97.3% accuracy</p>
            <p className="text-xs text-gray-400">2.1ms processing</p>
          </div>
          <div className="p-4 bg-dark-200 rounded-lg border border-accent-green/20">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-4 w-4 text-accent-green" />
              <span className="text-sm font-medium text-white">Revenue Growth</span>
            </div>
            <p className="text-xs text-gray-300">+18.2% predicted</p>
            <p className="text-xs text-gray-400">Q2 forecast confidence</p>
          </div>
          <div className="p-4 bg-dark-200 rounded-lg border border-accent-purple/20">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="h-4 w-4 text-accent-purple" />
              <span className="text-sm font-medium text-white">Risk Analysis</span>
            </div>
            <p className="text-xs text-gray-300">Low variance</p>
            <p className="text-xs text-gray-400">94% confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
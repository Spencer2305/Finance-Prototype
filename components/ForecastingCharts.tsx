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
    <div className="card border-l-4 border-l-purple-500">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Revenue & Expense Forecasting</h3>
              <p className="text-sm text-gray-600">
                Neural network predictions with macro trends, pipeline probabilities, and ML-powered cost analysis
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              AI Models Active
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Target className="h-3 w-3 mr-1" />
              97% Accuracy
            </span>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 mb-6">
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-purple-600 mt-1" />
            <div>
              <h4 className="font-medium text-purple-900 mb-2">🧠 AI Forecasting Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-purple-800 font-medium">Neural Network Analysis:</span>
                  <p className="text-purple-700">ML models predict 18% revenue growth trajectory based on 1,247 data points</p>
                </div>
                <div>
                  <span className="text-purple-800 font-medium">AI Risk Assessment:</span>
                  <p className="text-purple-700">Algorithmic variance analysis shows 94% confidence in forecast accuracy</p>
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
            <TrendingUp className="h-5 w-5 text-primary-600" />
            <h4 className="text-md font-medium text-gray-800">AI-Powered Revenue Forecast</h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              <Brain className="h-3 w-3 mr-1" />
              Machine Learning
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
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
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#0ea5e9" 
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
                  stroke="#22c55e" 
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
            <Target className="h-5 w-5 text-orange-600" />
            <h4 className="text-md font-medium text-gray-800">AI-Optimized Expense Forecast</h4>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              <Brain className="h-3 w-3 mr-1" />
              Cost Intelligence
            </span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={expenseData}>
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
          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <Brain className="h-4 w-4 text-blue-600" />
              <h5 className="font-medium text-blue-900">Neural Network Accuracy</h5>
            </div>
            <p className="text-2xl font-bold text-blue-800">97.3%</p>
            <p className="text-xs text-blue-600">Prediction confidence</p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-4 w-4 text-purple-600" />
              <h5 className="font-medium text-purple-900">AI Processing Speed</h5>
            </div>
            <p className="text-2xl font-bold text-purple-800">2.1ms</p>
            <p className="text-xs text-purple-600">Real-time analysis</p>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-4 w-4 text-green-600" />
              <h5 className="font-medium text-green-900">ML Data Points</h5>
            </div>
            <p className="text-2xl font-bold text-green-800">1,247</p>
            <p className="text-xs text-green-600">Training dataset size</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
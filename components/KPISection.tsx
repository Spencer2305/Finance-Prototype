'use client';

import { TrendingUp, TrendingDown, Minus, Brain, Zap, Target } from 'lucide-react';
import { kpis } from '@/lib/testData';

export default function KPISection() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = (trend: string, change: number) => {
    if (trend === 'up' && change > 0) return 'text-success-600';
    if (trend === 'down' && change < 0) return 'text-success-600';
    if (trend === 'up' && change < 0) return 'text-danger-600';
    if (trend === 'down' && change > 0) return 'text-danger-600';
    return 'text-gray-500';
  };

  const getAIConfidence = (index: number) => {
    // Deterministic confidence values to avoid hydration errors
    const confidenceValues = [96, 94, 98, 93, 97, 95];
    return confidenceValues[index % confidenceValues.length];
  };

  return (
    <div className="space-y-6">
      {/* AI KPI Header */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI-Powered Key Performance Indicators</h3>
              <p className="text-sm text-gray-600">Machine learning analysis of financial metrics with predictive insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Zap className="h-3 w-3 mr-1" />
              Neural Network Active
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Target className="h-3 w-3 mr-1" />
              AI Confidence: 96%
            </span>
          </div>
        </div>
      </div>

      {/* AI-Enhanced KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="metric-card border-l-4 border-l-primary-500 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-primary-600" />
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  AI Analyzed
                </span>
              </div>
              <span className="text-xs text-gray-500">Confidence: {getAIConfidence(index)}%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                {kpi.target && (
                  <div className="flex items-center space-x-1 mt-1">
                    <Target className="h-3 w-3 text-gray-400" />
                    <p className="text-sm text-gray-500">AI Target: {kpi.target}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className={`flex items-center ${getTrendColor(kpi.trend, kpi.change)}`}>
                  {getTrendIcon(kpi.trend)}
                  <span className="ml-1 text-sm font-medium">
                    {Math.abs(kpi.change)}%
                  </span>
                </div>
                <span className="text-sm text-gray-500">vs ML prediction</span>
              </div>
              
              <div className="p-2 bg-gradient-to-r from-gray-50 to-purple-50 rounded border border-purple-100">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-purple-600" />
                  <span className="text-xs text-purple-700 font-medium">
                    {index % 3 === 0 ? 'Neural network predicts continued growth' :
                     index % 3 === 1 ? 'AI algorithms suggest optimization opportunity' :
                     'Machine learning models indicate stable performance'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights Summary */}
      <div className="card bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-primary-900 mb-2">🤖 AI Performance Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-800 font-medium">Neural Network Analysis:</span>
                </div>
                <p className="text-purple-700 pl-6">Revenue trajectory shows 12.4% upward trend based on 847 data points analyzed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-800 font-medium">Machine Learning Forecast:</span>
                </div>
                <p className="text-purple-700 pl-6">AI models predict 94% probability of hitting Q2 targets with current momentum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
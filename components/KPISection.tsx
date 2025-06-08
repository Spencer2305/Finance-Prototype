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
    if (trend === 'up' && change > 0) return 'text-accent-green';
    if (trend === 'down' && change < 0) return 'text-accent-green';
    if (trend === 'up' && change < 0) return 'text-red-400';
    if (trend === 'down' && change > 0) return 'text-red-400';
    return 'text-gray-400';
  };

  const getAIConfidence = (index: number) => {
    // Deterministic confidence values to avoid hydration errors
    const confidenceValues = [96, 94, 98, 93, 97, 95];
    return confidenceValues[index % confidenceValues.length];
  };

  return (
    <div className="space-y-6">
      {/* AI KPI Header */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="icon-container">
              <Brain className="h-5 w-5 text-accent-purple" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">🧠 AI-Powered Key Performance Indicators</h3>
              <p className="text-sm text-gray-400">Machine learning analysis of financial metrics with predictive insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="status-success">
              <Zap className="h-3 w-3 mr-1" />
              Neural Network Active
            </span>
            <span className="status-cyber">
              <Target className="h-3 w-3 mr-1" />
              AI Confidence: 96%
            </span>
          </div>
        </div>
      </div>

      {/* AI-Enhanced KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="metric-card border-l-4 border-l-accent-purple">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-accent-purple" />
                <span className="status-cyber">
                  AI Analyzed
                </span>
              </div>
              <span className="text-xs text-gray-400">Confidence: {getAIConfidence(index)}%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-300">{kpi.label}</p>
                <p className="text-2xl font-bold text-white mt-2">{kpi.value}</p>
                {kpi.target && (
                  <div className="flex items-center space-x-1 mt-2">
                    <Target className="h-3 w-3 text-gray-400" />
                    <p className="text-sm text-gray-400">AI Target: {kpi.target}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className={`flex items-center ${getTrendColor(kpi.trend, kpi.change)}`}>
                  {getTrendIcon(kpi.trend)}
                  <span className="ml-1 text-sm font-medium">
                    {Math.abs(kpi.change)}%
                  </span>
                </div>
                <span className="text-sm text-gray-400">vs ML prediction</span>
              </div>
              
              <div className="p-3 bg-dark-200 rounded-lg border border-dark-300">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-accent-purple" />
                  <span className="text-xs text-gray-300 font-medium">
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
      <div className="glass-card p-6 border border-accent-purple/20">
        <div className="flex items-start space-x-4">
          <div className="icon-container">
            <Brain className="h-6 w-6 text-accent-purple" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white mb-3">🤖 AI Performance Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-accent-purple" />
                  <span className="text-accent-purple font-medium">Neural Network Analysis:</span>
                </div>
                <p className="text-gray-300 pl-6">Revenue trajectory shows 12.4% upward trend based on 847 data points analyzed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-accent-purple" />
                  <span className="text-accent-purple font-medium">Machine Learning Forecast:</span>
                </div>
                <p className="text-gray-300 pl-6">AI models predict 94% probability of hitting Q2 targets with current momentum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
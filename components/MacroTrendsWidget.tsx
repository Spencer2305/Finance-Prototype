'use client';

import { TrendingUp, TrendingDown, Activity, AlertTriangle } from 'lucide-react';
import { macroTrends } from '@/lib/testData';

export default function MacroTrendsWidget() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4" />;
      case 'down':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getTrendColor = (trend: string, impact: number) => {
    if (Math.abs(impact) > 5) {
      return trend === 'up' ? 'text-red-400' : 'text-accent-green';
    }
    return trend === 'up' ? 'text-amber-400' : 'text-accent-cyan';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'inflation':
        return '📈';
      case 'fx':
        return '💱';
      case 'seasonal':
        return '📅';
      default:
        return '📊';
    }
  };

  const getImpactSeverity = (impact: number) => {
    const absImpact = Math.abs(impact);
    if (absImpact > 8) return 'High';
    if (absImpact > 3) return 'Medium';
    return 'Low';
  };

  const getImpactBadgeColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">📊 Macro Economic Trends</h3>
        <p className="text-sm text-gray-400">
          External factors affecting revenue and expense forecasting
        </p>
      </div>

      <div className="space-y-4">
        {macroTrends.map((trend, index) => (
          <div key={index} className="p-4 border border-dark-300 rounded-lg hover:bg-dark-200 transition-colors glass-card">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{getTypeIcon(trend.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-white">{trend.factor}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`flex items-center ${getTrendColor(trend.trend, trend.impact)}`}>
                      {getTrendIcon(trend.trend)}
                      <span className="ml-1 text-sm font-medium">
                        {Math.abs(trend.impact)}%
                      </span>
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getImpactBadgeColor(getImpactSeverity(trend.impact))}`}>
                      {getImpactSeverity(trend.impact)} Impact
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-1">{trend.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-xs text-gray-500 capitalize">
                    Type: {trend.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    Trend: {trend.trend}ward
                  </span>
                </div>
              </div>
            </div>
            
            {Math.abs(trend.impact) > 5 && (
              <div className="mt-3 p-2 bg-amber-500/10 border border-amber-500/20 rounded flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-amber-300">
                  Significant impact detected - consider adjusting forecasts
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trend Summary */}
      <div className="mt-6 p-4 bg-dark-200 rounded-lg border border-dark-300">
        <h5 className="font-medium text-white mb-2">Overall Impact Assessment</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Net Revenue Impact:</span>
            <span className="ml-2 font-medium text-accent-green">+8.5%</span>
          </div>
          <div>
            <span className="text-gray-400">Net Cost Impact:</span>
            <span className="ml-2 font-medium text-red-400">+5.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
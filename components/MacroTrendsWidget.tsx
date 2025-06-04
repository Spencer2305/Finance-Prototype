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
      return trend === 'up' ? 'text-danger-600' : 'text-success-600';
    }
    return trend === 'up' ? 'text-warning-600' : 'text-primary-600';
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

  return (
    <div className="card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Macro Economic Trends</h3>
        <p className="text-sm text-gray-600">
          External factors affecting revenue and expense forecasting
        </p>
      </div>

      <div className="space-y-4">
        {macroTrends.map((trend, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{getTypeIcon(trend.type)}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{trend.factor}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`flex items-center ${getTrendColor(trend.trend, trend.impact)}`}>
                      {getTrendIcon(trend.trend)}
                      <span className="ml-1 text-sm font-medium">
                        {Math.abs(trend.impact)}%
                      </span>
                    </span>
                    <span className={`status-badge ${
                      getImpactSeverity(trend.impact) === 'High' ? 'status-danger' :
                      getImpactSeverity(trend.impact) === 'Medium' ? 'status-warning' : 'status-success'
                    }`}>
                      {getImpactSeverity(trend.impact)} Impact
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{trend.description}</p>
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
              <div className="mt-3 p-2 bg-warning-50 border border-warning-200 rounded flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-warning-600" />
                <span className="text-xs text-warning-700">
                  Significant impact detected - consider adjusting forecasts
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Trend Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h5 className="font-medium text-gray-900 mb-2">Overall Impact Assessment</h5>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Net Revenue Impact:</span>
            <span className="ml-2 font-medium text-success-600">+8.5%</span>
          </div>
          <div>
            <span className="text-gray-600">Net Cost Impact:</span>
            <span className="ml-2 font-medium text-danger-600">+5.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
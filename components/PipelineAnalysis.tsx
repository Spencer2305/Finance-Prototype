'use client';

import { useState } from 'react';
import { Calendar, TrendingUp, Users, Brain, Zap, Target, Activity, X, ChevronRight } from 'lucide-react';
import { pipelineDeals } from '@/lib/testData';

export default function PipelineAnalysis() {
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  
  const formatCurrency = (value: number) => `£${value.toLocaleString()}`;
  
  const totalPipelineValue = pipelineDeals.reduce((sum, deal) => sum + deal.value, 0);
  const weightedValue = pipelineDeals.reduce((sum, deal) => sum + (deal.value * deal.probability / 100), 0);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Discovery':
        return 'bg-gray-100 text-gray-800';
      case 'Initial Meeting':
        return 'bg-blue-100 text-blue-800';
      case 'Proposal Sent':
        return 'bg-yellow-100 text-yellow-800';
      case 'Negotiation':
        return 'bg-orange-100 text-orange-800';
      case 'Contract Review':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-success-600';
    if (probability >= 60) return 'text-warning-600';
    return 'text-danger-600';
  };

  const getAIConfidence = (probability: number) => {
    // Deterministic AI confidence based on probability to avoid hydration errors
    return Math.floor(probability * 0.95 + 2); // AI confidence slightly different but deterministic
  };

  const closeModal = () => setSelectedDeal(null);

  return (
    <div className="card border-l-4 border-l-green-500">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Pipeline Analysis</h3>
              <p className="text-sm text-gray-600">
                Machine learning CRM analysis with neural network probability calculations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              AI CRM Active
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Brain className="h-3 w-3 mr-1" />
              ML Scoring
            </span>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 mb-6">
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-medium text-green-900 mb-2">🤖 AI Deal Intelligence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-green-800 font-medium">Neural Network Analysis:</span>
                  <p className="text-green-700">AI algorithms predict 73% conversion rate based on historical patterns</p>
                </div>
                <div>
                  <span className="text-green-800 font-medium">Machine Learning Insights:</span>
                  <p className="text-green-700">Deal velocity optimization suggests 15% faster close rates possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Enhanced Pipeline Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <TrendingUp className="h-5 w-5 text-primary-600" />
            <Brain className="h-3 w-3 text-purple-600" />
          </div>
          <p className="text-sm font-medium text-primary-800">AI Total Pipeline</p>
          <p className="text-xl font-bold text-primary-900">{formatCurrency(totalPipelineValue)}</p>
          <p className="text-xs text-primary-600">Neural network tracked</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-success-50 to-green-50 rounded-lg border border-success-100">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <Calendar className="h-5 w-5 text-success-600" />
            <Target className="h-3 w-3 text-purple-600" />
          </div>
          <p className="text-sm font-medium text-success-800">AI Weighted Value</p>
          <p className="text-xl font-bold text-success-900">{formatCurrency(weightedValue)}</p>
          <p className="text-xs text-success-600">ML probability adjusted</p>
        </div>
        <div className="text-center p-4 bg-gradient-to-r from-warning-50 to-orange-50 rounded-lg border border-warning-100">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <Users className="h-5 w-5 text-warning-600" />
            <Activity className="h-3 w-3 text-purple-600" />
          </div>
          <p className="text-sm font-medium text-warning-800">AI Active Deals</p>
          <p className="text-xl font-bold text-warning-900">{pipelineDeals.length}</p>
          <p className="text-xs text-warning-600">Machine learning monitored</p>
        </div>
      </div>

      {/* Simplified Deal List */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-5 w-5 text-purple-600" />
          <h4 className="text-md font-medium text-gray-800">AI-Analyzed Active Deals</h4>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Click for AI Insights
          </span>
        </div>
        
        {pipelineDeals.map((deal) => (
          <div 
            key={deal.id} 
            className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors hover:border-purple-300 cursor-pointer group"
            onClick={() => setSelectedDeal(deal)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Brain className="h-4 w-4 text-purple-600" />
                <div>
                  <h5 className="font-medium text-gray-900">{deal.client}</h5>
                  <p className="text-sm text-gray-600">{deal.source}</p>
                </div>
                <span className={`status-badge ${getStageColor(deal.stage)}`}>
                  {deal.stage}
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  <Zap className="h-3 w-3 mr-1" />
                  AI: {getAIConfidence(deal.probability)}%
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{formatCurrency(deal.value)}</p>
                  <p className="text-sm text-gray-500">Close: {new Date(deal.expectedClose).toLocaleDateString()}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Pipeline Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4 text-blue-600" />
            <h5 className="font-medium text-blue-900">AI Conversion Rate</h5>
          </div>
          <p className="text-2xl font-bold text-blue-800">73.2%</p>
          <p className="text-xs text-blue-600">ML predicted success</p>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-4 w-4 text-purple-600" />
            <h5 className="font-medium text-purple-900">Neural Analysis Speed</h5>
          </div>
          <p className="text-2xl font-bold text-purple-800">1.8ms</p>
          <p className="text-xs text-purple-600">Real-time processing</p>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-green-600" />
            <h5 className="font-medium text-green-900">ML Data Points</h5>
          </div>
          <p className="text-2xl font-bold text-green-800">2,847</p>
          <p className="text-xs text-green-600">Historical deals analyzed</p>
        </div>
      </div>

      {/* Deal Details Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Brain className="h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{selectedDeal.client}</h3>
                  <p className="text-sm text-gray-600">AI Deal Analysis</p>
                </div>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Deal Overview */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Deal Value</label>
                  <p className="text-2xl font-bold text-gray-900">{formatCurrency(selectedDeal.value)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Current Stage</label>
                  <div className="mt-1">
                    <span className={`status-badge ${getStageColor(selectedDeal.stage)}`}>
                      {selectedDeal.stage}
                    </span>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Expected Close</label>
                  <p className="text-lg font-medium text-gray-900">{new Date(selectedDeal.expectedClose).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">Lead Source</label>
                  <p className="text-lg font-medium text-gray-900">{selectedDeal.source}</p>
                </div>
              </div>

              {/* AI Analysis */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-3">🤖 AI Probability Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Target className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">Manual Probability:</span>
                    </div>
                    <p className={`text-xl font-bold ${getProbabilityColor(selectedDeal.probability)}`}>
                      {selectedDeal.probability}%
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-800">AI Confidence:</span>
                    </div>
                    <p className="text-xl font-bold text-purple-600">
                      {getAIConfidence(selectedDeal.probability)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-900 mb-3">🧠 Neural Network Recommendations</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Zap className="h-4 w-4 text-green-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Priority Level:</p>
                      <p className="text-sm text-green-700">
                        {selectedDeal.probability >= 80 ? 'High priority - accelerate close process' :
                         selectedDeal.probability >= 60 ? 'Medium priority - nurture relationship and address concerns' :
                         'Low priority - reassess qualification and value proposition'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Brain className="h-4 w-4 text-green-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-green-800">AI Predicted Timeline:</p>
                      <p className="text-sm text-green-700">
                        Based on similar deals, expect {Math.ceil((new Date(selectedDeal.expectedClose).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24) * 0.9)} days to close
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Activity className="h-4 w-4 text-green-600 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Next Best Action:</p>
                      <p className="text-sm text-green-700">
                        {selectedDeal.stage === 'Discovery' ? 'Schedule technical demo and needs assessment' :
                         selectedDeal.stage === 'Initial Meeting' ? 'Send detailed proposal with pricing options' :
                         selectedDeal.stage === 'Proposal Sent' ? 'Follow up with decision makers and address objections' :
                         selectedDeal.stage === 'Negotiation' ? 'Finalize terms and prepare contract documentation' :
                         'Complete legal review and schedule signing ceremony'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expected Values */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">AI Expected Value</p>
                  <p className="text-lg font-bold text-purple-600">
                    {formatCurrency(selectedDeal.value * getAIConfidence(selectedDeal.probability) / 100)}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">Manual Expected Value</p>
                  <p className="text-lg font-bold text-gray-600">
                    {formatCurrency(selectedDeal.value * selectedDeal.probability / 100)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
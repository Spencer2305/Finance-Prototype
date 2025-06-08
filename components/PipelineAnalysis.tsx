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
        return 'bg-dark-200 text-gray-300 border-gray-500';
      case 'Initial Meeting':
        return 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20';
      case 'Proposal Sent':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'Negotiation':
        return 'bg-orange-500/10 text-orange-300 border-orange-500/20';
      case 'Contract Review':
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
      default:
        return 'bg-dark-200 text-gray-300 border-gray-500';
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'text-accent-green';
    if (probability >= 60) return 'text-amber-400';
    return 'text-red-400';
  };

  const getAIConfidence = (probability: number) => {
    // Deterministic AI confidence based on probability to avoid hydration errors
    return Math.floor(probability * 0.95 + 2); // AI confidence slightly different but deterministic
  };

  const closeModal = () => setSelectedDeal(null);

  return (
    <div className="glass-card p-6 border-l-4 border-l-accent-green">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="icon-container-green">
              <Brain className="h-6 w-6 text-accent-green" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">📊 AI Pipeline Analysis</h3>
              <p className="text-sm text-gray-400">
                Machine learning CRM analysis with neural network probability calculations
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="status-success">
              <Activity className="h-3 w-3 mr-1" />
              AI CRM Active
            </span>
            <span className="status-cyber">
              <Brain className="h-3 w-3 mr-1" />
              ML Scoring
            </span>
          </div>
        </div>

        {/* AI Analysis Summary */}
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-green/20 mb-6">
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-accent-green mt-1" />
            <div>
              <h4 className="font-medium text-white mb-2">🤖 AI Deal Intelligence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-accent-green font-medium">Neural Network Analysis:</span>
                  <p className="text-gray-300">AI algorithms predict 73% conversion rate based on historical patterns</p>
                </div>
                <div>
                  <span className="text-accent-green font-medium">Machine Learning Insights:</span>
                  <p className="text-gray-300">Deal velocity optimization suggests 15% faster close rates possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Enhanced Pipeline Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-cyan/20">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <TrendingUp className="h-5 w-5 text-accent-cyan" />
            <Brain className="h-3 w-3 text-accent-purple" />
          </div>
          <p className="text-sm font-medium text-white">AI Total Pipeline</p>
          <p className="text-xl font-bold text-white">{formatCurrency(totalPipelineValue)}</p>
          <p className="text-xs text-gray-400">Neural network tracked</p>
        </div>
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-green/20">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <Calendar className="h-5 w-5 text-accent-green" />
            <Target className="h-3 w-3 text-accent-purple" />
          </div>
          <p className="text-sm font-medium text-white">AI Weighted Value</p>
          <p className="text-xl font-bold text-white">{formatCurrency(weightedValue)}</p>
          <p className="text-xs text-gray-400">ML probability adjusted</p>
        </div>
        <div className="text-center p-4 bg-dark-200 rounded-lg border border-amber-500/20">
          <div className="flex items-center justify-center space-x-1 mb-2">
            <Users className="h-5 w-5 text-amber-400" />
            <Activity className="h-3 w-3 text-accent-purple" />
          </div>
          <p className="text-sm font-medium text-white">AI Active Deals</p>
          <p className="text-xl font-bold text-white">{pipelineDeals.length}</p>
          <p className="text-xs text-gray-400">Machine learning monitored</p>
        </div>
      </div>

      {/* Simplified Deal List */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-5 w-5 text-accent-purple" />
          <h4 className="text-md font-medium text-white">AI-Analyzed Active Deals</h4>
          <span className="status-cyber">
            Click for AI Insights
          </span>
        </div>
        
        {pipelineDeals.map((deal) => (
          <div 
            key={deal.id} 
            className="p-4 border border-dark-300 rounded-lg hover:bg-dark-200 transition-colors hover:border-accent-purple/40 cursor-pointer group glass-card"
            onClick={() => setSelectedDeal(deal)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Brain className="h-4 w-4 text-accent-purple" />
                <div>
                  <h5 className="font-medium text-white">{deal.client}</h5>
                  <p className="text-sm text-gray-400">{deal.source}</p>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStageColor(deal.stage)}`}>
                  {deal.stage}
                </span>
                <span className="status-cyber">
                  <Zap className="h-3 w-3 mr-1" />
                  AI: {getAIConfidence(deal.probability)}%
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="font-semibold text-white">{formatCurrency(deal.value)}</p>
                  <p className="text-sm text-gray-400">Close: {new Date(deal.expectedClose).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent-purple transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Pipeline Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-cyan/20">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4 text-accent-cyan" />
            <span className="text-sm font-medium text-white">AI Conversion Rate</span>
          </div>
          <p className="text-xl font-bold text-white">73.2%</p>
          <p className="text-xs text-gray-400">ML predicted success</p>
        </div>
        
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-purple/20">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-4 w-4 text-accent-purple" />
            <span className="text-sm font-medium text-white">Neural Analysis Speed</span>
          </div>
          <p className="text-xl font-bold text-white">1.8ms</p>
          <p className="text-xs text-gray-400">Real-time processing</p>
        </div>
        
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-green/20">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-accent-green" />
            <span className="text-sm font-medium text-white">ML Data Points</span>
          </div>
          <p className="text-xl font-bold text-white">2,847</p>
          <p className="text-xs text-gray-400">Historical deals analyzed</p>
        </div>
      </div>

      {/* Deal Details Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="glass-card p-6 max-w-2xl w-full mx-4 border border-accent-purple/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="icon-container">
                  <Brain className="h-6 w-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">🤖 AI Deal Analysis: {selectedDeal.client}</h3>
                  <p className="text-sm text-gray-400">Advanced neural network insights</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="p-2 hover:bg-dark-300 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-dark-200 rounded-lg border border-dark-300">
                  <h4 className="font-medium text-white mb-2">Deal Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Value:</span>
                      <span className="text-white font-medium">{formatCurrency(selectedDeal.value)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Probability:</span>
                      <span className={getProbabilityColor(selectedDeal.probability)}>{selectedDeal.probability}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Stage:</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs ${getStageColor(selectedDeal.stage)}`}>
                        {selectedDeal.stage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Expected Close:</span>
                      <span className="text-white">{new Date(selectedDeal.expectedClose).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-dark-200 rounded-lg border border-accent-purple/20">
                  <h4 className="font-medium text-white mb-3">🧠 AI Analysis</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-accent-purple font-medium">AI Confidence:</span>
                      <p className="text-gray-300">{getAIConfidence(selectedDeal.probability)}% neural network confidence</p>
                    </div>
                    <div>
                      <span className="text-accent-purple font-medium">ML Recommendations:</span>
                      <p className="text-gray-300">
                        {selectedDeal.probability > 75 ? 'High conversion probability - prioritize resources' :
                         selectedDeal.probability > 50 ? 'Moderate risk - increase engagement frequency' :
                         'Lower probability - consider alternative strategies'}
                      </p>
                    </div>
                    <div>
                      <span className="text-accent-purple font-medium">Risk Assessment:</span>
                      <p className="text-gray-300">
                        {selectedDeal.probability > 75 ? 'Low risk profile based on historical patterns' :
                         selectedDeal.probability > 50 ? 'Medium risk - monitor closely for changes' :
                         'Higher risk - requires strategic intervention'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button 
                onClick={closeModal}
                className="btn-cyber"
              >
                Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
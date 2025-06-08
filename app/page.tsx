'use client';

import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import KPISection from '@/components/KPISection';
import ForecastingCharts from '@/components/ForecastingCharts';
import PipelineAnalysis from '@/components/PipelineAnalysis';
import MacroTrendsWidget from '@/components/MacroTrendsWidget';
import InvoiceManagement from '@/components/InvoiceManagement';
import ComplianceReporting from '@/components/ComplianceReporting';
import CashFlowChart from '@/components/CashFlowChart';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAIModal, setShowAIModal] = useState(false);

  return (
    <div className="min-h-screen relative bg-dark-50">
      <DashboardHeader />
      
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Modern Tab Navigation */}
        <div className="mb-8 flex justify-center">
          <div className="tab-nav inline-flex">
            {[
              { id: 'overview', name: 'Overview', icon: '📊' },
              { id: 'forecasting', name: 'Forecasting', icon: '📈' },
              { id: 'invoices', name: 'Invoice Management', icon: '📋' },
              { id: 'compliance', name: 'Compliance', icon: '🛡️' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="animate-fade-in transform transition-all duration-700">
              <KPISection />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-in-left delay-100 transform transition-all duration-500">
                <ForecastingCharts />
              </div>
              <div className="animate-slide-in-right delay-200 transform transition-all duration-500">
                <CashFlowChart />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-in-left delay-300 transform transition-all duration-500">
                <PipelineAnalysis />
              </div>
              <div className="animate-slide-in-right delay-400 transform transition-all duration-500">
                <MacroTrendsWidget />
              </div>
            </div>
          </div>
        )}

        {/* Forecasting Tab */}
        {activeTab === 'forecasting' && (
          <div className="space-y-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-cyber mb-3">🧠 AI-Powered Forecasting</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Advanced neural networks analyzing market trends and predicting financial outcomes with 97.3% accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-in-left delay-100 transform transition-all duration-500">
                <ForecastingCharts />
              </div>
              <div className="animate-slide-in-right delay-200 transform transition-all duration-500">
                <CashFlowChart />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="animate-slide-in-left delay-300 transform transition-all duration-500">
                <PipelineAnalysis />
              </div>
              <div className="animate-slide-in-right delay-400 transform transition-all duration-500">
                <MacroTrendsWidget />
              </div>
            </div>
          </div>
        )}

        {/* Invoice Management Tab */}
        {activeTab === 'invoices' && (
          <div className="space-y-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-cyber mb-3">📋 Intelligent Invoice Processing</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                AI-powered document analysis with automated GL coding and anomaly detection
              </p>
            </div>

            <div className="animate-fade-in-scale delay-200 transform transition-all duration-500">
              <InvoiceManagement />
            </div>
          </div>
        )}

        {/* Compliance Tab */}
        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="text-3xl font-bold text-cyber mb-3">🛡️ AI Compliance Guardian</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Continuous monitoring and automated reporting powered by machine learning algorithms
              </p>
            </div>

            <div className="animate-fade-in-scale delay-200 transform transition-all duration-500">
              <ComplianceReporting />
            </div>
          </div>
        )}

        {/* AI Assistant Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="group relative">
            <button 
              onClick={() => setShowAIModal(true)}
              className="btn-cyber rounded-full w-16 h-16 flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <span className="text-2xl animate-bounce">🤖</span>
            </button>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-dark-200 text-white text-sm px-3 py-2 rounded-lg border border-accent-purple/30 whitespace-nowrap">
                AI Financial Assistant
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark-200"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Modal */}
        {showAIModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-accent-purple/30">
              {/* Modal Header */}
              <div className="p-6 border-b border-dark-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="icon-container">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">AI Financial Assistant</h2>
                      <p className="text-sm text-gray-400">Powered by Neural Finance Engine v3.2.1</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowAIModal(false)}
                    className="p-2 hover:bg-dark-300 rounded-lg transition-colors"
                  >
                    <span className="text-gray-400 hover:text-white text-xl">×</span>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* AI Status */}
                <div className="glass-card p-4 border border-accent-green/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                    <span className="text-accent-green font-medium">AI System Online</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Neural Load</p>
                      <p className="text-white font-medium">23.7%</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Response Time</p>
                      <p className="text-white font-medium">1.2ms</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Accuracy</p>
                      <p className="text-white font-medium">97.3%</p>
                    </div>
                  </div>
                </div>

                {/* Available AI Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">🧠 Available AI Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-card p-4 border border-accent-purple/20 hover:border-accent-purple/40 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">📊</span>
                        <h4 className="font-medium text-white group-hover:text-accent-purple transition-colors">Smart Analytics</h4>
                      </div>
                      <p className="text-sm text-gray-400">AI-powered financial data analysis and insights</p>
                    </div>
                    
                    <div className="glass-card p-4 border border-accent-cyan/20 hover:border-accent-cyan/40 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">🔮</span>
                        <h4 className="font-medium text-white group-hover:text-accent-cyan transition-colors">Predictive Modeling</h4>
                      </div>
                      <p className="text-sm text-gray-400">Future revenue and expense forecasting</p>
                    </div>
                    
                    <div className="glass-card p-4 border border-accent-green/20 hover:border-accent-green/40 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">🚨</span>
                        <h4 className="font-medium text-white group-hover:text-accent-green transition-colors">Anomaly Detection</h4>
                      </div>
                      <p className="text-sm text-gray-400">Automatic fraud and error identification</p>
                    </div>
                    
                    <div className="glass-card p-4 border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl">💬</span>
                        <h4 className="font-medium text-white group-hover:text-amber-400 transition-colors">Natural Language</h4>
                      </div>
                      <p className="text-sm text-gray-400">Ask questions in plain English</p>
                    </div>
                  </div>
                </div>

                {/* Demo Chat Interface */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">💬 AI Chat Demo</h3>
                  <div className="glass-card p-4 border border-dark-300 space-y-4 max-h-64 overflow-y-auto">
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">🤖</span>
                      <div className="flex-1">
                        <p className="text-sm text-white">Hello! I'm your AI Financial Assistant. I can help you with:</p>
                        <ul className="text-sm text-gray-400 mt-2 space-y-1">
                          <li>• Revenue forecasting and trend analysis</li>
                          <li>• Invoice anomaly detection</li>
                          <li>• Compliance monitoring</li>
                          <li>• Cash flow optimization</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">👤</span>
                      <div className="glass-card p-3 border border-accent-purple/20 flex-1">
                        <p className="text-sm text-white">"What's our projected revenue for next quarter?"</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-lg">🤖</span>
                      <div className="flex-1">
                        <p className="text-sm text-white">Based on current pipeline analysis and historical data, I predict Q4 revenue of £847,000 with 94.2% confidence. Key factors:</p>
                        <ul className="text-sm text-gray-400 mt-2 space-y-1">
                          <li>• TechCorp deal (£250k) - 89% close probability</li>
                          <li>• Recurring subscriptions - £320k baseline</li>
                          <li>• Seasonal uptick expected +12%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-dark-300">
                  <div className="text-sm text-gray-400">
                    <span className="inline-flex items-center">
                      <div className="w-2 h-2 bg-accent-purple rounded-full mr-2 animate-pulse"></div>
                      AI integration coming soon
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setShowAIModal(false)}
                      className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                    <button className="btn-cyber text-sm px-4 py-2">
                      Request AI Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Background Enhancements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-float delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl animate-float delay-2000"></div>
        </div>
      </main>
    </div>
  );
} 
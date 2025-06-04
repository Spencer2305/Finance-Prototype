'use client';

import { useState } from 'react';
import { FileText, Upload, AlertTriangle, CheckCircle, Clock, Brain, Zap, Search, Target, Activity } from 'lucide-react';

export default function InvoiceManagement() {
  const [activeTab, setActiveTab] = useState('automated');

  const tabs = [
    { 
      id: 'automated', 
      label: 'AI Automated Processing', 
      icon: Brain,
      description: 'Neural network invoice analysis'
    },
    { 
      id: 'anomalies', 
      label: 'ML Anomaly Detection', 
      icon: Search,
      description: 'Machine learning fraud detection'
    },
    { 
      id: 'integration', 
      label: 'AI ERP Integration', 
      icon: Target,
      description: 'Intelligent system connectivity'
    },
  ];

  const automatedInvoices = [
    {
      id: 'INV-001',
      vendor: 'TechCorp Solutions Ltd',
      amount: 2450.00,
      status: 'processed',
      aiConfidence: 98,
      extractedItems: 4,
      glCodes: ['4100', '4200', '4300'],
      processingTime: '0.8s',
      anomalies: 0
    },
    {
      id: 'INV-002',
      vendor: 'Office Supplies Direct',
      amount: 156.73,
      status: 'processing',
      aiConfidence: 94,
      extractedItems: 2,
      glCodes: ['6100', '6200'],
      processingTime: '1.2s',
      anomalies: 0
    },
    {
      id: 'INV-003',
      vendor: 'Marketing Agency Pro',
      amount: 8750.00,
      status: 'review',
      aiConfidence: 87,
      extractedItems: 6,
      glCodes: ['5200', '5300'],
      processingTime: '2.1s',
      anomalies: 1
    }
  ];

  const detectedAnomalies = [
    {
      id: 'ANOM-001',
      type: 'Duplicate Invoice',
      severity: 'High',
      description: 'AI detected potential duplicate of INV-003 from Marketing Agency Pro',
      confidence: 94,
      recommendation: 'Hold for manual review - similar invoice processed 3 days ago',
      action: 'ML flagged for investigation'
    },
    {
      id: 'ANOM-002',
      type: 'Budget Alert',
      severity: 'Medium',
      description: 'Neural network identified spend exceeding budget threshold in Marketing category',
      confidence: 89,
      recommendation: 'Current month spend: £12,400 vs budget: £10,000',
      action: 'AI suggests approval workflow'
    },
    {
      id: 'ANOM-003',
      type: 'Unusual Pattern',
      severity: 'Low',
      description: 'Machine learning detected 40% increase in office supplies compared to historical average',
      confidence: 76,
      recommendation: 'Pattern recognition suggests seasonal variation - monitoring continues',
      action: 'AI monitoring active'
    }
  ];

  const erpIntegrations = [
    {
      system: 'Xero',
      status: 'active',
      aiFeatures: 'Full neural network integration',
      lastSync: '2 minutes ago',
      invoicesProcessed: 1247,
      accuracy: 98.7,
      automation: 'Real-time AI processing'
    },
    {
      system: 'QuickBooks',
      status: 'ready',
      aiFeatures: 'ML-powered reconciliation ready',
      lastSync: 'Not connected',
      invoicesProcessed: 0,
      accuracy: 0,
      automation: 'AI setup pending'
    },
    {
      system: 'SAP',
      status: 'development',
      aiFeatures: 'Advanced neural networks in development',
      lastSync: 'In development',
      invoicesProcessed: 0,
      accuracy: 0,
      automation: 'AI beta testing'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="h-4 w-4 text-success-600" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-warning-600" />;
      case 'review':
        return <AlertTriangle className="h-4 w-4 text-danger-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'text-danger-600 bg-danger-50 border-danger-200';
      case 'Medium':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'Low':
        return 'text-info-600 bg-info-50 border-info-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getERPStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-success-600 bg-success-50 border-success-200';
      case 'ready':
        return 'text-info-600 bg-info-50 border-info-200';
      case 'development':
        return 'text-warning-600 bg-warning-50 border-warning-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const renderAutomatedTab = () => (
    <div className="space-y-6">
      {/* AI Processing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-100">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4 text-primary-600" />
            <h5 className="font-medium text-primary-900">AI Processing Rate</h5>
          </div>
          <p className="text-2xl font-bold text-primary-800">0.8s</p>
          <p className="text-xs text-primary-600">Average neural analysis time</p>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-success-50 to-green-50 rounded-lg border border-success-100">
          <div className="flex items-center space-x-2 mb-2">
            <Target className="h-4 w-4 text-success-600" />
            <h5 className="font-medium text-success-900">ML Accuracy</h5>
          </div>
          <p className="text-2xl font-bold text-success-800">98.7%</p>
          <p className="text-xs text-success-600">Machine learning precision</p>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-100">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-4 w-4 text-purple-600" />
            <h5 className="font-medium text-purple-900">AI Extracted Items</h5>
          </div>
          <p className="text-2xl font-bold text-purple-800">12</p>
          <p className="text-xs text-purple-600">Line items auto-processed</p>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
          <div className="flex items-center space-x-2 mb-2">
            <Search className="h-4 w-4 text-orange-600" />
            <h5 className="font-medium text-orange-900">AI Anomalies Found</h5>
          </div>
          <p className="text-2xl font-bold text-orange-800">1</p>
          <p className="text-xs text-orange-600">ML flagged for review</p>
        </div>
      </div>

      {/* AI Invoice Processing */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-5 w-5 text-purple-600" />
          <h4 className="text-md font-medium text-gray-800">AI-Processed Invoices</h4>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Neural Network Active
          </span>
        </div>
        
        <div className="space-y-3">
          {automatedInvoices.map((invoice) => (
            <div key={invoice.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors hover:border-purple-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-purple-600" />
                    <span className="font-medium text-gray-900">{invoice.id}</span>
                  </div>
                  {getStatusIcon(invoice.status)}
                  <span className="text-sm text-gray-600">{invoice.vendor}</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <Zap className="h-3 w-3 mr-1" />
                    AI Processed
                  </span>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">£{invoice.amount.toLocaleString()}</p>
                  <p className="text-sm text-purple-600">AI Confidence: {invoice.aiConfidence}%</p>
                </div>
              </div>
              
              <div className="p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded border border-purple-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-purple-800 font-medium">Neural Processing:</span>
                    <p className="text-purple-700">{invoice.processingTime}</p>
                  </div>
                  <div>
                    <span className="text-purple-800 font-medium">ML Extracted Items:</span>
                    <p className="text-purple-700">{invoice.extractedItems} line items</p>
                  </div>
                  <div>
                    <span className="text-purple-800 font-medium">AI GL Codes:</span>
                    <p className="text-purple-700">{invoice.glCodes.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-purple-800 font-medium">AI Anomalies:</span>
                    <p className={invoice.anomalies > 0 ? 'text-orange-700' : 'text-green-700'}>
                      {invoice.anomalies === 0 ? 'Clean' : `${invoice.anomalies} flagged`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnomaliesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-5 w-5 text-orange-600" />
        <h4 className="text-md font-medium text-gray-800">AI Anomaly Detection</h4>
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
          Machine Learning Active
        </span>
      </div>
      
      <div className="space-y-4">
        {detectedAnomalies.map((anomaly) => (
          <div key={anomaly.id} className={`p-4 rounded-lg border ${getSeverityColor(anomaly.severity)}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">{anomaly.type}</span>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  <Search className="h-3 w-3 mr-1" />
                  AI Detected
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">AI Confidence: {anomaly.confidence}%</span>
                <p className="text-xs text-gray-500">{anomaly.severity} Priority</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-800">Neural Network Analysis:</span>
                <p className="text-sm text-gray-700 mt-1">{anomaly.description}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-800">AI Recommendation:</span>
                <p className="text-sm text-gray-700 mt-1">{anomaly.recommendation}</p>
              </div>
              
              <div className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded border border-purple-200">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-purple-600" />
                  <span className="text-xs text-purple-700 font-medium">
                    Machine Learning Action: {anomaly.action}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIntegrationTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Target className="h-5 w-5 text-blue-600" />
        <h4 className="text-md font-medium text-gray-800">AI ERP Integration Status</h4>
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Intelligent Connectivity
        </span>
      </div>
      
      <div className="space-y-4">
        {erpIntegrations.map((integration) => (
          <div key={integration.system} className={`p-4 rounded-lg border ${getERPStatusColor(integration.status)}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <h5 className="font-medium text-gray-900">{integration.system}</h5>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  <Activity className="h-3 w-3 mr-1" />
                  AI Enhanced
                </span>
              </div>
              <span className="text-sm font-medium capitalize">{integration.status}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-sm font-medium text-gray-800">AI Features:</span>
                <p className="text-sm text-gray-700">{integration.aiFeatures}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-800">Neural Sync Status:</span>
                <p className="text-sm text-gray-700">{integration.lastSync}</p>
              </div>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-gray-50 to-purple-50 rounded border border-purple-100">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-purple-800 font-medium">AI Processed:</span>
                  <p className="text-purple-700">{integration.invoicesProcessed.toLocaleString()} invoices</p>
                </div>
                <div>
                  <span className="text-purple-800 font-medium">ML Accuracy:</span>
                  <p className="text-purple-700">{integration.accuracy}%</p>
                </div>
                <div>
                  <span className="text-purple-800 font-medium">Neural Automation:</span>
                  <p className="text-purple-700">{integration.automation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="card border-l-4 border-l-indigo-500">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Invoice Management System</h3>
              <p className="text-sm text-gray-600">
                Neural network-powered invoice processing with machine learning anomaly detection and intelligent ERP integration
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <Activity className="h-3 w-3 mr-1" />
              AI Systems Online
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Zap className="h-3 w-3 mr-1" />
              98.7% Accuracy
            </span>
          </div>
        </div>

        {/* AI Processing Overview */}
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 mb-6">
          <div className="flex items-start space-x-3">
            <Brain className="h-5 w-5 text-indigo-600 mt-1" />
            <div>
              <h4 className="font-medium text-indigo-900 mb-2">🤖 AI Processing Intelligence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-indigo-800 font-medium">Neural Network Processing:</span>
                  <p className="text-indigo-700">Advanced OCR and NLP algorithms extract data with 98.7% accuracy</p>
                </div>
                <div>
                  <span className="text-indigo-800 font-medium">Machine Learning Detection:</span>
                  <p className="text-indigo-700">Real-time anomaly detection prevents fraud and duplicate payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Enhanced Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group inline-flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className="text-xs text-gray-400">{tab.description}</div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'automated' && renderAutomatedTab()}
        {activeTab === 'anomalies' && renderAnomaliesTab()}
        {activeTab === 'integration' && renderIntegrationTab()}
      </div>
    </div>
  );
} 
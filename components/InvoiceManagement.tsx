'use client';

import { useState } from 'react';
import { FileText, Search, Target, Upload, Brain, Zap, Activity, AlertCircle, CheckCircle, Clock, X } from 'lucide-react';

interface Invoice {
  id: string;
  vendor: string;
  amount: number;
  status: 'pending' | 'processed' | 'approved' | 'paid';
  dueDate: string;
  glCode: string;
  confidence: number;
  aiTags: string[];
}

interface Anomaly {
  id: string;
  type: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  confidence: number;
  recommendation: string;
  action: string;
}

interface ERPIntegration {
  system: string;
  status: 'connected' | 'syncing' | 'error';
  accuracy: number;
  invoicesProcessed: number;
  lastSync: string;
  aiFeatures: string;
  automation: string;
}

const invoices: Invoice[] = [
  {
    id: 'INV-2024-001',
    vendor: 'CloudTech Solutions',
    amount: 4500,
    status: 'processed',
    dueDate: '2024-04-15',
    glCode: '4000',
    confidence: 97,
    aiTags: ['Software License', 'Recurring']
  },
  {
    id: 'INV-2024-002',
    vendor: 'Office Supplies Ltd',
    amount: 850,
    status: 'pending',
    dueDate: '2024-04-20',
    glCode: '5200',
    confidence: 93,
    aiTags: ['Office Expense', 'One-time']
  },
  {
    id: 'INV-2024-003',
    vendor: 'Marketing Agency Pro',
    amount: 12000,
    status: 'approved',
    dueDate: '2024-04-25',
    glCode: '6100',
    confidence: 99,
    aiTags: ['Marketing', 'Campaign']
  }
];

const detectedAnomalies: Anomaly[] = [
  {
    id: 'AN-001',
    type: 'Duplicate Invoice',
    description: 'Neural network detected potential duplicate payment to CloudTech Solutions',
    severity: 'high',
    confidence: 94,
    recommendation: 'Review transaction history and verify with vendor',
    action: 'Hold payment pending verification'
  },
  {
    id: 'AN-002',
    type: 'Price Variance',
    description: 'AI detected 25% price increase from historical average for office supplies',
    severity: 'medium',
    confidence: 87,
    recommendation: 'Verify market pricing or renegotiate contract terms',
    action: 'Flag for procurement review'
  }
];

const erpIntegrations: ERPIntegration[] = [
  {
    system: 'SAP Business One',
    status: 'connected',
    accuracy: 98.7,
    invoicesProcessed: 2847,
    lastSync: '2 minutes ago',
    aiFeatures: 'Smart GL coding, automated matching, predictive analytics',
    automation: 'Full automation enabled'
  },
  {
    system: 'QuickBooks Enterprise',
    status: 'syncing',
    accuracy: 96.2,
    invoicesProcessed: 1923,
    lastSync: 'In progress',
    aiFeatures: 'Intelligent categorization, duplicate detection',
    automation: 'Partial automation'
  }
];

export default function InvoiceManagement() {
  const [activeTab, setActiveTab] = useState('automated');

  const tabs = [
    { 
      id: 'automated', 
      label: 'AI Processing',
      description: 'Neural network automation',
      icon: Brain
    },
    { 
      id: 'anomalies', 
      label: 'ML Detection',
      description: 'Anomaly analysis',
      icon: Search
    },
    { 
      id: 'integration', 
      label: 'ERP Sync',
      description: 'Intelligent connectivity',
      icon: Target
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="h-4 w-4 text-accent-green" />;
      case 'approved':
        return <Clock className="h-4 w-4 text-accent-cyan" />;
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-accent-green" />;
      default:
        return <Clock className="h-4 w-4 text-amber-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
      case 'approved':
        return 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20';
      case 'paid':
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
      default:
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/10 border-red-500/20';
      case 'medium':
        return 'bg-amber-500/10 border-amber-500/20';
      default:
        return 'bg-accent-green/10 border-accent-green/20';
    }
  };

  const getERPStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-accent-green/10 border-accent-green/20';
      case 'syncing':
        return 'bg-accent-cyan/10 border-accent-cyan/20';
      default:
        return 'bg-red-500/10 border-red-500/20';
    }
  };

  const renderAutomatedTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Brain className="h-5 w-5 text-accent-purple" />
        <h4 className="text-md font-medium text-white">AI-Processed Invoices</h4>
        <span className="status-cyber">
          Neural Network Active
        </span>
      </div>
      
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="p-4 border border-dark-300 rounded-lg hover:bg-dark-200 transition-colors hover:border-accent-purple/40 glass-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(invoice.status)}
                  <span className="font-medium text-white">{invoice.id}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">{invoice.vendor}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                  {invoice.status}
                </span>
                <div className="text-right">
                  <p className="font-medium text-white">£{invoice.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">Due: {new Date(invoice.dueDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-gray-400">GL Code:</span>
                <span className="text-white ml-2">{invoice.glCode}</span>
              </div>
              <div>
                <span className="text-gray-400">AI Confidence:</span>
                <span className="text-accent-green ml-2">{invoice.confidence}%</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {invoice.aiTags.map((tag, idx) => (
                  <span key={idx} className="status-cyber">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-3 p-2 bg-dark-200 rounded border border-accent-purple/20">
              <div className="flex items-center space-x-2">
                <Brain className="h-3 w-3 text-accent-purple" />
                <span className="text-xs text-gray-300">
                  Neural network processed • GL auto-coded • Duplicate check passed
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAnomaliesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-5 w-5 text-amber-400" />
        <h4 className="text-md font-medium text-white">AI Anomaly Detection</h4>
        <span className="bg-amber-500/10 text-amber-400 border-amber-500/20 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border">
          Machine Learning Active
        </span>
      </div>
      
      <div className="space-y-4">
        {detectedAnomalies.map((anomaly) => (
          <div key={anomaly.id} className={`p-4 rounded-lg border glass-card ${getSeverityColor(anomaly.severity)}`}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-accent-purple" />
                  <span className="font-medium text-white">{anomaly.type}</span>
                </div>
                <span className="status-cyber">
                  <Search className="h-3 w-3 mr-1" />
                  AI Detected
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-white">AI Confidence: {anomaly.confidence}%</span>
                <p className="text-xs text-gray-400">{anomaly.severity} Priority</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-accent-purple">Neural Network Analysis:</span>
                <p className="text-sm text-gray-300 mt-1">{anomaly.description}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-accent-purple">AI Recommendation:</span>
                <p className="text-sm text-gray-300 mt-1">{anomaly.recommendation}</p>
              </div>
              
              <div className="p-2 bg-dark-200 rounded border border-accent-purple/20">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 text-accent-purple" />
                  <span className="text-xs text-gray-300 font-medium">
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
        <Target className="h-5 w-5 text-accent-cyan" />
        <h4 className="text-md font-medium text-white">AI ERP Integration Status</h4>
        <span className="bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border">
          Intelligent Connectivity
        </span>
      </div>
      
      <div className="space-y-4">
        {erpIntegrations.map((integration) => (
          <div key={integration.system} className={`p-4 rounded-lg border glass-card ${getERPStatusColor(integration.status)}`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-accent-purple" />
                  <h5 className="font-medium text-white">{integration.system}</h5>
                </div>
                <span className="status-cyber">
                  <Activity className="h-3 w-3 mr-1" />
                  AI Enhanced
                </span>
              </div>
              <span className="text-sm font-medium capitalize text-white">{integration.status}</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-sm font-medium text-accent-purple">AI Features:</span>
                <p className="text-sm text-gray-300">{integration.aiFeatures}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-accent-purple">Neural Sync Status:</span>
                <p className="text-sm text-gray-300">{integration.lastSync}</p>
              </div>
            </div>
            
            <div className="p-3 bg-dark-200 rounded border border-accent-purple/20">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-accent-purple font-medium">AI Processed:</span>
                  <p className="text-gray-300">{integration.invoicesProcessed.toLocaleString()} invoices</p>
                </div>
                <div>
                  <span className="text-accent-purple font-medium">ML Accuracy:</span>
                  <p className="text-gray-300">{integration.accuracy}%</p>
                </div>
                <div>
                  <span className="text-accent-purple font-medium">Neural Automation:</span>
                  <p className="text-gray-300">{integration.automation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="glass-card p-6 border-l-4 border-l-accent-cyan">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="icon-container-cyber">
              <Brain className="h-6 w-6 text-accent-cyan" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">📄 AI Invoice Management System</h3>
              <p className="text-sm text-gray-400">
                Neural network-powered invoice processing with machine learning anomaly detection and intelligent ERP integration
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="status-success">
              <Activity className="h-3 w-3 mr-1" />
              AI Systems Online
            </span>
            <span className="status-cyber">
              <Zap className="h-3 w-3 mr-1" />
              98.7% Accuracy
            </span>
          </div>
        </div>

        {/* AI Processing Overview */}
        <div className="p-4 bg-dark-200 rounded-lg border border-accent-cyan/20 mb-6">
          <div className="flex items-start space-x-3">
            <Brain className="h-5 w-5 text-accent-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white mb-2">🤖 AI Processing Intelligence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-accent-cyan font-medium">Neural Network Processing:</span>
                  <p className="text-gray-300">Advanced OCR and NLP algorithms extract data with 98.7% accuracy</p>
                </div>
                <div>
                  <span className="text-accent-cyan font-medium">Machine Learning Detection:</span>
                  <p className="text-gray-300">Real-time anomaly detection prevents fraud and duplicate payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Enhanced Tab Navigation */}
      <div className="border-b border-dark-300 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group inline-flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-accent-purple text-accent-purple'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className="text-xs text-gray-500">{tab.description}</div>
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
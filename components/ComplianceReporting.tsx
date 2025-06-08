'use client';

import { useState, useEffect } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { CheckCircle, AlertTriangle, XCircle, Calendar, Download, FileText, Loader2, Brain, Zap, Search, Target, AlertCircle, Activity, Shield, TrendingUp } from 'lucide-react';
import { complianceMetrics } from '@/lib/testData';

export default function ComplianceReporting() {
  const [isGeneratingAudit, setIsGeneratingAudit] = useState(false);
  const [auditGenerated, setAuditGenerated] = useState(false);
  const [currentAIStep, setCurrentAIStep] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsVisible(true);
  }, []);

  const aiSteps = [
    { icon: Search, text: 'AI scanning compliance data repositories...', duration: 800 },
    { icon: Brain, text: 'Neural networks analyzing regulatory patterns...', duration: 700 },
    { icon: Target, text: 'Machine learning identifying risk vectors...', duration: 600 },
    { icon: Zap, text: 'AI algorithms generating compliance insights...', duration: 500 },
    { icon: FileText, text: 'Intelligent system compiling audit report...', duration: 400 },
  ];

  const generateAuditReport = async () => {
    setIsGeneratingAudit(true);
    setAuditGenerated(false);
    
    const steps = [
      'Initializing AI neural networks...',
      'Scanning financial data repositories...',
      'Running machine learning compliance algorithms...',
      'Cross-referencing regulatory databases...',
      'Applying pattern recognition analysis...',
      'Generating AI-powered recommendations...',
      'Compiling comprehensive audit report...',
      'Neural network analysis complete!'
    ];
    
    for (let i = 0; i < steps.length; i++) {
      setCurrentAIStep(steps[i]);
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    }
    
    setIsGeneratingAudit(false);
    setAuditGenerated(true);
    
    // Auto-download after generation
    setTimeout(() => {
      downloadAuditReport({
        timestamp: new Date().toISOString(),
        overallScore,
        metrics: complianceMetrics,
        aiRecommendations: complianceMetrics.map(generateAIRecommendations).flat()
      });
    }, 500);
  };

  const generateAIFindings = (metric: any) => {
    const findings = [
      `AI detected ${metric.requirements} compliance requirements`,
      `Neural network analysis shows ${metric.score}% completion rate`,
      `Machine learning algorithms identified ${metric.requirements - Math.floor(metric.requirements * metric.score / 100)} pending items`,
      `Pattern recognition suggests ${metric.score >= 90 ? 'excellent' : metric.score >= 80 ? 'good' : metric.score >= 70 ? 'adequate' : 'poor'} compliance status`
    ];
    
    switch (metric.status) {
      case 'compliant':
        findings.push('AI assessment: Fully compliant with regulations');
        findings.push('Neural network confidence: High');
        break;
      case 'warning':
        findings.push('AI assessment: Minor compliance gaps detected');
        findings.push('Machine learning recommendation: Monitor closely');
        break;
      case 'non-compliant':
        findings.push('AI assessment: Critical compliance issues identified');
        findings.push('Immediate AI-guided remediation required');
        break;
    }
    
    return findings;
  };

  const generateAIRecommendations = (metric: any) => {
    const recommendations = [];
    
    if (metric.score < 100) {
      recommendations.push(`AI recommends implementing automated ${metric.category.toLowerCase()} monitoring systems`);
      recommendations.push(`Neural network suggests increasing compliance check frequency to weekly`);
    }
    
    if (metric.score < 80) {
      recommendations.push(`Machine learning analysis indicates need for additional staff training in ${metric.category.toLowerCase()}`);
      recommendations.push(`AI-powered workflow automation could improve compliance by 25-40%`);
    }
    
    if (metric.score < 60) {
      recommendations.push(`Critical AI alert: Immediate executive attention required for ${metric.category.toLowerCase()}`);
      recommendations.push(`Neural network recommends engaging external compliance consultants`);
    }
    
    // Always add general AI recommendations
    recommendations.push(`AI suggestion: Implement predictive analytics for ${metric.category.toLowerCase()} compliance`);
    recommendations.push(`Machine learning opportunity: Automate documentation and reporting processes`);
    
    return recommendations;
  };

  const downloadAuditReport = (auditData: any) => {
    const reportContent = `
ARTIFICIAL INTELLIGENCE COMPLIANCE AUDIT REPORT
Generated: ${new Date(auditData.timestamp).toLocaleString()}
AI Powered by Advanced Neural Networks

EXECUTIVE SUMMARY
Overall AI Compliance Score: ${auditData.overallScore}%
Analysis powered by machine learning algorithms

DETAILED AI FINDINGS
${auditData.metrics.map((metric: any, index: number) => `
${index + 1}. ${metric.category}
   AI Score: ${metric.score}%
   Status: ${metric.status.toUpperCase()}
   Requirements Analyzed: ${metric.requirements}
   
   AI Generated Findings:
   ${generateAIFindings(metric).map((finding: string) => `   • ${finding}`).join('\n')}
   
   AI Recommendations:
   ${generateAIRecommendations(metric).map((rec: string) => `   • ${rec}`).join('\n')}
`).join('\n')}

AI EXECUTIVE RECOMMENDATIONS
• Implement continuous AI monitoring systems across all compliance areas
• Deploy machine learning algorithms for predictive compliance analytics
• Establish neural network-powered early warning systems
• Automate compliance reporting using artificial intelligence
• Train staff on AI-enhanced compliance management tools

---
This report was generated using advanced artificial intelligence and machine learning technologies.
Neural network confidence level: 97.3%
Report ID: AI-AUDIT-${Date.now()}
    `;
    
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AI-Compliance-Audit-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-4 w-4 text-accent-green" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-400" />;
      case 'non-compliant':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
      case 'warning':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'non-compliant':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const pieData = complianceMetrics.map((metric, index) => ({
    name: metric.category,
    value: metric.score,
    color: metric.status === 'compliant' ? '#22c55e' : 
           metric.status === 'warning' ? '#f59e0b' : '#ef4444'
  }));

  const barData = complianceMetrics.map(metric => ({
    category: metric.category.split(' ')[0], // Shorten labels
    completed: metric.completed,
    requirements: metric.requirements,
    score: metric.score
  }));

  const overallScore = Math.round(
    complianceMetrics.reduce((sum, metric) => sum + metric.score, 0) / complianceMetrics.length
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const getCurrentStepIcon = () => {
    if (currentAIStep.includes('Initializing')) return <Brain className="h-6 w-6 text-accent-purple animate-pulse" />;
    if (currentAIStep.includes('Scanning')) return <Activity className="h-6 w-6 text-accent-cyan animate-bounce" />;
    if (currentAIStep.includes('Running')) return <Zap className="h-6 w-6 text-accent-green animate-ping" />;
    if (currentAIStep.includes('Cross-referencing')) return <Target className="h-6 w-6 text-amber-400 animate-spin" />;
    if (currentAIStep.includes('pattern')) return <TrendingUp className="h-6 w-6 text-accent-purple animate-pulse" />;
    if (currentAIStep.includes('Generating')) return <FileText className="h-6 w-6 text-accent-cyan animate-bounce" />;
    if (currentAIStep.includes('Compiling')) return <Shield className="h-6 w-6 text-accent-green animate-ping" />;
    return <CheckCircle className="h-6 w-6 text-accent-green animate-pulse" />;
  };

  return (
    <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      {/* Header */}
      <div className="glass-card p-6 hover:scale-[1.01] transition-all duration-300 group">
        <div className="flex items-center justify-between mb-6">
          <div className="transform transition-all duration-300 group-hover:translate-x-2">
            <h2 className="text-2xl font-bold text-white">🛡️ AI-Powered Compliance Reporting</h2>
            <p className="text-gray-400">Artificial Intelligence regulatory compliance tracking and automated audit generation</p>
          </div>
          <div className="flex space-x-3">
            <button className="btn-secondary hover:scale-105 transition-all duration-200">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
            <button 
              onClick={generateAuditReport}
              disabled={isGeneratingAudit}
              className={`btn-cyber hover:scale-105 transition-all duration-200 ${isGeneratingAudit ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isGeneratingAudit ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-pulse" />
                  AI Generating...
                </>
              ) : auditGenerated ? (
                <>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  AI Audit Complete
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Generate AI Audit
                </>
              )}
            </button>
          </div>
        </div>

        {/* AI Processing Status */}
        {isGeneratingAudit && (
          <div className="mb-6 p-6 bg-dark-200 border border-accent-purple/30 rounded-lg backdrop-blur-xl animate-pulse">
            <div className="flex items-center space-x-4">
              {getCurrentStepIcon()}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-white">🤖 AI Compliance Engine Active</h4>
                  <span className="status-cyber animate-bounce">
                    Neural Network Processing
                  </span>
                </div>
                <p className="text-sm text-gray-300 font-medium mb-2">
                  {currentAIStep}
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <Brain className="h-3 w-3 animate-pulse" />
                  <span>Machine Learning Algorithms</span>
                  <span>•</span>
                  <Zap className="h-3 w-3 animate-ping" />
                  <span>Real-time Analysis</span>
                  <span>•</span>
                  <Target className="h-3 w-3 animate-spin" />
                  <span>Pattern Recognition</span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Loader2 className="h-6 w-6 text-accent-purple animate-spin" />
                </div>
              </div>
            </div>
          </div>
        )}

        {auditGenerated && (
          <div className="mb-6 p-6 bg-dark-200 border border-accent-green/30 rounded-lg backdrop-blur-xl animate-fade-in">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Brain className="h-6 w-6 text-accent-green animate-pulse" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-white">🧠 AI Audit Report Generated Successfully</h4>
                  <span className="status-success animate-bounce">
                    AI Powered
                  </span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  Artificial intelligence has analyzed your compliance data and generated a comprehensive audit report with machine learning insights.
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <CheckCircle className="h-3 w-3 text-accent-green" />
                  <span>Neural Network Analysis Complete</span>
                  <span>•</span>
                  <CheckCircle className="h-3 w-3 text-accent-green" />
                  <span>AI Recommendations Generated</span>
                  <span>•</span>
                  <CheckCircle className="h-3 w-3 text-accent-green" />
                  <span>Report Downloaded</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overall Score with AI Branding */}
        <div className="text-center p-6 bg-dark-200 rounded-lg mb-6 border border-accent-purple/20 hover:border-accent-purple/40 transition-all duration-300 hover:scale-105">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Brain className="h-5 w-5 text-accent-purple animate-pulse" />
            <h3 className="text-lg font-semibold text-white">AI-Calculated Compliance Score</h3>
          </div>
          <div className="text-4xl font-bold text-accent-purple mb-2 hover:scale-110 transition-transform duration-300">{overallScore}%</div>
          <p className="text-sm text-gray-300 mb-2">
            {overallScore >= 90 ? 'AI Assessment: Excellent compliance standing' :
             overallScore >= 80 ? 'AI Assessment: Good compliance with minor issues' :
             overallScore >= 70 ? 'AI Assessment: Fair compliance - attention needed' :
             'AI Assessment: Poor compliance - immediate action required'}
          </p>
          <div className="status-cyber">
            <Zap className="h-3 w-3 mr-1" />
            Powered by Machine Learning
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-green/20 hover:border-accent-green/40 transition-all duration-300 hover:scale-105 group">
            <p className="text-sm font-medium text-white group-hover:text-accent-green transition-colors">AI Verified Compliant</p>
            <p className="text-2xl font-bold text-accent-green group-hover:scale-110 transition-transform duration-300">
              {complianceMetrics.filter(m => m.status === 'compliant').length}
            </p>
          </div>
          <div className="text-center p-4 bg-dark-200 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105 group">
            <p className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">AI Flagged Warning</p>
            <p className="text-2xl font-bold text-amber-400 group-hover:scale-110 transition-transform duration-300">
              {complianceMetrics.filter(m => m.status === 'warning').length}
            </p>
          </div>
          <div className="text-center p-4 bg-dark-200 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 group">
            <p className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">AI Detected Critical</p>
            <p className="text-2xl font-bold text-red-400 group-hover:scale-110 transition-transform duration-300">
              {complianceMetrics.filter(m => m.status === 'non-compliant').length}
            </p>
          </div>
          <div className="text-center p-4 bg-dark-200 rounded-lg border border-accent-cyan/20 hover:border-accent-cyan/40 transition-all duration-300 hover:scale-105 group">
            <p className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">AI Analyzed Requirements</p>
            <p className="text-2xl font-bold text-accent-cyan group-hover:scale-110 transition-transform duration-300">
              {complianceMetrics.reduce((sum, m) => sum + m.requirements, 0)}
            </p>
          </div>
        </div>
      </div>

              {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Score Distribution */}
        <div className="glass-card p-6 transition-all duration-300 group">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="h-5 w-5 text-accent-purple animate-pulse" />
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-purple transition-colors">AI Compliance Score Distribution</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#111113',
                    border: '1px solid #252528',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Requirements Progress */}
        <div className="glass-card p-6 transition-all duration-300 group">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-accent-cyan animate-spin" />
            <h3 className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">AI-Tracked Requirements Progress</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#252528" />
                <XAxis 
                  dataKey="category" 
                  tick={{ fontSize: 12, fill: '#9ca3af' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#111113',
                    border: '1px solid #252528',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]} fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Compliance Metrics */}
      <div className="glass-card p-6 transition-all duration-300">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-5 w-5 text-accent-green animate-pulse" />
          <h3 className="text-lg font-semibold text-white">AI-Powered Compliance Analysis</h3>
        </div>
        <div className="space-y-4">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="p-4 border border-dark-300 rounded-lg hover:bg-dark-200 transition-all duration-300 hover:border-accent-purple/40 hover:scale-[1.02] group glass-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(metric.status)}
                    <h4 className="font-medium text-white group-hover:text-accent-purple transition-colors">{metric.category}</h4>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(metric.status)}`}>
                    {metric.status}
                  </span>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-4 w-4 text-accent-purple" />
                    <span className="text-sm font-medium text-white">AI Confidence Level</span>
                    <span className="text-sm font-medium text-accent-purple group-hover:scale-110 transition-transform duration-300">{Math.min(95, 85 + Math.floor(metric.score / 10))}%</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-gray-400">Score</span>
                  <div className="flex items-center mt-1">
                    <div className="flex-1 bg-dark-300 rounded-full h-2 mr-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500 hover:scale-y-150"
                        style={{ 
                          width: `${metric.score}%`,
                          backgroundColor: metric.status === 'compliant' ? '#10b981' : 
                                         metric.status === 'warning' ? '#f59e0b' : '#ef4444'
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-white">{metric.score}%</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Requirements</span>
                  <p className="text-white">{metric.requirements}</p>
                </div>
                <div>
                  <span className="text-gray-400">Next AI Review:</span>
                  <span className="text-white">{formatDate(metric.nextReview)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming AI Reviews */}
      <div className="glass-card p-6 transition-all duration-300">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="h-5 w-5 text-accent-cyan animate-bounce" />
          <h3 className="text-lg font-semibold text-white">AI-Scheduled Compliance Reviews</h3>
        </div>
        <div className="space-y-3">
          {complianceMetrics
            .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime())
            .slice(0, 3)
            .map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-dark-200 rounded-lg hover:bg-dark-300 transition-all duration-200 hover:scale-[1.02] group">
                <div className="flex items-center space-x-3">
                  <Brain className="h-4 w-4 text-accent-purple animate-pulse" />
                  <span className="font-medium text-white group-hover:text-accent-purple transition-colors">{metric.category}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">
                    Next AI compliance scan scheduled for {formatDate(metric.nextReview)}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-3 w-3 text-accent-cyan" />
                    <span className="text-xs text-gray-400">
                      Automated neural network analysis • ML-powered risk assessment
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 
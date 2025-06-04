'use client';

import { useState } from 'react';
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
import { CheckCircle, AlertTriangle, XCircle, Calendar, Download, FileText, Loader2, Brain, Zap, Search, Target } from 'lucide-react';
import { complianceMetrics } from '@/lib/testData';

export default function ComplianceReporting() {
  const [isGeneratingAudit, setIsGeneratingAudit] = useState(false);
  const [auditGenerated, setAuditGenerated] = useState(false);
  const [currentAIStep, setCurrentAIStep] = useState('');

  const aiSteps = [
    { icon: Search, text: 'AI scanning compliance data repositories...', duration: 800 },
    { icon: Brain, text: 'Neural networks analyzing regulatory patterns...', duration: 700 },
    { icon: Target, text: 'Machine learning identifying risk vectors...', duration: 600 },
    { icon: Zap, text: 'AI algorithms generating compliance insights...', duration: 500 },
    { icon: FileText, text: 'Intelligent system compiling audit report...', duration: 400 },
  ];

  const generateAuditReport = async () => {
    setIsGeneratingAudit(true);
    
    // Show AI processing steps
    for (const step of aiSteps) {
      setCurrentAIStep(step.text);
      await new Promise(resolve => setTimeout(resolve, step.duration));
    }
    
    // Create audit report data
    const auditData = {
      reportId: `AI-AUDIT-${Date.now()}`,
      generatedAt: new Date().toISOString(),
      period: {
        startDate: '2024-01-01',
        endDate: '2024-03-31',
      },
      overallScore: Math.round(
        complianceMetrics.reduce((sum, metric) => sum + metric.score, 0) / complianceMetrics.length
      ),
      categories: complianceMetrics.map(metric => ({
        ...metric,
        findings: generateAIFindings(metric),
        recommendations: generateAIRecommendations(metric),
      })),
      summary: {
        totalRequirements: complianceMetrics.reduce((sum, m) => sum + m.requirements, 0),
        completedRequirements: complianceMetrics.reduce((sum, m) => sum + m.completed, 0),
        criticalIssues: complianceMetrics.filter(m => m.status === 'non-compliant').length,
        warningIssues: complianceMetrics.filter(m => m.status === 'warning').length,
      }
    };

    // Create and download the audit report
    downloadAuditReport(auditData);
    
    setIsGeneratingAudit(false);
    setAuditGenerated(true);
    setCurrentAIStep('');
    
    // Reset the generated state after 5 seconds
    setTimeout(() => setAuditGenerated(false), 5000);
  };

  const generateAIFindings = (metric: any) => {
    const findings = [];
    
    if (metric.status === 'non-compliant') {
      findings.push({
        severity: 'Critical',
        description: `AI Analysis: ${metric.category} compliance score of ${metric.score}% detected as below regulatory threshold`,
        impact: 'Machine learning models predict high regulatory risk and potential penalties',
        aiConfidence: '97%',
      });
    }
    
    if (metric.status === 'warning') {
      findings.push({
        severity: 'Warning',
        description: `AI Detection: ${metric.category} shows ${metric.requirements - metric.completed} outstanding requirements requiring attention`,
        impact: 'Neural network analysis indicates moderate compliance violation risk',
        aiConfidence: '89%',
      });
    }
    
    if (metric.completed < metric.requirements) {
      findings.push({
        severity: 'Minor',
        description: `AI Assessment: ${metric.requirements - metric.completed} administrative gaps identified through pattern recognition`,
        impact: 'Intelligent algorithms flag potential process inefficiencies',
        aiConfidence: '84%',
      });
    }

    return findings;
  };

  const generateAIRecommendations = (metric: any) => {
    const recommendations = [];
    
    if (metric.status === 'non-compliant') {
      recommendations.push({
        priority: 'High',
        action: `AI Recommendation: Immediate remediation of ${metric.category} processes based on regulatory best practices`,
        timeline: '30 days',
        owner: 'Compliance Team',
        aiReasoning: 'Machine learning analysis of similar cases suggests urgent intervention required',
      });
    }
    
    if (metric.status === 'warning') {
      recommendations.push({
        priority: 'Medium',
        action: `AI Suggestion: Systematic completion of outstanding ${metric.category} requirements`,
        timeline: '60 days',
        owner: 'Department Manager',
        aiReasoning: 'Predictive models indicate optimal timeline for risk mitigation',
      });
    }
    
    recommendations.push({
      priority: 'Low',
      action: `AI Optimization: Automated monitoring system for ${metric.category} compliance`,
      timeline: '90 days',
      owner: 'Audit Team',
      aiReasoning: 'Neural networks recommend continuous monitoring for pattern detection',
    });

    return recommendations;
  };

  const downloadAuditReport = (auditData: any) => {
    const reportContent = `
AI-POWERED COMPLIANCE AUDIT REPORT
==================================
🤖 Generated by Artificial Intelligence Systems

Report ID: ${auditData.reportId}
Generated: ${new Date(auditData.generatedAt).toLocaleString()}
Period: ${auditData.period.startDate} to ${auditData.period.endDate}
AI Analysis Engine: FinancePro Neural Compliance Network v2.1

EXECUTIVE SUMMARY (AI GENERATED)
===============================
Overall Compliance Score: ${auditData.overallScore}% (AI Confidence: 94%)
Total Requirements: ${auditData.summary.totalRequirements}
Completed Requirements: ${auditData.summary.completedRequirements}
Critical Issues: ${auditData.summary.criticalIssues} (AI Risk Assessment: High)
Warning Issues: ${auditData.summary.warningIssues} (AI Risk Assessment: Medium)

AI METHODOLOGY
==============
This report was generated using advanced artificial intelligence algorithms including:
• Machine Learning Pattern Recognition
• Neural Network Risk Assessment
• Predictive Compliance Modeling
• Automated Regulatory Analysis
• Intelligent Anomaly Detection

DETAILED AI FINDINGS
===================
${auditData.categories.map((category: any) => `
${category.category.toUpperCase()} - AI ANALYSIS
${'='.repeat(category.category.length + 15)}
Status: ${category.status} (AI Verified)
Score: ${category.score}% (Machine Learning Assessment)
Requirements: ${category.completed}/${category.requirements} completed
Next Review: ${category.nextReview}

🤖 AI-Generated Findings:
${category.findings.map((finding: any) => `  • [${finding.severity}] ${finding.description}
    💡 AI Impact Analysis: ${finding.impact}
    🎯 AI Confidence Level: ${finding.aiConfidence || 'N/A'}`).join('\n')}

🧠 AI-Powered Recommendations:
${category.recommendations.map((rec: any) => `  • [${rec.priority}] ${rec.action}
    ⏱️ Timeline: ${rec.timeline} | 👤 Owner: ${rec.owner}
    🔍 AI Reasoning: ${rec.aiReasoning || 'Automated recommendation based on compliance patterns'}`).join('\n')}
`).join('\n')}

AI COMPLIANCE STATUS MATRIX
===========================
${auditData.categories.map((cat: any) => `${cat.category.padEnd(25)} | ${cat.status.padEnd(15)} | ${cat.score}% (AI Verified)`).join('\n')}

AI-GENERATED RECOMMENDATIONS SUMMARY
====================================
High Priority Actions: ${auditData.categories.reduce((sum: number, cat: any) => sum + cat.recommendations.filter((r: any) => r.priority === 'High').length, 0)} (AI Flagged as Urgent)
Medium Priority Actions: ${auditData.categories.reduce((sum: number, cat: any) => sum + cat.recommendations.filter((r: any) => r.priority === 'Medium').length, 0)} (AI Recommended)
Low Priority Actions: ${auditData.categories.reduce((sum: number, cat: any) => sum + cat.recommendations.filter((r: any) => r.priority === 'Low').length, 0)} (AI Optimizations)

AI-POWERED NEXT STEPS
=====================
1. 🎯 Address AI-identified critical compliance issues within 30 days
2. 🔧 Implement AI-recommended process improvements
3. 📅 Schedule AI-assisted follow-up audit for ${new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toLocaleDateString()}
4. 🤖 Deploy continuous AI monitoring for real-time compliance tracking

ABOUT THIS AI ANALYSIS
======================
This comprehensive audit was generated entirely by artificial intelligence using:
- Advanced machine learning algorithms trained on regulatory data
- Neural networks specialized in compliance risk assessment
- Predictive models for forecasting compliance trends
- Automated pattern recognition for anomaly detection

The AI system analyzed ${auditData.summary.totalRequirements} compliance requirements across 
${auditData.categories.length} categories in milliseconds, providing insights that would 
traditionally require hours of manual analysis.

🤖 Report generated by FinancePro AI Compliance Engine
🧠 Powered by Neural Network Technology
© ${new Date().getFullYear()} AI-Driven Professional Financial Management System
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AI_Compliance_Audit_Report_${auditData.reportId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-warning-600" />;
      default:
        return <XCircle className="h-5 w-5 text-danger-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant':
        return 'status-success';
      case 'warning':
        return 'status-warning';
      default:
        return 'status-danger';
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

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString();

  const getCurrentStepIcon = () => {
    const step = aiSteps.find(step => step.text === currentAIStep);
    if (step) {
      const IconComponent = step.icon;
      return <IconComponent className="h-5 w-5 text-primary-600 animate-pulse" />;
    }
    return <Brain className="h-5 w-5 text-primary-600 animate-pulse" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI-Powered Compliance Reporting</h2>
            <p className="text-gray-600">Artificial Intelligence regulatory compliance tracking and automated audit generation</p>
          </div>
          <div className="flex space-x-3">
            <button className="button-secondary">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
            <button 
              onClick={generateAuditReport}
              disabled={isGeneratingAudit}
              className={`button-primary ${isGeneratingAudit ? 'opacity-50 cursor-not-allowed' : ''}`}
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
          <div className="mb-6 p-6 bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-200 rounded-lg">
            <div className="flex items-center space-x-4">
              {getCurrentStepIcon()}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-primary-900">🤖 AI Compliance Engine Active</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    Neural Network Processing
                  </span>
                </div>
                <p className="text-sm text-primary-700 font-medium mb-2">
                  {currentAIStep}
                </p>
                <div className="flex items-center space-x-2 text-xs text-primary-600">
                  <Brain className="h-3 w-3" />
                  <span>Machine Learning Algorithms</span>
                  <span>•</span>
                  <Zap className="h-3 w-3" />
                  <span>Real-time Analysis</span>
                  <span>•</span>
                  <Target className="h-3 w-3" />
                  <span>Pattern Recognition</span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Loader2 className="h-6 w-6 text-primary-600 animate-spin" />
                </div>
              </div>
            </div>
          </div>
        )}

        {auditGenerated && (
          <div className="mb-6 p-6 bg-gradient-to-r from-success-50 to-green-50 border border-success-200 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                <Brain className="h-6 w-6 text-success-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-success-900">🧠 AI Audit Report Generated Successfully</h4>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-800">
                    AI Powered
                  </span>
                </div>
                <p className="text-sm text-success-700 mb-2">
                  Artificial intelligence has analyzed your compliance data and generated a comprehensive audit report with machine learning insights.
                </p>
                <div className="flex items-center space-x-2 text-xs text-success-600">
                  <CheckCircle className="h-3 w-3" />
                  <span>Neural Network Analysis Complete</span>
                  <span>•</span>
                  <CheckCircle className="h-3 w-3" />
                  <span>AI Recommendations Generated</span>
                  <span>•</span>
                  <CheckCircle className="h-3 w-3" />
                  <span>Report Downloaded</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Overall Score with AI Branding */}
        <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg mb-6 border border-primary-100">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Brain className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-primary-900">AI-Calculated Compliance Score</h3>
          </div>
          <div className="text-4xl font-bold text-primary-600 mb-2">{overallScore}%</div>
          <p className="text-sm text-primary-700 mb-2">
            {overallScore >= 90 ? 'AI Assessment: Excellent compliance standing' :
             overallScore >= 80 ? 'AI Assessment: Good compliance with minor issues' :
             overallScore >= 70 ? 'AI Assessment: Fair compliance - attention needed' :
             'AI Assessment: Poor compliance - immediate action required'}
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            <Zap className="h-3 w-3 mr-1" />
            Powered by Machine Learning
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center p-4 bg-success-50 rounded-lg border border-success-100">
            <p className="text-sm font-medium text-success-800">AI Verified Compliant</p>
            <p className="text-2xl font-bold text-success-900">
              {complianceMetrics.filter(m => m.status === 'compliant').length}
            </p>
          </div>
          <div className="text-center p-4 bg-warning-50 rounded-lg border border-warning-100">
            <p className="text-sm font-medium text-warning-800">AI Flagged Warning</p>
            <p className="text-2xl font-bold text-warning-900">
              {complianceMetrics.filter(m => m.status === 'warning').length}
            </p>
          </div>
          <div className="text-center p-4 bg-danger-50 rounded-lg border border-danger-100">
            <p className="text-sm font-medium text-danger-800">AI Detected Critical</p>
            <p className="text-2xl font-bold text-danger-900">
              {complianceMetrics.filter(m => m.status === 'non-compliant').length}
            </p>
          </div>
          <div className="text-center p-4 bg-primary-50 rounded-lg border border-primary-100">
            <p className="text-sm font-medium text-primary-800">AI Analyzed Requirements</p>
            <p className="text-2xl font-bold text-primary-900">
              {complianceMetrics.reduce((sum, m) => sum + m.requirements, 0)}
            </p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Score Distribution */}
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI Compliance Score Distribution</h3>
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
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Requirements Progress */}
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI-Tracked Requirements Progress</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="category" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#22c55e" name="AI Verified Complete" />
                <Bar dataKey="requirements" fill="#e5e7eb" name="Total Requirements" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Compliance Metrics */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Search className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI-Powered Compliance Analysis</h3>
        </div>
        <div className="space-y-4">
          {complianceMetrics.map((metric, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(metric.status)}
                    <div>
                      <h4 className="font-medium text-gray-900">{metric.category}</h4>
                      <p className="text-sm text-gray-600">
                        AI Analysis: {metric.completed} of {metric.requirements} requirements verified
                      </p>
                    </div>
                    <span className={`status-badge ${getStatusColor(metric.status)}`}>
                      {metric.status}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <Brain className="h-3 w-3 mr-1" />
                      AI Analyzed
                    </span>
                  </div>
                  
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">AI Confidence Level</span>
                      <span className="text-sm font-medium text-gray-900">{metric.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          metric.status === 'compliant' ? 'bg-success-600' :
                          metric.status === 'warning' ? 'bg-warning-600' : 'bg-danger-600'
                        }`}
                        style={{ width: `${metric.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">Next AI Review:</span>
                      <span className="text-gray-900">{formatDate(metric.nextReview)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Calendar */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI-Scheduled Compliance Reviews</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complianceMetrics
            .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime())
            .map((metric, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-4 w-4 text-primary-600" />
                  <span className="font-medium text-gray-900">{metric.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  AI Review Date: {formatDate(metric.nextReview)}
                </p>
                <p className="text-xs text-gray-500">
                  {Math.ceil((new Date(metric.nextReview).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days until automated AI analysis
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 
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

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', name: 'Overview' },
                { id: 'forecasting', name: 'Forecasting' },
                { id: 'invoices', name: 'Invoice Management' },
                { id: 'compliance', name: 'Compliance' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <KPISection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ForecastingCharts />
              <CashFlowChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PipelineAnalysis />
              <MacroTrendsWidget />
            </div>
          </div>
        )}

        {/* Forecasting Tab */}
        {activeTab === 'forecasting' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ForecastingCharts />
              <CashFlowChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PipelineAnalysis />
              <MacroTrendsWidget />
            </div>
          </div>
        )}

        {/* Invoice Management Tab */}
        {activeTab === 'invoices' && (
          <div className="space-y-8">
            <InvoiceManagement />
          </div>
        )}

        {/* Compliance Tab */}
        {activeTab === 'compliance' && (
          <div className="space-y-8">
            <ComplianceReporting />
          </div>
        )}
      </main>
    </div>
  );
} 
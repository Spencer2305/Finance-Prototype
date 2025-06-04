export interface RevenueData {
  month: string;
  actual: number;
  predicted: number;
  recurring: number;
  pipeline: number;
}

export interface ExpenseData {
  month: string;
  actual: number;
  predicted: number;
  recurring: number;
  variable: number;
}

export interface PipelineDeal {
  id: string;
  client: string;
  value: number;
  probability: number;
  stage: string;
  expectedClose: string;
  source: string;
}

export interface MacroTrend {
  type: 'inflation' | 'fx' | 'seasonal';
  factor: string;
  impact: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface OverdueInvoice {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  daysPastDue: number;
  status: 'overdue' | 'critical' | 'legal';
}

export interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  vendor: string;
  date: string;
  amount: number;
  glCode: string;
  category: string;
  description: string;
  status: 'processed' | 'flagged' | 'pending';
  anomalies: string[];
}

export interface ComplianceMetric {
  category: string;
  status: 'compliant' | 'warning' | 'non-compliant';
  score: number;
  requirements: number;
  completed: number;
  nextReview: string;
}

export interface KPI {
  label: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  target?: string;
}

export interface CashFlowData {
  month: string;
  inflow: number;
  outflow: number;
  net: number;
  balance: number;
} 
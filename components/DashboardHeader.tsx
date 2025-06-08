'use client';

import { useState } from 'react';
import { Bell, Settings, User, Brain, Zap, Activity, X, Cpu, Shield } from 'lucide-react';

export default function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'AI Compliance Audit Complete',
      message: 'Neural network analysis identified 2 medium-priority items',
      time: '5 minutes ago',
      type: 'info'
    },
    {
      id: 2,
      title: 'Invoice Anomaly Detected', 
      message: 'ML algorithms flagged duplicate invoice INV-003',
      time: '1 hour ago',
      type: 'warning'
    },
    {
      id: 3,
      title: 'Pipeline Update',
      message: 'AI predicts TechCorp deal will close 3 days early',
      time: '2 hours ago',
      type: 'success'
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return '⚠️';
      case 'success':
        return '✅';
      default:
        return '🤖';
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowSettings(false);
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    setShowNotifications(false);
  };

  const closeDropdowns = () => {
    setShowNotifications(false);
    setShowSettings(false);
  };

  return (
    <header className="relative header-card border-0 border-b border-dark-300 overflow-visible">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex justify-between items-center py-6 overflow-visible">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="icon-container">
              <Brain className="h-7 w-7 text-accent-purple animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-white font-orbitron hover:text-accent-purple transition-colors duration-300 cursor-pointer">AI FinancePro</h1>
                <div className="status-cyber animate-float">
                  <Zap className="h-4 w-4 mr-1 animate-ping" />
                  Neural Engine
                </div>
              </div>
              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
                Quantum Financial Intelligence • Real-time Processing
              </p>
            </div>
          </div>

          {/* AI Status Center */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="glass-card p-4 border border-dark-300">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="icon-container-cyan">
                    <Cpu className="h-4 w-4 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Neural Core</p>
                    <p className="text-xs text-gray-400">98.7% Efficiency</p>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-dark-300"></div>
                
                <div className="flex items-center space-x-2">
                  <div className="icon-container-green">
                    <Activity className="h-4 w-4 text-accent-green" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Live Analysis</p>
                    <p className="text-xs text-gray-400">2.1ms Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Center */}
          <div className="flex items-center space-x-3 overflow-visible">
            {/* AI Notifications */}
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="relative p-3 rounded-lg bg-dark-200 border border-dark-300 hover:bg-dark-300 transition-all duration-200"
              >
                <Bell className="h-5 w-5 text-gray-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-purple rounded-full animate-pulse"></div>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 glass-card border border-dark-300 shadow-floating z-[9999]">
                  <div className="p-4 border-b border-dark-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">🤖 AI Alerts</h3>
                      <button onClick={closeDropdowns} className="p-1 hover:bg-dark-300 rounded transition-colors">
                        <X className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-dark-300 hover:bg-dark-200 transition-colors">
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                            <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1 flex items-center">
                              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mr-2"></span>
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-dark-200 text-center">
                    <button className="btn-cyber text-sm py-2">
                      View All Notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Settings */}
            <div className="relative">
              <button 
                onClick={toggleSettings}
                className="p-3 rounded-lg bg-dark-200 border border-dark-300 hover:bg-dark-300 transition-all duration-200"
              >
                <Settings className="h-5 w-5 text-gray-300" />
              </button>

              {/* Settings Dropdown */}
              {showSettings && (
                <div className="absolute right-0 mt-3 w-72 glass-card border border-dark-300 shadow-floating z-[9999]">
                  <div className="p-4 border-b border-dark-300">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">⚙️ Settings</h3>
                      <button onClick={closeDropdowns} className="p-1 hover:bg-dark-300 rounded transition-colors">
                        <X className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-dark-200 transition-colors flex items-center space-x-3">
                      <Brain className="h-4 w-4 text-accent-purple" />
                      <div>
                        <p className="font-medium">AI Model Configuration</p>
                        <p className="text-xs text-gray-500">Neural network parameters</p>
                      </div>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-dark-200 transition-colors flex items-center space-x-3">
                      <Shield className="h-4 w-4 text-accent-green" />
                      <div>
                        <p className="font-medium">Security Protocols</p>
                        <p className="text-xs text-gray-500">Encryption settings</p>
                      </div>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-dark-200 transition-colors flex items-center space-x-3">
                      <Activity className="h-4 w-4 text-accent-cyan" />
                      <div>
                        <p className="font-medium">Analytics Engine</p>
                        <p className="text-xs text-gray-500">Processing settings</p>
                      </div>
                    </button>
                    <button className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-dark-200 transition-colors flex items-center space-x-3">
                      <User className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="font-medium">User Preferences</p>
                        <p className="text-xs text-gray-500">Interface settings</p>
                      </div>
                    </button>
                  </div>
                  <div className="p-3 bg-dark-200 border-t border-dark-300">
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex justify-between">
                        <span>Engine:</span>
                        <span className="text-accent-purple">v3.2.1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Uptime:</span>
                        <span className="text-accent-green">847h 23m</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-white">Quantum Analyst</p>
                <p className="text-xs text-gray-400 flex items-center justify-end">
                  <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse"></span>
                  Neural link active
                </p>
              </div>
              <div className="relative">
                <div className="p-3 rounded-lg bg-dark-200 border border-dark-300">
                  <User className="h-5 w-5 text-gray-300" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-green rounded-full border-2 border-dark-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 
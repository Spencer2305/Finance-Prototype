'use client';

import { useState } from 'react';
import { Bell, Settings, User, Brain, Zap, Activity, X } from 'lucide-react';

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
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">AI FinancePro</h1>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  <Zap className="h-3 w-3 mr-1" />
                  AI Powered
                </span>
              </div>
              <p className="text-sm text-gray-500">Intelligent Financial Management • Neural Network Analytics</p>
            </div>
          </div>

          {/* AI Status Indicator */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-800">AI Engine Active</span>
                </div>
                <div className="h-4 w-px bg-green-300"></div>
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-green-700">Real-time Analysis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* AI Notifications */}
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">AI Notifications</h3>
                      <button onClick={closeDropdowns} className="p-1 hover:bg-gray-100 rounded">
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="flex items-start space-x-3">
                          <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-gray-50 text-center">
                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
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
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Settings className="h-5 w-5" />
              </button>

              {/* Settings Dropdown */}
              {showSettings && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                      <button onClick={closeDropdowns} className="p-1 hover:bg-gray-100 rounded">
                        <X className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-purple-600" />
                      <span>AI Model Settings</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Bell className="h-4 w-4 text-gray-600" />
                      <span>Notification Preferences</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-gray-600" />
                      <span>Dashboard Layout</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                      <Settings className="h-4 w-4 text-gray-600" />
                      <span>Account Settings</span>
                    </button>
                  </div>
                  <div className="p-3 bg-gray-50 border-t border-gray-200">
                    <div className="text-xs text-gray-500">
                      AI Engine: v2.1 • Neural Network: Active
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile with AI Context */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">AI Finance Director</p>
                <p className="text-sm text-gray-500">Neural insights active</p>
              </div>
              <div className="relative">
                <div className="p-2 bg-gradient-to-r from-gray-100 to-purple-100 rounded-full border border-purple-200">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showNotifications || showSettings) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdowns}
        ></div>
      )}
    </header>
  );
} 
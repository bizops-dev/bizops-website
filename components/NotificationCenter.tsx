
import React, { useState, useEffect, useRef } from 'react';
import { Bell, Settings, Radio, Calendar, FileText, Info, Check } from 'lucide-react';
import Button from './Button';

interface Notification {
  id: string;
  title: string;
  desc: string;
  time: string;
  type: 'info' | 'blog' | 'event' | 'system';
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Roadmap Item',
    desc: 'AI Forecasting feature is now in Beta. Try it in the sandbox.',
    time: '2 hours ago',
    type: 'info',
    read: false,
  },
  {
    id: '2',
    title: 'Webinar Invitation',
    desc: 'Join us for "Tax Efficiency 2024" tomorrow at 10 AM.',
    time: '5 hours ago',
    type: 'event',
    read: false,
  },
  {
    id: '3',
    title: 'System Maintenance',
    desc: 'Scheduled maintenance on Sunday, 02:00 - 04:00 WIB.',
    time: '1 day ago',
    type: 'system',
    read: true,
  },
  {
    id: '4',
    title: 'New Blog Post',
    desc: 'Read about the new PPh 21 TER calculation method.',
    time: '2 days ago',
    type: 'blog',
    read: true,
  }
];

const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [pushEnabled, setPushEnabled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    // Check browser permission status
    if ('Notification' in window && Notification.permission === 'granted') {
      setPushEnabled(true);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleEnablePush = async () => {
    if (!('Notification' in window)) {
      alert("This browser does not support desktop notifications");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      setPushEnabled(true);
      new Notification('BizOps Notifications Enabled', {
        body: 'You will now receive updates about system status and events.',
        icon: '/vite.svg' // Fallback icon
      });
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'event': return <Calendar className="w-4 h-4 text-purple-500" />;
      case 'blog': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'system': return <Settings className="w-4 h-4 text-slate-500" />;
      default: return <Info className="w-4 h-4 text-primary-500" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-950 animate-pulse"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 animate-fade-in-up transform origin-top-right">
          
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Notifications</h3>
            {unreadCount > 0 && (
              <button onClick={markAllRead} className="text-xs text-primary-600 hover:text-primary-700 font-medium">
                Mark all read
              </button>
            )}
          </div>

          {!pushEnabled && (
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <Radio className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="flex-grow">
                  <p className="text-xs text-blue-800 dark:text-blue-300 font-medium mb-1">Enable Push Notifications</p>
                  <p className="text-[10px] text-blue-600 dark:text-blue-400 mb-2">Get real-time updates on system status & roadmap.</p>
                  <Button size="sm" onClick={handleEnablePush} className="py-1 h-7 text-xs">Allow Access</Button>
                </div>
              </div>
            </div>
          )}

          <div className="max-h-[300px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">
                No notifications yet.
              </div>
            ) : (
              notifications.map((n) => (
                <div 
                  key={n.id} 
                  onClick={() => markAsRead(n.id)}
                  className={`p-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors flex gap-3 ${!n.read ? 'bg-primary-50/30 dark:bg-primary-900/10' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-700 shadow-sm`}>
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className={`text-sm font-medium ${!n.read ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-300'}`}>
                        {n.title}
                      </h4>
                      {!n.read && <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5"></div>}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mb-1 line-clamp-2">
                      {n.desc}
                    </p>
                    <span className="text-[10px] text-slate-400 block">{n.time}</span>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-center bg-slate-50 dark:bg-slate-800/50">
            <a href="#" className="text-xs font-bold text-slate-500 hover:text-primary-600 transition-colors">View Archive</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;

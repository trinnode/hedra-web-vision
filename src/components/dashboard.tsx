import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Key, 
  DollarSign,
  Activity,
  Users
} from 'lucide-react';

export const Dashboard: React.FC = () => {

  const summaryStats = [
    { title: 'My Access Tokens', value: '3', icon: Key, color: 'text-secondary' },
    { title: 'My Consents', value: '5', icon: Users, color: 'text-primary' },
    { title: 'Pending Bills', value: '2', amount: '$150', icon: DollarSign, color: 'text-warning' },
    { title: 'Recent Activity', value: '3 transactions', icon: Activity, color: 'text-muted-foreground' },
  ];

  const recentActivity = [
    { title: 'Dr. Evelyn Reed', subtitle: 'Access Granted', time: '1h ago', status: 'active' },
    { title: 'New Consent Added', subtitle: 'Cardiology Report', time: '3h ago', status: 'pending' },
    { title: 'Bill Paid', subtitle: 'General Checkup - $75.00', time: 'Yesterday', status: 'success' },
  ];

  const medicalRecords = [
    { 
      tokenId: '1234567890', 
      user: 'Dr. Emily Carter', 
      role: 'Physician',
      expiry: '2024-12-31',
      status: 'active' 
    },
    { 
      tokenId: '9876543210', 
      user: 'Nurse David Lee', 
      role: 'Nurse',
      expiry: '2024-06-30',
      status: 'expired' 
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your decentralized health dashboard</p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {summaryStats.map((stat, index) => (
          <Card key={stat.title} className="medical-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              {stat.amount && (
                <div className="text-sm text-muted-foreground">{stat.amount}</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <span>Recent Activity</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-border last:border-0 gap-2 sm:gap-0">
              <div>
                <div className="font-medium text-foreground">{activity.title}</div>
                <div className="text-sm text-muted-foreground">{activity.subtitle}</div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-end">
                <div className="text-sm text-muted-foreground">{activity.time}</div>
                <Badge 
                  className={`mt-0 sm:mt-1 ${
                    activity.status === 'active' ? 'status-active' :
                    activity.status === 'success' ? 'status-active' : 
                    'status-pending'
                  }`}
                >
                  {activity.status}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
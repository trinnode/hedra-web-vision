import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { 
  ArrowLeft,
  Zap,
  Plus,
  MoreHorizontal,
  DollarSign
} from 'lucide-react';

export default function AutomatedPayments() {
  const [automations] = useState([
    {
      id: '1',
      name: 'Pre-authorize Payments',
      provider: 'Dr. Anya Sharma',
      amount: '$200.00',
      enabled: true
    },
    {
      id: '2', 
      name: 'Recurring Payments',
      provider: 'Up to $200 per month',
      amount: '$50.00',
      enabled: false
    },
    {
      id: '3',
      name: 'Automated Payments',
      provider: 'For all small amounts',
      amount: '$25.00',
      enabled: true
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payment Automations</h1>
          <p className="text-muted-foreground">Manage your automated payment settings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Existing Automations */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Existing Automations</span>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add New Automation
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {automations.map((automation) => (
              <div key={automation.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      <Zap className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{automation.name}</div>
                    <div className="text-sm text-muted-foreground">{automation.provider}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-medium text-foreground">{automation.amount}</div>
                  </div>
                  <Switch checked={automation.enabled} />
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Total Summary */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Total Automated Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">$275.00</div>
              <p className="text-sm text-muted-foreground">
                Total amount authorized monthly
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Active Automations</span>
                <Badge className="status-active">
                  {automations.filter(a => a.enabled).length} of {automations.length}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Next Payment</span>
                <span className="text-sm text-foreground">March 25, 2024</span>
              </div>
              
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Payment Method</span>
                <span className="text-sm text-foreground">**** 4242</span>
              </div>
            </div>

            <Button className="w-full bg-secondary hover:bg-secondary/90">
              <Plus className="h-4 w-4 mr-2" />
              Add New Automation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ArrowLeft, 
  DollarSign, 
  Search, 
  Eye, 
  MoreHorizontal,
  Receipt
} from 'lucide-react';

export default function HealthcareBilling() {
  const [bills] = useState([
    {
      id: '12345',
      date: '2024-03-15',
      provider: 'Dr. Smith',
      amount: 150.00,
      status: 'Outstanding'
    },
    {
      id: '67890',
      date: '2024-03-10', 
      provider: 'City Hospital',
      amount: 200.00,
      status: 'Paid'
    },
    {
      id: '11223',
      date: '2024-03-05',
      provider: 'Wellness Clinic',
      amount: 75.00,
      status: 'Outstanding'
    }
  ]);

  const [showLogBill, setShowLogBill] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Healthcare Billing</h1>
          <p className="text-muted-foreground">Manage your healthcare bills and payments</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Log New Bill */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-primary" />
              Log New Bill
            </CardTitle>
            <CardDescription>
              Record a new healthcare bill for tracking and payment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Provider/Code</label>
              <Input placeholder="Enter provider name or code" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground">Amount</label>
              <Input placeholder="Enter bill amount" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground">Associated Record Hash</label>
              <Input placeholder="Enter record hash" className="mt-1" />
            </div>
            
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              Log Bill
            </Button>
          </CardContent>
        </Card>

        {/* View All Bills */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>View All Bills</span>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by Code or Hash" className="pl-10" />
            </div>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {bills.map((bill) => (
                <div key={bill.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium text-foreground">Bill ID: {bill.id}</div>
                    <div className="text-sm text-muted-foreground">
                      Date: {bill.date} • Provider: {bill.provider}
                    </div>
                    <div className="text-sm font-medium">${bill.amount}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={bill.status === 'Paid' ? 'status-active' : 'status-pending'}>
                      {bill.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Billing Summary */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle>My Outstanding Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bills.filter(bill => bill.status === 'Outstanding').map((bill) => (
              <div key={bill.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg gap-4">
                <div className="space-y-2">
                  <div className="font-medium text-foreground">Bill #: {bill.id}</div>
                  <div className="text-sm text-muted-foreground">
                    {bill.provider} • {bill.date}
                  </div>
                  <Badge className="status-pending">
                    {bill.status}
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <div className="text-2xl font-bold text-foreground">${bill.amount}</div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 flex-1 sm:flex-none">
                      Pay Bill
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
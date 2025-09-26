import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft,
  Wallet,
  CreditCard,
  Banknote,
  Bitcoin
} from 'lucide-react';

export default function TopupWallet() {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [amount, setAmount] = useState('');

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'bank-transfer',
      name: 'Bank Transfer',
      icon: Banknote,
      description: 'Direct transfer from your bank account'
    },
    {
      id: 'crypto-transfer',
      name: 'Crypto Transfer',
      icon: Bitcoin,
      description: 'HBAR, Bitcoin, Ethereum and other cryptocurrencies'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Top Up Wallet</h1>
          <p className="text-muted-foreground">Add funds to your healthcare wallet</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Current Balance */}
        <Card className="medical-card text-center">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Current Balance</div>
              <div className="text-4xl font-bold text-primary">$125.50</div>
            </div>
          </CardContent>
        </Card>

        {/* Top Up Form */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Add Funds
            </CardTitle>
            <CardDescription>
              Choose your preferred payment method and amount
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Selection */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">Amount to Top Up</label>
              <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-lg"
              />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['$25', '$50', '$100', '$200'].map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset.slice(1) ? 'default' : 'outline'}
                    onClick={() => setAmount(preset.slice(1))}
                    size="sm"
                  >
                    {preset}
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">Payment Method</label>
              <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={method.id} id={method.id} />
                      <method.icon className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <Label htmlFor={method.id} className="font-medium text-foreground cursor-pointer">
                          {method.name}
                        </Label>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment Details */}
            {selectedMethod === 'credit-card' && (
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <Input placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="MM/YY" />
                  <Input placeholder="CVV" />
                </div>
                <Input placeholder="Cardholder Name" />
              </div>
            )}

            {selectedMethod === 'crypto-transfer' && (
              <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground">
                  <p><strong>Crypto Address:</strong></p>
                  <Input 
                    readOnly 
                    value="0x1234567890abcdef1234567890abcdef12345678" 
                    className="mt-2 font-mono text-xs"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Send your cryptocurrency to the address above. Transactions typically complete in 10-30 minutes.
                </p>
              </div>
            )}

            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              Proceed to Top-Up
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Upload, 
  User, 
  Camera,
  FileText,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function ProviderDashboard() {
  const [patients] = useState([
    {
      id: 'P001',
      name: 'Ethan Carter',
      status: 'Request Update',
      lastUpdate: '2 days ago'
    },
    {
      id: 'P002', 
      name: 'Olivia Bennett',
      status: 'Request Update',
      lastUpdate: '1 week ago'
    }
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Provider Dashboard</h1>
        <p className="text-muted-foreground">Upload and manage patient data securely</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload User Data */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload User Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Patient ID</label>
              <Input placeholder="Enter Patient ID" className="mt-1" />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground">Data Type</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Data Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical-record">Medical Record</SelectItem>
                  <SelectItem value="lab-results">Lab Results</SelectItem>
                  <SelectItem value="imaging">Medical Imaging</SelectItem>
                  <SelectItem value="prescription">Prescription</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Upload className="h-4 w-4 mr-2" />
              Upload Data
            </Button>
          </CardContent>
        </Card>

        {/* My Profile */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>
                    <User className="h-10 w-10" />
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90"
                >
                  <Camera className="h-4 w-4 mr-1" />
                  Upload Profile Image
                </Button>
              </div>
              
              <div className="w-full space-y-3">
                <div>
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input defaultValue="Dr. Evelyn Reed" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Organization</label>
                  <Input defaultValue="HealthCare AI Clinic" className="mt-1" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground">Address</label>
                  <Input defaultValue="123 Health St, MediCity" className="mt-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Uploaded Patient Data */}
      <Card className="medical-card">
        <CardHeader>
          <CardTitle>Uploaded Patient Data</CardTitle>
          <CardDescription>Recent patient data uploads and status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {patients.map((patient) => (
              <div key={patient.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{patient.name}</div>
                    <div className="text-sm text-muted-foreground">Patient ID: {patient.id}</div>
                    <div className="text-sm text-muted-foreground">Updated: {patient.lastUpdate}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge className="status-pending">
                    {patient.status}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Update
                    </Button>
                    <Button variant="outline" size="sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Approve
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
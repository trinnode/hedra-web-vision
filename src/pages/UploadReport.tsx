import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Upload, 
  FileText,
  Calendar,
  Building,
  ArrowLeft
} from 'lucide-react';

export default function UploadReport() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Upload Medical Reports</h1>
          <p className="text-muted-foreground">Securely upload your medical reports to the blockchain</p>
        </div>
      </div>

      <Card className="medical-card max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Upload Report
          </CardTitle>
          <CardDescription>
            Fill in the report details and upload your medical document
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Report Type</label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lab-results">Lab Results</SelectItem>
                  <SelectItem value="radiology">Radiology Report</SelectItem>
                  <SelectItem value="pathology">Pathology Report</SelectItem>
                  <SelectItem value="cardiology">Cardiology Report</SelectItem>
                  <SelectItem value="general">General Medical Report</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Date of Report</label>
              <div className="relative mt-1">
                <Input type="date" placeholder="mm/dd/yyyy" className="pl-10" />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground">Associated Provider</label>
              <div className="relative mt-1">
                <Input placeholder="e.g. St. John's Hospital" className="pl-10" />
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Upload File */}
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">Upload File</h3>
              <p className="text-sm text-muted-foreground">
                Drag and drop or browse to upload your medical report
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, JPG, PNG (Max 10MB)
              </p>
            </div>
            <Button variant="outline" className="mx-auto">
              <FileText className="h-4 w-4 mr-2" />
              Browse Files
            </Button>
          </div>

          {/* Upload Progress */}
          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading report.pdf</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="w-full" />
            </div>
          )}

          <Button 
            className="w-full bg-primary hover:bg-primary/90" 
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? (
              <>Uploading...</>
            ) : (
              <>
                <Upload className="h-4 w-4 mr-2" />
                Submit Report
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
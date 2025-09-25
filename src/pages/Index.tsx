import React, { useState } from 'react';
import { LandingPage } from '@/components/landing-page';
import { Dashboard } from '@/components/dashboard';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');

  // Demo toggle for development - remove in production
  const toggleView = () => {
    setCurrentView(currentView === 'landing' ? 'dashboard' : 'landing');
  };

  return (
    <div className="relative">
      {/* Development Toggle - Remove in production */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={toggleView}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm"
        >
          View {currentView === 'landing' ? 'Dashboard' : 'Landing'}
        </Button>
      </div>

      {currentView === 'landing' ? <LandingPage /> : <Dashboard />}
    </div>
  );
};

export default Index;

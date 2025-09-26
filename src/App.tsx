import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "@/contexts/WalletContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DashboardLayout } from "@/components/DashboardLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyRecords from "./pages/MyRecords";
import MyConsents from "./pages/MyConsents";
import IssueAccess from "./pages/IssueAccess";
import ManageConsents from "./pages/ManageConsents";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import HealthcareBilling from "./pages/HealthcareBilling";
import ProviderDashboard from "./pages/ProviderDashboard";
import UploadReport from "./pages/UploadReport";
import AutomatedPayments from "./pages/AutomatedPayments";
import TopupWallet from "./pages/TopupWallet";
import { Dashboard } from "./components/dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <WalletProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
              <Route path="/my-records" element={<DashboardLayout><MyRecords /></DashboardLayout>} />
              <Route path="/my-consents" element={<DashboardLayout><MyConsents /></DashboardLayout>} />
              <Route path="/issue-access" element={<DashboardLayout><IssueAccess /></DashboardLayout>} />
              <Route path="/manage-consents" element={<DashboardLayout><ManageConsents /></DashboardLayout>} />
              <Route path="/billing" element={<DashboardLayout><Billing /></DashboardLayout>} />
              <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
              <Route path="/healthcare-billing" element={<DashboardLayout><HealthcareBilling /></DashboardLayout>} />
              <Route path="/provider-dashboard" element={<DashboardLayout><ProviderDashboard /></DashboardLayout>} />
              <Route path="/upload-report" element={<DashboardLayout><UploadReport /></DashboardLayout>} />
              <Route path="/automated-payments" element={<DashboardLayout><AutomatedPayments /></DashboardLayout>} />
              <Route path="/topup-wallet" element={<DashboardLayout><TopupWallet /></DashboardLayout>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </WalletProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

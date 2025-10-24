import "./global.css";
import React, { lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Layout from "./components/site/Layout";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Products = lazy(() => import("./pages/Products"));
const Clients = lazy(() => import("./pages/Clients"));
const Insights = lazy(() => import("./pages/Insights"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const LegalTerms = lazy(() => import("./pages/LegalTerms"));
const LegalPolicy = lazy(() => import("./pages/LegalPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AboutAdmin = lazy(() => import("./pages/admin/AboutAdmin"));
const TestimonialsAdmin = lazy(() => import("./pages/admin/TestimonialsAdmin"));
const UsersAdmin = lazy(() => import("./pages/admin/UsersAdmin"));
const HomepageAdmin = lazy(() => import("./pages/admin/HomepageAdmin"));
const PoliciesAdmin = lazy(() => import("./pages/admin/PoliciesAdmin"));
const ContactAdmin = lazy(() => import("./pages/admin/ContactAdmin"));
const ApplicationsAdmin = lazy(() => import("./pages/admin/ApplicationsAdmin"));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <div>Home Page - no Layout</div> },
  { path: "*", element: <div>Not found</div> },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

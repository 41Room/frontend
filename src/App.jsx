import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

import pages from './pages';
import plant from './pages/plant';
import community from './pages/community';
import financial from './pages/financial';
import { useLoading } from './hooks/useLoading';

// Import pages
const { Signin, Signup, MainDashboard, Welcome, PageNotFound } = pages;
const { PlantMain, PlantRegister, PlantDetail, PlantComplaints, PlantReview } =
  plant;
const { CommunityMain, CommunityDetail, CommunityRegister } = community;
const {
  FinancialMain,
  FinancialPurchase,
  FinancialDetail,
  FinancialDashboard,
} = financial;

function App() {
  const location = useLocation();
  const { handleLoadingTimer } = useLoading();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
    handleLoadingTimer(1500);
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path="/plant" element={<PlantMain />} />
      <Route path="/plantregister" element={<PlantRegister />} />
      <Route path="/plantdetail" element={<PlantDetail />} />
      <Route path="/plantcomplaints" element={<PlantComplaints />} />
      <Route path="/plantreview" element={<PlantReview />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community" element={<CommunityMain />} />
      <Route path="/communitydetail" element={<CommunityDetail />} />
      <Route path="/communityregister" element={<CommunityRegister />} />
      <Route path="/financial" element={<FinancialDetail />} />
      <Route path="/financialpurchase" element={<FinancialPurchase />} />
      <Route path="/financialdashboard" element={<FinancialDashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

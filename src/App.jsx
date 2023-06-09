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
  FinancialExchange,
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
      <Route path="/plant">
        <Route index element={<PlantMain />} />
        <Route path=":plant_id" element={<PlantDetail />} />
        <Route path="register" element={<PlantRegister />} />
        <Route path="review/:plant_id" element={<PlantReview />} />
        <Route path="complaints/:plant_id" element={<PlantComplaints />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community">
        <Route index element={<CommunityMain />} />
        <Route path=":community_id" element={<CommunityDetail />} />
        <Route path="register" element={<CommunityRegister />} />
      </Route>
      <Route path="/financial">
        <Route index element={<FinancialDetail />} />
        <Route path="purchase" element={<FinancialPurchase />} />
        <Route path="dashboard" element={<FinancialDashboard />} />
        <Route path="exchange" element={<FinancialExchange />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

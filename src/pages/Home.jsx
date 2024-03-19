import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import TopContent from '../components/TopContent';
import SegmentControl from '../components/SegmentControl/SegmentControl';
import DailyCard from '../components/DailyCard';

const Home = () => {
  return (
    <div className="mobile-content">
      <Header />
      <TopContent />
      <SegmentControl />
      <DailyCard />
      <Navigation />
    </div>
  );
};

export default Home;

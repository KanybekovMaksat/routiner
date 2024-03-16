import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import TopCoontent from '../components/TopContent';
import SegmentControl from '../components/SegmentControl/SegmentControl';

const Home = () => {
  return (
    <div className="mobile-content">
      <Header />
      <TopCoontent />
      <SegmentControl />
      <Navigation />
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './index.css'; // Import your CSS file for styling

const SegmentControl = () => {
  const [alignment, setAlignment] = useState('today');

  const handleChange = (value) => {
    setAlignment(value);
  };

  return (
    <div className="segmentControlContainer">
      <div className={`slider ${alignment}`} />
      <button
        className={`segmentButton ${alignment === 'today' ? 'active' : ''}`}
        onClick={() => handleChange('today')}
      >
        Today
      </button>
      <button
        className={`segmentButton ${alignment === 'clubs' ? 'active' : ''}`}
        onClick={() => handleChange('clubs')}
      >
        Clubs
      </button>
    </div>
  );
};

export default SegmentControl;

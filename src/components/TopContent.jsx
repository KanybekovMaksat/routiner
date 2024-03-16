import React from 'react';
import MoodImg from '../assets/images/Emoji.svg';

const TopContent = () => {
  return (
    <div
      style={{
        marginTop: '12px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h5>Hi, Maksat</h5>
        <p>Let’s make habits together!</p>
      </div>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#DDF2FC',
          fontSize: '20px',
        }}
      >
        😀
      </div>
    </div>
  );
};

export default TopContent;

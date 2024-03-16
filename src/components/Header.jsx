import React from 'react';
import CalendarIcon from '../assets/images/Calendar.svg';
import NotificationIcon from '../assets/images/Notification.svg';

const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <button
        style={{
          width: '48px',
          height: '48px',
          background: 'none',
          border: '1px solid #EAECF0',
          borderRadius: '16px',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={CalendarIcon} alt="" />
      </button>
      <button
        style={{
          width: '48px',
          height: '48px',
          background: 'none',
          border: '1px solid #EAECF0',
          borderRadius: '16px',
          outline: 'none',
          display: 'flex',  
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
        <img src={NotificationIcon} alt="" />
      </button>
    </div>
  );
};

export default Header;

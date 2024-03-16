import React, { useState } from 'react';
import AddIcon from '../assets/images/add-icon.svg';

const Navigation = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        minWidth: '350px',
        maxWidth: '360px',
        height: '64px',
        position: 'fixed',
        bottom: '33px',
        border: '0.5px solid #CDCDD0',
        borderRadius: '64px',
        padding: '8px 24px',
        margin: '0px 15px 0px 15px',
        boxSizing: 'border-box',
        display: 'flex',
      }}
    >
      <div style={{ display: 'flex', gap: '42px', alignItems: 'center' }}>
        <button
          style={{
            border: 'none',
            width: '25px',
            height: '25px',
            background: 'white',
          }}
          onClick={(e) => handleChange(e, 0)}
        >
          <svg
            width="30"
            height="29"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.64373 20.7821V17.7152C9.64372 16.9381 10.2757 16.3067 11.0584 16.3018H13.9326C14.7189 16.3018 15.3563 16.9346 15.3563 17.7152V20.7732C15.3562 21.4473 15.904 21.9951 16.5829 22H18.5438C19.4596 22.0023 20.3388 21.6428 20.9872 21.0007C21.6356 20.3586 22 19.4868 22 18.5775V9.86585C22 9.13139 21.6721 8.43471 21.1046 7.9635L14.443 2.67427C13.2785 1.74912 11.6154 1.77901 10.4854 2.74538L3.96701 7.9635C3.37274 8.42082 3.01755 9.11956 3 9.86585V18.5686C3 20.4637 4.54738 22 6.45617 22H8.37229C8.69917 22.0023 9.01349 21.8751 9.24547 21.6464C9.47746 21.4178 9.60793 21.1067 9.60792 20.7821H9.64373Z"
              fill={value === 0 ? 'blue' : '#EAECF0'}
            />
          </svg>
        </button>
        <button
          style={{
            background: 'white',
            border: 'none',
            width: '25px',
            height: '25px',
          }}
          onClick={(e) => handleChange(e, 1)}
        >
          <svg
            width="30"
            height="29"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.5 12C22.5 17.523 18.023 22 12.5 22C6.977 22 2.5 17.523 2.5 12C2.5 6.478 6.977 2 12.5 2C18.023 2 22.5 6.478 22.5 12Z"
              fill={value === 1 ? 'blue' : '#EAECF0'}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.3597 8.70481L14.7397 13.8248C14.6797 14.0348 14.5097 14.2048 14.2997 14.2658L9.19972 15.8648C8.85972 15.9758 8.52972 15.6448 8.63972 15.3048L10.2397 10.1748C10.2997 9.96481 10.4697 9.80481 10.6797 9.73481L15.7997 8.13481C16.1497 8.02481 16.4697 8.35481 16.3597 8.70481Z"
              fill="#9B9BA1"
            />
          </svg>
        </button>
        <button
          style={{
            background: 'white',
            border: 'none',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
          }}
          onClick={(e) => handleChange(e, 2)}
        >
          <img src={AddIcon} alt="" />
        </button>
        <button
          style={{
            background: 'white',
            border: 'none',
            width: '25px',
            height: '25px',
          }}
          onClick={(e) => handleChange(e, 3)}
        >
          <svg
            width="30"
            height="29"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.76104 9.84822C9.0078 8.70072 10.6722 8 12.5002 8C14.3282 8 15.9926 8.70072 17.2394 9.84822L20.3102 4.21828C20.8555 3.21872 20.132 2 18.9934 2H15.6771C14.9507 2 14.2815 2.39378 13.9288 3.02871L12.5002 5.60016L11.0716 3.02871C10.7189 2.39378 10.0496 2 9.32328 2H6.007C4.86841 2 4.14494 3.21872 4.69016 4.21828L7.76104 9.84822Z"
              fill="#EAECF0"
            />
            <path
              d="M19.5 15C19.5 18.866 16.366 22 12.5 22C8.63401 22 5.5 18.866 5.5 15C5.5 11.134 8.63401 8 12.5 8C16.366 8 19.5 11.134 19.5 15Z"
              fill={value === 3 ? 'blue' : '#9B9BA1'}
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 17C13.6046 17 14.5 16.1046 14.5 15C14.5 13.8954 13.6046 13 12.5 13C11.3954 13 10.5 13.8954 10.5 15C10.5 16.1046 11.3954 17 12.5 17Z"
              fill="#EAECF0"
            />
          </svg>
        </button>
        <button
          style={{
            background: 'white',
            border: 'none',
            width: '25px',
            height: '25px',
          }}
          onClick={(e) => handleChange(e, 4)}
        >
          <svg
            width="30"
            height="29"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4966 12.5838C15.4346 12.5838 17.7886 10.2288 17.7886 7.29176C17.7886 4.35476 15.4346 1.99976 12.4966 1.99976C9.55959 1.99976 7.20459 4.35476 7.20459 7.29176C7.20459 10.2288 9.55959 12.5838 12.4966 12.5838Z"
              fill="#EAECF0"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.497 15.1746C8.184 15.1746 4.5 15.8546 4.5 18.5746C4.5 21.2956 8.161 21.9996 12.497 21.9996C16.81 21.9996 20.494 21.3206 20.494 18.5996C20.494 15.8786 16.834 15.1746 12.497 15.1746Z"
              fill={value === 4 ? 'blue' : '#9B9BA1'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navigation;

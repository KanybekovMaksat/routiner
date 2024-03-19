import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';

function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: '#AFB4FF',
        }}
        size={40}
        thickness={2.2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: 'white',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={2.2}
        {...props}
      />
      <Box
        sx={{
          top: -3,
          left: 2,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{ color: 'white' }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function DailyCard() {
  const [progress, setProgress] = React.useState(25);

  return (
    <div
      style={{
        margin: '20px 0px',
        width: '90%',
        maxHeight: '72px',
        display: 'flex',
        gap: '20px',
        padding: '16px',
        borderRadius: '12px',
        // background: 'rgb(107,115,255)',
        display: 'flex',
        alignItems: 'center',
        background:
          'linear-gradient(126deg, rgba(107,115,255,1) 0%, rgba(0,13,255,1) 100%)',
      }}
    >
      <FacebookCircularProgress value={progress} />
      <div style={{ color: 'white' }}>
        <p style={{ fontSize: '16px' }}>Your daily goals almost done! 🔥</p>
        <p style={{ fontSize: '12px' }}>1 of 4 completed</p>
      </div>
    </div>
  );
}

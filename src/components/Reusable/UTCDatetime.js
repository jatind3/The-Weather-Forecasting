import { Typography } from '@mui/material';
import React from 'react';
import { getISTDatetime } from '../../utilities/DatetimeUtils'; // Updated import

const ISTDatetime = () => { // Updated component name
  const istFullDate = getISTDatetime(); // Updated function call
  const istTimeValue = (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontWeight: '400',
        fontSize: { xs: '10px', sm: '12px' },
        color: 'rgba(255, 255, 255, .7)',
        lineHeight: 1,
        paddingRight: '2px',
        fontFamily: 'Poppins',
      }}
    >
      {istFullDate} IST {/* Updated timezone abbreviation */}
    </Typography>
  );
  return istTimeValue;
};

export default ISTDatetime; // Updated export

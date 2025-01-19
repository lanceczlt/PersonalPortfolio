import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const PageHeader = ({ title }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper, 
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: theme.palette.text.primary,
          position: 'relative',
          display: 'inline-block',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '50%',
            height: '2px',
            bottom: '-5px',
            left: '25%',
            backgroundColor: theme.palette.text.primary, 
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;

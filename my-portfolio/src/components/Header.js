import React from 'react';
import { Box } from '@mui/material';

const Header = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end', // Align children (e.g., ThemeToggle button) to the right
        alignItems: 'center',
        padding: '16px',           // Add some padding
        backgroundColor: 'transparent', // No visible background color
      }}
    >
      {children} {/* Includes the ThemeToggle button */}
    </Box>
  );
};

export default Header;

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

function Resume() {
  const theme = useTheme();

  return (
    <Box
      className="resume-page"
      sx={{
        py: 4,
        px: { xs: 2, sm: 3 },
        textAlign: 'center',
        backgroundColor: theme.palette.background.box,
      }}
    >
      <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
        You can view or download my resume below:
      </Typography>

      <Box
        component="iframe"
        src="https://drive.google.com/file/d/1J2mgDqVVgn3qq3RiePnpf0GlKOWLOxfD/preview"
        sx={{
          width: '100%',
          maxWidth: '900px',
          aspectRatio: '8.5 / 11',
          height: 'auto',
          mx: 'auto',
          border: '1px solid #ccc',
          boxShadow: 3,
        }}
      />
    </Box>
  );
}

export default Resume;

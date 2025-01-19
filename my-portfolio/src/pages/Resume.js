import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

function Resume() {
  const theme = useTheme()
  return (
    <Box className="resume-page" sx={{ py: 4, textAlign: 'center',  }}>
      <Typography variant="body1" gutterBottom>
        You can view or download my resume below:
      </Typography>

      {/* Embedded PDF viewer */}
      <iframe
        src="https://example.com/your-resume.pdf" // URL to your PDF
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Resume Viewer"
      />

      {/* Download PDF Button */}
      <Button
        variant="outlined"
        color="primary"
        href="https://example.com/your-resume.pdf" // Link to your resume
        download
        sx={{ mt: 2 }}
      >
        Download Resume
      </Button>
    </Box>
  );
}

export default Resume;

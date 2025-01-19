import React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();
  const iconColor = theme.palette.mode === 'dark' ? '#000000' : '#ffffff';

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        padding: '20px 0',
      }}
    >
      <Box>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/lanceczlt"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: iconColor }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/lance-choong/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: iconColor }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        sx={{
          marginTop: '10px',
          color: iconColor,
        }}
      >
        © 2024 Lance Choong. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';

// function Footer() {
//   return (
//     <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#1c1c1c', textAlign: 'center' }}>
//       <Typography variant="body1">
//         Get in touch: lancechoong167@gmail.com | (123) 456-7890 |{' '}
//         <Link href="https://linkedin.com/in/lance-choong" target="_blank" rel="noopener" color="inherit">LinkedIn</Link>
//       </Typography>
//     </Box>
//   );
// }

// export default Footer;
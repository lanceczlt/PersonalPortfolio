import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PageHeader from './PageHeader';

function Taskbar() {
  const theme = useTheme();
  const location = useLocation();

  // Map routes to titles
  const pageTitles = {
    '/': 'About Me',
    '/projects': 'Projects',
    '/work-experience': 'Work Experience',
    '/certifications': 'Certifications',
    '/resume': 'Resume',
  };

  // Get the title based on the current path
  const currentTitle = pageTitles[location.pathname] || 'Page Not Found';

  return (
    <AppBar position="relative">
      <Toolbar sx={{ backgroundColor: theme.palette.background.paper }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
          Lance Choong
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/work-experience">Work Experience</Button>
        <Button color="inherit" component={Link} to="/certifications">Certifications</Button>
        <Button color="inherit" component={Link} to="/resume">Resume</Button>
      </Toolbar>
      {/* Render PageHeader with the current title */}
      <PageHeader title={currentTitle} />
    </AppBar>
  );
}

export default Taskbar;

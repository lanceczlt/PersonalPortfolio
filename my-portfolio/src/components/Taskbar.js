import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PageHeader from './PageHeader';

function Taskbar() {
  const theme = useTheme();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const pageTitles = {
    '/PersonalPortfolio': 'About Me',
    '/PersonalPortfolio/': 'About Me',
    '/PersonalPortfolio/projects': 'Projects',
    '/PersonalPortfolio/work-experience': 'Work Experience',
    '/PersonalPortfolio/certifications': 'Certifications',
    '/PersonalPortfolio/resume': 'Resume',
  };

  const currentTitle = pageTitles[location.pathname] || 'Page Not Found';

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <AppBar position="relative">
      <Toolbar sx={{ backgroundColor: theme.palette.background.paper, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
          Lance Choong
        </Typography>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
          sx={{ display: { xs: 'block', sm: 'none' } }} 
        >
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/PersonalPortfolio/">Home</Button>
          <Button color="inherit" component={Link} to="/PersonalPortfolio/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/PersonalPortfolio/work-experience">Work Experience</Button>
          <Button color="inherit" component={Link} to="/PersonalPortfolio/certifications">Certifications</Button>
          <Button color="inherit" component={Link} to="/PersonalPortfolio/resume">Resume</Button>
        </Box>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/PersonalPortfolio/">Home</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/PersonalPortfolio/projects">Projects</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/PersonalPortfolio/work-experience">Work Experience</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/PersonalPortfolio/certifications">Certifications</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/PersonalPortfolio/resume">Resume</MenuItem>
        </Menu>
      </Toolbar>
      <PageHeader title={currentTitle} />
    </AppBar>
  );
}

export default Taskbar;

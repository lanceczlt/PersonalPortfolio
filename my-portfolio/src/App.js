import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Taskbar from './components/Taskbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#64b5f6',
    },
    background: {
      default: '#121212',
      paper: '#1c1c1c',
      box: 'whitesmoke',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
      dark: '#1c1c1c',
      light: '#FFFFFF',
    },
    button: {
      primary: '#B06500'
    }
  },
});

const basePath = "/PersonalPortfolio";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className="App" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Taskbar />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path={`${basePath}/`} element={<Home />} />
              <Route path={`${basePath}/projects`} element={<Projects />} />
              <Route path={`${basePath}/work-experience`} element={<WorkExperience />} />
              <Route path={`${basePath}/resume`} element={<Resume />} />
              <Route path={`${basePath}/certifications`} element={<Certifications />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;

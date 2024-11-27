import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  // Toggle theme mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Header>
        <ThemeToggle themeMode={themeMode} toggleTheme={toggleTheme} />
      </Header>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <main style={{ display: 'flex', flexDirection: 'row', gap: '20px', width: '100%' }}>
          {/* About Section */}
          <Box
            sx={{
              flex: 1,
              width: { xs: '100%', sm: '30%' },  // Make About section take 30% of the width on larger screens
              minWidth: '300px',  // Ensure the About section does not get too small
              paddingRight: '20px',  // Space between About and the rest
              display: 'flex',
              justifyContent: 'center',  // Centers content horizontally within the About section
            }}
          >
            <About />
          </Box>

          {/* Other Sections (Projects, Experience, Skills) */}
          <Box
            sx={{
              flex: 4,  // The rest of the space for Projects, Experience, and Skills
              width: { xs: '100%', sm: '70%' },  // 70% width for the right sections on larger screens
              paddingLeft: '20px',  // Add padding for spacing
            }}
          >
            <Projects />
            <Experience />
            <Skills />
          </Box>
        </main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

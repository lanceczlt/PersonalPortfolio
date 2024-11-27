import React from 'react';
import { Typography, Card, Grid, Avatar, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const About = () => {
  return (
    <section id="about" style={{ margin: '40px 0', width: '100%' }}>
      <Card 
        elevation={3} 
        sx={{
          padding: '20px',
          backgroundColor: 'background.paper', // Theme-aware background
          display: 'flex',
          justifyContent: 'center',  // Centers content in the About section
          alignItems: 'center',  // Vertically centers the content
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Column: Image Placeholder */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto',
                bgcolor: 'primary.main', // Fallback background color
                color: 'text.primary', // Theme-aware text color
              }}
              alt="Lance Choong"
              src="/path/to/your/image.jpg" // Replace with your image path
            >
              <PersonIcon sx={{ fontSize: 100 }} />
            </Avatar>
          </Grid>

          {/* Right Column: About Info and Resume */}
          <Grid item xs={12} sm={8} sx={{ textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom sx={{ color: 'text.primary' }}>
              Lance Choong
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ color: 'text.primary' }}
            >
              A Software Engineer with experience in backend systems, cloud deployments,
              automation, and frontend development. I enjoy building scalable solutions and enhancing the
              reliability of complex systems.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ color: 'text.primary' }}
            >
              Feel free to download my resume below or contact me for more information.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="/path/to/your/resume.pdf" // Update with the path to your resume file
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontWeight: 'bold',
                textTransform: 'none', // Optional: remove all caps
              }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Card>
    </section>
  );
};

export default About;

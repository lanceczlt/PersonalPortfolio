import React from 'react';
import { Box, Typography, Button, Grid, Divider, useTheme } from '@mui/material';

function Projects() {
  const theme = useTheme();

  const projects = [
    {
      name: 'Home Server',
      description: 'A self-hosted home server for Minecraft Hosting',
      technologies: 'Docker, Linux, Bash, Python, Java ',
      link: 'https://github.com/lanceczlt/minecraft-server',
    },
    {
      name: 'AniFind',
      description: 'An Anime search web application to search and browse 30,000+ anime',
      technologies: 'React, MUI, Jikan myAnimeList API, SCSS',
      link: 'https://lanceczlt.github.io/AniFind/',
    },
    {
      name: 'Personal Portfolio',
      description: 'This website you are viewing!',
      technologies: 'MUI, React, CSS, Git',
      link: '',
    },
    {
      name: 'VCT Digital Assistant',
      description: 'Created a digital chatbot assistant to draft fantasy esport VALORANT teams using AWS Bedrock',
      technologies: 'AWS Bedrock, S3, Python',
      link: '',
    },
    {
      name: 'Discord Bot',
      description: 'A collaborative grocery bot to improve coordination in dorm life with roommates, implemented collaborative grocery list that stores weekly grocery entries, reservation system for meal of day, and remind me notifications',
      technologies: 'Python, Flask, Discord API.py, Repl.it',
      link: '',
    },
  ];

  return (
    <Box
      className="projects-page"
      sx={{
        py: 4,
        px: 2,
        minHeight: '60vh',
        backgroundColor: theme.palette.background.box,
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Grid item xs={2} sm={6} md={2.5}>
              <Box
                sx={{
                  p: 3,
                  minHeight: '200px',
                  maxWidth: '500px',
                  backgroundColor: theme.palette.background.default,
                  borderRadius: 2,
                  textAlign: 'center',
                  boxShadow: 3,
                  mx: 'auto',
                  mt: 5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Ensures even spacing for the content
                }}
              >
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.text.light }}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, overflow: 'hidden', textOverflow: 'ellipsis', color: theme.palette.text.secondary }}
                  >
                    {project.description}
                  </Typography>
                </div>
                {/* Position technologies right above the button */}
                <Box sx={{ mt: 'auto' }}>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary, mb: 2 }}
                  >
                    <strong>Technologies Used:</strong> {project.technologies}
                  </Typography>
                  {project.link && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener"
                      sx={{ backgroundColor: theme.palette.button.primary, color: theme.palette.text.light }}
                    >
                      View Project
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
            {(index + 1) % 2 === 0 && index !== projects.length - 1 && (
              <Grid item xs={12}>
                <Divider sx={{ borderColor: theme.palette.background.default, my: 5, width: '27%', mx: 'auto', borderWidth: 1 }} />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;

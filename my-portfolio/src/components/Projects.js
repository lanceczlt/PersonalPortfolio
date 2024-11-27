import React from 'react';
import { Typography, Grid, Card, CardContent, Link } from '@mui/material';
import Slider from 'react-slick';

const projects = [
  {
    name: 'VCT Digital Assistant',
    tech: 'AWS Bedrock, S3, Python',
    description: 'A chatbot that creates VALORANT esports teams for fantasy leagues.',
    achievements: [
      'Led a team of 6, optimizing task allocation and delivering on schedule.',
      'Processed over 500,000 records of data, ensuring data integrity.',
      'Implemented RAG techniques, improving query accuracy by 40%.'
    ],
    date: 'September 2024 - October 2024'
  },
  {
    name: 'AniFind',
    tech: 'React, MUI, SCSS, Jikan API',
    description: 'An anime search web application to browse 30,000+ anime with optimized performance.',
    achievements: [
      'Reduced API calls by 40% using local storage.',
      'Displayed anime entries dynamically with MUI components.'
    ],
    date: 'August 2022',
    url: 'https://lanceczlt.github.io/AniFind/'
  },
  {
    name: 'Discord Bot',
    tech: 'Python, Flask, Discord API',
    description: 'A collaborative grocery bot for 80+ users, enhancing dorm life coordination.',
    achievements: [
      'Implemented grocery list storage for weekly entries.',
      'Developed reservation and reminder system for meal planning.'
    ],
    date: 'May 2021',
  },
  {
    name: 'WatchGenie',
    tech: 'Python, Flask, TMDB API, MySQL',
    description: 'A movie recommendation system with collaborative filtering of user reviews.',
    achievements: [
      'Integrated personalized analytics based on user preferences.',
      'Filtered 800,000+ movie entries for recommendations.'
    ],
    date: 'January 2021 - April 2021',
    url: 'https://github.com/lanceczlt/watchgenie'
  }
];

const Projects = () => {
  return (
    <section id="projects" style={{ margin: '40px 0' }}>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>

      {/* Grid layout for projects */}
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}> {/* Full width for each project */}
            <Card
              sx={{
                height: '350px', // Fixed height for uniformity
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                width: '100%', // Ensure the width adjusts
                boxSizing: 'border-box', // Include padding in the width/height calculation
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {project.tech}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginBottom: '10px' }}>
                  {project.date}
                </Typography>
                <Typography variant="body2" style={{ marginBottom: '15px' }}>
                  {project.description}
                </Typography>
                {/* Achievements as a list with bullet points */}
                <Typography>
                  <ul style={{ paddingInlineStart: '20px', color: 'text.primary' }}>
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
              {project.url && (
                <CardContent>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    underline="hover"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Visit Project
                  </Link>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;

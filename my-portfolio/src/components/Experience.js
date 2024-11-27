import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const experiences = [
  {
    company: 'JP Morgan Chase & Co.',
    role: 'Software Engineer',
    duration: 'August 2023 - Present',
    details: [
      'Automated Kafka onboarding using Python, reducing setup time from 3 hours to 3 minutes.',
      'Developed an API-first application on Kubernetes with zero-downtime deployments.',
      'Led encryption automation with Spring, improving security and reducing provisioning time by 80%.',
      'Reduced monthly operational costs by 35% with ECS lightswitch jobs.'
    ]
  },
  {
    company: 'Textron',
    role: 'Software Engineer Intern',
    duration: 'May 2022 - August 2022',
    details: [
      'Developed a web app with VueJS, Kubernetes, and Azure REST API, increasing user engagement by 30%.',
      'Automated IT device refresh processes using ServiceNow and JavaScript, saving $168,550 per quarter.',
      'Integrated Linux servers with Active Directory via Ansible, reducing setup time by 2 months.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ margin: '40px 0' }}>
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}> {/* Ensuring full-width for all screen sizes */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.paper', // Matches the current theme
                padding: '20px',
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{ color: 'text.primary' }} // Role title color
                >
                  {experience.role} at {experience.company}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {experience.duration}
                </Typography>
                <ul style={{ color: 'text.primary', paddingInlineStart: '20px' }}> {/* Details color */}
                  {experience.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Experience;
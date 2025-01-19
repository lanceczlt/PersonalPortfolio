import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';

function WorkExperience() {
  const theme = useTheme(); // Access the theme

  const workExperiences = [
    {
      date: '2023 - Present',
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGxpntCyRgsuA/company-logo_200_200/company-logo_200_200/0/1718711710850/jpmorganchase_logo?e=1745452800&v=beta&t=zUNDSoEkxscnODv3j0nZPRuMIh6SgHmG_r6ITd7QUXs',
      title: 'JPMorgan Chase',
      role: 'Software Engineer',
      description: 'Implemented features and automated encryption in microservices using Kubernetes, AWS, Jenkins and SpringBoot, ensuring high performance and near 0 downtime in production',
    },
    {
      date: 'May 2022 - Aug 2022',
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQH2nVeM9OV8kw/company-logo_200_200/company-logo_200_200/0/1707324134929/textron_logo?e=1745452800&v=beta&t=HhIipZMpJYoRi9xjOJDJnlGPNUg31mHKaT8FNNbkyjI',
      title: 'Textron',
      role: 'Software Engineer Intern',
      description: 'Developed a Vue web application for internal company profiles serving 9000 employees, Automated Linux server onboarding using Ansible'
    },
    {
      date: '2019 - 2022',
      logo: 'https://via.placeholder.com/100',
      title: 'Freelance',
      role: 'Full Stack Developer',
      description: 'Created interactive and user-friendly UI components using React and Material-UI.',
    },
  ];

  return (
    <Box
      className="page"
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.box,
        color: theme.palette.text.primary, 
        minHeight: '60vh', // Ensure the box takes up at least 60% of the viewport height
      }}
    >
      <Box sx={{ maxWidth: 1500, mt: 5, px: 2, display: 'flex', justifyContent: 'flex-start' }}>
        {/* Slightly shift the timeline container to the right */}
        <Box sx={{ flexGrow: 1, marginLeft: '13.5%' }}>
          <Timeline position="right">
            {workExperiences.map((experience, index) => (
              <TimelineItem key={index} sx={{ minHeight: 200 }}>
                {/* Left Side: Date */}
                <TimelineOppositeContent
                  sx={{
                    flex: 0.2,
                    textAlign: 'right',
                    color: theme.palette.text.dark, // Use theme secondary text color
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'normal',
                  }}
                >
                  {experience.date}
                </TimelineOppositeContent>

                {/* Separator */}
                <TimelineSeparator>
                  <Avatar
                    src={experience.logo}
                    alt={`${experience.title} Logo`}
                    sx={{ width: 80, height: 80, mt: 2 }}
                  />
                  {index < workExperiences.length - 1 && (
                    <TimelineConnector
                      sx={{
                        height: 200,
                        backgroundColor: theme.palette.primary.paper, // Use theme primary color
                      }}
                    />
                  )}
                </TimelineSeparator>

                {/* Right Side: Content */}
                <TimelineContent sx={{ flex: 0.6, px: 3 }}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.paper, // Use paper background
                      borderRadius: 2,
                      color: theme.palette.text.primary, // Use primary text color
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.secondary, // Use primary color for title
                        mb: 1,
                      }}
                    >
                      {experience.title} - {experience.role}
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: '1.1rem' }}>
                      {experience.description}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
}

export default WorkExperience;

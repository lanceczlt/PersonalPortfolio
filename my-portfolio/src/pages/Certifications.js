import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid, useTheme } from '@mui/material';

function Certifications() {
  const theme = useTheme();

  const certifications = [
    {
      image: "https://content.cloudthat.com/resources/wp-content/uploads/2023/12/dgt.png",
      name: "AWS Certified Cloud Practitioner",
      link: "https://certification-link.com/1",
    },
    {
      image: "https://images.credly.com/images/cc8adc83-1dc6-4d57-8e20-22171247e052/blob",
      name: "Certified Kuberenetes Application Developer",
      link: "https://certification-link.com/2",
    },
  ];

  return (
    <Box className="page" sx={{ py: 4, backgroundColor: theme.palette.background.box, minHeight: '60vh'}}>
      <Grid container justifyContent="center" spacing={2}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={2} mt={15} mb={10} key={index}> {/* Adjusted for 3 items per row */}
            <Card sx={{ 
              maxWidth: 280, 
              margin: '0 auto', 
              height: 350, // Set a fixed height for all cards
              display: 'flex', 
              flexDirection: 'column' 
            }}>
              <CardMedia
                component="img"
                image={cert.image}
                alt={`Certification Logo ${index + 1}`}
                sx={{
                  height: 180, 
                  objectFit: 'contain',
                  width: '100%',
                  pt: 2
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{cert.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={cert.link}
                  target="_blank"
                  rel="noopener"
                  sx={{ mt: 2 }}
                >
                  View Certification
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Certifications;

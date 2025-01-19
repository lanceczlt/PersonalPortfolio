import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material';

function Home() {
  const theme = useTheme(); // Access the theme

  return (
    <Box 
      className="page" 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        py: 0, // Adjusted padding
        minHeight: '60vh', // Ensure the box takes up at least 60% of the viewport height
        paddingLeft: 8, // Adds more space to the left side
        backgroundColor: theme.palette.background.box,
      }}
    >
      {/* Avatar */}
      <Avatar 
        src={"https://media.licdn.com/dms/image/v2/D5603AQFf7SFw_Xi7lw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676135685638?e=1743033600&v=beta&t=u_fDTDQ7YDUEow6jWUoOnA5gRtgk8BRLhFKyiLeyheo"}
        alt="Lance Choong"
        sx={{ width: 200, height: 200, marginRight: 3, mb: 30 }} 
      />
      <Box sx={{ maxWidth: 740, marginLeft: 1, mb: 30 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Hello, I'm Lance Choong
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textIndent: '30px' }}>
          I’m currently a Software Engineer at JP Morgan Chase. I specialize in automating processes, enhancing security, and building scalable systems. From reducing Kafka setup times by 90%, driving cloud security with AWS and near 0 downtime deployments with Kubernetes, I focus on solving complex challenges efficiently.
          <br />   <br /> 
          Feel free to get in touch with me or take a look at my website!
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;

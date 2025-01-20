import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material';

function Home() {
  const theme = useTheme();

  return (
    <Box
      className="page"
      sx={{
        py: 2,
        minHeight: '45vh',
        paddingX: { xs: 2, sm: 8 },
        backgroundColor: theme.palette.background.box,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },  
        alignItems: 'center',  
        justifyContent: 'center', 
        paddingBottom: '5vh'
      }}
    >

      <Avatar
        src={"https://media.licdn.com/dms/image/v2/D5603AQFf7SFw_Xi7lw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676135685638?e=1743033600&v=beta&t=u_fDTDQ7YDUEow6jWUoOnA5gRtgk8BRLhFKyiLeyheo"}
        alt="Lance Choong"
        sx={{
          width: { xs: 120, sm: 200 },
          height: { xs: 120, sm: 200 },
          marginBottom: { xs: 2, sm: 0 },  
          marginRight: { sm: 3 },  
        }}
      />

      <Box
        sx={{
          maxWidth: 740,
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: 'h5.fontSize', sm: 'h4.fontSize' } }}>
          Hello, I'm Lance Choong
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            textIndent: { xs: 0, sm: '30px' },  
            fontSize: { xs: '0.875rem', sm: '1rem' },  
          }}
        >
          I’m currently a Software Engineer at JP Morgan Chase. I specialize in automating processes, enhancing security, and building scalable systems. From reducing Kafka setup times by 90%, driving cloud security with AWS, and near 0 downtime deployments with Kubernetes, I focus on solving complex challenges efficiently.
          <br /> <br />
          Feel free to get in touch with me or take a look at my website!
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;

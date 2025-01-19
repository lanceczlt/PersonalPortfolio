import React from 'react';
import { Box, List, ListItem, ListItemText, useTheme} from '@mui/material';

function Projects() {
  const theme = useTheme()
  return (
    <Box className="page" sx={{ py: 4, minHeight: '60vh', backgroundColor: theme.palette.background.box}}>
      <List>
        <ListItem>
          <ListItemText primary="Project 1 - Description" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Project 2 - Description" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Project 3 - Description" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Projects;
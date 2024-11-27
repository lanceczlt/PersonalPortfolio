import React from 'react';
import { Typography, Grid, Paper, Divider, Box } from '@mui/material';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaAws, FaGitAlt, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiKubernetes, SiTerraform, SiJenkins, SiAnsible } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';

const skills = {
  languages: [
    { name: 'Java', icon: <FaJava size={40} color="#5382a1" /> },
    { name: 'Python', icon: <FaPython size={40} color="#3776ab" /> },
    { name: 'HTML', icon: <FaHtml5 size={40} color="#e34f26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={40} color="#264de4" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#f0db4f" /> },
  ],
  software: [
    { name: 'React', icon: <FaReact size={40} color="#61dafb" /> },
    { name: 'AWS', icon: <FaAws size={40} color="#ff9900" /> },
    { name: 'Docker', icon: <FaDocker size={40} color="#0db7ed" /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={40} color="#326ce5" /> },
    { name: 'MongoDB', icon: <DiMongodb size={40} color="#47a248" /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt size={40} color="#f34f29" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} color="#339933" /> },
    { name: 'Terraform', icon: <SiTerraform size={40} color="#623ce4" /> },
    { name: 'Jenkins', icon: <SiJenkins size={40} color="#d24939" /> },
    { name: 'Ansible', icon: <SiAnsible size={40} color="#ee0000" /> },
  ],
};

const Skills = () => {
  return (
    <section id="skills" style={{ margin: '40px 0' }}>
      <Typography variant="h2" gutterBottom>
        Technologies and Skills
      </Typography>

      {Object.entries(skills).map(([category, items], index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: 'background.paper',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: 'text.primary',
              marginBottom: '16px',
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {items.map((skill, idx) => (
              <Grid item key={idx} sx={{ textAlign: 'center' }}>
                <Box sx={{ marginBottom: '8px' }}>{skill.icon}</Box>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary' }}
                >
                  {skill.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}

      <Divider sx={{ margin: '20px 0' }} />
    </section>
  );
};

export default Skills;

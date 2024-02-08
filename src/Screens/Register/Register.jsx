import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signUpUser } from '../../Config/Firebase/Firebasemethod';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../Config/Firebase/Firebaseconfig';
import { useState } from 'react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {

    const navigate = useNavigate()
    const course = React.useRef()

const [file , setFile] = React.useState('')

function handlechange(event){

  setFile(event.target.value)
}

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
     console.log(file);




      const storageRef = ref(storage,  data.get('email'));
      uploadBytes(storageRef, file).then(() => {
          getDownloadURL(storageRef).then((url) => {
      signUpUser({
        firstName:data.get('firstName'),
        lastName:data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
          course: course.current.value,
          profileurl:url
        
      }).then((res)=>{
        console.log(res.data);
        navigate('/')
      }).catch((err)=>{
    console.log(err);
      })
      console.log({
        firstName:data.get('firstName'),
        lastName:data.get('lastName'),
          email: data.get('email'),
          password: data.get('password'),
          course: course.current.value, 
          profileurl:url
      });
    })
  })
     
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
              <Grid item xs={12} >

                  <select className='container-fluid p-3' ref={course} >
                  <option>SELECT COURSE</option>
                  <option>WEB DEVELOPMENT</option>
                  <option>GRAPHIC DESIGNING</option>
                  <option>FLUTTER</option>
                 
                  </select>

              </Grid>
            
              <Grid item xs={12}>
              <input type="file" name="" value={file} onChange={handlechange} />
</Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}


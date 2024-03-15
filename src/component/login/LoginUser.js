import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,    
    Typography,
   } from '@mui/material';
   import { useNavigate } from 'react-router-dom';
   import React, { useState } from 'react';

   import { LoginAPI } from '../../service/LoginAPI';
   
   function LoginUser() {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
       });

    const { navigate } = useNavigate();

    const onInputChange = (e) => {
    const { value, name } = e.target;
    setLoginFormData((prevForm) => {
        return {
        ...prevForm,
        [name]: value,
        };
    });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
       LoginAPI.login({ email: loginFormData.email, password: loginFormData.password } )       
       .then((userData) => {
       
       if(userData?.valid)
       navigate('/home'); // need to handle JWT token storage( whether in local storage or application memmory using state/contextAPI)
      // else handle invalid user scenario
    })
        };

    return (
     <>
      <Container component="main" maxWidth="xs">
       <Box>
        <Typography component="h1" variant="h5">
         Sign In
        </Typography>
        <Box component="form">
         <TextField
           margin="normal"
           required
           fullWidth
           id="email"
           type="email"
           label="Email Address"
           name="email"        
           autoFocus
           onChange={onInputChange}
          />
          <TextField
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           id="password"
           onChange={onInputChange}
          />
         <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onFormSubmit}
          >
          Sign In
         </Button>
         <Grid className="footer">
          <Typography component="h5">
           Don't have an account? <Link href="/register">Sign Up</Link>
          </Typography>
         </Grid>
        </Box>
       </Box>
      </Container>
     </>
    );
   }
   
   export default LoginUser;
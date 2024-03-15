import {
    Box,
    Button,
    Container,
    TextField,    
    Typography,
   } from '@mui/material';
   import React, { useState } from 'react';

   import { RegisterAPI } from '../../service/RegisterAPI';
   
   function SignUp() {
    const [loginFormData, setLoginFormData] = useState({
            email: "",
            display_name: "",
            first_name: "",
            last_name: "",
            password: ""
       });
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
        RegisterAPI.register(loginFormData)       
       .then((userData) => {
       if(userData) {
       // need to handle API success
       }     
    });
  };

    return (
     <>
      <Container component="main" maxWidth="xs">
       <Box>
        <Typography component="h1" variant="h5">
         Register
        </Typography>
        <Box component="form">       
           <TextField
           margin="normal"
           required
           fullWidth
           id="first_name"
           type="text"
           label="First Name"
           name="first_name"        
           autoFocus
           onChange={onInputChange}
          />
           <TextField
           margin="normal"
           required
           fullWidth
           id="last_name"
           type="text"
           label="Last Name"
           name="last_name"        
           autoFocus
           onChange={onInputChange}
          />
           <TextField
           margin="normal"
           required
           fullWidth
           id="display_name"
           type="text"
           label="Display Name"
           name="display_name"        
           autoFocus
           onChange={onInputChange}
          />
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
          Sign Up
         </Button>         
        </Box>
       </Box>
      </Container>
     </>
    );
   }   
   export default SignUp;
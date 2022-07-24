import React from 'react'
import { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
const Signup = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState(false);
    
    const [phone, setPhone] = useState("");
    
    const [flag, setFlag] = useState(false);
    

    function confirm(e) {
        if (password === e.target.value) {
            setConfirmPassword(true);
        } else {
            setConfirmPassword(false);   
        }  
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!name || !email || !password || !phone || !Confirmpassword) {
            
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("DanishEmail", JSON.stringify(email));
            localStorage.setItem("DanishPhoneNumber", JSON.stringify(phone));
            localStorage.setItem("DanishName", JSON.stringify(name));
            localStorage.setItem("DanishPassword", JSON.stringify(password)
            );
            console.log("Saved in Local Storage");
        }
    }
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleFormSubmit}>
                    <TextField fullWidth label='Name' onChange={(event) => setName(event.target.value)} placeholder="Enter your name" />
                    <TextField fullWidth label='Email' onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        
                    </FormControl>
                    <TextField fullWidth label='Phone Number' onChange={(event) => setPhone(event.target.value)} placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' onChange={confirm} placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;
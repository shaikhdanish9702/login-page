import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';

const Login = ({ handleChange }) => {
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
       const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);


     function handleLogin(e) {
    e.preventDefault();
         let pass = localStorage
             .getItem("sanskarPassword");
    let mail = localStorage.getItem("sanskarEmail");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login In</h2>
                </Grid>
                
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password'  placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                    <Button type='submit' onClick={handleLogin} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                {flag && (
                    
                       alert("Fill correct Info else keep trying.")
                    )}
        
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={()=>handleChange("event",1)} >
                        Sign Up 
                </Link>
                    </Typography>
                    
            </Paper>
        </Grid>
    )
}

export default Login
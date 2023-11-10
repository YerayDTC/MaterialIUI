import React, { startTransition, useState } from "react";
import "./LoginCard.css";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, Icon, IconButton, InputAdornment, TextField, Typography, useScrollTrigger } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

function LoginCard() {

    // const [email, setEmail] = useState("")
    const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Card
        sx={{margin:"10px", maxWidth: "700px", backgroundColor: blue[100] }} raised={true}>
        <CardHeader title="Login"></CardHeader>    
        <CardContent>
            <TextField
            // onChange={(e) => setEmail(e.target.value)}
            variant="outlined" 
            fullWidth={true} 
            margin="dense" 
            type="text" 
            label="Email"
            InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <Icon>
                      <Email/>
                    </Icon>
                  </InputAdornment>
                )
              }}
            ></TextField>
            
            <TextField 
            variant="outlined" 
            fullWidth={true} margin="dense" 
            type={isVisible ? "text":"password"} 
            label="Paswoord" 
            InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
             <IconButton onClick={() => setIsVisible(!isVisible)}> {/* si se pulsa el icono del ojo se cambia la variable a visible */}
                  {isVisible ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            )
          }}></TextField>
        </CardContent>

        <Divider/>

        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button size="small" color="warning" variant="contained">Register</Button>
            <Button size="small" color="primary" variant="contained">Login</Button>
            
        </CardActions>
      </Card>
    </>
  );
}

export default LoginCard;

import { useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Icon, IconButton, InputAdornment, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import Pruebas from "../Pruebas/Pruebas";

function LoginCard() {

    // const [email, setEmail] = useState("")
    const [isVisible, setIsVisible] = useState(false)

  return (
    <Box sx={{backgroundColor:"primary", width:"40%", marginLeft:"30%"}}>
        <Pruebas/>
      {/* <Card
        sx={{margin:"10px", maxWidth: "700px", backgroundColor: blue[100] }} raised={true}> */}
      
   <Card
        sx={{backgroundColor: blue[100]}} raised={true}>
        <CardHeader sx={{width:"20px"}} title="Login"></CardHeader>

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
    </Box>
  );
}

export default LoginCard;

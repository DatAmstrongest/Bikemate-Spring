import * as React from "react";
import Grid from "@mui/material/Grid";
import SmallerLogo from "../../public/images/smallerLogo.js";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";

import InputButton from "../components/InputButton";
import styles from "../styles/Login.module.css";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid className={styles.grid} container spacing={2} direction="column">
      <Grid item>
        <Box
          textAlign="center"
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <Card className={styles.card} sx={{ boxShadow: 5 }}>
            <CardContent>
              <SmallerLogo style={styles.logo} />
              <br />
              <h1 className={styles.title}>Bikemate</h1>
              <br />
              <TextField
                fullWidth
                label="Email"
                hintText="Enter"
                variant="outlined"
                className={styles.textField}
              />
              <br />

              <TextField
                fullWidth
                className={styles.textField}
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <InputButton
                label="Login"
                link=""
                customClass={styles.submitButton}
              />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

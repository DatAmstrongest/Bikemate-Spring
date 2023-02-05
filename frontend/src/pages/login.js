import * as React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import SmallerLogo from "../../public/images/smallerLogo.js";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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
                variant="filled"
                label="Email"
                className={styles.textField}
                InputLabelProps={{
                  className: styles.label,
                }}
              />
              <br />

              <TextField
                variant="filled"
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                className={styles.textField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        position="end"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  className: styles.label,
                }}
              />

              <InputButton
                label="Login"
                link=""
                customClass={styles.submitButton}
              />
              <br />
              <Link className={styles.link} href="signup">
                <p>
                  Don't have an account?
                  <span className={styles.signup}> Sign Up</span>
                </p>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

import Link from "next/link";
import React from "react";
import Grid from "@mui/material/Grid";
import SmallerLogo from "../../public/images/smallerLogo.js";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import styles from "../styles/Login.module.css";
import LoginForm from "@/components/LoginForm.js";
const Login = () => {
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
              <LoginForm />
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

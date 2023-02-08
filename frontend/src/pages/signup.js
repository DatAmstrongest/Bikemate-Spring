import Link from "next/link";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import SmallerLogo from "../../public/images/smallerLogo.js";
import styles from "@/styles/Signup.module.css";
import SignupForm from "@/components/SignUpForm.js";

const Signup = () => {
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
              <SignupForm />
              <Link className={styles.link} href="login">
                <p>
                  Already have an account?
                  <span className={styles.signup}> Login</span>
                </p>
              </Link>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Signup;

import styles from "../styles/Home.module.css";
import Logo from "../../public/images/logo.js";
import InputButton from "../components/InputButton";

import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <h1 className={styles.title}>Welcome to Bikemate</h1>
        </Grid>
        <Grid item xs={12}>
          <Logo fill={styles.logo} />
        </Grid>
        <Grid item xs={12}>
          <InputButton
            label="Login"
            customClass={styles.login_button}
            link="login"
          ></InputButton>
        </Grid>
        <Grid item xs={12}>
          <InputButton
            label="Sign Up"
            link="signup"
            customClass={styles.signup_button}
          ></InputButton>
        </Grid>
      </Grid>
    </>
  );
}

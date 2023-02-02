import styles from "../styles/Home.module.css";
import Logo from "../../public/images/logo.js";
import InputButton from "../components/InputButton";

import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "75vh" }}
    >
      <Grid item>
        <h1 className={styles.title}>Welcome to Bikemate</h1>
      </Grid>
      <Grid item>
        <Logo height="226" width="183" fill={styles.logo} />
      </Grid>
      <Grid marginTop={10} rowSpacing={100} item>
        <InputButton
          label="Login"
          customClass={styles.login_button}
          link="login"
        ></InputButton>
      </Grid>
      <Grid item>
        <InputButton
          label="Sign Up"
          link="signup"
          customClass={styles.signup_button}
        ></InputButton>
      </Grid>
    </Grid>
  );
}

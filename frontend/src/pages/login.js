import Grid from "@mui/material/Grid";
import Logo from "../../public/images/logo.js";
import TextField from "@mui/material/TextField";
import styles from "../styles/Login.module.css";
const Login = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "75vh" }}
    >
      <Grid item xs={12}>
        <Logo fill={styles.logo} />
      </Grid>
      <Grid item xs={12}>
        <h1 className={styles.title}>Bikemate</h1>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
        />
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default Login;

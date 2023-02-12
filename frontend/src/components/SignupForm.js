import React, { SyntheticEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";

import styles from "../styles/SignupForm.module.css";
import InputButton from "./InputButton";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const role = ["user"];
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const submit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        username,
        email,
        password,
        name,
        surname,
        role,
      })
    );
    await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        name,
        surname,
        role,
      }),
    });

    await router.push("/login");
  };

  const router = useRouter();
  return (
    <form onSubmit={submit}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            className={styles.textField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              className: styles.label,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="filled"
            label="Name"
            className={`${styles.textField} ${styles.name}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              className: styles.label,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="filled"
            label="Surname"
            className={styles.textField}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            InputLabelProps={{
              className: styles.label,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Username"
            className={styles.textField}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputLabelProps={{
              className: styles.label,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="filled"
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            className={styles.textField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton position="end" onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              className: styles.label,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <InputButton
            label="Sign Up"
            link=""
            customClass={styles.submitButton}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;

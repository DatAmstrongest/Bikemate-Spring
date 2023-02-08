import React, { SyntheticEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

import styles from "../styles/SignupForm.module.css";
import InputButton from "@/components/InputButton";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const router = useRouter();
  return (
    <form>
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
      <br />
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
      <br />

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

      <InputButton label="Login" link="" customClass={styles.submitButton} />
      <br />
    </form>
  );
};

export default SignupForm;

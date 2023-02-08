import React, { SyntheticEvent, useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";

import InputButton from "@/components/InputButton";
import styles from "../styles/LoginForm.module.css";
const LoginForm = () => {
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
    </form>
  );
};

export default LoginForm;

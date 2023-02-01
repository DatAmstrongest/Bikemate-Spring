import TextField from "@mui/material/TextField";
const LoginTextField = (props) => {
  return (
    <TextField
      id="filled-basic"
      label={props.label}
      variant="filled"
      type={props.type}
    />
  );
};

export default LoginTextField;

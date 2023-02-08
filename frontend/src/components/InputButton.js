import Button from "@mui/material/Button";

const InputButton = (props) => {
  return (
    <Button
      variant="outlined"
      href={props.link}
      className={props.customClass}
      type="submit"
    >
      {props.label}
    </Button>
  );
};

export default InputButton;

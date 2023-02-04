import Grid from "@mui/material/Grid";
import Logo from "../../public/images/logo.js";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "../styles/Login.module.css";
const Login = () => {
  return (
    <Grid className={styles.grid} container spacing={2} direction="column">
      <Grid item>
        <Box textAlign="center">
          <Card className={styles.card} sx={{ boxShadow: 5 }}>
            <CardContent>
              <Logo style={styles.logo} />
              <br />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

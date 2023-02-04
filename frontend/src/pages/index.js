import styles from "../styles/Home.module.css";
import Logo from "../../public/images/logo.js";
import InputButton from "../components/InputButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Grid className={styles.grid} container spacing={2} direction="column">
      <Grid item>
        <Box textAlign="center">
          <Card className={styles.card} sx={{ boxShadow: 5 }}>
            <CardContent>
              <Typography>
                <h1 className={styles.title}>Welcome to Bikemate</h1>
                <br />
                <div>
                  <Logo style={styles.logo} />
                </div>
                <br />
                <InputButton
                  label="Login"
                  customClass={styles.login_button}
                  link="login"
                ></InputButton>
                <br />
                <InputButton
                  label="Sign Up"
                  link="signup"
                  customClass={styles.signup_button}
                ></InputButton>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

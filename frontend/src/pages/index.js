import styles from "../styles/Home.module.css";
import Logo from "../../public/images/logo.js";
import InputButton from "../components/InputButton";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Grid className={styles.grid} container spacing={2} direction="column">
      <Grid item>
        <Box
          textAlign="center"
          sx={{
            width: 600,
            maxWidth: "100%",
          }}
        >
          <Card className={styles.card} sx={{ boxShadow: 5 }}>
            <CardContent>
              <h1 className={styles.title}>Welcome to Bikemate</h1>
              <br />
              <Logo style={styles.logo} />
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
              />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

import "@/styles/globals.css";
import { StyledEngineProvider } from "@mui/material/styles";

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

import "@/styles/globals.css";
import { CacheProvider } from "@emotion/react";
import { TssCacheProvider } from "tss-react";
import createCache from "@emotion/cache";

export default function App({ Component, pageProps }) {
  const muiCache = createCache({
    key: "mui",
    prepend: true,
  });

  const tssCache = createCache({
    key: "tss",
  });
  return (
    <CacheProvider value={muiCache}>
      <TssCacheProvider value={tssCache}>
        <Component {...pageProps} />
      </TssCacheProvider>
    </CacheProvider>
  );
}

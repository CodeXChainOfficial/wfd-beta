import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../styles/fonts.css";
import "../styles/CreateProject.css";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;

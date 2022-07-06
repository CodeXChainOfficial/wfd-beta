import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/theme";
import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/global.css";
import "../styles/ConnectWallet.css";
import "../styles/fonts.css";
import "../styles/CreateProject.css";
import "../styles/transition.css";

import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { KeplrWalletProvider } from "../contexts/keplrWallet";
import { MetamaskProvider } from "../contexts/metamask1";
import { TrustWalletProvider } from "../contexts/trustWallet1";
import { TronLinkProvider } from "../contexts/tronLink1";
import { NearWalletProvider } from "../contexts/nearWallet1";
import { StoreProvider } from "../contexts/store";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <StoreProvider>
      <NearWalletProvider>
        <TronLinkProvider>
          <TrustWalletProvider>
            <KeplrWalletProvider>
              <MetamaskProvider>
                <ChakraProvider resetCSS theme={theme}>
                  <ParallaxProvider>
                    <Layout>
                      <Component {...pageProps} />
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                      />
                    </Layout>
                  </ParallaxProvider>
                </ChakraProvider>
              </MetamaskProvider>
            </KeplrWalletProvider>
          </TrustWalletProvider>
        </TronLinkProvider>
      </NearWalletProvider>
    </StoreProvider>
  );
}

export default App;

import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/themeA";

import "../styles/fonts.css";

import Layout from "../components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { KeplrWalletProvider } from "../contexts/keplrWallet";
import { MetamaskProvider } from "../contexts/metamask";
import { TrustWalletProvider } from "../contexts/trustWallet";
import { TronLinkProvider } from "../contexts/tronLink";
import { NearWalletProvider } from "../contexts/nearWallet";
import { ElrondWebProvider } from "../contexts/elrond";
import { StoreProvider } from "../contexts/store";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <StoreProvider>
      <ElrondWebProvider>
        <NearWalletProvider>
          <TronLinkProvider>
            <TrustWalletProvider>
              <KeplrWalletProvider>
                <MetamaskProvider>
                  <ChakraProvider resetCSS theme={theme}>
                    <Layout>
                      <Component {...pageProps} />
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                      />
                    </Layout>
                  </ChakraProvider>
                </MetamaskProvider>
              </KeplrWalletProvider>
            </TrustWalletProvider>
          </TronLinkProvider>
        </NearWalletProvider>
      </ElrondWebProvider>
    </StoreProvider>
  );
}

export default App;

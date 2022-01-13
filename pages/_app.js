import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import { ShoppingCartContextProvider } from "../store/shopping-cart-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartContextProvider>
      <NotificationContextProvider>
        <Layout>
          <Head>
            <title>Bunichi's Travel Page</title>
            <script
              src="https://kit.fontawesome.com/7162e07bef.js"
              crossorigin="anonymous"
              defer
            ></script>
            <meta
              name="description"
              content="Bunichi's Travel Page, where you can look up and book interesting tours!"
            />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </ShoppingCartContextProvider>
  );
}

export default MyApp;

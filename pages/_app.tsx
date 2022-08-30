import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { NotificationContextProvider } from '../store/NotificationContext';
import { ShoppingCartContextProvider } from '../store/ShoppingCartContext';
import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartContextProvider>
      <NotificationContextProvider>
        <Layout>
          <Head>
            <title>Bunichi's Travel Page</title>
            <script
              src="https://kit.fontawesome.com/7162e07bef.js"
              crossOrigin="anonymous"
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
          <NextNProgress />
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </ShoppingCartContextProvider>
  );
}

export default MyApp;

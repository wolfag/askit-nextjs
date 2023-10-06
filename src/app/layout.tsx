'use client';
import AppFooter from '@/components/app.footer';
import AppHeader from '@/components/app.header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Container from 'react-bootstrap/Container';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((res) => res.json()),
          }}
        >
          <AppHeader />
          <Container>{children}</Container>
          <AppFooter />
          <ToastContainer />
        </SWRConfig>
      </body>
    </html>
  );
}

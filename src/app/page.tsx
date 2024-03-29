"use client";

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@/app/store';
import BoxGrid from '@/components/BoxGrid';
import ModalAuth from '@/components/ModalAuth';

export default function Home({ pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>
      <Provider store={store}>
        <ModalAuth />
        <BoxGrid />
      </Provider>
    </SessionProvider>
  );
}

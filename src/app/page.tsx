"use client";

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@/app/store';
import CreateTask from '@/components/CreateTask/CreateTask';
import Dashboard from '@/components/layout/Dashboard';
import ModalAuth from '@/components/Modals/ModalAuth';

export default function Home({ pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps?.session}>
      <Provider store={store}>
        <CreateTask />
        <ModalAuth />
        <Dashboard />
      </Provider>
    </SessionProvider>
  );
}

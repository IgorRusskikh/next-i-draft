"use client";

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@/app/store';
import Dashboard from '@/components/layout/Dashboard';
import ModalAuth from '@/components/Modals/ModalAuth';
import CreateTask from '@/components/Modals/ModalCreateTask';

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

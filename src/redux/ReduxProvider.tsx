/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import React, { useEffect } from 'react'
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { ToastContainer } from 'react-toastify';
import 'tw-elements';

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
 
  useEffect(() => {
    require('tw-elements');
  }, []);
 
  return (
  <Provider store={store}>
    <Header />
      {children}
      <ToastContainer />
    <Footer />
  </Provider>);
};

export default ReduxProvider;
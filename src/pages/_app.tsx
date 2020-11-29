import React from 'react';

import { AppProps } from 'next/app';

import 'tailwindcss/dist/tailwind.css';
import '../styles/main.css';


// eslint-disable-next-line react/jsx-props-no-spreading
const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;

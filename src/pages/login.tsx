import React from 'react';
import { Config } from 'utils/Config';
import { Meta } from 'layout/Meta';
import Login from 'layout/Login';
import Main from 'templates/Main';


export type PageProps = {
  page: any;
};

const LoginPage = () => (
  <Main
    meta={(
      <Meta
        title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
        description={Config.description}
      />
    )}
  >
    <Login />
  </Main>
);



export default LoginPage;

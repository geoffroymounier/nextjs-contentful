import React from 'react';
import Navbar from '../navigation/Navbar';
import PageContent from '../layout/PageContent';

type IMainProps = {
  meta: React.ReactNode;
  banner?:React.ReactNode;
  children: React.ReactNode;
  header:any
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div>
        {props.banner && <PageContent blocks={[props.banner]} />}

        
          <Navbar {...props.header}/>
        
      </div>

      {props.children}

      <div className="border-t border-gray-300 text-center py-8">
        Made with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
      </div>
    </div>
  </div>
);

export default Main;

import React from 'react';
import Head from 'next/head';

import Calculator from 'components/Calculator';
import Header from 'components/Header';

const CategoryPage: React.FC<any> = () => {
  return (
    <>
      <Head>
        <meta name='robots' content='noindex, nofollow' />
      </Head>
      <Header />
      <Calculator />
    </>
  );
};

export default CategoryPage;

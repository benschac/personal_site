import Head from "next/head";

import React from "react";
import { Navigation } from "../components/Navigation.component";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Benjamin Schachter (benschac)</title>
        <meta
          name="description"
          content="Benjamin Schachter's Personal Site and Blog"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main></main>
    </div>
  );
};

export default Home;

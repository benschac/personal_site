import "../styles/globals.css";
import { NextComponentType } from "next";

type MyAppProps = {
  Component: NextComponentType;
  // TODO
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;

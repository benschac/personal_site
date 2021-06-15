import "../styles/globals.css";
import { NextComponentType } from "next";

import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";

const theme = {
  ...defaultTheme,
};

type MyAppProps = {
  Component: NextComponentType;
  // TODO
  pageProps: any;
};

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        sizes: { ...defaultTheme.sizes, ...theme.sizes },
        colors: { ...defaultTheme.colors, ...theme.colors },
      }}
    >
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

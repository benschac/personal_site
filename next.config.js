// ts-check

const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withMDX((phase, { defaultConfig }) => {
  console.log("hello");
  return {
    images: {
      domains: ["wikipedia.org", "en.wikipedia.org", "benjaminschachter.com"],
    },
    /* config options here */
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  };
});

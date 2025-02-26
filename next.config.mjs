import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const withMdx = nextMDX({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});
const nextConfig = withMdx({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  images: {
    domains: ["i.postimg.cc"], // Add external image domain
  },
});

export default nextConfig;

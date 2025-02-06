import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = withSentryConfig(nextConfig, {
  org: "bigroot",
  project: "javascript-react",
  authToken: "0b6857104e1811ef9faa46bdabe7f23c",
  silent: false,
});
export default nextConfig;

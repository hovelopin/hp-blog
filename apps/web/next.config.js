// @hp/design 패키지를 tranpile 시킨다.
const withTM = require("next-transpile-modules")(["@hp/design"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM(nextConfig);

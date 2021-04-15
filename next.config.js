// @generated: @expo/next-adapter@2.1.67
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withExpo(
  withImages(
    withFonts({
      projectRoot: __dirname,
      distDir: "build",
      target: "serverless",
      reactStrictMode: true,
      webpack(config) {
        config.resolve.modules.push(__dirname);
        return config;
      },
    })
  )
);

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};

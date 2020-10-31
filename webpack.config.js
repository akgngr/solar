module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },

  loaders: [
    {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'file-loader',
        'webp-loader'
      ]
    }
  ],
  
  };

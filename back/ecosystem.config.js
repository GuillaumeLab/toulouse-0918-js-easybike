module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // API Server
    {
      name: 'wcs-easybike-assets-server',
      script: 'index.js',
      env: {
        PORT: 5010,
        NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 5010
      }
    }
  ]
}

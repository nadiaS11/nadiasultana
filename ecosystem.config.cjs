module.exports = {
  apps: [
    {
      name: 'payloadcms-website',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/nadiasultana',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      // SSH connection
      user: 'root',
      host: '31.97.56.77',
      ref: 'origin/main',
      repo: 'git@github.com:nadiaS11/nadiasultana.git',
      path: '/var/www/nadiasultana',

      // Commands to run on the server
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
}

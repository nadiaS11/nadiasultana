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
      user: 'root',
      host: '31.97.56.77',
      ref: 'origin/main',
      repo: 'https://github.com/nadiaS11/nadiasultana.git',
      path: '/var/www/nadiasultana',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': '',
    },
  },
}

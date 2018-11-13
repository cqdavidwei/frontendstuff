module.exports = {
    apps: [
        {
            name: 'infoweb',
            script: 'nuxt',
            args: 'start -H "10.2.56.38"',
            max_restarts: 0,
            cwd: './build',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
}

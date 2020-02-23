const path = require('path')

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env')
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local')
])

module.exports = {
  client: {
    service: {
      name: 'journey-planner',
      url: env.VUE_APP_GRAPHQL_HTTP,
      headers: {
        'ET-Client-Name': env.VUE_APP_CLIENT_NAME,
      },
    },
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}']
  },
}

// Ensure required ENV vars are set
const requiredEnv = [
  'VUE_APP_CLIENT_NAME'
];
const unsetEnv = requiredEnv.filter((env) => !(typeof process.env[env] !== 'undefined'));

if (unsetEnv.length > 0) {
  throw new Error("Required ENV variables are not set: [" + unsetEnv.join(', ') + "]");
}

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
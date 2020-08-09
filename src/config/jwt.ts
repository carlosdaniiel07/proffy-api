export default {
  JWT_SECRET: process.env.JWT_CONFIG || 'my-temp-secret-key',
  JWT_DURATION: '1h'
}

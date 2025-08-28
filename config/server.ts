module.exports = ({ env }) => ({
  host: '0.0.0.0', 
  port: env.int('PORT', 1337), // Render sẽ override PORT
  app: {
    keys: env.array('APP_KEYS', ['defaultKeyA', 'defaultKeyB']),
  },
});
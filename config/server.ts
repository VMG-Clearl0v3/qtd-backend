module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),  // Render sẽ truyền PORT vào biến môi trường
  app: {
    keys: env.array('APP_KEYS'),
  },
});
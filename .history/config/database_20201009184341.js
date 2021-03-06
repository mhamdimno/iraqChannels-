module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env(''),
      },
      options: {
        ssl: false,
      },
    },
  },
});

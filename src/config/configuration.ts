export const Config = () => ({
  nodeConfiguration: {
    environment: process.env.NODE_ENV || 'development',
    port: Number(process.env.NODE_PORT) || 3000,
    accessControlOrigin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN || '*',
    wsUrl: process.env.AWS_WEBSOCKET_CALLBACK_URL,
  },
  database: {
    type: process.env.DB_TYPE || 'postgres',
    masterHost: process.env.DB_HOST,
    slaveHost: process.env.DB_HOST_READ || process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA || 'public',
    synchronize:
      ((process.env.DB_SYNCHRONIZATION == 'true') as boolean) || false,
    retryAttempts: 10,
    retryDelay: 3000,
    keepConnectionAlive: false,
  },
});

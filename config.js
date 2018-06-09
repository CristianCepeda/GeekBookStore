const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default{
  mongodbUri: 'mongodb://localhost:27017/Vic',
  port: env.PORT || 8080
};

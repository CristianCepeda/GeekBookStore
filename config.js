const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default{
  mongodbUri: 'mongodb://localhost:27017/geekBookStoreDB',
  port: env.PORT || 8080,
  expireTime: 24 * 60 * 10,
  secrets:{
    jwt: env.JWT || 'gumball'
  }
};


/*

<!-- MongoDB Atlas
----------------------->
mongodb+srv://ccepe014:<PASSWORD>@geekbookstore-u9379.mongodb.net/test?retryWrites=true

*/

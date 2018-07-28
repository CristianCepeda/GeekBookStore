const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default{
  mongodbUri: 'mongodb+srv://ccepe014:password2018@geekbookstore-u9379.mongodb.net/Vic',
  port: env.PORT || 8080,
  expireTime: 24 * 60 * 10,
  secrets:{
    jwt: env.JWT || 'gumball'
  },
  usersObjectId: '5b5c709daf2fe1c0fe9acd8c'
};


/*

<!-- MongoDB localhost:27017
--------------------------->
mongodb://localhost:27017/geekBookStoreDB

<!-- MongoDB Atlas
----------------------->
mongodb+srv://ccepe014:password2018@geekbookstore-u9379.mongodb.net/test?retryWrites=true
*/

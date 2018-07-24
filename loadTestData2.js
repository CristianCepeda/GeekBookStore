import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  var dbo = db.db('mydb');
  dbo.collection('contests').drop(function(err, delOK){
    if (err) throw err;
    if (delOK) console.log('Collection deleted');
      db.close();
  });
  });

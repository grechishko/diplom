module.exports = {
  // configure the code below with your username, password and mlab database information
  database: 'mongodb://user123:user123@cluster0-shard-00-00-z1urt.mongodb.net:27017,cluster0-shard-00-01-z1urt.mongodb.net:27017,cluster0-shard-00-02-z1urt.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',

  //database: 'mongodb://<username>:<password>@ds12226.mlab.com:12226/meanauthapp',   //prod
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: 'secret'
}

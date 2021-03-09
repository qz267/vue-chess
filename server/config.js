var config = {
    db: {
        options: {
            db: {native_parser: true},
            server: {poolSize: 5},
  //replset: { rs_name: 'myReplicaSetName' },
            //user: 'admin',
            //pass: 'QZ123'
        },
        uri: process.env.MONGO_URL || 'mongodb://localhost/vuegustchess'
    },
    porthttp: process.env.PORT || 3311,
    multicore: false,
    https: true,
    debug: false
}
module.exports = config;

var Sequelize = require('sequelize')
  , sequelize = new Sequelize('malha-logistica', "", "", {
      dialect: "sqlite",
      storage: "./lib/database/malha-logistica.sqlite",
      //logging: false,
  });

/*
var logger = require('winston');

var noTimeStamps = {
    timestamps: false
};
*/

exports.Movie = Movie = sequelize.define('Movie', {
    filePath         : Sequelize.STRING,
    title            : Sequelize.STRING,
    posterURL        : {type: Sequelize.STRING, defaultValue: '/movies/css/img/nodata.jpg'},
    backgroundURL    : {type: Sequelize.STRING, defaultValue: '/movies/css/img/backdrop.jpg'},
    imdbID           : Sequelize.STRING,
    rating           : {type: Sequelize.STRING, defaultValue: 'Unknown'},
    certification    : Sequelize.STRING,
    genre            : {type: Sequelize.STRING, defaultValue: 'Unknown'},
    runtime          : {type: Sequelize.STRING, defaultValue: 'Unknown'},
    overview         : Sequelize.TEXT,
    cdNumber         : Sequelize.INTEGER,
    adult            : Sequelize.BOOLEAN,
    year             : Sequelize.INTEGER,
    hidden           : {type: Sequelize.STRING, defaultValue:"false"}
}, noTimeStamps);

/*
exports.Album = Album = sequelize.define('Album', {
    title           : Sequelize.STRING,
    posterURL       : Sequelize.STRING,
    year            : Sequelize.INTEGER
}, noTimeStamps);

exports.Artist = Artist = sequelize.define('Artist', {
    name             : Sequelize.STRING
}, noTimeStamps);
exports.Track = Track = sequelize.define('Track', {
    title            : Sequelize.STRING,
    order            : Sequelize.INTEGER,
    filePath         : Sequelize.STRING,
}, noTimeStamps);

Artist.hasMany(Album);
Album.hasMany(Track);
Album.belongsTo(Artist);
*/

sequelize.sync()
.success(function () {
     var migrator = sequelize.getMigrator({ path: process.cwd() + '/lib/database/migrations'});
     sequelize.query("SELECT COUNT(*) FROM SequelizeMeta")
     .success(function(cnt) {
         var count = cnt[0]["COUNT(*)"];
         if (count != 0) {
             migrator.migrate()
             .success(function () {
                logger.info("successfully migrated");
            })
             .error(function(err) {
                logger.error("failed to migrate", {error: err});
            });
         }
     })
     .error(function (err) {
         //the SequelizeMeta table doesn't exist so this is a fresh install
         //Have to create the table ourselves (yuck).
         sequelize.query("CREATE TABLE IF NOT EXISTS `SequelizeMeta` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `from` VARCHAR(255), `to` VARCHAR(255))")
         .success(function () {
             migrator.getUndoneMigrations(function(err, migs) {
                 //add all the migrations that haven't been done
                 //to the meta table so sequelize thinks they've been done
                 //as this is a fresh install and the schema matches the latest migration
                 //we don't want sequelize running the migrations
                 var values = [];
                 for (var i = 0; i < migs.length; i++) {
                     var mig = migs[i];
                     values.push("('" + mig.migrationId + "', '" + mig.migrationId + "')");
                 }
                 sequelize.query("INSERT INTO SequelizeMeta ('from', 'to') VALUES " + values.join(",") + ";");
             });
         });
     });
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  'user': String,
  'repo': String,
  'forks': Number,
  'watchers': Number

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (newUser) => {
  // This function should save a repo or repos to MongoDB
  for(var i = 0; i < newUser.length; i++) {
	  var user = new Repo({
	  	'user': newUser[i]['owner']['login'],
	  	'repo': newUser[i]['full_name'],
	  	'forks': newUser[i]['forks_count'],
	  	'watcher': newUser[i]['watchers_count']
	  })

	  user.save(function(err,product) {
	  	console.log('saved to MongoDB');
	  })
  }

}

module.exports.save = save;
module.exports.Repo = Repo;
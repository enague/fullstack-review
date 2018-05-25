const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  'id': Number, //id for repo
  'owner_id': Number,
  'full_name': String, //name of repo
  'html_url': String

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB


}

module.exports.save = save;
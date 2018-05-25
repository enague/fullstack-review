const request = require('request');
const config = require('../config.js');
const promise = require('promise');

let getReposByUsername = (userName) => {
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  return new Promise(function(resolve, reject) {
      request(options, function (err,res,body) {
        if(err) reject (err);
        else resolve(body);
      });
  })
}


module.exports.getReposByUsername = getReposByUsername;
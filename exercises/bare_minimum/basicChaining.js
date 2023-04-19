/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisification = require('./promisification.js')



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  var newReadFilePath = function (readFilePath) {
    return new Promise((resolve, reject)=> {
        fs.readFile(filePath, ((err, data)=> {
          if(err){
            reject(err)
          } else {
            resolve(filePath);
          }
        }))
    })
  }
  var newWriteToFile = function (writeFilePath) {
    return new Promise((resolve, reject)=> {
      fs.writeFile(filePath, ((err, data)=> {
        if(err){
          reject(err)
        } else {
          resolve(filePath);
        }
      }))
  })
  }
  var result = newReadFilePath().then(newWriteToFile())
  return result
  // .then (Promise.promisify(writeFilePath))

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

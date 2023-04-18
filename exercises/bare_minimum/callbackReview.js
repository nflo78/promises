/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, ((err, results) => {
    if (err) {
      // console.log('fs.readFile failed :(\n', err)
      callback(err)
    } else {
      results = results.toString().slice(0, results.indexOf('\n'))
      // console.log(results)
      callback(null, results)
      //'This is a file to read\nthat once it\'s been read\nwill not turn red.' to equal 'This is a file to read'
    }
  })
  )
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  console.log("URL:", url)
  request('get', url, (err, response) => {
    if (err) {
      callback(err)
    } else {
      callback(null, response.statusCode)
    }
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

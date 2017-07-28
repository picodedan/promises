/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  //access filePath
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    //isolate first line
    var linesArr = data.split('\r');
    //return callback(first line)
    return callback(err, linesArr[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  var options = {
    url: url,
  };
  request.get(options, function(err, res) {
    if (err) {
      return callback(err);
    }
    return callback(err, res.statusCode);
  });
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

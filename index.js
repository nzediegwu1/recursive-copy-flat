var path = require('path');
const fs = require('fs');
const flattenDir = require('flatten-dir');

var srcPath = path.join(__dirname + '/raw_gospels'); //current folder
var destPath = path.join(__dirname + '/Gospel'); //Any destination folder

flattenDir(srcPath)
  .then(async files => {
    const operations = files.map(file => {
      const fileName = file.split('\\').pop();
      fs.copyFile(file, destPath + '/' + fileName, err => {
        if (err) throw err;
      });
    });
    await Promise.all(operations);
    console.log('Successfully copied files to target location');
  })
  .catch(err => console.error(err));

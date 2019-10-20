const mv = require('mv');
const path = require('path');
const _ = require('lodash');

module.exports = function (src, dest, keywords, fileType) {
  const finder = require('findit')(src);

  finder.on('file', function (file) {
    if (_.lowerCase(file).includes(_.lowerCase(keywords)) && (path.extname(file) === fileType)) { //check file has keywords
      mv(file, path.join(dest, path.basename(file)), (err) => {
        if (err) {
          console.log("an error occurred moving the file, please try again", file, err);
        } else {
          console.log(`Moving file ${path.basename(file)}`);
          console.log(`File successfully moved in ${dest} folder`)
        }
      })
    }
  });

  finder.on('end', function () {
    console.log("File moving is complete now");
    finder.stop();
})
}
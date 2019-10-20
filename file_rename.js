#! user/bin/env node
const fs = require('fs');
const _ = require('lodash');
const path = require('path');

module.exports = function (src, keywords, replacer) {
    const finder = require('findit')(src);
    finder.on('file', function (file) {
        if (_.lowerCase(file).includes(_.lowerCase(keywords))) {
            const replaced = path.basename(file).replace(keywords, replacer);
            fs.rename(file, path.join(src, replaced), function (err) {
                if (err) console.log("Error in rename", err)
            })
        }
    });

    finder.on('end', function () {
        console.log("File renaming is complete now");
        finder.stop();
    })
}
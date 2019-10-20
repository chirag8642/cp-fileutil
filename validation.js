const validator = require('validator');

module.exports = function(input) {
    return validator.isEmpty(validator.trim(input));
}
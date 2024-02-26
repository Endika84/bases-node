const {getUUID} = require('./get-id.plugin');
const {getAge} = require('./get-age.plugin');
const {http} = require('./http-client');

module.exports = {
    getUUID,
    getAge,
    http,
}
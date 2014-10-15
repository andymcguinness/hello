/**
 * File: backend/routes/index.js
 * Defined: exports.index
 * Description: This file defines the routes for our index.html
 * Dependencies: none
 *
 * @package hello
 */

exports.index = function(req, res) {
    res.sendfile('index.html');
};


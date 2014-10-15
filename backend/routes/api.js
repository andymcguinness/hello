/**
 * File: backend/routes/api.js
 * Defined: exports.api
 * Description: Defines our delightful API routing
 * Dependencies: none
 *
 * @package hello
 */

// /api/hello
exports.hello = function(req, res) {
    res.json({
        message: 'hiya!'
    });
};

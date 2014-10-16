/**
 * File: home/HomeCtrl.js
 * Defined: 'HomeCtrl' controller
 * Description: the controller for the /home route
 * Dependencies: $scope
 *
 * @module hello
 */

hello.controller('HomeCtrl', function ($scope) {
    // message to be output in the partial
    $scope.msg = 'This is in the HomeCtrl controller!';
}); // end HomeCtrl

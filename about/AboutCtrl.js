/**
 * File: about/AboutCtrl.js
 * Defined: 'AboutCtrl' controller
 * Description: the controller for the /about route
 * Dependencies: $scope, $http
 *
 * @module hello
 */

hello.controller('AboutCtrl', function ($scope, $http) {
    $scope.msg = 'This is in the AboutCtrl controller!';

    // $scope.people = ["Allen", "Beth", "Chris", "Dee", "Ellen"];
    // $scope.things = ["Apple", "Baseball", "Chemicals"];
    
    $http({method: 'GET', url: 'feeds/people-feed.json'}).      // $http is one of Angular's wrappers for AJAX calls -- this calls the file at the url feeds/people-feeds.json using a GET method 
          success(function(data, status, headers, config) {
            $scope.people = data.people;                        // if we successfully get some data back, we'll assign it to a $scope variable
          }).
          error(function(data, status, headers, config) {
                console.log('error');
          });
    $http({method: 'GET', url: 'feeds/things-feed.json'}).      // pretty much the same thing! this is not DRY and is not the way we should be calling things -- you should NEVER do $http in the controller; this is merely an example!
          success(function(data, status, headers, config) {
            $scope.things = data.things;
          }).
          error(function(data, status, headers, config) {
                console.log('error');
          });
}); // end AboutCtrl

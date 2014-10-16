/**
 * File: user/UserCtrl.js
 * Defined: 'UserCtrl' controller
 * Description: the controller for the /user route
 * Dependencies: $scope, ResourceFcty
 *
 * @module hello
 */

hello.controller('UserCtrl', function ($scope, ResourceFcty) {
    $scope.msg = 'This is in the UserCtrl controller!';

    $scope.user = new (ResourceFcty('users'));      // create a new instance of our ResourceFcty -- namely, for the 'users' resource
    $scope.users = ResourceFcty('users').query();   // general query to the '/v1/users' route
    $scope.save = function() {                      // used in the partials-user-new.html file
        $scope.user.username = $scope.username;     // assign the username and password as parameters
        $scope.user.password = $scope.password;
        $scope.user.$save();                        // $resource's $save() function -- using the parameters set above
        $scope.saveMsg = "User submitted!";         // just for UI purposes :)
    };
}); // end UserCtrl

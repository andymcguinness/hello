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

    $scope.user = new (ResourceFcty('users'));
    $scope.users = ResourceFcty('users').query();
    $scope.save = function() {
        $scope.user.username = $scope.username;
        $scope.user.password = $scope.password;
        $scope.user.$save();
        $scope.saveMsg = "User submitted!"; 
    };
}); // end UserCtrl

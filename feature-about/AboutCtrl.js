hello.controller('AboutCtrl', function ($scope, $http) {
    $scope.msg = 'This is in the AboutCtrl controller!';

    // $scope.people = ["Allen", "Beth", "Chris", "Dee", "Ellen"];
    // $scope.things = ["Apple", "Baseball", "Chemicals"];
    
    $http({method: 'GET', url: 'feeds/people-feed.json'}).
          success(function(data, status, headers, config) {
            $scope.people = data.people;
          }).
          error(function(data, status, headers, config) {
                console.log('error');
          });
    $http({method: 'GET', url: 'feeds/things-feed.json'}).
          success(function(data, status, headers, config) {
            $scope.things = data.things;
          }).
          error(function(data, status, headers, config) {
                console.log('error');
          });
});

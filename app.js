/**
 * File: app.js
 * Defined: 'hello' module
 * Description: Declaration of the 'hello' module, as well as its routes
 * Dependencies: ui.router
 *
 * @module hello
 */

var hello = angular
    .module('hello', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
    
    /* Begin ui.router */
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        // Home state 
        .state('home', {
            url: '/home',
            templateUrl: 'home/partial-home.html',
            controller: 'HomeCtrl'
        })
        
        // About state 
        .state('about', {
            url: '/about',
            templateUrl: 'about/partial-about.html',
            controller: 'AboutCtrl'     
        })
            // About nested view 1 -- people
            .state('about.people', {
                url: '/people',
                templateUrl: 'about/partial-about-people.html',
                controller: 'AboutCtrl'
            })
            // About nested view 2 -- things
            .state('about.things', {
                url: '/things',
                templateUrl: 'about/partial-about-things.html',
                controller: 'AboutCtrl'
            })
        
        // User state
        .state('user', {
            url: '/user',
            templateUrl: 'user/partial-user.html',
            controller: 'UserCtrl'
        });
        
}); // end @module 'hello'


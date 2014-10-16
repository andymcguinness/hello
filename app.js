/**
 * File: app.js
 * Defined: 'hello' module
 * Description: Declaration of the 'hello' module, as well as its routes
 * Dependencies: ui.router, ngResource
 *
 * @module hello
 * @package hello
 */

// the 'hello' variable will hold a reference to our module -- remember it!
var hello = angular
    .module('hello', ['ui.router', 'ngResource']) // dependency injection here -- two modules not provided within Angular natively that we are using (included via script tags in index.html)
    .config(function($stateProvider, $urlRouterProvider, $controllerProvider, $provide, $compileProvider) { // all of these providers are Angular methods
    
    /* Begin ui.router */
    // if the user tries to enter a route that we haven't defined below, they'll be redirected
    $urlRouterProvider.otherwise('/home');
    
    // here we begin setting the frontend routes
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
        })
            // User nested view 1 -- all users
            .state('user.users', {
                url: '/users',
                templateUrl: 'user/partial-user-users.html',
                controller: 'UserCtrl'
            })
            // User nested view 2 -- add a user
            .state('user.new', {
                url: '/new',
                templateUrl: 'user/partial-user-new.html',
                controller: 'UserCtrl'
            });
        
}); // end @module 'hello'


/**
 * File: app.js
 * Defined: 'hello' module
 * Description: Declaration of the 'hello' module, as well as its routes
 * Dependencies: ui.router, ngResource
 *
 * @module hello
 */

var hello = angular
    .module('hello', ['ui.router', 'ngResource'])
    .config(function($stateProvider, $urlRouterProvider, $controllerProvider, $provide, $compileProvider) {
    
    /* Asynchronous Definitions */
    hello._controller   = hello.controller;
    hello._service      = hello.service;
    hello._factory      = hello.factory;
    hello._directive    = hello.directive;

    hello.controller    = function(name, constructor) {
        $controllerProvider.register(name, constructor);
        return(this);
    }
    hello.service       = function(name, constructor) {
        $provide.service(name, constructor);
        return(this);
    }
    hello.factory       = function(name, factory) {
        $provide.factory(name, factory);
        return(this);
    }
    hello.directive     = function(name, factory) {
        $compileProvider.directive(name, factory);
        return(this);
    }

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
        })
            // User nested view 1 -- all users
            .state('user.users', {
                url: '/users',
                templateUrl: 'user/partial-user-users.html',
                controller: 'UserCtrl',
                resolve: {
                    users: function(ResourceFcty) {
                        return ResourceFcty('users').get();
                    }
                }
            })
            // User nested view 2 -- add a user
            .state('user.new', {
                url: '/new',
                templateUrl: 'user/partial-user-new.html',
                controller: 'UserCtrl'
            });
        
}); // end @module 'hello'


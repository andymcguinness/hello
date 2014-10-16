/**
 * File: common/ResourceFcty.js
 * Defined: ResourceFactory
 * Description: Recreating the catch-all resource factory
 * Dependencies: $resource
 *
 * @module hello
 */

hello.factory('ResourceFcty', [
    '$resource',
    function($resource) { // $resource is an Angular 'plugin' if you will
        return function(resourceName) { // taking the resource name -- so you would call ResourceFcty('users')
            return $resource(
                '/v1/:resourceName/:id',    // the resource name would then be injected in here to create an API route -- so ResourceFcty('users') would build /v1/users/
                {resourceName: resourceName, id: '@id'},
                {
                    put: {method: 'PUT'}    // defining a put method, using $resource's syntax to tell it that ResourceFcty(resourceName).put() is using the PUT method
                }
            );
        };
    }
]);

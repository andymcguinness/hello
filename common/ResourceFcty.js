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
    function($resource) {
        return function(resourceName) {
            return $resource(
                '/v1/:resourceName/:id',
                {resourceName: resourceName, id: '@id'},
                {
                    put: {method: 'PUT'}
                }
            );
        };
    }
]);

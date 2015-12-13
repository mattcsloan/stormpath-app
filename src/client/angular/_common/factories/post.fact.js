(function() {
  'use strict';

  angular
    .module('app.factories')
    .factory('Post', post)
  ;

  /* @ngInject */
  function post($resource) {
    var uri = '/api/posts';

    return {
      post: $resource(uri, {}, {
        getAll: {
          method: 'GET',
          isArray: true
        },
        createNew: {
          method: 'POST'
        }
      }) 
    }
  }
})();
'use strict';

/**
 * @ngdoc service
 * @name carouselApp.galleryService
 * @description
 * # galleryService
 * Service in the carouselApp.
 */
angular.module('carouselApp')
  .service('galleryService', ['$http', '$q', function($http, $q) {
    function _getGallery() {
      return $q(function(resolve, reject) {
        $http({
          method: 'GET',
          url: '/data/gallery.json'
        }).then(function(response) {
          resolve(response.data);
        }, function(response) {
          reject(response);
        });
      });
    }
    return {
      getGallery: _getGallery
    };
  }]);

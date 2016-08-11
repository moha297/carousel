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
    var API_END_POINT = 'http://api.healthline.com/api/service/2.0/slideshow/content',
      sampleQp = 'partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en';

    /**
     * To show images in the UI we need to make sure urls are absolute
     * with respect to healthline
     */
    function _processGalleryData(gallery) {
      if (gallery && gallery.data && gallery.data.length > 0) {
        for (var i = 0; i < gallery.data.length; i++) {
          var slides = gallery.data[i].slides;
          if (slides && slides.length) {
            for (var j = 0; j < slides.length; j++) {
              if (slides[j].image && slides[j].image.imageUrl) {
                // Convert to absolute path of healthline.com
                slides[j].image.imageUrl = 'http://www.healthline.com/' + slides[j].image.imageUrl;
              }
            }
          }

        }
      }
      return gallery;
    }

    /**
     * Get the url to hit for data
     */
    function getGalleryUrl() {
      return API_END_POINT + '?' + sampleQp + '';
    }

    function _getGallery() {
      var url = getGalleryUrl() + '&callback=JSON_CALLBACK';
      return $q(function(resolve, reject) {
        /**
          * We are levearging jsonp to get data from healthline api endpoint
          */
        $http.jsonp(url).then(function(response) {
          resolve(_processGalleryData(response.data));
        }, function(response) {
          reject(response);
        });
      });
    }
    return {
      getGallery: _getGallery
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('carouselApp')
  .directive('carousel', function() {
    return {
      templateUrl: 'views/directives/carousel.html',
      restrict: 'E',
      replace: true,
      scope:{
        gallery:"=gallery",
        album:"=album"
      },
      link: function postLink(scope, element /*, attrs*/ ) {

        scope.$watch('gallery', function(newValue, oldValue) {
          console.log(newValue);
        });
      }
    };
  });

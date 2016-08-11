'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:slide
 * @description
 * # slide
 */
angular.module('carouselApp')
  .directive('slide', function() {
    return {
      templateUrl: 'views/directives/slide.html',
      restrict: 'E',
      replace: true,
      scope: {
        data: "=data",
        slideWidth: "@"
      },
      link: function postLink( /*scope, element, attrs*/ ) {

        //Does nothing as of now
        //interpolation took care of height and width

      }
    };
  });

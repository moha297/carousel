'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:slide
 * @description
 * # slide
 */
angular.module('carouselApp')
  .directive('slide', function () {
    return {
      templateUrl: 'views/directives/slide.html',
      restrict: 'E',
      replace: true,
      scope:{
        photo:"=photo"
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });

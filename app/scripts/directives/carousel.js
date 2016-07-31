'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('carouselApp')
  .directive('carousel', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the carousel directive');
      }
    };
  });

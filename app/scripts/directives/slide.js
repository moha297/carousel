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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the slide directive');
      }
    };
  });

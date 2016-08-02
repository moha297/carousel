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
        photos:"=photos",
        album:"=album"
      },
      link: function postLink(scope, element /*, attrs*/ ) {
        var slideCont = element.find('.slides-cont');
        var containerWidth = slideCont.width(),
            containerHeight = slideCont.height();
        scope.slideW = containerWidth;
        scope.slideH = containerHeight;
        scope.$watch('photos', function(newValue, oldValue) {
          var cnt = newValue.length;
          scope.reelWidth = scope.slideW * cnt;
          scope.slideList = newValue;
        });
      }
    };
  });

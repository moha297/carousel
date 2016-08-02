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
      scope: {
        photos: "=photos",
        album: "=album"
      },
      link: function postLink(scope, element /*, attrs*/ ) {
        var slideCont = element.find('.slides-cont');
        // Good old jquery
        var containerWidth = slideCont.width(),
          containerHeight = slideCont.height();

        // Set the size of slides based on container
        scope.slideW = containerWidth;
        scope.slideH = containerHeight;

        //Slider original position
        scope.slideVal = 0;

        scope.currentIndex = 0;

        // We watch the photos data to get things in right order
        scope.$watch('photos', function(newValue, oldValue) {
          var cnt = newValue.length; //number of photos in album
          scope.slideCount = cnt;
          scope.reelWidth = scope.slideW * scope.slideCount; // reel size based on number of photos
          // This will take the photos to the view layer
          scope.slideList = newValue;
        });


        // Handler for left arrow click event. Moves the slider left.
        scope.leftArrow = function(){
          if(scope.currentIndex > 0) {
            scope.currentIndex--;
            scope.slideVal = scope.currentIndex * scope.slideW;
          }
        };
        // Handler for right arrow click event. Moves the slider right.
        scope.rightArrow = function(){
          if(scope.currentIndex < scope.slideCount-1) {
            scope.currentIndex++;
            scope.slideVal = scope.currentIndex * scope.slideW;
          }
        };
      }
    };
  });

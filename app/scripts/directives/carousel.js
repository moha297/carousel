'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('carouselApp')
  .directive('carousel', ['$window', function($window) {
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

        //Slider original position
        scope.slideVal = 0;

        scope.currentIndex = 0;

        function calculate() {
          // Good old jquery
          var containerWidth = slideCont.width(),
            containerHeight = slideCont.height();

          // Set the size of slides based on container
          scope.slideW = containerWidth;
          scope.slideH = containerHeight;

          scope.reelWidth = scope.slideW * scope.slideCount; // reel size based on number of photos
          scope.thumbnailReelWidth = ((scope.slideCount - 1) * 112) + 163; // reel size based on thumbnails
        }

        // We watch the photos data to get things in right order
        scope.$watch('photos', function(newValue, oldValue) {
          var cnt = newValue.length; //number of photos in album
          scope.slideCount = cnt;

          //calculate the view size attributes
          calculate();

          // This will take the photos to the view layer
          scope.slideList = newValue;
        });


        // Handler for left arrow click event. Moves the slider left.
        scope.leftArrow = function() {
          if (scope.currentIndex > 0) {
            scope.currentIndex--;
            scope.slideVal = scope.currentIndex * scope.slideW;
          }
        };
        // Handler for right arrow click event. Moves the slider right.
        scope.rightArrow = function() {
          if (scope.currentIndex < scope.slideCount - 1) {
            scope.currentIndex++;
            scope.slideVal = scope.currentIndex * scope.slideW;
          }
        };

        // Thumbnails manipulate the slides using this
        scope.moveTo = function(index) {
          if (index < scope.slideCount && index >= 0) {
            scope.currentIndex = index;
            scope.slideVal = scope.currentIndex * scope.slideW;
          }
        };


        //Listen to window resize and re-calculate the gallery sizes
        var timer;

        //leverages settimeout to optimize the size calculations
        // Resize event is fired continously as window is changed
        // We defer by 300ms to decrease invocations for calculations
        function resizeListener() {
          if (timer) {
            window.clearTimeout(timer);
          }
          timer = window.setTimeout(function() {
            console.log("resize")
            scope.$apply(function() {
              calculate();
            });
          }, 300);

        }
        angular.element($window).on('resize', resizeListener);
        scope.$on('destroy', function() {
          if (timer) {
            window.clearTimeout(timer);
          }
          angular.element($window).off('resize', resizeListener);
        });


      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name carouselApp.directive:carousel
 * @description Carousel  Directive that takes album and photos data as attributes
 * # carousel
 */
angular.module('carouselApp')
  .directive('carousel', ['$window', 'trackingService', function($window, trackingService) {
    return {
      templateUrl: 'views/directives/carousel.html',
      restrict: 'E',
      replace: true,
      scope: {
        slides: "=slides",
        metaData: "=",
        name: "@",
        trackingId: "@"
      },
      link: function postLink(scope, element, attrs) {
        var slideCont = element.find('.slides-cont');

        //Slider original position
        scope.slideVal = 0;

        scope.currentIndex = 0;

        // pointer to the next slide to be injected
        scope.nextSlideIndex;

        function calculate() {
          // Good old jquery
          var containerWidth = slideCont.width();

          // Set the size of slides based on container
          scope.slideW = containerWidth;

          scope.reelWidth = scope.slideW * scope.slideCount; // reel size based on number of photos
        }

        // We watch the photos data to get things in right order
        scope.$watch('slides', function(newValue, oldValue) {

          var cnt = newValue.length; //number of photos in album
          scope.slideCount = cnt;

          //calculate the view size attributes
          calculate();

          //Preserve all the slides set
          scope.allSlides = newValue;

          // This will take the slides to the view layer -  only the first two slides are injected
          scope.slideList = [];
          scope.nextSlideIndex = 0;
          // Push the first two slides
          scope.slideList.push(scope.allSlides[scope.nextSlideIndex++]);
          scope.slideList.push(scope.allSlides[scope.nextSlideIndex++]);

        });



        /**
         *Handler for left arrow click event. Moves the slider left.
         */
        scope.leftArrow = function() {
          if (scope.currentIndex > 0) {
            scope.currentIndex--;
            scope.slideVal = scope.currentIndex * scope.slideW;

            if (attrs.trackingId) {
              trackingService.trackClick({
                'contentid': attrs.trackingId,
                'action': 'left-arrow-click'
              });
            }
          }



        };

        function pushNextSlidesIntoReel(){
          if(scope.nextSlideIndex < scope.allSlides.length) {
            // Push only till the last slide is added
            scope.slideList.push(scope.allSlides[scope.nextSlideIndex++]);
          }

        }

        // Handler for right arrow click event. Moves the slider right.
        scope.rightArrow = function() {
          if (scope.currentIndex < scope.slideCount - 1) {
            scope.currentIndex++;
            scope.slideVal = scope.currentIndex * scope.slideW;
            // Add another node from slide list
            pushNextSlidesIntoReel();
            if (attrs.trackingId) {
              trackingService.trackClick({
                'contentid': attrs.trackingId,
                'action': 'right-arrow-click'
              });
            }
          }



        };



        //Listen to window resize and re-calculate the gallery sizes
        var timer;

        //leverages settimeout to optimize the size calculations
        // Resize event is fired continously as window is changed
        // We defer by 200ms to decrease invocations for calculations
        function resizeListener() {
          if (timer) {
            window.clearTimeout(timer);
          }
          timer = window.setTimeout(function() {
            console.log("resize")
            scope.$apply(function() {
              calculate();
            });
          }, 200);

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

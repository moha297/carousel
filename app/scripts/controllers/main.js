'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MainCtrl', function($scope, $filter, gallery) {
    function getAuthorString(authors) {
      var str = '';
      if (authors.length > 0) {
        if (authors.length > 1) {
          var lastAuth = authors.splice(authors.length - 1, 1);
          str += authors.join(', ');
          str += ' and ' + lastAuth;
        } else {
          str = authors[0];
        }
      }
      return str;
    }



    // Sort interface handling

    $scope.isDefaultSort = true;
    function setDefaultSlidesData() {
      $scope.slides = gallery.data[0].slides;
    }

    var alphaSortedSlides;

    function setAlphaSortedSlides() {
      if (!alphaSortedSlides) {
        // Create a copy (will happen only one time) and orderBy title
        alphaSortedSlides = $filter('orderBy')(angular.copy(gallery.data[0].slides), 'title');
      }

      $scope.slides = alphaSortedSlides;
    }


    $scope.defaultSort = function() {
      setDefaultSlidesData();
      $scope.isDefaultSort = true;
    };

    $scope.alphaSort = function() {
      setAlphaSortedSlides();
      $scope.isDefaultSort = false;
    };

    // Send things to view
    $scope.meta = {
      id: gallery.data[0].nid,
      title: gallery.data[0].title,
      author: getAuthorString(gallery.data[0].authfull)
    };

    setDefaultSlidesData();

  });

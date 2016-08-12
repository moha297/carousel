'use strict';

/**
 * @ngdoc function
 * @name carouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carouselApp
 */
angular.module('carouselApp')
  .controller('MainCtrl', function($scope, gallery) {
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
    $scope.slides = gallery.data[0].slides;
    $scope.meta = {
      id:gallery.data[0].nid,
      title: gallery.data[0].title,
      author: getAuthorString(gallery.data[0].authfull)
    }

  });

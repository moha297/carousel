'use strict';

/**
 * @ngdoc service
 * @name carouselApp.trackingService
 * @description This service is one stop-shop for all tracking needs
 * # trackingService
 * Service in the carouselApp.
 */
angular.module('carouselApp')
  .service('trackingService', function() {

    // Small utility function (can also be living in small lib or utility service)
    function _mapToQueryString(map) {
      var q = '?';
      $.each(map, (key,val) => {
        var pVal = key + '=' + encodeURIComponent(val);
        if (q !== '?') {
          q += '&' + pVal;
        } else {
          q += pVal;
        }
      });
      return q;
    }

    /**
     * Send a tracking event by adding a pixel to the body as an image tag
     * Data goes in the get request params.
     * This can be done through a CORS but a image pixel will have better browser support
     */
    function injectPixel(params) {
      var p = params || {};

      // Add a cache buster to params
      params["t"] = new Date().getTime();
      var url = 'http://www.healthline.com/images/clear.gif' + _mapToQueryString(params);
      var bodyNode = document.getElementsByTagName('body')[0],
        i = document.createElement('img');
      i.setAttribute('src', url);
      i.setAttribute('id', new Date().getTime() + '_pxl');
      i.onload = function() {
        // Delete the image node created
        bodyNode.removeChild(i);
      }
      bodyNode.appendChild(i);
    }

    /**
     * Generic Click action api exposed from service. Takes in data and
     * delegates to the injectPixel
     */
    function _trackClickAction(data) {
      var d = data || {};
      d.type = "Click";
      injectPixel(d);
    }
    return {
      trackClick: _trackClickAction
    }
  });

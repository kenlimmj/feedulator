/*
 * @Author: Lim Mingjie, Kenneth
 * @Date:   2014-12-03 01:30:15
 * @Last Modified by:   Lim Mingjie, Kenneth
 * @Last Modified time: 2014-12-11 02:17:57
 */

'use strict';

angular.module('app.common-filters', [])
    .filter('precision', clampPrecision);

/**
 * @ngdoc filter
 * @name  app.common-filters.filter: precision
 * @function
 *
 * @param {Number} val The number of significant figures to be used.
 * @return {Number} The input number clamped to the specified number of significant figures.
 */
function clampPrecision() {
    return function(input, val) {
        if (input && !isNaN(input)) {
            return Number(input.toPrecision(val));
        } else {
            return input;
        }
    };
}

/*global define*/
define([
        '../Core/freezeObject'
], function(
        freezeObject) {
    'use strict';

    // TODO : rename to something shorter?
    var Cesium3DTileColorBlendMode = {
        HIGHLIGHT : 0,
        REPLACE : 1,
        MIX : 2
    };

    return freezeObject(Cesium3DTileColorBlendMode);
});

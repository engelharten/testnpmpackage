'use strict';

/**
 * Adds commas to a number
 * @return {string}
 */
module.exports = function() {
    var skiResorts = [
        'chamonix', 
        'åre',
        'st anton',
        'bansko',
        'courmayeur',
        'sierra nevada',
        'kaprun',
        'garmisch partenkirchen',
        'romme'
    ];    
    return skiResorts[Math.floor(Math.random() * skiResorts.length)];
};
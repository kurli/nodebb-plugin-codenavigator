/**
 * Created by GuangzhenLi on 18-6-17.
 * Author Guangzhen Li (guangzhen@hotmail.com)
 * Link http://opengrok.club
 */


(function(module) {
    "use strict";
    var CodeNavigator = {},
        embed = '<div class="video-container">' +
            '<button class="btn">Hello</button>' +
            '</div>';

    CodeNavigator.parse = function(postContent, callback) {
        var	regularUrl = /<a href=['"]([^'"]*?.git)['"]>(.*?)<\/a>/;

        if (postContent.match(regularUrl)) {
            postContent = postContent.replace(regularUrl, embed);
        }

        callback(null, postContent);
    };

    module.exports = CodeNavigator;
}(module));

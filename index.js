/**
 * Created by GuangzhenLi on 18-6-17.
 * Author Guangzhen Li (guangzhen@hotmail.com)
 * Link http://opengrok.club
 */

    var winston = require('winston');
    var CodeNavigator = {},
        embed = "<button class='btn git-btn' component='topic/git-clone' name='$1' style='margin: 5px'>$3</button>";

    CodeNavigator.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            callback(null, data);
            return;
        }
        var postContent = data.postData.content;
        var	regularUrl = /<a href=['"]([^'"]*?.git\/*)['"](.*?)>(.*?)<\/a>/g;
        if (postContent.match(regularUrl)) {
            postContent = postContent.replace(regularUrl, embed);
            data.postData.content = postContent;
        }

        callback(null, data);
    };

    module.exports = CodeNavigator;

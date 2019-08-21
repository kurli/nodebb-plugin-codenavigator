"use strict";

var CodeNavigator = {};

$(window).on("action:topic.loading", function(event, data){
    var topicContainer = $('.topic');
    topicContainer.on('click', '[component="topic/git-clone"]', function (e) {
        var userAgent = navigator.userAgent;
        // If CodeNavigator webview
        if (userAgent.indexOf('CodeNavigator') > 0) {
            location.href = e.target.name;
        } else if (userAgent.indexOf('iPhone') != -1 || userAgent.indexOf('iPad') != -1) {
            var visibleChange;
            location.href = "codenavigator://git.clone?" + e.target.name;
            var appChecker = function() {
                document.removeEventListener('visibilitychange', visibleChange);
                bootbox.confirm("CodeNavigator not found, download from AppStore?", function(confirm){
                    if (confirm == true) {
                        if (userAgent.indexOf('iPhone') != -1) {
                            location.href = 'http://itunes.apple.com/cn/app/codenavigator-for-iphone/id536268810?mt=8';
                        } else {
                            location.href = 'http://itunes.apple.com/cn/app/codenavigator/id492480832?mt=8';
                        }
                    }
                });
            };
            var timer = setTimeout(appChecker, 2000);
            visibleChange = function() {
                cocument.removeEventListener('visibilitychange', visibleChange);
                if (document.visibilityState === 'visible') {
                } else {
                    clearTimeout(timer);
                }
            }
            document.addEventListener("visibilitychange", visibleChange);
        } else {
            window.open(e.target.name, "_blank");
        }
        return false;
    });
});


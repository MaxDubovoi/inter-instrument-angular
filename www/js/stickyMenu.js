var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"}
    ]

};
BrowserDetect.init();
if(BrowserDetect.browser=='Explorer'&&BrowserDetect.version<=8)
{
    document.body.innerHTML = '<h3>Your browser is old. Update your browser <a href="http://besplatnye-programmy.com/browser/">there </a></h3>';
}
document.addEventListener("DOMContentLoaded", function(event) {
    var menuOffsetLeft, menu;

    if(!isMobile.any()) {
        setTimeout(function(){
            menu = document.querySelector('.navigation-site');
            var leftSide = document.querySelector('.left-side');
            var menuHolder = document.querySelector('.navigation-holder');
            var fixedHolder = document.querySelector('.fixed-holder');
            var body = document.getElementsByTagName('body')[0];

            var origOffsetY = menuHolder.offsetTop;

            if (window.scrollY >= origOffsetY && window.innerWidth > 1225)
                body.classList.add('sticky');
            else if (window.innerWidth < 1225)
                fixedHolder.classList.add('sticky-holder');

            function onScroll(e) {
                if (window.scrollY >= origOffsetY && window.innerWidth > 1225) {
                    body.classList.add('sticky');
                } else {
                    body.classList.remove('sticky');
                    menuHolder.style.left = '';
                }

            }

            document.addEventListener('scroll', onScroll);

            window.onresize = function () {
                if (window.innerWidth < 1225) {
                    body.classList.remove('sticky');
                    fixedHolder.classList.add('sticky-holder');
                } else {
                    fixedHolder.classList.remove('sticky-holder');
                }
            }
        }, 200);
    }
});

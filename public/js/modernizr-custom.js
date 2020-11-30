/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgpositionshorthand-bgpositionxy-bgsizecover-canvas-checked-cssanimations-csscalc-cssfilters-cssgradients-cssgrid_cssgridlegacy-csstransitions-datauri-flexbox-flexboxlegacy-flexboxtweener-fontface-inlinesvg-inputtypes-opacity-placeholder-queryselector-requestanimationframe-svg-touchevents-video-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in A)if(A.hasOwnProperty(l)){if(e=[],t=A[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),w.push((o?"":"no-")+s.join("-"))}}function i(e){var t=T.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?T.className.baseVal=t:T.className=t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){if("object"==typeof e)for(var n in e)R(e,n)&&l(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,s,l,c,d="modernizr",f=a("div"),p=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:d+(r+1),f.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=c,T.offsetHeight):f.parentNode.removeChild(f),!!s}function d(e,t){return!!~(""+e).indexOf(t)}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(g(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+g(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function v(e,t,o,i){function l(){c&&(delete I.style,delete I.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var c,f,p,g,h,v=["modernizr","tspan","samp"];!I.style&&v.length;)c=!0,I.modElem=a(v.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],h=I.style[g],d(g,"-")&&(g=s(g)),I.style[g]!==n){if(i||r(o,"undefined"))return l(),"pfx"==t?g:!0;try{I.style[g]=o}catch(y){}if(I.style[g]!=h)return l(),"pfx"==t?g:!0}return l(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+$.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,i):(s=(e+" "+q.join(a+" ")+a).split(" "),p(s,t,n))}function x(e,t,r){return y(e,n,n,t,r)}var w=[],A=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){A.push({name:e,fn:t,options:n})},addAsyncTest:function(e){A.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("queryselector","querySelector"in t&&"querySelectorAll"in t),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T=t.documentElement,C="svg"===T.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=a("video"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("bgpositionshorthand",function(){var e=a("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),Modernizr.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var S=a("input"),_="search tel url email datetime date month week time datetime-local number range color".split(" "),k={};Modernizr.inputtypes=function(e){for(var r,o,i,a=e.length,s="1)",l=0;a>l;l++)S.setAttribute("type",r=e[l]),i="text"!==S.type&&"style"in S,i&&(S.value=s,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&S.style.WebkitAppearance!==n?(T.appendChild(S),o=t.defaultView,i=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,T.removeChild(S)):/^(search|tel)$/.test(r)||(i=/^(url|email)$/.test(r)?S.checkValidity&&S.checkValidity()===!1:S.value!=s)),k[e[l]]=!!i;return k}(_);var P=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=P,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=a("a");return n.style.cssText=e+P.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,i=P.length-1;i>o;o++)e=0===o?"to ":"",r+=t+P[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=a("a"),l=s.style;return l.cssText=r,(""+l.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=a("a").style;return e.cssText=P.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var z="CSS"in e&&"supports"in e.CSS,E="supportsCSS"in e;Modernizr.addTest("supports",z||E);var R;!function(){var e={}.hasOwnProperty;R=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),b._l={},b.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=l}),Modernizr.addAsyncTest(function(){function e(){var e=new Image;e.onerror=function(){l("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=!1},e.onload=function(){l("datauri",!0),Modernizr.datauri=new Boolean(!0),Modernizr.datauri.over32kb=1==e.width&&1==e.height};for(var t="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.length<33e3;)t="\r\n"+t;e.src="data:image/gif;base64,"+t}-1!==navigator.userAgent.indexOf("MSIE 7.")&&setTimeout(function(){l("datauri",!1)},10);var t=new Image;t.onerror=function(){l("datauri",!1)},t.onload=function(){1==t.width&&1==t.height?e():l("datauri",!1)},t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="});var O=b.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");O(r,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("checked",function(){return O("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var j=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();j?Modernizr.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)});var B="Moz O ms Webkit",$=b._config.usePrefixes?B.split(" "):[];b._cssomPrefixes=$;var N=function(t){var r,o=P.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=P[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};b.atRule=N;var q=b._config.usePrefixes?B.toLowerCase().split(" "):[];b._domPrefixes=q;var L={elem:a("modernizr")};Modernizr._q.push(function(){delete L.elem});var I={style:L.elem.style};Modernizr._q.unshift(function(){delete I.style}),b.testAllProps=y;var U=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=s(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("requestanimationframe",!!U("requestAnimationFrame",e),{aliases:["raf"]}),b.testAllProps=x,Modernizr.addTest("cssanimations",x("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return x("backgroundPositionX","3px",!0)&&x("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",x("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",x("backgroundSize","cover")),Modernizr.addTest("cssgridlegacy",x("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",x("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return x("filter","blur(2px)");var e=a("a");return e.style.cssText=P.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",x("flexAlign","end",!0)),Modernizr.addTest("csstransitions",x("transition","all",!0)),o(),i(w),delete b.addTest,delete b.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);
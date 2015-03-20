(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! yaks_shims 2015-03-19 */
!window.addEventListener&&function(a,b,c,d,e,f,g){a[d]=b[d]=c[d]=function(a,b){var c=this;g.unshift([c,a,b,function(a){a.currentTarget=c,a.preventDefault=function(){a.returnValue=!1},a.stopPropagation=function(){a.cancelBubble=!0},a.target=a.srcElement||c,b.call(c,a)}]),this.attachEvent("on"+a,g[0][3])},a[e]=b[e]=c[e]=function(a,b){for(var c,d=0;c=g[d];++d)if(c[0]==this&&c[1]==a&&c[2]==b)return this.detachEvent("on"+a,g.splice(d,1)[0][3])},a[f]=b[f]=c[f]=function(a){return this.fireEvent("on"+a.type,a)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[]),function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.returnExports=b()}(this,function(){function a(){}function b(a){return a=+a,a!==a?a=0:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(a>0||-1)*Math.floor(Math.abs(a))),a}function c(a){var b=typeof a;return null===a||"undefined"===b||"boolean"===b||"number"===b||"string"===b}function d(a){var b,d,e;if(c(a))return a;if(d=a.valueOf,"function"==typeof d&&(b=d.call(a),c(b)))return b;if(e=a.toString,"function"==typeof e&&(b=e.call(a),c(b)))return b;throw new TypeError}Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if("function"!=typeof c)throw new TypeError("Function.prototype.bind called on incompatible "+c);for(var d=m.call(arguments,1),e=function(){if(this instanceof i){var a=c.apply(this,d.concat(m.call(arguments)));return Object(a)===a?a:this}return c.apply(b,d.concat(m.call(arguments)))},f=Math.max(0,c.length-d.length),g=[],h=0;f>h;h++)g.push("$"+h);var i=Function("binder","return function("+g.join(",")+"){return binder.apply(this,arguments)}")(e);return c.prototype&&(a.prototype=c.prototype,i.prototype=new a,a.prototype=null),i});var e,f,g,h,i,j=Function.prototype.call,k=Array.prototype,l=Object.prototype,m=k.slice,n=j.bind(l.toString),o=j.bind(l.hasOwnProperty);if((i=o(l,"__defineGetter__"))&&(e=j.bind(l.__defineGetter__),f=j.bind(l.__defineSetter__),g=j.bind(l.__lookupGetter__),h=j.bind(l.__lookupSetter__)),2!=[1,2].splice(0).length){var p=Array.prototype.splice,q=Array.prototype.push,r=Array.prototype.unshift;Array.prototype.splice=function(){function a(a){for(var b=[];a--;)b.unshift(a);return b}var b,c=[];return c.splice.bind(c,0,0).apply(null,a(20)),c.splice.bind(c,0,0).apply(null,a(26)),b=c.length,c.splice(5,0,"XXX"),b+1==c.length?!0:void 0}()?function(a,b){return arguments.length?p.apply(this,[void 0===a?0:a,void 0===b?this.length-a:b].concat(m.call(arguments,2))):[]}:function(a,b){var c,d=m.call(arguments,2),e=d.length;if(!arguments.length)return[];if(void 0===a&&(a=0),void 0===b&&(b=this.length-a),e>0){if(0>=b){if(a==this.length)return q.apply(this,d),[];if(0==a)return r.apply(this,d),[]}return c=m.call(this,a,a+b),d.push.apply(d,m.call(this,a+b,this.length)),d.unshift.apply(d,m.call(this,0,a)),d.unshift(0,this.length),p.apply(this,d),c}return p.call(this,a,b)}}if(1!=[].unshift(0)){var r=Array.prototype.unshift;Array.prototype.unshift=function(){return r.apply(this,arguments),this.length}}Array.isArray||(Array.isArray=function(a){return"[object Array]"==n(a)});var s=Object("a"),t="a"!=s[0]||!(0 in s),u=function(a){var b=!0;return a&&a.call("foo",function(a,c,d){"object"!=typeof d&&(b=!1)}),!!a&&b};if(Array.prototype.forEach&&u(Array.prototype.forEach)||(Array.prototype.forEach=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=arguments[1],e=-1,f=c.length>>>0;if("[object Function]"!=n(a))throw new TypeError;for(;++e<f;)e in c&&a.call(d,c[e],e,b)}),Array.prototype.map&&u(Array.prototype.map)||(Array.prototype.map=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=Array(d),f=arguments[1];if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var g=0;d>g;g++)g in c&&(e[g]=a.call(f,c[g],g,b));return e}),Array.prototype.filter&&u(Array.prototype.filter)||(Array.prototype.filter=function(a){var b,c=J(this),d=t&&"[object String]"==n(this)?this.split(""):c,e=d.length>>>0,f=[],g=arguments[1];if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var h=0;e>h;h++)h in d&&(b=d[h],a.call(g,b,h,c)&&f.push(b));return f}),Array.prototype.every&&u(Array.prototype.every)||(Array.prototype.every=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&!a.call(e,c[f],f,b))return!1;return!0}),Array.prototype.some&&u(Array.prototype.some)||(Array.prototype.some=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0,e=arguments[1];if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");for(var f=0;d>f;f++)if(f in c&&a.call(e,c[f],f,b))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0;if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var e,f=0;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f++];break}if(++f>=d)throw new TypeError("reduce of empty array with no initial value")}for(;d>f;f++)f in c&&(e=a.call(void 0,e,c[f],f,b));return e}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(a){var b=J(this),c=t&&"[object String]"==n(this)?this.split(""):b,d=c.length>>>0;if("[object Function]"!=n(a))throw new TypeError(a+" is not a function");if(!d&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var e,f=d-1;if(arguments.length>=2)e=arguments[1];else for(;;){if(f in c){e=c[f--];break}if(--f<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>f)return e;do f in this&&(e=a.call(void 0,e,c[f],f,b));while(f--);return e}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(a){var c=t&&"[object String]"==n(this)?this.split(""):J(this),d=c.length>>>0;if(!d)return-1;var e=0;for(arguments.length>1&&(e=b(arguments[1])),e=e>=0?e:Math.max(0,d+e);d>e;e++)if(e in c&&c[e]===a)return e;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(a){var c=t&&"[object String]"==n(this)?this.split(""):J(this),d=c.length>>>0;if(!d)return-1;var e=d-1;for(arguments.length>1&&(e=Math.min(e,b(arguments[1]))),e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&a===c[e])return e;return-1}),!Object.keys){var v=!0,w=function(){}.propertyIsEnumerable("prototype"),x=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],y=x.length;for(var z in{toString:null})v=!1;Object.keys=function K(a){var b="[object Function]"===n(a),c=null!==a&&"object"==typeof a;if(!c&&!b)throw new TypeError("Object.keys called on a non-object");var K=[],d=w&&b;for(var e in a)d&&"prototype"===e||!o(a,e)||K.push(e);if(v)for(var f=a.constructor,g=f&&f.prototype===a,h=0;y>h;h++){var i=x[h];g&&"constructor"===i||!o(a,i)||K.push(i)}return K}}var A=-621987552e5,B="-000001";Date.prototype.toISOString&&-1!==new Date(A).toISOString().indexOf(B)||(Date.prototype.toISOString=function(){var a,b,c,d,e;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(d=this.getUTCFullYear(),e=this.getUTCMonth(),d+=Math.floor(e/12),e=(e%12+12)%12,a=[e+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],d=(0>d?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(d>=0&&9999>=d?-4:-6),b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var C=!1;try{C=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(A).toJSON().indexOf(B)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(D){}C||(Date.prototype.toJSON=function(){var a,b=Object(this),c=d(b);if("number"==typeof c&&!isFinite(c))return null;if(a=b.toISOString,"function"!=typeof a)throw new TypeError("toISOString property is not callable");return a.call(b)}),!Date.parse,0||(Date=function(a){function b(c,d,e,f,g,h,i){var j=arguments.length;if(this instanceof a){var k=1==j&&String(c)===c?new a(b.parse(c)):j>=7?new a(c,d,e,f,g,h,i):j>=6?new a(c,d,e,f,g,h):j>=5?new a(c,d,e,f,g):j>=4?new a(c,d,e,f):j>=3?new a(c,d,e):j>=2?new a(c,d):j>=1?new a(c):new a;return k.constructor=b,k}return a.apply(this,arguments)}function c(a,b){var c=b>1?1:0;return f[b]+Math.floor((a-1969+c)/4)-Math.floor((a-1901+c)/100)+Math.floor((a-1601+c)/400)+365*(a-1970)}function d(b){return Number(new a(1970,0,1,0,0,0,b))}var e=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),f=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var g in a)b[g]=a[g];return b.now=a.now,b.UTC=a.UTC,b.prototype=a.prototype,b.prototype.constructor=b,b.parse=function(b){var f=e.exec(b);if(f){var g,h=Number(f[1]),i=Number(f[2]||1)-1,j=Number(f[3]||1)-1,k=Number(f[4]||0),l=Number(f[5]||0),m=Number(f[6]||0),n=Math.floor(1e3*Number(f[7]||0)),o=Boolean(f[4]&&!f[8]),p="-"===f[9]?1:-1,q=Number(f[10]||0),r=Number(f[11]||0);return(l>0||m>0||n>0?24:25)>k&&60>l&&60>m&&1e3>n&&i>-1&&12>i&&24>q&&60>r&&j>-1&&j<c(h,i+1)-c(h,i)&&(g=60*(24*(c(h,i)+j)+k+q*p),g=1e3*(60*(g+l+r*p)+m)+n,o&&(g=d(g)),g>=-864e13&&864e13>=g)?g:0/0}return a.parse.apply(this,arguments)},b}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function a(a,b){for(var c=-1;++c<g;)b+=a*h[c],h[c]=b%f,b=Math.floor(b/f)}function b(a){for(var b=g,c=0;--b>=0;)c+=h[b],h[b]=Math.floor(c/a),c=c%a*f}function c(){for(var a=g,b="";--a>=0;)if(""!==b||0===a||0!==h[a]){var c=String(h[a]);""===b?b=c:b+="0000000".slice(0,7-c.length)+c}return b}function d(a,b,c){return 0===b?c:b%2===1?d(a,b-1,c*a):d(a*a,b/2,c)}function e(a){for(var b=0;a>=4096;)b+=12,a/=4096;for(;a>=2;)b+=1,a/=2;return b}var f,g,h;f=1e7,g=6,h=[0,0,0,0,0,0],Number.prototype.toFixed=function(f){var g,h,i,j,k,l,m,n;if(g=Number(f),g=g!==g?0:Math.floor(g),0>g||g>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(h=Number(this),h!==h)return"NaN";if(-1e21>=h||h>=1e21)return String(h);if(i="",0>h&&(i="-",h=-h),j="0",h>1e-21)if(k=e(h*d(2,69,1))-69,l=0>k?h*d(2,-k,1):h/d(2,k,1),l*=4503599627370496,k=52-k,k>0){for(a(0,l),m=g;m>=7;)a(1e7,0),m-=7;for(a(d(10,m,1),0),m=k-1;m>=23;)b(1<<23),m-=23;b(1<<m),a(1,1),b(2),j=c()}else a(0,l),a(1<<-k,0),j=c()+"0.00000000000000000000".slice(2,2+g);return g>0?(n=j.length,j=g>=n?i+"0.0000000000000000000".slice(0,g-n+2)+j:i+j.slice(0,n-g)+"."+j.slice(n-g)):j=i+j,j}}();var E=String.prototype.split;if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var a=void 0===/()??/.exec("")[1];String.prototype.split=function(b,c){var d=this;if(void 0===b&&0===c)return[];if("[object RegExp]"!==Object.prototype.toString.call(b))return E.apply(this,arguments);var e,f,g,h,i=[],j=(b.ignoreCase?"i":"")+(b.multiline?"m":"")+(b.extended?"x":"")+(b.sticky?"y":""),k=0,b=new RegExp(b.source,j+"g");for(d+="",a||(e=new RegExp("^"+b.source+"$(?!\\s)",j)),c=void 0===c?-1>>>0:c>>>0;(f=b.exec(d))&&(g=f.index+f[0].length,!(g>k&&(i.push(d.slice(k,f.index)),!a&&f.length>1&&f[0].replace(e,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(f[a]=void 0)}),f.length>1&&f.index<d.length&&Array.prototype.push.apply(i,f.slice(1)),h=f[0].length,k=g,i.length>=c)));)b.lastIndex===f.index&&b.lastIndex++;return k===d.length?(h||!b.test(""))&&i.push(""):i.push(d.slice(k)),i.length>c?i.slice(0,c):i}}():"0".split(void 0,0).length&&(String.prototype.split=function(a,b){return void 0===a&&0===b?[]:E.apply(this,arguments)}),"".substr&&"b"!=="0b".substr(-1)){var F=String.prototype.substr;String.prototype.substr=function(a,b){return F.call(this,0>a&&(a=this.length+a)<0?0:a,b)}}var G="	\n\f\r   ᠎             　\u2028\u2029\ufeff";if(!String.prototype.trim||G.trim()){G="["+G+"]";var H=new RegExp("^"+G+G+"*"),I=new RegExp(G+G+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(H,"").replace(I,"")}}(8!==parseInt(G+"08")||22!==parseInt(G+"0x16"))&&(parseInt=function(a){var b=/^0[xX]/;return function(c,d){return c=String(c).trim(),+d||(d=b.test(c)?16:10),a(c,d)}}(parseInt));var J=function(a){if(null==a)throw new TypeError("can't convert "+a+" to object");return Object(a)}}),function(a){"function"==typeof define?define(a):"function"==typeof YUI?YUI.add("es5-sham",a):a()}(function(){function a(a){try{return a.sentinel=0,0===Object.getOwnPropertyDescriptor(a,"sentinel").value}catch(b){}}function b(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(b){}}var c,d,e,f,g,h=Function.prototype.call,i=Object.prototype,j=h.bind(i.hasOwnProperty);if((g=j(i,"__defineGetter__"))&&(c=h.bind(i.__defineGetter__),d=h.bind(i.__defineSetter__),e=h.bind(i.__lookupGetter__),f=h.bind(i.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(a){return a.__proto__||(a.constructor?a.constructor.prototype:i)}),Object.defineProperty){var k=a({}),l="undefined"==typeof document||a(document.createElement("div"));if(!l||!k)var m=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||m){var n="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError(n+a);if(m)try{return m.call(Object,a,b)}catch(c){}if(j(a,b)){var d={enumerable:!0,configurable:!0};if(g){var h=a.__proto__;a.__proto__=i;var k=e(a,b),l=f(a,b);if(a.__proto__=h,k||l)return k&&(d.get=k),l&&(d.set=l),d}return d.value=a[b],d.writable=!0,d}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(a){return Object.keys(a)}),!Object.create){var o,p=null===Object.prototype.__proto__;o=p||"undefined"==typeof document?function(){return{__proto__:null}}:function(){function a(){}var b=document.createElement("iframe"),c=document.body||document.documentElement;b.style.display="none",c.appendChild(b),b.src="javascript:";var d=b.contentWindow.Object.prototype;return c.removeChild(b),b=null,delete d.constructor,delete d.hasOwnProperty,delete d.propertyIsEnumerable,delete d.isPrototypeOf,delete d.toLocaleString,delete d.toString,delete d.valueOf,d.__proto__=null,a.prototype=d,o=function(){return new a},new a},Object.create=function(a,b){function c(){}var d;if(null===a)d=o();else{if("object"!=typeof a&&"function"!=typeof a)throw new TypeError("Object prototype may only be an Object or null");c.prototype=a,d=new c,d.__proto__=a}return void 0!==b&&Object.defineProperties(d,b),d}}if(Object.defineProperty){var q=b({}),r="undefined"==typeof document||b(document.createElement("div"));if(!q||!r)var s=Object.defineProperty,t=Object.defineProperties}if(!Object.defineProperty||s){var u="Property description must be an object: ",v="Object.defineProperty called on non-object: ",w="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(a,b,h){if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError(v+a);if("object"!=typeof h&&"function"!=typeof h||null===h)throw new TypeError(u+h);if(s)try{return s.call(Object,a,b,h)}catch(k){}if(j(h,"value"))if(g&&(e(a,b)||f(a,b))){var l=a.__proto__;a.__proto__=i,delete a[b],a[b]=h.value,a.__proto__=l}else a[b]=h.value;else{if(!g)throw new TypeError(w);j(h,"get")&&c(a,b,h.get),j(h,"set")&&d(a,b,h.set)}return a}}(!Object.defineProperties||t)&&(Object.defineProperties=function(a,b){if(t)try{return t.call(Object,a,b)}catch(c){}for(var d in b)j(b,d)&&"__proto__"!=d&&Object.defineProperty(a,d,b[d]);return a}),Object.seal||(Object.seal=function(a){return a}),Object.freeze||(Object.freeze=function(a){return a});try{Object.freeze(function(){})}catch(x){Object.freeze=function(a){return function(b){return"function"==typeof b?b:a(b)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(a){return a}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(a){if(Object(a)!==a)throw new TypeError;for(var b="";j(a,b);)b+="?";a[b]=!0;var c=j(a,b);return delete a[b],c})}),function(a){"use strict";for(var b,c,d={},e=function(){},f="memory".split(","),g="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");b=f.pop();)a[b]=a[b]||d;for(;c=g.pop();)a[c]=a[c]||e}(this.console=this.console||{}),function(a,b){function c(){var a=p.elements;return"string"==typeof a?a.split(" "):a}function d(a){var b=o[a[m]];return b||(b={},n++,a[m]=n,o[n]=b),b}function e(a,c,e){return c||(c=b),i?c.createElement(a):(e||(e=d(c)),c=e.cache[a]?e.cache[a].cloneNode():l.test(a)?(e.cache[a]=e.createElem(a)).cloneNode():e.createElem(a),c.canHaveChildren&&!k.test(a)?e.frag.appendChild(c):c)}function f(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return p.shivMethods?e(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(p,b.frag)}function g(a){a||(a=b);var c=d(a);if(p.shivCSS&&!h&&!c.hasCSS){var e,g=a;e=g.createElement("p"),g=g.getElementsByTagName("head")[0]||g.documentElement,e.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",e=g.insertBefore(e.lastChild,g.firstChild),c.hasCSS=!!e}return i||f(a,c),a}var h,i,j=a.html5||{},k=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",n=0,o={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",h="hidden"in a;var c;if(!(c=1==a.childNodes.length)){b.createElement("a");var d=b.createDocumentFragment();c="undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}i=c}catch(e){i=h=!0}}();var p={elements:j.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==j.shivCSS,supportsUnknownElements:i,shivMethods:!1!==j.shivMethods,type:"default",shivDocument:g,createElement:e,createDocumentFragment:function(a,e){if(a||(a=b),i)return a.createDocumentFragment();for(var e=e||d(a),f=e.frag.cloneNode(),g=0,h=c(),j=h.length;j>g;g++)f.createElement(h[g]);return f}};a.html5=p,g(b)}(this,document);
},{}],2:[function(require,module,exports){
var div;

div = "<div id='test'></div>";

describe('DOM Modules', function() {
  var dom;
  dom = window.yaks.DOM;
  beforeEach(function() {
    return document.querySelectorAll('#jasmine_content')[0].innerHTML = div;
  });
  afterEach(function() {
    return document.querySelectorAll('#jasmine_content')[0].innerHTML = "";
  });
  return it('should add class to element', function() {
    var el;
    el = document.querySelectorAll("#test")[0];
    dom.addClass(el, 'test-class');
    return expect(dom.hasClass(el, 'test-class')).toBe(true);
  });
});



},{}],3:[function(require,module,exports){
var div;

div = "<div data-yaks-action-active=true data-yaks-action-type='my_function'></div>";

describe('Actions Module', function() {
  var actions, pubsub;
  actions = window.yaks.modules.actions;
  pubsub = window.yaks.UTILS.pubsub;
  describe('Registering Actions', function() {
    it('should allow scripts to register', function() {
      var fun1, fun2;
      fun1 = function() {
        return "test1";
      };
      fun2 = function() {
        return "test1";
      };
      yaks.registerAction('test', fun1);
      expect(actions._getActions()['test']).toBe(fun1);
      return expect(actions._getActions()['test']).not.toBe(fun2);
    });
    return it('should only register functions', function() {
      yaks.registerAction('test2', {});
      yaks.registerAction('test3', []);
      expect(actions._getActions()['test2']).toBe(void 0);
      return expect(actions._getActions()['test3']).toBe(void 0);
    });
  });
  return describe('Discovering DOM actions', function() {
    var spy;
    spy = jasmine.createSpy('action-spy');
    yaks.registerAction('my_function', spy);
    beforeEach(function() {
      return document.querySelectorAll('#jasmine_content')[0].innerHTML = div;
    });
    afterEach(function() {
      return document.querySelectorAll('#jasmine_content')[0].innerHTML = "";
    });
    it('should fire the action when event is published', function() {
      var el;
      el = document.querySelectorAll("[" + (actions._getActiveElement()) + "]")[0];
      pubsub.publish('new_content');
      return expect(spy).toHaveBeenCalledWith(el);
    });
    return it('should deactivate triggers once processed', function() {
      var el, el_after;
      el = document.querySelectorAll("[" + (actions._getActiveElement()) + "]");
      expect(el.length).not.toBe(0);
      pubsub.publish('new_content');
      el_after = document.querySelectorAll("[" + (actions._getActiveElement()) + "]");
      return expect(el_after.length).toBe(0);
    });
  });
});



},{}],4:[function(require,module,exports){
describe('is types', function() {
  return describe('isFunction', function() {
    var isFunction;
    isFunction = yaks.UTILS.is.Function;
    it('should return false for undefined variables', function() {
      return expect(isFunction(void 0)).toBe(false);
    });
    it('should return false for strings', function() {
      return expect(isFunction('boom')).toBe(false);
    });
    it('should return false for arrays', function() {
      return expect(isFunction([1, 2, 3])).toBe(false);
    });
    it('should return false for a element', function() {
      var el;
      el = document.createElement('div');
      return expect(isFunction(el)).toBe(false);
    });
    return it('should return true for a function', function() {
      var funk;
      funk = function() {
        return "";
      };
      return expect(isFunction(funk)).toBe(true);
    });
  });
});



},{}],5:[function(require,module,exports){
describe('PubSub Module', function() {
  var pubsub;
  pubsub = window.yaks.UTILS.pubsub;
  describe('subscribe', function() {
    it('should add subscriptions to the object', function() {
      pubsub.subscribe("event", function() {
        return "";
      });
      return expect(pubsub._subscriptions["event"].length).toEqual(1);
    });
    return it('should not overwrite subscriptions if key is called multiple times', function() {
      pubsub.subscribe("event", function() {
        return "";
      });
      pubsub.subscribe("event", function() {
        return "";
      });
      return expect(pubsub._subscriptions['event'].length).toEqual(3);
    });
  });
  describe('isSubscribed', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    it('should return false if an event has not been subscribed', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      return expect(pubsub.isSubscribed('event2')).toBe(false);
    });
    return it('should return true if an event has been subscribed', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      return expect(pubsub.isSubscribed('event')).toBe(true);
    });
  });
  describe('unsubscribe', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    it('should not error if removing a non existant subscription', function() {
      var fun;
      fun = function() {
        return pubsub.unsubscribe('event');
      };
      return expect(fun).not.toThrow();
    });
    return it('should remove subscription fine', function() {
      var fun;
      fun = function() {
        return "";
      };
      pubsub.subscribe("event", fun);
      expect(pubsub.isSubscribed('event', fun)).toBe(true);
      pubsub.unsubscribe("event");
      return expect(pubsub.isSubscribed('event', fun)).toBe(false);
    });
  });
  describe('publish', function() {
    it('should fire the callback', function() {
      var spy1, spy2;
      spy1 = jasmine.createSpy('spy');
      spy2 = jasmine.createSpy('spy');
      pubsub.subscribe("click", spy1);
      pubsub.subscribe("change", spy2);
      pubsub.publish('click');
      expect(spy1).toHaveBeenCalled();
      return expect(spy2).not.toHaveBeenCalled();
    });
    return it('should send any extra data through with the callback', function() {
      var spy1;
      spy1 = jasmine.createSpy('spy');
      pubsub.subscribe("click", spy1);
      pubsub.publish('click', [456, 'another param']);
      return expect(spy1).toHaveBeenCalledWith(456, 'another param');
    });
  });
  return describe('namespaced events', function() {
    beforeEach(function() {
      return pubsub._subscriptions = {};
    });
    return it('should namespace events with period seperation notation', function() {
      var spy1, spy2, spy3, spy4, spy5;
      spy1 = jasmine.createSpy('spy1');
      spy2 = jasmine.createSpy('spy2');
      spy3 = jasmine.createSpy('spy3');
      spy4 = jasmine.createSpy('spy4');
      spy5 = jasmine.createSpy('spy5');
      pubsub.subscribe("click.namespace", spy1);
      pubsub.subscribe("click.namespace1.a", spy2);
      pubsub.subscribe("click.namespace1.b", spy3);
      pubsub.subscribe("click.namespace2.a", spy4);
      pubsub.subscribe("click.namespace2.b", spy5);
      pubsub.publish('click.*');
      expect(spy1).toHaveBeenCalled();
      expect(spy2).not.toHaveBeenCalled();
      pubsub.publish('click.*.a');
      expect(spy2).toHaveBeenCalled();
      expect(spy3).not.toHaveBeenCalled();
      expect(spy4).toHaveBeenCalled();
      pubsub.publish('*.namespace2.*');
      return expect(spy5).toHaveBeenCalled();
    });
  });
});



},{}],6:[function(require,module,exports){
var yaks_shims;

module.exports = yaks_shims = require('yaks_shims');



},{"yaks_shims":1}]},{},[2,3,4,5,6]);

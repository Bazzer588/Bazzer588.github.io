(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";e.exports=n(139)},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children,n=e.id,r=e.onClick,o=e.cnm,a=void 0===o?"default":o;return l.default.createElement("button",{className:"btn btn-"+a,id:n,onClick:r,type:"button"},t," Zlotto")};var r,l=(r=n(137))&&r.__esModule?r:{default:r};n(144)},139:function(e,t,n){"use strict";var r=n(140),l=n(141),o=n(142),a=n(143),u="function"===typeof Symbol&&Symbol.for,c=u?Symbol.for("react.element"):60103,i=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,s=u?Symbol.for("react.strict_mode"):60108,p=u?Symbol.for("react.profiler"):60114,d=u?Symbol.for("react.provider"):60109,m=u?Symbol.for("react.context"):60110,y=u?Symbol.for("react.async_mode"):60111,h=u?Symbol.for("react.forward_ref"):60112;u&&Symbol.for("react.timeout");var b="function"===typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);l(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function g(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||E}function _(){}function j(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||E}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!==typeof e&&"function"!==typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var O=j.prototype=new _;O.constructor=j,r(O,g.prototype),O.isPureReactComponent=!0;var w={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,l={},o=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(1===u)l.children=n;else if(1<u){for(var i=Array(u),f=0;f<u;f++)i[f]=arguments[f+2];l.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===l[r]&&(l[r]=u[r]);return{$$typeof:c,type:e,key:o,ref:a,props:l,_owner:w.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===c}var V=/\/+/g,Z=[];function R(e,t,n,r){if(Z.length){var l=Z.pop();return l.result=e,l.keyPrefix=t,l.func=n,l.context=r,l.count=0,l}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>Z.length&&Z.push(e)}function $(e,t,n,r){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var o=!1;if(null===e)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case c:case i:o=!0}}if(o)return n(r,e,""===t?"."+K(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var u=t+K(l=e[a],a);o+=$(l,u,n,r)}else if(null===e||"undefined"===typeof e?u=null:u="function"===typeof(u=b&&e[b]||e["@@iterator"])?u:null,"function"===typeof u)for(e=u.call(e),a=0;!(l=e.next()).done;)o+=$(l=l.value,u=t+K(l,a++),n,r);else"object"===l&&v("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return o}function K(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function N(e,t,n){var r=e.result,l=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,a.thatReturnsArgument):null!=e&&(P(e)&&(t=l+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(V,"$&/")+"/")+n,e={$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function M(e,t,n,r,l){var o="";null!=n&&(o=(""+n).replace(V,"$&/")+"/"),t=R(t,o,r,l),null==e||$(e,"",N,t),C(t)}var T={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=R(null,null,t,n),null==e||$(e,"",A,t),C(t)},count:function(e){return null==e?0:$(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,a.thatReturnsArgument),t},only:function(e){return P(e)||v("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:j,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:m,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:h,render:e}},Fragment:f,StrictMode:s,unstable_AsyncMode:y,unstable_Profiler:p,createElement:x,cloneElement:function(e,t,n){(null===e||void 0===e)&&v("267",e);var l=void 0,o=r({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(l in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)k.call(t,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==f?f[l]:t[l])}if(1===(l=arguments.length-2))o.children=n;else if(1<l){f=Array(l);for(var s=0;s<l;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:c,type:e.type,key:a,ref:u,props:o,_owner:i}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.4.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:w,assign:r}},q={default:T},F=q&&T||q;e.exports=F.default?F.default:F},140:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(l){return!1}}()?Object.assign:function(e,t){for(var n,a,u=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var i in n=Object(arguments[c]))l.call(n,i)&&(u[i]=n[i]);if(r){a=r(n);for(var f=0;f<a.length;f++)o.call(n,a[f])&&(u[a[f]]=n[a[f]])}}return u}},141:function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,l,o,a,u,c){if(r(t),!e){var i;if(void 0===t)i=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,l,o,a,u,c],s=0;(i=new Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw i.framesToPop=1,i}}},142:function(e,t,n){"use strict";e.exports={}},143:function(e,t,n){"use strict";function r(e){return function(){return e}}var l=function(){};l.thatReturns=r,l.thatReturnsFalse=r(!1),l.thatReturnsTrue=r(!0),l.thatReturnsNull=r(null),l.thatReturnsThis=function(){return this},l.thatReturnsArgument=function(e){return e},e.exports=l},144:function(e,t,n){},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){console.log("You called validateDate",e,t,n)}},147:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(4),l=n(5),o=n(8),a=n(6),u=n(7),c=n(0),i=n.n(c),f=n(138),s=n.n(f),p=n(137),d=n.n(p);function m(e){return d.a.createElement("button",e,"ZZZ Thing")}var y=n(146),h=n.n(y),b=n(17),v=n(14),E=n(15),g=n(12),_=(n(147),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:"App-header"},i.a.createElement(b.a,{owner:this,page:this.props.page}),i.a.createElement("h1",{className:"App-title"},"\u6761\u6b3e\u548c\u6761\u4ef6")),i.a.createElement("form",null,i.a.createElement("h2",{className:"cp2_head"},"\u7f51\u7ad9\u4f7f\u7528\u6761\u6b3e\u548c\u6761\u4ef6"),i.a.createElement("h3",null,"1.\u6761\u6b3e"),i.a.createElement("p",null,"\u8bbf\u95ee\u672c\u7f51\u7ad9\uff0c\u5373\u8868\u793a\u60a8\u540c\u610f\u9075\u5b88\u8fd9\u4e9b\u7f51\u7ad9\u4f7f\u7528\u6761\u6b3e\u548c\u6761\u4ef6\uff0c\u6240\u6709\u9002\u7528\u6cd5\u5f8b\u548c\u6cd5\u89c4\uff0c\u5e76\u540c\u610f\u60a8\u6709\u8d23\u4efb\u9075\u5b88\u4efb\u4f55\u9002\u7528\u7684\u5f53\u5730\u6cd5\u5f8b\u3002\u5982\u679c\u60a8\u4e0d\u540c\u610f\u8fd9\u4e9b\u6761\u6b3e\uff0c\u5219\u7981\u6b62\u60a8\u4f7f\u7528\u6216\u8bbf\u95ee\u672c\u7f51\u7ad9\u3002\u672c\u7f51\u7ad9\u5305\u542b\u7684\u6750\u6599\u53d7\u9002\u7528\u7684\u7248\u6743\u548c\u5546\u6807\u6cd5\u4fdd\u62a4\u3002"),i.a.createElement("h3",null,"2.\u4f7f\u7528\u8bb8\u53ef\u8bc1"),i.a.createElement("ol",{type:"a"},i.a.createElement("li",null,"\u5141\u8bb8\u5728Zlobod VK\u7684\u7f51\u7ad9\u4e0a\u4e34\u65f6\u4e0b\u8f7d\u4e00\u4efd\u6750\u6599\uff08\u4fe1\u606f\u6216\u8f6f\u4ef6\uff09\uff0c\u4ec5\u7528\u4e8e\u4e2a\u4eba\u975e\u5546\u4e1a\u77ed\u6682\u89c2\u770b\u3002\u8fd9\u662f\u6388\u4e88\u8bb8\u53ef\uff0c\u800c\u4e0d\u662f\u8f6c\u8ba9\u6240\u6709\u6743\uff0c\u6839\u636e\u672c\u8bb8\u53ef\uff0c\u60a8\u4e0d\u5f97\uff1a",i.a.createElement("ol",{type:"i"},i.a.createElement("li",null,"\u4fee\u6539\u6216\u590d\u5236\u6750\u6599;"),i.a.createElement("li",null,"\u5c06\u8fd9\u4e9b\u6750\u6599\u7528\u4e8e\u4efb\u4f55\u5546\u4e1a\u76ee\u7684\uff0c\u6216\u7528\u4e8e\u4efb\u4f55\u516c\u5171\u5c55\u793a\uff08\u5546\u4e1a\u6216\u975e\u5546\u4e1a\uff09;"),i.a.createElement("li",null,"\u5c1d\u8bd5\u5bf9Zlobod VK\u7f51\u7ad9\u4e0a\u5305\u542b\u7684\u4efb\u4f55\u8f6f\u4ef6\u8fdb\u884c\u53cd\u7f16\u8bd1\u6216\u53cd\u5411\u5de5\u7a0b;"),i.a.createElement("li",null,"\u4ece\u6750\u6599\u4e2d\u5220\u9664\u4efb\u4f55\u7248\u6743\u6216\u5176\u4ed6\u4e13\u6709\u6ce8\u91ca; \u8981\u4e48"),i.a.createElement("li",null,"\u5c06\u6750\u6599\u8f6c\u79fb\u7ed9\u53e6\u4e00\u4e2a\u4eba\u6216\u201c\u955c\u50cf\u201d\u4efb\u4f55\u5176\u4ed6\u670d\u52a1\u5668\u4e0a\u7684\u6750\u6599\u3002"))),i.a.createElement("li",null,"\u5982\u679c\u60a8\u8fdd\u53cd\u4efb\u4f55\u8fd9\u4e9b\u9650\u5236\uff0c\u672c\u8bb8\u53ef\u5c06\u81ea\u52a8\u7ec8\u6b62\uff0c\u5e76\u53ef\u80fd\u968f\u65f6\u88abZlobod VK\u7ec8\u6b62\u3002\u5728\u7ec8\u6b62\u60a8\u67e5\u770b\u8fd9\u4e9b\u6750\u6599\u6216\u7ec8\u6b62\u672c\u8bb8\u53ef\u540e\uff0c\u60a8\u5fc5\u987b\u9500\u6bc1\u60a8\u62e5\u6709\u7684\u4efb\u4f55\u4e0b\u8f7d\u6750\u6599\uff0c\u65e0\u8bba\u662f\u7535\u5b50\u683c\u5f0f\u8fd8\u662f\u5370\u5237\u683c\u5f0f\u3002")),i.a.createElement("h3",null,"3.\u514d\u8d23\u58f0\u660e"),i.a.createElement("ol",{type:"a"},i.a.createElement("li",null,"Zlobod VK\u7f51\u7ad9\u4e0a\u7684\u8d44\u6599\u201c\u6309\u539f\u6837\u201d\u63d0\u4f9b\u3002Zlobod VK\u4e0d\u505a\u4efb\u4f55\u660e\u793a\u6216\u6697\u793a\u7684\u4fdd\u8bc1\uff0c\u7279\u6b64\u58f0\u660e\u5e76\u5426\u8ba4\u6240\u6709\u5176\u4ed6\u4fdd\u8bc1\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u9002\u9500\u6027\uff0c\u9002\u7528\u4e8e\u7279\u5b9a\u7528\u9014\u6216\u4e0d\u4fb5\u72af\u77e5\u8bc6\u4ea7\u6743\u6216\u5176\u4ed6\u4fb5\u6743\u884c\u4e3a\u7684\u6697\u793a\u4fdd\u8bc1\u6216\u6761\u4ef6\u3002\u6b64\u5916\uff0cZlobod VK\u4e0d\u4fdd\u8bc1\u6216\u5c31\u5176\u5728\u4e92\u8054\u7f51\u7f51\u7ad9\u4e0a\u4f7f\u7528\u8fd9\u4e9b\u6750\u6599\u7684\u51c6\u786e\u6027\uff0c\u53ef\u80fd\u7684\u7ed3\u679c\u6216\u53ef\u9760\u6027\u6216\u4e0e\u6b64\u7c7b\u6750\u6599\u6216\u4e0e\u672c\u7f51\u7ad9\u94fe\u63a5\u7684\u4efb\u4f55\u7f51\u7ad9\u6709\u5173\u7684\u4efb\u4f55\u9648\u8ff0\u3002")),i.a.createElement("h3",null,"4.\u9650\u5236"),i.a.createElement("p",null,"\u5728\u4efb\u4f55\u60c5\u51b5\u4e0b\uff0cZlobod VK\u6216\u5176\u4f9b\u5e94\u5546\u5747\u4e0d\u5bf9\u56e0\u4f7f\u7528\u6216\u65e0\u6cd5\u5728Zlobod VK\u7684\u4e92\u8054\u7f51\u4e0a\u4f7f\u7528\u8fd9\u4e9b\u6750\u6599\u800c\u5bfc\u81f4\u7684\u4efb\u4f55\u635f\u5bb3\uff08\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u56e0\u6570\u636e\u6216\u5229\u6da6\u635f\u5931\u6216\u7531\u4e8e\u4e1a\u52a1\u4e2d\u65ad\u9020\u6210\u7684\u635f\u5bb3\uff09\u627f\u62c5\u8d23\u4efb\u3002\u5373\u4f7fZlobod VK\u6216Zlobod VK\u6388\u6743\u4ee3\u8868\u5df2\u7ecf\u53e3\u5934\u6216\u4e66\u9762\u901a\u77e5\u53ef\u80fd\u5b58\u5728\u6b64\u7c7b\u635f\u5bb3\uff0c\u4e5f\u8bf7\u7acb\u5373\u901a\u77e5\u3002\u7531\u4e8e\u67d0\u4e9b\u53f8\u6cd5\u7ba1\u8f96\u533a\u4e0d\u5141\u8bb8\u5bf9\u9690\u542b\u62c5\u4fdd\u6216\u5bf9\u95f4\u63a5\u6216\u9644\u5e26\u635f\u5bb3\u7684\u8d23\u4efb\u9650\u5236\u8fdb\u884c\u9650\u5236\uff0c\u56e0\u6b64\u8fd9\u4e9b\u9650\u5236\u53ef\u80fd\u5bf9\u60a8\u4e0d\u9002\u7528\u3002"),i.a.createElement("h3",null,"5.\u4fee\u8ba2\u548c\u52d8\u8bef\u8868"),i.a.createElement("p",null,"Zlobod VK\u7f51\u7ad9\u4e0a\u51fa\u73b0\u7684\u8d44\u6599\u53ef\u80fd\u5305\u62ec\u6280\u672f\uff0c\u5370\u5237\u6216\u7167\u7247\u9519\u8bef\u3002Zlobod VK\u4e0d\u4fdd\u8bc1\u5176\u7f51\u7ad9\u4e0a\u7684\u4efb\u4f55\u6750\u6599\u51c6\u786e\uff0c\u5b8c\u6574\u6216\u6700\u65b0\u3002Zlobod VK\u53ef\u80fd\u968f\u65f6\u66f4\u6539\u5176\u7f51\u7ad9\u4e0a\u7684\u6750\u6599\uff0c\u6055\u4e0d\u53e6\u884c\u901a\u77e5\u3002\u4f46\u662f\uff0cZlobod VK\u4e0d\u627f\u8bfa\u66f4\u65b0\u6750\u6599\u3002"),i.a.createElement("h3",null,"6.\u94fe\u63a5"),i.a.createElement("p",null,"Zlobod VK\u6ca1\u6709\u5ba1\u67e5\u4e0e\u5176\u4e92\u8054\u7f51\u7f51\u7ad9\u94fe\u63a5\u7684\u6240\u6709\u7f51\u7ad9\uff0c\u4e5f\u4e0d\u5bf9\u4efb\u4f55\u6b64\u7c7b\u94fe\u63a5\u7f51\u7ad9\u7684\u5185\u5bb9\u8d1f\u8d23\u3002\u5305\u542b\u4efb\u4f55\u94fe\u63a5\u5e76\u4e0d\u610f\u5473\u7740Zlobod VK\u5bf9\u8be5\u7f51\u7ad9\u7684\u8ba4\u53ef\u3002\u4f7f\u7528\u4efb\u4f55\u6b64\u7c7b\u94fe\u63a5\u7684\u7f51\u7ad9\u7684\u98ce\u9669\u7531\u7528\u6237\u81ea\u884c\u627f\u62c5\u3002"),i.a.createElement("h3",null,"7.\u7f51\u7ad9\u4f7f\u7528\u6761\u6b3e\u4fee\u6539"),i.a.createElement("p",null,"Zlobod VK\u53ef\u968f\u65f6\u4fee\u6539\u5176\u7f51\u7ad9\u7684\u4f7f\u7528\u6761\u6b3e\uff0c\u6055\u4e0d\u53e6\u884c\u901a\u77e5\u3002\u4f7f\u7528\u672c\u7f51\u7ad9\u5373\u8868\u793a\u60a8\u540c\u610f\u9075\u5b88\u5f53\u524d\u7248\u672c\u7684\u672c\u4f7f\u7528\u6761\u6b3e\u548c\u6761\u4ef6\u3002"),i.a.createElement("h3",null,"8.\u9002\u7528\u6cd5\u5f8b"),i.a.createElement("p",null,"\u4e0eZlobod VK\u7f51\u7ad9\u6709\u5173\u7684\u4efb\u4f55\u7d22\u8d54\u5747\u53d7\u7f8e\u56fd\u8054\u5408\u738b\u56fd\u6cd5\u5f8b\u7684\u7ba1\u8f96\uff0c\u4e0d\u8003\u8651\u5176\u6cd5\u5f8b\u51b2\u7a81\u89c4\u5b9a\u3002"),i.a.createElement("p",null,"\u9002\u7528\u4e8e\u7f51\u7ad9\u7684\u4e00\u822c\u6761\u6b3e\u548c\u6761\u4ef6\u3002"),i.a.createElement("h2",null,"\u9690\u79c1\u653f\u7b56"),i.a.createElement("p",null,"\u60a8\u7684\u9690\u79c1\u5bf9\u6211\u4eec\u975e\u5e38\u91cd\u8981\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5236\u5b9a\u4e86\u672c\u653f\u7b56\uff0c\u4ee5\u4fbf\u60a8\u4e86\u89e3\u6211\u4eec\u5982\u4f55\u6536\u96c6\uff0c\u4f7f\u7528\uff0c\u4ea4\u6d41\uff0c\u62ab\u9732\u548c\u5229\u7528\u4e2a\u4eba\u4fe1\u606f\u3002\u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u6211\u4eec\u7684\u9690\u79c1\u653f\u7b56\u3002"),i.a.createElement("ul",null,i.a.createElement("li",null,"\u5728\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\u4e4b\u524d\u6216\u4e4b\u65f6\uff0c\u6211\u4eec\u5c06\u786e\u5b9a\u6536\u96c6\u4fe1\u606f\u7684\u76ee\u7684\u3002"),i.a.createElement("li",null,"\u6211\u4eec\u5c06\u4ec5\u4e3a\u4e86\u8fbe\u5230\u6211\u4eec\u6307\u5b9a\u7684\u76ee\u7684\u548c\u5176\u4ed6\u517c\u5bb9\u76ee\u7684\u800c\u6536\u96c6\u548c\u4f7f\u7528\u4e2a\u4eba\u4fe1\u606f\uff0c\u9664\u975e\u6211\u4eec\u83b7\u5f97\u76f8\u5173\u4e2a\u4eba\u7684\u540c\u610f\u6216\u6cd5\u5f8b\u8981\u6c42\u3002"),i.a.createElement("li",null,"\u53ea\u8981\u6709\u5fc5\u8981\uff0c\u6211\u4eec\u5c06\u4fdd\u7559\u4e2a\u4eba\u4fe1\u606f\u4ee5\u5b9e\u73b0\u8fd9\u4e9b\u76ee\u7684\u3002"),i.a.createElement("li",null,"\u6211\u4eec\u5c06\u901a\u8fc7\u5408\u6cd5\u548c\u516c\u5e73\u7684\u65b9\u5f0f\u6536\u96c6\u4e2a\u4eba\u4fe1\u606f\uff0c\u5e76\u5728\u9002\u5f53\u60c5\u51b5\u4e0b\uff0c\u5728\u76f8\u5173\u4e2a\u4eba\u7684\u77e5\u60c5\u6216\u540c\u610f\u4e0b\u6536\u96c6\u3002"),i.a.createElement("li",null,"\u4e2a\u4eba\u6570\u636e\u5e94\u4e0e\u5176\u4f7f\u7528\u76ee\u7684\u76f8\u5173\uff0c\u5e76\u4e14\u5728\u5fc5\u8981\u7684\u8303\u56f4\u5185\uff0c\u5e94\u51c6\u786e\uff0c\u5b8c\u6574\u548c\u6700\u65b0\u3002"),i.a.createElement("li",null,"\u6211\u4eec\u5c06\u901a\u8fc7\u5408\u7406\u7684\u5b89\u5168\u4fdd\u62a4\u6765\u4fdd\u62a4\u4e2a\u4eba\u4fe1\u606f\uff0c\u9632\u6b62\u4e22\u5931\u6216\u88ab\u76d7\uff0c\u4ee5\u53ca\u672a\u7ecf\u6388\u6743\u7684\u8bbf\u95ee\uff0c\u62ab\u9732\uff0c\u590d\u5236\uff0c\u4f7f\u7528\u6216\u4fee\u6539\u3002"),i.a.createElement("li",null,"\u6211\u4eec\u5c06\u968f\u65f6\u5411\u5ba2\u6237\u63d0\u4f9b\u6709\u5173\u6211\u4eec\u6709\u5173\u4e2a\u4eba\u4fe1\u606f\u7ba1\u7406\u7684\u653f\u7b56\u548c\u505a\u6cd5\u7684\u4fe1\u606f\u3002")),i.a.createElement("p",null,"\u6211\u4eec\u81f4\u529b\u4e8e\u6309\u7167\u8fd9\u4e9b\u539f\u5219\u5f00\u5c55\u4e1a\u52a1\uff0c\u4ee5\u786e\u4fdd\u4e2a\u4eba\u4fe1\u606f\u7684\u673a\u5bc6\u6027\u5f97\u5230\u4fdd\u62a4\u548c\u7ef4\u62a4\u3002")),i.a.createElement("p",null,"..."),i.a.createElement("p",null,i.a.createElement(s.a,{cnm:"zlotto",onClick:function(){alert("You clicked the thing..."),h()(222,"xxx")}},"\u5373\u8868\u793a\u60a8\u540c"),i.a.createElement(m,{onClick:function(){return alert("Woot thinh")}})))}}]),t}(i.a.Component));t.default=Object(v.c)(Object(E.a)(Object(g.a)(_)))}}]);
!function(r){var n={};function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=9)}([function(t,e,r){},function(t,e,r){"use strict";e.__esModule=!0,e.extend=l,e.indexOf=function(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return o.test(t)?t.replace(a,i):t},e.isEmpty=function(t){return!t&&0!==t||!(!c(t)||0!==t.length)},e.createFrame=function(t){var e=l({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},a=/[&<>"'`=]/g,o=/[&<>"'`=]/;function i(t){return n[t]}function l(t){for(var e=1;e<arguments.length;e++)for(var r in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],r)&&(t[r]=arguments[e][r]);return t}var u=Object.prototype.toString;e.toString=u;var s=function(t){return"function"==typeof t};s(/x/)&&(e.isFunction=s=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)}),e.isFunction=s;var c=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===u.call(t)};e.isArray=c},function(t,e,r){"use strict";e.__esModule=!0;var l=["description","fileName","lineNumber","message","name","number","stack"];function u(t,e){var r=e&&e.loc,n=void 0,a=void 0;r&&(t+=" - "+(n=r.start.line)+":"+(a=r.start.column));for(var o=Error.prototype.constructor.call(this,t),i=0;i<l.length;i++)this[l[i]]=o[l[i]];Error.captureStackTrace&&Error.captureStackTrace(this,u);try{r&&(this.lineNumber=n,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(t){}}u.prototype=new Error,e.default=u,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=c;var a=r(1),o=n(r(2)),i=r(13),l=r(21),u=n(r(23));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};var s="[object Object]";function c(t,e,r){this.helpers=t||{},this.partials=e||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:u.default,log:u.default.log,registerHelper:function(t,e){if(a.toString.call(t)===s){if(e)throw new o.default("Arg not supported with multiple helpers");a.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if(a.toString.call(t)===s)a.extend(this.partials,t);else{if(void 0===e)throw new o.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if(a.toString.call(t)===s){if(e)throw new o.default("Arg not supported with multiple decorators");a.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var f=u.default.log;e.log=f,e.createFrame=a.createFrame,e.logger=u.default},function(t,e,r){var n=r(11);t.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(t,e,r,n,a){var o,i=null!=e?e:t.nullContext||{},l=r.helperMissing,u="function",s=t.escapeExpression;return'\n<li class="posts__item">\n  <h3>'+s(typeof(o=null!=(o=r.title||(null!=e?e.title:e))?o:l)==u?o.call(i,{name:"title",hash:{},data:a}):o)+"</h3>\n  <p>"+s(typeof(o=null!=(o=r.text||(null!=e?e.text:e))?o:l)==u?o.call(i,{name:"text",hash:{},data:a}):o)+"</p>\n  <button data-id="+s(typeof(o=null!=(o=r.id||(null!=e?e.id:e))?o:l)==u?o.call(i,{name:"id",hash:{},data:a}):o)+' data-type="DELETE" >\n    x\n  </button>\n  <button data-id='+s(typeof(o=null!=(o=r.id||(null!=e?e.id:e))?o:l)==u?o.call(i,{name:"id",hash:{},data:a}):o)+' data-type="UPDATE" >\n    e\n  </button>\n</li>\n'},useData:!0})},,,,,function(t,e,r){"use strict";r.r(e);r(0),r(10);var n=r(4),a=r.n(n);document.addEventListener("DOMContentLoaded",function(){console.log("DOMContentLoaded","page-about"),document.body.insertAdjacentHTML("beforeend",a()())})},function(t,e,r){},function(t,e,r){t.exports=r(12).default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}e.__esModule=!0;var o=a(r(3)),i=n(r(24)),l=n(r(2)),u=a(r(1)),s=a(r(25)),c=n(r(26));function f(){var e=new o.HandlebarsEnvironment;return u.extend(e,o),e.SafeString=i.default,e.Exception=l.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var d=f();d.create=f,c.default(d),d.default=d,e.default=d,t.exports=e.default},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){a.default(t),o.default(t),i.default(t),l.default(t),u.default(t),s.default(t),c.default(t)};var a=n(r(14)),o=n(r(15)),i=n(r(16)),l=n(r(17)),u=n(r(18)),s=n(r(19)),c=n(r(20))},function(t,e,r){"use strict";e.__esModule=!0;var i=r(1);e.default=function(o){o.registerHelper("blockHelperMissing",function(t,e){var r=e.inverse,n=e.fn;if(!0===t)return n(this);if(!1===t||null==t)return r(this);if(i.isArray(t))return 0<t.length?(e.ids&&(e.ids=[e.name]),o.helpers.each(t,e)):r(this);if(e.data&&e.ids){var a=i.createFrame(e.data);a.contextPath=i.appendContextPath(e.data.contextPath,e.name),e={data:a}}return n(t,e)})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n,d=r(1),a=r(2),p=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("each",function(n,t){if(!t)throw new p.default("Must pass iterator to #each");var a=t.fn,e=t.inverse,r=0,o="",i=void 0,l=void 0;function u(t,e,r){i&&(i.key=t,i.index=e,i.first=0===e,i.last=!!r,l&&(i.contextPath=l+t)),o+=a(n[t],{data:i,blockParams:d.blockParams([n[t],t],[l+t,null])})}if(t.data&&t.ids&&(l=d.appendContextPath(t.data.contextPath,t.ids[0])+"."),d.isFunction(n)&&(n=n.call(this)),t.data&&(i=d.createFrame(t.data)),n&&"object"==typeof n)if(d.isArray(n))for(var s=n.length;r<s;r++)r in n&&u(r,r,r===n.length-1);else{var c=void 0;for(var f in n)n.hasOwnProperty(f)&&(void 0!==c&&u(c,r-1),c=f,r++);void 0!==c&&u(c,r-1,!0)}return 0===r&&(o=e(this)),o})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n,a=r(2),o=(n=a)&&n.__esModule?n:{default:n};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(1);e.default=function(r){r.registerHelper("if",function(t,e){return n.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||n.isEmpty(t)?e.inverse(this):e.fn(this)}),r.registerHelper("unless",function(t,e){return r.helpers.if.call(this,t,{fn:e.inverse,inverse:e.fn,hash:e.hash})})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(a){a.registerHelper("log",function(){for(var t=[void 0],e=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var n=1;null!=e.hash.level?n=e.hash.level:e.data&&null!=e.data.level&&(n=e.data.level),t[0]=n,a.log.apply(a,t)})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var a=r(1);e.default=function(t){t.registerHelper("with",function(t,e){a.isFunction(t)&&(t=t.call(this));var r=e.fn;if(a.isEmpty(t))return e.inverse(this);var n=e.data;return e.data&&e.ids&&((n=a.createFrame(e.data)).contextPath=a.appendContextPath(e.data.contextPath,e.ids[0])),r(t,{data:n,blockParams:a.blockParams([t],[n&&n.contextPath])})})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var n,a=r(22),o=(n=a)&&n.__esModule?n:{default:n}},function(t,e,r){"use strict";e.__esModule=!0;var l=r(1);e.default=function(t){t.registerDecorator("inline",function(a,o,i,t){var e=a;return o.partials||(o.partials={},e=function(t,e){var r=i.partials;i.partials=l.extend({},r,o.partials);var n=a(t,e);return i.partials=r,n}),o.partials[t.args[0]]=t.fn,e})},t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0;var n=r(1),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=n.indexOf(o.methodMap,t.toLowerCase());t=0<=e?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var r=arguments.length,n=Array(1<r?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[e].apply(console,n)}}};e.default=o,t.exports=e.default},function(t,e,r){"use strict";function n(t){this.string=t}e.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},e.default=n,t.exports=e.default},function(t,e,r){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,r=d.COMPILER_REVISION;if(e!==r){if(e<r){var n=d.REVISION_CHANGES[r],a=d.REVISION_CHANGES[e];throw new f.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+a+").")}throw new f.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(l,u){if(!u)throw new f.default("No environment passed to template");if(!l||!l.main)throw new f.default("Unknown template object: "+typeof l);l.main.decorator=l.main_d,u.VM.checkRevision(l.compiler);var i={strict:function(t,e){if(!(e in t))throw new f.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var r=t.length,n=0;n<r;n++)if(t[n]&&null!=t[n][e])return t[n][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:c.escapeExpression,invokePartial:function(t,e,r){r.hash&&(e=c.extend({},e,r.hash),r.ids&&(r.ids[0]=!0)),t=u.VM.resolvePartial.call(this,t,e,r);var n=u.VM.invokePartial.call(this,t,e,r);if(null==n&&u.compile&&(r.partials[r.name]=u.compile(t,l.compilerOptions,u),n=r.partials[r.name](e,r)),null==n)throw new f.default("The partial "+r.name+" could not be compiled when running in runtime-only mode");if(r.indent){for(var a=n.split("\n"),o=0,i=a.length;o<i&&(a[o]||o+1!==i);o++)a[o]=r.indent+a[o];n=a.join("\n")}return n},fn:function(t){var e=l[t];return e.decorator=l[t+"_d"],e},programs:[],program:function(t,e,r,n,a){var o=this.programs[t],i=this.fn(t);return e||a||n||r?o=p(this,t,i,e,r,n,a):o||(o=this.programs[t]=p(this,t,i)),o},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var r=t||e;return t&&e&&t!==e&&(r=c.extend({},e,t)),r},nullContext:Object.seal({}),noop:u.VM.noop,compilerInfo:l.compiler};function s(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=e.data;s._setup(e),!e.partial&&l.useData&&(r=function(t,e){e&&"root"in e||((e=e?d.createFrame(e):{}).root=t);return e}(t,r));var n=void 0,a=l.useBlockParams?[]:void 0;function o(t){return""+l.main(i,t,i.helpers,i.partials,r,a,n)}return l.useDepths&&(n=e.depths?t!=e.depths[0]?[t].concat(e.depths):e.depths:[t]),(o=h(l.main,o,i,e.depths||[],r,a))(t,e)}return s.isTop=!0,s._setup=function(t){t.partial?(i.helpers=t.helpers,i.partials=t.partials,i.decorators=t.decorators):(i.helpers=i.merge(t.helpers,u.helpers),l.usePartial&&(i.partials=i.merge(t.partials,u.partials)),(l.usePartial||l.useDecorators)&&(i.decorators=i.merge(t.decorators,u.decorators)))},s._child=function(t,e,r,n){if(l.useBlockParams&&!r)throw new f.default("must pass block params");if(l.useDepths&&!n)throw new f.default("must pass parent depths");return p(i,t,l[t],e,0,r,n)},s},e.wrapProgram=p,e.resolvePartial=function(t,e,r){t?t.call||r.name||(r.name=t,t=r.partials[t]):t="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return t},e.invokePartial=function(t,e,r){var a=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==i&&function(){r.data=d.createFrame(r.data);var n=r.fn;o=r.data["partial-block"]=function(t,e){var r=arguments.length<=1||void 0===e?{}:e;return r.data=d.createFrame(r.data),r.data["partial-block"]=a,n(t,r)},n.partials&&(r.partials=c.extend({},r.partials,n.partials))}();void 0===t&&o&&(t=o);{if(void 0===t)throw new f.default("The partial "+r.name+" could not be found");if(t instanceof Function)return t(e,r)}},e.noop=i;var n,c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(r(1)),a=r(2),f=(n=a)&&n.__esModule?n:{default:n},d=r(3);function p(n,t,a,o,e,i,l){function r(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=l;return!l||t==l[0]||t===n.nullContext&&null===l[0]||(r=[t].concat(l)),a(n,t,n.helpers,n.partials,e.data||o,i&&[e.blockParams].concat(i),r)}return(r=h(a,r,n,l,o,i)).program=t,r.depth=l?l.length:0,r.blockParams=e||0,r}function i(){return""}function h(t,e,r,n,a,o){if(t.decorator){var i={};e=t.decorator(e,i,r,n&&n[0],a,o,n),c.extend(e,i)}return e}},function(t,e,r){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,r(27))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}]);
//# sourceMappingURL=about.b839af3837d9dd4e4b05.js.map
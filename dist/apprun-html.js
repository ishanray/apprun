!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(){this._events={}}return e.prototype.on=function(e,t,n){void 0===n&&(n={}),this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})},e.prototype.off=function(e,t){var n=this._events[e];n&&((n=n.filter(function(e){return e.fn!==t})).length?this._events[e]=n:delete this._events[e])},e.prototype.run=function(e){for(var t=this,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=this._events[e];console.assert(!!o,"No subscriber for event: "+e),o&&((o=o.filter(function(r){var o=r.fn,i=r.options;return i.delay?t.delay(e,o,n,i):o.apply(t,n),!r.options.once})).length?this._events[e]=o:delete this._events[e])},e.prototype.once=function(e,t,r){void 0===r&&(r={}),this.on(e,t,n({},r,{once:!0}))},e.prototype.delay=function(e,t,n,r){var o=this;r._t&&clearTimeout(r._t),r._t=setTimeout(function(){clearTimeout(r._t),t.apply(o,n)},r.delay)},e}();t.App=o;var i=e||window;i.app&&i.app.start?r=i.app:(r=new o,i.app=r),t.default=r}).call(this,n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.app=r.default;var o=n(5),i=n(7);t.Component=i.Component;var a=n(2);t.on=a.on,t.update=a.update,t.event=a.update;var u=n(8);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,r.default.start=function(e,t,n,r,o){var a=Object.assign(o||{},{render:!0,global_event:!0}),u=new i.Component(t,n,r);return o&&o.rendered&&(u.rendered=o.rendered),u.mount(e,a),u},r.default.route||(r.default.route=u.default,r.default.on("//",function(e){}),r.default.on("#",function(e){}),r.default.on("route",function(e){return u.default(e)}),"object"==typeof document&&document.addEventListener("DOMContentLoaded",function(){window.onpopstate=function(){return u.default(location.hash)},u.default(location.hash)})),t.default=r.default,r.default.on("debug",function(e){return 0})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect={meta:new WeakMap,defineMetadata:function(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys:function(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata:function(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}},t.update=function(e,n){return void 0===n&&(n={}),function(r,o,i){return e=e||o,t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r),i}},t.on=function(e,n){return void 0===n&&(n={}),function(r,o){e=e||o,t.Reflect.defineMetadata("apprun-update:"+e,{name:e,key:o,options:n},r)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),o="_props";function i(e){var t=[],n=function(e){null!=e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:""+e)};return e&&e.forEach(function(e){Array.isArray(e)?e.forEach(function(e){return n(e)}):n(e)}),t}t.createElement=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=i(n);return"string"==typeof e?{tag:e,props:t,children:o}:void 0===e&&n?o:Object.getPrototypeOf(e).__isAppRunComponent?{tag:e,props:t,children:o}:e(t,o)};var a={};function u(e,t,n){void 0===n&&(n={}),null!=t&&(t=r.default(t,n),e&&(Array.isArray(t)?l(e,t):l(e,[t])))}function s(e,t){console.assert(!!e),function(e,t){var n=e.nodeName,r=""+(t.tag||"");return n.toUpperCase()===r.toUpperCase()}(e,t)?(l(e,t.children),f(e,t.props)):e.parentNode.replaceChild(c(t),e)}function l(e,t){for(var n=Math.min(e.childNodes.length,t.length),r=0;r<n;r++){var o=t[r],i=e.childNodes[r];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.textContent=o:e.replaceChild(d(o),i));else{var u=o.props&&o.props.key;if(u)if(i.key===u)s(e.childNodes[r],o);else{var l=a[u];l?(e.insertBefore(l,i),e.appendChild(i),s(e.childNodes[r],o)):e.insertBefore(c(o),i)}else s(e.childNodes[r],o)}}for(var f=e.childNodes.length;f>n;)e.removeChild(e.lastChild),f--;if(t.length>n){var p=document.createDocumentFragment();for(r=n;r<t.length;r++)p.appendChild(c(t[r]));e.appendChild(p)}}function d(e){if(0===e.indexOf("_html:")){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function c(e,t){if(void 0===t&&(t=!1),console.assert(null!=e),"string"==typeof e)return d(e);if(!e.tag||"function"==typeof e.tag)return d(JSON.stringify(e));var n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return f(n,e.props),e.children&&e.children.forEach(function(e){return n.appendChild(c(e,t))}),n}function f(e,t){console.assert(!!e);var n=e[o]||{};for(var r in t=function(e,t){var n={};return e&&Object.keys(e).forEach(function(e){return n[e]=""}),t&&Object.keys(t).forEach(function(e){return n[e]=t[e]}),n}(n,t),e[o]=t,t){var i=t[r];if("class"===r&&(r="className"),"style"===r)for(var u in e.style.cssText&&(e.style.cssText=""),i)e.style[u]!==i[u]&&(e.style[u]=i[u]);else if(r.startsWith("data-")){var s=r.substring(5).replace(/-(\w)/g,function(e){return e[1].toUpperCase()});e.dataset[s]!==i&&(e.dataset[s]=i)}else e instanceof SVGElement||r.startsWith("role")||r.startsWith("aria-")?e.getAttribute(r)!==i&&e.setAttribute(r,i):(e[r]!==i&&(e[r]=i),"key"===r&&i&&(a[i]=e))}}t.updateElement=u,t.render=u,t.Fragment=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.createElement=r.createElement,t.Fragment=r.Fragment,t.render=function(e,t,n){r.updateElement(e,t,n)}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function e(t,n,i){if(void 0===i&&(i=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(function(t){return e(t,n,i++)});var a=t;return t&&t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(a=function(e,t,n){var i=e.tag,a=e.props,u=e.children,s=a&&a.id,l="_"+i.name+"_"+n;s?l="_"+i.name+"_"+s:s="_"+i.name+"_"+n,t.__componentCache||(t.__componentCache={});var d=t.__componentCache[l];d||(d=t.__componentCache[l]=new i(r({},a,{children:u})).mount(s)),d.mounted&&d.mounted(a,u);var c=d.state,f="";return c instanceof Promise||!d.view||(f=d.view(c),d.rendered&&setTimeout(function(){return d.rendered(c)})),o.default.createElement("div",{id:s},f)}(t,n,i++)),a&&a.children&&(a.children=a.children.map(function(t){return e(t,n,i++)})),a}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(2),a={};o.default.on("get-components",function(e){return e.components=a});var u=function(){function e(e,t,n,i){var a=this;this.state=e,this.view=t,this.update=n,this.options=i,this._app=new o.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=function(e,t){return void 0===e&&(e=null),void 0===t&&(t={render:!0}),a.mount(e,r({},t,{render:!0}))}}return e.prototype.renderState=function(e){if(this.view){var t=this.view(e);if(o.default.run("debug",{component:this,state:e,vdom:t||"[vdom is null - no render]"}),"object"==typeof document){var n="string"==typeof this.element?document.getElementById(this.element):this.element;n&&(n._component=this),o.default.render(n,t,this),this.rendered&&this.rendered(this.state)}}},e.prototype.setState=function(e,t){var n=this;if(void 0===t&&(t={render:!0,history:!1}),e instanceof Promise)e.then(function(e){n.setState(e,t)}).catch(function(e){throw console.error(e),e}),this._state=e;else{if(this._state=e,null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=this._history.concat([e]),this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}},e.prototype.mount=function(e,t){var n=this;if(void 0===e&&(e=null),console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign(this.options||{},t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){this.on(t.history.prev||"history-prev",function(){n._history_idx--,n._history_idx>=0?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=0}),this.on(t.history.next||"history-next",function(){n._history_idx++,n._history_idx<n._history.length?n.setState(n._history[n._history_idx],{render:!0,history:!1}):n._history_idx=n._history.length-1})}return this.add_actions(),void 0===this.state&&(this.state=this.model||{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),a[e]=a[e]||[],a[e].push(this),this},e.prototype.is_global_event=function(e){return e&&(e.startsWith("#")||e.startsWith("/"))},e.prototype.add_action=function(e,t,n){var r=this;void 0===n&&(n={}),t&&"function"==typeof t&&this.on(e,function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];var u=t.apply(void 0,[r.state].concat(i));o.default.run("debug",{component:r,event:e,e:i,state:r.state,newState:u,options:n}),r.setState(u,n)},n)},e.prototype.add_actions=function(){var e=this,t=this.update||{};i.Reflect.getMetadataKeys(this).forEach(function(n){if(n.startsWith("apprun-update:")){var r=i.Reflect.getMetadata(n,e);t[r.name]=[e[r.key].bind(e),r.options]}});var n={};Object.keys(t).forEach(function(e){var r=t[e];("function"==typeof r||Array.isArray(r))&&e.split(",").forEach(function(e){return n[e.trim()]=r})}),Object.keys(n).forEach(function(t){var r=n[t];"function"==typeof r?e.add_action(t,r):Array.isArray(r)&&e.add_action(t,r[0],r[1])})},e.prototype.run=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return this.global_event||this.is_global_event(e)?o.default.run.apply(o.default,[e].concat(n)):(t=this._app).run.apply(t,[e].concat(n))},e.prototype.on=function(e,t,n){return this._actions.push({name:e,fn:t}),this.global_event||this.is_global_event(e)?o.default.on(e,t,n):this._app.on(e,t,n)},e.prototype.unmount=function(){var e=this;this._actions.forEach(function(t){var n=t.name,r=t.fn;e.global_event||e.is_global_event(n)?o.default.off(n,r):e._app.off(n,r)})},e.__isAppRunComponent=!0,e}();t.Component=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o="//";t.default=function(e){if(e||(e="#"),e.startsWith("#")){var t=e.split("/"),n=t[0],i=t.slice(1);r.default.run.apply(r.default,[n].concat(i)),r.default.run.apply(r.default,[o,n].concat(i))}else if(e.startsWith("/")){var a=e.split("/"),u=(a[0],a[1]);i=a.slice(2),r.default.run.apply(r.default,["/"+u].concat(i)),r.default.run.apply(r.default,[o,"/"+u].concat(i))}else r.default.run(e),r.default.run(o,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.app=r.default,t.Component=r.Component,t.on=r.on,t.update=r.update;var o=n(10);r.default.createElement=o.createElement,r.default.render=o.render,r.default.Fragment=o.Fragment,t.default=r.default,"object"==typeof window&&(window.Component=r.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.createElement=r.createElement,t.Fragment=r.Fragment;var o=n(11);t.render=function(e,t,n){"string"==typeof t?(t=t.trim(),e.firstChild?o(e.firstChild,t):e.innerHTML=t):r.updateElement(e,t,n)}},function(e,t,n){"use strict";var r,o="http://www.w3.org/1999/xhtml",i="undefined"==typeof document?void 0:document,a=i?i.body||i.createElement("div"):{},u=a.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:a.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return null!=e.getAttributeNode(t,n)};function s(e,t){var n=e.nodeName,r=t.nodeName;return n===r||!!(t.actualize&&n.charCodeAt(0)<91&&r.charCodeAt(0)>90)&&n===r.toUpperCase()}function l(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n,""))}var d={OPTION:function(e,t){l(e,t,"selected")},INPUT:function(e,t){l(e,t,"checked"),l(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),u(t,null,"value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!u(t,null,"multiple")){for(var n=0,r=t.firstChild;r;){var o=r.nodeName;if(o&&"OPTION"===o.toUpperCase()){if(u(r,null,"selected")){n;break}n++}r=r.nextSibling}e.selectedIndex=n}}},c=1,f=3,p=8;function h(){}function v(e){return e.id}var y=function(e){return function(t,n,a){if(a||(a={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var u=n;(n=i.createElement("html")).innerHTML=u}else l=n,!r&&i.createRange&&(r=i.createRange()).selectNode(i.body),r&&r.createContextualFragment?y=r.createContextualFragment(l):(y=i.createElement("body")).innerHTML=l,n=y.childNodes[0];var l,y,m,_=a.getNodeKey||v,g=a.onBeforeNodeAdded||h,b=a.onNodeAdded||h,C=a.onBeforeElUpdated||h,O=a.onElUpdated||h,N=a.onBeforeNodeDiscarded||h,j=a.onNodeDiscarded||h,x=a.onBeforeElChildrenUpdated||h,E=!0===a.childrenOnly,w={};function A(e){m?m.push(e):m=[e]}function S(e,t,n){!1!==N(e)&&(t&&t.removeChild(e),j(e),function e(t,n){if(t.nodeType===c)for(var r=t.firstChild;r;){var o=void 0;n&&(o=_(r))?A(o):(j(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function M(e){b(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=_(t);if(r){var o=w[r];o&&s(t,o)&&(t.parentNode.replaceChild(o,t),T(o,t))}M(t),t=n}}function T(r,o,a){var u,l=_(o);if(l&&delete w[l],!n.isSameNode||!n.isSameNode(t)){if(!a){if(!1===C(r,o))return;if(e(r,o),O(r),!1===x(r,o))return}if("TEXTAREA"!==r.nodeName){var h,v,y,m,b=o.firstChild,N=r.firstChild;e:for(;b;){for(y=b.nextSibling,h=_(b);N;){if(v=N.nextSibling,b.isSameNode&&b.isSameNode(N)){b=y,N=v;continue e}u=_(N);var j=N.nodeType,E=void 0;if(j===b.nodeType&&(j===c?(h?h!==u&&((m=w[h])?N.nextSibling===m?E=!1:(r.insertBefore(m,N),v=N.nextSibling,u?A(u):S(N,r,!0),N=m):E=!1):u&&(E=!1),(E=!1!==E&&s(N,b))&&T(N,b)):j!==f&&j!=p||(E=!0,N.nodeValue!==b.nodeValue&&(N.nodeValue=b.nodeValue))),E){b=y,N=v;continue e}u?A(u):S(N,r,!0),N=v}if(h&&(m=w[h])&&s(m,b))r.appendChild(m),T(m,b);else{var P=g(b);!1!==P&&(P&&(b=P),b.actualize&&(b=b.actualize(r.ownerDocument||i)),r.appendChild(b),M(b))}b=y,N=v}for(;N;)v=N.nextSibling,(u=_(N))?A(u):S(N,r,!0),N=v}var k=d[r.nodeName];k&&k(r,o)}}!function e(t){if(t.nodeType===c)for(var n=t.firstChild;n;){var r=_(n);r&&(w[r]=n),e(n),n=n.nextSibling}}(t);var P,k,R=t,F=R.nodeType,U=n.nodeType;if(!E)if(F===c)U===c?s(t,n)||(j(t),R=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(P=n.nodeName,(k=n.namespaceURI)&&k!==o?i.createElementNS(k,P):i.createElement(P)))):R=n;else if(F===f||F===p){if(U===F)return R.nodeValue!==n.nodeValue&&(R.nodeValue=n.nodeValue),R;R=n}if(R===n)j(t);else if(T(R,n,E),m)for(var V=0,W=m.length;V<W;V++){var B=w[m[V]];B&&S(B,B.parentNode,!1)}return!E&&R!==t&&t.parentNode&&(R.actualize&&(R=R.actualize(t.ownerDocument||i)),t.parentNode.replaceChild(R,t)),R}}(function(e,t){var n,r,o,i,a,s=t.attributes;for(n=s.length-1;n>=0;--n)o=(r=s[n]).name,i=r.namespaceURI,a=r.value,i?(o=r.localName||o,e.getAttributeNS(i,o)!==a&&e.setAttributeNS(i,o,a)):e.getAttribute(o)!==a&&e.setAttribute(o,a);for(n=(s=e.attributes).length-1;n>=0;--n)!1!==(r=s[n]).specified&&(o=r.name,(i=r.namespaceURI)?(o=r.localName||o,u(t,i,o)||e.removeAttributeNS(i,o)):u(t,null,o)||e.removeAttribute(o))});e.exports=y}])});
//# sourceMappingURL=apprun-html.js.map
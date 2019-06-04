!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});class o{constructor(){this._events={}}on(e,t,n={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})}off(e,t){let n=this._events[e];n&&((n=n.filter(e=>e.fn!==t)).length?this._events[e]=n:delete this._events[e])}run(e,...t){let n=this._events[e];return console.assert(!!n,"No subscriber for event: "+e),n&&((n=n.filter(n=>{const{fn:o,options:r}=n;return r.delay?this.delay(e,o,t,r):o.apply(this,t),!n.options.once})).length?this._events[e]=n:delete this._events[e]),n?n.length:0}once(e,t,n={}){this.on(e,t,Object.assign({},n,{once:!0}))}delay(e,t,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),t.apply(this,n)},o.delay)}}let r;const i="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e;i.app&&i._AppRunVersions?r=i.app:(r=new o,i.app=r,i._AppRunVersions="AppRun-2"),t.b=r}).call(this,n(3))},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(2);const i={meta:new WeakMap,defineMetadata(e,t,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[e]=t},getMetadataKeys(e){return e=Object.getPrototypeOf(e),this.meta.get(e)?Object.keys(this.meta.get(e)):[]},getMetadata(e,t){return t=Object.getPrototypeOf(t),this.meta.get(t)?this.meta.get(t)[e]:null}};function s(e,t={}){return(n,o,r)=>{const s=e?e.toString():o;return i.defineMetadata(`apprun-update:${s}`,{name:s,key:o,options:t},n),r}}function a(e,t={}){return function(n,o){const r=e?e.toString():o;i.defineMetadata(`apprun-update:${r}`,{name:r,key:o,options:t},n)}}function c(e){return function(t){return app.webComponent(e,t),t}}const u=(e,t)=>t?e.state[t]:e.state,d=(e,t,n)=>{if(t){const o=Object.assign({},e.state);o[t]=n,e.setState(o)}else e.setState(n)};var l=(e,t,n,o)=>{if(e.startsWith("$on")){const n=t[e];if(e=e.substring(1),"boolean"==typeof n)t[e]=(t=>o.run(e,t));else if("string"==typeof n)t[e]=(e=>o.run(n,e));else if("function"==typeof n)t[e]=(e=>o.setState(n(o.state,e)));else if(Array.isArray(n)){const[r,...i]=n;"string"==typeof r?t[e]=(e=>o.run(r,...i,e)):"function"==typeof r&&(t[e]=(e=>o.setState(r(o.state,...i,e))))}}else if("$bind"===e){const r=t.type||"text",i="string"==typeof t[e]?t[e]:t.name;if("input"===n)switch(r){case"checkbox":t.checked=u(o,i),t.onclick=(e=>d(o,i||e.target.name,e.target.checked));break;case"radio":t.checked=u(o,i)===t.value,t.onclick=(e=>d(o,i||e.target.name,e.target.value));break;case"number":case"range":t.value=u(o,i),t.oninput=(e=>d(o,i||e.target.name,Number(e.target.value)));break;default:t.value=u(o,i),t.oninput=(e=>d(o,i||e.target.name,e.target.value))}else"select"===n?(t.selectedIndex=u(o,i),t.onchange=(e=>{e.target.multiple||d(o,i||e.target.name,e.target.selectedIndex)})):"option"===n&&(t.selected=u(o,i),t.onclick=(e=>d(o,i||e.target.name,e.target.selected)))}else app.run("$",{key:e,tag:n,props:t,component:o})};const h={};o.b.on("get-components",e=>e.components=h);const f=e=>e;class p{constructor(e,t,n,r){this.state=e,this.view=t,this.update=n,this.options=r,this._app=new o.a,this._actions=[],this._history=[],this._history_idx=-1,this.start=((e=null,t={render:!0})=>this.mount(e,Object.assign({},t,{render:!0})))}render(e,t){o.b.render(e,t,this)}renderState(e){if(!this.view)return;const t=o.b.createElement;o.b.createElement=((e,n,...o)=>(n&&Object.keys(n).forEach(t=>{t.startsWith("$")&&(l(t,n,e,this),delete n[t])}),t(e,n,...o)));const n=this.view(e);if(o.b.createElement=t,o.b.run("debug",{component:this,state:e,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){const e="_c";if(this.unload){if(r._component!==this&&(this.tracking_id=(new Date).valueOf().toString(),r.setAttribute(e,this.tracking_id),"undefined"!=typeof MutationObserver)){const t=new MutationObserver(e=>{const{removedNodes:n,oldValue:o}=e[0];(o===this.tracking_id||Array.from(n).indexOf(r)>=0)&&(this.unload(),t.disconnect())});r.parentNode&&t.observe(r.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[e]})}}else r.removeAttribute&&r.removeAttribute(e);r._component=this}this.render(r,n),this.rendered&&this.rendered(this.state)}setState(e,t={render:!0,history:!1}){if(e instanceof Promise)e.then(e=>{this.setState(e,t)}).catch(e=>{throw console.error(e),e}),this._state=e;else{if(this._state=e,null==e)return;this.state=e,!1!==t.render&&this.renderState(e),!1!==t.history&&this.enable_history&&(this._history=[...this._history,e],this._history_idx=this._history.length-1),"function"==typeof t.callback&&t.callback(this.state)}}mount(e=null,t){if(console.assert(!this.element,"Component already mounted."),this.options=t=Object.assign({},this.options,t),this.element=e,this.global_event=t.global_event,this.enable_history=!!t.history,this.enable_history){const e=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(t.history.prev||"history-prev",e),this.on(t.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),t.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),h[e]=h[e]||[],h[e].push(this),this}is_global_event(e){return e&&(e.startsWith("#")||e.startsWith("/"))}add_action(e,t,n={}){t&&"function"==typeof t&&this.on(e,(...r)=>{const i=t(this.state,...r);o.b.run("debug",{component:this,event:e,e:r,state:this.state,newState:i,options:n}),this.setState(i,n)},n)}add_actions(){const e=this.update||{};i.getMetadataKeys(this).forEach(t=>{if(t.startsWith("apprun-update:")){const n=i.getMetadata(t,this);e[n.name]=[this[n.key].bind(this),n.options]}});const t={};Array.isArray(e)?e.forEach(e=>{const[n,o,r]=e;n.toString().split(",").forEach(e=>t[e.trim()]=[o,r])}):Object.keys(e).forEach(n=>{const o=e[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(e=>t[e.trim()]=o)}),t["."]||(t["."]=f),Object.keys(t).forEach(e=>{const n=t[e];"function"==typeof n?this.add_action(e,n):Array.isArray(n)&&this.add_action(e,n[0],n[1])})}run(e,...t){const n=e.toString();return this.global_event||this.is_global_event(n)?o.b.run(n,...t):this._app.run(n,...t)}on(e,t,n){const r=e.toString();return this._actions.push({name:r,fn:t}),this.global_event||this.is_global_event(r)?o.b.on(r,t,n):this._app.on(r,t,n)}unmount(){this._actions.forEach(e=>{const{name:t,fn:n}=e;this.global_event||this.is_global_event(t)?o.b.off(t,n):this._app.off(t,n)})}}p.__isAppRunComponent=!0;const m=(e,t={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return Object.assign({},t).observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=Object.assign({render:!0,shadow:!1},t);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o={};Array.from(this.attributes).forEach(e=>o[e.name]=e.value),this.children&&(o.children=Array.from(this.children),o.children.forEach(e=>e.parentElement.removeChild(e))),this._component=new e(o).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}}disconnectedCallback(){this._component.unmount(),this._component=null}attributeChangedCallback(...e){this._component&&this._component.run("attributeChanged",...e)}});const b=e=>{if(e||(e="#"),e.startsWith("#")){const[t,...n]=e.split("/");o.b.run(t,...n)||o.b.run("///",t,...n),o.b.run("//",t,...n)}else if(e.startsWith("/")){const[t,n,...r]=e.split("/");o.b.run("/"+n,...r)||o.b.run("///","/"+n,...r),o.b.run("//","/"+n,...r)}else o.b.run(e)||o.b.run("///",e),o.b.run("//",e)};n.d(t,"app",function(){return o.b}),n.d(t,"Component",function(){return p}),n.d(t,"on",function(){return a}),n.d(t,"update",function(){return s}),n.d(t,"customElement",function(){return c}),n.d(t,"event",function(){return s}),n.d(t,"ROUTER_EVENT",function(){return"//"}),n.d(t,"ROUTER_404_EVENT",function(){return"///"}),o.b.createElement=r.b,o.b.render=function(e,t,n){Object(r.c)(e,t,n)},o.b.Fragment=r.a,o.b.webComponent=((e,t,n)=>{"undefined"!=typeof customElements&&customElements.define(e,m(t,n))}),o.b.start=((e,t,n,o,r)=>{const i=Object.assign({},r,{render:!0,global_event:!0}),s=new p(t,n,o);return r&&r.rendered&&(s.rendered=r.rendered),s.mount(e,i),s});const y=e=>{};o.b.on("$",y),o.b.on("debug",e=>y),o.b.on("//",y),o.b.on("#",y),o.b.route=b,o.b.on("route",e=>o.b.route&&o.b.route(e)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.b.route===b&&(window.onpopstate=(()=>b(location.hash)),b(location.hash))});t.default=o.b;"object"==typeof window&&(window.Component=p,window.React=o.b)},function(e,t,n){"use strict";var o=n(0);let r=0;var i=function e(t,n,i=0){if(0===i&&(r=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>e(t,n,r++));let s=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(s=function(e,t,n){const{tag:r,props:i,children:s}=e;let a=i&&i.id,c=`_${n}_`;a?c=`_${a}_`:a=`_${n}_`,t.__componentCache||(t.__componentCache={});let u=t.__componentCache[c];u||(u=t.__componentCache[c]=new r(Object.assign({},i,{children:s})).mount(a)),u.mounted&&u.mounted(i,s);const d=u.state;let l="";return d instanceof Promise||!u.view||(l=u.view(d,i),u.rendered&&setTimeout(()=>u.rendered(d,i))),o.b.createElement("section",Object.assign({},i,{id:a}),l)}(t,n,r++)),s&&s.children&&(s.children=s.children.map(t=>e(t,n,r++))),s};n.d(t,"b",function(){return c}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return b});const s="_props";function a(e){const t=[],n=e=>{null!=e&&""!==e&&!1!==e&&t.push("function"==typeof e||"object"==typeof e?e:`${e}`)};return e&&e.forEach(e=>{Array.isArray(e)?e.forEach(e=>n(e)):n(e)}),t}function c(e,t,...n){const o=a(n);return"string"==typeof e?{tag:e,props:t,children:o}:Array.isArray(e)?e:void 0===e&&n?o:Object.getPrototypeOf(e).__isAppRunComponent?{tag:e,props:t,children:o}:e(t,o)}const u={},d=function(e,t,n={}){if(null==t)return;if(t=i(t,n),!e)return;Array.isArray(t)?h(e,t):h(e,[t])};function l(e,t){console.assert(!!e),function(e,t){const n=e.nodeName,o=`${t.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(e,t)?(h(e,t.children),m(e,t.props)):e.parentNode.replaceChild(p(t),e)}function h(e,t){const n=Math.min(e.childNodes.length,t.length);for(let o=0;o<n;o++){const n=t[o],r=e.childNodes[o];if("string"==typeof n)r.textContent!==n&&(3===r.nodeType?r.textContent=n:e.replaceChild(f(n),r));else{const t=n.props&&n.props.key;if(t)if(r.key===t)l(e.childNodes[o],n);else{const i=u[t];i?(e.insertBefore(i,r),e.appendChild(r),l(e.childNodes[o],n)):e.insertBefore(p(n),r)}else l(e.childNodes[o],n)}}let o=e.childNodes.length;for(;o>n;)e.removeChild(e.lastChild),o--;if(t.length>n){const o=document.createDocumentFragment();for(let e=n;e<t.length;e++)o.appendChild(p(t[e]));e.appendChild(o)}}function f(e){if(0===e.indexOf("_html:")){const t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",e.substring(6)),t}return document.createTextNode(e)}function p(e,t=!1){if(console.assert(null!=e),"string"==typeof e)return f(e);if(!e.tag||"function"==typeof e.tag)return f(JSON.stringify(e));const n=(t=t||"svg"===e.tag)?document.createElementNS("http://www.w3.org/2000/svg",e.tag):document.createElement(e.tag);return m(n,e.props),e.children&&e.children.forEach(e=>n.appendChild(p(e,t))),n}function m(e,t){console.assert(!!e),t=function(e,t){t.class=t.class||t.className,delete t.className;const n={};return e&&Object.keys(e).forEach(e=>n[e]=null),t&&Object.keys(t).forEach(e=>n[e]=t[e]),n}(e[s]||{},t||{}),e[s]=t;for(const n in t){const o=t[n];if("style"===n){e.style.cssText&&(e.style.cssText="");for(const t in o)e.style[t]!==o[t]&&(e.style[t]=o[t])}else if(n.startsWith("data-")){const t=n.substring(5).replace(/-(\w)/g,e=>e[1].toUpperCase());e.dataset[t]!==o&&(o||""===o?e.dataset[t]=o:delete e.dataset[t])}else"class"===n||n.startsWith("role")||n.indexOf("-")>0||e instanceof SVGElement||e.tagName.indexOf("-")>0?e.getAttribute(n)!==o&&(o?e.setAttribute(n,o):e.removeAttribute(n)):e[n]!==o&&(e[n]=o);"key"===n&&o&&(u[o]=e)}}function b(e,...t){return a(t)}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,,function(e,t,n){"use strict";n.r(t);var o,r=n(1),i=n(2);var s="http://www.w3.org/1999/xhtml",a="undefined"==typeof document?void 0:document;function c(e,t){var n=e.nodeName,o=t.nodeName;return n===o||!!(t.actualize&&n.charCodeAt(0)<91&&o.charCodeAt(0)>90)&&n===o.toUpperCase()}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,r=-1,i=0,s=e.firstChild;s;)if("OPTGROUP"===(o=s.nodeName&&s.nodeName.toUpperCase()))s=(n=s).firstChild;else{if("OPTION"===o){if(s.hasAttribute("selected")){r=i;break}i++}!(s=s.nextSibling)&&n&&(s=n.nextSibling,n=null)}e.selectedIndex=r}}},l=1,h=11,f=3,p=8;function m(){}function b(e){return e.id}var y=function(e){return function(t,n,r){if(r||(r={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName){var i=n;(n=a.createElement("html")).innerHTML=i}else u=n,!o&&a.createRange&&(o=a.createRange()).selectNode(a.body),o&&o.createContextualFragment?y=o.createContextualFragment(u):(y=a.createElement("body")).innerHTML=u,n=y.childNodes[0];var u,y,g,_=r.getNodeKey||b,v=r.onBeforeNodeAdded||m,C=r.onNodeAdded||m,A=r.onBeforeElUpdated||m,N=r.onElUpdated||m,E=r.onBeforeNodeDiscarded||m,O=r.onNodeDiscarded||m,x=r.onBeforeElChildrenUpdated||m,S=!0===r.childrenOnly,w={};function T(e){g?g.push(e):g=[e]}function j(e,t,n){!1!==E(e)&&(t&&t.removeChild(e),O(e),function e(t,n){if(t.nodeType===l)for(var o=t.firstChild;o;){var r=void 0;n&&(r=_(o))?T(r):(O(o),o.firstChild&&e(o,n)),o=o.nextSibling}}(e,n))}function k(e){C(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=_(t);if(o){var r=w[o];r&&c(t,r)&&(t.parentNode.replaceChild(r,t),M(r,t))}k(t),t=n}}function M(o,r,i){var s=_(r);if(s&&delete w[s],!n.isSameNode||!n.isSameNode(t)){if(!i){if(!1===A(o,r))return;if(e(o,r),N(o),!1===x(o,r))return}"TEXTAREA"!==o.nodeName?function(e,t){var n,o,r,i,s,u=t.firstChild,h=e.firstChild;e:for(;u;){for(i=u.nextSibling,n=_(u);h;){if(r=h.nextSibling,u.isSameNode&&u.isSameNode(h)){u=i,h=r;continue e}o=_(h);var m=h.nodeType,b=void 0;if(m===u.nodeType&&(m===l?(n?n!==o&&((s=w[n])?r===s?b=!1:(e.insertBefore(s,h),o?T(o):j(h,e,!0),h=s):b=!1):o&&(b=!1),(b=!1!==b&&c(h,u))&&M(h,u)):m!==f&&m!=p||(b=!0,h.nodeValue!==u.nodeValue&&(h.nodeValue=u.nodeValue))),b){u=i,h=r;continue e}o?T(o):j(h,e,!0),h=r}if(n&&(s=w[n])&&c(s,u))e.appendChild(s),M(s,u);else{var y=v(u);!1!==y&&(y&&(u=y),u.actualize&&(u=u.actualize(e.ownerDocument||a)),e.appendChild(u),k(u))}u=i,h=r}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=_(t))?T(n):j(t,e,!0),t=o}}(e,h,o);var g=d[e.nodeName];g&&g(e,t)}(o,r):d.TEXTAREA(o,r)}}!function e(t){if(t.nodeType===l||t.nodeType===h)for(var n=t.firstChild;n;){var o=_(n);o&&(w[o]=n),e(n),n=n.nextSibling}}(t);var R,P,U=t,V=U.nodeType,L=n.nodeType;if(!S)if(V===l)L===l?c(t,n)||(O(t),U=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,(R=n.nodeName,(P=n.namespaceURI)&&P!==s?a.createElementNS(P,R):a.createElement(R)))):U=n;else if(V===f||V===p){if(L===V)return U.nodeValue!==n.nodeValue&&(U.nodeValue=n.nodeValue),U;U=n}if(U===n)O(t);else if(M(U,n,S),g)for(var $=0,I=g.length;$<I;$++){var W=w[g[$]];W&&j(W,W.parentNode,!1)}return!S&&U!==t&&t.parentNode&&(U.actualize&&(U=U.actualize(t.ownerDocument||a)),t.parentNode.replaceChild(U,t)),U}}(function(e,t){var n,o,r,i,s,a=t.attributes;for(n=a.length-1;n>=0;--n)r=(o=a[n]).name,i=o.namespaceURI,s=o.value,i?(r=o.localName||r,e.getAttributeNS(i,r)!==s&&e.setAttributeNS(i,r,s)):e.getAttribute(r)!==s&&e.setAttribute(r,s);for(n=(a=e.attributes).length-1;n>=0;--n)!1!==(o=a[n]).specified&&(r=o.name,(i=o.namespaceURI)?(r=o.localName||r,t.hasAttributeNS(i,r)||e.removeAttributeNS(i,r)):t.hasAttribute(r)||e.removeAttribute(r))});n.d(t,"app",function(){return r.app}),n.d(t,"Component",function(){return r.Component}),n.d(t,"on",function(){return r.on}),n.d(t,"update",function(){return r.update}),n.d(t,"customElement",function(){return r.customElement}),r.default.createElement=i.b,r.default.render=function(e,t,n){if("string"==typeof t)if(t=t.trim(),e.firstChild){const n=e.cloneNode(!1);n.innerHTML=t,y(e,n)}else e.innerHTML=t;else Object(i.c)(e,t,n)},r.default.Fragment=i.a;t.default=r.default}])});
//# sourceMappingURL=apprun-html.js.map
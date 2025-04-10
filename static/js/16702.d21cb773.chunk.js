/*! For license information please see 16702.d21cb773.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[16702],{13922:(t,e,n)=>{n.d(e,{c:()=>i});var r=n(30697);function i(t,e,n){if(!(0,r.i)())return;const i=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new i(e,n)}},16702:(t,e,n)=>{n.r(e),n.d(e,{Icon:()=>g});var r=n(30697),i=n(37022),o=n(5417),a=n(50965),s=n(13922),c=n(64293),l=n(94161);const u="flip-rtl",d={},f={},h={s:16,m:24,l:32};function p(t){let{icon:e,scale:n}=t;const r=h[n],i=function(t){const e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){const e=/[a-z]/i;t=n.map(((t,n)=>t.replace(e,(function(t,e){return 0===n&&0===e?t:t.toUpperCase()})))).join("")}return e?`i${t}`:t}(e),o="F"===i.charAt(i.length-1);return`${o?i.substring(0,i.length-1):i}${r}${o?"F":""}`}function v(t){return d[t]}const m=l.AH`:host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}`;class g extends o.WF{constructor(){super(...arguments),this.visible=!1,this.flipRtl=!1,this.icon=null,this.preload=!1,this.scale="m"}static#t=(()=>this.properties={pathData:16,visible:16,flipRtl:7,icon:3,preload:7,scale:3,textLabel:1})();static#e=(()=>this.styles=m)();connectedCallback(){if(super.connectedCallback(),this.preload)return this.visible=!0,void this.loadIconPathData();this.visible||this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}willUpdate(t){(t.has("icon")&&(this.hasUpdated||null!==this.icon)||t.has("scale")&&(this.hasUpdated||"m"!==this.scale))&&this.loadIconPathData()}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async loadIconPathData(){const{icon:t,scale:e,visible:n}=this;if(!(0,r.i)()||!t||!n)return;const i={icon:t,scale:e},o=v(p(i))||await async function(t){const e=p(t),n=v(e);if(n)return n;f[e]||(f[e]=fetch((0,r.g)(`./assets/icon/${e}.json`)).then((t=>t.json())).catch((()=>(c.l.error(`${t.icon} (${t.scale}) icon failed to load`),""))));const i=await f[e];return d[e]=i,i}(i);t===this.icon&&(this.pathData=o)}waitUntilVisible(t){this.intersectionObserver=(0,s.c)("intersection",(e=>{e.forEach((e=>{e.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}render(){const{el:t,flipRtl:e,pathData:n,scale:r,textLabel:s}=this,c=(0,a.g)(t),l=h[r],d=!!s,f=[].concat(n||"");return this.el.ariaHidden=(0,a.t)(!d),this.el.ariaLabel=d?s:null,this.el.role=d?"img":null,i.qy`<svg aria-hidden=true class=${(0,o.CP)({[u]:"rtl"===c&&e,svg:!0})} fill=currentColor height=100% viewBox=${`0 0 ${l} ${l}`} width=100% xmlns=http://www.w3.org/2000/svg>${f.map((t=>"string"==typeof t?i.JW`<path d=${t??i.s6} />`:i.JW`<path d=${t.d??i.s6} opacity=${("opacity"in t?t.opacity:1)??i.s6} />`))}</svg>`}}(0,r.c)("calcite-icon",g)},50965:(t,e,n)=>{n.d(e,{C:()=>S,D:()=>F,a:()=>M,b:()=>O,c:()=>k,d:()=>V,e:()=>q,f:()=>z,g:()=>$,h:()=>T,i:()=>B,k:()=>R,l:()=>W,m:()=>K,n:()=>N,p:()=>E,q:()=>I,r:()=>U,s:()=>j,t:()=>P,u:()=>_,v:()=>L,w:()=>H,x:()=>D,y:()=>A,z:()=>X});var r=n(30697),i=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),o=typeof Element>"u",a=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,s=!o&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return t?.ownerDocument},c=function t(e,n){var r;void 0===n&&(n=!0);var i=null==e||null===(r=e.getAttribute)||void 0===r?void 0:r.call(e,"inert");return""===i||"true"===i||n&&e&&t(e.parentNode)},l=function t(e,n,r){for(var o=[],s=Array.from(e);s.length;){var l=s.shift();if(!c(l,!1))if("SLOT"===l.tagName){var u=l.assignedElements(),d=t(u.length?u:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:l,candidates:d})}else{a.call(l,i)&&r.filter(l)&&(n||!e.includes(l))&&o.push(l);var f=l.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(l),h=!c(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(l));if(f&&h){var p=t(!0===f?l.children:f.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:l,candidates:p})}else s.unshift.apply(s,l.children)}}return o},u=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},d=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,n=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===n||"true"===n}(t))&&!u(t)?0:t.tabIndex},f=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},h=function(t){return"INPUT"===t.tagName},p=function(t){return function(t){return h(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,n=t.form||s(t),r=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)e=r(window.CSS.escape(t.name));else try{e=r(t.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var i=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form);return!i||i===t}(t)},v=function(t){var e=t.getBoundingClientRect(),n=e.width,r=e.height;return 0===n&&0===r},m=function(t,e){var n=e.displayCheck,r=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var i=a.call(t,"details>summary:first-of-type")?t.parentElement:t;if(a.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return v(t)}else{if("function"==typeof r){for(var o=t;t;){var c=t.parentElement,l=s(t);if(c&&!c.shadowRoot&&!0===r(c))return v(t);t=t.assignedSlot?t.assignedSlot:c||l===t.ownerDocument?c:l.host}t=o}if(function(t){var e,n,r,i,o=t&&s(t),a=null===(e=o)||void 0===e?void 0:e.host,c=!1;if(o&&o!==t)for(c=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=t&&null!==(i=t.ownerDocument)&&void 0!==i&&i.contains(t));!c&&a;){var l,u,d;c=!(null===(u=a=null===(l=o=s(a))||void 0===l?void 0:l.host)||void 0===u||null===(d=u.ownerDocument)||void 0===d||!d.contains(a))}return c}(t))return!t.getClientRects().length;if("legacy-full"!==n)return!0}return!1},g=function(t,e){return!(e.disabled||c(e)||function(t){return h(t)&&"hidden"===t.type}(e)||m(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var r=e.children.item(n);if("LEGEND"===r.tagName)return!!a.call(e,"fieldset[disabled] *")||!r.contains(t)}return!0}e=e.parentElement}return!1}(e))},b=function(t,e){return!(p(e)||d(e)<0||!g(t,e))},y=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},w=function t(e){var n=[],r=[];return e.forEach((function(e,i){var o=!!e.scopeParent,a=o?e.scopeParent:e,s=function(t,e){var n=d(t);return n<0&&e&&!u(t)?0:n}(a,o),c=o?t(e.candidates):a;0===s?o?n.push.apply(n,c):n.push(a):r.push({documentOrder:i,tabIndex:s,item:e,isScope:o,content:c})})),r.sort(f).reduce((function(t,e){return e.isScope?t.push.apply(t,e.content):t.push(e.content),t}),[]).concat(n)},x=function(t,e){var n;return n=(e=e||{}).getShadowRoot?l([t],e.includeContainer,{filter:b.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:y}):function(t,e,n){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return e&&a.call(t,i)&&r.unshift(t),r.filter(n)}(t,e.includeContainer,b.bind(null,e)),w(n)};const E={getShadowRoot:!0};function N(t){return Array.isArray(t)?t:Array.from(t)}function S(t){const e=R(t,`.${r.C.darkMode}, .${r.C.lightMode}, .${r.C.autoMode}`);return e?.classList.contains("calcite-mode-dark")||e?.classList.contains("calcite-mode-auto")&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function $(t){const e=R(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function A(t){return t.getRootNode()}function k(t){const e=A(t);return"host"in e?e:null}function C(t){return t.host||null}function I(t,e){let{selector:n,id:r}=e;if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const i=A(t);return(r?"getElementById"in i?i.getElementById(r):null:n?i.querySelector(n):null)||I(C(i),{selector:n,id:r})}function R(t,e){return t?t.closest(e)||R(C(A(t)),e):null}async function O(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function D(t){if(t)return x(t,E)[0]??t}function T(t){D(t)?.focus()}function z(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function L(t,e,n){return"string"==typeof e&&""!==e?e:""===e||!0===e?t[n]:void 0}function P(t){return(!!t).toString()}function U(t){return M(t)||function(t){return!!function(t){return function(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function F(t){for(const e of t.childNodes)if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()||e.nodeType===Node.ELEMENT_NODE)return!0;return!1}function M(t){return!!j(t).length}function j(t,e){return q(t.target,e)}function q(t,e){const n=t.assignedElements({flatten:!0});return e?function(t,e){return t.filter((t=>t.matches(e)))}(n,e):n}function B(t){return!(!t.isPrimary||0!==t.button)}function _(t){return 0===t.detail}const V=function(t,e,n){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=t.indexOf(e),o=0===i,a=i===t.length-1;let s;return r&&(n="previous"===n&&o?"last":"next"===n&&a?"first":n),s="previous"===n?t[i-1]||t[r?t.length-1:i]:"next"===n?t[i+1]||t[r?0:i]:"last"===n?t[t.length-1]:t[0],O(s),s};function W(t,e){if(t.parentNode!==e.parentNode)return!1;const n=Array.from(t.parentNode.children);return n.indexOf(t)<n.indexOf(e)}async function X(t,e,n,r){return G(t,e,"animation",n,r)}async function H(t,e,n,r){return G(t,e,"transition",n,r)}function J(t,e,n){const r="transition"===e?"transitionProperty":"animationName";return t.getAnimations().find((t=>t[r]===n))}async function G(t,e,n,r,i){let o=J(t,n,e);if(o||(await Y(),o=J(t,n,e)),!o)return async function(t,e){await Y(),t?.(),await Y(),e?.()}(r,i);r?.();try{await o.finished}catch{}finally{i?.()}}function Y(){return new Promise((t=>requestAnimationFrame((()=>t()))))}function K(t){return t.endsWith("px")}},64293:(t,e,n)=>{n.d(e,{l:()=>c});var r=n(30697);const i=new Set,o={trace:0,debug:1,info:2,warn:4,error:8,off:10};function a(t){if(function(t){return o[t]>=o[r.l]}(t)){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].call(this,"%ccalcite","background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;",...n)}}let s;const c={debug:t=>a("debug",t),info:t=>a("info",t),warn:t=>a("warn",t),error:t=>a("error",t),trace:t=>a("trace",t),deprecated:function(t,e){let{component:n,name:r,suggested:o,removalVersion:c}=e;const l=`${t}:${"component"===t?"":n}${r}`;if(i.has(l))return;i.add(l);const u=Array.isArray(o);u&&!s&&(s=new Intl.ListFormat("en",{style:"long",type:"disjunction"}));a("warn",`[${r}] ${t} is deprecated and will be removed in ${"future"===c?"a future version":`v${c}`}.${o?` Use ${u?s.format(o.map((t=>`"${t}"`))):`"${o}"`} instead.`:""}`)}}}}]);
//# sourceMappingURL=16702.d21cb773.chunk.js.map
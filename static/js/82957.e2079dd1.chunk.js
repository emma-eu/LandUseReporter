"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[82957],{19463:(e,t,n)=>{n.d(t,{CW:()=>m,Fm:()=>a,Hz:()=>p,JQ:()=>h,JZ:()=>I,ND:()=>F,R_:()=>o,U9:()=>c,fu:()=>i,nr:()=>f,oF:()=>s,rq:()=>u,z$:()=>l});const r=[["binary","application/octet-stream","bin",""]];function i(e,t){return null!=g(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const n=u(t,e.supportedFormats??[]);return null!=n&&e.editFormats.includes(n)}function o(e,t){return M(function(e,t){const n=e.toLowerCase();return b(t).find((e=>w(e)===n))}(e,t))}function d(e,t){return M(g(e,t))}function a(e,t){return w(function(e,t){return b(t).find((t=>M(t)===e))}(e,t))}function u(e,t){return d(e.name,t)??o(e.type,t)}function l(e,t,n){return o(e,n)??d(t,n)}function c(e){let{supportedFormats:t}=e;return l("model/gltf-binary","glb",t)}function h(e){const t=c(e);return null!=t&&e.editFormats.includes(t)}function m(e){let{supportedFormats:t}=e;return l("model/gltf+json","gltf",t)}function p(e){if(!e)return null;const t=c(e),n=m(e);let r=null;for(const i of e.queryFormats){if(i===t)return i;i===n&&(r=i)}return r}function f(e){let{supportedFormats:t}=e;return l("application/esri3do-SR_world","wld",t)}function F(e){let{supportedFormats:t}=e;return l("application/esri3do-SR_prj","prj",t)}function b(e){return[...r,...e]}function g(e,t){const n=e.toLowerCase();return b(t).find((e=>y(e).some((e=>n.endsWith(e)))))}function M(e){return e?.[0]}function w(e){return e?.[1].toLowerCase()}function y(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}function I(e){return e.tables?.find((e=>"assetMaps"===e.role))}},35298:(e,t,n)=>{n.d(t,{TA:()=>i,We:()=>d,Z3:()=>s,ZJ:()=>a,w5:()=>u});var r=n(3825);const i=(0,n(49723).vD)(),s=new Map,o=new Map;new Map;async function d(e,t,n){if(!e||!n)return!1;if(!t)return!0;const i=new URL(e).host;let o=s.get(i);if(!o){const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");o=(await(0,r.A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return o===t}async function a(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!t)return!0;const s=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),d=o.get(s)?.entries();if(d)for(const[o,a]of d)if(a.name===t){const e=!a.stack?.hasForwardEdits();if(!e&&r){const[{deleteForwardEdits:e},{default:t}]=await Promise.all([n.e(56868).then(n.bind(n,56868)),n.e(37028).then(n.bind(n,37028))]),r=await e(s,o,new t({sessionId:i,moment:a.moment}));return r.success&&a.stack?.clearForwardEdits(),r.success}return e}return!0}function u(e,t){if(!e)return!1;const n=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),r=o.get(n)?.entries();if(r)for(const[i,s]of r)if(s.name===t)return"edit"===s.lockType;return!1}},61979:(e,t,n)=>{n.d(t,{Jz:()=>c,Mk:()=>f,Zk:()=>m,dP:()=>h,gz:()=>b,w6:()=>g});var r=n(35143),i=n(54099),s=n(53084),o=n(50346),d=n(46053),a=(n(81806),n(76460),n(85842)),u=n(35298);const l=new i.A.EventEmitter;function c(e){return l.on("apply-edits",new WeakRef(e))}function h(e){return l.on("update-moment",new WeakRef(e))}function m(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=(0,o.Tw)();return r=null==t||r,l.emit("apply-edits",{serviceUrl:e,layerId:t,gdbVersion:n,mayReceiveServiceEdits:r,result:i.promise}),i}const p=Symbol();function f(e){return null!=e&&"object"==typeof e&&p in e}function F(e){return null!=e&&"object"==typeof e&&"gdbVersion"in e}function b(e,t,n){const r=new URL(e).host,i=u.Z3.get(r),s=e=>!e||e===i;return s(t)&&s(n)||t===n}const g=e=>{var t;let n=class extends e{constructor(){super(...arguments),this[t]=!0,this._applyEditsHandler=e=>{const{serviceUrl:t,layerId:n,gdbVersion:r,mayReceiveServiceEdits:i,result:o}=e,d=t===this.url,a=null!=n&&null!=this.layerId&&n===this.layerId,u=F(this),l=F(this)&&b(t,r,this.gdbVersion);if(!d||u&&!l||!a&&!i)return;const c=o.then((e=>{if(this.lastEditsEventDate=new Date,a&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",(0,s.o8)(e)),e;const n=e.editedFeatures?.find((e=>{let{layerId:t}=e;return t===this.layerId}));if(n){const{adds:t,updates:r,deletes:i}=n.editedFeatures,o={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:t?t.map((e=>{let{attributes:t}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],deletedFeatures:i?i.map((e=>{let{attributes:t}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],updatedFeatures:r?r.map((e=>{let{current:{attributes:t}}=e;return{objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}})):[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)};return this.emit("edits",o),o}const i={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,s.o8)(e.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,s.o8)(e.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(t,r,i.historicMoment)&&this.emit("edits",i),i})).then((e=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(t,r,e.historicMoment)&&(this.historicMoment=e.historicMoment),e)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=e=>{const{serviceUrl:t,gdbVersion:n,moment:r}=e,i=t===this.url,s=F(this),o=F(this)&&b(t,n,this.gdbVersion),d=F(this)&&!b(t,this.gdbVersion,null);i&&s&&o&&d&&"historicMoment"in this&&this.historicMoment!==r&&(this.historicMoment=r)},this.when().then((()=>{this.addHandles(c(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(h(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(e,t,n){return"historicMoment"in this&&this.historicMoment!==n&&(0,u.w5)(e,t)}};return t=p,(0,r._)([(0,d.MZ)()],n.prototype,"lastEditsEventDate",void 0),n=(0,r._)([(0,a.$)("esri.layers.mixins.EditBusLayer")],n),n}}}]);
//# sourceMappingURL=82957.e2079dd1.chunk.js.map
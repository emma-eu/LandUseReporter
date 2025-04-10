"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9926],{18047:(e,t,n)=>{n.d(t,{ZV:()=>u,yx:()=>l});var r=n(73444);const i={ar:"ar-u-nu-latn"};let a=new WeakMap,o={};function l(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function u(e,t){return Object.is(e,-0)&&(e=0),function(e){const t=e||o;if(!a.has(t)){const n=(0,r.JK)(),o=i[(0,r.JK)()]||n;a.set(t,new Intl.NumberFormat(o,e))}return a.get(t)}(t).format(e)}(0,r.Ml)((()=>{a=new WeakMap,o={}})),new Map},29926:(e,t,n)=>{n.r(t),n.d(t,{applyTextFormattingHTML:()=>_,createFieldInfoMap:()=>V,findRelatedLayer:()=>oe,findUtilityNetwork:()=>le,fixTokens:()=>j,formatAttributes:()=>Y,formatEditInfo:()=>Q,formatValueToFieldInfo:()=>G,getAllFieldInfos:()=>K,getFieldInfo:()=>J,getFieldInfoLabel:()=>A,getFixedFieldName:()=>k,getFixedFieldNames:()=>q,getHighlightKeyForFeature:()=>fe,getSourceLayer:()=>N,graphicCallback:()=>x,htmlEntities:()=>P,isAssociatedFeatureSupportedLayer:()=>O,isExpressionField:()=>Z,isFeatureSupportedLayer:()=>$,isGraphicForRelatableFeatureSupportedLayer:()=>z,isRelatableFeatureSupportedLayer:()=>S,isRelatableLayer:()=>D,isRelatedField:()=>ee,preLayerQueryCallback:()=>ie,preRequestCallback:()=>ae,querySourceLayer:()=>B,queryUpdatedFeature:()=>X,shouldOpenInNewTab:()=>C,substituteAttributes:()=>v,substituteFieldsInLinksAndAttributes:()=>M});var r=n(44208),i=n(53966),a=n(799),o=n(97770),l=n(18047),u=n(30524),s=n(83531),f=n(4560),c=n(71386),d=n(56400);const p=()=>i.A.getLogger("esri.widgets.Feature.support.featureUtils"),y=/href=(""|'')/gi,m=/(\{([^{\r\n]+)\})/g,b=/'/g,g=/^\s*expression\//i,h=/(\n)/gi,I=/[\u00A0-\u9999<>&]/gim,F=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,w=/^(?:mailto:|tel:)/,T="relationships/",L=(0,o.J2)("short-date-short-time");function N(e){if(null!=e)return(e.sourceLayer||e.layer)??void 0}async function x({type:e,value:t,event:n}){try{return"function"==typeof t?t(n):await t}catch(r){return void p().error("error",`An error occurred when calling the "${e}" function`,{error:r,graphic:n.graphic,value:t})}}function C(e=""){if(e)return!w.test(e.trim().toLowerCase())}function Z(e){return!!e&&g.test(e)}function A(e,t){const n=function(e,t){if(!t||!Z(t)||!e)return;const n=t.replace(g,"").toLowerCase();return e.find((({name:e})=>e.toLowerCase()===n))}(t,e?.fieldName);return n?n.title||null:e?e.label||e.fieldName:null}function k(e,t){const n=R(t,e);return n?n.name:e}function q(e,t){return e&&e.map((e=>k(e,t)))}function R(e,t){return e&&"function"==typeof e.getField&&t?e.getField(t)??null:null}function E(e){return`${e}`.trim()}function M({attributes:e,globalAttributes:t,layer:n,text:r,expressionAttributes:i,fieldInfoMap:a}){return r?v({formattedAttributes:t,template:U(r,{...t,...i,...e},n),fieldInfoMap:a}):""}function v({formattedAttributes:e,template:t,fieldInfoMap:n}){return E(function(e){return e.replaceAll(y,"")}((0,a.HC)((0,a.HC)(t,(e=>function(e,t){const n=t.get(e.toLowerCase());return`{${n?.fieldName||e}}`}(e,n))),e)))}function j(e,t){return e.replaceAll(m,((e,n,r)=>{const i=R(t,r);return i?`{${i.name}}`:n}))}function U(e,t,n){const r=j(e,n);return r?r.replaceAll(F,((e,n,r)=>function(e,t,n){const r=(t=E(t))&&"{"!==t[0];return(0,a.HC)(e,function(e,t=!1){const n={...e};return Object.keys(n).forEach((e=>function(e,t,n=!1){const r=t[e];if("string"==typeof r){const i="%27",a=(n?encodeURIComponent(r):r).replaceAll(b,i);t[e]=a}}(e,n,t))),n}(n,r||!1))}(e,n||r,t))):r}function $(e){return null!=e&&"object"==typeof e&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&("feature"===e.type||"scene"===e.type||"subtype-group"===e.type||"subtype-sublayer"===e.type||"sublayer"===e.type)&&"when"in e}function D(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function S(e){return $(e)&&D(e)}function O(e){return!(!(e&&"object"==typeof e&&"createQuery"in e&&"getField"in e&&"queryFeatureCount"in e&&"queryFeatures"in e&&"queryObjectIds"in e&&"capabilities"in e&&"fields"in e&&"fieldsIndex"in e&&"type"in e)||"feature"!==e.type&&"subtype-group"!==e.type&&"subtype-sublayer"!==e.type&&"sublayer"!==e.type||!("when"in e))&&("subtype-sublayer"===e.type&&"parent"in e&&e.parent&&"object"==typeof e.parent?"globalIdField"in e.parent:"globalIdField"in e)}function z(e){return!!e&&"object"==typeof e&&"sourceLayer"in e&&S(e.sourceLayer)}function G(e,t){const{fieldInfos:n,fieldName:r,preventPlacesFormatting:i,layer:a,timeZone:o}=t,s=J(n,r),c=R(a,r);if(s&&!(0,u.JL)(r)){const t=c?.type,n=s.format?.dateFormat;if("date"===t||"date-only"===t||"time-only"===t||"timestamp-offset"===t||n)return(0,f.i0)(e,{format:n,fieldType:t,timeZoneOptions:{layerTimeZone:a&&"preferredTimeZone"in a?a.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!a||!("datesInUnknownTimezone"in a)||!a.datesInUnknownTimezone)}})}const d=s?.format;return"string"==typeof e&&(0,u.JL)(r)&&d?function(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?H(e,",",", ",t):e.includes(";")?H(e,";","; ",t):e.includes(" ")?H(e," "," ",t):(0,l.ZV)(Number(e),(0,l.yx)(t))}(e,d):"string"==typeof(e=function(e,t){if("string"==typeof e&&t&&null==t.dateFormat&&(null!=t.places||null!=t.digitSeparator)){const t=Number(e);if(!isNaN(t))return t}return e}(e,d))||null==e||null==d?_(e):(0,l.ZV)(e,i?{...(0,l.yx)(d),minimumFractionDigits:0,maximumFractionDigits:20}:(0,l.yx)(d))}function H(e,t,n,r){return e.trim().split(t).map((e=>(0,l.ZV)(Number(e),(0,l.yx)(r)))).join(n)}function J(e,t){if(e?.length&&t)return e.find((e=>e.fieldName?.toLowerCase()===t.toLowerCase()))}function Q(e,t,n,r){const{creatorField:i,creationDateField:a,editorField:l,editDateField:u}=e;if(!t)return;const s=(0,d.hv)(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r)||!r.datesInUnknownTimezone),n,L,"date"),f={...L,...s},c=t[u];if("number"==typeof c){const e=t[l];return{type:"edit",date:(0,o.Yq)(c,f),user:e}}const p=t[a];if("number"==typeof p){const e=t[i];return{type:"create",date:(0,o.Yq)(p,f),user:e}}return null}function V(e,t){const n=new Map;if(!e)return n;for(const r of e){if(!r.fieldName)continue;const e=k(r.fieldName,t);r.fieldName=e,n.set(e.toLowerCase(),r)}return n}function K(e){const t=[];if(!e)return t;const{fieldInfos:n,content:r}=e;return n&&t.push(...n),r&&Array.isArray(r)?(r.forEach((e=>{if("fields"===e.type){const n=e?.fieldInfos;n&&t.push(...n)}})),t):t}function P(e){return e.replaceAll(I,(e=>`&#${e.charCodeAt(0)};`))}function _(e){return"string"==typeof e?e.replaceAll(h,'<br class="esri-text-new-line" />'):e}function W(e){const{value:t,fieldName:n,fieldInfos:i,fieldInfoMap:a,layer:o,graphic:l,timeZone:s}=e;if(null==t)return"";const c=function({fieldName:e,value:t,graphic:n,layer:i}){if(ee(e))return null;if(!i||"function"!=typeof i.getFieldDomain)return null;const a=n&&i.getFieldDomain(e,{feature:n,excludeImpliedDomains:(0,r.A)("esri-widget-legacy-field-domain-calculation")});return a&&"coded-value"===a.type?a.getName(t):null}({fieldName:n,value:t,graphic:l,layer:o});if(c)return c;const d=function({fieldName:e,graphic:t,layer:n}){if(ee(e))return null;if(!n||"function"!=typeof n.getFeatureType)return null;const{typeIdField:r}=n;if(!r||e!==r)return null;const i=n.getFeatureType(t);return i?i.name:null}({fieldName:n,graphic:l,layer:o});if(d)return d;if(a.get(n.toLowerCase()))return G(t,{fieldInfos:i||Array.from(a.values()),fieldName:n,layer:o,timeZone:s});const p=o?.fieldsIndex?.get(n);return p&&((0,f.fs)(p)||(0,u.OH)(p))?(0,f.i0)(t,{fieldType:p.type,timeZoneOptions:{layerTimeZone:o&&"preferredTimeZone"in o?o.preferredTimeZone:null,viewTimeZone:s,datesInUnknownTimezone:!(!o||!("datesInUnknownTimezone"in o)||!o.datesInUnknownTimezone)}}):_(t)}function Y({fieldInfos:e,attributes:t,layer:n,graphic:r,fieldInfoMap:i,relatedInfos:a,timeZone:o}){const l={};return a?.forEach((t=>function({attributes:e,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a}){e&&t&&(t.relatedFeatures?.forEach((o=>te({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a}))),t.relatedStatsFeatures?.forEach((o=>te({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:i,timeZone:a}))))}({attributes:l,relatedInfo:t,fieldInfoMap:i,fieldInfos:e,layer:n,timeZone:o}))),t&&Object.keys(t).forEach((a=>{const u=t[a];l[a]=W({fieldName:a,fieldInfos:e,fieldInfoMap:i,layer:n,value:u,graphic:r,timeZone:o})})),l}async function B(e,t){const{layer:n,graphic:r,outFields:i,objectIds:a,returnGeometry:o,spatialReference:l}=e,u=a[0];if("number"!=typeof u&&"string"!=typeof u){const e="Could not query required fields for the specified feature. The feature's ID is invalid.",t={layer:n,graphic:r,objectId:u,requiredFields:i};return p().warn(e,t),null}if(!(0,s.BR)(n)?.operations?.supportsQuery){const e="The specified layer cannot be queried. The following fields will not be available.",t={layer:n,graphic:r,requiredFields:i,returnGeometry:o};return p().warn(e,t),null}const f=n.createQuery();return f.objectIds=a,f.outFields=i?.length?i:[n.objectIdField],f.returnGeometry=!!o,f.returnZ=!!o,f.returnM=!!o,f.outSpatialReference=l,(await n.queryFeatures(f,t)).features[0]}async function X({graphic:e,popupTemplate:t,layer:n,spatialReference:r},i){if(!n||!t)return;if("function"==typeof n.load&&await n.load(i),!e.attributes)return;const a=n.objectIdField,o=e.attributes[a];if(null==o)return;const l=[o],s=await t.getRequiredFields(n.fieldsIndex),f=(0,u.Kl)(s,e),d=f?[]:s.includes(a)?s:[...s,a],p=t.returnGeometry||await async function(e){if(!e.expressionInfos?.length)return!1;const t=await(0,c.lw)(),{arcadeUtils:{hasGeometryFunctions:n}}=t;return n(e)}(t);if(f&&!p)return;const y=await B({layer:n,graphic:e,outFields:d,objectIds:l,returnGeometry:p,spatialReference:r},i);y&&(y.geometry&&(e.geometry=y.geometry),y.attributes&&(e.attributes={...e.attributes,...y.attributes}))}function ee(e=""){return!!e&&e.includes(T)}function te({attributes:e,graphic:t,relatedInfo:n,fieldInfos:r,fieldInfoMap:i,layer:a,timeZone:o}){e&&t&&n&&Object.keys(t.attributes).forEach((l=>{const u=function(e){return`${T}${e.layerId}/${e.fieldName}`}({layerId:n.relation.id.toString(),fieldName:l}),s=t.attributes[l];e[u]=W({fieldName:u,fieldInfos:r,fieldInfoMap:i,layer:a,value:s,graphic:t,timeZone:o})}))}const ne=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},re=({layer:e,method:t,query:n,definitionExpression:r})=>{if(!e.capabilities?.query?.supportsCacheHint||"attachments"===t)return;const i=null!=n.where?n.where:null,a=null!=n.geometry?n.geometry:null;ne(r)||ne(i)||"extent"===a?.type||"tile"===n.resultType||(n.cacheHint=!0)},ie=({query:e,layer:t,method:n})=>{re({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},ae=({queryPayload:e,layer:t,method:n})=>{re({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function oe(e,t,n){return e&&t&&n?"sublayer"===t.type?se({layers:t.layer?.sublayers,map:e,relatedLayer:t,relationship:n})||se({layers:t.layer?.subtables,map:e,relatedLayer:t,relationship:n}):se({layers:e.allLayers,map:e,relatedLayer:t,relationship:n})||se({layers:e.allTables,map:e,relatedLayer:t,relationship:n}):null}function le(e,t){return e&&"utilityNetworks"in e&&t?e.utilityNetworks?.find((e=>e.isUtilityLayer(t))):null}function ue(e,t){return e?.allTables.find((e=>"feature"===e.type&&e.layerId===t.id&&e.url===t.layer?.url))}function se({map:e,relationship:t,relationship:{relatedTableId:n},relatedLayer:r,layers:i}){if(!i)return null;for(const a of i){if("map-image"===a.type){const n=se({layers:a.sublayers,map:e,relatedLayer:r,relationship:t})||se({layers:a.subtables,map:e,relatedLayer:r,relationship:t});if(n)return n;continue}if(!S(a))continue;if("sublayer"===r.type){if(a!==r&&a.id===n)return a.isTable?ue(e,a):a;continue}const i="scene"===r.type&&r.associatedLayer?r.associatedLayer.url:r.url;if(!i)return null;if("sublayer"!==a.type){if(a!==r&&a.url===i&&a.layerId===n)return a}else if(a!==r&&a.layer?.url===i&&a.id===n)return a.isTable?ue(e,a):a}return null}function fe(e){const t=e.getObjectId();return null!=t?`oid:${t}`:`uid:${e.uid}`}}}]);
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3186,4601,9340],{39516:(e,t,n)=>{let r;async function i(){return null==r&&(r=n.e(4123).then(n.bind(n,44123)).then((e=>new e.WhereClauseCache(500,500)))),r}async function s(e,t){const n=await i(),r=n.get(e,t);if(null==r)throw n.getError(e,t);return r}function o(e,t){return e||=null,t||=null,"1=1"===e?t??e:"1=1"===t?e??t:e&&t?`(${e}) AND (${t})`:e??t}function a(e,t){return e||=null,t||=null,"1=1"===e||"1=1"===t||e===t?"1=1"===e?e:t:e&&t?`(${e}) OR (${t})`:e??t}n.d(t,{GP:()=>s,IW:()=>a,mA:()=>o})},13069:(e,t,n)=>{n.d(t,{AG:()=>a,lk:()=>i,vD:()=>o,yS:()=>s});const r="randomUUID"in crypto;function i(){if(r)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function s(){return`{${i().toUpperCase()}}`}function o(){return`{${i()}}`}function a(e){const t=e.toUpperCase();return"{"!==e[0]?`{${t}}`:t}},32756:(e,t,n)=>{n.d(t,{Rr:()=>l,fY:()=>p,ne:()=>u});var r=n(90237),i=n(93637),s=n(10107),o=(n(44208),n(53966),n(87811),n(40608)),a=n(91880);function l(e,t,n){if(!e)return null;const r=e.find((e=>!!e.field));if(!r)return null;const i=new a.A;return i.read(r,n),[i]}const u={type:[a.A],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:l},write:{writer:function(e,t,n,r){const s=e.find((e=>!!e.field));s&&(0,i.sM)(n,[s.toJSON()],t)}}}},p=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,r._)([(0,s.MZ)(u)],t.prototype,"orderBy",void 0),t=(0,r._)([(0,o.$)("esri.layers.mixins.OrderedLayer")],t),t}},33143:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(90237),i=n(69540),s=n(25482),o=n(10107),a=(n(44208),n(53966),n(87811),n(36005)),l=n(40608),u=n(43937),p=n(80451),c=n(29005);let f=class extends(i.A.ClonableMixin(s.A)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const n of Object.keys(e))t[n]=(0,p.rS)(e[n]);return t}writeDomains(e,t){const n={};for(const t of Object.keys(e))e[t]&&(n[t]=e[t]?.toJSON());t.domains=n}};(0,r._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"id",void 0),(0,r._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"name",void 0),(0,r._)([(0,o.MZ)({json:{write:!0}})],f.prototype,"domains",void 0),(0,r._)([(0,a.w)("domains")],f.prototype,"readDomains",null),(0,r._)([(0,u.K)("domains")],f.prototype,"writeDomains",null),(0,r._)([(0,o.MZ)({type:[c.A],json:{write:!0}})],f.prototype,"templates",void 0),f=(0,r._)([(0,l.$)("esri.layers.support.FeatureType")],f);const d=f},91880:(e,t,n)=>{n.d(t,{A:()=>c});var r,i=n(90237),s=n(66552),o=n(25482),a=n(10107),l=(n(44208),n(53966),n(87811),n(40608));const u=new s.J({asc:"ascending",desc:"descending"});let p=r=class extends o.A{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new r({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,i._)([(0,a.MZ)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,i._)([(0,a.MZ)({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"valueExpression",void 0),(0,i._)([(0,a.MZ)({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],p.prototype,"order",void 0),p=r=(0,i._)([(0,l.$)("esri.layers.support.OrderByInfo")],p);const c=p},17311:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(90237),i=n(69622),s=n(60999),o=n(5503),a=n(10107),l=(n(44208),n(53966),n(87811),n(40608)),u=n(30524),p=n(71386);let c=class extends i.A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){return this.expressionsUsedInTitle.length>0?this._get("_arcadeTask")||(0,s.UT)((()=>(0,p.lw)())):null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??n.e(9926).then(n.bind(n,29926)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new o.A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const n=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(n.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:n,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(n,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const t of this.calculatedExpressions?.toArray()??[])try{const n=this._arcadeTask.value.arcade.extractFieldLiterals(t.syntax);for(const t of n){const n=t.split("."),r=this.fieldsIndex.get(n.at(-1)??"");r&&e.add(r.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const n of t){const t=this.fieldsIndex.get(n);t&&e.add(t.name)}return e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,n){try{const{attributes:r}=t,i=n?.timeZone??"system",[{substituteFieldsInLinksAndAttributes:s}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);if(n.fetchMissingFields&&(t=await this._checkAndReQueryGraphic(e,t)),this.workingTitle&&this.fieldInfoMap){const n=this._createFormattedAttributes(e,t,i).global;return s({attributes:r,expressionAttributes:null,fieldInfoMap:this.fieldInfoMap,globalAttributes:n,layer:e,text:this.workingTitle})}return""}catch{}return""}async _checkAndReQueryGraphic(e,t){const n=t.getObjectId();if(null==n)return t;if(!(0,u.Kl)(this.requiredFields,t)){const t=e.createQuery();t.where="1=1",t.outFields=[...this.requiredFields],t.objectIds=[n];const r=await e.queryFeatures(t);if(1===r?.features.length)return r.features[0]}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const n of e){if(!n.fieldName)continue;const e=this.fieldsIndex.get(n.fieldName),r=e?.name??n.fieldName;n.fieldName=r,t.set(r.toLowerCase(),n)}return t}_createFormattedAttributes(e,t,n="system"){const r=this.effectivePopupTemplate?.fieldInfos??[],i={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const n=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{i[`expression/${e.name}`]=e.func({vars:{$feature:n}})}catch{}}const s={...t.attributes,...i};return{global:this._featureUtils.formatAttributes({fieldInfos:r,attributes:s,graphic:t,timeZone:n,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return(0,u.nw)(e).filter((e=>!(0===e.indexOf("relationships/")||0===e.indexOf("expression/"))))}};(0,r._)([(0,a.MZ)({readOnly:!0})],c.prototype,"_arcadeTask",null),(0,r._)([(0,a.MZ)()],c.prototype,"_featureUtils",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],c.prototype,"featureUtilsPromise",null),(0,r._)([(0,a.MZ)({readOnly:!0})],c.prototype,"calculatedExpressions",null),(0,r._)([(0,a.MZ)()],c.prototype,"displayField",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"effectivePopupTemplate",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"expressionsUsedInTitle",null),(0,r._)([(0,a.MZ)()],c.prototype,"fieldsIndex",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"fieldInfoMap",null),(0,r._)([(0,a.MZ)()],c.prototype,"fields",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"objectIdField",void 0),(0,r._)([(0,a.MZ)()],c.prototype,"requiredFields",null),c=(0,r._)([(0,l.$)("esri.layers.support.TitleCreator")],c);const f=c},41560:(e,t,n)=>{n.d(t,{Ch:()=>o,mW:()=>s});var r=n(34727),i=n(39516);function s(e,t){return{...t,filterMode:e.mode}}function o(e,t,n){const s=function(e){if("manual"===u(e))return null;const t=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY];for(const{minScale:n,maxScale:r}of e.filters)t[0]=Math.max(t[0],p(n)),t[1]=Math.min(t[1],c(r));return t}(e);if(s&&((0,r.gg)(t,s[0])||(0,r.ZH)(n,s[1])))return"";const o=Array.from(a(e,t,n)),l=function(e,t,n){if(0===e.length)return!0;const i=p(e.at(0)?.minScale),s=c(e.at(-1)?.maxScale);if((0,r.ZH)(i,t)||(0,r.gg)(s,n))return!0;for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1];if((0,r.ZH)(p(i.minScale),c(n.maxScale)))return!0}return!1}(o,t,n)?"1=1":o.map((e=>e.where||"1=1")).reduce(((e,t)=>(0,i.IW)(e,t)),"");return l&&"1=1"!==l?l:""}function*a(e,t,n){if("manual"===u(e)){const t=e.filters.find((t=>t.id===e.activeFilterId));t&&(yield t)}else{"object"==typeof t&&(t=t.scale);for(const r of e.filters)l(r.minScale,r.maxScale,t,n)&&(yield r)}}function l(e,t,n,i){return e=p(e),n=p(n),t=c(t),!(!(0,r.Sp)(n,e)&&(i??n)>e||(0,r.Hx)(t,n)||void 0!==i&&(0,r.Sp)(i,e))}function u(e){return"mode"in e?e.mode:e.filterMode}function p(e){return e||Number.POSITIVE_INFINITY}function c(e){return e||0}},32730:(e,t,n)=>{n.d(t,{BI:()=>h,D3:()=>m,XJ:()=>y,lc:()=>d,mX:()=>x,rU:()=>g,tH:()=>T});var r=n(799);const i="__begin__",s="__end__",o=new RegExp(i,"ig"),a=new RegExp(s,"ig"),l=new RegExp("^"+i,"i"),u=new RegExp(s+"$","i"),p='"',c=p+" + ",f=" + "+p;function d(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function m(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function y(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=d(e.labelExpression),t.type="conventional"),t}function h(e){const t=y(e);switch(t.type){case"conventional":return x(t.expression);case"arcade":return t.expression}return null}function g(e){const t=y(e);switch(t.type){case"conventional":return function(e){const t=e?.match(_);return t?.[1].trim()||null}(t.expression);case"arcade":return T(t.expression)}return null}function x(e){let t;return e?(t=(0,r.HC)(e,(e=>i+'$feature["'+e+'"]'+s)),t=l.test(t)?t.replace(l,""):p+t,t=u.test(t)?t.replace(u,""):t+p,t=t.replaceAll(o,c).replaceAll(a,f)):t='""',t}const _=/^\s*\{([^}]+)\}\s*$/i,v=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,M=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function T(e){if(!e)return null;let t=v.exec(e)||w.exec(e);return t?t[1]||t[3]:(t=M.exec(e),t?t[2]:null)}},58501:(e,t,n)=>{n.d(t,{q:()=>i});var r=n(62815);function i(e,t,n){if(!n?.features||!n.hasZ)return;const i=(0,r.N)(n.geometryType,t,e.outSpatialReference);if(null!=i)for(const e of n.features)i(e.geometry)}},22671:(e,t,n)=>{n.d(t,{A:()=>_});var r,i=n(90237),s=n(52106),o=n(66552),a=n(25482),l=n(4718),u=n(10107),p=(n(44208),n(53966),n(36005)),c=n(40608),f=n(43937),d=n(16930),m=n(65864),y=n(50498),h=n(20437);const g=new o.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let x=r=class extends a.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,s.A)}writeGeometryType(e,t,n,r){if(e)return void g.write(e,t,n,r);const{features:i}=this;if(i)for(const e of i)if(null!=e?.geometry)return void g.write(e.geometry.type,t,n,r)}readQueryGeometry(e,t){if(!e)return null;const n=!!e.spatialReference,r=(0,m.rS)(e);return r&&!n&&t.spatialReference&&(r.spatialReference=d.A.fromJSON(t.spatialReference)),r}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:n}=this;if(n)for(const e of n)if(e&&null!=e.geometry&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new r(this.cloneProperties())}cloneProperties(){return(0,l.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let n=0;n<t.features.length;n++){const r=t.features[n];if(r.geometry){const t=e?.[n];r.geometry=t?.toJSON()||r.geometry}}return t}quantize(e){const{scale:[t,n],translate:[r,i]}=e,s=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-r)/t)),(e=>Math.round((i-e)/n)));for(let e=0,t=s.length;e<t;e++)o?.(s[e].geometry)||(s.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:n}=this;if(!n)return this;const{translate:[r,i],scale:[s,o]}=n;let a=null,l=null;if(this.hasZ&&null!=n?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=n;a=n=>n*t+e}if(this.hasM&&null!=n?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=n;l=n=>null==n?n:n*t+e}const u=this._getHydrationFunction(e,(e=>e*s+r),(e=>i-e*o),a,l);for(const{geometry:e}of t)null!=e&&u&&u(e);return this.transform=null,this}readFeaturesWithClass(e,t,n){const r=d.A.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){const s=e[t],o=n.fromJSON(s),a=s.geometry?.spatialReference;null==o.geometry||a||(o.geometry.spatialReference=r);const l=s.aggregateGeometries,u=o.aggregateGeometries;if(l&&null!=u)for(const e in u){const t=u[e],n=l[e],i=n?.spatialReference;null==t||i||(t.spatialReference=r)}i.push(o)}return i}_quantizePoints(e,t,n){let r,i;const s=[];for(let o=0,a=e.length;o<a;o++){const a=e[o];if(o>0){const e=t(a[0]),o=n(a[1]);e===r&&o===i||(s.push([e-r,o-i]),r=e,i=o)}else r=t(a[0]),i=n(a[1]),s.push([r,i])}return s.length>0?s:null}_getQuantizationFunction(e,t,n){return"point"===e?e=>(e.x=t(e.x),e.y=n(e.y),e):"polyline"===e||"polygon"===e?e=>{const r=(0,m.Bi)(e)?e.rings:e.paths,i=[];for(let e=0,s=r.length;e<s;e++){const s=r[e],o=this._quantizePoints(s,t,n);o&&i.push(o)}return i.length>0?((0,m.Bi)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const r=this._quantizePoints(e.points,t,n);return r&&r.length>0?(e.points=r,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,n,r,i){return"point"===e?e=>{e.x=t(e.x),e.y=n(e.y),r&&(e.z=r(e.z))}:"polyline"===e||"polygon"===e?e=>{const s=(0,m.Bi)(e)?e.rings:e.paths;let o,a;for(let e=0,r=s.length;e<r;e++){const r=s[e];for(let e=0,i=r.length;e<i;e++){const i=r[e];e>0?(o+=i[0],a+=i[1]):(o=i[0],a=i[1]),i[0]=t(o),i[1]=n(a)}}if(r&&i)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=r(n[2]),n[3]=i(n[3])}}else if(r)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=r(n[2])}}else if(i)for(let e=0,t=s.length;e<t;e++){const t=s[e];for(let e=0,n=t.length;e<n;e++){const n=t[e];n[2]=i(n[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=n(e.ymin),e.xmax=t(e.xmax),e.ymax=n(e.ymax),r&&null!=e.zmax&&null!=e.zmin&&(e.zmax=r(e.zmax),e.zmin=r(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const s=e.points;let o,a;for(let e=0,r=s.length;e<r;e++){const r=s[e];e>0?(o+=r[0],a+=r[1]):(o=r[0],a=r[1]),r[0]=t(o),r[1]=n(a)}if(r&&i)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=r(t[2]),t[3]=i(t[3])}else if(r)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=r(t[2])}else if(i)for(let e=0,t=s.length;e<t;e++){const t=s[e];t[2]=i(t[2])}}:null}};(0,i._)([(0,u.MZ)({type:String,json:{write:!0}})],x.prototype,"displayFieldName",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,u.MZ)({type:[s.A],json:{write:!0}})],x.prototype,"features",void 0),(0,i._)([(0,p.w)("features")],x.prototype,"readFeatures",null),(0,i._)([(0,u.MZ)({type:[h.A],json:{write:!0}})],x.prototype,"fields",void 0),(0,i._)([(0,u.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],x.prototype,"geometryType",void 0),(0,i._)([(0,f.K)("geometryType")],x.prototype,"writeGeometryType",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasM",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],x.prototype,"hasZ",void 0),(0,i._)([(0,u.MZ)({types:y.yR,json:{write:!0}})],x.prototype,"queryGeometry",void 0),(0,i._)([(0,p.w)("queryGeometry")],x.prototype,"readQueryGeometry",null),(0,i._)([(0,u.MZ)({type:d.A,json:{write:!0}})],x.prototype,"spatialReference",void 0),(0,i._)([(0,f.K)("spatialReference")],x.prototype,"writeSpatialReference",null),(0,i._)([(0,u.MZ)({json:{write:!0}})],x.prototype,"transform",void 0),x=r=(0,i._)([(0,c.$)("esri.rest.support.FeatureSet")],x),x.prototype.toJSON.isDefaultToJSON=!0;const _=x},41366:(e,t,n)=>{n.d(t,{K:()=>f,Q:()=>u});var r=n(90237),i=n(66552),s=n(53966),o=n(10107),a=(n(44208),n(87811),n(93223)),l=n(40608);const u=(0,i.O)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),p="percent-of-total",c="field",f=e=>{let t=class extends e{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let e=this._get("normalizationType");const t=!!this.normalizationField,n=null!=this.normalizationTotal;return t||n?(e=t&&c||n&&p||null,t&&n&&s.A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==c&&e!==p||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}};return(0,r._)([(0,o.MZ)({type:String,json:{name:"parameters.normalizationField",write:!0}})],t.prototype,"normalizationField",void 0),(0,r._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],t.prototype,"normalizationMaxValue",void 0),(0,r._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],t.prototype,"normalizationMinValue",void 0),(0,r._)([(0,o.MZ)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],t.prototype,"normalizationTotal",void 0),(0,r._)([(0,a.e)(u,{name:"parameters.normalizationType"})],t.prototype,"normalizationType",null),t=(0,r._)([(0,l.$)("esri.rest.support.NormalizationBinParametersMixin")],t),t}},92935:(e,t,n)=>{var r;n.d(t,{X:()=>r}),function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(r||(r={}))}}]);
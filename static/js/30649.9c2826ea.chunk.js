"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[1438,30649,79057],{1438:(e,t,r)=>{r.d(t,{O7:()=>I,Hr:()=>M,el:()=>S,mT:()=>N,XX:()=>w});var n=r(86560),i=r(50076),s=r(76460),o=r(65215),l=r(23701),a=r(73548),u=r(80963),c=r(45417),p=r(3825),h=r(19902),d=r(54994);var y=r(90534),f=r(71838);const m=()=>s.A.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function v(e){return"polyline"===e[0].type}function _(e){const t=[];let r=0,n=0;for(let i=0;i<e.length;i++){const s=e[i];let o=null;for(let e=0;e<s.length;e++)o=s[e],t.push(o),0===e?(r=o[0],n=r):(r=Math.min(r,o[0]),n=Math.max(n,o[0]));o&&t.push([(r+n)/2,0])}return t}function w(e,t){if(!(e instanceof l.A||e instanceof o.A)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new i.A(e)}const r=(0,a.r8)(e),n=[];for(const i of r){const e=[];n.push(e),e.push([i[0][0],i[0][1]]);for(let r=0;r<i.length-1;r++){const n=i[r][0],s=i[r][1],o=i[r+1][0],l=i[r+1][1],a=Math.sqrt((o-n)*(o-n)+(l-s)*(l-s)),u=(l-s)/a,c=(o-n)/a,p=a/t;if(p>1){for(let l=1;l<=p-1;l++){const r=l*t,i=c*r+n,o=u*r+s;e.push([i,o])}const r=(a+Math.floor(p-1)*t)/2,i=c*r+n,o=u*r+s;e.push([i,o])}e.push([o,l])}}return function(e){return"polygon"===e.type}(e)?new o.A({rings:n,spatialReference:e.spatialReference}):new l.A({paths:n,spatialReference:e.spatialReference})}function T(e,t,r){if(t){const t=w(e,1e6);e=(0,c.ci)(t,!0)}return r&&(e=(0,a.kS)(e,r)),e}function b(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=(0,a.kd)(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=(0,a.kd)(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=(0,a.kd)(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=(0,a.kd)(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function A(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const i=t.cutIndexes[n],s=t.geometries[n],o=(0,a.r8)(s);for(let e=0;e<o.length;e++){const t=o[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*(0,a.kd)(r,180);for(let i=0;i<t.length;i++){const t=s.getPoint(e,i);s.setPoint(e,i,t.clone().offset(n,0))}return!0}}))}if(i===r){if(g(e))for(const t of(0,a.r8)(s))e[i]=e[i].addRing(t);else if(v(e))for(const t of(0,a.r8)(s))e[i]=e[i].addPath(t)}else r=i,e[i]=s}return e}async function S(e,t,r){if(!Array.isArray(e))return S([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const i="string"==typeof t?t:t?.url??n.A.geometryServiceUrl;let s,g,v,_,w,M,I,N,x=0;const O=[],R=[];for(const n of e)if(null!=n)if(s||(s=n.spatialReference,g=(0,u.Vp)(s),v=s.isWebMercator,M=v?102100:4326,_=a.j7[M].maxX,w=a.j7[M].minX,I=a.j7[M].plus180Line,N=a.j7[M].minus180Line),g)if("mesh"===n.type)R.push(n);else if("point"===n.type)R.push(b(n.clone(),_,w));else if("multipoint"===n.type){const e=n.clone();e.points=e.points.map((e=>b(e,_,w))),R.push(e)}else if("extent"===n.type){const e=n.clone()._normalize(!1,!1,g);R.push(e.rings?new o.A(e):e)}else if(n.extent){const e=n.extent,t=(0,a.kd)(e.xmin,w)*(2*_);let r=0===t?n.clone():(0,a.kS)(n.clone(),t);e.offset(t,0);let{xmin:i,xmax:s}=e;i=Number(i.toFixed(9)),s=Number(s.toFixed(9)),e.intersects(I)&&s!==_?(x=s>x?s:x,r=T(r,v),O.push(r),R.push("cut")):e.intersects(N)&&i!==w?(x=s*(2*_)>x?s*(2*_):x,r=T(r,v,360),O.push(r),R.push("cut")):R.push(r)}else R.push(n.clone());else R.push(n);else R.push(n);let F=(0,a.kd)(x,_),Z=-90;const j=F,V=new l.A;for(;F>0;){const e=360*F-180;V.addPath([[e,Z],[e,-1*Z]]),Z*=-1,F--}if(O.length>0&&j>0){const t=A(O,await async function(e,t,r,n){const i=(0,d.Dl)(e),s=t[0].spatialReference,o={...n,responseType:"json",query:{...i.query,f:"json",sr:(0,u.YX)(s),target:JSON.stringify({geometryType:(0,h.$B)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await(0,p.A)(i.path+"/cut",o),{cutIndexes:a,geometries:c=[]}=l.data;return{cutIndexes:a,geometries:c.map((e=>{const t=(0,h.rS)(e);return t.spatialReference=s,t}))}}(i,O,V,r)),n=[],s=[];for(let r=0;r<R.length;r++){const i=R[r];if("cut"!==i)s.push(i);else{const i=t.shift(),o=e[r];null!=o&&"polygon"===o.type&&o.rings&&o.rings.length>1&&i.rings.length>=o.rings.length?(n.push(i),s.push("simplify")):s.push(v?(0,c.Gh)(i):i)}}if(!n.length)return s;const o=await async function(e,t,r){const n="string"==typeof e?(0,y.An)(e):e,i=t[0].spatialReference,s=(0,h.$B)(t[0]),o={...r,query:{...n.query,f:"json",sr:(0,u.YX)(i),geometries:JSON.stringify((0,f.X)(t))}},{data:l}=await(0,p.A)(n.path+"/simplify",o);return(0,f.V)(l.geometries,s,i)}(i,n,r),l=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?l.push(t):l.push(v?(0,c.Gh)(o.shift()):o.shift())}return l}const L=[];for(let n=0;n<R.length;n++){const e=R[n];if("cut"!==e)L.push(e);else{const e=O.shift();L.push(!0===v?(0,c.Gh)(e):e)}}return L}function M(e){if(!e)return null;const t=e.extent;if(!t)return null;const r=e.spatialReference&&(0,u.Vp)(e.spatialReference);if(!r)return t;const[n,i]=r.valid,s=2*i,{width:o}=t;let l,{xmin:a,xmax:c}=t;if([a,c]=[c,a],"extent"===e.type||0===o||o<=i||o>s||a<n||c>i)return t;switch(e.type){case"polygon":if(!(e.rings.length>1))return t;l=_(e.rings);break;case"polyline":if(!(e.paths.length>1))return t;l=_(e.paths);break;case"multipoint":l=e.points}const p=t.clone();for(let u=0;u<l.length;u++){let e=l[u][0];e<0?(e+=i,c=Math.max(e,c)):(e-=i,a=Math.min(e,a))}return p.xmin=a,p.xmax=c,p.width<o?(p.xmin-=i,p.xmax-=i,p):t}function I(e,t,r){const n=(0,u.Vp)(r);if(null==n)return e;const[i,s]=n.valid,o=2*s;let l=0,a=0;t>s?l=Math.ceil(Math.abs(t-s)/o):t<i&&(l=-Math.ceil(Math.abs(t-i)/o)),e>s?a=Math.ceil(Math.abs(e-s)/o):e<i&&(a=-Math.ceil(Math.abs(e-i)/o));let c=e+(l-a)*o;const p=c-t;return p>s?c-=o:p<i&&(c+=o),c}function N(e,t){const r=(0,u.Vp)(t);if(r){const[t,n]=r.valid,i=n-t;if(e<t)for(;e<t;)e+=i;if(e>n)for(;e>n;)e-=i}return e}},1484:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(97255);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,r,n,s]=e,o=n-t,l=s-r;return new i([5],[t,r,o,0,0,l,-o,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,n.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r];if(n<3)continue;let i=this.coords[2*t],s=this.coords[2*t+1];for(let r=1;r<n;r+=1){const n=this.coords[2*(r+t)],o=this.coords[2*(r+t)+1];e+=-.5*(n-i)*(o+s),i=n,s=o}t+=n}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const n=this.lengths[r];for(let r=0;r<n;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=n}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let n=0;for(const i of r){for(let e=1;e<i;e++)t[2*(n+e)]+=t[2*(n+e)-2],t[2*(n+e)+1]+=t[2*(n+e)-1];n+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(r))}}},6127:(e,t,r)=>{r.d(t,{m:()=>n});const n=new(r(45802).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},20176:(e,t,r)=>{r.d(t,{N3:()=>l,Om:()=>o});var n=r(97255),i=r(90321),s=r(1484);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=n,this.displayId=i}static fromJSON(e){const t=e.geometry?s.A.fromJSON(e.geometry):null,r=e.centroid?s.A.fromJSON(e.centroid):null,n=e.objectId;return new o(t,e.attributes,r,n)}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new s.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,n.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function l(e){return!!e.geometry?.coords?.length}},32173:(e,t,r)=>{r.d(t,{A:()=>u});var n,i=r(35143),s=(r(76460),r(81806),r(47249),r(50076),r(6409)),o=r(85842),l=r(44631);let a=n=class extends l.A{constructor(e){super(e),this.type="inherited"}clone(){return new n}};(0,i._)([(0,s.e)({inherited:"inherited"})],a.prototype,"type",void 0),a=n=(0,i._)([(0,o.$)("esri.layers.support.InheritedDomain")],a);const u=a},44067:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(50076),i=r(50346);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=r,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(r)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,r){const n=this.tileInfo?.lodAt(e);return!n||e<this.minLOD||e>this.maxLOD?"unavailable":n.cols&&n.rows?r>=n.cols[0]&&r<=n.cols[1]&&t>=n.rows[0]&&t<=n.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,r,s){await(0,i.NO)(s);const o=this.getAvailability(e,t,r);if("unavailable"===o)throw new n.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r});return o}async fetchAvailabilityUpsample(e,t,r,n,s){await(0,i.NO)(s),n.level=e,n.row=t,n.col=r;const o=this.tileInfo;return o.updateTileInfo(n),this.fetchAvailability(e,t,r,s).catch((e=>{if((0,i.zf)(e))throw e;if(o.upsampleTile(n))return this.fetchAvailabilityUpsample(n.level,n.row,n.col,n,s);throw e}))}}},44135:(e,t,r)=>{r.d(t,{A:()=>m});var n,i=r(35143),s=r(45802),o=r(42553),l=r(46053),a=r(40565),u=(r(81806),r(47249),r(6409)),c=r(28379),p=r(85842),h=r(76866),d=r(6127);const y=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let f=n=class extends o.A{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,t){let{description:r}=t,n=null;try{n=r?JSON.parse(r):null}catch(i){}return n?.value??null}readValueType(e,t){let{description:r}=t,n=null;try{n=r?JSON.parse(r):null}catch(i){}return n?y.fromJSON(n.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),(0,i._)([(0,l.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"description",void 0),(0,i._)([(0,c.w)("description")],f.prototype,"readDescription",null),(0,i._)([(0,l.MZ)({types:h.gK,json:{read:{reader:h.rS},write:!0}})],f.prototype,"domain",void 0),(0,i._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),(0,i._)([(0,l.MZ)({type:a.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],f.prototype,"length",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,i._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),(0,i._)([(0,u.e)(d.m)],f.prototype,"type",void 0),(0,i._)([(0,l.MZ)()],f.prototype,"valueType",void 0),(0,i._)([(0,c.w)("valueType",["description"])],f.prototype,"readValueType",null),(0,i._)([(0,l.MZ)({type:Boolean,json:{read:!1}})],f.prototype,"visible",void 0),f=n=(0,i._)([(0,p.$)("esri.layers.support.Field")],f);const m=f},44631:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(35143),i=r(45802),s=r(42553),o=r(46053),l=(r(81806),r(76460),r(47249),r(6409)),a=r(85842);const u=new i.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends s.A{constructor(e){super(e),this.name=null,this.type=null}};(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,n._)([(0,l.e)(u),(0,o.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),c=(0,n._)([(0,a.$)("esri.layers.support.Domain")],c);const p=c},50654:(e,t,r)=>{r.d(t,{A:()=>c});var n,i=r(35143),s=r(46053),o=(r(81806),r(76460),r(47249),r(6409)),l=r(85842),a=r(44631);let u=n=class extends a.A{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new n({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,i._)([(0,s.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]},isRequired:!0}}})],u.prototype,"maxValue",void 0),(0,i._)([(0,s.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]},isRequired:!0}}})],u.prototype,"minValue",void 0),(0,i._)([(0,o.e)({range:"range"})],u.prototype,"type",void 0),u=n=(0,i._)([(0,l.$)("esri.layers.support.RangeDomain")],u);const c=u},54994:(e,t,r)=>{r.d(t,{Dl:()=>o,jV:()=>s,lF:()=>l});r(86560),r(55171);var n=r(53084),i=r(90534);r(90924);function s(e,t){return t?{...t,query:{...e??{},...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,i.An)(e):(0,n.o8)(e)}function l(e,t,r){const n={};for(const i in e){if("declaredClass"===i)continue;const s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s))n[i]=s.map((e=>l(e)));else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r?.[i]);n[i]=t?e:JSON.stringify(e)}else n[i]=t?s:JSON.stringify(s);else n[i]=s}return n}},71174:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n,i=r(35143),s=r(3825),o=r(50076),l=r(27741),a=r(77717),u=r(50346),c=r(90534),p=r(46053),h=r(21403),d=(r(81806),r(47249),r(28379)),y=r(85842),f=r(17707),m=r(13312),g=r(25515),v=r(12406),_=r(76328),w=r(36648),T=r(19502),b=r(65624),A=r(31362),S=r(11270),M=r(94729),I=r(21617),N=r(5682),x=r(73907),O=r(13096),R=r(95363),F=r(16852),Z=r(39568);const j=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let V=n=class extends((0,b.dM)((0,N.j)((0,x.I)((0,_.f)((0,w.V)((0,S.q)((0,M.A)((0,T.b)((0,a.P)((0,I.J)((0,v.p)((0,A.d)(g.A))))))))))))){constructor(){super(...arguments),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,t){return(e=e||t.tileInfo?.spatialReference)&&m.A.fromJSON(e)}writeSublayers(e,t,r,n){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray(),s=[],o={writeSublayerStructure:!1,...n};i.forEach((e=>{const t=e.write({},o);s.push(t)})),s.some((e=>Object.keys(e).length>1))&&(t.layers=s)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,c.An)(e).path)):null}fetchTile(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:i}=n,o=this.getTileUrl(e,t,r),l={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,s.A)(o,l).then((e=>e.data))}async fetchImageBitmapTile(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:o}=i;if(this.fetchTile!==n.prototype.fetchTile){const n=await this.fetchTile(e,t,r,i);return(0,F.C)(n,e,t,r,o)}const l=this.getTileUrl(e,t,r),a={responseType:"blob",signal:o,query:{...this.refreshParameters}},{data:u}=await(0,s.A)(l,a);return(0,F.C)(u,e,t,r,o)}getTileUrl(e,t,r){const n=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,i=(0,c.x0)({...this.parsedUrl?.query,blankTile:!n&&null,...this.customParameters,token:this.apiKey}),s=this.tileServers;return`${s&&s.length?s[t%s.length]:this.parsedUrl?.path}/tile/${e}/${t}/${r}${i?"?"+i:""}`}loadAll(){return(0,l.g)(this,(e=>{e(this.allSublayers)}))}_fetchService(e){return new Promise(((t,r)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new o.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new o.A("tile-layer:undefined-url","layer's url is not defined");const n=(0,O.qg)(this.parsedUrl.path);if(null!=n&&"ImageServer"===n.serverType)throw new o.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,s.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,r)})).then((t=>{let r=this.url;if(t.ssl&&(r=this.url=r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,O.Wo)(r))return this._fetchServerVersion(r,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,O.Fi)(e))return Promise.reject();const r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,s.A)(r,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new o.A("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let t;e=e.toLowerCase();for(let r=0,n=j.length;r<n;r++)if(t=j[r],t.toLowerCase().includes(e))return(0,c.s2)("//static.arcgis.com/attribution/"+t);return null}_getDefaultTileServers(e){if(null==e)return[];const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[L]}};(0,i._)([(0,p.MZ)({readOnly:!0})],V.prototype,"attributionDataUrl",null),(0,i._)([(0,p.MZ)({type:["show","hide","hide-children"]})],V.prototype,"listMode",void 0),(0,i._)([(0,p.MZ)({json:{read:!0,write:!0}})],V.prototype,"blendMode",void 0),(0,i._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],V.prototype,"isReference",void 0),(0,i._)([(0,p.MZ)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],V.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.MZ)({type:Boolean})],V.prototype,"resampling",void 0),(0,i._)([(0,p.MZ)()],V.prototype,"sourceJSON",void 0),(0,i._)([(0,p.MZ)({type:m.A})],V.prototype,"spatialReference",void 0),(0,i._)([(0,d.w)("spatialReference",["spatialReference","tileInfo"])],V.prototype,"readSpatialReference",null),(0,i._)([(0,p.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],V.prototype,"sublayers",void 0),(0,i._)([(0,f.K)("sublayers",{layers:{type:[Z.A]}})],V.prototype,"writeSublayers",null),(0,i._)([(0,p.MZ)({json:{read:!1,write:!1}})],V.prototype,"popupEnabled",void 0),(0,i._)([(0,p.MZ)()],V.prototype,"tileServers",null),(0,i._)([(0,h.w)("tileServers")],V.prototype,"castTileServers",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],V.prototype,"type",void 0),(0,i._)([(0,p.MZ)(R.OZ)],V.prototype,"url",void 0),V=n=(0,i._)([(0,y.$)("esri.layers.TileLayer")],V);const L=Symbol("default-fetch-tile");V.prototype.fetchTile[L]=!0;const q=V},71838:(e,t,r)=>{r.d(t,{V:()=>s,X:()=>i});var n=r(19902);function i(e){return{geometryType:(0,n.$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function s(e,t,r){const i=(0,n.xD)(t);return e.map((e=>{const t=i.fromJSON(e);return t.spatialReference=r,t}))}},72599:(e,t,r)=>{r.d(t,{A:()=>h});var n,i=r(35143),s=r(53084),o=r(46053),l=(r(81806),r(76460),r(6409)),a=r(85842),u=r(92115),c=r(44631);let p=n=class extends c.A{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new n({codedValues:(0,s.o8)(this.codedValues),name:this.name})}};(0,i._)([(0,o.MZ)({type:[u.H],json:{write:{isRequired:!0}}})],p.prototype,"codedValues",void 0),(0,i._)([(0,l.e)({codedValue:"coded-value"})],p.prototype,"type",void 0),p=n=(0,i._)([(0,a.$)("esri.layers.support.CodedValueDomain")],p);const h=p},73548:(e,t,r)=>{r.d(t,{j7:()=>o,kS:()=>a,kd:()=>l,r8:()=>u});var n=r(23701),i=r(13312),s=r(19902);const o={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:i.A.WebMercator}),minus180Line:new n.A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:i.A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.A({paths:[[[180,-180],[180,180]]],spatialReference:i.A.WGS84}),minus180Line:new n.A({paths:[[[-180,-180],[-180,180]]],spatialReference:i.A.WGS84})}};function l(e,t){return Math.ceil((e-t)/(2*t))}function a(e,t){const r=u(e);for(const n of r)for(const e of n)e[0]+=t;return e}function u(e){return(0,s.Bi)(e)?e.rings:e.paths}},75146:(e,t,r)=>{r.d(t,{A:()=>n});class n{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new n;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},76328:(e,t,r)=>{r.d(t,{f:()=>p});var n=r(35143),i=r(46053),s=(r(81806),r(76460),r(47249),r(28379)),o=r(85842),l=r(13312),a=r(88235),u=r(44067),c=r(82356);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,r){const n=t.capabilities?.includes("Tilemap");let{minLOD:i,maxLOD:s,minScale:o,maxScale:l}=t;if(null==i&&null==s&&(0!==o||0!==l)){const e=e=>Math.round(1e4*e)/1e4;o=e(o||t.tileInfo.lods[0].scale),l=e(l||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const r of t.tileInfo.lods){const t=e(r.scale);i=t>=o?r.level:i,s=t>=l?r.level:s}}if(n)return new c.d({layer:this,minLOD:i,maxLOD:s});if(t.tileInfo){const e=new a.A;return e.read(t.tileInfo,r),new u.A(e,i,s)}return null}};return(0,n._)([(0,i.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,n._)([(0,i.MZ)()],t.prototype,"minScale",void 0),(0,n._)([(0,s.w)("service","minScale")],t.prototype,"readMinScale",null),(0,n._)([(0,i.MZ)()],t.prototype,"maxScale",void 0),(0,n._)([(0,s.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,n._)([(0,i.MZ)({type:l.A})],t.prototype,"spatialReference",void 0),(0,n._)([(0,i.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,n._)([(0,i.MZ)({type:a.A})],t.prototype,"tileInfo",void 0),(0,n._)([(0,i.MZ)()],t.prototype,"tilemapCache",void 0),(0,n._)([(0,s.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,n._)([(0,i.MZ)()],t.prototype,"version",void 0),t=(0,n._)([(0,o.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},76866:(e,t,r)=>{r.d(t,{gK:()=>l,rS:()=>a});r(81806);var n=r(72599),i=r(44631),s=r(32173),o=r(50654);const l={key:"type",base:i.A,typeMap:{range:o.A,"coded-value":n.A,inherited:s.A}};function a(e){if(!e?.type)return null;switch(e.type){case"range":return o.A.fromJSON(e);case"codedValue":return n.A.fromJSON(e);case"inherited":return s.A.fromJSON(e)}return null}},77725:(e,t,r)=>{r.d(t,{A:()=>_});var n,i=r(35143),s=r(39356),o=r(45802),l=r(42553),a=r(53084),u=r(46053),c=(r(81806),r(76460),r(28379)),p=r(85842),h=r(17707),d=r(13312),y=r(19902),f=r(31608),m=r(44135);const g=new o.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=n=class extends l.A{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){return this.readFeaturesWithClass(e,t,s.A)}writeGeometryType(e,t,r,n){if(e)return void g.write(e,t,r,n);const{features:i}=this;if(i)for(const s of i)if(null!=s?.geometry)return void g.write(s.geometry.type,t,r,n)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,n=(0,y.rS)(e);return n&&!r&&t.spatialReference&&(n.spatialReference=d.A.fromJSON(t.spatialReference)),n}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const n of r)if(n&&null!=n.geometry&&n.geometry.spatialReference)return void(t.spatialReference=n.geometry.spatialReference.toJSON())}clone(){return new n(this.cloneProperties())}cloneProperties(){return(0,a.o8)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const n=t.features[r];if(n.geometry){const t=e?.[r];n.geometry=t?.toJSON()||n.geometry}}return t}quantize(e){const{scale:[t,r],translate:[n,i]}=e,s=this.features,o=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-n)/t)),(e=>Math.round((i-e)/r)));for(let l=0,a=s.length;l<a;l++)o?.(s[l].geometry)||(s.splice(l,1),l--,a--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[n,i],scale:[s,o]}=r;let l=null,a=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;l=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;a=r=>null==r?r:r*t+e}const u=this._getHydrationFunction(e,(e=>e*s+n),(e=>i-e*o),l,a);for(const{geometry:c}of t)null!=c&&u&&u(c);return this.transform=null,this}readFeaturesWithClass(e,t,r){const n=d.A.fromJSON(t.spatialReference),i=[];for(let s=0;s<e.length;s++){const t=e[s],o=r.fromJSON(t),l=t.geometry?.spatialReference;null==o.geometry||l||(o.geometry.spatialReference=n);const a=t.aggregateGeometries,u=o.aggregateGeometries;if(a&&null!=u)for(const e in u){const t=u[e],r=a[e],i=r?.spatialReference;null==t||i||(t.spatialReference=n)}i.push(o)}return i}_quantizePoints(e,t,r){let n,i;const s=[];for(let o=0,l=e.length;o<l;o++){const l=e[o];if(o>0){const e=t(l[0]),o=r(l[1]);e===n&&o===i||(s.push([e-n,o-i]),n=e,i=o)}else n=t(l[0]),i=r(l[1]),s.push([n,i])}return s.length>0?s:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const n=(0,y.Bi)(e)?e.rings:e.paths,i=[];for(let s=0,o=n.length;s<o;s++){const e=n[s],o=this._quantizePoints(e,t,r);o&&i.push(o)}return i.length>0?((0,y.Bi)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const n=this._quantizePoints(e.points,t,r);return n&&n.length>0?(e.points=n,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,n,i){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),n&&(e.z=n(e.z))}:"polyline"===e||"polygon"===e?e=>{const s=(0,y.Bi)(e)?e.rings:e.paths;let o,l;for(let n=0,i=s.length;n<i;n++){const e=s[n];for(let n=0,i=e.length;n<i;n++){const i=e[n];n>0?(o+=i[0],l+=i[1]):(o=i[0],l=i[1]),i[0]=t(o),i[1]=r(l)}}if(n&&i)for(let t=0,r=s.length;t<r;t++){const e=s[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2]),r[3]=i(r[3])}}else if(n)for(let t=0,r=s.length;t<r;t++){const e=s[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=n(r[2])}}else if(i)for(let t=0,r=s.length;t<r;t++){const e=s[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=i(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),n&&null!=e.zmax&&null!=e.zmin&&(e.zmax=n(e.zmax),e.zmin=n(e.zmin)),i&&null!=e.mmax&&null!=e.mmin&&(e.mmax=i(e.mmax),e.mmin=i(e.mmin))}:"multipoint"===e?e=>{const s=e.points;let o,l;for(let n=0,i=s.length;n<i;n++){const e=s[n];n>0?(o+=e[0],l+=e[1]):(o=e[0],l=e[1]),e[0]=t(o),e[1]=r(l)}if(n&&i)for(let t=0,r=s.length;t<r;t++){const e=s[t];e[2]=n(e[2]),e[3]=i(e[3])}else if(n)for(let t=0,r=s.length;t<r;t++){const e=s[t];e[2]=n(e[2])}else if(i)for(let t=0,r=s.length;t<r;t++){const e=s[t];e[2]=i(e[2])}}:null}};(0,i._)([(0,u.MZ)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,u.MZ)({type:[s.A],json:{write:!0}})],v.prototype,"features",void 0),(0,i._)([(0,c.w)("features")],v.prototype,"readFeatures",null),(0,i._)([(0,u.MZ)({type:[m.A],json:{write:!0}})],v.prototype,"fields",void 0),(0,i._)([(0,u.MZ)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:g.read}}})],v.prototype,"geometryType",void 0),(0,i._)([(0,h.K)("geometryType")],v.prototype,"writeGeometryType",null),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,i._)([(0,u.MZ)({types:f.yR,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,i._)([(0,c.w)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,i._)([(0,u.MZ)({type:d.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,i._)([(0,h.K)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,i._)([(0,u.MZ)({json:{write:!0}})],v.prototype,"transform",void 0),v=n=(0,i._)([(0,p.$)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0;const _=v},90321:(e,t,r)=>{function n(e,t){return e?t?4:3:t?3:2}function i(e,t,r,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],u=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:p}=t,h=n(r,i);let d=0;for(const n of c){const e=s(u,p,d,n,r,i);e&&a.push(e),d+=n*h}if(a.sort(((e,t)=>{let n=e[2]-t[2];return 0===n&&r&&(n=e[4]-t[4]),n})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,r&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||r&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(p,0,c[0],r,i):null;if(!e)return null;l[0]=e[0],l[1]=e[1],r&&e.length>2&&(l[2]=e[2])}return e}function s(e,t,r,i,s,o){const l=n(s,o);let a=r,u=r+l,c=0,p=0,h=0,d=0,y=0;for(let n=0,m=i-1;n<m;n++,a+=l,u+=l){const r=t[a],n=t[a+1],i=t[a+2],o=t[u],l=t[u+1],f=t[u+2];let m=r*l-o*n;d+=m,c+=(r+o)*m,p+=(n+l)*m,s&&(m=r*f-o*i,h+=(i+f)*m,y+=m),r<e[0]&&(e[0]=r),r>e[1]&&(e[1]=r),n<e[2]&&(e[2]=n),n>e[3]&&(e[3]=n),s&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(d>0&&(d*=-1),y>0&&(y*=-1),!d)return null;const f=[c,p,.5*d];return s&&(f[3]=h,f[4]=.5*y),f}function o(e,t,r,i,s){const o=n(i,s);let p=t,h=t+o,d=0,y=0,f=0,m=0;for(let n=0,g=r-1;n<g;n++,p+=o,h+=o){const t=e[p],r=e[p+1],n=e[p+2],s=e[h],o=e[h+1],g=e[h+2],v=i?a(t,r,n,s,o,g):l(t,r,s,o);if(v)if(d+=v,i){const e=c(t,r,n,s,o,g);y+=v*e[0],f+=v*e[1],m+=v*e[2]}else{const e=u(t,r,s,o);y+=v*e[0],f+=v*e[1]}}return d>0?i?[y/d,f/d,m/d]:[y/d,f/d]:r>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,r,n){const i=r-e,s=n-t;return Math.sqrt(i*i+s*s)}function a(e,t,r,n,i,s){const o=n-e,l=i-t,a=s-r;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,r,n){return[e+.5*(r-e),t+.5*(n-t)]}function c(e,t,r,n,i,s){return[e+.5*(n-e),t+.5*(i-t),r+.5*(s-r)]}r.d(t,{Q:()=>i})},92115:(e,t,r)=>{r.d(t,{H:()=>a});var n,i=r(35143),s=r(42553),o=r(46053),l=(r(81806),r(76460),r(47249),r(85842));let a=n=class extends s.A{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}};(0,i._)([(0,o.MZ)({type:String,json:{write:{isRequired:!0}}})],a.prototype,"name",void 0),(0,i._)([(0,o.MZ)({type:[String,Number],json:{write:{isRequired:!0}}})],a.prototype,"code",void 0),a=n=(0,i._)([(0,l.$)("esri.layers.support.CodedValue")],a)}}]);
//# sourceMappingURL=30649.9c2826ea.chunk.js.map
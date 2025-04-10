"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[99546],{18153:(e,t,n)=>{n.d(t,{$:()=>c,p:()=>l});var i=n(23862),s=n(80794),r=n(9876),a=n(72317);function o(e){let{x:t,y:n,z:s}=e;return(0,i.fA)(t,n,s??0)}function c(e,t){switch(e.type){case"edge":return e.draped?new s.X({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:(0,i.de)(o(e.target)),objectId:e.objectId,getGroundElevation:t}):new r.z({edgeStart:o(e.start),edgeEnd:o(e.end),targetPoint:(0,i.de)(o(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new a.C({targetPoint:(0,i.de)(o(e.target)),objectId:e.objectId,isDraped:!1})}}function l(e,t){return null!=e&&"3d"===e.type?(n,i)=>e.elevationProvider.getElevation(n,i,0,t,"ground"):()=>null}},23241:(e,t,n)=>{n.d(t,{_:()=>r});var i=n(20664),s=n(64753);class r extends s.m{constructor(e,t,n){super(t,n),this.point=e}equals(e){return e instanceof r&&(0,i.p)(this.point,e.point)}}},35961:(e,t,n)=>{n.d(t,{n:()=>c});n(81806);var i=n(53521),s=n(87663),r=n(50346),a=n(31633),o=n(59097);function c(){let e=arguments.length>1?arguments[1]:void 0;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new h(t,n)}return new l}class l{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}}class h{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new i.q(1024),this._cacheVersion=0}async alignCandidates(e,t,n){const i=this._elevationInfo;return null==i||"absolute-height"!==i.mode||i.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(function(e,t,n){const{offset:i,unit:s}=n;if(null==i)return;const r=(0,a.G9)(t),c=i*((0,o.Ao)(s??"meters")/r);for(const a of e)switch(a.type){case"edge":a.start.z+=c,a.end.z+=c;continue;case"vertex":a.target.z+=c;continue}}(e,t,i),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,n){const i=new Map;for(const r of e)(0,s.tE)(i,r.objectId,p).push(r);const[a,o,c]=this._prepareQuery(i,t),l=await this._alignPointsInFeatures(a,n);if((0,r.Te)(n),c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(a,l,o);const{drapedObjectIds:h,failedObjectIds:u}=l,d=[];for(const s of e){const{objectId:e}=s;h.has(e)&&"edge"===s.type&&(s.draped=!0),u.has(e)||d.push(s)}return d}_prepareQuery(e,t){const n=[],i=[];for(const[s,r]of e){const e=[];for(const t of r)this._addToQueriesOrCachedResult(s,t.target,e,i),"edge"===t.type&&(this._addToQueriesOrCachedResult(s,t.start,e,i),this._addToQueriesOrCachedResult(s,t.end,e,i));0!==e.length&&n.push({objectId:s,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},i,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,i){const s=d(e,t),r=this._alignmentsCache.get(s);null==r?n.push(t):i.push(new u(t,r))}_applyCacheAndResponse(e,t,n){let{elevations:i,drapedObjectIds:s,failedObjectIds:r}=t;for(const c of n)c.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:c,points:l}of e.pointsInFeatures){if(r.has(c)){a+=l.length;continue}const e=!s.has(c);for(const t of l){const n=d(c,t),s=i[a++];t.z=s,e&&o.put(n,s,1)}}}}class u{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function d(e,t){let{x:n,y:i,z:s,spatialReference:r}=t;return`${e}-${n}-${i}-${s??0}}-wkid:${r?.wkid}`}function p(){return[]}},54222:(e,t,n)=>{n.d(t,{b3:()=>u,jZ:()=>h});var i=n(42553),s=n(2413),r=n(65391),a=n(5262),o=n(19902),c=n(73548),l=n(80963);function h(e){return d(e,!0)}function u(e){return d(e,!1)}function d(e,t){if(null==e)return null;const n=e.spatialReference,s=(0,l.Vp)(n),a=i.A.isSerializable(e)?e.toJSON():e;if(!s)return a;const h=(0,l.K8)(n)?102100:4326,u=c.j7[h].maxX,d=c.j7[h].minX;if((0,o.fT)(a))return f(a,u,d);if((0,o.U9)(a))return a.points=a.points.map((e=>f(e,u,d))),a;if((0,o.ZC)(a))return p(a,s);if((0,o.Bi)(a)||(0,o.Rg)(a)){const e=(0,r.Rg)(v,a),n={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,c.kd)(n.xmin,d)*(2*u),s=0===i?a:(0,c.kS)(a,i);return n.xmin+=i,n.xmax+=i,n.xmax>u?m(s,u,t):n.xmin<d?m(s,d,t):s}return a}function p(e,t){if(!t)return e;const n=function(e,t){const n=[],{ymin:i,ymax:s,xmin:r,xmax:a}=e,o=e.xmax-e.xmin,[c,l]=t.valid,{x:h,frameId:u}=y(e.xmin,t),{x:d,frameId:p}=y(e.xmax,t),f=h===d&&o>0;if(o>2*l){const e={xmin:r<a?h:d,ymin:i,xmax:l,ymax:s},t={xmin:c,ymin:i,xmax:r<a?d:h,ymax:s},o={xmin:0,ymin:i,xmax:l,ymax:s},f={xmin:c,ymin:i,xmax:0,ymax:s},y=[],g=[];_(e,o)&&y.push(u),_(e,f)&&g.push(u),_(t,o)&&y.push(p),_(t,f)&&g.push(p);for(let n=u+1;n<p;n++)y.push(n),g.push(n);n.push(new x(e,[u]),new x(t,[p]),new x(o,y),new x(f,g))}else h>d||f?n.push(new x({xmin:h,ymin:i,xmax:l,ymax:s},[u]),new x({xmin:c,ymin:i,xmax:d,ymax:s},[p])):n.push(new x({xmin:h,ymin:i,xmax:d,ymax:s},[u]));return n}(e,t).map((e=>e.extent));return n.length<2?n[0]||e:n.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:n.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function f(e,t,n){if(Array.isArray(e)){const i=e[0];if(i>t){const n=(0,c.kd)(i,t);e[0]=i+n*(-2*t)}else if(i<n){const t=(0,c.kd)(i,n);e[0]=i+t*(-2*n)}}else{const i=e.x;if(i>t){const n=(0,c.kd)(i,t);e.x+=n*(-2*t)}else if(i<n){const t=(0,c.kd)(i,n);e.x+=t*(-2*n)}}return e}function y(e,t){const[n,i]=t.valid,s=2*i;let r,a=0;return e>i?(r=Math.ceil(Math.abs(e-i)/s),e-=r*s,a=r):e<n&&(r=Math.ceil(Math.abs(e-n)/s),e+=r*s,a=-r),{x:e,frameId:a}}function _(e,t){const{xmin:n,ymin:i,xmax:s,ymax:r}=t;return g(e,n,i)&&g(e,n,r)&&g(e,s,r)&&g(e,s,i)}function g(e,t,n){return t>=e.xmin&&t<=e.xmax&&n>=e.ymin&&n<=e.ymax}function m(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=!(0,o.Rg)(e);if(i&&(0,a.m3)(e),n)return(new w).cut(e,t);const s=i?e.rings:e.paths,r=i?4:2,c=s.length,l=-2*t;for(let a=0;a<c;a++){const e=s[a];if(e&&e.length>=r){const t=[];for(const n of e)t.push([n[0]+l,n[1]]);s.push(t)}}return i?e.rings=s:e.paths=s,e}class x{constructor(e,t){this.extent=e,this.frameIds=t}}const v=(0,s.vt)();class w{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let n;if(this._xCut=t,e.rings)this._closed=!0,n=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,n=e.paths,this._minPts=2}for(const s of n){if(!s||s.length<this._minPts)continue;let e=!0;for(const t of s)e?(this.moveTo(t),e=!1):this.lineTo(t);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const s of this._linesIn)s&&s.length>=this._minPts&&n.push(s);const i=-2*this._xCut;for(const s of this._linesOut)if(s&&s.length>=this._minPts){for(const e of s)e[0]+=i;n.push(s)}return this._closed?e.rings=n:e.paths=n,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const n=this._intersect(this._prevPt,e);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,n){this._closed?(this._lineIn.push([n<=0?e:this._xCut,t]),this._lineOut.push([n>=0?e:this._xCut,t])):(n<=0&&this._lineIn.push([e,t]),n>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,n){this._closed?(S(this._lineIn,n<=0?e:this._xCut,t),S(this._lineOut,n>=0?e:this._xCut,t)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const n=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+n*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function S(e,t,n){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=n:e.push([t,n])}},56002:(e,t,n)=>{function i(e){let t,n,i=[],s=!1;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return s&&t===this&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(a,i)||(n=e.apply(this,a),t=this,i=a,s=!0),n}}n.d(t,{B:()=>i})},69963:(e,t,n)=>{n.d(t,{H:()=>o});n(81806);var i=n(53084),s=n(53521),r=n(50346),a=n(88685);function o(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new l(arguments.length>1?arguments[1]:void 0):new c}class c{async fetch(){return[]}notifySymbologyChange(){}}class l{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new s.q(1024),this._cacheVersion=0}async fetch(e,t){if(0===e.length)return[];const n=[],s=[],a=this._candidatesCache;for(const r of e){const e=h(r),t=a.get(e);if(t)for(const n of t)s.push((0,i.o8)(n));else n.push(r),a.put(e,[],1)}if(0===n.length)return s;const o=this._cacheVersion,{candidates:c,sourceCandidateIndices:l}=await this._getSymbologyCandidates(n,t);if((0,r.Te)(t),o!==this._cacheVersion)return this.fetch(e,t);const u=[],{length:d}=c;for(let r=0;r<d;++r){const e=c[r],t=h(n[l[r]]),s=a.get(t);s.push(e),a.put(t,s,s.length),u.push((0,i.o8)(e))}return s.concat(u)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function h(e){switch(e.type){case"vertex":{const{objectId:t,target:n}=e,i=`${t}-vertex-${n.x}-${n.y}-${n.z??0}`;return(0,a.Wm)(i).toString()}case"edge":{const{objectId:t,start:n,end:i}=e,s=`${t}-edge-${n.x}-${n.y}-${n.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return(0,a.Wm)(s).toString()}default:return""}}},72317:(e,t,n)=>{n.d(t,{C:()=>a});var i=n(75543),s=n(61751),r=n(23241);class a extends s.w{constructor(e){super({...e,constraint:new i.i7(e.targetPoint)})}get hints(){return[new r._(this.targetPoint,this.isDraped,this.domain)]}}},74964:(e,t,n)=>{n.d(t,{z:()=>a});n(81806);class i{filter(e,t){return t}notifyElevationSourceChange(){}}class s{filter(e,t){const{point:n,distance:i}=e,{z:s}=n;if(null==s)return t;if(0===t.length)return t;const a=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(i),o=this._updateCandidatesTo3D(t,n,a).filter(r);return o.sort(l),o}_updateCandidatesTo3D(e,t,n){for(const i of e)switch(i.type){case"edge":o(i,t,n);continue;case"vertex":c(i,t,n);continue}return e}}function r(e){return e.distance<=1}function a(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new s:new i}function o(e,t,n){let{x:i,y:s,z:r}=n;const{start:a,end:o,target:c}=e;e.draped||function(e,t,n,i){const s=i.x-n.x,r=i.y-n.y,a=i.z-n.z,o=s*s+r*r+a*a,c=(t.x-n.x)*s+(t.y-n.y)*r+a*(t.z-n.z),l=Math.min(1,Math.max(0,c/o)),h=n.x+s*l,u=n.y+r*l,d=n.z+a*l;e.x=h,e.y=u,e.z=d}(c,t,a,o);const l=(t.x-c.x)/i,h=(t.y-c.y)/s,u=(t.z-c.z)/r;e.distance=Math.sqrt(l*l+h*h+u*u)}function c(e,t,n){let{x:i,y:s,z:r}=n;const{target:a}=e,o=(t.x-a.x)/i,c=(t.y-a.y)/s,l=(t.z-a.z)/r,h=Math.sqrt(o*o+c*c+l*l);e.distance=h}function l(e,t){return e.distance-t.distance}},78482:(e,t,n)=>{n.d(t,{J:()=>f});var i=n(53084),s=n(50346),r=n(19902),a=n(1438),o=n(80963),c=n(24586),l=n(48094),h=n(9345),u=n(71857),d=n(85932),p=n(81376);async function f(e,t,n){const f=(0,s.Mq)(n),{point:y,distance:_,returnEdge:g,vertexMode:m}=t;if(!g&&"none"===m)return{candidates:[]};let x=(0,i.o8)(t.query);x=await e.schedule((()=>(0,u.T2)(x,e.definitionExpression,e.spatialReference)),f),x=await e.reschedule((()=>(0,d.B4)(x,{availableFields:e.availableFields,fieldsIndex:e.fieldsIndex,geometryType:e.geometryType,spatialReference:e.spatialReference})),f);const v=!(0,o.aI)(y.spatialReference,e.spatialReference);v&&await(0,c.Nk)(y.spatialReference,e.spatialReference);const w="number"==typeof _?_:_.x,S="number"==typeof _?_:_.y,C={xmin:y.x-w,xmax:y.x+w,ymin:y.y-S,ymax:y.y+S,spatialReference:y.spatialReference},I=v?(0,c.Cv)(C,e.spatialReference):C;if(!I)return{candidates:[]};const b=(await(0,a.el)((0,r.rS)(y),null,{signal:f}))[0],O=(await(0,a.el)((0,r.rS)(I),null,{signal:f}))[0];if(null==b||null==O)return{candidates:[]};const P=new h.G(await e.reschedule((()=>e.searchFeatures((0,l.ux)(O.toJSON()))),f),x,e);await e.reschedule((()=>e.executeObjectIdsQuery(P)),f),await e.reschedule((()=>e.executeTimeQuery(P)),f),await e.reschedule((()=>e.executeAttributesQuery(P)),f),await e.reschedule((()=>async function(e,t,n){const{query:i}=t,{spatialRel:s}=i;if(!t?.items?.length||!i.geometry||!s)return;const r=await(0,p.xt)(s,i.geometry,e.geometryType,e.hasZ,e.hasM),a=await e.runSpatialFilter(t.items,(e=>r(e.geometry)),n);t.items=a}(e,P,f)),f);const z=b.toJSON(),k=v?(0,c.Cv)(z,e.spatialReference):z,R=v?Math.max(I.xmax-I.xmin,I.ymax-I.ymin)/2:_;return P.createSnappingResponse({...t,point:k,distance:R},y.spatialReference)}},99546:(e,t,n)=>{n.r(t),n.d(t,{GraphicsSnappingSource:()=>T});var i=n(35143),s=n(91967),r=n(18690),a=n(98773),o=n(56002),c=n(50346),l=n(68134),h=n(46053),u=(n(81806),n(76460),n(85842)),d=n(19451),p=n(65215),f=n(9624),y=n(54222),_=n(31608),g=n(98618),m=n(20176),x=n(78482),v=n(72547),w=n(48094),S=n(1900),C=n(12482),I=n(94439),b=n(70330),O=n(18153),P=n(35961),z=n(74964),k=n(69963),R=n(59752);const E="graphics-collections";let T=class extends s.A{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return null!=e&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,n=null!=e&&"3d"===e.type;if(!n||"map-notes"===t.type)return(0,P.n)();return(0,P.n)(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:async(n,i)=>(await(0,c.qr)(e.whenLayerView(t),i)).elevationAlignPointsInFeatures(n,i)})}get _snappingElevationFilter(){const{view:e}=this,t=null!=e&&"3d"===e.type&&"map-notes"!==this.layerSource.layer.type;return(0,z.z)(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,n=null!=e&&"3d"===e.type,i=this._extrudedPolygonSymbolsCount>0;return n&&"map-notes"!==t.type&&i?(0,k.H)(i,(async(n,i)=>{const s=await e.whenLayerView(t);return(0,c.Te)(i),s.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},i)})):(0,k.H)()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new d.U,this._memoizedMakeGetGroundElevation=(0,o.B)(O.p)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources((e=>this._destroySource(e))),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add((()=>this.getGraphicsLayers()),(e=>{this._updatingHandles.removeHandles(E);for(const t of e)this._addMany(t.graphics.toArray()),this.addHandles([t.on("graphic-update",(e=>this._onGraphicUpdate(e))),this._updatingHandles.addOnCollectionChange((()=>t.graphics),(e=>this._onGraphicsChanged(e)))],E)}),l.Vh);const{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"map-notes"!==t.type&&e.elevationProvider&&this.addHandles([e.elevationProvider.on("elevation-change",(e=>{let{context:n}=e;(0,C.Up)(n,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()})),(0,l.wB)((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),l.Vh),(0,l.on)((()=>t),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))])}async fetchCandidates(e,t){const{point:n,coordinateHelper:{spatialReference:i}}=e,s=await(0,c.nA)(this._mapSources((n=>this._fetchCandidatesForSource(n,e,t))));(0,c.Te)(t);const r=this._memoizedMakeGetGroundElevation(this.view,i),a=s.flat().map((e=>(0,O.$)(e,r)));return(0,b.xX)(n,a),a}async _fetchCandidatesForSource(e,t,n){const i=(0,b.nf)(t,this.view?.type??"2d"),s=await(0,x.J)(e.queryEngine,i,n);(0,c.Te)(n);const r=await this._snappingElevationAligner.alignCandidates(s.candidates,t.coordinateHelper.spatialReference,n);(0,c.Te)(n);const a=await this._symbologySnappingFetcher.fetch(r,n);(0,c.Te)(n);const o=0===a.length?r:[...r,...a];return this._snappingElevationFilter.filter(i,o)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some((t=>t.graphics.includes(e.graphic))))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],n=new Map;for(const i of e)null!=i.geometry&&(this._needsInitializeProjection(i.geometry.spatialReference)?(t.push(i.geometry.spatialReference),n.set(i.uid,i)):this._add(i));this._createPendingAdd(t,n)}_createPendingAdd(e,t){if(!e.length)return;const n=(0,a.UT)((async n=>{await(0,f.initializeProjection)(e.map((e=>({source:e,dest:this.spatialReference}))),{signal:n}),this._markLoadedSpatialReferences(e);for(const e of t.values())this._add(e)}));this._updatingHandles.addPromise(n.promise);const i={task:n,graphics:t},s=()=>(0,r.Xy)(this._pendingAdds,i);n.promise.then(s,s),this._pendingAdds.push(i)}_markLoadedSpatialReferences(e){for(const t of e){null!=t.wkid&&this._loadedWkids.add(t.wkid);const e=t.wkt2||t.wkt;e&&this._loadedWkts.add(e)}}_add(e){if(null==e.geometry||!e.visible)return;let t=e.geometry;if("mesh"===t.type)return;"extent"===t.type&&(t=p.A.fromExtent(t));const n=this._ensureSource(t.type);if(null==n)return;const i=this._createOptimizedFeature(e.uid,t);null!=i&&(n.featureStore.add(i),(0,I.f3)(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(null!=e.wkid&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!(0,f.canProjectWithoutEngine)(e,this.spatialReference)}_createOptimizedFeature(e,t){const n=(0,f.project)((0,y.b3)(t),this.spatialReference);if(!n)return null;const i=this._ensureGeometryHasZ(n),s=(0,g.Ux)(i,this._hasZ,!1);return new m.Om(s,{[M]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=e=>{for(;e.length<3;)e.push(0)},n=e.clone();switch(n.hasZ=!0,n.type){case"point":n.z=n.z??0;break;case"multipoint":n.points.forEach(t);break;case"polyline":n.paths.forEach((e=>e.forEach(t)));break;case"polygon":n.rings.forEach((e=>e.forEach(t)))}return n}_ensureSource(e){const t=this._sources[e];if(null!=t)return t;const n=this._createSource(e);return this._sources[e]=n,n}_createSource(e){const t=_.gy.toJSON(e),n=this._hasZ,i=new v.A({geometryType:t,hasZ:n,hasM:!1});return{featureStore:i,queryEngine:new w.do({featureStore:i,fieldsIndex:S.A.fromLayerJSON({fields:[{name:M,type:"esriFieldTypeOID",alias:M}]}),geometryType:t,hasM:!1,hasZ:n,objectIdField:M,spatialReference:this.spatialReference,priority:R.W6.SNAPPING,scheduler:null!=this.view&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources((t=>this._removeFromSource(t,e)));for(const t of this._pendingAdds)t.graphics.delete(e.uid),0===t.graphics.size&&t.task.abort()}_removeFromSource(e,t){const n=t.uid;e.featureStore.has(n)&&(e.featureStore.removeById(t.uid),(0,I.f3)(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:n,polyline:i,multipoint:s}=this._sources,r=[];return null!=t&&r.push(e(t)),null!=n&&r.push(e(n)),null!=i&&r.push(e(i)),null!=s&&r.push(e(s)),r}};(0,i._)([(0,h.MZ)()],T.prototype,"getGraphicsLayers",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],T.prototype,"layerSource",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],T.prototype,"spatialReference",void 0),(0,i._)([(0,h.MZ)({constructOnly:!0})],T.prototype,"view",void 0),(0,i._)([(0,h.MZ)({readOnly:!0})],T.prototype,"updating",null),(0,i._)([(0,h.MZ)({readOnly:!0})],T.prototype,"availability",void 0),(0,i._)([(0,h.MZ)()],T.prototype,"_hasZ",null),(0,i._)([(0,h.MZ)()],T.prototype,"_snappingElevationAligner",null),(0,i._)([(0,h.MZ)()],T.prototype,"_snappingElevationFilter",null),(0,i._)([(0,h.MZ)()],T.prototype,"_symbologySnappingFetcher",null),(0,i._)([(0,h.MZ)()],T.prototype,"_extrudedPolygonSymbolsCount",void 0),T=(0,i._)([(0,u.$)("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],T);const M="OBJECTID"}}]);
//# sourceMappingURL=99546.58cd82ba.chunk.js.map
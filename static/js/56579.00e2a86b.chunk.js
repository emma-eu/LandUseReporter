"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[56579],{56579:(t,e,r)=>{r.r(e),r.d(e,{executeAttributeBinsQuery:()=>y});var n=r(54994),s=r(3825),i=r(90534),u=r(19902),a=r(1438),o=r(80963),l=r(78238);function c(t){const e=t.geometry,r=t.toJSON(),n=r;let s,i,a;if(null!=e&&(i=e.spatialReference,a=(0,o.YX)(i),n.geometryType=(0,u.$B)(e),n.geometry=JSON.stringify(e),n.inSR=a),r.outSR?(n.outSR=(0,o.YX)(r.outSR),s=t.outSpatialReference):e&&(n.outSR=n.inSR,s=i),n.bin&&=JSON.stringify(n.bin),n.quantizationParameters&&=JSON.stringify(n.quantizationParameters),n.outStatistics&&=JSON.stringify(n.outStatistics),n.outTimeReference&&=JSON.stringify(n.outTimeReference),r.timeExtent){const t=r.timeExtent,{start:e,end:s}=t;null==e&&null==s||(n.time=e===s?e:`${e??"null"},${s??"null"}`),delete r.timeExtent}return t.defaultSpatialReference&&(0,o.aI)(i,s)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function f(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await async function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const n="string"==typeof t?(0,i.An)(t):t,u=e.geometry?[e.geometry]:[],o=await(0,a.el)(u,null,{signal:r.signal}),f=o?.[0];null!=f&&((e=e.clone()).geometry=f);const d=(0,l.z)({...n.query,f:"json",...c(e)});return(0,s.A)((0,i.fj)(n.path,"queryBins"),{...r,query:{...d,...r.query}})}(t,e,r)}var d=r(80424),p=r(39729);async function y(t,e,r){const{data:s}=await f((0,n.Dl)(t),p.default.from(e),r);return d.A.fromJSON(s)}},80424:(t,e,r)=>{r.d(e,{A:()=>S});var n,s=r(35143),i=r(39356),u=r(69098),a=r(53084),o=r(46053),l=(r(81806),r(76460),r(85842));let c=n=class extends(u.A.ClonableMixin(i.A)){constructor(t){super(t),this.stackedAttributes=null}cloneShallow(){return new n({...super.cloneShallow(),stackedAttributes:this.stackedAttributes})}toJSON(){return{...super.toJSON(),stackedAttributes:(0,a.o8)(this.stackedAttributes)}}};(0,s._)([(0,o.MZ)()],c.prototype,"stackedAttributes",void 0),c=n=(0,s._)([(0,l.$)("esri.AttributeBinsGraphic")],c);const f=c;r(47249);var d=r(28379),p=r(77725);let y=class extends(u.A.ClonableMixin(p.A)){constructor(){super(...arguments),this.features=[]}readFeatures(t,e){return this.readFeaturesWithClass(t,e,f)}};(0,s._)([(0,o.MZ)({type:[f],json:{write:!0}})],y.prototype,"features",void 0),(0,s._)([(0,d.w)("features")],y.prototype,"readFeatures",null),y=(0,s._)([(0,l.$)("esri.rest.support.AttributeBinsFeatureSet")],y);const S=y}}]);
//# sourceMappingURL=56579.00e2a86b.chunk.js.map
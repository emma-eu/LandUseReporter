"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[72798],{72798:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var i=n(35143),o=n(95085),s=n(69539),r=n(69098),l=n(42553),a=n(76931),p=n(46053),u=n(40565),d=(n(81806),n(47249),n(85842));let c=class extends(l.A.JSONSupportMixin(r.A)){constructor(e){super(e),this.type="simple",this.color=new s.A("black"),this.lineSize=2,this.fontSize=10,this.textColor=new s.A("black"),this.textBackgroundColor=new s.A([255,255,255,.6])}};(0,i._)([(0,p.MZ)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:s.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],c.prototype,"color",void 0),(0,i._)([(0,p.MZ)({type:Number,cast:a.cr,nonNullable:!0,range:{min:(0,a.PN)(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),(0,i._)([(0,p.MZ)({type:Number,cast:a.cr,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),(0,i._)([(0,p.MZ)({type:s.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),(0,i._)([(0,p.MZ)({type:s.A,nonNullable:!0,json:{type:[u.jz],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=(0,i._)([(0,d.$)("esri.analysis.DimensionSimpleStyle")],c);const y=c;var h;!function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(h||(h={}));const m=[h.Horizontal,h.Vertical,h.Direct];var g=n(73582),M=n(21403),w=n(19247);let f=class extends(l.A.JSONSupportMixin(r.A)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=h.Direct,this.offset=0,this.orientation=0}};(0,i._)([(0,p.MZ)({type:["length"],json:{write:{isRequired:!0}}})],f.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:w.A,json:{write:{isRequired:!0}}})],f.prototype,"startPoint",void 0),(0,i._)([(0,p.MZ)({type:w.A,json:{write:{isRequired:!0}}})],f.prototype,"endPoint",void 0),(0,i._)([(0,p.MZ)({type:m,nonNullable:!0,json:{write:{isRequired:!0}}})],f.prototype,"measureType",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],f.prototype,"offset",void 0),(0,i._)([(0,p.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,M.w)((e=>g.ie.normalize((0,u.GB)(e),0,!0)))],f.prototype,"orientation",void 0),f=(0,i._)([(0,d.$)("esri.analysis.LengthDimension")],f);const v=f;var _=n(94643),x=n(3975),P=n(68134),Z=(n(76460),n(76797)),b=n(9624);const A=_.A.ofType(v);let R=class extends o.A{constructor(e){super(e),this.type="dimension",this.style=new y,this.extent=null}initialize(){this.addHandles((0,P.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),P.pc))}get dimensions(){return this._get("dimensions")||new A}set dimensions(e){this._set("dimensions",(0,x.V)(e,this.dimensions,A))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const o of this.dimensions)null!=o.startPoint&&t.push(o.startPoint),null!=o.endPoint&&t.push(o.endPoint);const n=(0,b.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let i=null;return null!=n.geometries&&(i=n.geometries.reduce(((e,t)=>null==e?null!=t?Z.A.fromPoint(t):null:null!=t?e.union(Z.A.fromPoint(t)):e),null)),{pending:null,extent:i}}clear(){this.dimensions.removeAll()}};(0,i._)([(0,p.MZ)({type:["dimension"]})],R.prototype,"type",void 0),(0,i._)([(0,p.MZ)({cast:x.H,type:A,nonNullable:!0})],R.prototype,"dimensions",null),(0,i._)([(0,p.MZ)({readOnly:!0})],R.prototype,"spatialReference",null),(0,i._)([(0,p.MZ)({types:{key:"type",base:null,typeMap:{simple:y}},nonNullable:!0})],R.prototype,"style",void 0),(0,i._)([(0,p.MZ)({value:null,readOnly:!0})],R.prototype,"extent",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],R.prototype,"requiredPropertiesForEditing",null),R=(0,i._)([(0,d.$)("esri.analysis.DimensionAnalysis")],R);const j=R;var N=n(77717),z=n(17707),q=n(25515),O=n(11270);let S=class extends((0,O.q)((0,N.P)(q.A))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new j,this.opacity=1,e){const{source:t,style:n}=e;t&&n&&(t.style=n)}}initialize(){this.addHandles([(0,P.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),P.pc)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new j)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,n,i){t.dimensions=e.filter((e=>{let{startPoint:t,endPoint:n}=e;return null!=t&&null!=n})).map((e=>e.toJSON(i))).toJSON()}};(0,i._)([(0,p.MZ)({json:{read:!1},readOnly:!0})],S.prototype,"type",void 0),(0,i._)([(0,p.MZ)({type:["ArcGISDimensionLayer"]})],S.prototype,"operationalLayerType",void 0),(0,i._)([(0,p.MZ)({nonNullable:!0})],S.prototype,"source",void 0),(0,i._)([(0,p.MZ)({readOnly:!0})],S.prototype,"spatialReference",null),(0,i._)([(0,p.MZ)({types:{key:"type",base:null,typeMap:{simple:y}},json:{write:{ignoreOrigin:!0}}})],S.prototype,"style",null),(0,i._)([(0,p.MZ)({readOnly:!0})],S.prototype,"fullExtent",null),(0,i._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),(0,i._)([(0,p.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,i._)([(0,p.MZ)({type:_.A.ofType(v),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],S.prototype,"dimensions",null),(0,i._)([(0,z.K)("web-scene","dimensions")],S.prototype,"writeDimensions",null),S=(0,i._)([(0,d.$)("esri.layers.DimensionLayer")],S);const D=S},73582:(e,t,n)=>{n.d(t,{hr:()=>o,ie:()=>p,uC:()=>l,wf:()=>a});var i=n(15941);class o{constructor(e,t){this.min=e,this.max=t,this.range=t-e}normalize(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s(this.range,this.min,this.max,e,t,n)}clamp(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,i.qE)(e-t,this.min,this.max)+t}monotonic(e,t,n){return e<t?t:t+r(this.range,e-t,n)}minimalMonotonic(e,t,n){return s(this.range,e,e+this.range,t,n)}center(e,t,n){return t=this.monotonic(e,t,n),this.normalize((e+t)/2,n)}diff(e,t,n){return this.monotonic(e,t,n)-e}shortestSignedDiff(e,t){e=this.normalize(e);const n=(t=this.normalize(t))-e,i=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(n)<Math.abs(i)?n:i}contains(e,t,n){return t=this.minimalMonotonic(e,t),(n=this.minimalMonotonic(e,n))>e&&n<t}}function s(e,t,n,i){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return(i-=o)<t?i+=r(e,t-i):i>n&&(i-=r(e,i-n)),s&&i===n&&(i=t),i+o}function r(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.ceil((t-n)/e)*e+n}const l=new o(0,2*Math.PI),a=new o(-Math.PI,Math.PI),p=new o(0,360)}}]);
//# sourceMappingURL=72798.7a1e198a.chunk.js.map
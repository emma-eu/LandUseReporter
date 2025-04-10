"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[49032],{120:(e,t,r)=>{r.d(t,{A:()=>A});var i,n=r(35143),o=r(45802),s=r(42553),l=r(53084),a=r(46053),d=(r(81806),r(76460),r(85842));r(47249);let u=i=class extends s.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new i({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,a.MZ)({type:String,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"minValue",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],u.prototype,"maxValue",void 0),u=i=(0,n._)([(0,d.$)("esri.renderers.support.pointCloud.ColorModulation")],u);const p=u,c=new o.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.A{};(0,n._)([(0,a.MZ)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:{writer:c.write,isRequired:!0}}})],y.prototype,"type",void 0),y=(0,n._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const h=y;var f,m=r(6409);let g=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,m.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],g.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"size",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"useRealWorldSymbolSizes",void 0),g=f=(0,n._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],g);const v=g;var w;let b=w=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,n._)([(0,m.e)({pointCloudSplatAlgorithm:"splat"})],b.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],b.prototype,"scaleFactor",void 0),b=w=(0,n._)([(0,d.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],b);const _={key:"type",base:h,typeMap:{"fixed-size":v,splat:b}},T=(0,o.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let S=class extends s.A{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,n._)([(0,a.MZ)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:{writer:T.write,isRequired:!0}}})],S.prototype,"type",void 0),(0,n._)([(0,a.MZ)({types:_,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,a.MZ)({type:p,json:{write:!0}})],S.prototype,"colorModulation",void 0),(0,n._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=(0,n._)([(0,d.$)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new o.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const A=S},5682:(e,t,r)=>{r.d(t,{j:()=>s});var i=r(35143),n=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const r=this._get("effectiveScaleRange");return r&&r.minScale===e.minScale&&r.maxScale===e.maxScale?r:e}};return(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,i._)([(0,n.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,i._)([(0,n.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,i._)([(0,o.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},6127:(e,t,r)=>{r.d(t,{m:()=>i});const i=new(r(45802).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},11830:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var i=r(35143),n=r(16868),o=r(3825),s=r(50076),l=r(53084),a=r(76460),d=r(77717),u=r(48611),p=r(50346),c=r(90534),y=r(46053),h=(r(81806),r(28379)),f=r(85842),m=r(17707),g=r(25515),v=r(12406),w=r(19502),b=r(31362),_=r(11270),T=r(94729),S=r(5682),A=r(90260),x=r(40565),M=r(6409),j=r(42553);r(47249);let Z=class extends j.A{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,i._)([(0,y.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Z.prototype,"field",void 0),(0,i._)([(0,y.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],Z.prototype,"type",void 0),Z=(0,i._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudFilter")],Z);const I=Z;var F;let R=F=class extends I{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new F({field:this.field,requiredClearBits:(0,l.o8)(this.requiredClearBits),requiredSetBits:(0,l.o8)(this.requiredSetBits)})}};(0,i._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],R.prototype,"requiredClearBits",void 0),(0,i._)([(0,y.MZ)({type:[x.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],R.prototype,"requiredSetBits",void 0),(0,i._)([(0,M.e)({pointCloudBitfieldFilter:"bitfield"})],R.prototype,"type",void 0),R=F=(0,i._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],R);const V=R;var C;let q=C=class extends I{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new C({field:this.field,includedReturns:(0,l.o8)(this.includedReturns)})}};(0,i._)([(0,y.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],q.prototype,"includedReturns",void 0),(0,i._)([(0,M.e)({pointCloudReturnFilter:"return"})],q.prototype,"type",void 0),q=C=(0,i._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],q);const N=q;var P;let O=P=class extends I{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new P({field:this.field,mode:this.mode,values:(0,l.o8)(this.values)})}};(0,i._)([(0,y.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"mode",void 0),(0,i._)([(0,M.e)({pointCloudValueFilter:"value"})],O.prototype,"type",void 0),(0,i._)([(0,y.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"values",void 0),O=P=(0,i._)([(0,f.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],O);const E={key:"type",base:I,typeMap:{value:O,bitfield:V,return:N}};var $,D=r(95363),B=r(44135),K=r(76350),z=r(81779),L=r(90975),k=r(120);let U=$=class extends k.A{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new $({...this.cloneProperties(),field:(0,l.o8)(this.field)})}};(0,i._)([(0,M.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],U.prototype,"type",void 0),(0,i._)([(0,y.MZ)({type:String,json:{write:{isRequired:!0}}})],U.prototype,"field",void 0),U=$=(0,i._)([(0,f.$)("esri.renderers.PointCloudRGBRenderer")],U);const J=U;var G=r(42600),X=r(64724);const W={key:"type",base:k.A,typeMap:{"point-cloud-class-breaks":L.A,"point-cloud-rgb":J,"point-cloud-stretch":G.A,"point-cloud-unique-value":X.A},errorContext:"renderer"};var Q=r(12482),H=r(30973);const Y=(0,K.p)();let ee=class extends((0,A.w6)((0,w.b)((0,_.q)((0,T.A)((0,S.j)((0,d.P)((0,b.d)((0,v.p)(g.A))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new B.A;return"FieldTypeInteger"===e.type&&((e=(0,l.o8)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new B.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}writeRenderer(e,t,r,i){(0,u.sM)("layerDefinition.drawingInfo.renderer",e.write({},i),t)}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(p.QP).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=(0,H.tn)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const i=new z.A({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const i=new z.A({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.attributeStorageInfo)if(i.name===r.name){const e=(0,c.fj)(this.parsedUrl?.path??"",`./statistics/${i.key}`);return(0,o.A)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(A.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(A.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(e){(0,Q.XF)(a.A.getLogger(this),(0,Q.B)("Point cloud layers","absolute-height",e)),(0,Q.XF)(a.A.getLogger(this),(0,Q.tW)("Point cloud layers",e))}};(0,i._)([(0,y.MZ)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.MZ)(D.M6)],ee.prototype,"popupEnabled",void 0),(0,i._)([(0,y.MZ)({type:n.A,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,i._)([(0,y.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,i._)([(0,y.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,i._)([(0,y.MZ)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,i._)([(0,y.MZ)({types:[E],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,i._)([(0,y.MZ)({type:[B.A]})],ee.prototype,"fields",void 0),(0,i._)([(0,y.MZ)(Y.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,i._)([(0,h.w)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,i._)([(0,y.MZ)(Y.outFields)],ee.prototype,"outFields",void 0),(0,i._)([(0,y.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,y.MZ)(D.Yj)],ee.prototype,"elevationInfo",null),(0,i._)([(0,y.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,i._)([(0,y.MZ)(D.fV)],ee.prototype,"legendEnabled",void 0),(0,i._)([(0,y.MZ)({types:W,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:W},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,i._)([(0,m.K)("renderer")],ee.prototype,"writeRenderer",null),(0,i._)([(0,y.MZ)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,i._)([(0,f.$)("esri.layers.PointCloudLayer")],ee);const te=ee},12406:(e,t,r)=>{r.d(t,{p:()=>s});var i=r(35143),n=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):function(e){return"portalItem"in e}(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.MZ)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.$)("esri.layers.mixins.APIKeyMixin")],t),t}},12482:(e,t,r)=>{r.d(t,{$7:()=>x,B:()=>A,Fo:()=>_,M7:()=>Z,NN:()=>c,Q5:()=>T,Tq:()=>F,Up:()=>S,XF:()=>j,Ze:()=>g,bK:()=>l,bh:()=>p,id:()=>v,ky:()=>u,qt:()=>I,tW:()=>M,v9:()=>y,w7:()=>a,wF:()=>s,wS:()=>w,wz:()=>f,x:()=>h,xS:()=>b,ze:()=>d});var i=r(31633),n=r(59097);function o(e){return e?I:F}function s(e,t){return t?.mode?t.mode:o(e).mode}function l(e,t){return null!=t?t:o(e)}function a(e,t){return s(null==e||(e.hasZ??!1),t)}function d(e,t){return l(null==e||(e.hasZ??!1),t)}function u(e){const t=m(e);return a(e.geometry,t)}function p(e){const t=m(e),r=a(e.geometry,t),i=null!=t&&"on-the-ground"!==r?Z(t):0,n=t?.featureExpressionInfo;return{mode:r,offset:i,featureExpressionInfo:n}}function c(e){return f(p(e))}function y(e){return f(e)||h(e)}function h(e){return"0"===e?.featureExpressionInfo?.expression}function f(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const t=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function m(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function g(e,t){if(!e?.offset)return 0;const{offset:r,unit:n}=e;if("decimal-degrees"===n)return 0;const o="unknown"!==n&&n?n:"meters",s=(0,i.mq)(t);return s?(0,i.oU)(r,o,s):0}function v(e,t,r){if(!r?.mode)return;const i=e.hasZ?e.z:0,n=g(r,e.spatialReference);switch(r.mode){case"absolute-height":return i-n;case"on-the-ground":return 0;case"relative-to-ground":return i-((t.elevationProvider.getElevation(e.x,e.y,i,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return i-((t.elevationProvider.getElevation(e.x,e.y,i,e.spatialReference,"scene")??0)+n)}}function w(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return _(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,r,i)}function b(e,t,r,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return _(e,t[0],t[1],t.length>2?t[2]:0,r,i,n)}function _(e,t,r,i,n,o){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==o)return;const l=null!=s?s.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:a}=T(t,r,i,n,e,o);return function(e,t,r,i,n,o,s,l){const a=g(s,n);switch(l){case"absolute-height":return e-a;case"relative-to-ground":return e-((o.elevationProvider.getElevation(t,r,i,n,"ground")??0)+a);case"relative-to-scene":return e-((o.elevationProvider.getElevation(t,r,i,n,"scene")??0)+a)}}(a,t,r,i,n,e,s,l)}function T(e,t,r,i,n,o){const s=g(o,i);switch(o.mode){case"absolute-height":return{absoluteZ:r+s,elevation:0};case"on-the-ground":{const r=n.elevationProvider.getElevation(e,t,0,i,"ground")??0;return{absoluteZ:r,elevation:r}}case"relative-to-ground":{const o=n.elevationProvider.getElevation(e,t,r,i,"ground")??0;return{absoluteZ:r+o+s,elevation:o}}case"relative-to-scene":{const o=n.elevationProvider.getElevation(e,t,r,i,"scene")??0;return{absoluteZ:r+o+s,elevation:o}}}}function S(e,t){if(null==t)return!1;const{mode:r}=t;return null!=r&&("scene"===e&&"relative-to-scene"===r||"ground"===e&&"absolute-height"!==r)}function A(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function x(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function M(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function j(e,t){t&&e.warn(".elevationInfo=",t)}function Z(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const I={mode:"absolute-height",offset:0},F={mode:"on-the-ground",offset:null}},30973:(e,t,r)=>{r.d(t,{DQ:()=>u,tn:()=>d});var i=r(16868),n=r(53430),o=r(75900),s=(r(56362),r(87015),r(81940),r(6929)),l=(r(7198),r(93616),r(53539),r(91904),r(40585)),a=r(17542);function d(e,t){let{displayField:r,editFieldsInfo:l,fields:a,objectIdField:d,title:u}=e;if(!a)return null;const p=y({editFieldsInfo:l,fields:a,objectIdField:d},t);if(!p.length)return null;const c=function(e){const t=(0,n.mB)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r??""}({titleBase:u,fields:a,displayField:r}),h=[new s.A,new o.A];return new i.A({title:c,content:h,fieldInfos:p})}function u(e){const{title:t,graphic:r}=e??{},{attributes:i,sourceLayer:n}=r??{},o=n&&"displayField"in n?n.displayField:null,s=o?i?.[o]:null,l=null!=s?JSON.stringify(s):null,a=r?.getObjectId()?.toString();return t||l||a||""}const p=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,n.Bz)(e,t);function c(e,t){return"oid"===e.type?-1:"oid"===t.type?1:f(e)?-1:f(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function y(e,t){const r=t?.visibleFieldNames;return function(e){let{fields:t,ignoreFieldTypes:r,sortDisabled:i}=e;const n=t;return r&&(t=t.filter((e=>!r.includes(e.type)))),t===n&&(t=t.slice()),!0!==i&&t.sort(c),t}({fields:e.fields??[],ignoreFieldTypes:t?.ignoreFieldTypes||m,sortDisabled:t?.sortDisabled}).map((t=>new l.A({fieldName:t.name,isEditable:(0,n.R$)(t,e),label:t.alias,format:h(t),visible:p(t,{...e,visibleFieldNames:r})})))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.A({digitSeparator:!0,places:0});case"double":return new a.A({digitSeparator:!0,places:2});case"string":return(0,n.JL)(e.name)?new a.A({digitSeparator:!0,places:0}):void 0;default:return}}function f(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;const t=e.alias?.toLowerCase();return"name"===t}const m=["geometry","blob","raster","guid","xml"]},31362:(e,t,r)=>{r.d(t,{d:()=>s});var i=r(35143),n=r(46053),o=(r(81806),r(76460),r(47249),r(85842));const s=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,i._)([(0,n.MZ)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,i._)([(0,o.$)("esri.layers.mixins.CustomParametersMixin")],t),t}},32173:(e,t,r)=>{r.d(t,{A:()=>d});var i,n=r(35143),o=(r(76460),r(81806),r(47249),r(50076),r(6409)),s=r(85842),l=r(44631);let a=i=class extends l.A{constructor(e){super(e),this.type="inherited"}clone(){return new i}};(0,n._)([(0,o.e)({inherited:"inherited"})],a.prototype,"type",void 0),a=i=(0,n._)([(0,s.$)("esri.layers.support.InheritedDomain")],a);const d=a},42600:(e,t,r)=>{r.d(t,{A:()=>y});var i,n=r(35143),o=r(53084),s=r(46053),l=(r(81806),r(76460),r(6409)),a=r(85842),d=r(120),u=r(84563),p=r(77718);let c=i=class extends d.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new i({...this.cloneProperties(),field:(0,o.o8)(this.field),fieldTransformType:(0,o.o8)(this.fieldTransformType),stops:(0,o.o8)(this.stops),legendOptions:(0,o.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],c.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:u.A,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,n._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[p.A],json:{write:{isRequired:!0}}})],c.prototype,"stops",void 0),c=i=(0,n._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},44135:(e,t,r)=>{r.d(t,{A:()=>m});var i,n=r(35143),o=r(45802),s=r(42553),l=r(46053),a=r(40565),d=(r(81806),r(47249),r(6409)),u=r(28379),p=r(85842),c=r(76866),y=r(6127);const h=new o.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let f=i=class extends s.A{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,t){let{description:r}=t,i=null;try{i=r?JSON.parse(r):null}catch(n){}return i?.value??null}readValueType(e,t){let{description:r}=t,i=null;try{i=r?JSON.parse(r):null}catch(n){}return i?h.fromJSON(i.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"alias",void 0),(0,n._)([(0,l.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],f.prototype,"defaultValue",void 0),(0,n._)([(0,l.MZ)()],f.prototype,"description",void 0),(0,n._)([(0,u.w)("description")],f.prototype,"readDescription",null),(0,n._)([(0,l.MZ)({types:c.gK,json:{read:{reader:c.rS},write:!0}})],f.prototype,"domain",void 0),(0,n._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"editable",void 0),(0,n._)([(0,l.MZ)({type:a.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],f.prototype,"length",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],f.prototype,"name",void 0),(0,n._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"nullable",void 0),(0,n._)([(0,d.e)(y.m)],f.prototype,"type",void 0),(0,n._)([(0,l.MZ)()],f.prototype,"valueType",void 0),(0,n._)([(0,u.w)("valueType",["description"])],f.prototype,"readValueType",null),(0,n._)([(0,l.MZ)({type:Boolean,json:{read:!1}})],f.prototype,"visible",void 0),f=i=(0,n._)([(0,p.$)("esri.layers.support.Field")],f);const m=f},44631:(e,t,r)=>{r.d(t,{A:()=>p});var i=r(35143),n=r(45802),o=r(42553),s=r(46053),l=(r(81806),r(76460),r(47249),r(6409)),a=r(85842);const d=new n.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let u=class extends o.A{constructor(e){super(e),this.name=null,this.type=null}};(0,i._)([(0,s.MZ)({type:String,json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,l.e)(d),(0,s.MZ)({json:{write:{isRequired:!0}}})],u.prototype,"type",void 0),u=(0,i._)([(0,a.$)("esri.layers.support.Domain")],u);const p=u},50654:(e,t,r)=>{r.d(t,{A:()=>u});var i,n=r(35143),o=r(46053),s=(r(81806),r(76460),r(47249),r(6409)),l=r(85842),a=r(44631);let d=i=class extends a.A{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,n._)([(0,o.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]},isRequired:!0}}})],d.prototype,"maxValue",void 0),(0,n._)([(0,o.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]},isRequired:!0}}})],d.prototype,"minValue",void 0),(0,n._)([(0,s.e)({range:"range"})],d.prototype,"type",void 0),d=i=(0,n._)([(0,l.$)("esri.layers.support.RangeDomain")],d);const u=d},59187:(e,t,r)=>{r.d(t,{A:()=>y});var i,n=r(35143),o=r(42553),s=r(18288),l=r(46053),a=(r(81806),r(76460),r(47249),r(28379)),d=r(85842),u=r(17707),p=r(36693);let c=i=class extends o.A{static get allTime(){return h}static get empty(){return f}static fromArray(e){return new i({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(i.allTime)}get isEmpty(){return this.equals(i.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new i({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,i=e.start?.getTime()??e.start,n=e.end?.getTime()??e.end;return t===i&&r===n}expandTo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();let r=this.start;r&&(r=(0,s.lL)(r,e,t));let n=this.end;if(n){const r=(0,s.lL)(n,e,t);n=n.getTime()===r.getTime()?r:(0,s.S1)(r,1,e,t)}return new i({start:r,end:n})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return i.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,n=e.start?.getTime()??-1/0,o=e.end?.getTime()??1/0;let s,l;return n>=t&&n<=r?s=n:t>=n&&t<=o&&(s=t),r>=n&&r<=o?l=r:o>=t&&o<=r&&(l=o),null==s||null==l||isNaN(s)||isNaN(l)?i.empty:new i({start:s===-1/0?null:new Date(s),end:l===1/0?null:new Date(l)})}offset(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.qU;if(this.isEmpty||this.isAllTime)return this.clone();const n=new i,{start:o,end:l}=this;return null!=o&&(n.start=(0,s.S1)(o,e,t,r)),null!=l&&(n.end=(0,s.S1)(l,e,t,r)),n}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return h.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,r=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new i({start:t,end:r})}};(0,n._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,n._)([(0,a.w)("end")],c.prototype,"readEnd",null),(0,n._)([(0,u.K)("end")],c.prototype,"writeEnd",null),(0,n._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,n._)([(0,l.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,n._)([(0,l.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,n._)([(0,a.w)("start")],c.prototype,"readStart",null),(0,n._)([(0,u.K)("start")],c.prototype,"writeStart",null),c=i=(0,n._)([(0,d.$)("esri.time.TimeExtent")],c);const y=c,h=new c,f=new c({start:void 0,end:void 0})},64724:(e,t,r)=>{r.d(t,{A:()=>v});var i,n=r(35143),o=r(53084),s=r(46053),l=(r(81806),r(76460),r(6409)),a=r(85842),d=r(120),u=r(84563),p=r(69539),c=r(42553),y=r(40565);let h=i=class extends c.A{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new i({description:this.description,label:this.label,values:(0,o.o8)(this.values),color:(0,o.o8)(this.color)})}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,n._)([(0,s.MZ)({type:[String],json:{write:{isRequired:!0}}})],h.prototype,"values",void 0),(0,n._)([(0,s.MZ)({type:p.A,json:{type:[y.jz],write:{isRequired:!0}}})],h.prototype,"color",void 0),h=i=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var m;let g=m=class extends d.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new m({...this.cloneProperties(),field:(0,o.o8)(this.field),fieldTransformType:(0,o.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,o.o8)(this.colorUniqueValueInfos),legendOptions:(0,o.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],g.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[f],json:{write:{isRequired:!0}}})],g.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,s.MZ)({type:u.A,json:{write:!0}})],g.prototype,"legendOptions",void 0),g=m=(0,n._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],g);const v=g},72599:(e,t,r)=>{r.d(t,{A:()=>c});var i,n=r(35143),o=r(53084),s=r(46053),l=(r(81806),r(76460),r(6409)),a=r(85842),d=r(92115),u=r(44631);let p=i=class extends u.A{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new i({codedValues:(0,o.o8)(this.codedValues),name:this.name})}};(0,n._)([(0,s.MZ)({type:[d.H],json:{write:{isRequired:!0}}})],p.prototype,"codedValues",void 0),(0,n._)([(0,l.e)({codedValue:"coded-value"})],p.prototype,"type",void 0),p=i=(0,n._)([(0,a.$)("esri.layers.support.CodedValueDomain")],p);const c=p},76350:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(81806),n=r(76460),o=r(44135),s=r(1900),l=r(53430);function a(){return{fields:{type:[o.A],value:null,set:function(e){if(e&&(0,i.A)("big-integer-warning-enabled")){const t=e.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const e=t.map((e=>`'${e.name}'`)).join(", ");n.A.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${e}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",e)}},fieldsIndex:{readOnly:!0,get(){return s.A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e?.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){const r=this.fieldsIndex?.has(t);r||n.A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return(0,l.DB)(this.fieldsIndex,e)}}}}},76866:(e,t,r)=>{r.d(t,{gK:()=>l,rS:()=>a});r(81806);var i=r(72599),n=r(44631),o=r(32173),s=r(50654);const l={key:"type",base:n.A,typeMap:{range:s.A,"coded-value":i.A,inherited:o.A}};function a(e){if(!e?.type)return null;switch(e.type){case"range":return s.A.fromJSON(e);case"codedValue":return i.A.fromJSON(e);case"inherited":return o.A.fromJSON(e)}return null}},90975:(e,t,r)=>{r.d(t,{A:()=>v});var i,n=r(35143),o=r(53084),s=r(46053),l=(r(81806),r(76460),r(6409)),a=r(85842),d=r(120),u=r(84563),p=r(69539),c=r(42553),y=r(40565);let h=i=class extends c.A{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,o.o8)(this.color)})}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,n._)([(0,s.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],h.prototype,"minValue",void 0),(0,n._)([(0,s.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],h.prototype,"maxValue",void 0),(0,n._)([(0,s.MZ)({type:p.A,json:{type:[y.jz],write:{isRequired:!0}}})],h.prototype,"color",void 0),h=i=(0,n._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var m;let g=m=class extends d.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new m({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,o.o8)(this.colorClassBreakInfos),legendOptions:(0,o.o8)(this.legendOptions)})}};(0,n._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),(0,n._)([(0,s.MZ)({json:{write:{isRequired:!0}},type:String})],g.prototype,"field",void 0),(0,n._)([(0,s.MZ)({type:u.A,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,n._)([(0,s.MZ)({type:d.A.fieldTransformTypeKebabDict.apiValues,json:{type:d.A.fieldTransformTypeKebabDict.jsonValues,read:d.A.fieldTransformTypeKebabDict.read,write:d.A.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.MZ)({type:[f],json:{write:{isRequired:!0}}})],g.prototype,"colorClassBreakInfos",void 0),g=m=(0,n._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],g);const v=g},92115:(e,t,r)=>{r.d(t,{H:()=>a});var i,n=r(35143),o=r(42553),s=r(46053),l=(r(81806),r(76460),r(47249),r(85842));let a=i=class extends o.A{constructor(e){super(e),this.name=null,this.code=null}clone(){return new i({name:this.name,code:this.code})}};(0,n._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],a.prototype,"name",void 0),(0,n._)([(0,s.MZ)({type:[String,Number],json:{write:{isRequired:!0}}})],a.prototype,"code",void 0),a=i=(0,n._)([(0,l.$)("esri.layers.support.CodedValue")],a)}}]);
//# sourceMappingURL=49032.97e29e30.chunk.js.map
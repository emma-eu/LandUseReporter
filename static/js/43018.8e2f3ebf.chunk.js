"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[43018],{731:(e,t,i)=>{i.d(t,{A:()=>x});var r,s=i(35143),o=i(45802),n=i(42553),a=i(30726),l=i(46053),h=(i(81806),i(76460),i(47249),i(28379)),p=i(85842),c=i(17707),d=i(53430);let u=r=class extends n.A{constructor(e){super(e)}async collectRequiredFields(e,t){return(0,d.Dx)(e,t,this.expression)}clone(){return new r({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};(0,s._)([(0,l.MZ)({type:String,json:{write:{isRequired:!0}}})],u.prototype,"expression",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],u.prototype,"title",void 0),u=r=(0,s._)([(0,p.$)("esri.symbols.support.FeatureExpressionInfo")],u);const y=u;var m,f=i(59097);const v=(0,o.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),g=new o.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let _=m=class extends n.A{constructor(e){super(e),this.featureExpressionInfo=void 0,this.offset=null}readFeatureExpressionInfo(e,t){return null!=e?e:t.featureExpression&&0===t.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,t,i,r){t[i]=e.write({},r),"0"===e.expression&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new m({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,a.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,s._)([(0,l.MZ)({type:y,json:{write:!0}})],_.prototype,"featureExpressionInfo",void 0),(0,s._)([(0,h.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],_.prototype,"readFeatureExpressionInfo",null),(0,s._)([(0,c.K)("featureExpressionInfo",{featureExpressionInfo:{type:y},"featureExpression.value":{type:[0]}})],_.prototype,"writeFeatureExpressionInfo",null),(0,s._)([(0,l.MZ)({type:v.apiValues,nonNullable:!0,json:{type:v.jsonValues,read:v.read,write:{writer:v.write,isRequired:!0}}})],_.prototype,"mode",null),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],_.prototype,"offset",void 0),(0,s._)([(0,l.MZ)({type:f.KQ,json:{type:String,read:g.read,write:g.write}})],_.prototype,"unit",null),_=m=(0,s._)([(0,p.$)("esri.symbols.support.ElevationInfo")],_);const x=_},5682:(e,t,i)=>{i.d(t,{j:()=>n});var r=i(35143),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842));const n=e=>{let t=class extends e{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},t=this.parent;t&&"effectiveScaleRange"in t&&function(e,t){e.minScale=e.minScale>0?t.minScale>0?Math.min(e.minScale,t.minScale):e.minScale:t.minScale,e.maxScale=e.maxScale>0?t.maxScale>0?Math.max(e.maxScale,t.maxScale):e.maxScale:t.maxScale}(e,t.effectiveScaleRange);const i=this._get("effectiveScaleRange");return i&&i.minScale===e.minScale&&i.maxScale===e.maxScale?i:e}};return(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),(0,r._)([(0,s.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],t.prototype,"effectiveScaleRange",null),t=(0,r._)([(0,o.$)("esri.layers.mixins.ScaleRangeLayer")],t),t}},23717:(e,t,i)=>{i.d(t,{A:()=>O});var r=i(53494),s=i(63919),o=i(85827),n=i(59422),a=i(83755),l=i(1438),h=i(80963),p=i(28632),c=i(61551),d=i(36201),u=i(30726),y=i(64780),m=i(90356),f=i(70479),v=i(32743),g=i(35143),_=i(6951),x=i(60984);class w extends _.ZA{}(0,g._)([(0,_.C5)(0,x.ZY)],w.prototype,"pos",void 0),(0,g._)([(0,_.C5)(1,x.ZY)],w.prototype,"uv",void 0);class S extends _.HS{}class b extends _.k2{}(0,g._)([(0,_.Pi)(x.U)],b.prototype,"dvs",void 0);class M extends _.k2{}(0,g._)([(0,_.Pi)(x.ZY)],M.prototype,"perspective",void 0),(0,g._)([(0,_.Pi)(x.ZY)],M.prototype,"texSize",void 0),(0,g._)([(0,_.Pi)(x.nt)],M.prototype,"wrapAroundShift",void 0),(0,g._)([(0,_.Pi)(x.nt)],M.prototype,"opacity",void 0),(0,g._)([(0,_.Pi)(x.z7)],M.prototype,"texture",void 0);class A extends _.A{constructor(){super(...arguments),this.type="OverlayShader"}vertex(e){const t=e.uv.divide(this.config.texSize),i=new x.nt(1).add((0,x.Om)(t,this.config.perspective)),r=new x.eB(e.pos.add(new x.ZY(this.config.wrapAroundShift,0)),1),s=this.transform.dvs.multiply(r);return{uv:t,glPosition:new x.Zb(s.xy.multiply(i),0,i)}}fragment(e){const t=(0,x.US)(this.config.texture,e.uv).multiply(this.config.opacity),i=new _.mm;return i.fragColor=t,i}}(0,g._)([(0,_.Pi)(b)],A.prototype,"transform",void 0),(0,g._)([(0,_.Pi)(M)],A.prototype,"config",void 0),(0,g._)([(0,g.a)(0,(0,_.hF)(w))],A.prototype,"vertex",null),(0,g._)([(0,g.a)(0,(0,_.hF)(S))],A.prototype,"fragment",null);var C=i(93345),T=i(21812);class E extends f.j{constructor(){super(...arguments),this.type=v.N.Overlay,this._mesh=null,this.shaders={overlay:new A}}render(e,t){const{context:i,painter:r}=e,s=this._getMesh(e,t);r.setPipelineState(m.i);const{isWrapAround:o,wrapAroundShift:n}=t.config,a={...t.config,wrapAroundShift:0},l={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:a},defines:null,optionalAttributes:null,useComputeBuffer:!1};r.setPipelineState({...m.i,stencil:{write:!1,test:{compare:C.MT.EQUAL,op:{fail:C.eA.KEEP,zFail:C.eA.KEEP,zPass:C.eA.REPLACE},ref:0,mask:255}}}),r.submitDrawMeshUntyped(i,l,s),o&&(a.wrapAroundShift=n,r.submitDrawMeshUntyped(i,l,s))}shutdown(){(0,u.pR)(this._mesh)}_getMesh(e,t){const{context:i}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.buffer.setData(t.position)}else{const e=null!=t.index?t.index.length:t.position.length/2;this._mesh=new y.e(i,{vertex:{positions:{data:t.position,attributes:[new T._("pos",2,C.pe.FLOAT,0,8)]},uvs:{data:t.tex,attributes:[new T._("uv",2,C.pe.UNSIGNED_SHORT,0,4)]}},index:null!=t.index?{index:{data:t.index}}:void 0,groups:[{index:null!=t.index?"index":void 0,primitive:C.WR.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]})}return this._mesh}}class O extends d.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,o.vt)(),this._overlayTechnique=new E}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==c.S5.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const i of this.children)i.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:i,size:o,pixelRatio:h,resolution:p,rotation:c,viewpoint:d,displayMat3:u}=t;if(this._viewStateId===i)return;const y=(0,r.DF)(c),m=h*o[0],f=h*o[1];this._localOrigin=d.targetGeometry.clone();const{x:v,y:g}=this._localOrigin,_=(0,l.mT)(v,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=g;const x=p*m,w=p*f,S=(0,s.D_)(this._dvsMat3);(0,s.lw)(S,S,u),(0,s.Tl)(S,S,(0,n.fA)(m/2,f/2)),(0,s.hs)(S,S,(0,a.fA)(m/x,-f/w,1)),(0,s.e$)(S,S,-y),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:s,spatialReference:o,worldScreenWidth:n,size:a,viewpoint:l}=i,c=this._localOrigin;let d,u=0;const y=(0,h.Vp)(o);if(y&&o.isWrappable){const e=a[0],t=a[1],h=(0,r.DF)(s),c=Math.abs(Math.cos(h)),m=Math.abs(Math.sin(h)),f=Math.round(e*c+t*m),[v,g]=y.valid,_=(0,p.FT)(o),{x:x,y:w}=l.targetGeometry,S=[x,w],b=[0,0];i.toScreen(b,S);const M=[0,0];let A;A=f>n?.5*n:.5*f;const C=Math.floor((x+.5*_)/_),T=v+C*_,E=g+C*_,O=[b[0]+A,0];i.toMap(M,O),M[0]>E&&(u=_),O[0]=b[0]-A,i.toMap(M,O),M[0]<T&&(u=-_),d={worldWidth:_,xBounds:[v,g]}}for(const r of t)r.updateDrawCoords(c,u,o,d)}}},31394:(e,t,i)=>{i.d(t,{A:()=>n});var r=i(61551),s=i(8995),o=i(13692);class n extends s.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case r.S5.MAP:this._renderChildren(e,r.RI.All);break;case r.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,o.lB)(e,!1,(e=>{this._renderChildren(e,r.RI.Highlight)}))}}},43018:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Z});var r=i(35143),s=i(69539),o=i(39356),n=i(30726),a=i(68134),l=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),p=i(63733),c=i(90360),d=i(86875),u=i(7246),y=i(76940),m=i(23717),f=i(79053),v=i(88321),g=i(76931),_=i(72745),x=i(19247),w=i(65215),S=i(9624),b=i(8794),M=i(47266),A=i(93345),C=i(80895),T=i(96673);class E extends b.q{constructor(e){super(),this.element=e,this._handles=new v.A,this.isWrapAround=!1,this.perspectiveTransform=(0,_.vt)(),this.wrapAroundShift=0,this.clipGeometry=null,this._handles.add((0,a.z7)((()=>this.element),(()=>{const e=this.element;this.ready(),e&&this._handles.add((0,f.on)(e,"play",(()=>this.requestRender())))}),a.Vh))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,n.WD)(this.texture)}get textureSize(){if(!this.texture)return[1,1];const e=this.texture.descriptor;return[e.width,e.height]}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const t=this.element;if(null==t)return;const{context:i}=e,{videoWidth:r,videoHeight:s}=t;if(0!==r&&0!==s){if(this.texture)t.paused||this.texture.setData(t);else{const e=new T.R;e.wrapMode=A.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=r,e.height=s,this.texture=new C.g(i,e,t)}t.paused||(this.texture.generateMipmap(),this.requestRender()),super.beforeRender(e)}}_createTransforms(){return null}updateDrawCoords(e,t,i,r){const s=this.element,o=this._getFrameInfo();if(!s||!o)return;this._initializeData(e,o,i);const{controlPoints:n,horizon:a}=o,l=Math.sqrt(n.length),h=l,{x:p,y:c}=e,d=this._vertices,u=n[0],y=n[l-1],m=n[(h-1)*l],f=n[(h-1)*l+l-1],v=(0,S.project)(a?a[0].mapPoint:u.mapPoint,i),g=(0,S.project)(a?a[1].mapPoint:y.mapPoint,i),_=(0,S.project)(m.mapPoint,i),x=(0,S.project)(f.mapPoint,i);this.clipGeometry=a?new M.A({geometry:w.A.fromJSON({rings:[[[_.x,_.y],[x.x,x.y],[g.x,g.y],[v.x,v.y],[_.x,_.y]]],spatialReference:i})}):null;for(let w=0;w<n.length;w++){const e=n[w],{sourcePoint:t,mapPoint:r}=e;if(null==t||null==r)continue;const s=(0,S.project)(r,i);d[2*w+0]=s.x-p,d[2*w+1]=s.y-c}let b=t;if(r){const e=Math.min(v.x,g.x,_.x,x.x),t=Math.max(v.x,g.x,_.x,x.x),{worldWidth:i,xBounds:s}=r,[o,n]=s;e<o&&t>o?b=i:t>n&&e<n&&(b=-i)}this.wrapAroundShift=b,this.isWrapAround=0!==b}draw(e,t){this.isReady&&this._vertices&&this._indices&&this._texCoords?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:this.textureSize,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._texCoords,index:this._indices}):this.requestRender()}_initializeData(e,t,i){if(null!=this._vertices&&null!=this._indices)return;const{controlPoints:r}=t,s=Math.sqrt(r.length),o=s,n=new Float32Array(2*r.length),a=new Uint16Array(2*r.length);for(let p=0;p<r.length;p++){const t=r[p],{sourcePoint:s,mapPoint:o}=t;if(null==s||null==o)continue;const l=(0,S.project)(o,i);n[2*p+0]=l.x-e.x,n[2*p+1]=l.y-e.y,a[2*p+0]=s.x,a[2*p+1]=s.y}const l=new Uint16Array(o*s+(o-2)*(s+2));let h=0;for(let p=0;p<o;p++){for(let e=0;e<s;e++)l[h++]=p*s+e,l[h++]=(p+1)*s+e;p<o-2&&(l[h++]=(p+1)*s+(s-1),l[h++]=(p+1)*s)}this._vertices=n,this._texCoords=a,this._indices=l}_getFrameInfo(){if(!this.groundControlPoints)return null;const e=this._getFrameControlPoints(),t=this.frameHorizonPoints;let i=null;if(t){const e=t.startX,r=t.startY,s=t.endX,o=t.endY;i=[{sourcePoint:(0,g.tc)(e,r),mapPoint:new x.A(t.startLongitude,t.startLatitude)},{sourcePoint:(0,g.tc)(s,o),mapPoint:new x.A(t.endLongitude,t.endLatitude)}]}return{controlPoints:e,horizon:i}}_getFrameControlPoints(){const e=this.groundControlPoints,t=e?.length;if(!t)return[];const i=new Array(t),r=Math.max(...e.map((e=>{let{x:t}=e;return t}))),s=this.element.videoWidth/r;for(let o=0;o<t;o++){const{x:t,y:r,lat:n,lon:a}=e[o];i[o]={sourcePoint:(0,g.tc)(t*s,-r*s),mapPoint:new x.A(a,n)}}return i}}var O=i(56286),P=i(31394),G=i(69679),R=i(91196);const D=new s.A([255,127,0]);let L=class extends((0,O.e)(R.A)){constructor(){super(...arguments),this._graphicsLayer=new p.default,this._frameOutlineGraphic=new o.A({symbol:new d.A({outline:{type:"simple-line",color:D}})}),this._sensorTrailGraphic=new o.A({symbol:new u.A({color:D})}),this._lineOfSightGraphic=new o.A({symbol:new u.A({color:D})}),this._sensorLocationGraphic=new o.A({symbol:new y.A({color:D})}),this._frameCenterGraphic=new o.A({symbol:new y.A({color:D,style:"cross"})}),this._overlayContainer=null,this.layer=null,this.symbolColor=D,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,n.pR)(this._graphicsLayer)}initialize(){this.addHandles((0,a.wB)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),a.Vh)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new c.A({frame:this.layer.telemetryDisplay?.frame??!1,frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0})}attach(){this._overlayContainer=new m.A,this.container.addChild(this._overlayContainer),this._addOverlayMultipoint(),this.graphicsView=new G.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new P.A(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,a.wB)((()=>[this.layer.telemetryDisplay?.frame,this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),a.Vh),(0,a.wB)((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),a.Vh)])}detach(){this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this.graphicsView=(0,n.pR)(this.graphicsView)}supportsSpatialReference(e){return!0}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frame=this.layer.telemetryDisplay.frame,this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}async _addOverlayMultipoint(){if(!this.layer.videoElement)return;const e=new E(this.layer.videoElement);this.addAttachHandles([(0,a.wB)((()=>[this.layer.frameHorizonPoints,this.layer.groundControlPoints]),(()=>{const{visibleTelemetryElements:t}=this;t?.frame?(e.frameHorizonPoints=this.layer.frameHorizonPoints,e.groundControlPoints=this.layer.groundControlPoints,e.opacity=1):e.opacity=0}),a.Vh)]),this._overlayContainer.addChild(e),this.view.stage.requestRender()}};(0,r._)([(0,l.MZ)()],L.prototype,"graphicsView",void 0),(0,r._)([(0,l.MZ)()],L.prototype,"layer",void 0),(0,r._)([(0,l.MZ)()],L.prototype,"symbolColor",void 0),(0,r._)([(0,l.MZ)({type:c.A})],L.prototype,"visibleTelemetryElements",void 0),L=(0,r._)([(0,h.$)("esri.views.2d.layers.VideoLayerView2D")],L);const Z=L},59097:(e,t,i)=>{i.d(t,{Ao:()=>n,KQ:()=>a,Tg:()=>o});var r=i(18690),s=i(3454);function o(e){return!!e&&null!=s.j[e]}function n(e){return 1/(s.j[e]||1)}const a=function(){const e=Object.keys(s.j);return(0,r.TF)(e,"decimal-degrees"),e.sort(),e}()},63733:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var r=i(35143),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),n=i(5364),a=i(25515),l=i(65624),h=i(5682),p=i(64519),c=i(731);let d=class extends((0,l.dM)((0,h.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,r._)([(0,s.MZ)({type:c.A})],d.prototype,"elevationInfo",void 0),(0,r._)([(0,s.MZ)((0,n.C)(p.Y,"graphics"))],d.prototype,"graphics",void 0),(0,r._)([(0,s.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,r._)([(0,s.MZ)()],d.prototype,"screenSizePerspectiveEnabled",void 0),(0,r._)([(0,s.MZ)({readOnly:!0})],d.prototype,"type",void 0),(0,r._)([(0,s.MZ)({constructOnly:!0})],d.prototype,"internal",void 0),d=(0,r._)([(0,o.$)("esri.layers.GraphicsLayer")],d);const u=d},65624:(e,t,i)=>{i.d(t,{LF:()=>p,dM:()=>c,sU:()=>l});var r=i(35143),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),n=i(80979),a=i(44081);const l={type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:{layerContainerTypes:n.K}},"portal-item":{read:!0,write:{layerContainerTypes:n.K}}}}},h={read:{reader:a.LF},write:{allowNull:!0,writer:a.M9,layerContainerTypes:n.K}},p={json:{read:!1,write:!1,origins:{"web-map":h,"portal-item":h}}},c=e=>{let t=class extends e{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return(0,r._)([(0,s.MZ)(l)],t.prototype,"blendMode",void 0),(0,r._)([(0,s.MZ)(p)],t.prototype,"effect",void 0),t=(0,r._)([(0,o.$)("esri.layers.mixins.BlendLayer")],t),t}},80979:(e,t,i)=>{i.d(t,{K:()=>r});const r=["operational-layers","basemap","ground"]},90356:(e,t,i)=>{i.d(t,{i:()=>r});const r={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:!1}},90360:(e,t,i)=>{i.d(t,{A:()=>h});var r=i(35143),s=i(69098),o=i(42553),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));let l=class extends(s.A.ClonableMixin(o.A)){constructor(e){super(e),this.frame=null,this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frame",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frameCenter",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"frameOutline",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"lineOfSight",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"sensorLocation",void 0),(0,r._)([(0,n.MZ)({type:Boolean})],l.prototype,"sensorTrail",void 0),l=(0,r._)([(0,a.$)("esri.layers.support.TelemetryDisplay")],l);const h=l}}]);
//# sourceMappingURL=43018.8e2f3ebf.chunk.js.map
"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[82029],{6446:(e,t,i)=>{i.d(t,{Of:()=>r,UR:()=>n,Ws:()=>o,bv:()=>a});const r=Symbol("ImageElementInstance"),n=Symbol("VideoElementInstance");function s(e){return null!=e&&"object"==typeof e&&r in e}function o(e){return null!=e&&"object"==typeof e&&n in e}function a(e){return s(e)||o(e)}},21532:(e,t,i)=>{i.d(t,{ZH:()=>d});var r=i(54901),n=i(91417),s=i(28808),o=i(95776);function a(e,t){const{width:i,height:r,getFrame:s}=e,o=e.frameDurations.slice(),a=o.pop();return o.push((0,n.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:r}}class l{constructor(e,t,i,r){this._animation=e,this._repeatType=i,this._onFrameData=r,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let n=0;for(;t>n;)n+=this.timeToFrame,this.nextFrame();const s=this._animation.getFrame(this._currentFrame);this._onFrameData(s)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=0;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(-1===this._currentFrame)switch(this._repeatType){case s.fu.None:this._currentFrame-=this._direction;break;case s.fu.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case s.fu.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function h(e,t,i,r){let h,{repeatType:d}=t;if(null==d&&(d=s.fu.Loop),!0===t.reverseAnimation&&(e=function(e){const{width:t,height:i}=e,r=e.frameDurations.reverse();return{frameCount:e.frameCount,duration:e.duration,frameDurations:r,getFrame:t=>{const i=e.frameDurations.length-1-t;return e.getFrame(i)},width:t,height:i}}(e)),null!=t.duration&&(e=function(e,t){const{width:i,height:r,getFrame:s}=e,o=t/e.duration,a=e.frameDurations.map((e=>(0,n.l5)(e*o)));return{frameCount:e.frameCount,duration:e.duration,frameDurations:a,getFrame:s,width:i,height:r}}(e,(0,n.l5)(1e3*t.duration))),null!=t.repeatDelay){const i=1e3*t.repeatDelay;d===s.fu.Loop?e=a(e,(0,n.l5)(i)):d===s.fu.Oscillate&&(e=function(e,t){const{width:i,height:r,getFrame:s}=e,o=e.frameDurations.slice(),a=o.shift();return o.unshift((0,n.l5)(a+t)),{frameCount:e.frameCount,duration:e.duration+t,frameDurations:o,getFrame:s,width:i,height:r}}(a(e,(0,n.l5)(i/2)),(0,n.l5)(i/2)))}if(null!=t.startTimeOffset)h=(0,n.l5)(1e3*t.startTimeOffset);else if(null!=t.randomizeStartTime){const r=82749913,s=null!=t.randomizeStartSeed?t.randomizeStartSeed:r,a=(0,o.J)(i,s);h=(0,n.l5)(a*function(e){return(0,n.l5)(e.frameDurations.reduce(((e,t)=>e+t),0))}(e))}else h=(0,n.l5)(0);return new l(e,h,d,r)}function d(e,t,i,n){const s=null==t.playAnimation||t.playAnimation,o=h(e,t,i,n);let a,l=o.timeToFrame;return function e(){a=s?setTimeout((()=>{o.nextFrame(),l=o.timeToFrame,e()}),l):void 0}(),(0,r.hA)((()=>s&&clearTimeout(a)))}},23290:(e,t,i)=>{i.d(t,{_:()=>c});var r=i(35143),n=i(91967),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),a=i(65215),l=i(9624),h=i(2413),d=i(54222);let c=class extends n.A{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:(0,h.VY)(e.extent)}get coords(){const e=this.element.georeference?.coords;return(0,l.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return a.A.fromJSON((0,d.jZ)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,h.VY)(e):null}};(0,r._)([(0,s.MZ)()],c.prototype,"spatialReference",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"element",void 0),(0,r._)([(0,s.MZ)()],c.prototype,"bounds",null),(0,r._)([(0,s.MZ)()],c.prototype,"coords",null),(0,r._)([(0,s.MZ)()],c.prototype,"normalizedCoords",null),(0,r._)([(0,s.MZ)()],c.prototype,"normalizedBounds",null),c=(0,r._)([(0,o.$)("esri.layers.support.MediaElementView")],c)},23717:(e,t,i)=>{i.d(t,{A:()=>F});var r=i(53494),n=i(63919),s=i(85827),o=i(59422),a=i(83755),l=i(1438),h=i(80963),d=i(28632),c=i(61551),u=i(36201),p=i(30726),m=i(64780),f=i(90356),_=i(70479),y=i(32743),v=i(35143),w=i(6951),g=i(60984);class x extends w.ZA{}(0,v._)([(0,w.C5)(0,g.ZY)],x.prototype,"pos",void 0),(0,v._)([(0,w.C5)(1,g.ZY)],x.prototype,"uv",void 0);class A extends w.HS{}class M extends w.k2{}(0,v._)([(0,w.Pi)(g.U)],M.prototype,"dvs",void 0);class S extends w.k2{}(0,v._)([(0,w.Pi)(g.ZY)],S.prototype,"perspective",void 0),(0,v._)([(0,w.Pi)(g.ZY)],S.prototype,"texSize",void 0),(0,v._)([(0,w.Pi)(g.nt)],S.prototype,"wrapAroundShift",void 0),(0,v._)([(0,w.Pi)(g.nt)],S.prototype,"opacity",void 0),(0,v._)([(0,w.Pi)(g.z7)],S.prototype,"texture",void 0);class b extends w.A{constructor(){super(...arguments),this.type="OverlayShader"}vertex(e){const t=e.uv.divide(this.config.texSize),i=new g.nt(1).add((0,g.Om)(t,this.config.perspective)),r=new g.eB(e.pos.add(new g.ZY(this.config.wrapAroundShift,0)),1),n=this.transform.dvs.multiply(r);return{uv:t,glPosition:new g.Zb(n.xy.multiply(i),0,i)}}fragment(e){const t=(0,g.US)(this.config.texture,e.uv).multiply(this.config.opacity),i=new w.mm;return i.fragColor=t,i}}(0,v._)([(0,w.Pi)(M)],b.prototype,"transform",void 0),(0,v._)([(0,w.Pi)(S)],b.prototype,"config",void 0),(0,v._)([(0,v.a)(0,(0,w.hF)(x))],b.prototype,"vertex",null),(0,v._)([(0,v.a)(0,(0,w.hF)(A))],b.prototype,"fragment",null);var R=i(93345),T=i(21812);class E extends _.j{constructor(){super(...arguments),this.type=y.N.Overlay,this._mesh=null,this.shaders={overlay:new b}}render(e,t){const{context:i,painter:r}=e,n=this._getMesh(e,t);r.setPipelineState(f.i);const{isWrapAround:s,wrapAroundShift:o}=t.config,a={...t.config,wrapAroundShift:0},l={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:a},defines:null,optionalAttributes:null,useComputeBuffer:!1};r.setPipelineState({...f.i,stencil:{write:!1,test:{compare:R.MT.EQUAL,op:{fail:R.eA.KEEP,zFail:R.eA.KEEP,zPass:R.eA.REPLACE},ref:0,mask:255}}}),r.submitDrawMeshUntyped(i,l,n),s&&(a.wrapAroundShift=o,r.submitDrawMeshUntyped(i,l,n))}shutdown(){(0,p.pR)(this._mesh)}_getMesh(e,t){const{context:i}=e;if(this._mesh){const e=this._mesh.vertexBuffers.get("positions");if(!e)throw new Error("Buffer not found");e.buffer.setData(t.position)}else{const e=null!=t.index?t.index.length:t.position.length/2;this._mesh=new m.e(i,{vertex:{positions:{data:t.position,attributes:[new T._("pos",2,R.pe.FLOAT,0,8)]},uvs:{data:t.tex,attributes:[new T._("uv",2,R.pe.UNSIGNED_SHORT,0,4)]}},index:null!=t.index?{index:{data:t.index}}:void 0,groups:[{index:null!=t.index?"index":void 0,primitive:R.WR.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:e}]})}return this._mesh}}class F extends u.A{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=(0,s.vt)(),this._overlayTechnique=new E}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==c.S5.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const i of this.children)i.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:i,size:s,pixelRatio:h,resolution:d,rotation:c,viewpoint:u,displayMat3:p}=t;if(this._viewStateId===i)return;const m=(0,r.DF)(c),f=h*s[0],_=h*s[1];this._localOrigin=u.targetGeometry.clone();const{x:y,y:v}=this._localOrigin,w=(0,l.mT)(y,t.spatialReference);this._localOrigin.x=w,this._localOrigin.y=v;const g=d*f,x=d*_,A=(0,n.D_)(this._dvsMat3);(0,n.lw)(A,A,p),(0,n.Tl)(A,A,(0,o.fA)(f/2,_/2)),(0,n.hs)(A,A,(0,a.fA)(f/g,-_/x,1)),(0,n.e$)(A,A,-m),this._viewStateId=i}_updateOverlays(e,t){const{state:i}=e,{rotation:n,spatialReference:s,worldScreenWidth:o,size:a,viewpoint:l}=i,c=this._localOrigin;let u,p=0;const m=(0,h.Vp)(s);if(m&&s.isWrappable){const e=a[0],t=a[1],h=(0,r.DF)(n),c=Math.abs(Math.cos(h)),f=Math.abs(Math.sin(h)),_=Math.round(e*c+t*f),[y,v]=m.valid,w=(0,d.FT)(s),{x:g,y:x}=l.targetGeometry,A=[g,x],M=[0,0];i.toScreen(M,A);const S=[0,0];let b;b=_>o?.5*o:.5*_;const R=Math.floor((g+.5*w)/w),T=y+R*w,E=v+R*w,F=[M[0]+b,0];i.toMap(S,F),S[0]>E&&(p=w),F[0]=M[0]-b,i.toMap(S,F),S[0]<T&&(p=-w),u={worldWidth:w,xBounds:[y,v]}}for(const r of t)r.updateDrawCoords(c,p,s,u)}}},33723:(e,t,i)=>{i.d(t,{O:()=>u,W:()=>c});var r=i(63919),n=i(44680),s=i(19555),o=i(20664);const a=(0,i(9392).vt)(),l=(0,n.vt)(),h=(0,n.vt)(),d=(0,n.vt)();function c(e,t,i){return(0,o.i)(a,t[0],t[1],1),(0,o.q)(a,a,(0,r.mg)(l,i)),0===a[2]?(0,s.hZ)(e,a[0],a[1]):(0,s.hZ)(e,a[0]/a[2],a[1]/a[2])}function u(e,t,i){return p(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(d,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,r.lw)(e,(0,r.KC)(h,h),d),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function p(e,t,i,n,s,h,d,c,u){(0,r.hZ)(e,t,n,h,i,s,d,1,1,1),(0,o.i)(a,c,u,1),(0,r.KC)(l,e);const[p,m,f]=(0,o.q)(a,a,(0,r.mg)(l,l));return(0,r.hZ)(l,p,0,0,0,m,0,0,0,f),(0,r.lw)(e,l,e)}},82029:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var r=i(35143),n=(i(39356),i(94643)),s=i(50076),o=(i(81806),i(76460)),a=i(87663),l=i(50346),h=i(68134),d=i(46053),c=(i(47249),i(85842)),u=i(76797),p=i(2413),m=i(11352),f=i(65658),_=i(23290),y=(i(5766),i(86875),i(52394),i(15434),i(59784),i(86560),i(13442),i(28808)),v=(i(14522),i(89189),i(66388),i(19247),i(65215),i(23701),i(5095),i(62484),i(61425),i(15941),i(3789),i(5568),i(80963),i(62032),i(89425),i(15709),i(88764),i(9435),i(50724),i(94046),i(94168),i(73988),i(27847),i(33049),i(4754),i(31385),i(278),i(71687),i(6134),i(9190),i(5104),i(41704),i(16083),i(27150),i(19313),i(59422),i(71447),i(84202),i(48988),i(17400),i(54099),i(81447),i(61551),i(28608),i(93345)),w=(i(61247),i(61678),i(89241),i(84662),i(35048),i(63584),i(99588),i(41838),i(83531),i(80895)),g=(i(76418),i(8254),i(47709),i(3825),i(90534),i(29234),i(56789),i(32743),i(98590),i(5096),i(72729),i(12331),i(16946),i(89179),i(28972),i(32151),i(69539),i(90113),i(81320),i(13308),i(33346),i(13720),i(88075),i(38550),i(9410),i(57156),i(98112),i(42294),i(81615),i(29300),i(64346),i(26455),i(4480),i(46405),i(13312),i(41406),i(57162),i(86955),i(33721),i(68009),i(69679),i(38983),i(83755),i(73548),i(14556),i(55171),i(13692),i(56924),i(98773),i(19451),i(57105),i(31633),i(34111),i(7724),i(482),i(86599),i(63885),i(40181),i(93453),i(15302)),x=i(96345),A=i(79053),M=i(88321),S=i(30726),b=i(33723),R=i(44680),T=i(19555),E=i(72745),F=i(6446),C=i(8794),V=i(21532),O=i(96673);const q=[1,1],D=(0,R.vt)(),P={none:y.fu.None,loop:y.fu.Loop,oscillate:y.fu.Oscillate};class Z extends C.q{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.wrapAroundShift=0,this.perspectiveTransform=(0,E.vt)(),this._handles=new M.A,this._vertices=new Float32Array(8),this._indices=new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]),this._handles.add([(0,h.wB)((()=>this.elementView.element.opacity),(e=>this.opacity=e),h.Vh),(0,h.wB)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),h.Vh),(0,h.wB)((()=>["animationOptions"in this.elementView.element&&this.elementView.element.animationOptions]),(()=>{this._handles.remove("play"),this.texture=(0,S.WD)(this.texture),this.requestRender()}),h.Vh),(0,h.z7)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),(0,F.Ws)(e)&&null!=e.content&&(this._handles.add([(0,A.on)(e.content,"play",(()=>this.requestRender())),(0,A.on)(e.content,"loadeddata",(()=>this.requestRender())),(0,A.on)(e.content,"loaded",(()=>this.requestRender()))]),"requestVideoFrameCallback"in e.content?e.content.requestVideoFrameCallback((()=>this.requestRender())):this._handles.add([(0,A.on)(e.content,"seeked",(()=>this.requestRender()))]),this.requestRender())}),h.Vh)]),e.element.load().catch((t=>{o.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s.A("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}getMesh(e){throw new Error("Method not implemented.")}destroy(){this._handles.destroy(),this.texture=(0,S.WD)(this.texture)}get textureSize(){return q}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,i=this.elementView.element.content;if(null!=i){const e=i instanceof HTMLImageElement,r=i instanceof HTMLVideoElement,n=e?i.naturalWidth:r?i.videoWidth:i.width,s=e?i.naturalHeight:r?i.videoHeight:i.height;if(this._updatePerspectiveTransform(n,s),this.texture)r&&(this.texture.setData(i),this.texture.generateMipmap(),"requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender());else{const e=new O.R;if(e.wrapMode=v.pF.CLAMP_TO_EDGE,e.preMultiplyAlpha=!0,e.width=n,e.height=s,"getFrame"in i){const r=i=>{this.texture?this.texture.setData(i):this.texture=new w.g(t,e,i),this.requestRender()};"animationOptions"in this.elementView.element&&this._handles.add((0,V.ZH)(i,function(e){return e?{type:"CIMAnimatedSymbolProperties",...e,playAnimation:e.playing,repeatType:e.repeatType?P[e.repeatType]:void 0}:{type:"CIMAnimatedSymbolProperties"}}(this.elementView.element.animationOptions),null,r),"play")}else this.texture=new w.g(t,e,i);this.texture.generateMipmap(),r&&("requestVideoFrameCallback"in i?i.requestVideoFrameCallback((()=>this.requestRender())):i.paused||this.requestRender())}}super.beforeRender(e)}_createTransforms(){return null}draw(e,t){this.isReady&&null!=this.texture?t.render(e,{transform:{dvs:this.dvsMat3},config:{perspective:this.perspectiveTransform,texSize:q,wrapAroundShift:this.wrapAroundShift,isWrapAround:this.isWrapAround,opacity:this.opacity,texture:{texture:this.texture,unit:0}},position:this._vertices,tex:this._indices}):this.requestRender()}updateDrawCoords(e,t,i,r){const{coords:n,bounds:s}=this.elementView;if(null==n||null==s)return;const[o,a,l,h]=n.rings[0],d=this._vertices,{x:c,y:u}=e;d.set([a[0]-c,a[1]-u,o[0]-c,o[1]-u,l[0]-c,l[1]-u,h[0]-c,h[1]-u]);let p=t;if(r){const[e,,t]=s,{worldWidth:i,xBounds:n}=r,[o,a]=n;e<o&&t>o?p=i:t>a&&e<a&&(p=-i)}this.wrapAroundShift=p,this.isWrapAround=0!==p}_updatePerspectiveTransform(e,t){const i=this._vertices;(0,b.O)(D,[0,0,e,0,0,t,e,t],[i[0],i[1],i[4],i[5],i[2],i[3],i[6],i[7]]),(0,T.hZ)(this.perspectiveTransform,D[6]/D[8]*e,D[7]/D[8]*t)}}var z=i(23717),L=i(56286),k=i(91196),W=i(91967);let U=class extends W.A{constructor(e){super(e),this.editSourcePoints=!1}};(0,r._)([(0,d.MZ)()],U.prototype,"editSourcePoints",void 0),U=(0,r._)([(0,c.$)("esri.views.3d.layers.support.MediaLayerInteractionOptions.ReshapeOptions")],U);let I=class extends W.A{constructor(e){super(e),this.tool="transform",this.reshapeOptions=new U}};(0,r._)([(0,d.MZ)()],I.prototype,"tool",void 0),(0,r._)([(0,d.MZ)({type:U})],I.prototype,"reshapeOptions",void 0),I=(0,r._)([(0,c.$)("esri.views.3d.layers.support.MediaLayerInteractionOptions")],I);const G=e=>{let t=class extends e{constructor(){super(...arguments),this.layer=null,this.interactive=!1,this.interactionOptions=new I,this.selectedElement=null}highlight(e,t){throw new Error("missing implementation")}};return(0,r._)([(0,d.MZ)()],t.prototype,"layer",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"interactive",void 0),(0,r._)([(0,d.MZ)({type:I})],t.prototype,"interactionOptions",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"selectedElement",void 0),t=(0,r._)([(0,c.$)("esri.views.layers.MediaLayerView")],t),t};var B=i(59752);let H=class extends((0,L.e)(G(k.A))){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this._interaction=null,this.layer=null,this.elements=new n.A}initialize(){this.addHandles([(0,h.wB)((()=>[this.interactive,this.suspended]),(async()=>{if(this.interactive&&!this._interaction){const{MediaLayerInteraction:e}=await i.e(88740).then(i.bind(i,88740));this._interaction=new e({view:this.view,layer:this.layer}),this.selectedElement!==this._interaction.selectedElement&&(this._interaction.selectedElement=this.selectedElement),this.interactionOptions!==this._interaction.options&&(this._interaction.options=this.interactionOptions)}this._interaction&&(this._interaction.enabled=!this.suspended&&this.interactive)}),h.pc),(0,h.wB)((()=>this.interactionOptions),(e=>{this._interaction&&(this._interaction.options=e)}),h.pc),(0,h.wB)((()=>this.selectedElement),(e=>{this._interaction&&(this._interaction.selectedElement=e)}),h.pc)])}attach(){this.addAttachHandles([(0,h.on)((()=>this.layer.effectiveSource),"refresh",(()=>{this._tileStrategy.refresh((e=>this._updateTile(e))),this.requestUpdate()})),(0,h.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new z.A,this.container.addChild(this._overlayContainer),this._fetchQueue=new g.A({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t),scheduler:this.scheduler,priority:B.W6.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x.A({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const i=[],r=e.normalize(),n=[r.x,r.y];for(const{elementView:{normalizedCoords:s,element:o}}of this._elementReferences.values())null!=s&&(0,m.t1)(s.rings,n)&&i.push({type:"media",element:o,layer:this.layer,mapPoint:e,sourcePoint:o.toSource(e)});return i.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updateTile(e)))}_acquireTile(e){const t=new $(e.clone());return this._updateTile(t),t}_updateTile(e){this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[i,r]=e.setElements(t);this._referenceElements(e,i),this._dereferenceElements(e,r),this.requestUpdate()}),(e=>{(0,l.zf)(e)||o.A.getLogger(this).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const i=this.layer.effectiveSource;if(null==i)return[];this.view.featuresTilingScheme.getTileBounds(N,e,!0);const r=new u.A({xmin:N[0],ymin:N[1],xmax:N[2],ymax:N[3],spatialReference:this.view.spatialReference});return i.queryElements(r,t)}_referenceElements(e,t){if(null!=this.layer.source)for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,a.tE)(this._elementReferences,t.uid,(()=>{const e=new _._({element:t,spatialReference:this.view.spatialReference}),i=new Z(e);return this._overlayContainer.addChild(i),this.elements.add(t),this._updatingHandles.addPromise(t.load().catch((e=>{o.A.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new s.A("element-load-error","Element cannot be displayed",{element:t,error:e}))}))),{debugGraphic:null,elementView:e,overlay:i,tiles:new Set}})).tiles.add(e)}_dereferenceElements(e,t){for(const i of t)this._dereferenceElement(e,i)}_dereferenceElement(e,t){const i=this._elementReferences.get(t.uid);i.tiles.delete(e),i.tiles.size||(this._overlayContainer.removeChild(i.overlay),i.overlay.destroy(),i.elementView.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(i.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const i=t.elementView.normalizedCoords;if(null==i)return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.elementView.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const r=[],n=[];for(const e of this._tileStrategy.tiles){const s=Y(this.view.featuresTilingScheme,e,i);t.tiles.has(e)?s||n.push(e):s&&r.push(e)}for(const t of r)this._referenceElement(t,e);for(const t of n)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.elementView.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const i=new _._({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if(null!=i)for(const r of this._tileStrategy.tiles)Y(this.view.featuresTilingScheme,r,i)&&this._referenceElement(r,e)}};(0,r._)([(0,d.MZ)()],H.prototype,"layer",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],H.prototype,"elements",void 0),H=(0,r._)([(0,c.$)("esri.views.2d.layers.MediaLayerView2D")],H);const N=(0,p.vt)(),Q={xmin:0,ymin:0,xmax:0,ymax:0};function Y(e,t,i){return e.getTileBounds(N,t.key,!0),Q.xmin=N[0],Q.ymin=N[1],Q.xmax=N[2],Q.ymax=N[3],(0,f.fA)(Q,i)}class ${constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],i=new Set(this.elements);this.elements=e;for(const r of e)i.has(r)?i.delete(r):t.push(r);return this.isReady=!0,[t,Array.from(i)]}destroy(){}}const j=H},90356:(e,t,i)=>{i.d(t,{i:()=>r});const r={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:!1}},95776:(e,t,i)=>{i.d(t,{A:()=>s,J:()=>n});var r=i(88685);function n(e,t){let i;if("string"==typeof e)i=(0,r.Wm)(e+`-seed(${t})`);else{let r=12;i=e^t;do{i=107*(i>>8^i)+r|0}while(0!=--r)}return(1+i/(1<<31))/2}function s(e){return Math.floor(n(e,o)*a)}const o=53290320,a=10}}]);
//# sourceMappingURL=82029.6121307b.chunk.js.map
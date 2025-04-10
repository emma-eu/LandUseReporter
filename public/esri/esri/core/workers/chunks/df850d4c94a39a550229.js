"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3816,8256],{4902:(e,t,i)=>{i.d(t,{A:()=>u});var r=i(90237),s=i(40608);let n=0;const o=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+n++})}};return t=(0,r._)([(0,s.$)("esri.core.Identifiable")],t),t},a=e=>{let t=class extends e{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:n++})}};return t=(0,r._)([(0,s.$)("esri.core.Identifiable.NumericIdentifiable")],t),t};let l=class extends(o(class{})){};var h;l=(0,r._)([(0,s.$)("esri.core.Identifiable")],l),(h=l||(l={})).IdentifiableMixin=o,h.NumericIdentifiableMixin=a;const u=l},66344:(e,t,i)=>{i.d(t,{q:()=>l});var r,s,n=i(3694);(s=r||(r={}))[s.ALL=0]="ALL",s[s.SOME=1]="SOME";class o{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new n.A,this._users=new n.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear()}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,t){const i=this._db.get(e.id+t);return i?.size??0}put(e,t,i,s,n){t=e.id+t;const o=this._db.get(t);if(o&&(this._size-=o.size,e.size-=o.size,this._db.delete(t),o.entry!==i&&this._notifyRemove(t,o.entry,o.size,r.ALL)),s>this._maxSize)return void this._notifyRemove(t,i,s,r.ALL);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return console.warn(`Refusing to cache entry with size ${s} for key ${t}`),void this._notifyRemove(t,i,0,r.ALL);const l=1+Math.max(n,-4)- -3;this._db.set(t,new a(i,s,l)),this._size+=s,e.size+=s,this._checkSize()}updateSize(e,t,i,s){t=e.id+t;const n=this._db.get(t);if(n&&n.entry===i){for(this._size-=n.size,e.size-=n.size;s>this._maxSize;){const e=this._notifyRemove(t,i,s,r.SOME);if(!(null!=e&&e>0))return void this._db.delete(t);s=e}n.size=s,this._size+=s,e.size+=s,this._checkSize()}}pop(e,t){t=e.id+t;const i=this._db.get(t);if(i)return this._size-=i.size,e.size-=i.size,this._db.delete(t),++this._hit,i.entry;++this._miss}get(e,t){t=e.id+t;const i=this._db.get(t);if(void 0!==i)return this._db.delete(t),i.lives=i.lifetime,this._db.set(t,i),++this._hit,i.entry;++this._miss}peek(e,t){const i=this._db.get(e.id+t);return i?++this._hit:++this._miss,i?.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,r)=>{const s=e.lifetime;i[s]=(i[s]||0)+e.size,this._users.forAll((i=>{const{id:s,name:n}=i;if(r.startsWith(s)){const i=t[n]||0;t[n]=i+e.size}}))}));const r={};this._users.forAll((e=>{const i=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){const s=t[i]||0;t[i]=s,r[i]=Math.round(100*e.hitRate)+"%"}else r[i]="0%"}));const s=Object.keys(t);s.sort(((e,i)=>t[i]-t[e])),s.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+r[i]));for(let t=i.length-1;t>=0;--t){const r=i[t];r&&(e["Priority "+(t+-3-1)]=Math.round(r/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){const t=e.id;this._db.forEach(((e,i)=>{i.startsWith(t)&&(this._size-=e.size,this._db.delete(i),this._notifyRemove(i,e.entry,e.size,r.ALL))})),e.size=0}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,e.size,r.ALL))),this._users.forAll((e=>e.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i,r){let s;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,r,i);return"number"==typeof e&&(s=e),!0}return!1})),s}_checkSize(){this._users.forAll((e=>this._checkSizeLimits(e))),this._checkSizeLimits()}_checkSizeLimits(e){const t=e??this;if(t.maxSize<0||t.size<=t.maxSize)return;const i=e?.id;let r=!0;for(;r;){r=!1;for(const[s,n]of this._db)if(0===n.lifetime&&(!i||s.startsWith(i))){if(this._purgeItem(s,n,e),t.size<=.9*t.maxSize)return;r||=this._db.has(s)}}for(const[r,s]of this._db)if((!i||r.startsWith(i))&&(this._purgeItem(r,s,e),t.size<=.9*t.maxSize))return}_purgeItem(e,t,i=this._users.find((t=>e.startsWith(t.id)))){if(this._db.delete(e),t.lives<=1){this._size-=t.size,i&&(i.size-=t.size);const s=this._notifyRemove(e,t.entry,t.size,r.SOME);null!=s&&s>0&&(this._size+=s,i&&(i.size+=s),t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}class a{constructor(e,t,i){this.entry=e,this.size=t,this.lifetime=i,this.lives=i}}class l{constructor(e,t){this._storage=new o,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),t&&this._storage.registerRemoveFunc("",t)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(e,t,i=1){this._storage.put(this,e,t,i,1)}pop(e){return this._storage.pop(this,e)}get(e){return this._storage.get(this,e)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(e){this._storage.maxSize=e}resetHitRate(){}}},92071:(e,t,i)=>{i.d(t,{P:()=>v,L:()=>w});var r=i(90237),s=i(69622),n=i(76953),o=i(4718),a=i(35666);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new l,i=this._originStores[a.Gr.DEFAULTS];i&&i.forEach(((e,i)=>{t.set(i,(0,o.o8)(e),a.Gr.DEFAULTS)}));for(let i=a.Gr.SERVICE;i<a.AU;i++){const r=this._originStores[i];r&&r.forEach(((r,s)=>{e&&e.has(s)||t.set(s,(0,o.o8)(r),i)}))}return t}get(e,t){const i=void 0===t?this._values:this._originStores[t];return i?i.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,i=a.Gr.USER){let r=this._originStores[i];if(r||(r=new Map,this._originStores[i]=r),r.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=i){const r=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,i),r!==t}return!1}delete(e,t=a.Gr.USER){const i=this._originStores[t];if(!i)return;const r=i.get(e);if(i.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let i=t-1;i>=0;i--){const t=this._originStores[i];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,i);break}}}return r}has(e,t){const i=void 0===t?this._values:this._originStores[t];return!!i&&i.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const i=this._originStores[t],r=i?.get(e),s=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),s!==r}originOf(e){return this._propertyOriginMap.get(e)||a.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var h=i(45917),u=i(88620),d=i(40608);const c=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,u.oY)(this),i=t.store,r=new l;t.store=r,(0,n.k)(t,i,r)}read(e,t){(0,h.L)(this,e,t)}getAtOrigin(e,t){const i=p(this),r=(0,a.aB)(t);if("string"==typeof e)return i.get(e,r);const s={};return e.forEach((e=>{s[e]=i.get(e,r)})),s}originOf(e){return(0,a.OL)(this.originIdOf(e))}originIdOf(e){return p(this).originOf(e)}revert(e,t){const i=p(this),r=(0,a.aB)(t),s=(0,u.oY)(this);let n;n="string"==typeof e?"*"===e?i.keys(r):[e]:e,n.forEach((e=>{s.invalidate(e),i.revert(e,r),s.commit(e)}))}};return t=(0,r._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function p(e){return(0,u.oY)(e).store}let y=class extends(c(s.A)){};y=(0,r._)([(0,d.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],y);var g=i(16649),_=i(49422);const m=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return f(this).delete(e,(0,a.aB)(t))}write(e,t){return(0,_.M)(this,e=e||{},t),e}setAtOrigin(e,t,i){(0,u.oY)(this).setAtOrigin(e,t,(0,a.aB)(i))}removeOrigin(e){const t=f(this),i=(0,a.aB)(e),r=t.keys(i);for(const e of r)t.originOf(e)===i&&t.set(e,t.get(e,i),a.Gr.USER)}updateOrigin(e,t){const i=f(this),r=(0,a.aB)(t),s=(0,g.Jt)(this,e);for(let t=r+1;t<a.AU;++t)i.delete(e,t);i.set(e,s,r)}toJSON(e){return this.write({},e)}};return t=(0,r._)([(0,d.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function f(e){return(0,u.oY)(e).store}const v=e=>{let t=class extends(m(c(e))){constructor(...e){super(...e)}};return t=(0,r._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],t),t};let w=class extends(v(s.A)){};w=(0,r._)([(0,d.$)("esri.core.MultiOriginJSONSupport")],w)},36708:(e,t,i)=>{i.d(t,{C_:()=>c,OH:()=>g,Vh:()=>_,on:()=>d,pc:()=>m,wB:()=>l,z7:()=>h}),i(60999),i(5503);var r=i(37955),s=i(36563),n=i(97768),o=i(74887),a=i(14012);function l(e,t,i={}){return u(e,t,i,p)}function h(e,t,i={}){return u(e,t,i,y)}function u(e,t,i={},r){let s=null;const o=i.once?(e,i)=>{r(e)&&((0,n.xt)(s),t(e,i))}:(e,i)=>{r(e)&&t(e,i)};if(s=(0,a.Cn)(e,o,i.sync,i.equals),i.initial){const t=e();o(t,t)}return s}function d(e,t,i,o={}){let a=null,h=null,u=null;function d(){a&&h&&(h.remove(),o.onListenerRemove?.(a),a=null,h=null)}function c(e){o.once&&o.once&&(0,n.xt)(u),i(e)}const p=l(e,((e,i)=>{d(),(0,r.wb)(e)&&(a=e,h=(0,r.on)(e,t,c),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return u=(0,s.hA)((()=>{p.remove(),d()})),u}function c(e,t){return function(e,t,i){if((0,o.G4)(i))return Promise.reject((0,o.NK)());const r=e();if(t?.(r))return Promise.resolve(r);let a=null;function l(){a=(0,n.xt)(a)}return new Promise(((r,n)=>{a=(0,s.vE)([(0,o.u7)(i,(()=>{l(),n((0,o.NK)())})),u(e,(e=>{l(),r(e)}),{sync:!1,once:!0},t??p)])}))}(e,y,t)}function p(e){return!0}function y(e){return!!e}i(80559);const g={sync:!0},_={initial:!0},m={sync:!0,initial:!0}},35982:(e,t,i)=>{i.d(t,{B:()=>l});var r=i(4576),s=i(36563),n=i(53966),o=i(74887),a=i(29953);class l{constructor(e,t,i,r,s={}){this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,a.ho)(e,{...s,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>n.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,s.hA)((()=>{i.removed=!0,(0,r.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const r=this._transferLists[e],s=r?r(t):[];return this._thread.invoke(e,t,{transferList:s,signal:i})}return this._promise?this._promise.then((()=>((0,o.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},54239:(e,t,i)=>{i.d(t,{A:()=>v});var r,s=i(90237),n=i(4576),o=i(66552),a=i(25482),l=i(83047),h=i(67076),u=i(10107),d=(i(44208),i(53966),i(36005)),c=i(40608),p=i(43937);const y=(0,o.O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),g=y.jsonValues.slice();(0,n.Xy)(g,"orthometric");const _=(0,o.O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=r=class extends a.A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,i){return y.write(e,t,i)}readHeightModel(e,t,i){return y.read(e)||(i?.messages&&i.messages.push(function(e,t){return new h.A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(e,{context:i})),null)}readHeightUnit(e,t,i){return _.read(e)||(i?.messages&&i.messages.push(f(e,{context:i})),null)}readHeightUnitService(e,t,i){return(0,l.LA)(e)||_.read(e)||(i?.messages&&i.messages.push(f(e,{context:i})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new r({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const i=(0,l.k1)(t);return new r({heightModel:e.heightModel,heightUnit:i??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new r;return t.read(e,{origin:"web-scene"}),t}};function f(e,t){return new h.A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}(0,s._)([(0,u.MZ)({type:y.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,s._)([(0,p.K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,s._)([(0,d.w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,s._)([(0,u.MZ)({type:_.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:_.jsonValues,write:{writer:_.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,s._)([(0,d.w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,s._)([(0,d.w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,s._)([(0,u.MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,s._)([(0,d.w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=r=(0,s._)([(0,c.$)("esri.geometry.HeightModelInfo")],m);const v=m},68611:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var r=i(90237),s=i(78888),n=i(49186),o=i(97768),a=i(92071),l=i(74887),h=i(84952),u=i(10107),d=(i(44208),i(53966),i(87811),i(36005)),c=i(40608),p=i(54239),y=i(4146),g=i(89186),_=i(18768),m=i(16131),f=i(8303),v=i(10873);class w{constructor(e,t,i,r){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=r)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}get cachedMemory(){return this.values.byteLength+256}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,r=-1/0,s=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(i=n<i?n:i,r=n>r?n:r,s=!1);s?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=r>-3e38?r:0)}}var b=i(35982);class S extends b.B{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(M.forEach(((e,t)=>{e===this&&M.delete(t)})),this.destroy())}}const M=new Map;let A=class extends((0,g.f)((0,_.b)((0,m.q)((0,f.A)((0,a.P)(y.A)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e=null){let t=M.get(e);return t||(null!=e?(t=new S((t=>e.immediate.schedule(t))),M.set(e,t)):(t=new S,M.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,o.Gz)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new n.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(l.QP).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,r){const n=r?.signal,o={responseType:"array-buffer",signal:n},a={noDataValue:r?.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,r))).then((()=>(0,s.A)(this.getTileUrl(e,t,i),o))).then((e=>this._lercDecoder.decode(e.data,a,n))).then((e=>new w(e)))}getTileUrl(e,t,i){const r=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,s=(0,h.x0)({...this.parsedUrl.query,blankTile:!r&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${s?"?"+s:""}`}async queryElevation(e,t){const{ElevationQuery:r}=await i.e(3492).then(i.bind(i,63492));return(0,l.Te)(t),(new r).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:r}=await i.e(3492).then(i.bind(i,63492));return(0,l.Te)(t),(new r).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,r):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await(0,s.A)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[z]}};(0,r._)([(0,u.MZ)({readOnly:!0})],A.prototype,"capabilities",void 0),(0,r._)([(0,d.w)("service","capabilities",["capabilities"])],A.prototype,"readCapabilities",null),(0,r._)([(0,u.MZ)({json:{read:{source:"copyrightText"}}})],A.prototype,"copyright",void 0),(0,r._)([(0,u.MZ)({readOnly:!0,type:p.A})],A.prototype,"heightModelInfo",void 0),(0,r._)([(0,u.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),(0,r._)([(0,u.MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,r._)([(0,u.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],A.prototype,"minScale",void 0),(0,r._)([(0,u.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],A.prototype,"maxScale",void 0),(0,r._)([(0,u.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),(0,r._)([(0,u.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],A.prototype,"operationalLayerType",void 0),(0,r._)([(0,u.MZ)()],A.prototype,"sourceJSON",void 0),(0,r._)([(0,u.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],A.prototype,"type",void 0),(0,r._)([(0,u.MZ)(v.OZ)],A.prototype,"url",void 0),(0,r._)([(0,u.MZ)()],A.prototype,"version",void 0),(0,r._)([(0,d.w)("version",["currentVersion"])],A.prototype,"readVersion",null),A=(0,r._)([(0,c.$)("esri.layers.ElevationLayer")],A);const z=Symbol("default-fetch-tile");A.prototype.fetchTile[z]=!0;const E=A},4146:(e,t,i)=>{i.d(t,{A:()=>w});var r=i(90237),s=i(78888),n=i(49186),o=i(65529),a=i(4902),l=i(92474),h=i(53966),u=i(74887),d=i(84952),c=i(10107),p=(i(44208),i(87811),i(40608)),y=i(5443),g=i(16930),_=i(92602),m=i(79677);let f=0,v=class extends(o.A.EventedMixin(a.A.IdentifiableMixin(l.A))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y.A(-180,-90,180,90,g.A.WGS84),this.id=Date.now().toString(16)+"-layer-"+f++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=g.A.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(e){const t="string"==typeof e?{url:e}:e;return(await i.e(7982).then(i.bind(i,27982))).fromUrl(t)}static fromPortalItem(e){return async function(e){const t="portalItem"in e?e:{portalItem:e},{fromItem:r}=await i.e(5613).then(i.bind(i,45613));try{return await r(t)}catch(e){const i=t?.portalItem,r=i?.id||"unset",s=i?.portal?.url||_.A.portalUrl;throw h.A.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+s+"', id: '"+r+"')",e),e}}(e)}initialize(){this.when().catch((e=>{(0,u.zf)(e)||h.A.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:e})}))}destroy(){const e=this.parent;if(e){const t=this;"layers"in e&&e.layers.includes(t)?e.layers.remove(t):"tables"in e&&e.tables.includes(t)?e.tables.remove(t):"baseLayers"in e&&e.baseLayers.includes(t)?e.baseLayers.remove(t):"referenceLayers"in e&&e.referenceLayers.includes(t)&&e.referenceLayers.remove(t),this._set("parent",null)}}get effectiveVisible(){let e=this.visible;const t=this.parent;return e&&t&&"effectiveVisible"in t&&(e&&=t.effectiveVisible),e}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){return(0,d.An)(this.url)}createLayerView(e,t){return Promise.reject(new n.A("layer:create-layer-view","Layer does not support creating a layer view"))}async fetchAttributionData(){const e=this.attributionDataUrl;if(this.hasAttributionData&&e)return(await(0,s.A)(e,{query:{f:"json"},responseType:"json"})).data;throw new n.A("layer:no-attribution-data","Layer does not have attribution data")}};(0,r._)([(0,c.MZ)({type:String})],v.prototype,"attributionDataUrl",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"effectiveVisible",null),(0,r._)([(0,c.MZ)({type:y.A})],v.prototype,"fullExtent",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"hasAttributionData",null),(0,r._)([(0,c.MZ)({type:String,clonable:!1})],v.prototype,"id",void 0),(0,r._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],v.prototype,"legendEnabled",void 0),(0,r._)([(0,c.MZ)({type:["show","hide","hide-children"]})],v.prototype,"listMode",void 0),(0,r._)([(0,c.MZ)({type:Number,range:{min:0,max:1},nonNullable:!0})],v.prototype,"opacity",void 0),(0,r._)([(0,c.MZ)({clonable:!1})],v.prototype,"parent",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"parsedUrl",null),(0,r._)([(0,c.MZ)({type:Boolean,readOnly:!0})],v.prototype,"persistenceEnabled",void 0),(0,r._)([(0,c.MZ)({type:Boolean})],v.prototype,"popupEnabled",void 0),(0,r._)([(0,c.MZ)({type:Boolean})],v.prototype,"attributionVisible",void 0),(0,r._)([(0,c.MZ)({type:g.A})],v.prototype,"spatialReference",void 0),(0,r._)([(0,c.MZ)({type:String})],v.prototype,"title",void 0),(0,r._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],v.prototype,"type",void 0),(0,r._)([(0,c.MZ)()],v.prototype,"url",void 0),(0,r._)([(0,c.MZ)({type:m.A})],v.prototype,"visibilityTimeExtent",void 0),(0,r._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],v.prototype,"visible",void 0),v=(0,r._)([(0,p.$)("esri.layers.Layer")],v);const w=v},18768:(e,t,i)=>{i.d(t,{b:()=>l});var r=i(90237),s=i(53966),n=i(10107),o=(i(44208),i(87811),i(40608)),a=i(60694);const l=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.qg)(this.url);if(e?.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Jf)(e,s.A.getLogger(this)))}};return(0,r._)([(0,n.MZ)()],t.prototype,"title",null),(0,r._)([(0,n.MZ)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,o.$)("esri.layers.mixins.ArcGISService")],t),t}},8303:(e,t,i)=>{i.d(t,{A:()=>S});var r=i(90237),s=i(92602),n=i(70333),o=i(78888),a=i(60999),l=i(49186),h=i(53966),u=i(97768),d=i(74887),c=i(84952),p=i(10107),y=(i(44208),i(87811),i(36005)),g=i(40608),_=i(43937),m=i(83531),f=i(20655),v=i(80812),w=i(41318),b=i(10407);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,u.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,i){if(t.itemId)return new v.default({id:t.itemId,portal:i?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await i.e(1204).then(i.bind(i,41204));return(0,d.Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap,populateGroupLayer:e.populateGroupLayer},t)}catch(e){throw(0,d.zf)(e)||h.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,d.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:i,fullEdit:r},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",i),this._set("userHasFullEditingPrivileges",r),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,d.QP)(e)}}async _fetchUserPrivileges(e,t){let i=this.portalItem;if(!e||!i||!i.loaded||i.sourceUrl)return this._fetchFallbackUserPrivileges(t);const r=!n.id?.findCredential(this.url),s=e===i.id;if(s&&i.portal.user)return this._getUserPrivileges(i,r);let o,a;if(s)o=i.portal.url;else try{o=await(0,m.wI)(this.url,t)}catch(e){(0,d.QP)(e)}if(!o||!(0,c.b8)(o,i.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(n.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,d.QP)(e)}const l=!0,h=!1,u=!1;if(!a)return{features:{edit:l,fullEdit:h},content:{updateItem:u}};try{if(s?await i.reload():(i=new v.default({id:e,portal:{url:o}}),await i.load(t)),i.portal.user)return this._getUserPrivileges(i,r)}catch(e){(0,d.QP)(e)}return{features:{edit:l,fullEdit:h},content:{updateItem:u}}}_getUserPrivileges(e,t){const i=(0,b.It)(e);return t&&(i.features.edit=!0),i}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,d.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const i=M.credential===t?M.user:await this._fetchEditingUser(e);return M.credential=t,M.user=i,null==i?.privileges||i.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const i=n.id?.findServerInfo(this.url??"");if(!i?.owningSystemUrl)return null;const r=`${i.owningSystemUrl}/sharing/rest`,s=f.A.getDefault();if(s&&s.loaded&&(0,c.S8)(s.restUrl)===(0,c.S8)(r))return s.user;const l=`${r}/community/self`,h=null!=e?e.signal:null,u=await(0,a.Ke)((0,o.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:h}));return u.ok?w.A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const i=t?.portal,r=this.portalItem?.id&&(this.portalItem.portal||f.A.getDefault());return i&&r&&!(0,c.ut)(r.restUrl,i.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,r._)([(0,p.MZ)({type:v.default})],t.prototype,"portalItem",null),(0,r._)([(0,y.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,r._)([(0,_.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,r._)([(0,p.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,r._)([(0,p.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,r._)([(0,g.$)("esri.layers.mixins.PortalLayer")],t),t},M={credential:null,user:null}},79677:(e,t,i)=>{i.d(t,{A:()=>p});var r,s=i(90237),n=i(25482),o=i(88930),a=i(10107),l=(i(44208),i(53966),i(87811),i(36005)),h=i(40608),u=i(43937),d=i(98623);let c=r=class extends n.A{static get allTime(){return y}static get empty(){return g}static fromArray(e){return new r({start:null!=e[0]?new Date(e[0]):e[0],end:null!=e[1]?new Date(e[1]):e[1]})}constructor(e){super(e),this.end=null,this.start=null}readEnd(e,t){return null!=t.end?new Date(t.end):null}writeEnd(e,t){t.end=e?.getTime()??null}get isAllTime(){return this.equals(r.allTime)}get isEmpty(){return this.equals(r.empty)}readStart(e,t){return null!=t.start?new Date(t.start):null}writeStart(e,t){t.start=e?.getTime()??null}clone(){return new r({end:this.end,start:this.start})}equals(e){if(!e)return!1;const t=this.start?.getTime()??this.start,i=this.end?.getTime()??this.end,r=e.start?.getTime()??e.start,s=e.end?.getTime()??e.end;return t===r&&i===s}expandTo(e,t=d.qU){if(this.isEmpty||this.isAllTime)return this.clone();let i=this.start;i&&(i=(0,o.lL)(i,e,t));let s=this.end;if(s){const i=(0,o.lL)(s,e,t);s=s.getTime()===i.getTime()?i:(0,o.S1)(i,1,e,t)}return new r({start:i,end:s})}intersection(e){if(!e)return this.clone();if(this.isEmpty||e.isEmpty)return r.empty;if(this.isAllTime)return e.clone();if(e.isAllTime)return this.clone();const t=this.start?.getTime()??-1/0,i=this.end?.getTime()??1/0,s=e.start?.getTime()??-1/0,n=e.end?.getTime()??1/0;let o,a;return s>=t&&s<=i?o=s:t>=s&&t<=n&&(o=t),i>=s&&i<=n?a=i:n>=t&&n<=i&&(a=n),null==o||null==a||isNaN(o)||isNaN(a)?r.empty:new r({start:o===-1/0?null:new Date(o),end:a===1/0?null:new Date(a)})}offset(e,t,i=d.qU){if(this.isEmpty||this.isAllTime)return this.clone();const s=new r,{start:n,end:a}=this;return null!=n&&(s.start=(0,o.S1)(n,e,t,i)),null!=a&&(s.end=(0,o.S1)(a,e,t,i)),s}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(e){if(!e||e.isEmpty)return this.clone();if(this.isEmpty)return e.clone();if(this.isAllTime||e.isAllTime)return y.clone();const t=null!=this.start&&null!=e.start?new Date(Math.min(this.start.getTime(),e.start.getTime())):null,i=null!=this.end&&null!=e.end?new Date(Math.max(this.end.getTime(),e.end.getTime())):null;return new r({start:t,end:i})}};(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"end",void 0),(0,s._)([(0,l.w)("end")],c.prototype,"readEnd",null),(0,s._)([(0,u.K)("end")],c.prototype,"writeEnd",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isAllTime",null),(0,s._)([(0,a.MZ)({readOnly:!0,json:{read:!1}})],c.prototype,"isEmpty",null),(0,s._)([(0,a.MZ)({type:Date,json:{write:{allowNull:!0}}})],c.prototype,"start",void 0),(0,s._)([(0,l.w)("start")],c.prototype,"readStart",null),(0,s._)([(0,u.K)("start")],c.prototype,"writeStart",null),c=r=(0,s._)([(0,h.$)("esri.time.TimeExtent")],c);const p=c,y=new c,g=new c({start:void 0,end:void 0})},78553:(e,t,i)=>{i.d(t,{D:()=>n,p:()=>s});var r=i(56507);function s(e){const t=(0,r.Vr)(100*(1-e));return Math.max(0,Math.min(t,100))}function n(e){const t=1-e/100;return Math.max(0,Math.min(t,1))}}}]);
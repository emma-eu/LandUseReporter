"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[16783],{15303:(e,t,s)=>{s.d(t,{h:()=>n,k:()=>o});const r=new FinalizationRegistry((e=>{e.close()}));function o(e,t){r.register(e,t,t)}function n(e){r.unregister(e)}},16783:(e,t,s)=>{s.d(t,{n_:()=>V,ho:()=>U});var r=s(50076),o=s(81806),n=s(50346),i=s(45012),a=s(15303),l=s(59989),c=s(76460),h=s(30726),u=s(3825),d=s(90534);const p={async request(e,t){const s=e.options,r=s.responseType;s.signal=t?.signal,s.responseType="native"===r||"native-request-init"===r?"native-request-init":r&&["blob","json","text"].includes(r)&&(0,d.sC)(e.url)?.after?r:"array-buffer";const o=await(0,u.A)(e.url,s),n={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete n.data.signal,n;case"blob":n.data=await n.data.arrayBuffer();break;case"json":n.data=(new TextEncoder).encode(JSON.stringify(n.data)).buffer;break;case"text":n.data=(new TextEncoder).encode(n.data).buffer}return{result:n,transferList:[n.data]}}};var g=s(88943),f=s(28899),m=s(86560),b=(s(11265),s(55171));const _={};var y=s(77944);class k{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=function(){return e[t](...arguments)}}))}}class w{constructor(){this._dispatcher=new k,this._workerPostMessage({type:g.Go.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,y.d)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,s){this._dispatcher.addEventListener(e,t,s)}removeEventListener(e,t,s){this._dispatcher.removeEventListener(e,t,s)}_workerPostMessage(e){(0,y.d)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const t=(0,g.VI)(e);if(t&&t.type===g.Go.OPEN){const{modulePath:e,jobId:s}=t;let r=await l.A.loadWorker(e);r||(r=await import(e));const o=l.A.connect(r);this._workerPostMessage({type:g.Go.OPENED,jobId:s,data:o})}}}var v=s(38042),P=s(80483);const E=()=>c.A.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:A}=g.Go;let O,N;const S="Failed to create Worker. Fallback to execute module in main thread";async function M(){if(!(0,o.A)("esri-workers"))return I(new w);if(!O&&!N)try{const e='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split("{CONFIGURATION}").join(function(){let e;if(null!=m.A.default){const t={...m.A};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(m.A));e.assetsPath=(0,d.s2)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,d.s2)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,v.JK)(),e.has={"esri-csp-restrictions":(0,o.A)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,o.A)("esri-2d-update-debug"),"esri-2d-log-updating":(0,o.A)("esri-2d-log-updating"),"featurelayer-pbf":(0,o.A)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,o.A)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,o.A)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,o.A)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,o.A)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,o.A)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,o.A)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,o.A)("featurelayer-snapshot-enabled"),"esri-atomics":(0,o.A)("esri-atomics"),"esri-shared-array-buffer":(0,o.A)("esri-shared-array-buffer"),"esri-tiles-debug":(0,o.A)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,o.A)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,o.A)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=(0,d.s2)(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=(0,d.s2)(e.workers.workerPath):e.workers.workerPath=(0,d.s2)((0,f.s)("esri/core/workers/RemoteClient.js")),e.workers.useDynamicImport=!1;const t=m.A.workers.loaderConfig,s=function(e){const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.slice()||[],paths:{..._.paths,...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=_.baseUrl),t}({baseUrl:t?.baseUrl,locale:(0,v.JK)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]}),r={buildDate:P.$,fullVersion:b.ol,revision:P.u};return JSON.stringify({esriConfig:e,loaderConfig:s,kernelInfo:r})}());O=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(t){N=t||{}}let e;if(O)try{e=new Worker(O,{name:"esri-worker-"+j++})}catch(t){E().warn(S,N),e=new w}else E().warn(S,N),e=new w;return I(e)}async function I(e){return new Promise((t=>{function s(o){const n=(0,g.VI)(o);n&&n.type===A&&(e.removeEventListener("message",s),e.removeEventListener("error",r),t(e))}function r(t){t.preventDefault(),e.removeEventListener("message",s),e.removeEventListener("error",r),E().warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new w).addEventListener("message",s),e.addEventListener("error",r)}e.addEventListener("message",s),e.addEventListener("error",r)}))}let j=0;const{ABORT:J,INVOKE:L,OPEN:C,OPENED:W,RESPONSE:R}=g.Go;class H{static async create(e){const t=await M();return new H(t,e)}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),c.A.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{signal:s}=t,r=(0,g.Jc)();return new Promise(((t,o)=>{const i={resolve:t,reject:o,abortHandle:(0,n.NY)(s,(()=>{this._outJobs.delete(r),this._post({type:J,jobId:r})}))};this._outJobs.set(r,i),this._post({type:C,jobId:r,modulePath:e})}))}_onMessage(e){const t=(0,g.VI)(e);if(t)switch(t.type){case W:this._onOpenedMessage(t);break;case R:this._onResponseMessage(t);break;case J:this._onAbortMessage(t);break;case L:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,r=t.get(s);r&&(r.controller&&r.controller.abort(),t.delete(s))}_onInvokeMessage(e){const{methodName:t,jobId:s,data:r,abortable:o}=e,i=o?new AbortController:null,a=this._inJobs,l=p[t];let c;try{if("function"!=typeof l)throw new TypeError(`${t} is not a function`);c=l.call(null,r,{signal:i?i.signal:null})}catch(h){return void this._post({type:R,jobId:s,error:(0,g.mF)(h)})}(0,n.$X)(c)?(a.set(s,{controller:i,promise:c}),c.then((e=>{a.has(s)&&(a.delete(s),this._post({type:R,jobId:s},e))}),(e=>{a.has(s)&&(a.delete(s),e||(e={message:"Error encountered at method"+t}),(0,n.zf)(e)||this._post({type:R,jobId:s,error:(0,g.mF)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:R,jobId:s},c)}_onOpenedMessage(e){const{jobId:t,data:s}=e,r=this._outJobs.get(t);r&&(this._outJobs.delete(t),(0,h.xt)(r.abortHandle),r.resolve(s))}_onResponseMessage(e){const{jobId:t,error:s,data:o}=e,n=this._outJobs.get(t);n&&(this._outJobs.delete(t),(0,h.xt)(n.abortHandle),s?n.reject(r.A.fromJSON(JSON.parse(s))):n.resolve(o))}_post(e,t,s){return(0,g.u1)(this.worker,e,t,s)}}const T=(0,o.A)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,o.A)("workers-pool-size")??8):0;let D=(0,o.A)("esri-mobile")?Math.min(T,3):T;D||(D=(0,o.A)("safari")&&(0,o.A)("mac")?7:2);let x=0;const F=[];function V(){q()}async function K(e,t){const s=new i.A,{registryTarget:r,...o}=t;return await s.open(e,o),r&&(0,a.k)(r,s),s}async function U(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw new r.A("workers:undefined-module","modulePath is missing");let s=t.strategy||"distributed";if((0,o.A)("host-webworker")&&!(0,o.A)("esri-workers")&&(s="local"),"local"===s){let s=await l.A.loadWorker(e);s||(s=await import(e)),(0,n.Te)(t.signal);const r=t.client||s;return K([l.A.connect(s,t.schedule)],{...t,client:r})}if(await q(),(0,n.Te)(t.signal),"dedicated"===s){const s=x++%D;return K([await F[s].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const s=Math.min(t.maxNumWorkers,D);if(s<D){const r=new Array(s);for(let o=0;o<s;++o){const s=x++%D;r[o]=F[s].open(e,t)}return K(r,t)}}return K(F.map((s=>s.open(e,t))),t)}let $,G=null;async function q(){if(G)return G;$=new AbortController;const e=[];for(let t=0;t<D;t++){const s=H.create(t).then((e=>(F[t]=e,e)));e.push(s)}return G=Promise.all(e),G}},28786:(e,t,s)=>{function r(e,t){return new Proxy({},{get:(s,r,o)=>function(){let s,o;for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];const l=i[i.length-1];return function(e){return"object"==typeof e&&!Array.isArray(e)&&null!=e&&("signal"in e||"transferList"in e||0===Object.keys(e).length)}(l)&&(s=l.signal,o=l.transferList,i.pop()),e.apply(t?`${t}.${r.toString()}`:r.toString(),i,{transferList:o,signal:s})}})}s.d(t,{L:()=>r})},45012:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(54901),o=(s(81806),s(50346)),n=s(59649),i=s(15303),a=s(28786),l=s(59989);class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new n.A}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,t){return new Promise(((s,r)=>{let n=!0;const i=e=>{(0,o.Te)(t.signal),n&&(n=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let a=0;a<e.length;++a){const n=e[a];(0,o.$X)(n)?this._clientPromises[a]=n.then((e=>(this._clients[a]=new l.A(e,t,this._ongoingJobsQueue),i(s),this._clients[a])),(()=>(i(r),null))):(this._clients[a]=new l.A(n,t,this._ongoingJobsQueue),this._clientPromises[a]=Promise.resolve(this._clients[a]),i(s))}}))}broadcast(e,t,s){const r=new Array(this._clientPromises.length);for(let o=0;o<this._clientPromises.length;++o){const n=this._clientPromises[o];r[o]=n.then((r=>r?.invoke(e,t,s)))}return r}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,o.NK)(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,(0,i.h)(this)}invoke(e,t,s){return this.apply(e,[t],s)}apply(e,t,s){const r=(0,o.Tw)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:s,resolver:r});for(let o=0;o<this._clientPromises.length;o++){const e=this._clients[o];e?e.jobAdded():this._clientPromises[o].then((e=>e?.jobAdded()))}return r.promise}createInvokeProxy(e){return(0,a.L)(this,e)}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,r.vE)(this._clients.map((s=>s.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let r=0;r<this._clientPromises.length;++r)this._clientPromises[r].then((o=>{o&&(t[r]=o.openPort()),0==--s&&e(t)}))}))}get test(){}}},59989:(e,t,s)=>{s.d(t,{A:()=>k});var r=s(55171),o=s(50076),n=s(79053),i=s(54901),a=s(30726),l=s(50346),c=s(28786);const h={statsWorker:()=>Promise.all([s.e(72003),s.e(81835)]).then(s.bind(s,81835)),geometryEngineWorker:()=>Promise.all([s.e(52612),s.e(24911)]).then(s.bind(s,49729)),arcadeGeometryOperatorsWorker:()=>s.e(89957).then(s.bind(s,89957)),CSVSourceWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(71586),s.e(98683),s.e(72003),s.e(60698),s.e(72048),s.e(90127)]).then(s.bind(s,12914)),EdgeProcessingWorker:()=>Promise.all([s.e(88105),s.e(12565),s.e(2259),s.e(1859)]).then(s.bind(s,50698)),ElevationSamplerWorker:()=>Promise.all([s.e(9624),s.e(88105),s.e(42683)]).then(s.bind(s,98357)),FeatureServiceSnappingSourceWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(97015),s.e(71586),s.e(98683),s.e(72003),s.e(89122),s.e(60698),s.e(72048),s.e(45420),s.e(6650)]).then(s.bind(s,6650)),GeoJSONSourceWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(71586),s.e(98683),s.e(72003),s.e(60698),s.e(72048),s.e(42853)]).then(s.bind(s,29184)),LercWorker:()=>s.e(31533).then(s.bind(s,31533)),MemorySourceWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(71586),s.e(98683),s.e(72003),s.e(60698),s.e(72048),s.e(84439)]).then(s.bind(s,35454)),PBFDecoderWorker:()=>Promise.all([s.e(98618),s.e(89122),s.e(27218)]).then(s.bind(s,20904)),FeaturePipelineWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(97015),s.e(84797),s.e(71586),s.e(60324),s.e(401),s.e(3174),s.e(98683),s.e(72003),s.e(89122),s.e(86535),s.e(60698),s.e(4333),s.e(84402),s.e(45420),s.e(45443),s.e(91429),s.e(17560),s.e(26799),s.e(55039),s.e(99553)]).then(s.bind(s,9848)),PointCloudWorker:()=>Promise.all([s.e(19592),s.e(28373),s.e(30554)]).then(s.bind(s,94116)),RasterWorker:()=>Promise.all([s.e(9624),s.e(93092),s.e(59844),s.e(4754),s.e(81633),s.e(5294)]).then(s.bind(s,5294)),SceneLayerSnappingSourceWorker:()=>Promise.all([s.e(88105),s.e(21729),s.e(12565),s.e(94536),s.e(2259),s.e(69450)]).then(s.bind(s,51264)),SceneLayerWorker:()=>Promise.all([s.e(9624),s.e(97015),s.e(21729),s.e(19592),s.e(28373),s.e(50809),s.e(42796),s.e(16801)]).then(s.bind(s,16801)),WFSSourceWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(71586),s.e(98683),s.e(72003),s.e(60698),s.e(72048),s.e(11316),s.e(57312)]).then(s.bind(s,22665)),WorkerTileHandler:()=>Promise.all([s.e(60324),s.e(45995),s.e(52353)]).then(s.bind(s,69574)),Lyr3DWorker:()=>s.e(1014).then(s.bind(s,1014)),Feature3DPipelineWorker:()=>Promise.all([s.e(9624),s.e(98618),s.e(97015),s.e(71586),s.e(98683),s.e(72003),s.e(89122),s.e(88105),s.e(21729),s.e(60698),s.e(19592),s.e(28373),s.e(12565),s.e(80895),s.e(30440),s.e(94536),s.e(61299),s.e(61948),s.e(31244),s.e(91891),s.e(94602),s.e(24972)]).then(s.bind(s,19326)),TextureCompressionWorker:()=>s.e(19854).then(s.bind(s,19854))};var u=s(88943),d=s(80483);const{CLOSE:p,ABORT:g,INVOKE:f,RESPONSE:m,OPEN_PORT:b,ON:_}=u.Go;class y{constructor(e){this._invoke=e,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(e){e.type===u.Go.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class k{static connect(e,t){const s=new MessageChannel;let r;r="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const o=new k(s.port1,{channel:s,client:r,schedule:t});return"object"==typeof r&&"remoteClient"in r&&(r.remoteClient=o),k.clients.set(o,r),s.port2}static loadWorker(e){const t=h[e];return t?t():Promise.resolve(null)}constructor(e,t,s){this._port=e,this._jobQueue=s,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new y((e=>this._onInvokeMessage(e))),this._client=t.client,this._onMessage=this._onMessage.bind(this),this._channel=t.channel,this._schedule=t.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:p}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,t,s){return this.apply(e,[t],s)}apply(e,t,s){const r=s?.signal,n=s?.transferList;if(!this._port)return Promise.reject(new o.A(u.T,`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const i=(0,u.Jc)();return new Promise(((s,o)=>{if((0,l.G4)(r))return this._processWork(),void o((0,l.NK)());const c=(0,l.u7)(r,(()=>{const e=this._outJobs.get(i);e&&(this._outJobs.delete(i),this._processWork(),(0,a.xt)(e.abortHandle),this._post({type:g,jobId:i}),o((0,l.NK)()))})),h={resolve:s,reject:o,abortHandle:c,debugInfo:e};this._outJobs.set(i,h),this._post({type:f,jobId:i,methodName:e,abortable:null!=r},t,n)}))}createInvokeProxy(e){return(0,c.L)(this,e)}on(e,t){const s=new MessageChannel;function r(e){t(e.data)}return this._port.postMessage({type:u.Go.ON,eventType:e,port:s.port2},[s.port2]),s.port1.addEventListener("message",r),s.port1.start(),(0,i.hA)((()=>{s.port1.postMessage({type:u.Go.CLOSE}),s.port1.close(),s.port1.removeEventListener("message",r)}))}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:b,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=2)return;const e=this._jobQueue?.pop();if(!e)return;const{methodName:t,data:s,invokeOptions:r,resolver:o}=e;this.apply(t,s,r).then((e=>o.resolve(e))).catch((e=>o.reject(e)))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{(0,a.xt)(e.abortHandle),e.reject((0,l.NK)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){null!=this._schedule?this._schedule((()=>this._processMessage(e,!0))):this._processMessage(e,!1)}_processMessage(e,t){const s=(0,u.VI)(e);if(s)switch(s.type){case m:this._onResponseMessage(s);break;case f:t?this._onInvokeMessage(s):this._invokeQueue.push(s);break;case g:this._onAbortMessage(s);break;case p:this._onCloseMessage();break;case b:this._onOpenPortMessage(s);break;case _:this._onOnMessage(s)}}_onAbortMessage(e){const t=this._inJobs,s=e.jobId,r=t.get(s);this._invokeQueue.push(e),r&&(r.controller&&r.controller.abort(),t.delete(s))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&k.clients.get(this)===e&&e.destroy(),k.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:t,jobId:s,data:r=[],abortable:o}=e,n=o?new AbortController:null,i=this._inJobs;let a,c=this._client,h=c[t];try{if(!h&&t&&t.includes(".")){const e=t.split(".");for(let t=0;t<e.length-1;t++)c=c[e[t]],h=c[e[t+1]]}if("function"!=typeof h)throw new TypeError(`${t} is not a function`);r.push({client:this,signal:n?n.signal:null}),a=h.apply(c,r)}catch(d){return void this._post({type:m,jobId:s,error:(0,u.mF)(d)})}(0,l.$X)(a)?(i.set(s,{controller:n,promise:a}),a.then((e=>{i.has(s)&&(i.delete(s),this._post({type:m,jobId:s},e))}),(e=>{i.has(s)&&(i.delete(s),(0,l.zf)(e)||this._post({type:m,jobId:s,error:(0,u.mF)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:m,jobId:s},a)}_onOpenPortMessage(e){new k(e.port,{client:this._client})}_onOnMessage(e){const{port:t}=e,s=this._client.on(e.eventType,(e=>{t.postMessage(e)})),r=(0,n.on)(e.port,"message",(e=>{const o=(0,u.VI)(e);o?.type===u.Go.CLOSE&&(r.remove(),s.remove(),t.close())}))}_onResponseMessage(e){const{jobId:t,error:s,data:r}=e,n=this._outJobs;if(!n.has(t))return;const i=n.get(t);n.delete(t),this._processWork(),(0,a.xt)(i.abortHandle),s?i.reject(o.A.fromJSON(JSON.parse(s))):i.resolve(r)}_post(e,t,s){return(0,u.u1)(this._port,e,t,s)}}k.kernelInfo={buildDate:d.$,fullVersion:r.ol,revision:d.u},k.clients=new Map},80483:(e,t,s)=>{s.d(t,{$:()=>r,u:()=>o});const r="20250407",o="04d2b42da93678ca718b23aaf7e216985f10fa8e"},88943:(e,t,s)=>{s.d(t,{Go:()=>i,Jc:()=>c,T:()=>n,VI:()=>d,mF:()=>h,oV:()=>g,u1:()=>u});var r=s(81806),o=s(50346);const n="worker:port-closed";var i,a;(a=i||(i={}))[a.HANDSHAKE=0]="HANDSHAKE",a[a.OPEN=1]="OPEN",a[a.OPENED=2]="OPENED",a[a.RESPONSE=3]="RESPONSE",a[a.INVOKE=4]="INVOKE",a[a.ABORT=5]="ABORT",a[a.CLOSE=6]="CLOSE",a[a.OPEN_PORT=7]="OPEN_PORT",a[a.ON=8]="ON";let l=0;function c(){return l++}function h(e){return e?"string"==typeof e?JSON.stringify({name:"message",message:e}):e.toJSON?JSON.stringify(e):JSON.stringify({name:e.name,message:e.message,details:e.details||{stack:e.stack}}):null}function u(e,t,s,o){if(t.type===i.OPEN_PORT)return void e.postMessage(t,[t.port]);if(t.type!==i.INVOKE&&t.type!==i.RESPONSE)return void e.postMessage(t);let n;if(function(e){return e&&"object"==typeof e&&("result"in e||"transferList"in e)}(s)?(n=p(s.transferList),t.data=s.result):(n=p(o),t.data=s),n){if((0,r.A)("ff"))for(const s of n)if("byteLength"in s&&s.byteLength>267386880){const s="Worker call with large ArrayBuffer would crash Firefox";switch(t.type){case i.INVOKE:throw s;case i.RESPONSE:return void u(e,{type:i.RESPONSE,jobId:t.jobId,error:h(s)})}}e.postMessage(t,n)}else e.postMessage(t)}function d(e){if(!e)return null;const t=e.data;return t?"string"==typeof t?JSON.parse(t):t:null}function p(e){if(!e?.length)return null;if((0,r.A)("esri-workers-arraybuffer-transfer"))return e;const t=e.filter((e=>!function(e){return e instanceof ArrayBuffer||"ArrayBuffer"===e?.constructor?.name}(e)));return t.length?t:null}async function g(e){try{return await e}catch(l){const t=l?.name===n;if(!(0,o.zf)(l)&&!t)throw l;return}}}}]);
//# sourceMappingURL=16783.fc70923a.chunk.js.map
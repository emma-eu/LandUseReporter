"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1384],{55726:(e,s,t)=>{t.d(s,{$1:()=>l,H2:()=>f,MT:()=>m,VP:()=>g,WF:()=>u,Wt:()=>a,XQ:()=>h,hK:()=>d,nS:()=>p,uh:()=>i,xY:()=>c});var o=t(49186);const r="upload-assets",n=()=>new Error;class a extends o.A{constructor(){super(`${r}:unsupported`,"Layer does not support asset uploads.",n())}}class i extends o.A{constructor(){super(`${r}:no-glb-support`,"Layer does not support glb.",n())}}class c extends o.A{constructor(){super(`${r}:no-supported-source`,"No supported external source found",n())}}class l extends o.A{constructor(){super(`${r}:not-base-64`,"Expected gltf data in base64 format after conversion.",n())}}class u extends o.A{constructor(){super(`${r}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",n())}}class p extends o.A{constructor(e,s){super(`${r}:bad-response`,`Bad response. Uploaded ${e} items and received ${s} results.`,n())}}class d extends o.A{constructor(e,s){super(`${r}-layer:upload-failed`,`Failed to upload mesh file ${e}. Error code: ${s?.code??"-1"}. Error message: ${s?.messages??"unknown"}`,n())}}class f extends o.A{constructor(e){super(`${r}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${e}, but it does not list it in its supported formats.`,n())}}class m extends o.A{constructor(){super(`${r}:convert3D-failed`,"convert3D failed.")}}class g extends o.A{constructor(){super("invalid-input:no-model","No supported model found")}}class h extends o.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}},31384:(e,s,t)=>{t.d(s,{uploadAssets:()=>R});var o=t(78888),r=t(44208),n=t(53966),a=t(74887),i=t(78659),c=t(84952),l=t(13069),u=t(16930),p=t(63579),d=t(55726);const f={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};var m=t(60694),g=t(36563),h=t(91869);function w(e,s=e=>{},t){return new y(e,s,t)}class y{constructor(e,s=e=>{},t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(1===e&&(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[s,t]of this._timingsMap){const o=Math.round(t.end-t.start)/1e3,r=Math.round(o/e*100);console.log(this.taskName??"Task",{stepKey:s,stepTime:o,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),(0,r.A)("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const o=(0,h.tE)(this._timingsMap,e,(()=>({start:t,end:0})));1===s&&(o.end=t)}this.emitProgress()}simulate(e,s){return A((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}}function A(e=e=>{},s=j){const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,r=1-Math.exp(-o/s);e(r)}),x);return(0,g.hA)((()=>{clearInterval(o),e(1)}))}function T(e,s=b){return(0,i.gr)((0,i.Kp)(e*v/s))}const b=10,P=10,v=8e-6,x=(0,i.l5)(50),j=(0,i.l5)(1e3),F=1e6,$=20*F,D=2e9,M=3;async function N({data:e,name:s,description:t},r,n){let i=null;try{const u=(0,c.fj)(r,"uploads"),p=(0,c.fj)(u,"info"),{data:d}=await(0,o.A)(p,{query:{f:"json"},responseType:"json"});(0,a.Te)(n);const f=(0,m.Wo)(r),g=d.maxUploadFileSize*F,h=f?D:g,y=f?Math.min($,g):$;if(e.size>h)throw new Error("Data too large");const A=(0,c.fj)(u,"register"),{data:b}=await(0,o.A)(A,{query:{f:"json",itemName:(l=s,l.replaceAll("/","_").replaceAll("\\","_")),description:t},responseType:"json",method:"post"});if((0,a.Te)(n),!b.success)throw new Error("Registration failed");const{itemID:P}=b.item;i=(0,c.fj)(u,P);const v=(0,c.fj)(i,"uploadPart"),x=Math.ceil(e.size/y),j=new Array;for(let s=0;s<x;++s)j.push(e.slice(s*y,Math.min((s+1)*y,e.size)));const N=j.slice().reverse(),S=new Array,E=w(x,n?.onProgress,"uploadItem"),k=async()=>{for(;0!==N.length;){const e=j.length-N.length,s=N.pop(),t=new FormData,r=E.simulate(e,T(s.size));try{t.append("f","json"),t.append("file",s),t.append("partId",`${e}`);const{data:r}=await(0,o.A)(v,{timeout:0,body:t,responseType:"json",method:"post"});if((0,a.Te)(n),!r.success)throw new Error("Part upload failed")}finally{r.remove()}}};for(let e=0;e<M&&0!==N.length;++e)S.push(k());await Promise.all(S);const R=(0,c.fj)(i,"commit"),{data:C}=await(0,o.A)(R,{query:{f:"json",parts:j.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if((0,a.Te)(n),!C.success)throw new Error("Commit failed");return C.item}catch(e){if(null!=i){const e=(0,c.fj)(i,"delete");await(0,o.A)(e,{query:{f:"json"},responseType:"json",method:"post"})}throw e}var l}var S=t(20557),E=t(86390),k=t(77793);async function R(e,s,t){const o=e.length;if(!o)return t?.onProgress?.(1),[];const n=w(o,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,{layer:s,ongoingUploads:t},o){const n=t.get(e);if(n)return n;if(!function(e){return!!e.infoFor3D&&!!e.url}(s))throw new d.Wt;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,p.eN)(e,t)))}(e,s))return o?.onProgress?.(1),e;const m=async function(e,s,t){const{metadata:o}=e,{displaySource:n}=o,m=C(n?.source,s,{checkForConversionRequired:(0,r.A)("enable-feature:georeferenced-uploads")}),g=null!=m?async function(e,s,t){return{source:await I(e,s,t),original:!0,unitConversionDisabled:!0}}(m,s,t):o.externalSources.length>0?async function(e,s,t){const o=q(s),{externalSources:n}=e.metadata,a=function(e,s){for(const t of e){const e=C(t.source,s);if(e)return e}return null}(n,s);if(!a)throw new d.xY;const l=w(f.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),m=await I(a,s,{onProgress:l.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:m,original:!0}]);const g=a.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),h=l.simulate("serviceAssetsToGlb",function(e,s=P){return(0,i.gr)((0,i.Kp)(e*v/s))}(g));try{const{source:n,transform:a,origin:i}=await async function(e,s,t){const o=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash})));let n;try{const e=(0,c.fj)(s.parsedUrl.path,"convert3D"),r=s.capabilities?.operations.supportsAsyncConvert3D;n=(await(r?Z:Y)(e,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},responseType:"json",timeout:0})).data}catch(e){throw new d.MT}return function(e,s){const t={source:s.assets.map((s=>{const t=(0,S.R_)(s.contentType,e.infoFor3D.supportedFormats);if(!t)throw new d.H2(t);return new p.Qp(s.assetName,s.contentType,[new p.Bq(s.assetURL,s.assetHash)])})),origin:void 0,transform:void 0};if((0,r.A)("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=(0,k.f)(s.transform),s.spatialReference){const e=u.A.fromJSON(s.spatialReference);t.origin=(0,k.V)(s.transform,e)}}else t.transform=(0,E.Z)(e.spatialReference);return t}(s,n)}(m,s,o);return e.transform=a,i&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[i.x,i.y,i.z??0],e.spatialReference=i.spatialReference)),{source:n,unitConversionDisabled:!0}}finally{h.remove()}}(e,s,t):async function(e,s,t){const o=w(f.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),r=async function(e,s,t){const o=q(s),r=await e.load(t),n=await r.toBinaryGLTF({origin:r.origin,signal:t?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return(0,a.Te)(t),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${(0,l.yS)()}.glb`,assetType:o}}(e,s,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await U([r],s,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}(e,s,t),h=await g;return(0,a.Te)(t),e.addExternalSources([h]),e}(e,s,o);t.set(e,m);try{await m}finally{t.delete(e)}return e}(e,s,{...t,onProgress:n.makeOnProgress(o)}))))}function C(e,{infoFor3D:s},t={}){if(!e)return null;const{supportedFormats:o,editFormats:r}=s,n=(0,p.WN)(e),a=new Array,i=(0,S.ND)(s),c=(0,S.nr)(s);let l=!1;for(const e of n){const s=_(e,o);if(!s)return null;const{assetType:n}=s;if(t.checkForConversionRequired&&(n===i||n===c))return null;r.includes(n)&&(l=!0),a.push(s)}return l?a:null}function _(e,s){const t=(0,p.fH)(e,s);return t?{asset:e,assetType:t}:null}async function I(e,s,t){return U(e.map((e=>async function(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const r=await t.toBlob(s);return(0,a.Te)(s),{blob:r,assetName:t.assetName,assetType:o}}(e,t))),s,t)}async function U(e,s,t){const o=w(f.uploadAssetBlobs,t?.onProgress,"uploadAssetBlobs"),r=await function(e,s,t){const o=w(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,r)=>{const i=async function(e,s,t){const{blob:o,assetType:r,assetName:i}=e;let l=null;try{const e=await N({data:o,name:i},s.url,t);(0,a.Te)(t),l={assetType:r,assetUploadId:e.itemID}}catch(e){(0,a.QP)(e),n.A.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!l){const e=await(0,c._0)(o);if((0,a.Te)(t),!e.isBase64)throw new d.$1;l={assetType:r,assetData:e.data}}if(!l)throw new d.WF;return{item:l,assetName:i}}(await e,s,{...t,onProgress:o.makeOnProgress(r)});return(0,a.Te)(t),i})))}(e,s,{...t,onProgress:o.makeOnProgress("prepareAssetItems")});(0,a.Te)(t);const i=r.map((({item:e})=>e)),{uploadResults:l}=await B(i,s,{...t,onProgress:o.makeOnProgress("uploadAssetItems")});return(0,a.Te)(t),e.map(((e,t)=>function(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new d.hK(e.assetName,t)}const{assetHash:r}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,S.Fm)(a,i);if(!c)throw new d.H2(a);return new p.Qp(n,c,[new p.Bq(`${t.parsedUrl.path}/assets/${r}`,r)])}(r[t],l[t],s)))}async function B(e,s,t){const r=A(t?.onProgress);try{const r=await(0,o.A)((0,c.fj)(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,a.Te)(t),r.data.uploadResults.length!==e.length)throw new d.nS(e.length,r.data.uploadResults.length);return r.data}finally{r.remove()}}function Y(e,s){return(0,o.A)(e,s)}async function Z(e,s){const t=(await(0,o.A)(e,s)).data.statusUrl;for(;;){const e=(await(0,o.A)(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,o.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await(0,a.Pl)(O)}}function q({infoFor3D:e}){const s=(0,S.U9)(e);if(!s)throw new d.uh;return s}const O=(0,i.l5)(1e3)},86390:(e,s,t)=>{t.d(s,{Z:()=>n});var o=t(83047),r=t(73836);function n(e){const s=1/(0,o.GA)(e,1);return 1!==s?new r.A({scale:[s,s,s]}):void 0}},77793:(e,s,t)=>{t.d(s,{V:()=>n,f:()=>a});var o=t(86738),r=t(73836);function n(e,s,t=i){return new o.A({x:e[t.originX],y:e[t.originY],z:e[t.originZ],spatialReference:s})}function a(e,s=i){return new r.A({translation:[e[s.translationX],-e[s.translationZ],e[s.translationY]],rotationAxis:[e[s.rotationX],-e[s.rotationZ],e[s.rotationY]],rotationAngle:e[s.rotationDeg],scale:[e[s.scaleX],e[s.scaleZ],e[s.scaleY]]})}const i={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"}}}]);
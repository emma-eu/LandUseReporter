"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[62544],{11668:(e,a,r)=>{r.d(a,{K:()=>d,Q:()=>l});var t=r(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function l(e,a){const{loadContext:r,...n}=a||{},l=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);y(l),o(l);const s={serviceJSON:l};if((l.currentVersion??0)<10.5)return s;const i=`${e}/layers`,c=r?await r.fetchServiceMetadata(i,n):await(0,t.V)(i,n);return y(c),o(c),s.layersJSON={layers:c.layers,tables:c.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function i(e){return"Table"===e.type}function o(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(i)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(c),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},39323:(e,a,r)=>{r.d(a,{L:()=>u});var t=r(55171),n=r(3825),l=r(50076),s=r(50346),i=r(13096),o=r(65308),c=r(70652);async function u(e,a){const r=(0,i.qg)(e);if(!r)throw new l.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(f){(0,s.QP)(f)}return null}(e);null!=l&&(r.portal=new o.A({url:l}));try{return await r.load({signal:e.signal})}catch(w){return(0,s.QP)(w),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new c.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,s.QP)(t),null}}(u);if(!f?.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const w=await d(f.url,u);return w.portalItem=f,w}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.qg)(e);if(!r)throw new l.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const o=y(a),c=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},f=d("anonymous").catch((()=>d("no-prompt"))),[w,m]=await Promise.all([f,o]),h=m?.layers,p=w.data&&w.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(h)){for(let n=0;n<Math.min(h.length,p.length);n++)if(h[n].id===s)return{serverUrl:t,layerId:p[n].id}}else if(null!=s&&s<p.length)return{serverUrl:t,layerId:p[s].id};throw new Error("could not find matching associated sublayer")}},62487:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(37375),r.e(13993)]).then(r.bind(r,13993))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(5027),r.e(61656),r.e(2236),r.e(38451),r.e(21729),r.e(19592),r.e(28373),r.e(44114),r.e(50809),r.e(42796),r.e(58897)]).then(r.bind(r,30188))).default,CSVLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(5027),r.e(61656),r.e(2236),r.e(38451),r.e(42672)]).then(r.bind(r,1365))).default,CatalogLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(97015),r.e(98733),r.e(61656),r.e(2236),r.e(72003),r.e(89122),r.e(17872),r.e(54610),r.e(56200),r.e(41172),r.e(60839)]).then(r.bind(r,84397))).default,DimensionLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(15896),r.e(72798)]).then(r.bind(r,72798))).default,ElevationLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(16783),r.e(98733),r.e(90920),r.e(84485)]).then(r.bind(r,43875))).default,FeatureLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(5027),r.e(61656),r.e(2236),r.e(38451),r.e(59419)]).then(r.bind(r,38451))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(5027),r.e(5963)]).then(r.bind(r,50709))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(52551)]).then(r.bind(r,52551))).default,GroupLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(16095),r.e(25515)]).then(r.bind(r,16095))).default,ImageryLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(16783),r.e(97015),r.e(98733),r.e(89122),r.e(93092),r.e(4754),r.e(909),r.e(18461),r.e(72296)]).then(r.bind(r,79720))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(16783),r.e(98733),r.e(93092),r.e(59844),r.e(90920),r.e(4754),r.e(909),r.e(81633),r.e(18461),r.e(17655),r.e(49237)]).then(r.bind(r,49237))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98733),r.e(76790)]).then(r.bind(r,76790))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98733),r.e(44114),r.e(82966)]).then(r.bind(r,3196))).default,KMLLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(41324)]).then(r.bind(r,41324))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(71586),r.e(5027),r.e(98683),r.e(72003),r.e(60698),r.e(72048),r.e(9247),r.e(47703),r.e(70635),r.e(26570)]).then(r.bind(r,26570))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(21729),r.e(15896),r.e(65333),r.e(24928)]).then(r.bind(r,24928))).default,LinkChartLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(16783),r.e(97015),r.e(71586),r.e(5027),r.e(98683),r.e(72003),r.e(60698),r.e(72048),r.e(9247),r.e(47703),r.e(70635),r.e(17079)]).then(r.bind(r,17079))).default,MapImageLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(97015),r.e(98733),r.e(61656),r.e(89122),r.e(17872),r.e(92893),r.e(82951),r.e(36414)]).then(r.bind(r,82951))).default,MapNotesLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(5027),r.e(61656),r.e(2236),r.e(38451),r.e(95908)]).then(r.bind(r,43311))).default,MediaLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(39522)]).then(r.bind(r,39522))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(97015),r.e(5027),r.e(26799),r.e(4828)]).then(r.bind(r,1741))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(24552),r.e(50803)]).then(r.bind(r,50803))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(98733),r.e(5027),r.e(61656),r.e(2236),r.e(38451),r.e(26603),r.e(85603)]).then(r.bind(r,3832))).default,PointCloudLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98733),r.e(44114),r.e(49032)]).then(r.bind(r,11830))).default,RouteLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(9247),r.e(21297),r.e(19634)]).then(r.bind(r,99310))).default,SceneLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(97015),r.e(98733),r.e(21729),r.e(19592),r.e(28373),r.e(44114),r.e(50809),r.e(42796),r.e(52744)]).then(r.bind(r,48320))).default,StreamLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(97015),r.e(98733),r.e(5027),r.e(72703)]).then(r.bind(r,84369))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(97015),r.e(98733),r.e(61656),r.e(2236),r.e(32473)]).then(r.bind(r,86061))).default,TileLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98618),r.e(73347),r.e(97015),r.e(98733),r.e(61656),r.e(89122),r.e(17872),r.e(90920),r.e(92893),r.e(30649)]).then(r.bind(r,71174))).default,UnknownLayer:async()=>(await Promise.all([r.e(9624),r.e(8896)]).then(r.bind(r,8896))).default,UnsupportedLayer:async()=>(await Promise.all([r.e(9624),r.e(72043)]).then(r.bind(r,72043))).default,VectorTileLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98733),r.e(90920),r.e(45995),r.e(45443),r.e(32633)]).then(r.bind(r,53451))).default,VideoLayer:async()=>(await Promise.all([r.e(37375),r.e(80782),r.e(97749)]).then(r.bind(r,79426))).default,ViewshedLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(21729),r.e(15896),r.e(65333),r.e(78532)]).then(r.bind(r,78532))).default,VoxelLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(98733),r.e(44114),r.e(88560)]).then(r.bind(r,88560))).default,WCSLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(16783),r.e(93092),r.e(59844),r.e(4754),r.e(909),r.e(81633),r.e(18461),r.e(17655),r.e(14448)]).then(r.bind(r,29954))).default,WFSLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(73347),r.e(16783),r.e(97015),r.e(5027),r.e(11316),r.e(27641)]).then(r.bind(r,26964))).default,WMSLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(52015)]).then(r.bind(r,52015))).default,WMTSLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(24552),r.e(1845)]).then(r.bind(r,1845))).default,WebTileLayer:async()=>(await Promise.all([r.e(9624),r.e(37375),r.e(24552)]).then(r.bind(r,24552))).default}},62544:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(50076),n=r(90534),l=r(13096),s=r(39323),i=r(11668),o=r(31933),c=r(62487),u=r(67061);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const{properties:a,url:t}=e,n={...a,url:t},l=await m(t,a?.customParameters),{Constructor:s,layerId:i,sourceJSON:o,parsedUrl:c,layers:u,tables:y}=l;if(u.length+y.length===0)return null!=i&&(n.layerId=i),null!=o&&(n.sourceJSON=o),new s(n);const d=new(0,(await Promise.all([r.e(9624),r.e(37375),r.e(16095)]).then(r.bind(r,16095))).default)({title:c.title});return await async function(e,a,r){const t=a.sublayerConstructorProvider;for(const{id:n,serverUrl:l}of a.layers){const s=f(a.sublayerInfos,n),i=w(l,n,s,(s&&t?.(s))??a.Constructor,r);e.add(i)}if(a.tables.length){const t=await p("FeatureLayer");a.tables.forEach((n=>{let{id:l,serverUrl:s}=n;const i=w(s,l,f(a.tableInfos,l),t,r);e.tables.add(i)}))}}(d,l,n),d}function f(e,a){return e?e.find((e=>{let{id:r}=e;return r===a})):null}function w(e,a,r,t,n){const l={...n,layerId:a};return null!=e&&(l.url=e),null!=r&&(l.sourceJSON=r),"sublayerTitleMode"in t.prototype&&(l.sublayerTitleMode="service-name"),new t(l)}async function m(e,a){let r=(0,l.qg)(e);if(null==r&&(r=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a});let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":h(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&h(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=s?(0,l.iz)(e):null;return{title:null!=o&&r.name||(0,n.e7)(e),serverType:t,sublayer:s,url:{path:null!=o?o.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let f;const w={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},m="FeatureServer"===c,b="SceneServer"===c,v={parsedUrl:r,Constructor:null,layerId:m||b?d??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":if(null!=d){const{type:r}=await(0,u.V)(e,{customParameters:a});switch(f="FeatureLayer",r){case"Catalog Layer":f="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new t.A("arcgis-layers:unsupported",`fromUrl() not supported for "${r}" layers`)}}else f=await async function(e,a){return(await(0,u.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.V)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.XX[e]&&(f=o.XX[e])}}break}case"3DTilesServer":throw new t.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,u.V)(e,{customParameters:a});v.sourceJSON=r,f=(0,i.K)(r.type)}break;default:f=w[c]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,l=!1;switch(a){case"FeatureServer":{const a=await(0,i.Q)(e,{customParameters:r});l=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,u.V)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,s.L)(e),n=await(0,u.V)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,u.V)(e,{customParameters:r})}const o=t?.layers,c=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:l?o:[],tableInfos:l?c:[]}}(e,c,a);if(m&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,m&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){if(!e.length)return;const a=new Set,r=[];for(const{type:l}of e)a.has(l)||(a.add(l),r.push(p((0,i.K)(l))));const t=await Promise.all(r),n=new Map;return Array.from(a).forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(m||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];if(v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,m){const a=e?.type;f=(0,i.K)(a)}}}return v.Constructor=await p(f),v}function h(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function p(e){return(0,c.S[e])()}},67061:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(3825);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=62544.9f5d9944.chunk.js.map
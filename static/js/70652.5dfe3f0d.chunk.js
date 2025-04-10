"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[70652],{70652:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var r=i(35143),o=i(28899),a=i(50076),s=i(42553),n=i(53084),l=i(49304),p=i(90534),c=i(46053),d=i(40565),u=i(28379),h=i(85842),m=i(76797),g=i(65308),y=i(91967),v=i(76460),w=i(21403);i(81806),i(47249);let b=class extends y.A{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e?.portalItem&&e.path?{...e,path:f(e.path,e.portalItem)}:e}set path(e){null!=e&&(0,p.oP)(e)?v.A.getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return f(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json",t=arguments.length>1?arguments[1]:void 0;const i=this.cdnUrl;if(null==i)throw new a.A("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(i,{responseType:e,query:{token:this.portalItem.apiKey,_ts:t?.cacheBust?Date.now():null},signal:t?.signal})}async update(e,t){const{addOrUpdateResources:r}=await i.e(33106).then(i.bind(i,33106));return await r(this.portalItem,[{resource:this,content:e,compress:t?.compress,access:t?.access}],"update",t),this}hasPath(){return null!=this.path}};function f(e,t){return null==e?e:(e=e.replace(/^\/+/,""),null!=t&&(0,p.oP)(e)&&(e=(0,p.V1)(e,t.itemUrl)),e?.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}(0,r._)([(0,c.MZ)()],b.prototype,"portalItem",void 0),(0,r._)([(0,c.MZ)({type:String,value:null})],b.prototype,"path",null),(0,r._)([(0,w.w)("path")],b.prototype,"_castPath",null),(0,r._)([(0,c.MZ)({type:String,readOnly:!0})],b.prototype,"url",null),(0,r._)([(0,c.MZ)({type:String,readOnly:!0})],b.prototype,"cdnUrl",null),(0,r._)([(0,c.MZ)({type:String,readOnly:!0})],b.prototype,"itemRelativeUrl",null),b=(0,r._)([(0,h.$)("esri.portal.PortalItemResource")],b);const k=b;let S=class extends y.A{constructor(e){super(e),this.created=null,this.rating=null}};(0,r._)([(0,c.MZ)({type:Date})],S.prototype,"created",void 0),(0,r._)([(0,c.MZ)()],S.prototype,"rating",void 0),S=(0,r._)([(0,h.$)("esri.portal.PortalRating")],S);const M=S;var I,x=i(79453);const _=new Set(["3DTiles Service","CSV","Feature Collection","Feature Service","Feed","GeoJson","Group Layer","Image Service","KML","Map Service","Media Layer","Scene Service","Stream Service","Vector Tile Service","WFS","WMS","WMTS"]),Z=new Set(["KML","GeoJson","CSV"]);let U=I=class extends(s.A.JSONSupportMixin(l.A)){static from(e){return(0,d.PZ)(I,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.classification=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return"Feature Service"===e||"Feature Collection"===e?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Video Service"===e?i="Video Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Geocoding Service"===e?i="Locator":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e?.toLowerCase().includes("add in")?i=e.replaceAll(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"Raster function template"===e?i="Raster Function Template":"OGCFeatureServer"===e?i="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?i="Instant App":"Insights Page"===e?i="Insights Report":"Excalibur Imagery Project"===e?i="Excalibur Project":"3DTiles Service"===e?i="3D tiles layer":"3DTiles Package"===e&&(i="3D tiles package"),i}readExtent(e){return e&&e.length?new m.A(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type?.toLowerCase()||"",t=this.typeKeywords||[];let i,r=!1,a=!1,s=!1,n=!1,l=!1,p=!1,c=!1,d=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(r=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(a=t.includes("Table"),s=t.includes("Route Layer"),n=t.includes("Markup"),l=t.includes("Spatiotemporal"),p=t.includes("UtilityNetwork"),i=l&&a?"spatiotemporaltable":a?"table":s?"routelayer":n?"markup":l?"spatiotemporal":p?"utilitynetwork":r?"featureshosted":"features"):"map service"===e||"wms"===e||"wmts"===e?(l=t.includes("Spatiotemporal"),c=t.includes("Relational"),i=l||c?"mapimages":r||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages"):i="scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"video service"===e?t.includes("Live Stream")?"livestreamvideolayer":"videolayer":"geoprocessing service"===e?t.includes("Web Tool")?"tool":"layers":"geodata service"===e?"geodataservice":"3dtiles service"===e?t.includes("3DObject")?"3dobjecttileslayer":t.includes("IntegratedMesh")?"integratedmeshtileslayer":"3dtileslayer":"layers"):"web map"===e||"cityengine web scene"===e?i="maps":"web scene"===e?i=t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?i="instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?i="apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?i="mapsgray":"service definition"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"netcdf"===e||"administrative report"===e?i="datafiles":"360 vr experience"===e?i="360vr":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?i="appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?i="addindesktop":"pdf"===e?i="pdf":"microsoft word"===e?i="word":"microsoft excel"===e?i="excel":"microsoft powerpoint"===e?i="ppt":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?i="datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?i="toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?i="layersgray":"analysis model"===e?i="analysismodel":"scene package"===e?i="scenepackage":"3dtiles package"===e?i="3dtileslayerpackage":"3dtiles service"===e?i="3dtileslayer":"mobile scene package"===e?i="mobilescenepackage":"tile package"===e||"compact tile package"===e?i="tilepackage":"task file"===e?i="taskfile":"report template"===e?i="report-template":"statistical data collection"===e?i="statisticaldatacollection":"insights workbook"===e?i="workbook":"insights model"===e?i="insightsmodel":"insights page"===e?i="insightspage":"insights theme"===e?i="insightstheme":"hub initiative"===e?i="hubinitiative":"hub page"===e?i="hubpage":"hub site application"===e?i="hubsite":"hub event"===e?i="hubevent":"hub project"===e?i="hubproject":"relational database connection"===e?i="relationaldatabaseconnection":"big data file share"===e?i="datastorecollection":"image collection"===e?i="imagecollection":"desktop style"===e?i="desktopstyle":"style"===e?i=t.includes("Dictionary")?"dictionarystyle":"style":"dashboard"===e?i="dashboard":"raster function template"===e?i="rasterprocessingtemplate":"vector tile package"===e?i="vectortilepackage":"ortho mapping project"===e?i="orthomappingproject":"ortho mapping template"===e?i="orthomappingtemplate":"solution"===e?i="solutions":"geopackage"===e?i="geopackage":"deep learning package"===e?i="deeplearningpackage":"real time analytic"===e?i="realtimeanalytics":"reality mapping project"===e?i="realitymappingproject":"big data analytic"===e?i="bigdataanalytics":"feed"===e?i="feed":"excalibur imagery project"===e?i="excaliburimageryproject":"notebook"===e?i="notebook":"storymap"===e?i="storymap":"survey123 add in"===e?i="survey123addin":"mission"===e?i="mission":"mission report"===e?i="missionreport":"mission template"===e?i="missiontemplate":"quickcapture project"===e?i="quickcaptureproject":"pro report"===e?i="proreport":"pro report template"===e?i="proreporttemplate":"urban model"===e?i="urbanmodel":"urban project"===e?i="urbanproject":"web experience"===e?i="experiencebuilder":"web experience template"===e?i="webexperiencetemplate":"experience builder widget"===e?i="experiencebuilderwidget":"experience builder widget package"===e?i="experiencebuilderwidgetpackage":"workflow"===e?i="workflow":"kernel gateway connection"===e?i="kernelgatewayconnection":"insights script"===e?i="insightsscript":"hub initiative template"===e?i="hubinitiativetemplate":"storymap theme"===e?i="storymaptheme":"knowledge graph"===e?i="knowledgegraph":"knowledge graph layer"===e?i="knowledgegraphlayer":"knowledge studio project"===e?i="knowledgestudio":"native application"===e?i="nativeapp":"native application installer"===e?i="nativeappinstaller":"web link chart"===e?i="linkchart":"knowledge graph web investigation"===e?i="investigation":"ogcfeatureserver"===e?i="features":"pro presentation"===e?i="propresentation":"pro project"===e?i="proproject":"insights workbook package"===e?i="insightsworkbookpackage":"apache parquet"===e?i="apacheparquet":"notebook code snippet library"===e?i="notebookcodesnippets":"suitability model"===e?i="suitabilitymodel":"esri classifier definition"===e?i="classifierdefinition":"esri classification schema"===e?i="classificationschema":"insights data engineering workbook"===e?i="dataengineeringworkbook":"insights data engineering model"===e?i="dataengineeringmodel":"deep learning studio project"===e?i="deeplearningproject":"discussion"===e?i="discussion":"allsource project"===e?i="allsourceproject":"api key"===e?i="apikey":"data pipeline"===e?i="datapipelines":"group layer"===e?(d=t.includes("Map"),i=d?"layergroup2d":"layergroup"):i="media layer"===e?"onlinemedialayer":"form"===e?t.includes("Survey123")?"survey":"datafilesgray":"csv"===e?"csv":"image"===e?"image":"maps",i?(0,o.s)("esri/images/portal/"+i+"16.png"):null}get isLayer(){return null!=this.type&&_.has(this.type)}get itemCdnUrl(){return(0,x.a)(this.itemUrl)}get itemPageUrl(){const e=this.portal?.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){const e=this.portal?.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal?.normalizeUrl(`${e}/info/${t}?f=json`)??null:null}get userItemUrl(){const e=this.portal?.restUrl;if(!e)return null;const t=this.owner||this.portal?.user?.username;return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=g.A.getDefault()),i=t.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:null!=e?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(i),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}},i=e instanceof M?e.rating:e;return null==i||isNaN(i)||"number"!=typeof e||(t.query.rating=i),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new M({rating:i,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,n.o8)(this.applicationProxies),avgRating:this.avgRating,categories:(0,n.o8)(this.categories),classification:(0,n.o8)(this.classification),created:(0,n.o8)(this.created),culture:this.culture,description:this.description,extent:(0,n.o8)(this.extent),groupCategories:(0,n.o8)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,n.o8)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,n.o8)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,n.o8)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,n.o8)(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new I({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON();for(const t of["tags","typeKeywords","categories"])e[t]=e[t]?.join(", ");for(const t of["extent","classification"]){const i=e[t];i&&(e[t]=JSON.stringify(i))}return e}async deleteRating(){await this.portal.request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json",t=arguments.length>1?arguments[1]:void 0;return this.portal.request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return null!=t.rating?(t.created=new Date(t.created),new M(t)):null}fetchRelatedItems(e,t){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},I)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.applicationProxies&&!Object.hasOwn(e,"appProxies")&&(this.applicationProxies=null),this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e?.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new a.A("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new a.A("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:i}=this;await t.signIn();const{copyResources:r,folder:o,tags:s,title:n}=e||{},l={method:"post",query:{copyPrivateResources:"all"===r,folder:"string"==typeof o?o:o?.id,includeResources:!!r,tags:s?.join(","),title:n}},{itemId:p}=await t.request(`${i}/copy`,l);return new I({id:p,portal:t})}updateThumbnail(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r={method:"post"};if("string"==typeof t)(0,p.DB)(t)?r.query={data:t}:r.query={url:(0,p.s2)(t)},null!=i&&(r.query.filename=i);else{const e=new FormData;null!=i?e.append("file",t,i):e.append("file",t),r.body=e}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,r).then((()=>this.reload()))})):Promise.reject(new a.A("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;const{fetchResources:r}=await i.e(33106).then(i.bind(i,33106));return r(this,e,t)}async addResource(e,t,r){const{addOrUpdateResources:o}=await i.e(33106).then(i.bind(i,33106));return e.portalItem=this,await o(this,[{resource:e,content:t,compress:r?.compress,access:r?.access}],"add",r),e}async removeResource(e,t){const{removeResource:r}=await i.e(33106).then(i.bind(i,33106));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new a.A("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r(this,e,t)}async removeAllResources(e){const{removeAllResources:t}=await i.e(33106).then(i.bind(i,33106));return t(this,e)}resourceFromPath(e){return new k({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:(0,n.o8)(this.categories),classification:(0,n.o8)(this.classification),created:this.created?.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified?.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,n.o8)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,n.o8)(this.typeKeywords),url:this.url};return(0,n.oy)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new I({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,r._)([(0,c.MZ)({type:["private","shared","org","public"]})],U.prototype,"access",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"accessInformation",void 0),(0,r._)([(0,c.MZ)({type:String})],U.prototype,"apiKey",void 0),(0,r._)([(0,c.MZ)({json:{read:{source:"appProxies"}}})],U.prototype,"applicationProxies",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"avgRating",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"categories",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"classification",void 0),(0,r._)([(0,c.MZ)({type:Date})],U.prototype,"created",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"culture",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"description",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"displayName",null),(0,r._)([(0,c.MZ)({type:m.A})],U.prototype,"extent",void 0),(0,r._)([(0,u.w)("extent")],U.prototype,"readExtent",null),(0,r._)([(0,c.MZ)()],U.prototype,"groupCategories",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"iconUrl",null),(0,r._)([(0,c.MZ)()],U.prototype,"id",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"isLayer",null),(0,r._)([(0,c.MZ)({type:Boolean,readOnly:!0})],U.prototype,"isOrgItem",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"itemControl",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"itemPageUrl",null),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"itemUrl",null),(0,r._)([(0,c.MZ)()],U.prototype,"licenseInfo",void 0),(0,r._)([(0,c.MZ)({type:Date})],U.prototype,"modified",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"name",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"numComments",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"numRatings",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"numViews",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"owner",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"ownerFolder",void 0),(0,r._)([(0,c.MZ)({type:g.A})],U.prototype,"portal",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"screenshots",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"size",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"snippet",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"sourceJSON",void 0),(0,r._)([(0,c.MZ)({type:String})],U.prototype,"sourceUrl",void 0),(0,r._)([(0,c.MZ)({type:String})],U.prototype,"spatialReference",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"tags",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"thumbnail",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"thumbnailUrl",null),(0,r._)([(0,c.MZ)()],U.prototype,"title",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"type",void 0),(0,r._)([(0,c.MZ)()],U.prototype,"typeKeywords",void 0),(0,r._)([(0,c.MZ)({type:String,json:{read(e,t){if(Z.has(t.type)){const t=this.portal?.restUrl;e||=t&&this.id?`${t}/content/items/${this.id}/data`:null}return e}}})],U.prototype,"url",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],U.prototype,"userItemUrl",null),U=I=(0,r._)([(0,h.$)("esri.portal.PortalItem")],U);const O=U}}]);
//# sourceMappingURL=70652.5dfe3f0d.chunk.js.map
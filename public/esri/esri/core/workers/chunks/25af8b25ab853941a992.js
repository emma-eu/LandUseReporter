"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8948],{13874:(t,e,i)=>{i.d(e,{A:()=>it});var o=i(90237),s=i(69540),r=i(5503),n=i(25482),l=i(4718),p=i(53966),a=i(74887),d=i(10107),c=i(79901),u=i(36005),y=i(40608),h=i(43937),f=i(56507),v=i(30524),_=i(89893),m=i(84424),w=i(80737),A=i(96808),x=i(66159),M=i(67336),I=i(92094),g=i(23721),Z=i(47582);const b={base:null,key:"type",typeMap:{attachment:_.A,media:M.A,text:g.A,expression:A.A,field:x.A,relationship:I.A,utilityNetworkAssociations:Z.A}},j={base:null,key:"type",typeMap:{attachment:_.A,media:M.A,text:g.A,expression:A.A,field:x.A,relationship:I.A}};var F,N=i(16086),R=i(41227);i(44208),i(87811);let S=F=class extends n.A{constructor(t){super(t),this.returnTopmostRaster=null,this.showNoDataRecords=null}clone(){return new F({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})}};(0,o._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],S.prototype,"returnTopmostRaster",void 0),(0,o._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],S.prototype,"showNoDataRecords",void 0),S=F=(0,o._)([(0,y.$)("esri.popup.LayerOptions")],S);const C=S;var O,T=i(49852);let $=O=class extends n.A{constructor(t){super(t),this.showRelatedRecords=null,this.orderByFields=null}clone(){return new O({showRelatedRecords:this.showRelatedRecords,orderByFields:this.orderByFields?(0,l.o8)(this.orderByFields):null})}};(0,o._)([(0,d.MZ)({type:Boolean,json:{write:!0}})],$.prototype,"showRelatedRecords",void 0),(0,o._)([(0,d.MZ)({type:[T.A],json:{write:!0}})],$.prototype,"orderByFields",void 0),$=O=(0,o._)([(0,y.$)("esri.popup.RelatedRecordsInfo")],$);const E=$;var B,k=i(58280),J=i(69622),q=i(4902);let L=B=class extends(q.A.IdentifiableMixin(J.A)){constructor(t){super(t),this.active=!1,this.className=null,this.disabled=!1,this.icon=null,this.id=null,this.indicator=!1,this.title=null,this.type=null,this.visible=!0}clone(){return new B({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};(0,o._)([(0,d.MZ)()],L.prototype,"active",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"className",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"disabled",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"icon",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"id",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"indicator",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"title",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"type",void 0),(0,o._)([(0,d.MZ)()],L.prototype,"visible",void 0),L=B=(0,o._)([(0,y.$)("esri.support.actions.ActionBase")],L);const U=L;var z;let P=z=class extends U{constructor(t){super(t),this.image=null,this.type="button"}clone(){return new z({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})}};(0,o._)([(0,d.MZ)()],P.prototype,"image",void 0),P=z=(0,o._)([(0,y.$)("esri.support.actions.ActionButton")],P);const D=P;var K;let V=K=class extends U{constructor(t){super(t),this.image=null,this.type="toggle",this.value=!1}clone(){return new K({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};(0,o._)([(0,d.MZ)()],V.prototype,"image",void 0),(0,o._)([(0,d.MZ)()],V.prototype,"value",void 0),V=K=(0,o._)([(0,y.$)("esri.support.actions.ActionToggle")],V);const W=V,G="relationships/",H="expression/",X=r.A.ofType({key:"type",defaultKeyValue:"button",base:U,typeMap:{button:D,toggle:W}}),Q={base:m.A,key:"type",typeMap:{media:M.A,custom:w.A,text:g.A,attachments:_.A,fields:x.A,expression:A.A,relationship:I.A,utilityNetworkAssociations:Z.A}},Y=new Set(["attachments","fields","media","text","expression","relationship"]),tt=new Set([...Y,"utility-network-associations"]);let et=class extends(s.A.ClonableMixin(n.A)){constructor(){super(...arguments),this.actions=null,this.content="",this.expressionInfos=null,this.fieldInfos=null,this.layerOptions=null,this.lastEditInfoEnabled=!0,this.outFields=null,this.overwriteActions=!1,this.returnGeometry=!1,this.title=""}castContent(t){return Array.isArray(t)?t.map((t=>(0,f.aq)(Q,t))):"string"==typeof t||"function"==typeof t||t instanceof HTMLElement||(0,a.$X)(t)?t:(p.A.getLogger(this).error("content error","unsupported content value",{value:t}),null)}readContent(t,e){const{popupElements:i}=e;return Array.isArray(i)&&i.length>0?this._readPopupInfoElements(e.description,e.mediaInfos,i):this._readPopupInfo(e)}writeWebSceneContent(t,e,i,o){this._writePopupTemplateContent(t,e,o)}writeWebMapContent(t,e,i,o){this._writePopupTemplateContent(t,e,o)}writeFieldInfos(t,e,i,o){const{content:s}=this,r=Array.isArray(s)?s:null;if(t){const i=r?r.filter((t=>"fields"===t.type)):[],s=i.length&&i.every((t=>t.fieldInfos?.length));e.fieldInfos=t.filter(Boolean).map((t=>{const e=t.toJSON(o);return s&&(e.visible=!1),e}))}if(r)for(const t of r)"fields"===t.type&&this._writeFieldsContent(t,e)}writeLayerOptions(t,e,i,o){e[i]=!t||null===t.showNoDataRecords&&null===t.returnTopmostRaster?null:t.toJSON(o)}writeTitle(t,e){e.title=t||""}async collectRequiredFields(t,e){const i=this.expressionInfos||[];await this._collectExpressionInfoFields(t,e,[...i,...this._getContentExpressionInfos(this.content,i)]),(0,v._w)(t,e,[...this.outFields||[],...this._getActionsFields(this.actions),...this._getTitleFields(this.title),...this._getContentFields(this.content)])}async getRequiredFields(t){const e=new Set;return await this.collectRequiredFields(e,t),[...e].sort()}_writePopupTemplateContent(t,e,i){"string"!=typeof t?Array.isArray(t)&&(e.popupElements=t.filter((t=>"web-scene"===i?.origin?Y.has(t.type):tt.has(t.type))).map((t=>t?.toJSON(i))),e.popupElements.forEach((t=>{"attachments"===t.type?this._writeAttachmentContent(e):"media"===t.type?this._writeMediaContent(t,e):"text"===t.type?this._writeTextContent(t,e):"relationship"===t.type&&this._writeRelationshipContent(t,e)}))):e.description=t}_writeFieldsContent(t,e){if(!Array.isArray(t.fieldInfos)||!t.fieldInfos.length)return;const i=(0,l.o8)(t.fieldInfos);Array.isArray(e.fieldInfos)?i.forEach((t=>{const i=e.fieldInfos.find((e=>e.fieldName?.toLowerCase()===t.fieldName?.toLowerCase()));i?i.visible=!0:e.fieldInfos.push(t)})):e.fieldInfos=i}_writeAttachmentContent(t){t.showAttachments||(t.showAttachments=!0)}_writeRelationshipContent(t,e){const i=t.orderByFields?.map((e=>this._toFieldOrderJSON(e,t.relationshipId)))||[],o=[...e.relatedRecordsInfo?.orderByFields||[],...i];e.relatedRecordsInfo={showRelatedRecords:!0,...o?.length&&{orderByFields:o}}}_writeTextContent(t,e){!e.description&&t.text&&(e.description=t.text)}_writeMediaContent(t,e){if(!Array.isArray(t.mediaInfos)||!t.mediaInfos.length)return;const i=(0,l.o8)(t.mediaInfos);Array.isArray(e.mediaInfos)?e.mediaInfos=[...e.mediaInfos,...i]:e.mediaInfos=i}_readPopupInfoElements(t,e,i){const o={description:!1,mediaInfos:!1};return i.map((i=>"media"===i.type?(i.mediaInfos||!e||o.mediaInfos||(i.mediaInfos=e,o.mediaInfos=!0),M.A.fromJSON(i)):"text"===i.type?(i.text||!t||o.description||(i.text=t,o.description=!0),g.A.fromJSON(i)):"attachments"===i.type?_.A.fromJSON(i):"fields"===i.type?x.A.fromJSON(i):"expression"===i.type?A.A.fromJSON(i):"relationship"===i.type?I.A.fromJSON(i):"utilityNetworkAssociations"===i.type?Z.A.fromJSON(i):void 0)).filter(Boolean)}_toRelationshipContent(t){const{field:e,order:i}=t;if(!e?.startsWith(G))return null;const o=e.replace(G,"").split("/");if(2!==o.length)return null;const s=parseInt(o[0],10),r=o[1];return!Number.isNaN(s)&&r?I.A.fromJSON({relationshipId:s,orderByFields:[{field:r,order:i}]}):null}_toFieldOrderJSON(t,e){const{order:i,field:o}=t;return{field:`${G}${e}/${o}`,order:i}}_readPopupInfo({description:t,mediaInfos:e,showAttachments:i,relatedRecordsInfo:o={showRelatedRecords:!1}}){const s=[];t?s.push(new g.A({text:t})):s.push(new x.A),Array.isArray(e)&&e.length&&s.push(M.A.fromJSON({mediaInfos:e})),i&&s.push(_.A.fromJSON({displayType:"auto"}));const{showRelatedRecords:r,orderByFields:n}=o;return r&&n?.length&&n.forEach((t=>{const e=this._toRelationshipContent(t);e&&s.push(e)})),s.length?s:t}_getContentElementFields(t){const e=t?.type;if("attachments"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)];if("custom"===e)return t.outFields||[];if("fields"===e)return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...this._getFieldInfoFields(t.fieldInfos??this.fieldInfos)];if("media"===e){const e=t.mediaInfos||[];return[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description),...e.reduce(((t,e)=>[...t,...this._getMediaInfoFields(e)]),[])]}return"text"===e?this._extractFieldNames(t.text):"relationship"===e||"utility-network-associations"===e?[...this._extractFieldNames(t.title),...this._extractFieldNames(t.description)]:[]}_getMediaInfoFields(t){const{caption:e,title:i,value:o}=t,s=o||{},{fields:r,normalizeField:n,tooltipField:l,sourceURL:p,linkURL:a}=s,d=[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(p),...this._extractFieldNames(a),...r??[]];return n&&d.push(n),l&&d.push(l),d}_getContentExpressionInfos(t,e){return Array.isArray(t)?t.reduce(((t,e)=>[...t,..."expression"===e.type&&e.expressionInfo?[e.expressionInfo]:[]]),e):[]}_getContentFields(t){return"string"==typeof t?this._extractFieldNames(t):Array.isArray(t)?t.reduce(((t,e)=>[...t,...this._getContentElementFields(e)]),[]):[]}async _collectExpressionInfoFields(t,e,i){i&&await Promise.all(i.map((i=>(0,v.Dx)(t,e,i.expression))))}_getFieldInfoFields(t){return t?t.filter((({fieldName:t,visible:e})=>!(void 0!==e&&!e||!t||t.startsWith(G)||t.startsWith(H)))).map((t=>t.fieldName)):[]}_getActionsFields(t){return t?t.toArray().reduce(((t,e)=>[...t,...this._getActionFields(e)]),[]):[]}_getActionFields(t){const{className:e,title:i,type:o}=t,s="button"===o||"toggle"===o?t.image:"";return[...this._extractFieldNames(i),...this._extractFieldNames(e),...this._extractFieldNames(s)]}_getTitleFields(t){return"string"==typeof t?this._extractFieldNames(t):[]}_extractFieldNames(t){return(0,v.nw)(t).filter((t=>!(0===t.indexOf(G)||0===t.indexOf(H))))}};(0,o._)([(0,d.MZ)({type:X})],et.prototype,"actions",void 0),(0,o._)([(0,d.MZ)()],et.prototype,"content",void 0),(0,o._)([(0,c.w)("content")],et.prototype,"castContent",null),(0,o._)([(0,u.w)("content",["description","fieldInfos","popupElements","mediaInfos","showAttachments","relatedRecordsInfo"])],et.prototype,"readContent",null),(0,o._)([(0,h.K)("web-scene","content",{popupElements:{type:r.A.ofType(j)},showAttachments:{type:Boolean},mediaInfos:{type:r.A.ofType(k.g)},description:{type:String},relatedRecordsInfo:{type:E}})],et.prototype,"writeWebSceneContent",null),(0,o._)([(0,h.K)("content",{popupElements:{type:r.A.ofType(b)},showAttachments:{type:Boolean},mediaInfos:{type:r.A.ofType(k.g)},description:{type:String},relatedRecordsInfo:{type:E}})],et.prototype,"writeWebMapContent",null),(0,o._)([(0,d.MZ)({type:[N.A],json:{write:!0}})],et.prototype,"expressionInfos",void 0),(0,o._)([(0,d.MZ)({type:[R.A]})],et.prototype,"fieldInfos",void 0),(0,o._)([(0,h.K)("fieldInfos")],et.prototype,"writeFieldInfos",null),(0,o._)([(0,d.MZ)({type:C})],et.prototype,"layerOptions",void 0),(0,o._)([(0,h.K)("layerOptions")],et.prototype,"writeLayerOptions",null),(0,o._)([(0,d.MZ)({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],et.prototype,"lastEditInfoEnabled",void 0),(0,o._)([(0,d.MZ)()],et.prototype,"outFields",void 0),(0,o._)([(0,d.MZ)()],et.prototype,"overwriteActions",void 0),(0,o._)([(0,d.MZ)()],et.prototype,"returnGeometry",void 0),(0,o._)([(0,d.MZ)({json:{type:String}})],et.prototype,"title",void 0),(0,o._)([(0,h.K)("title")],et.prototype,"writeTitle",null),et=(0,o._)([(0,y.$)("esri.PopupTemplate")],et);const it=et},4902:(t,e,i)=>{i.d(e,{A:()=>a});var o=i(90237),s=i(40608);let r=0;const n=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+r++})}};return e=(0,o._)([(0,s.$)("esri.core.Identifiable")],e),e};let l=class extends(n(class{})){};var p;l=(0,o._)([(0,s.$)("esri.core.Identifiable")],l),(p=l||(l={})).IdentifiableMixin=n,p.NumericIdentifiableMixin=t=>{let e=class extends t{constructor(...t){super(...t),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:r++})}};return e=(0,o._)([(0,s.$)("esri.core.Identifiable.NumericIdentifiable")],e),e};const a=l},16086:(t,e,i)=>{i.d(e,{A:()=>a});var o,s=i(90237),r=i(25482),n=i(10107),l=(i(44208),i(53966),i(87811),i(40608));let p=o=class extends r.A{constructor(t){super(t),this.name=null,this.title=null,this.expression=null,this.returnType=null}clone(){return new o({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,s._)([(0,n.MZ)({type:["string","number"],json:{write:!0}})],p.prototype,"returnType",void 0),p=o=(0,s._)([(0,l.$)("esri.popup.ExpressionInfo")],p);const a=p},41227:(t,e,i)=>{i.d(e,{A:()=>u});var o,s=i(90237),r=i(66552),n=i(25482),l=i(10107),p=(i(44208),i(53966),i(87811),i(93223)),a=i(40608),d=i(68780);let c=o=class extends n.A{constructor(t){super(t),this.fieldName=null,this.format=void 0,this.isEditable=!0,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new o({fieldName:this.fieldName,format:this.format?.clone(),isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],c.prototype,"fieldName",void 0),(0,s._)([(0,l.MZ)({type:d.A,json:{write:!0}})],c.prototype,"format",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:{alwaysWriteDefaults:!0},default:!0}})],c.prototype,"isEditable",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,s._)([(0,p.e)(new r.J({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],c.prototype,"stringFieldOption",void 0),(0,s._)([(0,l.MZ)({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],c.prototype,"statisticType",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],c.prototype,"tooltip",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"visible",void 0),c=o=(0,s._)([(0,a.$)("esri.popup.FieldInfo")],c);const u=c},89893:(t,e,i)=>{i.d(e,{A:()=>h});var o=i(90237),s=i(69540),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(84424),p=i(66552),a=i(25482);const d=new p.J({asc:"ascending",desc:"descending"});let c=class extends(s.A.ClonableMixin(a.A)){constructor(t){super(t),this.field=null,this.order="ascending"}};(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,o._)([(0,r.MZ)({type:d.apiValues,json:{type:d.jsonValues,read:d.read,write:d.write}})],c.prototype,"order",void 0),c=(0,o._)([(0,n.$)("esri.popup.support.AttachmentsOrderByInfo")],c);const u=c;let y=class extends(s.A.ClonableMixin(l.A)){constructor(t){super(t),this.description=null,this.displayType="auto",this.orderByFields=null,this.title=null,this.type="attachments"}};(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,o._)([(0,r.MZ)({type:["auto","preview","list"],json:{write:!0}})],y.prototype,"displayType",void 0),(0,o._)([(0,r.MZ)({type:[u],json:{write:!0}})],y.prototype,"orderByFields",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],y.prototype,"title",void 0),(0,o._)([(0,r.MZ)({type:["attachments"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],y.prototype,"type",void 0),y=(0,o._)([(0,n.$)("esri.popup.content.AttachmentsContent")],y);const h=y},71468:(t,e,i)=>{i.d(e,{A:()=>d});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(39740),p=i(38152);let a=o=class extends l.A{constructor(t){super(t),this.type="bar-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};(0,s._)([(0,r.MZ)({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:{writer:p.U.write,isRequired:!0}}})],a.prototype,"type",void 0),a=o=(0,s._)([(0,n.$)("esri.popup.content.BarChartMediaInfo")],a);const d=a},81663:(t,e,i)=>{i.d(e,{A:()=>d});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(39740),p=i(38152);let a=o=class extends l.A{constructor(t){super(t),this.type="column-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};(0,s._)([(0,r.MZ)({type:["column-chart"],readOnly:!0,json:{type:["columnchart"],read:!1,write:{writer:p.U.write,isRequired:!0}}})],a.prototype,"type",void 0),a=o=(0,s._)([(0,n.$)("esri.popup.content.ColumnChartMediaInfo")],a);const d=a},84424:(t,e,i)=>{i.d(e,{A:()=>p});var o=i(90237),s=i(25482),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608));let l=class extends s.A{constructor(t){super(t),this.type=null}};(0,o._)([(0,r.MZ)({type:["attachments","custom","fields","media","text","expression","relationship","utility-network-associations"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,o._)([(0,n.$)("esri.popup.content.Content")],l);const p=l},80737:(t,e,i)=>{i.d(e,{A:()=>d});var o,s=i(90237),r=i(4718),n=i(10107),l=(i(44208),i(53966),i(40608)),p=i(84424);let a=o=class extends p.A{constructor(t){super(t),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new o({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?(0,r.o8)(this.outFields):null})}};(0,s._)([(0,n.MZ)()],a.prototype,"creator",void 0),(0,s._)([(0,n.MZ)()],a.prototype,"destroyer",void 0),(0,s._)([(0,n.MZ)()],a.prototype,"outFields",void 0),(0,s._)([(0,n.MZ)({type:["custom"],readOnly:!0})],a.prototype,"type",void 0),a=o=(0,s._)([(0,l.$)("esri.popup.content.CustomContent")],a);const d=a},96808:(t,e,i)=>{i.d(e,{A:()=>y});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(25482);let p=o=class extends l.A{constructor(t){super(t),this.title=null,this.expression=null,this.returnType="dictionary"}clone(){return new o({title:this.title,expression:this.expression})}};(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,s._)([(0,r.MZ)({type:["dictionary"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"returnType",void 0),p=o=(0,s._)([(0,n.$)("esri.popup.ElementExpressionInfo")],p);const a=p;var d,c=i(84424);let u=d=class extends c.A{constructor(t){super(t),this.expressionInfo=null,this.type="expression"}clone(){return new d({expressionInfo:this.expressionInfo?.clone()})}};(0,s._)([(0,r.MZ)({type:a,json:{write:!0}})],u.prototype,"expressionInfo",void 0),(0,s._)([(0,r.MZ)({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=d=(0,s._)([(0,n.$)("esri.popup.content.ExpressionContent")],u);const y=u},66159:(t,e,i)=>{i.d(e,{A:()=>u});var o,s=i(90237),r=i(4718),n=i(10107),l=(i(44208),i(53966),i(40608)),p=i(43937),a=i(41227),d=i(84424);let c=o=class extends d.A{constructor(t){super(t),this.attributes=null,this.description=null,this.fieldInfos=null,this.title=null,this.type="fields"}writeFieldInfos(t,e){e.fieldInfos=t&&t.map((t=>t.toJSON()))}clone(){return new o((0,r.o8)({attributes:this.attributes,description:this.description,fieldInfos:this.fieldInfos,title:this.title}))}};(0,s._)([(0,n.MZ)({type:Object,json:{write:!0}})],c.prototype,"attributes",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,s._)([(0,n.MZ)({type:[a.A]})],c.prototype,"fieldInfos",void 0),(0,s._)([(0,p.K)("fieldInfos")],c.prototype,"writeFieldInfos",null),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],c.prototype,"title",void 0),(0,s._)([(0,n.MZ)({type:["fields"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],c.prototype,"type",void 0),c=o=(0,s._)([(0,l.$)("esri.popup.content.FieldsContent")],c);const u=c},96922:(t,e,i)=>{i.d(e,{A:()=>y});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(22756),p=i(25482);let a=o=class extends p.A{constructor(t){super(t),this.linkURL=null,this.sourceURL=null}clone(){return new o({linkURL:this.linkURL,sourceURL:this.sourceURL})}};(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],a.prototype,"linkURL",void 0),(0,s._)([(0,r.MZ)({type:String,json:{write:{isRequired:!0}}})],a.prototype,"sourceURL",void 0),a=o=(0,s._)([(0,n.$)("esri.popup.content.support.ImageMediaInfoValue")],a);const d=a;var c;let u=c=class extends l.A{constructor(t){super(t),this.refreshInterval=0,this.type="image",this.value=void 0}clone(){return new c({altText:this.altText,title:this.title,caption:this.caption,refreshInterval:this.refreshInterval,value:this.value?.clone()})}};(0,s._)([(0,r.MZ)({type:Number,json:{write:!0}})],u.prototype,"refreshInterval",void 0),(0,s._)([(0,r.MZ)({type:["image"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],u.prototype,"type",void 0),(0,s._)([(0,r.MZ)({type:d,json:{write:{isRequired:!0}}})],u.prototype,"value",void 0),u=c=(0,s._)([(0,n.$)("esri.popup.content.ImageMediaInfo")],u);const y=u},92799:(t,e,i)=>{i.d(e,{A:()=>d});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(39740),p=i(38152);let a=o=class extends l.A{constructor(t){super(t),this.type="line-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};(0,s._)([(0,r.MZ)({type:["line-chart"],readOnly:!0,json:{type:["linechart"],read:!1,write:{writer:p.U.write,isRequired:!0}}})],a.prototype,"type",void 0),a=o=(0,s._)([(0,n.$)("esri.popup.content.LineChartMediaInfo")],a);const d=a},67336:(t,e,i)=>{i.d(e,{A:()=>m});var o,s=i(90237),r=i(4718),n=i(10107),l=(i(44208),i(53966),i(36005)),p=i(40608),a=i(43937),d=i(71468),c=i(81663),u=i(84424),y=i(96922),h=i(92799),f=i(53535),v=i(58280);let _=o=class extends u.A{constructor(t){super(t),this.activeMediaInfoIndex=null,this.attributes=null,this.description=null,this.mediaInfos=null,this.title=null,this.type="media"}readMediaInfos(t){return t&&t.map((t=>"image"===t.type?y.A.fromJSON(t):"barchart"===t.type?d.A.fromJSON(t):"columnchart"===t.type?c.A.fromJSON(t):"linechart"===t.type?h.A.fromJSON(t):"piechart"===t.type?f.A.fromJSON(t):void 0)).filter(Boolean)}writeMediaInfos(t,e){e.mediaInfos=t&&t.map((t=>t.toJSON()))}clone(){return new o((0,r.o8)({activeMediaInfoIndex:this.activeMediaInfoIndex,attributes:this.attributes,description:this.description,mediaInfos:this.mediaInfos,title:this.title}))}};(0,s._)([(0,n.MZ)()],_.prototype,"activeMediaInfoIndex",void 0),(0,s._)([(0,n.MZ)({type:Object,json:{write:!0}})],_.prototype,"attributes",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],_.prototype,"description",void 0),(0,s._)([(0,n.MZ)({types:[v.g]})],_.prototype,"mediaInfos",void 0),(0,s._)([(0,l.w)("mediaInfos")],_.prototype,"readMediaInfos",null),(0,s._)([(0,a.K)("mediaInfos")],_.prototype,"writeMediaInfos",null),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],_.prototype,"title",void 0),(0,s._)([(0,n.MZ)({type:["media"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],_.prototype,"type",void 0),_=o=(0,s._)([(0,p.$)("esri.popup.content.MediaContent")],_);const m=_},53535:(t,e,i)=>{i.d(e,{A:()=>d});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(39740),p=i(38152);let a=o=class extends l.A{constructor(t){super(t),this.type="pie-chart"}clone(){return new o({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};(0,s._)([(0,r.MZ)({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:{writer:p.U.write,isRequired:!0}}})],a.prototype,"type",void 0),a=o=(0,s._)([(0,n.$)("esri.popup.content.PieChartMediaInfo")],a);const d=a},92094:(t,e,i)=>{i.d(e,{A:()=>c});var o=i(90237),s=i(69540),r=i(10107),n=i(56507),l=(i(44208),i(87811),i(40608)),p=i(84424),a=i(49852);let d=class extends(s.A.ClonableMixin(p.A)){constructor(t){super(t),this.description=null,this.displayCount=null,this.displayType="list",this.orderByFields=null,this.relationshipId=null,this.title=null,this.type="relationship"}};(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],d.prototype,"description",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{type:n.jz,write:!0}})],d.prototype,"displayCount",void 0),(0,o._)([(0,r.MZ)({type:["list"],json:{write:{isRequired:!0}}})],d.prototype,"displayType",void 0),(0,o._)([(0,r.MZ)({type:[a.A],json:{write:!0}})],d.prototype,"orderByFields",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{type:n.jz,write:{isRequired:!0}}})],d.prototype,"relationshipId",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],d.prototype,"title",void 0),(0,o._)([(0,r.MZ)({type:["relationship"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],d.prototype,"type",void 0),d=(0,o._)([(0,l.$)("esri.popup.content.RelationshipContent")],d);const c=d},23721:(t,e,i)=>{i.d(e,{A:()=>a});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(84424);let p=o=class extends l.A{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new o({text:this.text})}};(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],p.prototype,"text",void 0),(0,s._)([(0,r.MZ)({type:["text"],readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],p.prototype,"type",void 0),p=o=(0,s._)([(0,n.$)("esri.popup.content.TextContent")],p);const a=p},47582:(t,e,i)=>{i.d(e,{A:()=>u});var o=i(90237),s=i(69540),r=i(10107),n=i(56507),l=(i(44208),i(87811),i(93223)),p=i(40608),a=i(84424),d=i(83342);let c=class extends(s.A.ClonableMixin(a.A)){constructor(t){super(t),this.description=null,this.displayCount=null,this.title=null,this.associationTypes=[],this.type="utility-network-associations"}};(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,o._)([(0,r.MZ)({type:Number,json:{type:n.jz,write:!0}})],c.prototype,"displayCount",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],c.prototype,"title",void 0),(0,o._)([(0,r.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"associationTypes",void 0),(0,o._)([(0,l.e)({utilityNetworkAssociations:"utility-network-associations"})],c.prototype,"type",void 0),c=(0,o._)([(0,p.$)("esri.popup.content.UtilityNetworkAssociationsContent")],c);const u=c},39740:(t,e,i)=>{i.d(e,{A:()=>w});var o,s=i(90237),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608)),l=i(22756),p=i(68197),a=i(25482),d=i(4718),c=i(56507),u=i(69622);let y=o=class extends u.A{constructor(t){super(t),this.color=null,this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new o({color:this.color?.clone(),fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};(0,s._)([(0,r.MZ)()],y.prototype,"color",void 0),(0,s._)([(0,r.MZ)()],y.prototype,"fieldName",void 0),(0,s._)([(0,r.MZ)()],y.prototype,"tooltip",void 0),(0,s._)([(0,r.MZ)()],y.prototype,"value",void 0),y=o=(0,s._)([(0,n.$)("esri.popup.content.support.ChartMediaInfoValueSeries")],y);const h=y;var f;let v=f=class extends a.A{constructor(t){super(t),this.colors=null,this.fields=[],this.normalizeField=null,this.series=[],this.tooltipField=null}clone(){return new f({colors:(0,d.o8)(this.colors),fields:(0,d.o8)(this.fields),normalizeField:this.normalizeField,series:(0,d.o8)(this.series),tooltipField:this.tooltipField})}};(0,s._)([(0,r.MZ)({type:[p.A],json:{type:[[c.jz]],write:!0}})],v.prototype,"colors",void 0),(0,s._)([(0,r.MZ)({type:[String],json:{write:{isRequired:!0}}})],v.prototype,"fields",void 0),(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],v.prototype,"normalizeField",void 0),(0,s._)([(0,r.MZ)({type:[h],json:{read:!1}})],v.prototype,"series",void 0),(0,s._)([(0,r.MZ)({type:String,json:{write:!0}})],v.prototype,"tooltipField",void 0),v=f=(0,s._)([(0,n.$)("esri.popup.content.support.ChartMediaInfoValue")],v);const _=v;let m=class extends l.A{constructor(t){super(t),this.type=null,this.value=void 0}};(0,s._)([(0,r.MZ)({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],m.prototype,"type",void 0),(0,s._)([(0,r.MZ)({type:_,json:{write:{isRequired:!0}}})],m.prototype,"value",void 0),m=(0,s._)([(0,n.$)("esri.popup.content.mixins.ChartMediaInfo")],m);const w=m},22756:(t,e,i)=>{i.d(e,{A:()=>p});var o=i(90237),s=i(25482),r=i(10107),n=(i(44208),i(53966),i(87811),i(40608));let l=class extends s.A{constructor(t){super(t),this.altText=null,this.caption="",this.title="",this.type=null}};(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],l.prototype,"altText",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],l.prototype,"caption",void 0),(0,o._)([(0,r.MZ)({type:String,json:{write:!0}})],l.prototype,"title",void 0),(0,o._)([(0,r.MZ)({type:["image","bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=(0,o._)([(0,n.$)("esri.popup.content.mixins.MediaInfo")],l);const p=l},38152:(t,e,i)=>{i.d(e,{U:()=>o});const o=(0,i(66552).O)()({barchart:"bar-chart",columnchart:"column-chart",linechart:"line-chart",piechart:"pie-chart"})},58280:(t,e,i)=>{i.d(e,{g:()=>p});var o=i(71468),s=i(81663),r=i(96922),n=i(92799),l=i(53535);const p={base:i(22756).A,key:"type",defaultKeyValue:"image",typeMap:{"bar-chart":o.A,"column-chart":s.A,"line-chart":n.A,"pie-chart":l.A,image:r.A}}},68780:(t,e,i)=>{i.d(e,{A:()=>u});var o=i(90237),s=i(69540),r=i(25482),n=i(10107),l=i(56507),p=(i(44208),i(87811),i(93223)),a=i(40608),d=i(97770);let c=class extends(s.A.ClonableMixin(r.A)){constructor(t){super(t),this.dateFormat=null,this.digitSeparator=!1,this.places=null}};(0,o._)([(0,p.e)(d._v)],c.prototype,"dateFormat",void 0),(0,o._)([(0,n.MZ)({type:Boolean,json:{write:!0}})],c.prototype,"digitSeparator",void 0),(0,o._)([(0,n.MZ)({type:l.jz,json:{write:!0}})],c.prototype,"places",void 0),c=(0,o._)([(0,a.$)("esri.popup.support.FieldInfoFormat")],c);const u=c},49852:(t,e,i)=>{i.d(e,{A:()=>a});var o,s=i(90237),r=i(25482),n=i(10107),l=(i(44208),i(53966),i(87811),i(40608));let p=o=class extends r.A{constructor(t){super(t),this.field=null,this.order=null}clone(){return new o({field:this.field,order:this.order})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,s._)([(0,n.MZ)({type:["asc","desc"],json:{write:!0}})],p.prototype,"order",void 0),p=o=(0,s._)([(0,l.$)("esri.popup.support.RelatedRecordsInfoFieldOrder")],p);const a=p},83342:(t,e,i)=>{i.d(e,{A:()=>d});var o=i(90237),s=i(69540),r=i(25482),n=i(10107),l=i(56507),p=(i(44208),i(87811),i(40608));let a=class extends(s.A.ClonableMixin(r.A)){constructor(t){super(t),this.title=null,this.description=null,this.type=null,this.associatedNetworkSourceId=null,this.associatedAssetGroup=null,this.associatedAssetType=null}};(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,o._)([(0,n.MZ)({type:String,json:{write:!0}})],a.prototype,"description",void 0),(0,o._)([(0,n.MZ)({type:["attachment","connectivity","container","content","structure"],json:{write:!0}})],a.prototype,"type",void 0),(0,o._)([(0,n.MZ)({type:Number,json:{type:l.jz,write:!0}})],a.prototype,"associatedNetworkSourceId",void 0),(0,o._)([(0,n.MZ)({type:Number,json:{type:l.jz,write:!0}})],a.prototype,"associatedAssetGroup",void 0),(0,o._)([(0,n.MZ)({type:Number,json:{type:l.jz,write:!0}})],a.prototype,"associatedAssetType",void 0),a=(0,o._)([(0,p.$)("esri.popup.support.UtilityNetworkAssociationType")],a);const d=a},78553:(t,e,i)=>{i.d(e,{D:()=>r,p:()=>s});var o=i(56507);function s(t){const e=(0,o.Vr)(100*(1-t));return Math.max(0,Math.min(e,100))}function r(t){const e=1-t/100;return Math.max(0,Math.min(e,1))}}}]);
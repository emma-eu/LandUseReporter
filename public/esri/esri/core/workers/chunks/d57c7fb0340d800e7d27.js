"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4473],{51624:(e,t,s)=>{s.d(t,{A:()=>c});var r,n,i=s(44208),o=s(69397),a=s(93687);(n=r||(r={}))[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown";const l=4294967296,u=new TextDecoder("utf-8"),d=(0,i.A)("safari")||(0,i.A)("ios")?6:(0,i.A)("ff")?12:32;class c{constructor(e,t,s=0,n=(e?e.byteLength:0)){this._tag=0,this._dataType=r.unknown,this._init(e,t,s,n)}_init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}get usedMemory(){return 64+(0,o.Qf)(this._data)}asUnsafe(){return this}clone(){return new c(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;if(e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return e;if(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return e;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();return e>>>1^-(1&e)}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getUint32(t+4,!0)*l;return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+e.getInt32(t+4,!0)*l;return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const n=this.getMessage(),i=e(n,t,s,r);return n.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=c.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){c.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case r.varint:this._decodeVarint();break;case r.fixed64:this._skip(8);break;case r.delimited:this._skip(this._getLength());break;case r.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,s=0,r=0;if(this._end-t>=10)do{if(r=e[t++],s|=127&r,!(128&r))break;if(r=e[t++],s|=(127&r)<<7,!(128&r))break;if(r=e[t++],s|=(127&r)<<14,!(128&r))break;if(r=e[t++],s|=(127&r)<<21,!(128&r))break;if(r=e[t++],s+=268435456*(127&r),!(128&r))break;if(r=e[t++],s+=34359738368*(127&r),!(128&r))break;if(r=e[t++],s+=4398046511104*(127&r),!(128&r))break;if(r=e[t++],s+=562949953421312*(127&r),!(128&r))break;if(r=e[t++],s+=72057594037927940*(127&r),!(128&r))break;if(r=e[t++],s+=0x8000000000000000*(127&r),!(128&r))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(r=e[t],128&r);)++t,s+=(127&r)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,s+=r*n}return this._pos=t,s}_decodeSVarint(){const e=this._data;let t,s=0,r=0;const n=1&e[this._pos];if(r=e[this._pos++],s|=127&r,!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<7,!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<14,!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s|=(127&r)<<21,!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s+=268435456*(127&r),!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s+=34359738368*(127&r),!(128&r))return n?-(s+1)/2:s/2;if(r=e[this._pos++],s+=4398046511104*(127&r),!(128&r))return n?-(s+1)/2:s/2;if(t=BigInt(s),r=e[this._pos++],t+=0x2000000000000n*BigInt(127&r),!(128&r))return Number(n?-(t+1n)/2n:t/2n);if(r=e[this._pos++],t+=0x100000000000000n*BigInt(127&r),!(128&r))return Number(n?-(t+1n)/2n:t/2n);if(r=e[this._pos++],t+=0x8000000000000000n*BigInt(127&r),!(128&r))return Number(n?-(t+1n)/2n:t/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==r.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>d){const r=e.subarray(t,s);return u.decode(r)}let r="",n="";for(let i=t;i<s;++i){const t=e[i];128&t?n+="%"+t.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(r+=decodeURIComponent(n)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}c.pool=new a.A(c,void 0,(e=>{e._data=null,e._dataView=null}))},79897:(e,t,s)=>{s.d(t,{U:()=>d});var r=s(90237),n=s(69622),i=s(36563),o=s(36708),a=s(11932),l=s(10107),u=s(40608);let d=class extends n.A{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(e,t,s={}){return this._installWatch(e,t,s,o.wB)}addWhen(e,t,s={}){return this._installWatch(e,t,s,o.z7)}addOnCollectionChange(e,t,{initial:s=!1,final:r=!1}={}){const n=++this._handleId;return this.addHandles([(0,o.on)(e,"after-changes",this._createSyncUpdatingCallback(),o.OH),(0,o.on)(e,"change",t,{onListenerAdd:s?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:r?e=>t({added:[],removed:e.toArray()}):void 0})],n),(0,i.hA)((()=>this.removeHandles(n)))}addPromise(e){if(null==e)return e;const t=++this._handleId;this.addHandles((0,i.hA)((()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this.hasHandles(c)||this._set("updating",!1))})),t),this._pendingPromises.add(e),this._set("updating",!0);const s=()=>this.removeHandles(t);return e.then(s,s),e}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(e,t,s={},r){const n=++this._handleId;s.sync||this._installSyncUpdatingWatch(e,n);const o=r(e,t,s);return this.addHandles(o,n),(0,i.hA)((()=>this.removeHandles(n)))}_installSyncUpdatingWatch(e,t){const s=this._createSyncUpdatingCallback(),r=(0,o.wB)(e,s,{sync:!0,equals:()=>!1});return this.addHandles(r,t),r}_createSyncUpdatingCallback(){return()=>{this.removeHandles(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles((0,a._)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(c))})),c)}}};(0,r._)([(0,l.MZ)({readOnly:!0})],d.prototype,"updating",void 0),d=(0,r._)([(0,u.$)("esri.core.support.UpdatingHandles")],d);const c=-42},13069:(e,t,s)=>{s.d(t,{AG:()=>a,lk:()=>n,vD:()=>o,yS:()=>i});const r="randomUUID"in crypto;function n(){if(r)return crypto.randomUUID();const e=crypto.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;const t=t=>e[t].toString(16).padStart(4,"0");return t(0)+t(1)+"-"+t(2)+"-"+t(3)+"-"+t(4)+"-"+t(5)+t(6)+t(7)}function i(){return`{${n().toUpperCase()}}`}function o(){return`{${n()}}`}function a(e){const t=e.toUpperCase();return"{"!==e[0]?`{${t}}`:t}},39357:(e,t,s)=>{s.d(t,{H:()=>l});var r,n=s(90237),i=s(25482),o=s(10107),a=(s(44208),s(53966),s(87811),s(40608));let l=r=class extends i.A{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,n._)([(0,o.MZ)({type:String,json:{write:{isRequired:!0}}})],l.prototype,"name",void 0),(0,n._)([(0,o.MZ)({type:[String,Number],json:{write:{isRequired:!0}}})],l.prototype,"code",void 0),l=r=(0,n._)([(0,a.$)("esri.layers.support.CodedValue")],l)},53177:(e,t,s)=>{s.d(t,{A:()=>p});var r,n=s(90237),i=s(4718),o=s(10107),a=(s(44208),s(53966),s(93223)),l=s(40608),u=s(39357),d=s(76357);let c=r=class extends d.A{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const s=String(e);this.codedValues.some((e=>(String(e.code)===s&&(t=e.name),!!t)))}return t}clone(){return new r({codedValues:(0,i.o8)(this.codedValues),name:this.name})}};(0,n._)([(0,o.MZ)({type:[u.H],json:{write:{isRequired:!0}}})],c.prototype,"codedValues",void 0),(0,n._)([(0,a.e)({codedValue:"coded-value"})],c.prototype,"type",void 0),c=r=(0,n._)([(0,l.$)("esri.layers.support.CodedValueDomain")],c);const p=c},76357:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(90237),n=s(66552),i=s(25482),o=s(10107),a=(s(44208),s(53966),s(87811),s(93223)),l=s(40608);const u=new n.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let d=class extends i.A{constructor(e){super(e),this.name=null,this.type=null}};(0,r._)([(0,o.MZ)({type:String,json:{write:!0}})],d.prototype,"name",void 0),(0,r._)([(0,a.e)(u),(0,o.MZ)({json:{write:{isRequired:!0}}})],d.prototype,"type",void 0),d=(0,r._)([(0,l.$)("esri.layers.support.Domain")],d);const c=d},20437:(e,t,s)=>{s.d(t,{A:()=>f});var r,n=s(90237),i=s(66552),o=s(25482),a=s(10107),l=s(56507),u=(s(44208),s(87811),s(93223)),d=s(36005),c=s(40608),p=s(80451),h=s(98453);const y=new i.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let g=r=class extends o.A{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let s=null;try{s=t?JSON.parse(t):null}catch(e){}return s?.value??null}readValueType(e,{description:t}){let s=null;try{s=t?JSON.parse(t):null}catch(e){}return s?y.fromJSON(s.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],g.prototype,"alias",void 0),(0,n._)([(0,a.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],g.prototype,"defaultValue",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"description",void 0),(0,n._)([(0,d.w)("description")],g.prototype,"readDescription",null),(0,n._)([(0,a.MZ)({types:p.gK,json:{read:{reader:p.rS},write:!0}})],g.prototype,"domain",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"editable",void 0),(0,n._)([(0,a.MZ)({type:l.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],g.prototype,"length",void 0),(0,n._)([(0,a.MZ)({type:String,json:{write:!0}})],g.prototype,"name",void 0),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],g.prototype,"nullable",void 0),(0,n._)([(0,u.e)(h.m)],g.prototype,"type",void 0),(0,n._)([(0,a.MZ)()],g.prototype,"valueType",void 0),(0,n._)([(0,d.w)("valueType",["description"])],g.prototype,"readValueType",null),(0,n._)([(0,a.MZ)({type:Boolean,json:{read:!1}})],g.prototype,"visible",void 0),g=r=(0,n._)([(0,c.$)("esri.layers.support.Field")],g);const f=g},91806:(e,t,s)=>{s.d(t,{A:()=>d});var r,n=s(90237),i=s(25482),o=s(10107),a=s(56507),l=(s(44208),s(87811),s(40608));let u=r=class extends i.A{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new r({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,n._)([(0,o.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"cols",void 0),(0,n._)([(0,o.MZ)({type:a.jz,json:{write:!0}})],u.prototype,"level",void 0),(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],u.prototype,"levelValue",void 0),(0,n._)([(0,o.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"origin",void 0),(0,n._)([(0,o.MZ)({type:Number,json:{write:!0}})],u.prototype,"resolution",void 0),(0,n._)([(0,o.MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],u.prototype,"rows",void 0),(0,n._)([(0,o.MZ)({type:Number,json:{write:!0}})],u.prototype,"scale",void 0),u=r=(0,n._)([(0,l.$)("esri.layers.support.LOD")],u);const d=u},87045:(e,t,s)=>{s.d(t,{A:()=>x});var r,n=s(90237),i=s(66552),o=s(25482),a=s(83047),l=s(10107),u=s(56507),d=(s(44208),s(87811),s(36005)),c=s(40608),p=s(43937),h=s(86738),y=s(16930),g=s(19419),f=s(21325),m=s(28735),_=s(91806),w=s(72802);const b=new i.J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let v=r=class extends o.A{static create(e={}){const{resolutionFactor:t=1,scales:s,size:n=256,spatialReference:i=y.A.WebMercator,numLODs:o=24}=e;if(!(0,f.fn)(i)){const e=[];if(s)for(let t=0;t<s.length;t++){const r=s[t];e.push(new _.A({level:t,scale:r,resolution:r}))}else{let t=5e-4;for(let s=o-1;s>=0;s--)e.unshift(new _.A({level:s,scale:t,resolution:t})),t*=2}return new r({dpi:96,lods:e,origin:new h.A(0,0,i),size:[n,n],spatialReference:i})}const l=(0,f.Vp)(i),u=e.origin?new h.A({x:e.origin.x,y:e.origin.y,spatialReference:i}):new h.A(l?{x:l.origin[0],y:l.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),d=1/(39.37*(0,a.GA)(i)*96),c=[];if(s)for(let e=0;e<s.length;e++){const t=s[e],r=t*d;c.push(new _.A({level:e,scale:t,resolution:r}))}else{let e=(0,f.EA)(i)?512/n*591657527.5917094:256/n*591657527.591555;const s=Math.ceil(o/t);c.push(new _.A({level:0,scale:e,resolution:e*d}));for(let r=1;r<s;r++){const s=e/2**t,n=s*d;c.push(new _.A({level:r,scale:s,resolution:n})),e=s}}return new r({dpi:96,lods:c,origin:u,size:[n,n],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=(0,f.Vp)(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return h.A.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const r=[],n=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach((e=>{r.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,n[e.level]=e}))),this._set("scales",r),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),r=s+1;return t[s]/(t[s]/t[r])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let r=0;for(;r<s;r++){const s=t[r],n=t[r+1];if(s<=e)return r;if(n===e)return r+1;if(s>e&&n<e)return r+Math.log(s/e)/Math.log(s/n)}return r}tileAt(e,t,s,r){const n=this.lodAt(e);if(!n)return null;let i,o;if("number"==typeof t)i=t,o=s;else if((0,f.aI)(t.spatialReference,this.spatialReference))i=t.x,o=t.y,r=s;else{const e=(0,m.Cv)(t,this.spatialReference);if(null==e)return null;i=e.x,o=e.y,r=s}const a=n.resolution*this.size[0],l=n.resolution*this.size[1];return r||(r=new w.U(null,0,0,0,(0,g.vt)())),r.level=e,r.row=Math.floor((this.origin.y-o)/l+.001),r.col=Math.floor((i-this.origin.x)/a+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=r.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===r.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const n=e.level-s.level,i=s.resolution*this.size[0]/2**n,o=s.resolution*this.size[1]/2**n;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,g.vt)()),e.extent[0]=this.origin.x+e.col*i,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+i,e.extent[3]=e.extent[1]+o}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const s=this.lodAt(t.level);if(null==s)return null;const{resolution:r}=s,n=r*this.size[0],i=r*this.size[1];return e[0]=this.origin.x+t.col*n,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+n,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return r.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const s=[],n=this.lods.length-t;for(let e=0;e<n;e++){const r=e+t,{scale:n,resolution:i}=r>=0?this.lods[r]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};s.push(new _.A({level:e,scale:n,resolution:i}))}return new r({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const r=e[s];this._upsampleLevels[r.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/r.resolution:0},t=r}}};var k,S;(0,n._)([(0,l.MZ)({type:Number,json:{write:!0}})],v.prototype,"compressionQuality",void 0),(0,n._)([(0,l.MZ)({type:Number,json:{write:!0}})],v.prototype,"dpi",void 0),(0,n._)([(0,l.MZ)({type:String,json:{read:b.read,write:b.write,origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"format",void 0),(0,n._)([(0,l.MZ)({readOnly:!0})],v.prototype,"isWrappable",null),(0,n._)([(0,l.MZ)({type:h.A,json:{write:!0}})],v.prototype,"origin",void 0),(0,n._)([(0,d.w)("origin")],v.prototype,"readOrigin",null),(0,n._)([(0,l.MZ)({type:[_.A],value:null,json:{write:!0}})],v.prototype,"lods",null),(0,n._)([(0,l.MZ)({readOnly:!0})],v.prototype,"scales",void 0),(0,n._)([(0,l.MZ)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],v.prototype,"size",void 0),(0,n._)([(0,d.w)("size",["rows","cols"])],v.prototype,"readSize",null),(0,n._)([(0,p.K)("size",{cols:{type:u.jz},rows:{type:u.jz}})],v.prototype,"writeSize",null),(0,n._)([(0,l.MZ)({type:y.A,json:{write:!0}})],v.prototype,"spatialReference",void 0),v=r=(0,n._)([(0,c.$)("esri.layers.support.TileInfo")],v),(S=(k=v||(v={})).ExtrapolateOptions||(k.ExtrapolateOptions={}))[S.NONE=0]="NONE",S[S.POWER_OF_TWO=1]="POWER_OF_TWO";const x=v},72802:(e,t,s)=>{s.d(t,{U:()=>r});class r{constructor(e,t,s,r,n=void 0){this.id=e,this.level=t,this.row=s,this.col=r,this.extent=n}}},80451:(e,t,s)=>{s.d(t,{rS:()=>f,gK:()=>g}),s(44208);var r,n=s(53177),i=s(76357),o=s(90237),a=(s(53966),s(87811),s(49186),s(93223)),l=s(40608);let u=r=class extends i.A{constructor(e){super(e),this.type="inherited"}clone(){return new r}};(0,o._)([(0,a.e)({inherited:"inherited"})],u.prototype,"type",void 0),u=r=(0,o._)([(0,l.$)("esri.layers.support.InheritedDomain")],u);const d=u;var c,p=s(10107);let h=c=class extends i.A{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new c({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,p.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,s){t[s]=[this.minValue||0,e]},isRequired:!0}}})],h.prototype,"maxValue",void 0),(0,o._)([(0,p.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,s){t[s]=[e,this.maxValue||0]},isRequired:!0}}})],h.prototype,"minValue",void 0),(0,o._)([(0,a.e)({range:"range"})],h.prototype,"type",void 0),h=c=(0,o._)([(0,l.$)("esri.layers.support.RangeDomain")],h);const y=h,g={key:"type",base:i.A,typeMap:{range:y,"coded-value":n.A,inherited:d}};function f(e){if(!e?.type)return null;switch(e.type){case"range":return y.fromJSON(e);case"codedValue":return n.A.fromJSON(e);case"inherited":return d.fromJSON(e)}return null}},10536:(e,t,s)=>{function r(e){const t={};for(const s in e){if("declaredClass"===s)continue;const n=e[s];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[s]=[];for(let e=0;e<n.length;e++)t[s][e]=r(n[e])}else"object"==typeof n?n.toJSON&&(t[s]=JSON.stringify(n)):t[s]=n}return t}s.d(t,{z:()=>r})},53655:(e,t,s)=>{s.d(t,{SH:()=>R,ae:()=>S,cn:()=>_});var r=s(49186),n=s(51624),i=s(92722),o=s(69418);const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],l=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],u=["upperLeft","lowerLeft"];function d(e){return e>=a.length?null:a[e]}function c(e){return e>=l.length?null:l[e]}function p(e){return e>=u.length?null:u[e]}function h(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function y(e,t,s){const r=e.asUnsafe(),n=t.createPointGeometry(s);for(;r.next();)switch(r.tag()){case 3:{const e=r.getUInt32(),s=r.pos()+e;let i=0;for(;r.pos()<s;)t.addCoordinatePoint(n,r.getSInt64(),i++);break}default:r.skip()}return n}function g(e,t,s){const r=e.asUnsafe(),n=t.createGeometry(s),i=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const e=r.getUInt32(),s=r.pos()+e;let i=0;for(;r.pos()<s;)t.addLength(n,r.getUInt32(),i++);break}case 3:{const e=r.getUInt32(),s=r.pos()+e;let o=0;for(t.allocateCoordinates(n);r.pos()<s;)t.addCoordinate(n,r.getSInt64(),o),o++,o===i&&(o=0);break}default:r.skip()}return n}function f(e){const t=e.asUnsafe(),s=new i.A;let r="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.coords.push(t.getSInt64());break}case 1:r=o.z[t.getEnum()];break;default:t.skip()}return{queryGeometry:s,queryGeometryType:r}}function m(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function _(e){const t=e.asUnsafe(),s={type:d(0)};for(;t.next();)switch(t.tag()){case 1:s.name=t.getString();break;case 2:s.type=d(t.getEnum());break;case 3:s.alias=t.getString();break;case 4:s.sqlType=c(t.getEnum());break;case 5:default:t.skip();break;case 6:s.defaultValue=t.getString()}return s}function w(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.name=s.getString();break;case 2:t.isSystemMaintained=s.getBool();break;default:s.skip()}return t}function b(e,t,s,r){const n=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[i++].name;n.attributes[t]=e.processMessage(m);break}case 2:n.geometry=e.processMessageWithArgs(g,t,s);break;case 4:n.centroid=e.processMessageWithArgs(y,t,s);break;default:e.skip()}return n}function v(e){const t=[1,1,1,1],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function k(e){const t=[0,0,0,0],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function S(e){const t={originPosition:p(0)},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.originPosition=p(s.getEnum());break;case 2:t.scale=s.processMessage(v);break;case 3:t.translate=s.processMessage(k);break;default:s.skip()}return t}function x(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.shapeAreaFieldName=s.getString();break;case 2:t.shapeLengthFieldName=s.getString();break;case 3:t.units=s.getString();break;default:s.skip()}return t}function T(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function I(e,t){const s=t.createFeatureResult(),r=e.asUnsafe();s.geometryType=h(t,0);let n=!1;for(;r.next();)switch(r.tag()){case 1:s.objectIdFieldName=r.getString();break;case 3:s.globalIdFieldName=r.getString();break;case 4:s.geohashFieldName=r.getString();break;case 5:s.geometryProperties=r.processMessage(x);break;case 7:s.geometryType=h(t,r.getEnum());break;case 8:s.spatialReference=r.processMessageWithArgs(T,t);break;case 10:s.hasZ=r.getBool();break;case 11:s.hasM=r.getBool();break;case 12:s.transform=r.processMessage(S);break;case 9:s.exceededTransferLimit=r.getBool();break;case 13:t.addField(s,r.processMessage(_));break;case 15:n||(t.prepareFeatures(s),n=!0),t.addFeature(s,r.processMessageWithArgs(b,t,s,s.fields));break;case 2:s.uniqueIdField=r.processMessage(w);break;default:r.skip()}return t.finishFeatureResult(s),s}function A(e,t){const s={};let r=null;for(;e.next();)switch(e.tag()){case 4:r=e.processMessageWithArgs(f);break;case 1:s.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=r&&s.featureResult&&t.addQueryGeometry(s,r),s}function R(e,t){try{const s=2,r=new n.A(new Uint8Array(e),new DataView(e)),i={};for(;r.next();)r.tag()===s?i.queryResult=r.processMessageWithArgs(A,t):r.skip();return i}catch(e){throw new r.A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}},69418:(e,t,s)=>{s.d(t,{S:()=>u,z:()=>l});var r=s(83047),n=s(21325),i=s(43334),o=s(58512),a=s(92722);const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class u{constructor(e){this._options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new o.A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e?.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,n.aI)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,r.G9)(this._options.sourceSpatialReference)/(0,r.G9)(e.spatialReference);if(1!==t)for(const s of e.features){if(!(0,i.N3)(s))continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new i.Om(null,{},null,0)}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.A}}},66208:(e,t,s)=>{s.d(t,{m:()=>n});var r=s(53655);function n(e,t){const s=(0,r.SH)(e,t),n=s.queryResult.featureResult,i=s.queryResult.queryGeometry,o=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=i,n.queryGeometryType=o),n}},80893:(e,t,s)=>{s.d(t,{IJ:()=>y,Jf:()=>_,Pk:()=>f,eW:()=>h,gW:()=>m,kS:()=>g});var r=s(78888),n=s(84952),i=s(65864),o=s(17136),a=s(21325),l=s(10536),u=s(66208),d=s(58501);const c="Layer does not support extent calculation.";function p(e,t){const s=e.geometry,r=e.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;const n=r;let o,l,u;if(null!=s&&(l=s.spatialReference,u=(0,a.YX)(l),n.geometryType=(0,i.$B)(s),n.geometry=function(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const s=e.toJSON();return delete s.spatialReference,JSON.stringify(s)}(s,e.compactGeometryEnabled),n.inSR=u),r.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(n.objectIds=r.objectIds.join(",")),r.orderByFields&&(n.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete n.outFields:r.outFields.includes("*")?n.outFields="*":n.outFields=r.outFields.join(","),r.outSR?(n.outSR=(0,a.YX)(r.outSR),o=e.outSpatialReference):s&&(r.returnGeometry||r.returnCentroid)&&(n.outSR=n.inSR,o=l),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(n.outStatistics=JSON.stringify(r.outStatistics)),r.fullText&&(n.fullText=JSON.stringify(r.fullText)),r.pixelSize&&(n.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=l&&null!=e.quantizationParameters?.extent&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(n.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(n.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(n.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){const e=r.timeExtent,{start:t,end:s}=e;null==t&&null==s||(n.time=t===s?t:`${t??"null"},${s??"null"}`),delete r.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=l&&null!=o&&l.equals(o)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function h(e,t,s,r){const n=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await w(e,t,"json",r);return(0,d.q)(t,s,n.data),n}async function y(e,t,s,r){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:s.createFeatureResult()};const n=await g(e,t,r),i=n;return i.data=(0,u.m)(n.data,s),i}function g(e,t,s){return w(e,t,"pbf",s)}function f(e,t,s){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):w(e,t,"json",s,{returnIdsOnly:!0})}function m(e,t,s){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(e,t,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}async function _(e,t,s){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await w(e,t,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}),n=r.data;if(n.hasOwnProperty("extent"))return r;if(n.features)throw new Error(c);if(n.hasOwnProperty("count"))throw new Error(c);return r}async function w(e,t,s,i={},a={}){const u="string"==typeof e?(0,n.An)(e):e,d=t.geometry?[t.geometry]:[],c=await(0,o.el)(d,null,{signal:i.signal}),h=c?.[0];null!=h&&((t=t.clone()).geometry=h);const y=(0,l.z)({...u.query,f:s,...a,...p(t,a)});return(0,r.A)((0,n.fj)(u.path,(g=a,null==t.formatOf3DObjects||g.returnCountOnly||g.returnExtentOnly||g.returnIdsOnly?"query":"query3d")),{...i,responseType:"pbf"===s?"array-buffer":"json",query:{...y,...i.query}});var g}},58501:(e,t,s)=>{s.d(t,{q:()=>n});var r=s(62815);function n(e,t,s){if(!s?.features||!s.hasZ)return;const n=(0,r.N)(s.geometryType,t,e.outSpatialReference);if(null!=n)for(const e of s.features)n(e.geometry)}}}]);
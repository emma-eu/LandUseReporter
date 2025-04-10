"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2253],{68197:(e,t,r)=>{r.d(t,{A:()=>p});var n,o,i=r(40876),s=r(34727),a=r(56507);function l(e){return(0,s.qE)((0,a.Vr)(e),0,255)}function u(e,t,r){return e=Number(e),isNaN(e)?r:e<t?t:e>r?r:e}function c(e,t){const r=e.toString(16).padStart(2,"0");return t?r.slice(0,1):r}class p{static blendColors(e,t,r,n=new p){return n.r=Math.round(e.r+(t.r-e.r)*r),n.g=Math.round(e.g+(t.g-e.g)*r),n.b=Math.round(e.b+(t.b-e.b)*r),n.a=e.a+(t.a-e.a)*r,n._sanitize()}static fromRgb(e,t){const r=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(r){const e=r[2].split(/\s*,\s*/),n=r[1];if("rgb"===n&&3===e.length||"rgba"===n&&4===e.length){const r=e[0];if("%"===r.charAt(r.length-1)){const r=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(r[3]=parseFloat(e[3])),p.fromArray(r,t)}return p.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===n&&3===e.length||"hsla"===n&&4===e.length)return p.fromArray((0,i.z$)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new p){if("#"!==e[0]||isNaN(Number(`0x${e.slice(1)}`)))return null;switch(e.length){case 4:case 5:{const r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,4),16),i=5===e.length?15:parseInt(e.slice(4),16);return p.fromArray([r+16*r,n+16*n,o+16*o,(i+16*i)/255],t)}case 7:case 9:{const r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16),i=7===e.length?255:parseInt(e.slice(7),16);return p.fromArray([r,n,o,i/255],t)}default:return null}}static fromArray(e,t=new p){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const r=(0,i.V6)(e)?(0,i.TS)(e):null;return r&&p.fromArray(r,t)||p.fromRgb(e,t)||p.fromHex(e,t)}static fromJSON(e){return null!=e?new p([e[0],e[1],e[2],(e[3]??255)/255]):void 0}static toUnitRGB(e){return null!=e?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return null!=e?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?p.fromString(e,this):Array.isArray(e)?p.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof p||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(e){const t=e?.capitalize??!1,r=e?.digits??6,n=3===r||4===r,o=4===r||8===r,i=`#${c(this.r,n)}${c(this.g,n)}${c(this.b,n)}${o?c(Math.round(255*this.a),n):""}`;return t?i.toUpperCase():i}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=p.AlphaMode.ALWAYS){const t=l(this.r),r=l(this.g),n=l(this.b);return e===p.AlphaMode.ALWAYS||1!==this.a?[t,r,n,l(255*this.a)]:[t,r,n]}clone(){return new p(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return null!=e&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(u(this.r,0,255)),this.g=Math.round(u(this.g,0,255)),this.b=Math.round(u(this.b,0,255)),this.a=u(this.a,0,1),this}_set(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a=n}}p.prototype.declaredClass="esri.Color",(o=(n=p).AlphaMode||(n.AlphaMode={}))[o.ALWAYS=0]="ALWAYS",o[o.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"},87317:(e,t,r)=>{r.d(t,{a:()=>v,b:()=>c,c:()=>o,d:()=>d,e:()=>w,f:()=>h,g:()=>s,h:()=>y,j:()=>f,l:()=>g,n:()=>m,s:()=>i,t:()=>b});var n=r(34304);function o(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(e,t,r,n,o){return e[0]=t,e[1]=r,e[2]=n,e[3]=o,e}function s(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e}function a(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e}function l(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e}function u(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e}function c(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e}function p(e,t){const r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return Math.sqrt(r*r+n*n+o*o+i*i)}function d(e,t){const r=t[0]-e[0],n=t[1]-e[1],o=t[2]-e[2],i=t[3]-e[3];return r*r+n*n+o*o+i*i}function f(e){const t=e[0],r=e[1],n=e[2],o=e[3];return Math.sqrt(t*t+r*r+n*n+o*o)}function h(e){const t=e[0],r=e[1],n=e[2],o=e[3];return t*t+r*r+n*n+o*o}function m(e,t){const r=t[0],n=t[1],o=t[2],i=t[3];let s=r*r+n*n+o*o+i*i;return s>0&&(s=1/Math.sqrt(s),e[0]=r*s,e[1]=n*s,e[2]=o*s,e[3]=i*s),e}function y(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function g(e,t,r,n){const o=t[0],i=t[1],s=t[2],a=t[3];return e[0]=o+n*(r[0]-o),e[1]=i+n*(r[1]-i),e[2]=s+n*(r[2]-s),e[3]=a+n*(r[3]-a),e}function b(e,t,r){const n=t[0],o=t[1],i=t[2],s=t[3];return e[0]=r[0]*n+r[4]*o+r[8]*i+r[12]*s,e[1]=r[1]*n+r[5]*o+r[9]*i+r[13]*s,e[2]=r[2]*n+r[6]*o+r[10]*i+r[14]*s,e[3]=r[3]*n+r[7]*o+r[11]*i+r[15]*s,e}function v(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function w(e,t){const r=e[0],o=e[1],i=e[2],s=e[3],a=t[0],l=t[1],u=t[2],c=t[3],p=(0,n.FD)();return Math.abs(r-a)<=p*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(o-l)<=p*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-u)<=p*Math.max(1,Math.abs(i),Math.abs(u))&&Math.abs(s-c)<=p*Math.max(1,Math.abs(s),Math.abs(c))}const x=a,A=l,M=u,S=p,_=d,O=f,N=h;Object.freeze(Object.defineProperty({__proto__:null,add:s,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e},copy:o,copyVec3:function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},dist:S,distance:p,div:M,divide:u,dot:y,equals:w,exactEquals:v,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e},len:O,length:f,lerp:g,max:function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e},min:function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e},mul:A,multiply:l,negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},normalize:m,random:function(e,t=1){const r=n.Ov;let o,i,s,a,l,u;do{o=2*r()-1,i=2*r()-1,l=o*o+i*i}while(l>=1);do{s=2*r()-1,a=2*r()-1,u=s*s+a*a}while(u>=1);const c=Math.sqrt((1-l)/u);return e[0]=t*o,e[1]=t*i,e[2]=t*s*c,e[3]=t*a*c,e},round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e},scale:c,scaleAndAdd:function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e[2]=t[2]+r[2]*n,e[3]=t[3]+r[3]*n,e},set:i,sqrDist:_,sqrLen:N,squaredDistance:d,squaredLength:h,str:function(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},sub:x,subtract:a,transformMat4:b,transformQuat:function(e,t,r){const n=t[0],o=t[1],i=t[2],s=r[0],a=r[1],l=r[2],u=r[3],c=u*n+a*i-l*o,p=u*o+l*n-s*i,d=u*i+s*o-a*n,f=-s*n-a*o-l*i;return e[0]=c*u+f*-s+p*-l-d*-a,e[1]=p*u+f*-a+d*-s-c*-l,e[2]=d*u+f*-l+c*-a-p*-s,e[3]=t[3],e}},Symbol.toStringTag,{value:"Module"}))},40876:(e,t,r)=>{r.d(t,{TS:()=>i,Tf:()=>c,V6:()=>o,c4:()=>s,qh:()=>u,z$:()=>l});const n={transparent:[0,0,0,0],black:[0,0,0,1],silver:[192,192,192,1],gray:[128,128,128,1],white:[255,255,255,1],maroon:[128,0,0,1],red:[255,0,0,1],purple:[128,0,128,1],fuchsia:[255,0,255,1],green:[0,128,0,1],lime:[0,255,0,1],olive:[128,128,0,1],yellow:[255,255,0,1],navy:[0,0,128,1],blue:[0,0,255,1],teal:[0,128,128,1],aqua:[0,255,255,1],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],blanchedalmond:[255,235,205,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],oldlace:[253,245,230,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],rebeccapurple:[102,51,153,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],whitesmoke:[245,245,245,1],yellowgreen:[154,205,50,1]};function o(e){return!!n[e]||!!n[e.toLowerCase()]}function i(e){return n[e]??n[e.toLowerCase()]}function s(e){return[...i(e)]}function a(e,t,r){r<0&&++r,r>1&&--r;const n=6*r;return n<1?e+(t-e)*n:2*r<1?t:3*r<2?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n=1){const o=(e%360+360)%360/360,i=r<=.5?r*(t+1):r+t-r*t,s=2*r-i;return[Math.round(255*a(s,i,o+1/3)),Math.round(255*a(s,i,o)),Math.round(255*a(s,i,o-1/3)),n]}function u(e){const t=e.length>5,r=t?8:4,n=(1<<r)-1,o=t?1:17,i=t?9===e.length:5===e.length;let s=Number("0x"+e.slice(1));if(isNaN(s))return null;const a=[0,0,0,1];let l;return i&&(l=s&n,s>>=r,a[3]=o*l/255),l=s&n,s>>=r,a[2]=o*l,l=s&n,s>>=r,a[1]=o*l,l=s&n,s>>=r,a[0]=o*l,a}const c=2.2},93223:(e,t,r)=>{r.d(t,{e:()=>i});var n=r(66552),o=r(10107);function i(e,t={}){const r=e instanceof n.J?e:new n.J(e,t),{alwaysWriteDefaults:i,default:s,ignoreUnknown:a=!0,name:l,nonNullable:u,readOnly:c=!1}=t;return(0,o.MZ)({type:a?r.apiValues:String,json:{type:r.jsonValues,default:s,name:l,read:!c&&{reader:r.read},write:{writer:r.write,alwaysWriteDefaults:i}},nonNullable:u,readOnly:c})}},95488:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(11406);class o extends n.T{notify(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}}}},51850:(e,t,r)=>{function n(){return[0,0,0]}function o(e){return[e[0],e[1],e[2]]}function i(e,t,r){return[e,t,r]}function s(e,t,r){return[e,t,r]}function a(e,t=[0,0,0]){const r=Math.min(3,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t}function l(){return i(1,1,1)}function u(){return i(1,0,0)}function c(){return i(0,1,0)}function p(){return i(0,0,1)}r.d(t,{CN:()=>s,Cb:()=>y,Cw:()=>h,JP:()=>m,Un:()=>f,ci:()=>a,fA:()=>i,o8:()=>o,uY:()=>d,vt:()=>n});const d=[0,0,0],f=l(),h=u(),m=c(),y=p();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:h,UNIT_Y:m,UNIT_Z:y,ZEROS:d,clone:o,create:n,createView:function(e,t){return new Float64Array(e,t,3)},freeze:s,fromArray:a,fromValues:i,ones:l,unitX:u,unitY:c,unitZ:p,zeros:function(){return[0,0,0]}},Symbol.toStringTag,{value:"Module"}))},91829:(e,t,r)=>{function n(){return[0,0,0,0]}function o(e,t,r,n){return[e,t,r,n]}function i(e,t,r,n){return[e,t,r,n]}function s(e,t=[0,0,0,0]){const r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t}function a(){return o(1,1,1,1)}function l(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function c(){return o(0,0,1,0)}function p(){return o(0,0,0,1)}r.d(t,{CN:()=>i,Un:()=>f,ci:()=>s,fA:()=>o,uY:()=>d,vt:()=>n});const d=[0,0,0,0],f=a(),h=l(),m=u(),y=c(),g=p();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_W:g,UNIT_X:h,UNIT_Y:m,UNIT_Z:y,ZEROS:d,clone:function(e){return[e[0],e[1],e[2],e[3]]},create:n,createView:function(e,t){return new Float64Array(e,t,4)},freeze:i,fromArray:s,fromValues:o,ones:a,unitW:p,unitX:l,unitY:u,unitZ:c,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},34304:(e,t,r)=>{r.d(t,{DF:()=>l,FD:()=>o,Ov:()=>i,ct:()=>u});let n=1e-6;function o(){return n}const i=Math.random,s=Math.PI/180,a=180/Math.PI;function l(e){return e*s}function u(e){return e*a}Object.freeze(Object.defineProperty({__proto__:null,RANDOM:i,equals:function(e,t){return Math.abs(e-t)<=n*Math.max(1,Math.abs(e),Math.abs(t))},getEpsilon:o,setEpsilon:function(e){n=e},toDegree:u,toRadian:l},Symbol.toStringTag,{value:"Module"}))},65864:(e,t,r)=>{r.d(t,{$B:()=>m,Bi:()=>f,Rg:()=>d,U9:()=>c,ZC:()=>u,fT:()=>p,rS:()=>h,xD:()=>g});var n=r(5443),o=r(91075),i=r(48526),s=r(86738),a=r(39829),l=r(82799);function u(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function c(e){return void 0!==e.points}function p(e){return void 0!==e.x&&void 0!==e.y}function d(e){return void 0!==e.paths||void 0!==e.curvePaths}function f(e){return void 0!==e.rings||void 0!==e.curveRings}function h(e){return null==e?null:e instanceof o.A?e:p(e)?s.A.fromJSON(e):d(e)?l.A.fromJSON(e):f(e)?a.A.fromJSON(e):c(e)?i.A.fromJSON(e):u(e)?n.A.fromJSON(e):null}function m(e){return e?p(e)?"esriGeometryPoint":d(e)?"esriGeometryPolyline":f(e)?"esriGeometryPolygon":u(e)?"esriGeometryEnvelope":c(e)?"esriGeometryMultipoint":null:null}const y={esriGeometryPoint:s.A,esriGeometryPolyline:l.A,esriGeometryPolygon:a.A,esriGeometryEnvelope:n.A,esriGeometryMultipoint:i.A,esriGeometryMultiPatch:a.A};function g(e){return e&&y[e]||null}},50498:(e,t,r)=>{r.d(t,{Ye:()=>p,gy:()=>c,yR:()=>d});var n=r(66552),o=r(5443),i=r(91075),s=r(48526),a=r(86738),l=r(39829),u=r(82799);const c=(0,n.O)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),p=(0,n.O)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"}),d={base:i.A,key:"type",typeMap:{extent:o.A,multipoint:s.A,point:a.A,polyline:u.A,polygon:l.A}}},39357:(e,t,r)=>{r.d(t,{H:()=>l});var n,o=r(90237),i=r(25482),s=r(10107),a=(r(44208),r(53966),r(87811),r(40608));let l=n=class extends i.A{constructor(e){super(e),this.name=null,this.code=null}clone(){return new n({name:this.name,code:this.code})}};(0,o._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],l.prototype,"name",void 0),(0,o._)([(0,s.MZ)({type:[String,Number],json:{write:{isRequired:!0}}})],l.prototype,"code",void 0),l=n=(0,o._)([(0,a.$)("esri.layers.support.CodedValue")],l)},53177:(e,t,r)=>{r.d(t,{A:()=>d});var n,o=r(90237),i=r(4718),s=r(10107),a=(r(44208),r(53966),r(93223)),l=r(40608),u=r(39357),c=r(76357);let p=n=class extends c.A{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(t=e.name),!!t)))}return t}clone(){return new n({codedValues:(0,i.o8)(this.codedValues),name:this.name})}};(0,o._)([(0,s.MZ)({type:[u.H],json:{write:{isRequired:!0}}})],p.prototype,"codedValues",void 0),(0,o._)([(0,a.e)({codedValue:"coded-value"})],p.prototype,"type",void 0),p=n=(0,o._)([(0,l.$)("esri.layers.support.CodedValueDomain")],p);const d=p},76357:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(90237),o=r(66552),i=r(25482),s=r(10107),a=(r(44208),r(53966),r(87811),r(93223)),l=r(40608);const u=new o.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let c=class extends i.A{constructor(e){super(e),this.name=null,this.type=null}};(0,n._)([(0,s.MZ)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,n._)([(0,a.e)(u),(0,s.MZ)({json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),c=(0,n._)([(0,l.$)("esri.layers.support.Domain")],c);const p=c},20437:(e,t,r)=>{r.d(t,{A:()=>y});var n,o=r(90237),i=r(66552),s=r(25482),a=r(10107),l=r(56507),u=(r(44208),r(87811),r(93223)),c=r(36005),p=r(40608),d=r(80451),f=r(98453);const h=new i.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=n=class extends s.A{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?.value??null}readValueType(e,{description:t}){let r=null;try{r=t?JSON.parse(t):null}catch(e){}return r?h.fromJSON(r.fieldValueType):null}clone(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,a.MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,a.MZ)()],m.prototype,"description",void 0),(0,o._)([(0,c.w)("description")],m.prototype,"readDescription",null),(0,o._)([(0,a.MZ)({types:d.gK,json:{read:{reader:d.rS},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,a.MZ)({type:l.jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],m.prototype,"length",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,u.e)(f.m)],m.prototype,"type",void 0),(0,o._)([(0,a.MZ)()],m.prototype,"valueType",void 0),(0,o._)([(0,c.w)("valueType",["description"])],m.prototype,"readValueType",null),(0,o._)([(0,a.MZ)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=n=(0,o._)([(0,p.$)("esri.layers.support.Field")],m);const y=m},30139:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n,o=r(5443),i=r(86738),s=r(31644),a=r(14140),l=r(51244),u=r(28435),c=r(6049),p=r(70834),d=r(6952),f=r(14636),h=r(73037),m=r(90237),y=(r(53966),r(44208),r(87811),r(49186),r(93223)),g=r(40608),b=r(82434);let v=n=class extends b.A{constructor(){super(...arguments),this.type="identity"}clone(){return new n}};(0,m._)([(0,y.e)({IdentityXform:"identity"})],v.prototype,"type",void 0),v=n=(0,m._)([(0,g.$)("esri.layers.support.rasterTransforms.IdentityTransform")],v);const w=v;var x=r(21312);const A={GCSShiftXform:h.A,IdentityXform:w,PolynomialXform:x.A};function M(e){const t=e?.type;if(!t)return null;const r=A[e?.type];if(r){const t=new r;return t.read(e),t}return null}var S=r(85676),_=r(4095);class O{convertVectorFieldData(e){const t=a.A.fromJSON(e.pixelBlock),r=(0,f.FI)(t,e.type);return Promise.resolve(null!=r?r.toJSON():null)}computeStatisticsHistograms(e){const t=a.A.fromJSON(e.pixelBlock),r=(0,d.eH)(t);return Promise.resolve(r)}async decode(e){const t=await(0,l.D)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=a.A.fromJSON(e.pixelBlock),e.extent=e.extent?o.A.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(e){this.symbolizer=S.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,c.vt)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:o.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?a.A.fromJSON(e):null)),primaryPixelSizes:e.primaryPixelSizes?.map((e=>null!=e?i.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=t?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(a.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(e){const t=(0,d.f4)(a.A.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,u.lD)(a.A.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,!1===e.useBilinear);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}clipTile(e){const t=a.A.fromJSON(e.pixelBlock),r=(0,u.J$)({...e,pixelBlock:t});return Promise.resolve(r?.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new a.A(e):null)),r=(0,u.z7)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let n,o=r;return e.coefs&&(o=(0,u.$i)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(n=(0,u.QF)(e.destDimension,e.gcsGrid),o=(0,f.Y2)(o,e.isUV?"vector-uv":"vector-magdir",n)),{pixelBlock:o?.toJSON(),localNorthDirections:n}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:n,indexData:o}=await(0,_.CW)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:o.buffer},transferList:[n.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=o.A.fromJSON(e.projectedExtent),r=o.A.fromJSON(e.srcBufferExtent);let n=null;e.datumTransformationSteps&&(n=new s.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,p.xh)(t.spatialReference,r.spatialReference,n))&&await(0,p.Hh)();const i=e.rasterTransform?M(e.rasterTransform):null;return(0,p.l0)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:n,rasterTransform:i})}}},80451:(e,t,r)=>{r.d(t,{rS:()=>y,gK:()=>m}),r(44208);var n,o=r(53177),i=r(76357),s=r(90237),a=(r(53966),r(87811),r(49186),r(93223)),l=r(40608);let u=n=class extends i.A{constructor(e){super(e),this.type="inherited"}clone(){return new n}};(0,s._)([(0,a.e)({inherited:"inherited"})],u.prototype,"type",void 0),u=n=(0,s._)([(0,l.$)("esri.layers.support.InheritedDomain")],u);const c=u;var p,d=r(10107);let f=p=class extends i.A{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new p({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,s._)([(0,d.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,r){t[r]=[this.minValue||0,e]},isRequired:!0}}})],f.prototype,"maxValue",void 0),(0,s._)([(0,d.MZ)({json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range?.[0]},write:{target:"range",writer(e,t,r){t[r]=[e,this.maxValue||0]},isRequired:!0}}})],f.prototype,"minValue",void 0),(0,s._)([(0,a.e)({range:"range"})],f.prototype,"type",void 0),f=p=(0,s._)([(0,l.$)("esri.layers.support.RangeDomain")],f);const h=f,m={key:"type",base:i.A,typeMap:{range:h,"coded-value":o.A,inherited:c}};function y(e){if(!e?.type)return null;switch(e.type){case"range":return h.fromJSON(e);case"codedValue":return o.A.fromJSON(e);case"inherited":return c.fromJSON(e)}return null}},98453:(e,t,r)=>{r.d(t,{m:()=>n});const n=new(r(66552).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"})},82434:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(90237),o=r(25482),i=r(10107),s=(r(44208),r(53966),r(87811),r(40608));let a=class extends o.A{get affectsPixelSize(){return!1}forwardTransform(e){return e}inverseTransform(e){return e}};(0,n._)([(0,i.MZ)()],a.prototype,"affectsPixelSize",null),(0,n._)([(0,i.MZ)({json:{write:!0}})],a.prototype,"spatialReference",void 0),a=(0,n._)([(0,s.$)("esri.layers.support.rasterTransforms.BaseRasterTransform")],a);const l=a},73037:(e,t,r)=>{r.d(t,{A:()=>c});var n,o=r(90237),i=r(10107),s=(r(44208),r(53966),r(87811),r(93223)),a=r(40608),l=r(82434);let u=n=class extends l.A{constructor(){super(...arguments),this.type="gcs-shift",this.tolerance=1e-8}forwardTransform(e){return"point"===(e=e.clone()).type?(e.x>180+this.tolerance&&(e.x-=360),e):(e.xmin>=180-this.tolerance?(e.xmax-=360,e.xmin-=360):e.xmax>180+this.tolerance&&(e.xmin=-180,e.xmax=180),e)}inverseTransform(e){return"point"===(e=e.clone()).type?(e.x<-this.tolerance&&(e.x+=360),e):(e.xmin<-this.tolerance&&(e.xmin+=360,e.xmax+=360),e)}clone(){return new n({tolerance:this.tolerance})}};(0,o._)([(0,s.e)({GCSShiftXform:"gcs-shift"})],u.prototype,"type",void 0),(0,o._)([(0,i.MZ)()],u.prototype,"tolerance",void 0),u=n=(0,o._)([(0,a.$)("esri.layers.support.rasterTransforms.GCSShiftTransform")],u);const c=u},21312:(e,t,r)=>{r.d(t,{A:()=>y});var n,o=r(90237),i=r(10107),s=(r(44208),r(53966),r(87811),r(93223)),a=r(36005),l=r(40608),u=r(43937),c=r(5443),p=r(86738),d=r(82434);function f(e,t,r){const{x:n,y:o}=t;if(r<2)return{x:e[0]+n*e[2]+o*e[4],y:e[1]+n*e[3]+o*e[5]};if(2===r){const t=n*n,r=o*o,i=n*o;return{x:e[0]+n*e[2]+o*e[4]+t*e[6]+i*e[8]+r*e[10],y:e[1]+n*e[3]+o*e[5]+t*e[7]+i*e[9]+r*e[11]}}const i=n*n,s=o*o,a=n*o,l=i*n,u=i*o,c=n*s,p=o*s;return{x:e[0]+n*e[2]+o*e[4]+i*e[6]+a*e[8]+s*e[10]+l*e[12]+u*e[14]+c*e[16]+p*e[18],y:e[1]+n*e[3]+o*e[5]+i*e[7]+a*e[9]+s*e[11]+l*e[13]+u*e[15]+c*e[17]+p*e[19]}}function h(e,t,r){const{xmin:n,ymin:o,xmax:i,ymax:s,spatialReference:a}=t;let l=[];if(r<2)l.push({x:n,y:s}),l.push({x:i,y:s}),l.push({x:n,y:o}),l.push({x:i,y:o});else{let e=10;for(let t=0;t<e;t++)l.push({x:n,y:o+(s-o)*t/(e-1)}),l.push({x:i,y:o+(s-o)*t/(e-1)});e=8;for(let t=1;t<=e;t++)l.push({x:n+(i-n)*t/e,y:o}),l.push({x:n+(i-n)*t/e,y:s})}l=l.map((t=>f(e,t,r)));const u=l.map((e=>e.x)),p=l.map((e=>e.y));return new c.A({xmin:Math.min.apply(null,u),xmax:Math.max.apply(null,u),ymin:Math.min.apply(null,p),ymax:Math.max.apply(null,p),spatialReference:a})}let m=n=class extends d.A{constructor(){super(...arguments),this.polynomialOrder=1,this.type="polynomial"}readForwardCoefficients(e,t){const{coeffX:r,coeffY:n}=t;if(!r?.length||!n?.length||r.length!==n.length)return null;const o=[];for(let e=0;e<r.length;e++)o.push(r[e]),o.push(n[e]);return o}writeForwardCoefficients(e,t,r){const n=[],o=[];for(let t=0;t<e?.length;t++)t%2==0?n.push(e[t]):o.push(e[t]);t.coeffX=n,t.coeffY=o}get inverseCoefficients(){let e=this._get("inverseCoefficients");const t=this._get("forwardCoefficients");return!e&&t&&this.polynomialOrder<2&&(e=function(e){const[t,r,n,o,i,s]=e,a=n*s-i*o,l=i*o-n*s;return[(i*r-t*s)/a,(n*r-t*o)/l,s/a,o/l,-i/a,-n/l]}(t)),e}set inverseCoefficients(e){this._set("inverseCoefficients",e)}readInverseCoefficients(e,t){const{inverseCoeffX:r,inverseCoeffY:n}=t;if(!r?.length||!n?.length||r.length!==n.length)return null;const o=[];for(let e=0;e<r.length;e++)o.push(r[e]),o.push(n[e]);return o}writeInverseCoefficients(e,t,r){const n=[],o=[];for(let t=0;t<e?.length;t++)t%2==0?n.push(e[t]):o.push(e[t]);t.inverseCoeffX=n,t.inverseCoeffY=o}get affectsPixelSize(){return this.polynomialOrder>0}forwardTransform(e){if("point"===e.type){const t=f(this.forwardCoefficients,e,this.polynomialOrder);return new p.A({x:t.x,y:t.y,spatialReference:e.spatialReference})}return h(this.forwardCoefficients,e,this.polynomialOrder)}inverseTransform(e){if("point"===e.type){const t=f(this.inverseCoefficients,e,this.polynomialOrder);return new p.A({x:t.x,y:t.y,spatialReference:e.spatialReference})}return h(this.inverseCoefficients,e,this.polynomialOrder)}clone(){return new n({polynomialOrder:this.polynomialOrder,forwardCoefficients:this.forwardCoefficients?[...this.forwardCoefficients]:null,inverseCoefficients:this.inverseCoefficients?[...this.inverseCoefficients]:null})}};(0,o._)([(0,i.MZ)({json:{write:!0}})],m.prototype,"polynomialOrder",void 0),(0,o._)([(0,i.MZ)()],m.prototype,"forwardCoefficients",void 0),(0,o._)([(0,a.w)("forwardCoefficients",["coeffX","coeffY"])],m.prototype,"readForwardCoefficients",null),(0,o._)([(0,u.K)("forwardCoefficients")],m.prototype,"writeForwardCoefficients",null),(0,o._)([(0,i.MZ)({json:{write:!0}})],m.prototype,"inverseCoefficients",null),(0,o._)([(0,a.w)("inverseCoefficients",["inverseCoeffX","inverseCoeffY"])],m.prototype,"readInverseCoefficients",null),(0,o._)([(0,u.K)("inverseCoefficients")],m.prototype,"writeInverseCoefficients",null),(0,o._)([(0,i.MZ)()],m.prototype,"affectsPixelSize",null),(0,o._)([(0,s.e)({PolynomialXform:"polynomial"})],m.prototype,"type",void 0),m=n=(0,o._)([(0,l.$)("esri.layers.support.rasterTransforms.PolynomialTransform")],m);const y=m},2485:(e,t,r)=>{r.d(t,{A:()=>f});var n,o=r(90237),i=r(68197),s=r(4718),a=r(10107),l=r(56507),u=r(93223),c=r(40608),p=r(72606);let d=n=class extends p.A{constructor(e){super(e),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new n({fromColor:(0,s.o8)(this.fromColor),toColor:(0,s.o8)(this.toColor),algorithm:this.algorithm})}};(0,o._)([(0,u.e)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],d.prototype,"algorithm",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[l.jz],write:!0}})],d.prototype,"fromColor",void 0),(0,o._)([(0,a.MZ)({type:i.A,json:{type:[l.jz],write:!0}})],d.prototype,"toColor",void 0),(0,o._)([(0,a.MZ)({type:["algorithmic"]})],d.prototype,"type",void 0),d=n=(0,o._)([(0,c.$)("esri.rest.support.AlgorithmicColorRamp")],d);const f=d},72606:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(90237),o=r(25482),i=r(10107),s=(r(44208),r(53966),r(87811),r(40608));let a=class extends o.A{constructor(e){super(e),this.type=null}};(0,n._)([(0,i.MZ)({readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=(0,n._)([(0,s.$)("esri.rest.support.ColorRamp")],a);const l=a},1626:(e,t,r)=>{r.d(t,{A:()=>p});var n,o=r(90237),i=r(4718),s=r(10107),a=(r(44208),r(53966),r(40608)),l=r(2485),u=r(72606);let c=n=class extends u.A{constructor(e){super(e),this.colorRamps=null,this.type="multipart"}clone(){return new n({colorRamps:(0,i.o8)(this.colorRamps)})}};(0,o._)([(0,s.MZ)({type:[l.A],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,o._)([(0,s.MZ)({type:["multipart"]})],c.prototype,"type",void 0),c=n=(0,o._)([(0,a.$)("esri.rest.support.MultipartColorRamp")],c);const p=c},95349:(e,t,r)=>{r.d(t,{g:()=>s,r:()=>a});var n=r(2485),o=r(72606),i=r(1626);const s={key:"type",base:o.A,typeMap:{algorithmic:n.A,multipart:i.A}};function a(e){return e?.type?"algorithmic"===e.type?n.A.fromJSON(e):"multipart"===e.type?i.A.fromJSON(e):null:null}}}]);
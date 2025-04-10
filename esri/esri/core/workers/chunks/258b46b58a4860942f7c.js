"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6575],{91829:(t,e,n)=>{function r(){return[0,0,0,0]}function o(t,e,n,r){return[t,e,n,r]}function i(t,e,n,r){return[t,e,n,r]}function s(t,e=[0,0,0,0]){const n=Math.min(4,t.length);for(let r=0;r<n;++r)e[r]=t[r];return e}function a(){return o(1,1,1,1)}function c(){return o(1,0,0,0)}function u(){return o(0,1,0,0)}function l(){return o(0,0,1,0)}function f(){return o(0,0,0,1)}n.d(e,{CN:()=>i,Un:()=>E,ci:()=>s,fA:()=>o,uY:()=>N,vt:()=>r});const N=[0,0,0,0],E=a(),I=c(),O=u(),A=l(),T=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:E,UNIT_W:T,UNIT_X:I,UNIT_Y:O,UNIT_Z:A,ZEROS:N,clone:function(t){return[t[0],t[1],t[2],t[3]]},create:r,createView:function(t,e){return new Float64Array(t,e,4)},freeze:i,fromArray:s,fromValues:o,ones:a,unitW:f,unitX:c,unitY:u,unitZ:l,zeros:function(){return[0,0,0,0]}},Symbol.toStringTag,{value:"Module"}))},34727:(t,e,n)=>{n.d(e,{$8:()=>S,Cc:()=>s,Hx:()=>O,Io:()=>g,KJ:()=>u,Sp:()=>N,XM:()=>l,YN:()=>f,ZH:()=>I,cU:()=>o,gg:()=>E,hs:()=>a,kU:()=>c,or:()=>m,pF:()=>v,pq:()=>M,qE:()=>i});const r=new Float32Array(1);function o(t){--t;for(let e=1;e<32;e<<=1)t|=t>>e;return t+1}function i(t,e,n){return Math.min(Math.max(t,e),n)}function s(t,e,n){return t+(e-t)*n}function a(t,e,n,r,o){return s(r,o,(t-e)/(n-e))}function c(t){return t*Math.PI/180}function u(t){return 180*t/Math.PI}function l(t){return Math.acos(i(t,-1,1))}function f(t){return Math.asin(i(t,-1,1))}function N(t,e,n=1e-6){return t===e||!(!Number.isFinite(t)||!Number.isFinite(e))&&(t>e?t-e:e-t)<=n}function E(t,e,n=1e-6){return!N(t,e,n)&&t>e}function I(t,e,n=1e-6){return!N(t,e,n)&&t<e}function O(t,e,n=1e-6){return N(t,e,n)||t>e}const A=new DataView(new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT));function T(t){return A.setFloat64(0,t),A.getBigInt64(0)}const d=BigInt("1000000"),h=p(1);function p(t){const e=T(t=Math.abs(t)),n=function(t){return A.setBigInt64(0,t),A.getFloat64(0)}(e<=d?d:e-d);return Math.abs(t-n)}function g(t,e,n=h){if(t===e)return!0;if(!Number.isFinite(t)||!Number.isFinite(e))return!1;if(null!=n&&p(Math.min(Math.abs(t),Math.abs(e)))<n)return Math.abs(t-e)<=n;const r=T(t),o=T(e);return r<0==o<0&&!((r<o?o-r:r-o)>d)}function S(t){return R(Math.max(-M,Math.min(t,M)))}function R(t){return r[0]=t,r[0]}function m(t){const e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[3]*t[3]+t[4]*t[4]+t[5]*t[5],r=t[6]*t[6]+t[7]*t[7]+t[8]*t[8];return!(N(e,1)&&N(n,1)&&N(r,1))}const M=R(34028234663852886e22);function v(t,e,n){if(void 0===n||0==+n)return Math[t](e);if(e=+e,n=+n,isNaN(e)||"number"!=typeof n||n%1!=0)return NaN;let r=e.toString().split("e");return r=(e=Math[t](+(r[0]+"e"+(r[1]?+r[1]-n:-n)))).toString().split("e"),+(r[0]+"e"+(r[1]?+r[1]+n:n))}},9318:(t,e,n)=>{n.d(e,{b:()=>i});var r=n(34727),o=n(97146);function i(t,e,n){const i=Array.isArray(t),l=i?t.length/e:t.byteLength/(4*e),f=i?t:new Uint32Array(t,0,l*e),N=n?.minReduction??0,E=n?.originalIndices||null,I=E?E.length:0,O=n?.componentOffsets||null;let A=0;if(O)for(let t=0;t<O.length-1;t++){const e=O[t+1]-O[t];e>A&&(A=e)}else A=l;const T=Math.floor(1.1*A)+1;(null==u||u.length<2*T)&&(u=new Uint32Array((0,r.cU)(2*T)));for(let t=0;t<2*T;t++)u[t]=0;let d=0;const h=!!O&&!!E,p=h?I:l;let g=(0,o.my)(l);const S=new Uint32Array(I),R=1.96;let m=0!==N?Math.ceil(4*R*R/(N*N)*N*(1-N)):p,M=1,v=O?O[1]:p;for(let t=0;t<p;t++){if(t===m){const e=1-d/t;if(e+R*Math.sqrt(e*(1-e)/t)<N)return null;m*=2}if(t===v){for(let t=0;t<2*T;t++)u[t]=0;if(E)for(let t=O[M-1];t<O[M];t++)S[t]=g[E[t]];v=O[++M]}const n=h?E[t]:t,r=n*e,o=c(f,r,e);let i=o%T,a=d;for(;0!==u[2*i+1];){if(u[2*i]===o){const t=u[2*i+1]-1;if(s(f,r,t*e,e)){a=g[t];break}}i++,i>=T&&(i-=T)}a===d&&(u[2*i]=o,u[2*i+1]=n+1,d++),g[n]=a}if(0!==N&&1-d/l<N)return null;if(h){for(let t=O[M-1];t<S.length;t++)S[t]=g[E[t]];g=(0,o.Dg)(S)}const C=i?new Array(d):new Uint32Array(d*e);d=0;for(let t=0;t<p;t++)g[t]===d&&(a(f,(h?E[t]:t)*e,C,d*e,e),d++);if(E&&!h){const t=new Uint32Array(I);for(let e=0;e<t.length;e++)t[e]=g[E[e]];g=(0,o.Dg)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:g,uniqueCount:d}}function s(t,e,n,r){for(let o=0;o<r;o++)if(t[e+o]!==t[n+o])return!1;return!0}function a(t,e,n,r,o){for(let i=0;i<o;i++)n[r+i]=t[e+i]}function c(t,e,n){let r=0;for(let o=0;o<n;o++)r=t[e+o]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let u=null},4431:(t,e,n)=>{n.d(e,{U:()=>i});var r=n(63907),o=n(74038);function i(t,e=0){const n=t.stride;return Array.from(t.fields.keys()).map((r=>{const i=t.fields.get(r),a=i.constructor.ElementCount,c=s(i.constructor.ElementType),u=i.offset,l=i.optional?.glNormalized??!1;return new o._(r,a,c,u,n,l,e)}))}function s(t){const e=a[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const a={u8:r.pe.UNSIGNED_BYTE,u16:r.pe.UNSIGNED_SHORT,u32:r.pe.UNSIGNED_INT,i8:r.pe.BYTE,i16:r.pe.SHORT,i32:r.pe.INT,f32:r.pe.FLOAT}},46540:(t,e,n)=>{var r;n.d(e,{r:()=>r}),function(t){t.POSITION="position",t.NORMAL="normal",t.NORMALCOMPRESSED="normalCompressed",t.UV0="uv0",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.ROTATION="rotation",t.TANGENT="tangent",t.OFFSET="offset",t.PERSPECTIVEDIVIDE="perspectiveDivide",t.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",t.LENGTH="length",t.PREVPOSITION="prevPosition",t.NEXTPOSITION="nextPosition",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.INSTANCEMODELORIGINHI="instanceModelOriginHi",t.INSTANCEMODELORIGINLO="instanceModelOriginLo",t.INSTANCEMODEL="instanceModel",t.INSTANCEMODELNORMAL="instanceModelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMAL2COMPRESSED="normal2Compressed",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.START_UP="startUp",t.END_UP="endUp",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},3055:(t,e,n)=>{n.d(e,{I$:()=>s,In:()=>u,gr:()=>c});var r=n(4431),o=n(1843),i=n(46540);const s=(0,o.BP)().vec3f(i.r.POSITION).u16(i.r.COMPONENTINDEX).freeze(),a=(0,o.BP)().vec2u8(i.r.SIDENESS).freeze(),c=((0,r.U)(a),(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze()),u=(0,o.BP)().vec3f(i.r.POSITION0).vec3f(i.r.POSITION1).vec2i16(i.r.NORMALCOMPRESSED).vec2i16(i.r.NORMAL2COMPRESSED).u16(i.r.COMPONENTINDEX).u8(i.r.VARIANTOFFSET,{glNormalized:!0}).u8(i.r.VARIANTSTROKE).u8(i.r.VARIANTEXTENSION,{glNormalized:!0}).freeze();new Map([[i.r.POSITION0,0],[i.r.POSITION1,1],[i.r.COMPONENTINDEX,2],[i.r.VARIANTOFFSET,3],[i.r.VARIANTSTROKE,4],[i.r.VARIANTEXTENSION,5],[i.r.NORMALCOMPRESSED,6],[i.r.NORMAL2COMPRESSED,7],[i.r.SIDENESS,8]])},93406:(t,e,n)=>{n.d(e,{K:()=>c});var r=n(34727),o=n(3694),i=n(38954),s=n(51850);const a=-1;function c(t,e,n){const r=t.vertices.position,o=t.vertices.componentIndex,s=O.position0,c=O.position1,f=O.faceNormal0,E=O.faceNormal1,{edges:I,normals:A}=l(t),T=I.length/4,d=e.allocate(T);let h=0;const p=T,R=n?.allocate(p);let M=0,v=0,C=0;N.length=0;for(let t=0;t<T;++t){const e=4*t;r.getVec(I.data[e],s),r.getVec(I.data[e+1],c);const n=N.pushNew();n.index=4*t,n.length=(0,i.j)(s,c)}N.sort(((t,e)=>e.length-t.length));const L=new Array,P=new Array;N.forAll((({length:t,index:l})=>{const N=I.data[l],T=I.data[l+1],p=I.data[l+2],U=I.data[l+3],w=U===a;if(r.getVec(N,s),r.getVec(T,c),w){const t=3*p;(0,i.i)(f,A.data[t],A.data[t+1],A.data[t+2]),(0,i.c)(E,f),O.componentIndex=o.get(N),O.cosAngle=(0,i.f)(f,E)}else{let t=3*p;if((0,i.i)(f,A.data[t],A.data[t+1],A.data[t+2]),t=3*U,(0,i.i)(E,A.data[t],A.data[t+1],A.data[t+2]),O.componentIndex=o.get(N),O.cosAngle=(0,i.f)(f,E),function(t,e){return t.cosAngle>e}(O,S))return;O.cosAngle<-.9999&&(0,i.c)(E,f)}v+=t,C++,w||function(t,e){return t.cosAngle<e}(O,m)?(e.write(d,h++,O),L.push(t)):u(O,g)&&(R&&n&&n.write(R,M++,O),P.push(t))}));const U=new Float32Array(L.reverse()),w=new Float32Array(P.reverse()),y=R&&n?{instancesData:R.slice(0,M),lodInfo:{lengths:w}}:void 0;return{regular:{instancesData:d.slice(0,h),lodInfo:{lengths:U}},silhouette:y,averageEdgeLength:v/C}}function u(t,e){const n=(0,r.XM)(t.cosAngle);return(0,i.o)(T,t.position1,t.position0),n*((0,i.f)((0,i.e)(A,t.faceNormal0,t.faceNormal1),T)>0?-1:1)>e}function l(t){const e=t.faces.length/3,n=t.faces,r=t.neighbors,o=t.vertices.position;E.length=I.length=0;for(let t=0;t<e;t++){const e=3*t,s=r[e],c=r[e+1],u=r[e+2],l=n[e],f=n[e+1],N=n[e+2];o.getVec(l,d),o.getVec(f,h),o.getVec(N,p),(0,i.d)(h,h,d),(0,i.d)(p,p,d),(0,i.e)(d,h,p),(0,i.n)(d,d),I.pushArray(d),(s===a||l<f)&&(E.push(l),E.push(f),E.push(t),E.push(s)),(c===a||f<N)&&(E.push(f),E.push(N),E.push(t),E.push(c)),(u===a||N<l)&&(E.push(N),E.push(l),E.push(t),E.push(u))}return{edges:E,normals:I}}class f{constructor(){this.index=0,this.length=0}}const N=new o.A({allocator:t=>t||new f,deallocator:null}),E=new o.A({deallocator:null}),I=new o.A({deallocator:null}),O=new class{constructor(){this.position0=(0,s.vt)(),this.position1=(0,s.vt)(),this.faceNormal0=(0,s.vt)(),this.faceNormal1=(0,s.vt)(),this.componentIndex=0,this.cosAngle=0}},A=(0,s.vt)(),T=(0,s.vt)(),d=(0,s.vt)(),h=(0,s.vt)(),p=(0,s.vt)(),g=(0,r.kU)(4),S=Math.cos(g),R=(0,r.kU)(35),m=Math.cos(R)},53099:(t,e,n)=>{n.d(e,{o6:()=>L,HY:()=>F,hx:()=>P,Jb:()=>D});var r=n(9318);function o(t,e,n){const r=e/3,o=new Uint32Array(n+1),i=new Uint32Array(n+1),s=(t,e)=>{t<e?o[t+1]++:i[e+1]++};for(let e=0;e<r;e++){const n=t[3*e],r=t[3*e+1],o=t[3*e+2];s(n,r),s(r,o),s(o,n)}let a=0,c=0;for(let t=0;t<n;t++){const e=o[t+1],n=i[t+1];o[t+1]=a,i[t+1]=c,a+=e,c+=n}const u=new Uint32Array(6*r),l=o[n],f=(t,e,n)=>{if(t<e){const r=o[t+1]++;u[2*r]=e,u[2*r+1]=n}else{const r=i[e+1]++;u[2*l+2*r]=t,u[2*l+2*r+1]=n}};for(let e=0;e<r;e++){const n=t[3*e],r=t[3*e+1],o=t[3*e+2];f(n,r,e),f(r,o,e),f(o,n,e)}const N=(t,e)=>{const n=2*t,r=e-t;for(let t=1;t<r;t++){const e=u[n+2*t],r=u[n+2*t+1];let o=t-1;for(;o>=0&&u[n+2*o]>e;o--)u[n+2*o+2]=u[n+2*o],u[n+2*o+3]=u[n+2*o+1];u[n+2*o+2]=e,u[n+2*o+3]=r}};for(let t=0;t<n;t++)N(o[t],o[t+1]),N(l+i[t],l+i[t+1]);const E=new Int32Array(3*r),I=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,O=(t,e)=>{const n=I(t,e);E[3*e+n]=-1},A=(t,e,n,r)=>{const o=I(t,e);E[3*e+o]=r;const i=I(n,r);E[3*r+i]=e};for(let t=0;t<n;t++){let e=o[t];const n=o[t+1];let r=i[t];const s=i[t+1];for(;e<n&&r<s;){const n=u[2*e],o=u[2*l+2*r];n===o?(A(t,u[2*e+1],o,u[2*l+2*r+1]),e++,r++):n<o?(O(t,u[2*e+1]),e++):(O(o,u[2*l+2*r+1]),r++)}for(;e<n;)O(t,u[2*e+1]),e++;for(;r<s;)O(u[2*l+2*r],u[2*l+2*r+1]),r++}return E}var i=n(1843),s=n(46540),a=n(3055),c=n(87811),u=n(38954),l=n(51850),f=n(4431),N=n(34727);function E(t,e,n,r,o,i=2){const s=1/(Math.abs(n)+Math.abs(r)+Math.abs(o)),a=n*s,c=r*s,u=o<=0?(a>=0?1:-1)*(1-Math.abs(c)):a,l=o<=0?(c>=0?1:-1)*(1-Math.abs(a)):c,f=e*i;t[f]=I(u),t[f+1]=I(l)}function I(t){return(0,N.qE)(Math.round(32767*t),-32767,32767)}n(11868);class O{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?p:h}write(t,e,n){v.seed=this._edgeHashFunction(n);const r=v.getIntRange(0,255),o=v.getIntRange(0,this.settings.variants-1),i=v.getFloat(),s=255*(.5*function(t){return Math.abs(t)**1.2*Math.sign(t)}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7))+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,o),t.variantExtension.set(e,s)}}const A=new Float32Array(6),T=new Uint32Array(A.buffer),d=new Uint32Array(1);function h(t){return A[0]=t.position0[0],A[1]=t.position0[1],A[2]=t.position0[2],A[3]=t.position1[0],A[4]=t.position1[1],A[5]=t.position1[2],d[0]=31*(31*(31*(31*(31*(166811+T[0])+T[1])+T[2])+T[3])+T[4])+T[5],d[0]}function p(t){const e=A;e[0]=S(t.position0[0]),e[1]=S(t.position0[1]),e[2]=S(t.position0[2]),e[3]=S(t.position1[0]),e[4]=S(t.position1[1]),e[5]=S(t.position1[2]),d[0]=5381;for(let t=0;t<T.length;t++)d[0]=31*d[0]+T[t];return d[0]}const g=1e4;function S(t){return Math.round(t*g)/g}class R{constructor(){this._commonWriter=new O}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return a.gr.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n),(0,u.g)(M,n.faceNormal0,n.faceNormal1),(0,u.n)(M,M);const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;E(r,e,M[0],M[1],M[2],o)}}R.Layout=a.gr,R.glLayout=(0,f.U)(a.gr,1);class m{constructor(){this._commonWriter=new O}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return a.In.createBuffer(t)}write(t,e,n){this._commonWriter.write(t,e,n);{const{typedBuffer:r,typedBufferStride:o}=t.normalCompressed;E(r,e,n.faceNormal0[0],n.faceNormal0[1],n.faceNormal0[2],o)}{const{typedBuffer:r,typedBufferStride:o}=t.normal2Compressed;E(r,e,n.faceNormal1[0],n.faceNormal1[1],n.faceNormal1[2],o)}}}m.Layout=a.In,m.glLayout=(0,f.U)(a.In,1);const M=(0,l.vt)(),v=new c.A;var C=n(93406);function L(t){const e=P(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return w.updateSettings(t.writerSettings),y.updateSettings(t.writerSettings),(0,C.K)(e,w,y)}function P(t,e,n,i){if(e){const e=o(n,i,t.count);return new U(n,i,e,t)}const s=(0,r.b)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:i}),c=o(s.indices,i,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:c,vertices:a.I$.createView(s.buffer)}}class U{constructor(t,e,n,r){this.faces=t,this.facesLength=e,this.neighbors=n,this.vertices=r}}const w=new R,y=new m,D=(0,i.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1),F=(0,i.BP)().vec3f(s.r.POSITION0).vec3f(s.r.POSITION1).u16(s.r.COMPONENTINDEX)},74038:(t,e,n)=>{n.d(e,{_:()=>r});class r{constructor(t,e,n,r,o,i=!1,s=0){this.name=t,this.count=e,this.type=n,this.offset=r,this.stride=o,this.normalized=i,this.divisor=s}}}}]);
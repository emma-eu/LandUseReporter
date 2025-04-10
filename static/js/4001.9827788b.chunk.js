"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[4001,54787],{26382:(r,e,t)=>{t.r(e),t.d(e,{l:()=>u});var n,a=t(54787),o={exports:{}};const i=(0,a.g)(function(){return n||(n=1,r=o,e="undefined"!=typeof document?document.currentScript?.src:void 0,t=function(){var r,t,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=new Promise(((e,n)=>{r=e,t=n})),i=Object.assign({},a),u="./this.program",s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),e&&(s=e),s=s.startsWith("blob:")?"":s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1),n=r=>fetch(r,{credentials:"same-origin"}).then((r=>r.ok?r.arrayBuffer():Promise.reject(new Error(r.status+" : "+r.url)))),a.print||console.log.bind(console);var l=a.printErr||console.error.bind(console);Object.assign(a,i),i=null,a.arguments&&a.arguments,a.thisProgram&&(u=a.thisProgram);var f,c,d,h,p,v,g,y,m,w=a.wasmBinary,b=!1;function A(){var r=f.buffer;a.HEAP8=c=new Int8Array(r),a.HEAP16=h=new Int16Array(r),a.HEAPU8=d=new Uint8Array(r),a.HEAPU16=p=new Uint16Array(r),a.HEAP32=v=new Int32Array(r),a.HEAPU32=g=new Uint32Array(r),a.HEAPF32=y=new Float32Array(r),a.HEAPF64=m=new Float64Array(r)}var T=[],C=[],_=[];function P(r){T.unshift(r)}function W(r){_.unshift(r)}var E=0,F=null;function j(r){a.onAbort?.(r),l(r="Aborted("+r+")"),b=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}var S,$=r=>r.startsWith("data:application/octet-stream;base64,");function k(){var r="lyr3DMain.wasm";return $(r)?r:function(r){return a.locateFile?a.locateFile(r,s):s+r}(r)}function x(r){if(r==S&&w)return new Uint8Array(w);throw"both async and sync fetching of the wasm failed"}function R(r,e,t){return function(r){return w?Promise.resolve().then((()=>x(r))):n(r).then((r=>new Uint8Array(r)),(()=>x(r)))}(r).then((r=>WebAssembly.instantiate(r,e))).then(t,(r=>{l(`failed to asynchronously prepare wasm: ${r}`),j(r)}))}var O=r=>{for(;r.length>0;)r.shift()(a)};a.noExitRuntime;class U{constructor(r){this.excPtr=r,this.ptr=r-24}set_type(r){g[this.ptr+4>>2]=r}get_type(){return g[this.ptr+4>>2]}set_destructor(r){g[this.ptr+8>>2]=r}get_destructor(){return g[this.ptr+8>>2]}set_caught(r){r=r?1:0,c[this.ptr+12]=r}get_caught(){return 0!=c[this.ptr+12]}set_rethrown(r){r=r?1:0,c[this.ptr+13]=r}get_rethrown(){return 0!=c[this.ptr+13]}init(r,e){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(e)}set_adjusted_ptr(r){g[this.ptr+16>>2]=r}get_adjusted_ptr(){return g[this.ptr+16>>2]}}var I={},M=r=>{for(;r.length;){var e=r.pop();r.pop()(e)}};function D(r){return this.fromWireType(g[r>>2])}var H,V,B,N={},L={},z={},G=r=>{throw new H(r)},q=(r,e,t)=>{function n(e){var n=t(e);n.length!==r.length&&G("Mismatched type converter count");for(var a=0;a<r.length;++a)Q(r[a],n[a])}r.forEach((r=>z[r]=e));var a=new Array(e.length),o=[],i=0;e.forEach(((r,e)=>{L.hasOwnProperty(r)?a[e]=L[r]:(o.push(r),N.hasOwnProperty(r)||(N[r]=[]),N[r].push((()=>{a[e]=L[r],++i===o.length&&n(a)})))})),0===o.length&&n(a)},J={},K=r=>{for(var e="",t=r;d[t];)e+=V[d[t++]];return e},Y=r=>{throw new B(r)};function Q(r,e){return function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=e.name;if(r||Y(`type "${n}" must have a positive integer typeid pointer`),L.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;Y(`Cannot register type '${n}' twice`)}if(L[r]=e,delete z[r],N.hasOwnProperty(r)){var a=N[r];delete N[r],a.forEach((r=>r()))}}(r,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}var X=8,Z=[],rr=[],er=r=>{r>9&&0==--rr[r+1]&&(rr[r]=void 0,Z.push(r))},tr=()=>rr.length/2-5-Z.length,nr=r=>(r||Y("Cannot use deleted val. handle = "+r),rr[r]),ar=r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Z.pop()||rr.length;return rr[e]=r,rr[e+1]=1,e}}},or={name:"emscripten::val",fromWireType:r=>{var e=nr(r);return er(r),e},toWireType:(r,e)=>ar(e),argPackAdvance:X,readValueFromPointer:D,destructorFunction:null},ir=(r,e)=>{switch(e){case 4:return function(r){return this.fromWireType(y[r>>2])};case 8:return function(r){return this.fromWireType(m[r>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},ur=(r,e)=>Object.defineProperty(e,"name",{value:r});var sr,lr,fr,cr=(r,e,t)=>{if(void 0===r[e].overloadTable){var n=r[e];r[e]=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r[e].overloadTable.hasOwnProperty(a.length)||Y(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[a.length].apply(this,a)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},dr=(r,e,t)=>{a.hasOwnProperty(r)?((void 0===t||void 0!==a[r].overloadTable&&void 0!==a[r].overloadTable[t])&&Y(`Cannot register public name '${r}' twice`),cr(a,r,r),a[r].overloadTable.hasOwnProperty(t)&&Y(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[r].overloadTable[t]=e):(a[r]=e,a[r].argCount=t)},hr=(r,e,t)=>{a.hasOwnProperty(r)||G("Replacing nonexistent public symbol"),void 0!==a[r].overloadTable&&void 0!==t?a[r].overloadTable[t]=e:(a[r]=e,a[r].argCount=t)},pr=[],vr=r=>{var e=pr[r];return e||(r>=pr.length&&(pr.length=r+1),pr[r]=e=sr.get(r)),e},gr=function(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return r.includes("j")?((r,e,t)=>(r=r.replace(/p/g,"i"),(0,a["dynCall_"+r])(e,...t)))(r,e,t):vr(e)(...t)},yr=(r,e)=>{var t=(r=K(r)).includes("j")?((r,e)=>function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return gr(r,e,n)})(r,e):vr(e);return"function"!=typeof t&&Y(`unknown function pointer with signature ${r}: ${e}`),t},mr=r=>{var e=Nr(r),t=K(e);return Lr(e),t},wr=(r,e,t)=>{switch(e){case 1:return t?r=>c[r]:r=>d[r];case 2:return t?r=>h[r>>1]:r=>p[r>>1];case 4:return t?r=>v[r>>2]:r=>g[r>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},br=(r,e,t)=>((r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<r.length;++i){var u=r.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++i)),u<=127){if(t>=o)break;e[t++]=u}else if(u<=2047){if(t+1>=o)break;e[t++]=192|u>>6,e[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;e[t++]=224|u>>12,e[t++]=128|u>>6&63,e[t++]=128|63&u}else{if(t+3>=o)break;e[t++]=240|u>>18,e[t++]=128|u>>12&63,e[t++]=128|u>>6&63,e[t++]=128|63&u}}return e[t]=0,t-a})(r,d,e,t),Ar="undefined"!=typeof TextDecoder?new TextDecoder:void 0,Tr=(r,e)=>r?function(r){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(var t=e+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:NaN),n=e;r[n]&&!(n>=t);)++n;if(n-e>16&&r.buffer&&Ar)return Ar.decode(r.subarray(e,n));for(var a="";e<n;){var o=r[e++];if(128&o){var i=63&r[e++];if(192!=(224&o)){var u=63&r[e++];if((o=224==(240&o)?(15&o)<<12|i<<6|u:(7&o)<<18|i<<12|u<<6|63&r[e++])<65536)a+=String.fromCharCode(o);else{var s=o-65536;a+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else a+=String.fromCharCode((31&o)<<6|i)}else a+=String.fromCharCode(o)}return a}(d,r,e):"",Cr="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,_r=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-r>32&&Cr)return Cr.decode(d.subarray(r,t));for(var o="",i=0;!(i>=e/2);++i){var u=h[r+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Pr=(r,e,t)=>{if(t??=2147483647,t<2)return 0;for(var n=e,a=(t-=2)<2*r.length?t/2:r.length,o=0;o<a;++o){var i=r.charCodeAt(o);h[e>>1]=i,e+=2}return h[e>>1]=0,e-n},Wr=r=>2*r.length,Er=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=v[r+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Fr=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,a=n+t-4,o=0;o<r.length;++o){var i=r.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++o)),v[e>>2]=i,(e+=4)+4>a)break}return v[e>>2]=0,e-n},jr=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Sr={},$r=(r,e)=>Math.ceil(r/e)*e,kr=r=>{var e=(r-f.buffer.byteLength+65535)/65536|0;try{return f.grow(e),A(),1}catch(t){}},xr={},Rr=()=>{if(!Rr.strings){var r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:u||"./this.program"};for(var e in xr)void 0===xr[e]?delete r[e]:r[e]=xr[e];var t=[];for(var e in r)t.push(`${e}=${r[e]}`);Rr.strings=t}return Rr.strings},Or=(r,e)=>{r<128?e.push(r):e.push(r%128|128,r>>7)},Ur=(r,e)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((r=>{for(var e={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==r[0]?[]:[e[r[0]]]},n=1;n<r.length;++n)t.parameters.push(e[r[n]]);return t})(e),r);var t=[1];((r,e)=>{var t=r.slice(0,1),n=r.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};e.push(96),Or(n.length,e);for(var o=0;o<n.length;++o)e.push(a[n[o]]);"v"==t?e.push(0):e.push(1,a[t])})(e,t);var n=[0,97,115,109,1,0,0,0,1];Or(t.length,n),n.push(...t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:r}}).exports.f},Ir=r=>(fr||(fr=new WeakMap,((r,e)=>{if(fr)for(var t=r;t<r+e;t++){var n=vr(t);n&&fr.set(n,t)}})(0,sr.length)),fr.get(r)||0),Mr=[],Dr=(r,e)=>{sr.set(r,e),pr[r]=sr.get(r)};H=a.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},(()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);V=r})(),B=a.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},rr.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=tr,lr=a.UnboundTypeError=((r,e)=>{var t=ur(e,(function(r){this.name=e,this.message=r;var t=new Error(r).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t})(Error,"UnboundTypeError");var Hr,Vr={k:(r,e,t)=>{throw new U(r).init(e,t),r},z:()=>j(""),l:r=>{var e=I[r];delete I[r];var t=e.elements,n=t.length,a=t.map((r=>r.getterReturnType)).concat(t.map((r=>r.setterArgumentType))),o=e.rawConstructor,i=e.rawDestructor;q([r],a,(r=>(t.forEach(((e,t)=>{var a=r[t],o=e.getter,i=e.getterContext,u=r[t+n],s=e.setter,l=e.setterContext;e.read=r=>a.fromWireType(o(i,r)),e.write=(r,e)=>{var t=[];s(l,r,u.toWireType(t,e)),M(t)}})),[{name:e.name,fromWireType:r=>{for(var e=new Array(n),a=0;a<n;++a)e[a]=t[a].read(r);return i(r),e},toWireType:(r,a)=>{if(n!==a.length)throw new TypeError(`Incorrect number of tuple elements for ${e.name}: expected=${n}, actual=${a.length}`);for(var u=o(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==r&&r.push(i,u),u},argPackAdvance:X,readValueFromPointer:D,destructorFunction:i}])))},t:r=>{var e=J[r];delete J[r];var t=e.rawConstructor,n=e.rawDestructor,a=e.fields,o=a.map((r=>r.getterReturnType)).concat(a.map((r=>r.setterArgumentType)));q([r],o,(r=>{var o={};return a.forEach(((e,t)=>{var n=e.fieldName,i=r[t],u=e.getter,s=e.getterContext,l=r[t+a.length],f=e.setter,c=e.setterContext;o[n]={read:r=>i.fromWireType(u(s,r)),write:(r,e)=>{var t=[];f(c,r,l.toWireType(t,e)),M(t)}}})),[{name:e.name,fromWireType:r=>{var e={};for(var t in o)e[t]=o[t].read(r);return n(r),e},toWireType:(r,e)=>{for(var a in o)if(!(a in e))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,e[a]);return null!==r&&r.push(n,i),i},argPackAdvance:X,readValueFromPointer:D,destructorFunction:n}]}))},v:(r,e,t,n,a)=>{},r:(r,e,t,n)=>{Q(r,{name:e=K(e),fromWireType:function(r){return!!r},toWireType:function(r,e){return e?t:n},argPackAdvance:X,readValueFromPointer:function(r){return this.fromWireType(d[r])},destructorFunction:null})},D:r=>Q(r,or),q:(r,e,t)=>{Q(r,{name:e=K(e),fromWireType:r=>r,toWireType:(r,e)=>e,argPackAdvance:X,readValueFromPointer:ir(e,t),destructorFunction:null})},c:(r,e,t,n,a,o,i,u)=>{var s=((r,e)=>{for(var t=[],n=0;n<r;n++)t.push(g[e+4*n>>2]);return t})(e,t);r=(r=>{const e=(r=r.trim()).indexOf("(");return-1!==e?r.substr(0,e):r})(r=K(r)),a=yr(n,a),dr(r,(function(){((r,e)=>{var t=[],n={};throw e.forEach((function r(e){n[e]||L[e]||(z[e]?z[e].forEach(r):(t.push(e),n[e]=!0))})),new lr(`${r}: `+t.map(mr).join([", "]))})(`Cannot call ${r} due to unbound types`,s)}),e-1),q([],s,(t=>{var n=[t[0],null].concat(t.slice(1));return hr(r,function(r,e,t,n,a){var o=e.length;o<2&&Y("argTypes array size mismatch! Must at least get return value and 'this' types!"),e[1];var i=function(r){for(var e=1;e<r.length;++e)if(null!==r[e]&&void 0===r[e].destructorFunction)return!0;return!1}(e),u="void"!==e[0].name,s=o-2,l=new Array(s),f=[],c=[];return ur(r,(function(){c.length=0,f.length=1,f[0]=a;for(var r=0;r<s;++r)l[r]=e[r+2].toWireType(c,r<0||arguments.length<=r?void 0:arguments[r]),f.push(l[r]);return function(r){if(i)M(c);else for(var t=2;t<e.length;t++){var n=1===t?void 0:l[t-2];null!==e[t].destructorFunction&&e[t].destructorFunction(n)}if(u)return e[0].fromWireType(r)}(n(...f))}))}(r,n,0,a,o),e-1),[]}))},h:(r,e,t,n,a)=>{e=K(e);var o=r=>r;if(0===n){var i=32-8*t;o=r=>r<<i>>>i}var u=e.includes("unsigned");Q(r,{name:e,fromWireType:o,toWireType:u?function(r,e){return this.name,e>>>0}:function(r,e){return this.name,e},argPackAdvance:X,readValueFromPointer:wr(e,t,0!==n),destructorFunction:null})},b:(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function a(r){var e=g[r>>2],t=g[r+4>>2];return new n(c.buffer,t,e)}Q(r,{name:t=K(t),fromWireType:a,argPackAdvance:X,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},p:(r,e)=>{var t="std::string"===(e=K(e));Q(r,{name:e,fromWireType(r){var e,n=g[r>>2],a=r+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==d[u]){var s=Tr(o,u-o);void 0===e?e=s:(e+=String.fromCharCode(0),e+=s),o=u+1}}else{var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(d[a+i]);e=l.join("")}return Lr(r),e},toWireType(r,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var a="string"==typeof e;a||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||Y("Cannot pass non-string to std::string"),n=t&&a?(r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e})(e):e.length;var o=zr(4+n+1),i=o+4;if(g[o>>2]=n,t&&a)br(e,i,n+1);else if(a)for(var u=0;u<n;++u){var s=e.charCodeAt(u);s>255&&(Lr(i),Y("String has UTF-16 code units that do not fit in 8 bits")),d[i+u]=s}else for(u=0;u<n;++u)d[i+u]=e[u];return null!==r&&r.push(Lr,o),o},argPackAdvance:X,readValueFromPointer:D,destructorFunction(r){Lr(r)}})},n:(r,e,t)=>{var n,a,o,i;t=K(t),2===e?(n=_r,a=Pr,i=Wr,o=r=>p[r>>1]):4===e&&(n=Er,a=Fr,i=jr,o=r=>g[r>>2]),Q(r,{name:t,fromWireType:r=>{for(var t,a=g[r>>2],i=r+4,u=0;u<=a;++u){var s=r+4+u*e;if(u==a||0==o(s)){var l=n(i,s-i);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),i=s+e}}return Lr(r),t},toWireType:(r,n)=>{"string"!=typeof n&&Y(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),u=zr(4+o+e);return g[u>>2]=o/e,a(n,u+4,o+e),null!==r&&r.push(Lr,u),u},argPackAdvance:X,readValueFromPointer:D,destructorFunction(r){Lr(r)}})},m:(r,e,t,n,a,o)=>{I[r]={name:K(e),rawConstructor:yr(t,n),rawDestructor:yr(a,o),elements:[]}},d:(r,e,t,n,a,o,i,u,s)=>{I[r].elements.push({getterReturnType:e,getter:yr(t,n),getterContext:a,setterArgumentType:o,setter:yr(i,u),setterContext:s})},u:(r,e,t,n,a,o)=>{J[r]={name:K(e),rawConstructor:yr(t,n),rawDestructor:yr(a,o),fields:[]}},i:(r,e,t,n,a,o,i,u,s,l)=>{J[r].fields.push({fieldName:K(e),getterReturnType:t,getter:yr(n,a),getterContext:o,setterArgumentType:i,setter:yr(u,s),setterContext:l})},s:(r,e)=>{Q(r,{isVoid:!0,name:e=K(e),argPackAdvance:0,fromWireType:()=>{},toWireType:(r,e)=>{}})},B:(r,e,t)=>d.copyWithin(r,e,e+t),a:er,o:r=>{r>9&&(rr[r+1]+=1)},C:()=>ar([]),g:r=>ar((r=>{var e=Sr[r];return void 0===e?K(r):e})(r)),j:()=>ar({}),e:(r,e,t)=>{r=nr(r),e=nr(e),t=nr(t),r[e]=t},f:(r,e)=>{var t=(r=((r,e)=>{var t=L[r];return void 0===t&&Y(`${e} has unknown type ${mr(r)}`),t})(r,"_emval_take_value")).readValueFromPointer(e);return ar(t)},w:(r,e,t,n)=>{var a=(new Date).getFullYear(),o=new Date(a,0,1),i=new Date(a,6,1),u=o.getTimezoneOffset(),s=i.getTimezoneOffset(),l=Math.max(u,s);g[r>>2]=60*l,v[e>>2]=Number(u!=s);var f=r=>{var e=r>=0?"-":"+",t=Math.abs(r);return`UTC${e}${String(Math.floor(t/60)).padStart(2,"0")}${String(t%60).padStart(2,"0")}`},c=f(u),d=f(s);s<u?(br(c,t,17),br(d,n,17)):(br(c,n,17),br(d,t,17))},A:r=>{var e=d.length,t=2147483648;if((r>>>=0)>t)return!1;for(var n=1;n<=4;n*=2){var a=e*(1+.2/n);a=Math.min(a,r+100663296);var o=Math.min(t,$r(Math.max(r,a),65536));if(kr(o))return!0}return!1},x:(r,e)=>{var t=0;return Rr().forEach(((n,a)=>{var o=e+t;g[r+4*a>>2]=o,((r,e)=>{for(var t=0;t<r.length;++t)c[e++]=r.charCodeAt(t);c[e]=0})(n,o),t+=n.length+1})),0},y:(r,e)=>{var t=Rr();g[r>>2]=t.length;var n=0;return t.forEach((r=>n+=r.length+1)),g[e>>2]=n,0}},Br=function(){function r(r,e){return Br=r.exports,f=Br.E,A(),sr=Br.H,function(r){C.unshift(r)}(Br.F),function(){if(E--,a.monitorRunDependencies?.(E),0==E&&F){var r=F;F=null,r()}}(),Br}E++,a.monitorRunDependencies?.(E);var e={a:Vr};if(a.instantiateWasm)try{return a.instantiateWasm(e,r)}catch(n){l(`Module.instantiateWasm callback failed with error: ${n}`),t(n)}return S??=k(),function(r,e,t,n){return r||"function"!=typeof WebAssembly.instantiateStreaming||$(e)||"function"!=typeof fetch?R(e,t,n):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,t).then(n,(function(r){return l(`wasm streaming compile failed: ${r}`),l("falling back to ArrayBuffer instantiation"),R(e,t,n)}))))}(w,S,e,(function(e){r(e.instance)})).catch(t),{}}(),Nr=r=>(Nr=Br.G)(r),Lr=a._free=r=>(Lr=a._free=Br.I)(r),zr=a._malloc=r=>(zr=a._malloc=Br.J)(r);function Gr(){function e(){Hr||(Hr=!0,a.calledRun=!0,b||(O(C),r(a),a.onRuntimeInitialized?.(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)W(a.postRun.shift());O(_)}()))}E>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)P(a.preRun.shift());O(T)}(),E>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((()=>{setTimeout((()=>a.setStatus("")),1),e()}),1)):e()))}if(a.dynCall_viji=(r,e,t,n,o)=>(a.dynCall_viji=Br.K)(r,e,t,n,o),a.dynCall_ji=(r,e)=>(a.dynCall_ji=Br.L)(r,e),a.dynCall_viijii=(r,e,t,n,o,i,u)=>(a.dynCall_viijii=Br.M)(r,e,t,n,o,i,u),a.dynCall_iiiiij=(r,e,t,n,o,i,u)=>(a.dynCall_iiiiij=Br.N)(r,e,t,n,o,i,u),a.dynCall_iiiiijj=(r,e,t,n,o,i,u,s,l)=>(a.dynCall_iiiiijj=Br.O)(r,e,t,n,o,i,u,s,l),a.dynCall_iiiiiijj=(r,e,t,n,o,i,u,s,l,f)=>(a.dynCall_iiiiiijj=Br.P)(r,e,t,n,o,i,u,s,l,f),a.addFunction=(r,e)=>{var t=Ir(r);if(t)return t;var n=(()=>{if(Mr.length)return Mr.pop();try{sr.grow(1)}catch(l){if(!(l instanceof RangeError))throw l;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return sr.length-1})();try{Dr(n,r)}catch(l){if(!(l instanceof TypeError))throw l;var a=Ur(r,e);Dr(n,a)}return fr.set(r,n),n},a.UTF8ToString=Tr,F=function r(){Hr||Gr(),Hr||(F=r)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return Gr(),o},r.exports=t),o.exports;var r,e,t}()),u=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}))},54787:(r,e,t)=>{t.d(e,{c:()=>n,g:()=>a});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}}}]);
//# sourceMappingURL=4001.9827788b.chunk.js.map
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1053,2980],{11053:(e,n,r)=>{r.d(n,{c:()=>t,g:()=>i});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}},82980:(e,n,r)=>{r.r(n),r.d(n,{i:()=>u});var t,i=r(11053),o={exports:{}};const a=(0,i.g)(function(){return t||(t=1,e=o,n="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,r=function(e={}){var r,t,i=void 0!==e?e:{};i.ready=new Promise(((e,n)=>{r=e,t=n}));var o=Object.assign({},i),a="object"==typeof window,u="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var c,f="";(a||u)&&(u?f=self.location.href:"undefined"!=typeof document&&document.currentScript&&(f=document.currentScript.src),n&&(f=n),f=0!==f.indexOf("blob:")?f.substr(0,f.replace(/[?#].*/,"").lastIndexOf("/")+1):"",u&&(c=e=>{var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var s,l,d=i.print||console.log.bind(console),p=i.printErr||console.warn.bind(console);Object.assign(i,o),o=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(s=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&x("no native wasm support detected");var h,v,m,g,y,_,w,b,A,T=!1;function C(){var e=l.buffer;i.HEAP8=h=new Int8Array(e),i.HEAP16=m=new Int16Array(e),i.HEAP32=y=new Int32Array(e),i.HEAPU8=v=new Uint8Array(e),i.HEAPU16=g=new Uint16Array(e),i.HEAPU32=_=new Uint32Array(e),i.HEAPF32=w=new Float32Array(e),i.HEAPF64=b=new Float64Array(e)}var P=[],k=[],E=[];function W(e){P.unshift(e)}function j(e){E.unshift(e)}var R,F=0,S=null;function x(e){i.onAbort&&i.onAbort(e),p(e="Aborted("+e+")"),T=!0,e+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(e);throw t(n),n}function U(e){return e.startsWith("data:application/octet-stream;base64,")}function I(e){try{if(e==R&&s)return new Uint8Array(s);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}catch(e){x(e)}}function O(e,n,r){return function(e){return s||!a&&!u||"function"!=typeof fetch?Promise.resolve().then((()=>I(e))):fetch(e,{credentials:"same-origin"}).then((n=>{if(!n.ok)throw"failed to load wasm binary file at '"+e+"'";return n.arrayBuffer()})).catch((()=>I(e)))}(e).then((e=>WebAssembly.instantiate(e,n))).then((e=>e)).then(r,(e=>{p("failed to asynchronously prepare wasm: "+e),x(e)}))}function z(e){for(;e.length>0;)e.shift()(i)}U(R="i3s.wasm")||(R=function(e){return i.locateFile?i.locateFile(e,f):f+e}(R));var D=[];function M(e){var n=D[e];return n||(e>=D.length&&(D.length=e+1),D[e]=n=A.get(e)),n}function V(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){_[this.ptr+4>>2]=e},this.get_type=function(){return _[this.ptr+4>>2]},this.set_destructor=function(e){_[this.ptr+8>>2]=e},this.get_destructor=function(){return _[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,h[this.ptr+12|0]=e},this.get_caught=function(){return 0!=h[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,h[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=h[this.ptr+13|0]},this.init=function(e,n){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(n)},this.set_adjusted_ptr=function(e){_[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return _[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Se(this.get_type()))return _[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var H={};function B(e){for(;e.length;){var n=e.pop();e.pop()(n)}}function q(e){return this.fromWireType(y[e>>2])}var N={},L={},G={};function X(e,n){var r=function(e,n){return e=function(e){if(void 0===e)return"_unknown";var n=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=48&&n<=57?"_"+e:e}(e),{[e]:function(){return n.apply(this,arguments)}}[e]}(n,(function(e){this.name=n,this.message=e;var r=new Error(e).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var Z=void 0;function $(e){throw new Z(e)}function J(e,n,r){function t(n){var t=r(n);t.length!==e.length&&$("Mismatched type converter count");for(var i=0;i<e.length;++i)re(e[i],t[i])}e.forEach((function(e){G[e]=n}));var i=new Array(n.length),o=[],a=0;n.forEach(((e,n)=>{L.hasOwnProperty(e)?i[n]=L[e]:(o.push(e),N.hasOwnProperty(e)||(N[e]=[]),N[e].push((()=>{i[n]=L[e],++a===o.length&&t(i)})))})),0===o.length&&t(i)}function K(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var Q=void 0;function Y(e){for(var n="",r=e;v[r];)n+=Q[v[r++]];return n}var ee=void 0;function ne(e){throw new ee(e)}function re(e,n,r={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=n.name;if(e||ne('type "'+t+'" must have a positive integer typeid pointer'),L.hasOwnProperty(e)){if(r.ignoreDuplicateRegistrations)return;ne("Cannot register type '"+t+"' twice")}if(L[e]=n,delete G[e],N.hasOwnProperty(e)){var i=N[e];delete N[e],i.forEach((e=>e()))}}var te=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(e){return this.allocated[e]},this.allocate=function(e){let n=this.freelist.pop()||this.allocated.length;return this.allocated[n]=e,n},this.free=function(e){this.allocated[e]=void 0,this.freelist.push(e)}};function ie(e){e>=te.reserved&&0==--te.get(e).refcount&&te.free(e)}var oe=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return te.allocate({refcount:1,value:e})}};function ae(e,n){switch(n){case 2:return function(e){return this.fromWireType(w[e>>2])};case 3:return function(e){return this.fromWireType(b[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function ue(e,n,r){i.hasOwnProperty(e)?((void 0===r||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[r])&&ne("Cannot register public name '"+e+"' twice"),function(e,n,r){if(void 0===e[n].overloadTable){var t=e[n];e[n]=function(){return e[n].overloadTable.hasOwnProperty(arguments.length)||ne("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[n].overloadTable+")!"),e[n].overloadTable[arguments.length].apply(this,arguments)},e[n].overloadTable=[],e[n].overloadTable[t.argCount]=t}}(i,e,e),i.hasOwnProperty(r)&&ne("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[e].overloadTable[r]=n):(i[e]=n,void 0!==r&&(i[e].numArguments=r))}function ce(e,n,r){i.hasOwnProperty(e)||$("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==r?i[e].overloadTable[r]=n:(i[e]=n,i[e].argCount=r)}function fe(e,n){var r=(e=Y(e)).includes("j")?function(e,n){var r=[];return function(){return r.length=0,Object.assign(r,arguments),function(e,n,r){return e.includes("j")?function(e,n,r){var t=i["dynCall_"+e];return r&&r.length?t.apply(null,[n].concat(r)):t.call(null,n)}(e,n,r):M(n).apply(null,r)}(e,n,r)}}(e,n):M(n);return"function"!=typeof r&&ne("unknown function pointer with signature "+e+": "+n),r}var se=void 0;function le(e){var n=Re(e),r=Y(n);return je(n),r}function de(e,n,r){switch(n){case 0:return r?function(e){return h[e]}:function(e){return v[e]};case 1:return r?function(e){return m[e>>1]}:function(e){return g[e>>1]};case 2:return r?function(e){return y[e>>2]}:function(e){return _[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}var pe="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function he(e,n,r){for(var t=n+r,i=n;e[i]&&!(i>=t);)++i;if(i-n>16&&e.buffer&&pe)return pe.decode(e.subarray(n,i));for(var o="";n<i;){var a=e[n++];if(128&a){var u=63&e[n++];if(192!=(224&a)){var c=63&e[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&e[n++])<65536)o+=String.fromCharCode(a);else{var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function ve(e,n){return e?he(v,e,n):""}var me="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ge(e,n){for(var r=e,t=r>>1,i=t+n/2;!(t>=i)&&g[t];)++t;if((r=t<<1)-e>32&&me)return me.decode(v.subarray(e,r));for(var o="",a=0;!(a>=n/2);++a){var u=m[e+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function ye(e,n,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var t=n,i=(r-=2)<2*e.length?r/2:e.length,o=0;o<i;++o){var a=e.charCodeAt(o);m[n>>1]=a,n+=2}return m[n>>1]=0,n-t}function _e(e){return 2*e.length}function we(e,n){for(var r=0,t="";!(r>=n/4);){var i=y[e+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;t+=String.fromCharCode(55296|o>>10,56320|1023&o)}else t+=String.fromCharCode(i)}return t}function be(e,n,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var t=n,i=t+r-4,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),y[n>>2]=a,(n+=4)+4>i)break}return y[n>>2]=0,n-t}function Ae(e){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);t>=55296&&t<=57343&&++r,n+=4}return n}var Te={};function Ce(e){var n=l.buffer;try{return l.grow(e-n.byteLength+65535>>>16),C(),1}catch(e){}}var Pe=[null,[],[]];function ke(e,n){var r=Pe[e];0===n||10===n?((1===e?d:p)(he(r,0)),r.length=0):r.push(n)}Z=i.InternalError=X(Error,"InternalError"),function(){for(var e=new Array(256),n=0;n<256;++n)e[n]=String.fromCharCode(n);Q=e}(),ee=i.BindingError=X(Error,"BindingError"),te.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),te.reserved=te.allocated.length,i.count_emval_handles=function(){for(var e=0,n=te.reserved;n<te.allocated.length;++n)void 0!==te.allocated[n]&&++e;return e},se=i.UnboundTypeError=X(Error,"UnboundTypeError");var Ee={__call_sighandler:function(e,n){M(e)(n)},__cxa_throw:function(e,n,r){throw new V(e).init(n,r),e},_embind_finalize_value_object:function(e){var n=H[e];delete H[e];var r=n.rawConstructor,t=n.rawDestructor,i=n.fields;J([e],i.map((e=>e.getterReturnType)).concat(i.map((e=>e.setterArgumentType))),(e=>{var o={};return i.forEach(((n,r)=>{var t=n.fieldName,a=e[r],u=n.getter,c=n.getterContext,f=e[r+i.length],s=n.setter,l=n.setterContext;o[t]={read:e=>a.fromWireType(u(c,e)),write:(e,n)=>{var r=[];s(l,e,f.toWireType(r,n)),B(r)}}})),[{name:n.name,fromWireType:function(e){var n={};for(var r in o)n[r]=o[r].read(e);return t(e),n},toWireType:function(e,n){for(var i in o)if(!(i in n))throw new TypeError('Missing field:  "'+i+'"');var a=r();for(i in o)o[i].write(a,n[i]);return null!==e&&e.push(t,a),a},argPackAdvance:8,readValueFromPointer:q,destructorFunction:t}]}))},_embind_register_bigint:function(e,n,r,t,i){},_embind_register_bool:function(e,n,r,t,i){var o=K(r);re(e,{name:n=Y(n),fromWireType:function(e){return!!e},toWireType:function(e,n){return n?t:i},argPackAdvance:8,readValueFromPointer:function(e){var t;if(1===r)t=h;else if(2===r)t=m;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+n);t=y}return this.fromWireType(t[e>>o])},destructorFunction:null})},_embind_register_emval:function(e,n){re(e,{name:n=Y(n),fromWireType:function(e){var n=(e=>(e||ne("Cannot use deleted val. handle = "+e),te.get(e).value))(e);return ie(e),n},toWireType:function(e,n){return oe(n)},argPackAdvance:8,readValueFromPointer:q,destructorFunction:null})},_embind_register_float:function(e,n,r){var t=K(r);re(e,{name:n=Y(n),fromWireType:function(e){return e},toWireType:function(e,n){return n},argPackAdvance:8,readValueFromPointer:ae(n,t),destructorFunction:null})},_embind_register_function:function(e,n,r,t,i,o,a){var u=function(e,n){for(var r=[],t=0;t<e;t++)r.push(_[n+4*t>>2]);return r}(n,r);e=Y(e),i=fe(t,i),ue(e,(function(){!function(e,n){var r=[],t={};throw n.forEach((function e(n){t[n]||L[n]||(G[n]?G[n].forEach(e):(r.push(n),t[n]=!0))})),new se(e+": "+r.map(le).join([", "]))}("Cannot call "+e+" due to unbound types",u)}),n-1),J([],u,(function(r){var t=[r[0],null].concat(r.slice(1));return ce(e,function(e,n,r,t,i){var o=n.length;o<2&&ne("argTypes array size mismatch! Must at least get return value and 'this' types!"),n[1];for(var a=!1,u=1;u<n.length;++u)if(null!==n[u]&&void 0===n[u].destructorFunction){a=!0;break}var c="void"!==n[0].name,f=o-2,s=new Array(f),l=[],d=[];return function(){arguments.length!==f&&ne("function "+e+" called with "+arguments.length+" arguments, expected "+f+" args!"),d.length=0,l.length=1,l[0]=i;for(var r=0;r<f;++r)s[r]=n[r+2].toWireType(d,arguments[r]),l.push(s[r]);return function(e){if(a)B(d);else for(var r=2;r<n.length;r++){var t=1===r?void 0:s[r-2];null!==n[r].destructorFunction&&n[r].destructorFunction(t)}if(c)return n[0].fromWireType(e)}(t.apply(null,l))}}(e,t,0,i,o),n-1),[]}))},_embind_register_integer:function(e,n,r,t,i){n=Y(n);var o=K(r),a=e=>e;if(0===t){var u=32-8*r;a=e=>e<<u>>>u}var c=n.includes("unsigned");re(e,{name:n,fromWireType:a,toWireType:c?function(e,n){return this.name,n>>>0}:function(e,n){return this.name,n},argPackAdvance:8,readValueFromPointer:de(n,o,0!==t),destructorFunction:null})},_embind_register_memory_view:function(e,n,r){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(e){var n=_,r=n[e>>=2],i=n[e+1];return new t(n.buffer,i,r)}re(e,{name:r=Y(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},_embind_register_std_string:function(e,n){var r="std::string"===(n=Y(n));re(e,{name:n,fromWireType:function(e){var n,t=_[e>>2],i=e+4;if(r)for(var o=i,a=0;a<=t;++a){var u=i+a;if(a==t||0==v[u]){var c=ve(o,u-o);void 0===n?n=c:(n+=String.fromCharCode(0),n+=c),o=u+1}}else{var f=new Array(t);for(a=0;a<t;++a)f[a]=String.fromCharCode(v[i+a]);n=f.join("")}return je(e),n},toWireType:function(e,n){var t;n instanceof ArrayBuffer&&(n=new Uint8Array(n));var i="string"==typeof n;i||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||ne("Cannot pass non-string to std::string"),t=r&&i?function(e){for(var n=0,r=0;r<e.length;++r){var t=e.charCodeAt(r);t<=127?n++:t<=2047?n+=2:t>=55296&&t<=57343?(n+=4,++r):n+=3}return n}(n):n.length;var o=We(4+t+1),a=o+4;if(_[o>>2]=t,r&&i)!function(e,n,r){!function(e,n,r,t){if(!(t>0))return 0;for(var i=r+t-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(r>=i)break;n[r++]=a}else if(a<=2047){if(r+1>=i)break;n[r++]=192|a>>6,n[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;n[r++]=224|a>>12,n[r++]=128|a>>6&63,n[r++]=128|63&a}else{if(r+3>=i)break;n[r++]=240|a>>18,n[r++]=128|a>>12&63,n[r++]=128|a>>6&63,n[r++]=128|63&a}}n[r]=0}(e,v,n,r)}(n,a,t+1);else if(i)for(var u=0;u<t;++u){var c=n.charCodeAt(u);c>255&&(je(a),ne("String has UTF-16 code units that do not fit in 8 bits")),v[a+u]=c}else for(u=0;u<t;++u)v[a+u]=n[u];return null!==e&&e.push(je,o),o},argPackAdvance:8,readValueFromPointer:q,destructorFunction:function(e){je(e)}})},_embind_register_std_wstring:function(e,n,r){var t,i,o,a,u;r=Y(r),2===n?(t=ge,i=ye,a=_e,o=()=>g,u=1):4===n&&(t=we,i=be,a=Ae,o=()=>_,u=2),re(e,{name:r,fromWireType:function(e){for(var r,i=_[e>>2],a=o(),c=e+4,f=0;f<=i;++f){var s=e+4+f*n;if(f==i||0==a[s>>u]){var l=t(c,s-c);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),c=s+n}}return je(e),r},toWireType:function(e,t){"string"!=typeof t&&ne("Cannot pass non-string to C++ string type "+r);var o=a(t),c=We(4+o+n);return _[c>>2]=o>>u,i(t,c+4,o+n),null!==e&&e.push(je,c),c},argPackAdvance:8,readValueFromPointer:q,destructorFunction:function(e){je(e)}})},_embind_register_value_object:function(e,n,r,t,i,o){H[e]={name:Y(n),rawConstructor:fe(r,t),rawDestructor:fe(i,o),fields:[]}},_embind_register_value_object_field:function(e,n,r,t,i,o,a,u,c,f){H[e].fields.push({fieldName:Y(n),getterReturnType:r,getter:fe(t,i),getterContext:o,setterArgumentType:a,setter:fe(u,c),setterContext:f})},_embind_register_void:function(e,n){re(e,{isVoid:!0,name:n=Y(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,n){}})},_emval_decref:ie,_emval_incref:function(e){e>4&&(te.get(e).refcount+=1)},_emval_new_cstring:function(e){return oe(function(e){var n=Te[e];return void 0===n?Y(e):n}(e))},_emval_take_value:function(e,n){var r=(e=function(e){var n=L[e];return void 0===n&&ne("_emval_take_value has unknown type "+le(e)),n}(e)).readValueFromPointer(n);return oe(r)},abort:function(){x("")},emscripten_memcpy_big:function(e,n,r){v.copyWithin(e,n,n+r)},emscripten_resize_heap:function(e){var n=v.length,r=2147483648;if((e>>>=0)>r)return!1;let t=(e,n)=>e+(n-e%n)%n;for(var i=1;i<=4;i*=2){var o=n*(1+.2/i);if(o=Math.min(o,e+100663296),Ce(Math.min(r,t(Math.max(e,o),65536))))return!0}return!1},fd_close:function(e){return 52},fd_seek:function(e,n,r,t,i){return 70},fd_write:function(e,n,r,t){for(var i=0,o=0;o<r;o++){var a=_[n>>2],u=_[n+4>>2];n+=8;for(var c=0;c<u;c++)ke(e,v[a+c]);i+=u}return _[t>>2]=i,0}};!function(){var e={env:Ee,wasi_snapshot_preview1:Ee};function n(e,n){var r=e.exports;return i.asm=r,l=i.asm.memory,C(),A=i.asm.__indirect_function_table,function(e){k.unshift(e)}(i.asm.__wasm_call_ctors),function(){if(F--,i.monitorRunDependencies&&i.monitorRunDependencies(F),0==F&&S){var e=S;S=null,e()}}(),r}if(F++,i.monitorRunDependencies&&i.monitorRunDependencies(F),i.instantiateWasm)try{return i.instantiateWasm(e,n)}catch(e){p("Module.instantiateWasm callback failed with error: "+e),t(e)}(function(e,n,r,t){return e||"function"!=typeof WebAssembly.instantiateStreaming||U(n)||"function"!=typeof fetch?O(n,r,t):fetch(n,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,r).then(t,(function(e){return p("wasm streaming compile failed: "+e),p("falling back to ArrayBuffer instantiation"),O(n,r,t)}))))})(s,R,e,(function(e){n(e.instance)})).catch(t)}();var We=function(){return(We=i.asm.malloc).apply(null,arguments)},je=function(){return(je=i.asm.free).apply(null,arguments)},Re=function(){return(Re=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Fe,Se=function(){return(Se=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function xe(){function e(){Fe||(Fe=!0,i.calledRun=!0,T||(z(k),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)j(i.postRun.shift());z(E)}()))}F>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)W(i.preRun.shift());z(P)}(),F>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},S=function e(){Fe||xe(),Fe||(S=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return xe(),e.ready},e.exports=r),o.exports;var e,n,r}()),u=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}))}}]);
"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[84027],{84027:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n,a=(n="undefined"!=typeof document?document.currentScript?.src:void 0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,a=Object.assign({},e),o=new Promise(((e,n)=>{r=e,t=n})),i=Object.assign({},a),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),n&&(s=n),s=s.startsWith("blob:")?"":s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1);var u,l,c=a.print||console.log.bind(console),p=a.printErr||console.error.bind(console);Object.assign(a,i),i=null,a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,a.quit&&a.quit,a.wasmBinary&&(u=a.wasmBinary);var h,d,f,v,y,m,g,$,w=!1;function T(){var e=l.buffer;a.HEAP8=h=new Int8Array(e),a.HEAP16=f=new Int16Array(e),a.HEAPU8=d=new Uint8Array(e),a.HEAPU16=v=new Uint16Array(e),a.HEAP32=y=new Int32Array(e),a.HEAPU32=m=new Uint32Array(e),a.HEAPF32=g=new Float32Array(e),a.HEAPF64=$=new Float64Array(e)}var b=[],C=[],P=[];function A(e){b.unshift(e)}function W(e){P.unshift(e)}var _=0,F=null;function k(e){a.onAbort?.(e),p(e="Aborted("+e+")"),w=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var S,O=e=>e.startsWith("data:application/octet-stream;base64,");function j(){var e="basis_transcoder.wasm";return O(e)?e:function(e){return a.locateFile?a.locateFile(e,s):s+e}(e)}function E(e){if(e==S&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}function R(e,r,t){return function(e){return u||"function"!=typeof fetch?Promise.resolve().then((()=>E(e))):fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw`failed to load wasm binary file at '${e}'`;return r.arrayBuffer()})).catch((()=>E(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then(t,(e=>{p(`failed to asynchronously prepare wasm: ${e}`),k(e)}))}var D=e=>{for(;e.length>0;)e.shift()(a)};a.noExitRuntime;class x{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){m[this.ptr+4>>2]=e}get_type(){return m[this.ptr+4>>2]}set_destructor(e){m[this.ptr+8>>2]=e}get_destructor(){return m[this.ptr+8>>2]}set_caught(e){e=e?1:0,h[this.ptr+12]=e}get_caught(){return 0!=h[this.ptr+12]}set_rethrown(e){e=e?1:0,h[this.ptr+13]=e}get_rethrown(){return 0!=h[this.ptr+13]}init(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)}set_adjusted_ptr(e){m[this.ptr+16>>2]=e}get_adjusted_ptr(){return m[this.ptr+16>>2]}get_exception_ptr(){if(Tr(this.get_type()))return m[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}var I={},V=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function H(e){return this.fromWireType(m[e>>2])}var U,B,N,M={},z={},q={},G=e=>{throw new U(e)},L=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&G("Mismatched type converter count");for(var a=0;a<e.length;++a)Q(e[a],n[a])}e.forEach((function(e){q[e]=r}));var a=new Array(r.length),o=[],i=0;r.forEach(((e,r)=>{z.hasOwnProperty(e)?a[r]=z[e]:(o.push(e),M.hasOwnProperty(e)||(M[e]=[]),M[e].push((()=>{a[r]=z[e],++i===o.length&&n(a)})))})),0===o.length&&n(a)},J=e=>{for(var r="",t=e;d[t];)r+=B[d[t++]];return r},K=e=>{throw new N(e)};function Q(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(e||K(`type "${n}" must have a positive integer typeid pointer`),z.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;K(`Cannot register type '${n}' twice`)}if(z[e]=r,delete q[e],M.hasOwnProperty(e)){var a=M[e];delete M[e],a.forEach((e=>e()))}}(e,r,t)}var Z,X=8,Y=e=>({count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}),ee=e=>{K(function(e){return e.$$.ptrType.registeredClass.name}(e)+" instance already deleted")},re=!1,te=e=>{},ne=e=>{e.count.value-=1,0===e.count.value&&(e=>{e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)})(e)},ae=(e,r,t)=>{if(r===t)return e;if(void 0===t.baseClass)return null;var n=ae(e,r,t.baseClass);return null===n?null:t.downcast(n)},oe={},ie=()=>Object.keys(pe).length,se=()=>{var e=[];for(var r in pe)pe.hasOwnProperty(r)&&e.push(pe[r]);return e},ue=[],le=()=>{for(;ue.length;){var e=ue.pop();e.$$.deleteScheduled=!1,e.delete()}},ce=e=>{Z=e,ue.length&&Z&&Z(le)},pe={},he=(e,r)=>(r=((e,r)=>{for(void 0===r&&K("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r})(e,r),pe[r]),de=(e,r)=>(r.ptrType&&r.ptr||G("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&G("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ve(Object.create(e,{$$:{value:r,writable:!0}})));function fe(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var t=he(this.registeredClass,r);if(void 0!==t){if(0===t.$$.count.value)return t.$$.ptr=r,t.$$.smartPtr=e,t.clone();var n=t.clone();return this.destructor(e),n}function a(){return this.isSmartPointer?de(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):de(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var o,i=this.registeredClass.getActualType(r),s=oe[i];if(!s)return a.call(this);o=this.isConst?s.constPointerType:s.pointerType;var u=ae(r,this.registeredClass,o.registeredClass);return null===u?a.call(this):this.isSmartPointer?de(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:e}):de(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})}var ve=e=>"undefined"==typeof FinalizationRegistry?(ve=e=>e,e):(re=new FinalizationRegistry((e=>{ne(e.$$)})),ve=e=>{var r=e.$$;if(r.smartPtr){var t={$$:r};re.register(e,t,e)}return e},te=e=>re.unregister(e),ve(e));function ye(){}var me=(e,r)=>Object.defineProperty(r,"name",{value:e}),ge=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e[r].overloadTable.hasOwnProperty(a.length)||K(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[a.length].apply(this,a)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},$e=(e,r,t)=>{a.hasOwnProperty(e)?((void 0===t||void 0!==a[e].overloadTable&&void 0!==a[e].overloadTable[t])&&K(`Cannot register public name '${e}' twice`),ge(a,e,e),a.hasOwnProperty(t)&&K(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),a[e].overloadTable[t]=r):(a[e]=r,void 0!==t&&(a[e].numArguments=t))};function we(e,r,t,n,a,o,i,s){this.name=e,this.constructor=r,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=i,this.downcast=s,this.pureVirtualFunctions=[]}var Te=(e,r,t)=>{for(;r!==t;)r.upcast||K(`Expected null or instance of ${t.name}, got an instance of ${r.name}`),e=r.upcast(e),r=r.baseClass;return e};function be(e,r){if(null===r)return this.isReference&&K(`null is not a valid ${this.name}`),0;r.$$||K(`Cannot pass "${Je(r)}" as a ${this.name}`),r.$$.ptr||K(`Cannot pass deleted object as a pointer of type ${this.name}`);var t=r.$$.ptrType.registeredClass;return Te(r.$$.ptr,t,this.registeredClass)}function Ce(e,r){var t;if(null===r)return this.isReference&&K(`null is not a valid ${this.name}`),this.isSmartPointer?(t=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,t),t):0;r&&r.$$||K(`Cannot pass "${Je(r)}" as a ${this.name}`),r.$$.ptr||K(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&r.$$.ptrType.isConst&&K(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);var n=r.$$.ptrType.registeredClass;if(t=Te(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&K("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?t=r.$$.smartPtr:K(`Cannot convert argument of type ${r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:t=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)t=r.$$.smartPtr;else{var a=r.clone();t=this.rawShare(t,ze.toHandle((()=>a.delete()))),null!==e&&e.push(this.rawDestructor,t)}break;default:K("Unsupporting sharing policy")}return t}function Pe(e,r){if(null===r)return this.isReference&&K(`null is not a valid ${this.name}`),0;r.$$||K(`Cannot pass "${Je(r)}" as a ${this.name}`),r.$$.ptr||K(`Cannot pass deleted object as a pointer of type ${this.name}`),r.$$.ptrType.isConst&&K(`Cannot convert argument of type ${r.$$.ptrType.name} to parameter type ${this.name}`);var t=r.$$.ptrType.registeredClass;return Te(r.$$.ptr,t,this.registeredClass)}function Ae(e,r,t,n,a,o,i,s,u,l,c){this.name=e,this.registeredClass=r,this.isReference=t,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=i,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=l,this.rawDestructor=c,a||void 0!==r.baseClass?this.toWireType=Ce:n?(this.toWireType=be,this.destructorFunction=null):(this.toWireType=Pe,this.destructorFunction=null)}var We,_e,Fe=(e,r,t)=>{a.hasOwnProperty(e)||G("Replacing nonexistent public symbol"),void 0!==a[e].overloadTable&&void 0!==t?a[e].overloadTable[t]=r:(a[e]=r,a[e].argCount=t)},ke=[],Se=e=>{var r=ke[e];return r||(e>=ke.length&&(ke.length=e+1),ke[e]=r=We.get(e)),r},Oe=function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return e.includes("j")?((e,r,t)=>(e=e.replace(/p/g,"i"),(0,a["dynCall_"+e])(r,...t)))(e,r,t):Se(r)(...t)},je=(e,r)=>{var t=(e=J(e)).includes("j")?((e,r)=>function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return Oe(e,r,n)})(e,r):Se(r);return"function"!=typeof t&&K(`unknown function pointer with signature ${e}: ${r}`),t},Ee=e=>{var r=gr(e),t=J(r);return wr(r),t},Re=(e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||z[r]||(q[r]?q[r].forEach(e):(t.push(r),n[r]=!0))})),new _e(`${e}: `+t.map(Ee).join([", "]))},De=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(m[r+4*n>>2]);return t};function xe(e){for(var r=1;r<e.length;++r)if(null!==e[r]&&void 0===e[r].destructorFunction)return!0;return!1}function Ie(e,r){if(!(e instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof e} which is not a function`);var t=me(e.name||"unknownFunctionName",(function(){}));t.prototype=e.prototype;var n=new t,a=e.apply(n,r);return a instanceof Object?a:n}function Ve(e,r,t,n,a,o){var i=r.length;i<2&&K("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var s=null!==r[1]&&null!==t,u=xe(r),l="void"!==r[0].name,c=[e,K,n,a,V,r[0],r[1]],p=0;p<i-2;++p)c.push(r[p+2]);if(!u)for(p=s?1:2;p<r.length;++p)null!==r[p].destructorFunction&&c.push(r[p].destructorFunction);let[h,d]=function(e,r,t,n){for(var a=xe(e),o=e.length,i="",s="",u=0;u<o-2;++u)i+=(0!==u?", ":"")+"arg"+u,s+=(0!==u?", ":"")+"arg"+u+"Wired";var l=`\n        return function (${i}) {\n        if (arguments.length !== ${o-2}) {\n          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${o-2}');\n        }`;a&&(l+="var destructors = [];\n");var c=a?"destructors":"null",p=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];for(r&&(l+="var thisWired = classParam['toWireType']("+c+", this);\n"),u=0;u<o-2;++u)l+="var arg"+u+"Wired = argType"+u+"['toWireType']("+c+", arg"+u+");\n",p.push("argType"+u);if(r&&(s="thisWired"+(s.length>0?", ":"")+s),l+=(t||n?"var rv = ":"")+"invoker(fn"+(s.length>0?", ":"")+s+");\n",a)l+="runDestructors(destructors);\n";else for(u=r?1:2;u<e.length;++u){var h=1===u?"thisWired":"arg"+(u-2)+"Wired";null!==e[u].destructorFunction&&(l+=`${h}_dtor(${h});\n`,p.push(`${h}_dtor`))}return t&&(l+="var ret = retType['fromWireType'](rv);\nreturn ret;\n"),[p,l+="}\n"]}(r,s,l,o);h.push(d);var f=Ie(Function,h)(...c);return me(e,f)}var He=e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?e.substr(0,r):e},Ue=[],Be=[],Ne=e=>{e>9&&0==--Be[e+1]&&(Be[e]=void 0,Ue.push(e))},Me=()=>Be.length/2-5-Ue.length,ze={toValue:e=>(e||K("Cannot use deleted val. handle = "+e),Be[e]),toHandle:e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const r=Ue.pop()||Be.length;return Be[r]=e,Be[r+1]=1,r}}}},qe={name:"emscripten::val",fromWireType:e=>{var r=ze.toValue(e);return Ne(e),r},toWireType:(e,r)=>ze.toHandle(r),argPackAdvance:X,readValueFromPointer:H,destructorFunction:null},Ge=(e,r,t)=>{switch(r){case 1:return t?function(e){return this.fromWireType(h[e])}:function(e){return this.fromWireType(d[e])};case 2:return t?function(e){return this.fromWireType(f[e>>1])}:function(e){return this.fromWireType(v[e>>1])};case 4:return t?function(e){return this.fromWireType(y[e>>2])}:function(e){return this.fromWireType(m[e>>2])};default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Le=(e,r)=>{var t=z[e];return void 0===t&&K(`${r} has unknown type ${Ee(e)}`),t},Je=e=>{if(null===e)return"null";var r=typeof e;return"object"===r||"array"===r||"function"===r?e.toString():""+e},Ke=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(g[e>>2])};case 8:return function(e){return this.fromWireType($[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},Qe=(e,r,t)=>{switch(r){case 1:return t?e=>h[e]:e=>d[e];case 2:return t?e=>f[e>>1]:e=>v[e>>1];case 4:return t?e=>y[e>>2]:e=>m[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Ze="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Xe=(e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&Ze)return Ze.decode(e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var s=63&e[r++];if(192!=(224&i)){var u=63&e[r++];if((i=224==(240&i)?(15&i)<<12|s<<6|u:(7&i)<<18|s<<12|u<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var l=i-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&i)<<6|s)}else o+=String.fromCharCode(i)}return o},Ye=(e,r)=>e?Xe(d,e,r):"",er="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,rr=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&v[n];)++n;if((t=n<<1)-e>32&&er)return er.decode(d.subarray(e,t));for(var o="",i=0;!(i>=r/2);++i){var s=f[e+2*i>>1];if(0==s)break;o+=String.fromCharCode(s)}return o},tr=(e,r,t)=>{if(t??=2147483647,t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var i=e.charCodeAt(o);f[r>>1]=i,r+=2}return f[r>>1]=0,r-n},nr=e=>2*e.length,ar=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=y[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},or=(e,r,t)=>{if(t??=2147483647,t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var i=e.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++o)),y[r>>2]=i,(r+=4)+4>a)break}return y[r>>2]=0,r-n},ir=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},sr=(e,r,t)=>{var n=[],a=e.toWireType(n,t);return n.length&&(m[r>>2]=ze.toHandle(n)),a},ur=[],lr={},cr=e=>{var r=lr[e];return void 0===r?J(e):r},pr=()=>"object"==typeof globalThis?globalThis:Function("return this")(),hr=e=>{var t=(e-l.buffer.byteLength+65535)/65536;try{return l.grow(t),T(),1}catch(r){}};var dr=[null,[],[]],fr=(e,r)=>{var t=dr[e];0===r||10===r?((1===e?c:p)(Xe(t,0)),t.length=0):t.push(r)};U=a.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);B=e})(),N=a.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(ye.prototype,{isAliasOf(e){if(!(this instanceof ye))return!1;if(!(e instanceof ye))return!1;var r=this.$$.ptrType.registeredClass,t=this.$$.ptr;e.$$=e.$$;for(var n=e.$$.ptrType.registeredClass,a=e.$$.ptr;r.baseClass;)t=r.upcast(t),r=r.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return r===n&&t===a},clone(){if(this.$$.ptr||ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ve(Object.create(Object.getPrototypeOf(this),{$$:{value:Y(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},delete(){this.$$.ptr||ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&K("Object already scheduled for deletion"),te(this),ne(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&K("Object already scheduled for deletion"),ue.push(this),1===ue.length&&Z&&Z(le),this.$$.deleteScheduled=!0,this}}),a.getInheritedInstanceCount=ie,a.getLiveInheritedInstances=se,a.flushPendingDeletes=le,a.setDelayFunction=ce,Object.assign(Ae.prototype,{getPointee(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e},destructor(e){this.rawDestructor?.(e)},argPackAdvance:X,readValueFromPointer:H,fromWireType:fe}),_e=a.UnboundTypeError=((e,r)=>{var t=me(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t})(Error,"UnboundTypeError"),Be.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=Me;var vr,yr={K:(e,r,t)=>{throw new x(e).init(r,t),e},G:()=>{k("")},s:e=>{var r=I[e];delete I[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));L([e],o,(e=>{var o={};return a.forEach(((r,t)=>{var n=r.fieldName,i=e[t],s=r.getter,u=r.getterContext,l=e[t+a.length],c=r.setter,p=r.setterContext;o[n]={read:e=>i.fromWireType(s(u,e)),write:(e,r)=>{var t=[];c(p,e,l.toWireType(t,r)),V(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in o)r[t]=o[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in o)if(!(a in r))throw new TypeError(`Missing field: "${a}"`);var i=t();for(a in o)o[a].write(i,r[a]);return null!==e&&e.push(n,i),i},argPackAdvance:X,readValueFromPointer:H,destructorFunction:n}]}))},C:(e,r,t,n,a)=>{},I:(e,r,t,n)=>{Q(e,{name:r=J(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:X,readValueFromPointer:function(e){return this.fromWireType(d[e])},destructorFunction:null})},w:(e,r,t,n,a,o,i,s,u,l,c,p,h)=>{c=J(c),o=je(a,o),s&&=je(i,s),l&&=je(u,l),h=je(p,h);var d=(e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?`_${e}`:e})(c);$e(d,(function(){Re(`Cannot construct ${c} due to unbound types`,[n])})),L([e,r,t],n?[n]:[],(r=>{var t,a;r=r[0],a=n?(t=r.registeredClass).instancePrototype:ye.prototype;var i=me(c,(function(){if(Object.getPrototypeOf(this)!==u)throw new N("Use 'new' to construct "+c);if(void 0===p.constructor_body)throw new N(c+" has no accessible constructor");for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=p.constructor_body[r.length];if(void 0===n)throw new N(`Tried to invoke ctor of ${c} with invalid number of parameters (${r.length}) - expected (${Object.keys(p.constructor_body).toString()}) parameters instead!`);return n.apply(this,r)})),u=Object.create(a,{constructor:{value:i}});i.prototype=u;var p=new we(c,i,u,h,t,o,s,l);p.baseClass&&(p.baseClass.__derivedClasses??=[],p.baseClass.__derivedClasses.push(p));var f=new Ae(c,p,!0,!1,!1),v=new Ae(c+"*",p,!1,!1,!1),y=new Ae(c+" const*",p,!1,!0,!1);return oe[e]={pointerType:v,constPointerType:y},Fe(d,i),[f,v,y]}))},v:(e,r,t,n,a,o)=>{var i=De(r,t);a=je(n,a),L([],[e],(e=>{var t=`constructor ${(e=e[0]).name}`;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[r-1])throw new N(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return e.registeredClass.constructor_body[r-1]=()=>{Re(`Cannot construct ${e.name} due to unbound types`,i)},L([],i,(n=>(n.splice(1,0,null),e.registeredClass.constructor_body[r-1]=Ve(t,n,null,a,o),[]))),[]}))},d:(e,r,t,n,a,o,i,s,u)=>{var l=De(t,n);r=J(r),r=He(r),o=je(a,o),L([],[e],(e=>{var n=`${(e=e[0]).name}.${r}`;function a(){Re(`Cannot call ${n} due to unbound types`,l)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]),s&&e.registeredClass.pureVirtualFunctions.push(r);var c=e.registeredClass.instancePrototype,p=c[r];return void 0===p||void 0===p.overloadTable&&p.className!==e.name&&p.argCount===t-2?(a.argCount=t-2,a.className=e.name,c[r]=a):(ge(c,r,n),c[r].overloadTable[t-2]=a),L([],l,(a=>{var s=Ve(n,a,e,o,i,u);return void 0===c[r].overloadTable?(s.argCount=t-2,c[r]=s):c[r].overloadTable[t-2]=s,[]})),[]}))},m:(e,r,t)=>{e=J(e),L([],[r],(r=>(r=r[0],a[e]=r.fromWireType(t),[])))},H:e=>Q(e,qe),o:(e,r,t,n)=>{function a(){}r=J(r),a.values={},Q(e,{name:r,constructor:a,fromWireType:function(e){return this.constructor.values[e]},toWireType:(e,r)=>r.value,argPackAdvance:X,readValueFromPointer:Ge(r,t,n),destructorFunction:null}),$e(r,a)},a:(e,r,t)=>{var n=Le(e,"enum");r=J(r);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:me(`${n.name}_${r}`,(function(){}))}});a.values[t]=o,a[r]=o},A:(e,r,t)=>{Q(e,{name:r=J(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:X,readValueFromPointer:Ke(r,t),destructorFunction:null})},k:(e,r,t,n,a,o,i)=>{var s=De(r,t);e=J(e),e=He(e),a=je(n,a),$e(e,(function(){Re(`Cannot call ${e} due to unbound types`,s)}),r-1),L([],s,(t=>{var n=[t[0],null].concat(t.slice(1));return Fe(e,Ve(e,n,null,a,o,i),r-1),[]}))},l:(e,r,t,n,a)=>{r=J(r);var o=e=>e;if(0===n){var i=32-8*t;o=e=>e<<i>>>i}var s=r.includes("unsigned");Q(e,{name:r,fromWireType:o,toWireType:s?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:X,readValueFromPointer:Qe(r,t,0!==n),destructorFunction:null})},f:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=m[e>>2],t=m[e+4>>2];return new n(h.buffer,t,r)}Q(e,{name:t=J(t),fromWireType:a,argPackAdvance:X,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},z:(e,r)=>{var t="std::string"===(r=J(r));Q(e,{name:r,fromWireType(e){var r,n=m[e>>2],a=e+4;if(t)for(var o=a,i=0;i<=n;++i){var s=a+i;if(i==n||0==d[s]){var u=Ye(o,s-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=s+1}}else{var l=new Array(n);for(i=0;i<n;++i)l[i]=String.fromCharCode(d[a+i]);r=l.join("")}return wr(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||K("Cannot pass non-string to std::string"),n=t&&a?(e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r})(r):r.length;var o=$r(4+n+1),i=o+4;if(m[o>>2]=n,t&&a)((e,r,t)=>{((e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<e.length;++i){var s=e.charCodeAt(i);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&e.charCodeAt(++i)),s<=127){if(t>=o)break;r[t++]=s}else if(s<=2047){if(t+1>=o)break;r[t++]=192|s>>6,r[t++]=128|63&s}else if(s<=65535){if(t+2>=o)break;r[t++]=224|s>>12,r[t++]=128|s>>6&63,r[t++]=128|63&s}else{if(t+3>=o)break;r[t++]=240|s>>18,r[t++]=128|s>>12&63,r[t++]=128|s>>6&63,r[t++]=128|63&s}}r[t]=0})(e,d,r,t)})(r,i,n+1);else if(a)for(var s=0;s<n;++s){var u=r.charCodeAt(s);u>255&&(wr(i),K("String has UTF-16 code units that do not fit in 8 bits")),d[i+s]=u}else for(s=0;s<n;++s)d[i+s]=r[s];return null!==e&&e.push(wr,o),o},argPackAdvance:X,readValueFromPointer:H,destructorFunction(e){wr(e)}})},u:(e,r,t)=>{var n,a,o,i;t=J(t),2===r?(n=rr,a=tr,i=nr,o=e=>v[e>>1]):4===r&&(n=ar,a=or,i=ir,o=e=>m[e>>2]),Q(e,{name:t,fromWireType:e=>{for(var t,a=m[e>>2],i=e+4,s=0;s<=a;++s){var u=e+4+s*r;if(s==a||0==o(u)){var l=n(i,u-i);void 0===t?t=l:(t+=String.fromCharCode(0),t+=l),i=u+r}}return wr(e),t},toWireType:(e,n)=>{"string"!=typeof n&&K(`Cannot pass non-string to C++ string type ${t}`);var o=i(n),s=$r(4+o+r);return m[s>>2]=o/r,a(n,s+4,o+r),null!==e&&e.push(wr,s),s},argPackAdvance:X,readValueFromPointer:H,destructorFunction(e){wr(e)}})},t:(e,r,t,n,a,o)=>{I[e]={name:J(r),rawConstructor:je(t,n),rawDestructor:je(a,o),fields:[]}},c:(e,r,t,n,a,o,i,s,u,l)=>{I[e].fields.push({fieldName:J(r),getterReturnType:t,getter:je(n,a),getterContext:o,setterArgumentType:i,setter:je(s,u),setterContext:l})},J:(e,r)=>{Q(e,{isVoid:!0,name:r=J(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},F:(e,r,t)=>d.copyWithin(e,r,r+t),n:(e,r,t)=>(e=ze.toValue(e),r=Le(r,"emval::as"),sr(r,t,e)),q:(e,r,t,n)=>(e=ur[e])(null,r=ze.toValue(r),t,n),p:(e,r,t,n,a)=>(e=ur[e])(r=ze.toValue(r),r[t=cr(t)],n,a),b:Ne,x:e=>0===e?ze.toHandle(pr()):(e=cr(e),ze.toHandle(pr()[e])),i:(e,r,t)=>{var n=((e,r)=>{for(var t=new Array(e),n=0;n<e;++n)t[n]=Le(m[r+4*n>>2],"parameter "+n);return t})(e,r),a=n.shift();e--;var o="return function (obj, func, destructorsRef, args) {\n",i=0,s=[];0===t&&s.push("obj");for(var u=["retType"],l=[a],c=0;c<e;++c)s.push("arg"+c),u.push("argType"+c),l.push(n[c]),o+=`  var arg${c} = argType${c}.readValueFromPointer(args${i?"+"+i:""});\n`,i+=n[c].argPackAdvance;o+=`  var rv = ${1===t?"new func":"func.call"}(${s.join(", ")});\n`,a.isVoid||(u.push("emval_returnValue"),l.push(sr),o+="  return emval_returnValue(retType, destructorsRef, rv);\n"),o+="};\n",u.push(o);var p=Ie(Function,u)(...l),h=`methodCaller<(${n.map((e=>e.name)).join(", ")}) => ${a.name}>`;return(e=>{var r=ur.length;return ur.push(e),r})(me(h,p))},r:e=>(e=cr(e),ze.toHandle(a[e])),g:(e,r)=>(e=ze.toValue(e),r=ze.toValue(r),ze.toHandle(e[r])),j:e=>{e>9&&(Be[e+1]+=1)},h:e=>ze.toHandle(cr(e)),e:e=>{var r=ze.toValue(e);V(r),Ne(e)},D:e=>{var r=d.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var i=Math.min(t,n(Math.max(e,o),65536));if(hr(i))return!0}return!1},E:e=>52,B:function(e,r,t,n,a){return 70},y:(e,r,t,n)=>{for(var a=0,o=0;o<t;o++){var i=m[r>>2],s=m[r+4>>2];r+=8;for(var u=0;u<s;u++)fr(e,d[i+u]);a+=s}return m[n>>2]=a,0}},mr=function(){var e={a:yr};function r(e,r){return mr=e.exports,l=mr.L,T(),We=mr.Q,function(e){C.unshift(e)}(mr.M),function(){if(_--,a.monitorRunDependencies?.(_),0==_&&F){var e=F;F=null,e()}}(),mr}if(_++,a.monitorRunDependencies?.(_),a.instantiateWasm)try{return a.instantiateWasm(e,r)}catch(o){p(`Module.instantiateWasm callback failed with error: ${o}`),t(o)}return S||(S=j()),function(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||O(r)||"function"!=typeof fetch?R(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return p(`wasm streaming compile failed: ${e}`),p("falling back to ArrayBuffer instantiation"),R(r,t,n)}))))}(u,S,e,(function(e){r(e.instance)})).catch(t),{}}(),gr=e=>(gr=mr.N)(e),$r=e=>($r=mr.O)(e),wr=e=>(wr=mr.P)(e),Tr=e=>(Tr=mr.R)(e);function br(){function e(){vr||(vr=!0,a.calledRun=!0,w||(D(C),r(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)W(a.postRun.shift());D(P)}()))}_>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)A(a.preRun.shift());D(b)}(),_>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),e()}),1)):e()))}if(a.dynCall_jiji=(e,r,t,n,o)=>(a.dynCall_jiji=mr.S)(e,r,t,n,o),F=function e(){vr||br(),vr||(F=e)},a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();return br(),o})}}]);
//# sourceMappingURL=84027.e3566311.chunk.js.map
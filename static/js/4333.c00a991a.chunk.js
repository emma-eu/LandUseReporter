"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[4333],{71976:(t,e,_)=>{_.d(e,{A:()=>n});class n{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const e=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,e}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}peekLast(){return 0===this.size?null:this._buffer[(this._start+(this.size-1))%this.maxSize]}find(t){if(0===this.size)return null;for(const e of this._buffer)if(null!=e&&t(e))return e;return null}clear(t){let e=this.dequeue();for(;null!=e;)t&&t(e),e=this.dequeue()}}},93950:(t,e,_)=>{_.d(e,{L:()=>Et});var n=_(28899),r=_(3825);let i;const o=new Array(128).fill(void 0);function s(t){return o[t]}o.push(void 0,null,!0,!1);let a=o.length;function g(t){const e=s(t);return function(t){t<132||(o[t]=a,a=t)}(t),e}function d(t){a===o.length&&o.push(o.length+1);const e=a;return a=o[e],o[e]=t,e}const c="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&c.decode();let w=null;function l(){return null!==w&&0!==w.byteLength||(w=new Uint8Array(i.memory.buffer)),w}function u(t,e){return t>>>=0,c.decode(l().subarray(t,t+e))}function b(t,e){return t>>>=0,l().subarray(t/1,t/1+e)}const p="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>{i.__wbindgen_export_1.get(t.dtor)(t.a,t.b)}));function f(t,e,_,n){const r={a:t,b:e,cnt:1,dtor:_},o=function(){r.cnt++;const t=r.a;r.a=0;try{for(var e=arguments.length,_=new Array(e),o=0;o<e;o++)_[o]=arguments[o];return n(t,r.b,..._)}finally{0==--r.cnt?(i.__wbindgen_export_1.get(r.dtor)(t,r.b),p.unregister(r)):r.a=t}};return o.original=r,p.register(o,r,r),o}function y(t,e,_){i._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6f3c6e2a403d1e3d(t,e,d(_))}let h=0;const m="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},k="function"==typeof m.encodeInto?function(t,e){return m.encodeInto(t,e)}:function(t,e){const _=m.encode(t);return e.set(_),{read:t.length,written:_.length}};function I(t,e,_){if(void 0===_){const _=m.encode(t),n=e(_.length,1)>>>0;return l().subarray(n,n+_.length).set(_),h=_.length,n}let n=t.length,r=e(n,1)>>>0;const i=l();let o=0;for(;o<n;o++){const e=t.charCodeAt(o);if(e>127)break;i[r+o]=e}if(o!==n){0!==o&&(t=t.slice(o)),r=_(r,n,n=o+3*t.length,1)>>>0;const e=l().subarray(r+o,r+n);o+=k(t,e).written,r=_(r,n,o,1)>>>0}return h=o,r}let F=null;function v(){return(null===F||!0===F.buffer.detached||void 0===F.buffer.detached&&F.buffer!==i.memory.buffer)&&(F=new DataView(i.memory.buffer)),F}function z(t,e){try{return t.apply(this,e)}catch(o){i.__wbindgen_exn_store(d(o))}}function x(t,e,_,n){i.wasm_bindgen__convert__closures__invoke2_mut__h367b7e3d952c2b06(t,e,d(_),d(n))}let R=null;function T(){return null!==R&&0!==R.byteLength||(R=new Float64Array(i.memory.buffer)),R}let P=null;function M(){return null!==P&&0!==P.byteLength||(P=new Uint32Array(i.memory.buffer)),P}function q(t,e){t>>>=0;const _=v(),n=[];for(let r=t;r<t+4*e;r+=4)n.push(g(_.getUint32(r,!0)));return n}let O=null;function j(){return null!==O&&0!==O.byteLength||(O=new Uint16Array(i.memory.buffer)),O}function C(t,e){const _=e(2*t.length,2)>>>0;return j().set(t,_/2),h=t.length,_}function S(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}function A(t,e){const _=e(8*t.length,8)>>>0;return T().set(t,_/8),h=t.length,_}function B(t,e){const _=e(4*t.length,4)>>>0;return M().set(t,_/4),h=t.length,_}function W(t){return null==t}function G(t,e){const _=e(1*t.length,1)>>>0;return l().set(t,_/1),h=t.length,_}function E(t,e,_){const n=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),r=h;return g(i.readMetadata(n,r,d(e),d(_)))}const L=Object.freeze({None:0,0:"None",Snappy:1,1:"Snappy"}),U=Object.freeze({Point:0,0:"Point",Polygon:1,1:"Polygon",Polyline:2,2:"Polyline",Multipoint:3,3:"Multipoint"}),D=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeBigInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],V="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_columndescriptor_free(t>>>0,1)));class N{static __wrap(t){t>>>=0;const e=Object.create(N.prototype);return e.__wbg_ptr=t,V.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,V.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_columndescriptor_free(t,0)}name(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_name(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}physicalType(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_physicalType(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}logicalType(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_logicalType(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=u(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}encodings(){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_encodings(n,this.__wbg_ptr);var t=v().getInt32(n+0,!0),e=v().getInt32(n+4,!0),_=q(t,e).slice();return i.__wbindgen_free(t,4*e,4),_}finally{i.__wbindgen_add_to_stack_pointer(16)}}pageEncodings(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_pageEncodings(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=q(t,e).slice(),i.__wbindgen_free(t,4*e,4)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}numValues(){return i.columndescriptor_numValues(this.__wbg_ptr)}compression(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_compression(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}compressedSize(){return i.columndescriptor_compressedSize(this.__wbg_ptr)}uncompressedSize(){return i.columndescriptor_uncompressedSize(this.__wbg_ptr)}nullCount(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_nullCount(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getBigInt64(_+8,!0);return 0===t?void 0:e}finally{i.__wbindgen_add_to_stack_pointer(16)}}distinctCount(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_distinctCount(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getBigInt64(_+8,!0);return 0===t?void 0:e}finally{i.__wbindgen_add_to_stack_pointer(16)}}minValue(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_minValue(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=b(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}maxValue(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.columndescriptor_maxValue(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=b(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}}const X="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_fieldmetadata_free(t>>>0,1)));class Y{static __wrap(t){t>>>=0;const e=Object.create(Y.prototype);return e.__wbg_ptr=t,X.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,X.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_fieldmetadata_free(t,0)}get name(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.fieldmetadata_name(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}get index(){return i.fieldmetadata_index(this.__wbg_ptr)}get type(){const t=i.fieldmetadata_esri_type(this.__wbg_ptr);return D[t]}get physicalType(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.fieldmetadata_physical_type(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=u(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}get logicalType(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.fieldmetadata_logical_type(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=u(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}}const $="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_filemetadata_free(t>>>0,1)));class J{static __wrap(t){t>>>=0;const e=Object.create(J.prototype);return e.__wbg_ptr=t,$.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,$.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_filemetadata_free(t,0)}version(){return i.filemetadata_version(this.__wbg_ptr)}numRows(){return i.filemetadata_numRows(this.__wbg_ptr)>>>0}numFields(){return i.filemetadata_numFields(this.__wbg_ptr)>>>0}numColumns(){return i.filemetadata_numColumns(this.__wbg_ptr)>>>0}createdBy(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.filemetadata_createdBy(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=u(t,e).slice(),i.__wbindgen_free(t,1*e,1)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}keyValueMetadata(t){try{const n=i.__wbindgen_add_to_stack_pointer(-16),r=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),o=h;i.filemetadata_keyValueMetadata(n,this.__wbg_ptr,r,o);var e=v().getInt32(n+0,!0),_=v().getInt32(n+4,!0);let s;return 0!==e&&(s=u(e,_).slice(),i.__wbindgen_free(e,1*_,1)),s}finally{i.__wbindgen_add_to_stack_pointer(16)}}keys(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.filemetadata_keys(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);let n;return 0!==t&&(n=q(t,e).slice(),i.__wbindgen_free(t,4*e,4)),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}getFieldIndex(t){const e=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),_=h,n=i.filemetadata_getFieldIndex(this.__wbg_ptr,e,_);return 16777215===n?void 0:n}getFieldByIndex(t){const e=i.filemetadata_getFieldByIndex(this.__wbg_ptr,t);return 0===e?void 0:Y.__wrap(e)}getFields(){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.filemetadata_getFields(n,this.__wbg_ptr);var t=v().getInt32(n+0,!0),e=v().getInt32(n+4,!0),_=q(t,e).slice();return i.__wbindgen_free(t,4*e,4),_}finally{i.__wbindgen_add_to_stack_pointer(16)}}}const K="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_filewriter_free(t>>>0,1)));class Q{static __wrap(t){t>>>=0;const e=Object.create(Q.prototype);return e.__wbg_ptr=t,K.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,K.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_filewriter_free(t,0)}static new(t,e){const _=function(t,e){const _=e(4*t.length,4)>>>0,n=v();for(let r=0;r<t.length;r++)n.setUint32(_+4*r,d(t[r]),!0);return h=t.length,_}(t,i.__wbindgen_malloc),n=h,r=i.filewriter_new(_,n,e);return Q.__wrap(r)}writeKeyValue(t,e){const _=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),n=h,r=I(e,i.__wbindgen_malloc,i.__wbindgen_realloc),o=h;i.filewriter_writeKeyValue(this.__wbg_ptr,_,n,r,o)}writeI32Page(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,ct);var _=e.__destroy_into_raw();i.filewriter_writeI32Page(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeI64Page(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,lt);var _=e.__destroy_into_raw();i.filewriter_writeI64Page(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeF32Page(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,it);var _=e.__destroy_into_raw();i.filewriter_writeF32Page(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeF64Page(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,st);var _=e.__destroy_into_raw();i.filewriter_writeF64Page(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeGeometryPage(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,gt);var _=e.__destroy_into_raw();i.filewriter_writeBytesPage(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeStringPage(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,bt);var _=e.__destroy_into_raw();i.filewriter_writeBytesPage(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeBytesPage(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);S(e,nt);var _=e.__destroy_into_raw();i.filewriter_writeBytesPage(r,this.__wbg_ptr,t,_);var n=v().getInt32(r+0,!0);if(v().getInt32(r+4,!0))throw g(n)}finally{i.__wbindgen_add_to_stack_pointer(16)}}finish(){try{const r=this.__destroy_into_raw(),o=i.__wbindgen_add_to_stack_pointer(-16);i.filewriter_finish(o,r);var t=v().getInt32(o+0,!0),e=v().getInt32(o+4,!0),_=v().getInt32(o+8,!0);if(v().getInt32(o+12,!0))throw g(_);var n=b(t,e).slice();return i.__wbindgen_free(t,1*e,1),n}finally{i.__wbindgen_add_to_stack_pointer(16)}}}const H="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_geometryinfodescriptor_free(t>>>0,1)));class Z{static __wrap(t){t>>>=0;const e=Object.create(Z.prototype);return e.__wbg_ptr=t,H.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,H.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_geometryinfodescriptor_free(t,0)}get geometryType(){const t=i.__wbg_get_geometryinfodescriptor_geometryType(this.__wbg_ptr);return 4===t?void 0:t}set geometryType(t){i.__wbg_set_geometryinfodescriptor_geometryType(this.__wbg_ptr,W(t)?4:t)}get wkbIndex(){const t=i.__wbg_get_geometryinfodescriptor_wkbIndex(this.__wbg_ptr);return 16777215===t?void 0:t}set wkbIndex(t){i.__wbg_set_geometryinfodescriptor_wkbIndex(this.__wbg_ptr,W(t)?16777215:t)}get lngIndex(){const t=i.__wbg_get_geometryinfodescriptor_lngIndex(this.__wbg_ptr);return 16777215===t?void 0:t}set lngIndex(t){i.__wbg_set_geometryinfodescriptor_lngIndex(this.__wbg_ptr,W(t)?16777215:t)}get latIndex(){const t=i.__wbg_get_geometryinfodescriptor_latIndex(this.__wbg_ptr);return 16777215===t?void 0:t}set latIndex(t){i.__wbg_set_geometryinfodescriptor_latIndex(this.__wbg_ptr,W(t)?16777215:t)}get xIndex(){const t=i.__wbg_get_geometryinfodescriptor_xIndex(this.__wbg_ptr);return 16777215===t?void 0:t}set xIndex(t){i.__wbg_set_geometryinfodescriptor_xIndex(this.__wbg_ptr,W(t)?16777215:t)}get inWkid(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.__wbg_get_geometryinfodescriptor_inWkid(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);return 0===t?void 0:e>>>0}finally{i.__wbindgen_add_to_stack_pointer(16)}}set inWkid(t){i.__wbg_set_geometryinfodescriptor_inWkid(this.__wbg_ptr,!W(t),W(t)?0:t)}get outWkid(){try{const _=i.__wbindgen_add_to_stack_pointer(-16);i.__wbg_get_geometryinfodescriptor_outWkid(_,this.__wbg_ptr);var t=v().getInt32(_+0,!0),e=v().getInt32(_+4,!0);return 0===t?void 0:e>>>0}finally{i.__wbindgen_add_to_stack_pointer(16)}}set outWkid(t){i.__wbg_set_geometryinfodescriptor_outWkid(this.__wbg_ptr,!W(t),W(t)?0:t)}static new(){const t=i.geometryinfodescriptor_new();return Z.__wrap(t)}setMultiscaleInfo(t){S(t,et);var e=t.__destroy_into_raw();i.geometryinfodescriptor_setMultiscaleInfo(this.__wbg_ptr,e)}}const tt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_multiscaleinfo_free(t>>>0,1)));class et{static __wrap(t){t>>>=0;const e=Object.create(et.prototype);return e.__wbg_ptr=t,tt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,tt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_multiscaleinfo_free(t,0)}static new(){const t=i.multiscaleinfo_new();return et.__wrap(t)}push(t,e,_,n,r){i.multiscaleinfo_push(this.__wbg_ptr,t,e,_,n,r)}}const _t="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderbytes_free(t>>>0,1)));class nt{static __wrap(t){t>>>=0;const e=Object.create(nt.prototype);return e.__wbg_ptr=t,_t.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,_t.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderbytes_free(t,0)}static new(){const t=i.pagebuilderbytes_new();return nt.__wrap(t)}push(t){var e=W(t)?0:G(t,i.__wbindgen_malloc),_=h;i.pagebuilderbytes_push(this.__wbg_ptr,e,_)}}const rt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderf32_free(t>>>0,1)));class it{static __wrap(t){t>>>=0;const e=Object.create(it.prototype);return e.__wbg_ptr=t,rt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,rt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderf32_free(t,0)}static new(){const t=i.pagebuilderbytes_new();return it.__wrap(t)}push(t){i.pagebuilderf32_push(this.__wbg_ptr,!W(t),W(t)?0:t)}}const ot="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderf64_free(t>>>0,1)));class st{static __wrap(t){t>>>=0;const e=Object.create(st.prototype);return e.__wbg_ptr=t,ot.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ot.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderf64_free(t,0)}static new(){const t=i.multiscaleinfo_new();return st.__wrap(t)}push(t){i.pagebuilderf64_push(this.__wbg_ptr,!W(t),W(t)?0:t)}}const at="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuildergeometry_free(t>>>0,1)));class gt{static __wrap(t){t>>>=0;const e=Object.create(gt.prototype);return e.__wbg_ptr=t,at.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,at.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuildergeometry_free(t,0)}static new(){const t=i.pagebuilderbytes_new();return gt.__wrap(t)}writeXY(t,e){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.pagebuildergeometry_writeXY(n,this.__wbg_ptr,t,e);var _=v().getInt32(n+0,!0);if(v().getInt32(n+4,!0))throw g(_)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writePBF(t,e,_,n){try{const o=i.__wbindgen_add_to_stack_pointer(-16),s=A(t,i.__wbindgen_malloc),a=h,d=B(e,i.__wbindgen_malloc),c=h;i.pagebuildergeometry_writePBF(o,this.__wbg_ptr,s,a,d,c,_,n);var r=v().getInt32(o+0,!0);if(v().getInt32(o+4,!0))throw g(r)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writePolygon(t,e){try{const n=i.__wbindgen_add_to_stack_pointer(-16),r=A(t,i.__wbindgen_malloc),o=h,s=B(e,i.__wbindgen_malloc),a=h;i.pagebuildergeometry_writePolygon(n,this.__wbg_ptr,r,o,s,a);var _=v().getInt32(n+0,!0);if(v().getInt32(n+4,!0))throw g(_)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writePolyline(t,e){try{const n=i.__wbindgen_add_to_stack_pointer(-16),r=A(t,i.__wbindgen_malloc),o=h,s=B(e,i.__wbindgen_malloc),a=h;i.pagebuildergeometry_writePolyline(n,this.__wbg_ptr,r,o,s,a);var _=v().getInt32(n+0,!0);if(v().getInt32(n+4,!0))throw g(_)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeMultipoint(t,e){try{const n=i.__wbindgen_add_to_stack_pointer(-16),r=A(t,i.__wbindgen_malloc),o=h,s=B(e,i.__wbindgen_malloc),a=h;i.pagebuildergeometry_writeMultipoint(n,this.__wbg_ptr,r,o,s,a);var _=v().getInt32(n+0,!0);if(v().getInt32(n+4,!0))throw g(_)}finally{i.__wbindgen_add_to_stack_pointer(16)}}writeNone(){i.pagebuildergeometry_writeNone(this.__wbg_ptr)}}const dt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderi32_free(t>>>0,1)));class ct{static __wrap(t){t>>>=0;const e=Object.create(ct.prototype);return e.__wbg_ptr=t,dt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,dt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderi32_free(t,0)}static new(){const t=i.pagebuilderbytes_new();return ct.__wrap(t)}push(t){i.pagebuilderi32_push(this.__wbg_ptr,!W(t),W(t)?0:t)}}const wt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderi64_free(t>>>0,1)));class lt{static __wrap(t){t>>>=0;const e=Object.create(lt.prototype);return e.__wbg_ptr=t,wt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,wt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderi64_free(t,0)}static new(){const t=i.multiscaleinfo_new();return lt.__wrap(t)}push(t){i.pagebuilderi64_push(this.__wbg_ptr,!W(t),W(t)?0:t)}}const ut="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pagebuilderstring_free(t>>>0,1)));class bt{static __wrap(t){t>>>=0;const e=Object.create(bt.prototype);return e.__wbg_ptr=t,ut.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,ut.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pagebuilderstring_free(t,0)}static new(){const t=i.pagebuilderbytes_new();return bt.__wrap(t)}push(t){var e=W(t)?0:I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),_=h;i.pagebuilderstring_push(this.__wbg_ptr,e,_)}}const pt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_pageencodingdescriptor_free(t>>>0,1)));class ft{static __wrap(t){t>>>=0;const e=Object.create(ft.prototype);return e.__wbg_ptr=t,pt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,pt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_pageencodingdescriptor_free(t,0)}pageType(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.pageencodingdescriptor_pageType(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}encoding(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.pageencodingdescriptor_encoding(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}count(){return i.pageencodingdescriptor_count(this.__wbg_ptr)}}const yt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_parquetchunk_free(t>>>0,1)));class ht{static __wrap(t){t>>>=0;const e=Object.create(ht.prototype);return e.__wbg_ptr=t,yt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,yt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_parquetchunk_free(t,0)}size(){return i.parquetchunk_size(this.__wbg_ptr)>>>0}hasField(t){return 0!==i.parquetchunk_hasField(this.__wbg_ptr,t)}readX(t){return i.parquetchunk_readX(this.__wbg_ptr,t)}readY(t){return i.parquetchunk_readY(this.__wbg_ptr,t)}readCoords(t){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.parquetchunk_readCoords(n,this.__wbg_ptr,t);var e=v().getInt32(n+0,!0),_=v().getInt32(n+4,!0);let r;return 0!==e&&(r=function(t,e){return t>>>=0,T().subarray(t/8,t/8+e)}(e,_).slice(),i.__wbindgen_free(e,8*_,8)),r}finally{i.__wbindgen_add_to_stack_pointer(16)}}readLengths(t){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.parquetchunk_readLengths(n,this.__wbg_ptr,t);var e=v().getInt32(n+0,!0),_=v().getInt32(n+4,!0);let r;return 0!==e&&(r=function(t,e){return t>>>=0,M().subarray(t/4,t/4+e)}(e,_).slice(),i.__wbindgen_free(e,4*_,4)),r}finally{i.__wbindgen_add_to_stack_pointer(16)}}readGeometryTransformed(t,e,_,n,r){const o=i.parquetchunk_readGeometryTransformed(this.__wbg_ptr,t,e,_,n,r);return 0===o?void 0:Ft.__wrap(o)}boundsXMin(t){return i.parquetchunk_boundsXMin(this.__wbg_ptr,t)}boundsYMin(t){return i.parquetchunk_boundsYMin(this.__wbg_ptr,t)}boundsXMax(t){return i.parquetchunk_boundsXMax(this.__wbg_ptr,t)}boundsYMax(t){return i.parquetchunk_boundsYMax(this.__wbg_ptr,t)}readAttribute(t,e){return g(i.parquetchunk_readAttribute(this.__wbg_ptr,t,e))}}const mt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_parquetfile_free(t>>>0,1)));let kt=class t{static __wrap(e){e>>>=0;const _=Object.create(t.prototype);return _.__wbg_ptr=e,mt.register(_,_.__wbg_ptr,_),_}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,mt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_parquetfile_free(t,0)}metadata(){const t=i.parquetfile_metadata(this.__wbg_ptr);return J.__wrap(t)}rowGroups(){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.parquetfile_rowGroups(n,this.__wbg_ptr);var t=v().getInt32(n+0,!0),e=v().getInt32(n+4,!0),_=q(t,e).slice();return i.__wbindgen_free(t,4*e,4),_}finally{i.__wbindgen_add_to_stack_pointer(16)}}readChunksWithCallback(t,e){const _=C(t,i.__wbindgen_malloc),n=h;return g(i.parquetfile_readChunksWithCallback(this.__wbg_ptr,_,n,d(e)))}readFirstChunk(t){const e=C(t,i.__wbindgen_malloc),_=h;return g(i.parquetfile_readFirstChunk(this.__wbg_ptr,e,_))}readAllChunks(t){const e=C(t,i.__wbindgen_malloc),_=h;return g(i.parquetfile_readAllChunks(this.__wbg_ptr,e,_))}updateChunks(t){const e=C(t,i.__wbindgen_malloc),_=h;return g(i.parquetfile_updateChunks(this.__wbg_ptr,e,_))}};const It="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_quantizedgeometry_free(t>>>0,1)));class Ft{static __wrap(t){t>>>=0;const e=Object.create(Ft.prototype);return e.__wbg_ptr=t,It.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,It.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_quantizedgeometry_free(t,0)}readCoordsUnsafe(){return g(i.quantizedgeometry_readCoordsUnsafe(this.__wbg_ptr))}readLengthsUnsafe(){return g(i.quantizedgeometry_readLengthsUnsafe(this.__wbg_ptr))}}const vt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_rangeproviderjs_free(t>>>0,1)));class zt{static __wrap(t){t>>>=0;const e=Object.create(zt.prototype);return e.__wbg_ptr=t,vt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,vt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_rangeproviderjs_free(t,0)}static new(t,e){const _=i.rangeproviderjs_new(d(t),d(e));return zt.__wrap(_)}static withFetch(){const t=i.rangeproviderjs_withFetch();return zt.__wrap(t)}}const xt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_rowgroup_free(t>>>0,1)));class Rt{static __wrap(t){t>>>=0;const e=Object.create(Rt.prototype);return e.__wbg_ptr=t,xt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,xt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_rowgroup_free(t,0)}columns(){try{const n=i.__wbindgen_add_to_stack_pointer(-16);i.rowgroup_columns(n,this.__wbg_ptr);var t=v().getInt32(n+0,!0),e=v().getInt32(n+4,!0),_=q(t,e).slice();return i.__wbindgen_free(t,4*e,4),_}finally{i.__wbindgen_add_to_stack_pointer(16)}}}const Tt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>i.__wbg_schemafield_free(t>>>0,1)));class Pt{static __wrap(t){t>>>=0;const e=Object.create(Pt.prototype);return e.__wbg_ptr=t,Tt.register(e,e.__wbg_ptr,e),e}static __unwrap(t){return t instanceof Pt?t.__destroy_into_raw():0}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Tt.unregister(this),t}free(){const t=this.__destroy_into_raw();i.__wbg_schemafield_free(t,0)}static tryNew(t,e){try{const r=i.__wbindgen_add_to_stack_pointer(-16),o=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),s=h,a=I(e,i.__wbindgen_malloc,i.__wbindgen_realloc),d=h;i.schemafield_tryNew(r,o,s,a,d);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);if(v().getInt32(r+8,!0))throw g(n);return Pt.__wrap(_)}finally{i.__wbindgen_add_to_stack_pointer(16)}}name(){let t,e;try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.schemafield_name(r,this.__wbg_ptr);var _=v().getInt32(r+0,!0),n=v().getInt32(r+4,!0);return t=_,e=n,u(_,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(t,e,1)}}}function Mt(){const t={wbg:{}};return t.wbg.__wbg_new_abda76e883ba8a5f=function(){return d(new Error)},t.wbg.__wbg_stack_658279fe44541cf6=function(t,e){const _=I(s(e).stack,i.__wbindgen_malloc,i.__wbindgen_realloc),n=h;v().setInt32(t+4,n,!0),v().setInt32(t+0,_,!0)},t.wbg.__wbg_error_f851667af71bcfc6=function(t,e){let _,n;try{_=t,n=e,console.error(u(t,e))}finally{i.__wbindgen_free(_,n,1)}},t.wbg.__wbindgen_object_drop_ref=function(t){g(t)},t.wbg.__wbindgen_is_function=function(t){return"function"==typeof s(t)},t.wbg.__wbg_self_3093d5d1f7bcb682=function(){return z((function(){return d(self.self)}),arguments)},t.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return z((function(){return d(window.window)}),arguments)},t.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return z((function(){return d(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_e5a3fe56f8be9485=function(){return z((function(){return d(global.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(t){return void 0===s(t)},t.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(t,e){return d(new Function(u(t,e)))},t.wbg.__wbindgen_object_clone_ref=function(t){return d(s(t))},t.wbg.__wbindgen_number_new=function(t){return d(t)},t.wbg.__wbindgen_string_new=function(t,e){return d(u(t,e))},t.wbg.__wbg_call_1084a111329e68ce=function(){return z((function(t,e){return d(s(t).call(s(e)))}),arguments)},t.wbg.__wbg_call_89af060b4e1523f2=function(){return z((function(t,e,_){return d(s(t).call(s(e),s(_)))}),arguments)},t.wbg.__wbg_call_7de908392845a9a5=function(){return z((function(t,e,_,n,r){return d(s(t).call(s(e),s(_),s(n),s(r)))}),arguments)},t.wbg.__wbg_valueOf_563b3487b1b116aa=function(t){return s(t).valueOf()},t.wbg.__wbg_buffer_b7b08af79b0b0974=function(t){return d(s(t).buffer)},t.wbg.__wbg_new_b85e72ed1bfd57f9=function(t,e){try{var _={a:t,b:e};return d(new Promise(((t,e)=>{const n=_.a;_.a=0;try{return x(n,_.b,t,e)}finally{_.a=n}})))}finally{_.a=_.b=0}},t.wbg.__wbg_resolve_570458cb99d56a43=function(t){return d(Promise.resolve(s(t)))},t.wbg.__wbg_then_95e6edc0f89b73b1=function(t,e){return d(s(t).then(s(e)))},t.wbg.__wbg_then_876bb3c633745cc6=function(t,e,_){return d(s(t).then(s(e),s(_)))},t.wbg.__wbg_newwithbyteoffsetandlength_b5293b0eedbac651=function(t,e,_){return d(new Int16Array(s(t),e>>>0,_>>>0))},t.wbg.__wbg_new_ea1883e1e5e86686=function(t){return d(new Uint8Array(s(t)))},t.wbg.__wbg_newwithbyteoffsetandlength_874df3e29cb555f9=function(t,e,_){return d(new Uint32Array(s(t),e>>>0,_>>>0))},t.wbg.__wbg_length_8339fcf5d8ecd12e=function(t){return s(t).length},t.wbg.__wbg_set_d1e79e2388520f18=function(t,e,_){s(t).set(s(e),_>>>0)},t.wbg.__wbindgen_throw=function(t,e){throw new Error(u(t,e))},t.wbg.__wbindgen_memory=function(){return d(i.memory)},t.wbg.__wbindgen_array_new=function(){return d([])},t.wbg.__wbindgen_array_push=function(t,e){s(t).push(g(e))},t.wbg.__wbindgen_uint8_array_new=function(t,e){var _=b(t,e).slice();return i.__wbindgen_free(t,1*e,1),d(_)},t.wbg.__wbg_queueMicrotask_48421b3cc9052b68=function(t){return d(s(t).queueMicrotask)},t.wbg.__wbindgen_cb_drop=function(t){const e=g(t).original;return 1==e.cnt--&&(e.a=0,!0)},t.wbg.__wbg_queueMicrotask_12a30234db4045d3=function(t){queueMicrotask(s(t))},t.wbg.__wbg_parquetchunk_new=function(t){return d(ht.__wrap(t))},t.wbg.__wbg_parquetfile_new=function(t){return d(kt.__wrap(t))},t.wbg.__wbg_filemetadata_new=function(t){return d(J.__wrap(t))},t.wbg.__wbg_fieldmetadata_new=function(t){return d(Y.__wrap(t))},t.wbg.__wbg_rowgroup_new=function(t){return d(Rt.__wrap(t))},t.wbg.__wbg_schemafield_unwrap=function(t){return Pt.__unwrap(g(t))},t.wbg.__wbg_columndescriptor_new=function(t){return d(N.__wrap(t))},t.wbg.__wbg_pageencodingdescriptor_new=function(t){return d(ft.__wrap(t))},t.wbg.__wbindgen_closure_wrapper1827=function(t,e,_){return d(f(t,e,163,y))},t}function qt(t,e){return i=t.exports,Ot.__wbindgen_wasm_module=e,F=null,R=null,O=null,P=null,w=null,i.__wbindgen_start(),i}async function Ot(t){if(void 0!==i)return i;void 0!==t&&(Object.getPrototypeOf(t)===Object.prototype?({module_or_path:t}=t):console.warn("using deprecated parameters for the initialization function; pass a single object instead"));const e=Mt();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:_,module:n}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(i){if("application/wasm"==t.headers.get("Content-Type"))throw i;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i)}const _=await t.arrayBuffer();return await WebAssembly.instantiate(_,e)}{const _=await WebAssembly.instantiate(t,e);return _ instanceof WebAssembly.Instance?{instance:_,module:t}:_}}(await t,e);return qt(_,n)}const jt=Object.freeze(Object.defineProperty({__proto__:null,ColumnDescriptor:N,CompressMode:L,FieldMetadata:Y,FileMetadata:J,FileWriter:Q,GeometryInfoDescriptor:Z,GeometryType:U,MultiScaleInfo:et,PageBuilderBytes:nt,PageBuilderF32:it,PageBuilderF64:st,PageBuilderGeometry:gt,PageBuilderI32:ct,PageBuilderI64:lt,PageBuilderString:bt,PageEncodingDescriptor:ft,ParquetChunk:ht,ParquetFile:kt,QuantizedGeometry:Ft,RangeProviderJs:zt,RowGroup:Rt,SchemaField:Pt,default:Ot,enable_tracing:function(){i.enable_tracing()},initSync:function(t){if(void 0!==i)return i;void 0!==t&&(Object.getPrototypeOf(t)===Object.prototype?({module:t}=t):console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));const e=Mt();return t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t)),qt(new WebAssembly.Instance(t,e),t)},readFile:function(t,e,_,n,r){const o=I(t,i.__wbindgen_malloc,i.__wbindgen_realloc),s=h;S(n,J);var a=n.__destroy_into_raw();let c=0;return W(r)||(S(r,Z),c=r.__destroy_into_raw()),g(i.readFile(o,s,d(e),d(_),a,c))},readFileFromBinary:function(t,e){let _=0;W(t)||(S(t,Z),_=t.__destroy_into_raw());const n=G(e,i.__wbindgen_malloc),r=h;return g(i.readFileFromBinary(_,n,r))},readMetadata:E,readMetadataFromFile:function(t){const e=G(t,i.__wbindgen_malloc),_=h;return g(i.readMetadataFromFile(e,_))}},Symbol.toStringTag,{value:"Module"}));let Ct=null;async function St(){return Ct||(Ct=async function(){const t=await Promise.resolve().then((()=>jt));return await t.default({module_or_path:(0,n.s)("esri/libs/parquet/pkg/arcgis_parquet_bg.wasm")}),t}()),Ct}const At=t=>async function(e,_,n){const i=t(),{data:o}=await(0,r.A)(e,{responseType:"array-buffer",query:i,headers:{range:`bytes=${_}-${n}`}});return o},Bt=t=>async function(e){const _=t(),{data:n}=await(0,r.A)(e,{responseType:"native",method:"head",query:_}),i=n.headers.get("Content-Length");if(null==i)throw new Error("Unable to parse content length");return parseInt(i,10)};class Wt{static async create(t,e){const _=await St(),n=await _.readMetadata(t,At(e),Bt(e));return Wt.fromFileMetadata(n)}static fromFileMetadata(t){const e=[];for(let _=0;_<t.numFields();_++){const n=t.getFieldByIndex(_);e.push({name:n.name,type:n.type,alias:n.name,index:n.index}),n.free()}return new Wt(t,e)}constructor(t,e){this._inner=t,this.fields=e}destroy(){this._inner.free()}[Symbol.dispose](){this.destroy()}get size(){return this._inner.numRows()}getFieldIndex(t){return this._inner.getFieldIndex(t)}tryReadGeoMetadata(){const t=this._inner.keyValueMetadata("geo");return null==t?null:JSON.parse(t)}tryReadEsriMetadata(){const t=this._inner.keyValueMetadata("esri");return null==t?null:JSON.parse(t)}}function Gt(t,e,_){const n=Z.new();if(n.geometryType=function(t){switch(t){case"esriGeometryPoint":return U.Point;case"esriGeometryPolygon":return U.Polygon;case"esriGeometryPolyline":return U.Polyline;case"esriGeometryMultipoint":return U.Multipoint;default:throw new Error(`InternalError: Found unexpected GeometryType: ${t}`)}}(t.geometryType),"location"===t.type)n.latIndex=e.getFieldIndex(t.latitudeFieldName),n.lngIndex=e.getFieldIndex(t.longitudeFieldName);else{if(null==t.primaryFieldName)throw new Error("InternalError: A primary field name or set of location fields must be defined");if(n.wkbIndex=e.getFieldIndex(t.primaryFieldName),t.multiscale){const _=et.new();for(const n of t.multiscale.levels){const[t,r]=n.transform.translate,[i,o]=n.transform.scale,s=e.getFieldIndex(n.column);_.push(s,t,r,i,o)}n.setMultiscaleInfo(_)}}return n.inWkid=t.spatialReference.wkid,_&&(n.outWkid=_.wkid),n}class Et{static async create(t,e){const _=await St(),n=At(e.getCustomParameters),r=Bt(e.getCustomParameters),i=await E(t,n,r),o=Gt(e.geometryInfo,i,e.outSpatialReference),s=await _.readFile(t,n,r,i,o);return new Et(s,Wt.fromFileMetadata(s.metadata()))}static async fromFile(t,e,_){const n=await St(),r=await n.readMetadataFromFile(t),i=e?Gt(e,r,_):void 0,o=await n.readFileFromBinary(i,t);return new Et(o,Wt.fromFileMetadata(o.metadata()))}constructor(t,e){this.inner=t,this.metadata=e}destroy(){this.inner.free(),this.metadata.destroy()}[Symbol.dispose](){this.destroy()}}}}]);
//# sourceMappingURL=4333.c00a991a.chunk.js.map
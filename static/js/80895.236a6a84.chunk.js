"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[80895],{27207:(e,t,r)=>{r.d(t,{Hi:()=>l,IB:()=>c,WH:()=>o,yu:()=>n});r(81806);var i=r(61678),s=r(93345),a=r(32880);function o(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,t,r,s){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const l=e.gl;e.bindBuffer(r);for(const c of s){const r=t.get(c.name);if(null==r){console.warn(`There is no location for vertex attribute '${c.name}' defined.`);continue}const s=n*c.stride;if(c.count<=4)l.vertexAttribPointer(r,c.count,c.type,c.normalized,c.stride,c.offset+s),l.enableVertexAttribArray(r),c.divisor>0&&e.gl.vertexAttribDivisor(r,c.divisor);else if(9===c.count)for(let t=0;t<3;t++)l.vertexAttribPointer(r+t,3,c.type,c.normalized,c.stride,c.offset+12*t+s),l.enableVertexAttribArray(r+t),c.divisor>0&&e.gl.vertexAttribDivisor(r+t,c.divisor);else if(16===c.count)for(let t=0;t<4;t++)l.vertexAttribPointer(r+t,4,c.type,c.normalized,c.stride,c.offset+16*t+s),l.enableVertexAttribArray(r+t),c.divisor>0&&e.gl?.vertexAttribDivisor(r+t,c.divisor);else console.error("Unsupported vertex attribute element count: "+c.count);if((0,i.en)()){const t=o(e),r=(0,a._)(c.type),i=c.offset,n=Math.round(r/i)!==r/i?`. Offset not a multiple of stride. DataType requires ${r} bytes, but descriptor has an offset of ${i}`:"";t&&console.error(`Unable to bind vertex attribute "${c.name}" with baseInstanceOffset ${s}${n}:`,t,c)}}}function l(e,t,r,i){const a=e.gl;e.bindBuffer(r);for(const s of i){const r=t.get(s.name);if(s.count<=4)a.disableVertexAttribArray(r),s.divisor&&s.divisor>0&&e.gl?.vertexAttribDivisor(r,0);else if(9===s.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(r+t),s.divisor&&s.divisor>0&&e.gl?.vertexAttribDivisor(r+t,0);else if(16===s.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(r+t),s.divisor&&s.divisor>0&&e.gl?.vertexAttribDivisor(r+t,0);else console.error("Unsupported vertex attribute element count: "+s.count)}e.unbindBuffer(s.NZ.ARRAY_BUFFER)}function c(e){switch(e){case s.Ab.ALPHA:case s.Ab.LUMINANCE:case s.Ab.RED:case s.Ab.RED_INTEGER:case s.H0.R8:case s.H0.R8I:case s.H0.R8UI:case s.H0.R8_SNORM:case s.yQ.STENCIL_INDEX8:return 1;case s.Ab.LUMINANCE_ALPHA:case s.Ab.RG:case s.Ab.RG_INTEGER:case s.H0.RGBA4:case s.H0.R16F:case s.H0.R16I:case s.H0.R16UI:case s.H0.RG8:case s.H0.RG8I:case s.H0.RG8UI:case s.H0.RG8_SNORM:case s.H0.RGB565:case s.H0.RGB5_A1:case s.yQ.DEPTH_COMPONENT16:return 2;case s.Ab.DEPTH_COMPONENT:case s.Ab.RGB:case s.Ab.RGB_INTEGER:case s.H0.RGB8:case s.H0.RGB8I:case s.H0.RGB8UI:case s.H0.RGB8_SNORM:case s.H0.SRGB8:case s.yQ.DEPTH_COMPONENT24:return 3;case s.Ab.DEPTH_STENCIL:case s.Ab.DEPTH24_STENCIL8:case s.Ab.RGBA:case s.Ab.RGBA_INTEGER:case s.H0.RGBA8:case s.H0.R32F:case s.H0.R11F_G11F_B10F:case s.H0.RG16F:case s.H0.R32I:case s.H0.R32UI:case s.H0.RG16I:case s.H0.RG16UI:case s.H0.RGBA8I:case s.H0.RGBA8UI:case s.H0.RGBA8_SNORM:case s.H0.SRGB8_ALPHA8:case s.H0.RGB9_E5:case s.H0.RGB10_A2UI:case s.H0.RGB10_A2:case s.yQ.DEPTH_STENCIL:case s.yQ.DEPTH_COMPONENT32F:case s.yQ.DEPTH24_STENCIL8:return 4;case s.yQ.DEPTH32F_STENCIL8:return 5;case s.H0.RGB16F:case s.H0.RGB16I:case s.H0.RGB16UI:return 6;case s.H0.RG32F:case s.H0.RG32I:case s.H0.RG32UI:case s.H0.RGBA16F:case s.H0.RGBA16I:case s.H0.RGBA16UI:return 8;case s.H0.RGB32F:case s.H0.RGB32I:case s.H0.RGB32UI:return 12;case s.H0.RGBA32F:case s.H0.RGBA32I:case s.H0.RGBA32UI:return 16;case s.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case s.CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case s.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case s.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case s.CQ.COMPRESSED_R11_EAC:case s.CQ.COMPRESSED_SIGNED_R11_EAC:case s.CQ.COMPRESSED_RGB8_ETC2:case s.CQ.COMPRESSED_SRGB8_ETC2:case s.CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case s.CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case s.CQ.COMPRESSED_RG11_EAC:case s.CQ.COMPRESSED_SIGNED_RG11_EAC:case s.CQ.COMPRESSED_RGBA8_ETC2_EAC:case s.CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}},32880:(e,t,r)=>{r.d(t,{_:()=>s});var i=r(93345);function s(e){switch(e){case i.pe.BYTE:case i.pe.UNSIGNED_BYTE:return 1;case i.pe.SHORT:case i.pe.UNSIGNED_SHORT:case i.pe.HALF_FLOAT:return 2;case i.pe.FLOAT:case i.pe.INT:case i.pe.UNSIGNED_INT:return 4}}},61678:(e,t,r)=>{r.d(t,{Xc:()=>c,Y2:()=>h,en:()=>l});var i=r(50076),s=r(81806),a=r(76460);const o=()=>a.A.getLogger("esri.views.webgl.checkWebGLError");const n=!!(0,s.A)("enable-feature:webgl-debug");function l(){return n}function c(){return n}function h(e){if(l()){const t=e.getError();if(t){const r=function(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(e,t),s=(new Error).stack;o().error(new i.A("webgl-error","WebGL error occurred",{message:r,stack:s}))}}}},80895:(e,t,r)=>{r.d(t,{g:()=>f});var i=r(50076),s=(r(81806),r(76460)),a=r(30726),o=r(50346),n=r(75540),l=r(61678),c=r(93345),h=r(89179),p=r(96673);function _(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&s.A.getLogger("esri/views/webgl/textureUtils").error("Negative dimension parameters are not allowed!")}function d(e){return e in c.CQ}function u(e){return null!=e&&"type"in e&&"compressed"===e.type}function m(e){return null!=e&&!u(e)&&!function(e){return null!=e&&"byteLength"in e}(e)}function A(e){return e===c.Ap.TEXTURE_3D||e===c.Ap.TEXTURE_2D_ARRAY}function E(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=Math.max(t,r);return e===c.Ap.TEXTURE_3D&&(s=Math.max(s,i)),Math.floor(Math.log2(s))+1}function T(e){if(null!=e.internalFormat)return e.internalFormat===c.Ab.DEPTH_STENCIL?c.Ab.DEPTH24_STENCIL8:e.internalFormat;switch(e.dataType){case c.ld.FLOAT:switch(e.pixelFormat){case c.Ab.RGBA:return c.H0.RGBA32F;case c.Ab.RGB:return c.H0.RGB32F;default:throw new i.A("Unable to derive format")}case c.ld.UNSIGNED_BYTE:switch(e.pixelFormat){case c.Ab.RGBA:return c.H0.RGBA8;case c.Ab.RGB:return c.H0.RGB8}}return e.internalFormat=e.pixelFormat===c.Ab.DEPTH_STENCIL?c.Ab.DEPTH24_STENCIL8:e.pixelFormat}var R=r(97215);const g=()=>s.A.getLogger("esri/views/webgl/Texture");let f=class e{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.type=h.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,this._compressionAbortController=(0,n.v)(null),"context"in e)this._descriptor=e,r=t;else{const r=R.z.validate(e,t);if(!r)throw new i.A("Texture descriptor invalid");this._descriptor=r}this._descriptor.target===c.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(r):this.setData(r)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return(0,p.e)(this._descriptor)}get cachedMemory(){return this.usedMemory}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}get isCompressing(){return null!==this._compressionAbortController.value}dispose(){this.abortCompression(),this._glName&&this._descriptor.context.instanceCounter.decrement(c.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const r=this._descriptor;if(r.width!==e||r.height!==t){if(this._wasImmutablyAllocated)throw new i.A("Immutable textures can't be resized!");r.width=e,r.height=t,this._descriptor.target===c.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}enableCompression(e){this._descriptor.shouldCompress=e}setData(e){this.abortCompression(),!u(e)&&this._descriptor.internalFormat&&this._descriptor.internalFormat in c.CQ&&(this._descriptor.internalFormat=void 0),this._setData(e),!u(e)&&this._descriptor.shouldCompress&&this._compressOnWorker(e)}updateData(t,r,s,a,o,n){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;n||g().error("An attempt to use uninitialized data!"),this._glName||g().error("An attempt to update uninitialized texture!");const c=this._descriptor;c.internalFormat=T(c);const{context:h,pixelFormat:p,dataType:_,target:d,isImmutable:A}=c;if(A&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");const E=h.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||s<0||r+a>c.width||s+o>c.height)&&g().error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:R}=h;l&&(a&&o||g().warn("Must pass width and height if `UNPACK_SKIP_ROWS` is used"),R.pixelStorei(R.UNPACK_SKIP_ROWS,l)),m(n)?R.texSubImage2D(d,t,r,s,a,o,p,_,n):u(n)?R.compressedTexSubImage2D(d,t,r,s,a,o,c.internalFormat,n.levels[t]):R.texSubImage2D(d,t,r,s,a,o,p,_,n),l&&R.pixelStorei(R.UNPACK_SKIP_ROWS,0),h.bindTexture(E,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,r,s,a,o,n,l,c){c||g().error("An attempt to use uninitialized data!"),this._glName||g().error("An attempt to update an uninitialized texture!");const h=this._descriptor;h.internalFormat=T(h);const{context:p,pixelFormat:_,dataType:d,isImmutable:m,target:E}=h;if(m&&!this._wasImmutablyAllocated)throw new i.A("Cannot update immutable texture before allocation!");A(E)||g().warn("Attempting to set 3D texture data on a non-3D texture");const R=p.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);p.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(r<0||s<0||a<0||r+o>h.width||s+n>h.height||a+l>h.depth)&&g().error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:f}=p;if(u(c))c=c.levels[t],f.compressedTexSubImage3D(E,t,r,s,a,o,n,l,h.internalFormat,c);else{const e=c;f.texSubImage3D(E,t,r,s,a,o,n,l,_,d,e)}p.bindTexture(R,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(0===t.width||0===t.height)return;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,_(t)}t.samplingMode===c.Cj.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=c.Cj.LINEAR_MIPMAP_NEAREST):t.samplingMode===c.Cj.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=c.Cj.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(r,e.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new i.A("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,_(e)}e.samplingMode===c.Cj.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=c.Cj.LINEAR):e.samplingMode===c.Cj.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=c.Cj.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,_(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){this._samplingModeDirty&&(this._applySamplingMode(),this._samplingModeDirty=!1),this._wrapModeDirty&&(this._applyWrapMode(),this._wrapModeDirty=!1)}abortCompression(){this.isCompressing&&(this._compressionAbortController.value=(0,a.DC)(this._compressionAbortController.value))}_setData(t,r){const s=this._descriptor,a=s.context?.gl;if(!a)return;(0,l.Y2)(a),this._glName||(this._glName=a.createTexture(),this._glName&&s.context.instanceCounter.increment(c.vt.Texture,this)),_(s);const o=s.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);s.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._configurePixelStorage(),(0,l.Y2)(a);const n=r??s.target,h=A(n);if(m(t))this._setDataFromTexImageSource(t,n);else{const{width:e,height:r,depth:o}=s;if(null==e||null==r)throw new i.A("Width and height must be specified!");if(h&&null==o)throw new i.A("Depth must be specified!");if(s.internalFormat=T(s),s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,s.internalFormat,s.hasMipmap,e,r,o),u(t)){if(!d(s.internalFormat))throw new i.A("Attempting to use compressed data with an uncompressed format!");this._setDataFromCompressedSource(t,s.internalFormat,n)}else this._texImage(n,0,s.internalFormat,e,r,o,t),(0,l.Y2)(a),s.hasMipmap&&this.generateMipmap()}this._applySamplingMode(),this._applyWrapMode(),this._applyAnisotropicFilteringParameters(),(0,l.Y2)(a),s.context.bindTexture(o,e.TEXTURE_UNIT_FOR_UPDATES)}_setDataCubeMap(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;for(let t=c.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;t<=c.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:r,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_setDataFromTexImageSource(e,t){const{gl:r}=this._descriptor.context,i=this._descriptor;i.internalFormat=T(i);const s=A(t),{width:a,height:o,depth:n}=function(e){let t="width"in e?e.width:e.codedWidth,r="height"in e?e.height:e.codedHeight;return e instanceof HTMLVideoElement&&(t=e.videoWidth,r=e.videoHeight),{width:t,height:r,depth:1}}(e);i.width&&i.height,i.width||(i.width=a),i.height||(i.height=o),s&&i.depth,s&&(i.depth=n),i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(t,i.internalFormat,i.hasMipmap,a,o,n),this._texImage(t,0,i.internalFormat,a,o,n,e),(0,l.Y2)(r),i.hasMipmap&&(this.generateMipmap(),(0,l.Y2)(r))}_setDataFromCompressedSource(e,t,r){const i=this._descriptor,{width:s,height:a,depth:o}=i,n=e.levels,l=E(r,s,a,o),c=Math.min(l,n.length)-1;this._descriptor.context.gl.texParameteri(i.target,i.context.gl.TEXTURE_MAX_LEVEL,c),this._forEachMipmapLevel(((e,i,s,a)=>{const o=n[Math.min(e,n.length-1)];this._compressedTexImage(r,e,t,i,s,a,o)}),c)}_texStorage(e,t,r,s,a,o){const{gl:n}=this._descriptor.context;if(!(t in c.H0))throw new i.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=r?E(e,s,a,o):1;if(A(e)){if(null==o)throw new i.A("Missing depth dimension for 3D texture upload");n.texStorage3D(e,l,t,s,a,o)}else n.texStorage2D(e,l,t,s,a);this._wasImmutablyAllocated=!0}_texImage(e,t,r,s,a,o,n){const l=this._descriptor.context.gl,c=A(e),{isImmutable:h,pixelFormat:p,dataType:_}=this._descriptor;if(h){if(null!=n){const r=n;if(c){if(null==o)throw new i.A("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,t,0,0,0,s,a,o,p,_,r)}else l.texSubImage2D(e,t,0,0,s,a,p,_,r)}}else{const h=n;if(c){if(null==o)throw new i.A("Missing depth dimension for 3D texture upload");l.texImage3D(e,t,r,s,a,o,0,p,_,h)}else l.texImage2D(e,t,r,s,a,0,p,_,h)}}_compressedTexImage(e,t,r,s,a,o,n){const l=this._descriptor.context.gl,c=A(e);if(this._descriptor.isImmutable){if(null!=n)if(c){if(null==o)throw new i.A("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,t,0,0,0,s,a,o,r,n)}else l.compressedTexSubImage2D(e,t,0,0,s,a,r,n)}else if(c){if(null==o)throw new i.A("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,t,r,s,a,o,0,n)}else l.compressedTexImage2D(e,t,r,s,a,0,n)}async _compressOnWorker(t){if(!e.compressionWorkerHandle||!e.compressionWorkerHandle.isCompressible(t))return;const r=this._descriptor.context?.gl.getExtension("WEBGL_compressed_texture_etc"),i=this._descriptor.context?.gl.getExtension("WEBGL_compressed_texture_s3tc");if(r||i){const s=new AbortController;this._compressionAbortController.value=s;const a={data:await createImageBitmap(t),flipped:this.descriptor.flipped,width:t.width,height:t.height,hasMipmap:this._descriptor.hasMipmap,hasETC:!!r,hasS3TC:!!i};e.compressionWorkerHandle.invoke(a,this._compressionAbortController.value.signal).then((e=>{e&&this.isCompressing&&this.glName&&(this._descriptor.internalFormat=e.internalFormat,this._setData(e.compressedTexture)),s===this._compressionAbortController.value&&(this._compressionAbortController.value=null)})).catch((e=>{(0,o.zf)(e)||s!==this._compressionAbortController.value||(this._compressionAbortController.value=null)}))}}_forEachMipmapLevel(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,{width:r,height:s,depth:a,hasMipmap:o,target:n}=this._descriptor;const l=n===c.Ap.TEXTURE_3D;if(null==r||null==s||l&&null==a)throw new i.A("Missing texture dimensions for mipmap calculation");for(let i=0;e(i,r,s,a),o&&(1!==r||1!==s||l&&1!==a)&&!(i>=t);++i)r=Math.max(1,r>>1),s=Math.max(1,s>>1),l&&(a=Math.max(1,a>>1))}_applySamplingMode(){const e=this._descriptor,t=e.context?.gl;let r=e.samplingMode,i=e.samplingMode;r===c.Cj.LINEAR_MIPMAP_NEAREST||r===c.Cj.LINEAR_MIPMAP_LINEAR?(r=c.Cj.LINEAR,e.hasMipmap||(i=c.Cj.LINEAR)):r!==c.Cj.NEAREST_MIPMAP_NEAREST&&r!==c.Cj.NEAREST_MIPMAP_LINEAR||(r=c.Cj.NEAREST,e.hasMipmap||(i=c.Cj.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,i)}_applyWrapMode(){const e=this._descriptor,t=e.context?.gl;"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}_applyAnisotropicFilteringParameters(){const e=this._descriptor,t=e.context.capabilities.textureFilterAnisotropic;t&&e.context.gl.texParameterf(e.target,t.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}};f.TEXTURE_UNIT_FOR_UPDATES=0,f.compressionWorkerHandle=null},89179:(e,t,r)=>{var i;r.d(t,{p:()=>i}),function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(i||(i={}))},96673:(e,t,r)=>{r.d(t,{R:()=>a,e:()=>o});var i=r(93345),s=r(27207);class a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;this.width=e,this.height=t,this.target=i.Ap.TEXTURE_2D,this.pixelFormat=i.Ab.RGBA,this.dataType=i.ld.UNSIGNED_BYTE,this.samplingMode=i.Cj.LINEAR,this.wrapMode=i.pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.shouldCompress=!1,this.depth=1,this.isImmutable=!1}}function o(e){return e.width<=0||e.height<=0?0:Math.round(e.width*e.height*e.depth*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:(0,s.IB)(e.internalFormat))*(e.target===i.Ap.TEXTURE_CUBE_MAP?6:1))}},97215:(e,t,r)=>{r.d(t,{z:()=>a});var i=r(93345),s=r(96673);class a extends s.R{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case i.H0.R16F:case i.H0.R16I:case i.H0.R16UI:case i.H0.R32F:case i.H0.R32I:case i.H0.R32UI:case i.H0.R8_SNORM:case i.H0.R8:case i.H0.R8I:case i.H0.R8UI:this.pixelFormat=i.Ab.RED}}static validate(e,t){return new a(e,t)}}}}]);
//# sourceMappingURL=80895.236a6a84.chunk.js.map
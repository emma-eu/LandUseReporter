"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[1014],{1014:(e,t,n)=>{n.r(t),n.d(t,{destroyWasm:()=>c,initialize:()=>l,process:()=>o});var i=n(28586),r=n(43414);let a,s;async function o(e){if(await l(),e.inputs.length<1)return{result:{status:i.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const i of e.inputs){const e=s._malloc(i.byteLength);new Uint8Array(s.HEAPU8.buffer,e,i.byteLength).set(new Uint8Array(i)),t.ptrs.push(e),t.sizes.push(i.byteLength)}const n=s.process(e.jobDescJson,t,e.isMissingResourceCase),r=n.status===i.Qg.Succeeded&&n.data,a=n.status===i.Qg.MissingInputs&&n.missingInputUrls.length>0;if(r){const e=n.data.slice();n.data=e}else a&&(n.jobDescJson=n.jobDescJson.slice(),n.originalInputs=e.inputs.slice());for(let i=0;i<t.ptrs.length;++i)s._free(t.ptrs[i]);const o=[];if(r)o.push(n.data.buffer);else if(a)for(const i of e.inputs)o.push(i);return{result:n,transferList:o}}function c(){s&&(s.uninitialize_lyr3d_worker_wasm(),s=null)}function l(){return s?Promise.resolve():(a||(a=(0,r.h)().then((e=>{s=e,s.initialize_lyr3d_worker_wasm(),a=null}))),a)}},28586:(e,t,n)=>{var i,r,a,s,o,c,l,u,p,g,d,f,N,m,S;n.d(t,{Pl:()=>b,Qg:()=>S,vE:()=>h}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(i||(i={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Bc7="Bc7",e.Basis="Basis",e.Etc1="Etc1",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(r||(r={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.FeatureVariable="FeatureVariable",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(s||(s={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(o||(o={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(c||(c={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(l||(l={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(p||(p={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(g||(g={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(d||(d={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(f||(f={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(N||(N={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.Ga8="Ga8",e.Etc1="Etc1",e.Etc2="Etc2",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Bc7="Bc7",e.NotSet="NotSet"}(m||(m={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(S||(S={}));const b=-1,h=-2},43414:(e,t,n)=>{n.d(t,{a:()=>r,h:()=>a});var i=n(28899);function r(){return new Promise((e=>n.e(4001).then(n.bind(n,26382)).then((e=>e.l)).then((t=>{let{default:n}=t;const i=n({locateFile:s,onRuntimeInitialized:()=>e(i)})})))).catch((e=>{throw e}))}function a(){return new Promise((e=>n.e(23409).then(n.bind(n,23409)).then((e=>e.l)).then((t=>{let{default:n}=t;const i=n({locateFile:s,onRuntimeInitialized:()=>e(i)})})))).catch((e=>{throw e}))}function s(e){return(0,i.s)(`esri/libs/lyr3d/${e}`)}}}]);
//# sourceMappingURL=1014.f9aac32f.chunk.js.map
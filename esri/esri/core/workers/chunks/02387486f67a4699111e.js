"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6061,7074],{76061:(e,t,s)=>{s.d(t,{G:()=>n,S:()=>i});class n{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class i extends n{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},51190:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>o});var n=s(83047),i=s(83299);function o(e,t={}){const{unit:s}=t;let o=(0,i.fromGeometryToGXGeometry)(e).calculateLength2D();const r=(0,i.getSpatialReference)(e);return o&&s&&r&&(o=(0,n.PQ)(o,r,s)),o}}}]);
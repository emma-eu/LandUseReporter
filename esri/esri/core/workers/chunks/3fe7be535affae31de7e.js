"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3009],{33009:(i,e,a)=>{a.r(e),a.d(e,{classBreaks:()=>s,heatmapStatistics:()=>m,histogram:()=>r,summaryStatistics:()=>l,uniqueValues:()=>o});var n=a(87445),t=a(1873);async function l(i){const{attribute:e,features:a}=i,{normalizationType:l,normalizationField:o,minValue:s,maxValue:r,fieldType:m,outStatisticTypes:u}=e,f=await(0,n.Jc)({field:e.field,valueExpression:e.valueExpression,normalizationType:l,normalizationField:o,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},a),d=(0,t.Vb)({normalizationType:l,normalizationField:o,minValue:s,maxValue:r}),c={value:.5,fieldType:m},p="esriFieldTypeString"===m?(0,t.z9)({values:f,supportsNullCount:d,percentileParams:c,outStatisticTypes:u}):(0,t.G_)({values:f,minValue:s,maxValue:r,useSampleStdDev:!l,supportsNullCount:d,percentileParams:c,outStatisticTypes:u});return(0,t.oZ)(p,u,"esriFieldTypeDate"===m)}async function o(i){const{attribute:e,features:a}=i,l=await(0,n.Jc)({field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},a,!1),o=(0,t.b3)(l);return(0,t.lv)(o,e.domains,e.returnAllCodedValues,e.fieldDelimiter)}async function s(i){const{attribute:e,features:a}=i,{field:l,normalizationType:o,normalizationField:s,normalizationTotal:r,classificationMethod:m}=e,u=await(0,n.Jc)({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:s,normalizationTotal:r,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},a),f=(0,t.Rw)(u,{field:l,normalizationType:o,normalizationField:s,normalizationTotal:r,classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return(0,t.jM)(f,m)}async function r(i){const{attribute:e,features:a}=i,{field:l,normalizationType:o,normalizationField:s,normalizationTotal:r,classificationMethod:m}=e,u=await(0,n.Jc)({field:l,valueExpression:e.valueExpression,normalizationType:o,normalizationField:s,normalizationTotal:r,viewInfoParams:e.viewInfoParams,timeZone:e.timeZone,fieldInfos:e.fieldInfos},a);return(0,t.$y)(u,{field:l,normalizationType:o,normalizationField:s,normalizationTotal:r,classificationMethod:m,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function m(i){const{attribute:e,features:a}=i,{field:t,radius:l,transform:o,spatialReference:s}=e,r=e.size??[0,0],m=(0,n.$r)(a??[],o,s,r);return(0,n.gV)(m,l??void 0,t,r[0],r[1])}}}]);
"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[11825],{11825:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var s=r(35143),a=r(94643),i=r(3975),l=r(46053),n=(r(81806),r(76460),r(47249),r(85842)),h=r(56286),d=r(91196);let o=class extends((0,h.e)(d.A)){constructor(e){super(e),this.layerViews=new a.A}set layerViews(e){this._set("layerViews",(0,i.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};(0,s._)([(0,l.MZ)({cast:i.H})],o.prototype,"layerViews",null),(0,s._)([(0,l.MZ)({readOnly:!0})],o.prototype,"updatingProgress",null),o=(0,s._)([(0,n.$)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],o);const u=o}}]);
//# sourceMappingURL=11825.66faca60.chunk.js.map
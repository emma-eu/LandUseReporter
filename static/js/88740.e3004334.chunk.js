"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[88740],{88740:(e,t,o)=>{o.d(t,{MediaLayerInteraction:()=>y});var n=o(35143),s=o(91967),i=o(54901),l=o(50346),r=o(68134),a=o(46053),d=(o(81806),o(76460),o(47249),o(85842)),h=o(19451),c=o(57308);const _="r",p="z",u=Symbol(),m=Symbol(),v=Symbol();let y=class extends s.A{constructor(e){super(e),this._tool=null,this._updatingHandles=new h.U,this.enabled=!1,this._onPointerMove=(0,l.sg)((async e=>{const t=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(m),t&&t!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles((0,i.hA)((()=>this.view.cursor=null)),m)))}))}initialize(){this.addHandles((0,i.DQ)(this._updatingHandles)),this._updatingHandles.add((()=>this.enabled),(e=>this._setEnabled(e)),r.Vh),this._updatingHandles.add((()=>this._preferredInteractionTool),(()=>this._preferredInteractionToolChanged()))}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(u),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",(e=>this._onClick(e)),c.o.TOOL),t.on("pointer-move",(e=>this._onPointerMove(e).catch((()=>{}))),c.o.TOOL),t.on("key-down",(e=>{e.key===p&&this._tool?.canUndo()&&(this._tool.undo(),e.stopPropagation()),e.key===_&&this._tool?.canRedo()&&(this._tool.redo(),e.stopPropagation())})),this._updatingHandles.add((()=>this._validatedSelectedElement),(e=>this._selectedElementChanged(e)),r.Vh),(0,i.hA)((()=>{t.cursor=null,this._removeTool()}))],u)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return"media"===t?.type?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async((async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))})))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(v),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles((0,i.rE)(t),v);const{TransformTool:n,ControlPointsTransformTool:s}=await Promise.all([o.e(52612),o.e(21729),o.e(89150),o.e(19686),o.e(41376),o.e(70515),o.e(7668),o.e(10898),o.e(67853),o.e(15169)]).then(o.bind(o,60176));if(t.signal.aborted)return;const{view:l}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new n({target:e,view:l});break;case"reshape":this._tool=new s({mediaElement:e,view:l})}this.addHandles((0,i.hA)((()=>{this._tool&&(l.tools.remove(this._tool),this._tool=null)})),this._tool),l.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};(0,n._)([(0,a.MZ)()],y.prototype,"_validatedSelectedElement",null),(0,n._)([(0,a.MZ)()],y.prototype,"_preferredInteractionTool",null),(0,n._)([(0,a.MZ)({constructOnly:!0})],y.prototype,"view",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],y.prototype,"layer",void 0),(0,n._)([(0,a.MZ)()],y.prototype,"selectedElement",void 0),(0,n._)([(0,a.MZ)()],y.prototype,"enabled",void 0),(0,n._)([(0,a.MZ)()],y.prototype,"options",void 0),(0,n._)([(0,a.MZ)()],y.prototype,"updating",null),y=(0,n._)([(0,d.$)("esri.views.2d.layers.support.MediaLayerInteraction")],y)}}]);
//# sourceMappingURL=88740.e3004334.chunk.js.map
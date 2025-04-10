/*! For license information please see 3671.6f1719d7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[3671],{3671:(e,t,n)=>{n.r(t),n.d(t,{ActionMenu:()=>g});n(85375),n(51866);var i=n(30697),o=n(80526),s=n(37022),l=n(5417),a=n(41732),c=n(50965),u=n(90596),r=n(19457),d=n(98246),h=n(28460);const p=n(94161).AH`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`,m=["ArrowUp","ArrowDown","End","Home"];class g extends l.WF{constructor(){super(...arguments),this.guid=`calcite-action-menu-${(0,u.g)()}`,this.actionElements=[],this.menuButtonClick=()=>{this.toggleOpen()},this.menuButtonId=`${this.guid}-menu-button`,this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:i,open:o}=this;if(n.length){if((0,r.i)(t)){if(e.preventDefault(),!o)return void this.toggleOpen();const t=n[i];t?t.click():this.toggleOpen(!1)}if("Tab"===t)return void(this.open=!1);if("Escape"===t)return this.toggleOpen(!1),void e.preventDefault();this.handleActionNavigation(e,t,n)}},this.menuId=`${this.guid}-menu`,this._open=!1,this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:i}=this,o=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=o),e.toggleAttribute(h.a,t===i)},this.activeMenuItemIndex=-1,this.appearance="solid",this.expanded=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale="m",this.calciteActionMenuOpen=(0,l.lh)({cancelable:!1})}static#e=(()=>this.properties={activeMenuItemIndex:16,menuButtonEl:16,appearance:3,expanded:7,flipPlacements:0,label:1,open:7,overlayPositioning:3,placement:3,scale:3})();static#t=(()=>this.styles=p)();get open(){return this._open}set open(e){e!==this._open&&(this._open=e,this.openHandler(e))}async setFocus(){return await(0,d.c)(this),(0,c.b)(this.menuButtonEl)}connectedCallback(){super.connectedCallback(),this.connectMenuButtonEl()}willUpdate(e){e.has("expanded")&&(this.hasUpdated||!1!==this.expanded)&&this.expandedHandler(),e.has("activeMenuItemIndex")&&(this.hasUpdated||-1!==this.activeMenuItemIndex)&&this.updateActions(this.actionElements)}disconnectedCallback(){super.disconnectedCallback(),this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.menuButtonEl&&(this.menuButtonEl.active=e),this.popoverEl&&(this.popoverEl.open=e),this.activeMenuItemIndex=this.open?0:-1,this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}connectMenuButtonEl(){const{menuButtonId:e,menuId:t,open:n,label:i}=this,o=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==o&&(this.disconnectMenuButtonEl(),this.menuButtonEl=o,this.setTooltipReferenceElement(),o&&(o.active=n,o.setAttribute("aria-controls",t),o.setAttribute("aria-expanded",(0,c.t)(n)),o.setAttribute("aria-haspopup","true"),o.id||(o.id=e),o.label||(o.label=i),o.text||(o.text=i),o.addEventListener("click",this.menuButtonClick),o.addEventListener("keydown",this.menuButtonKeyDown)))}disconnectMenuButtonEl(){const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown),this.menuButtonEl=null)}setMenuButtonEl(e){const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-action")));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()}setDefaultMenuButtonEl(e){this.defaultMenuButtonEl=e,e&&this.connectMenuButtonEl()}setPopoverEl(e){e&&(this.popoverEl=e,e.open=this.open)}handleCalciteActionClick(){this.open=!1,this.setFocus()}updateTooltip(e){const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-tooltip")));this.tooltipEl=t[0],this.setTooltipReferenceElement()}setTooltipReferenceElement(){const{tooltipEl:e,expanded:t,menuButtonEl:n,open:i}=this;e&&(e.referenceElement=t||i?null:n)}updateActions(e){e?.forEach(this.updateAction)}handleDefaultSlotChange(e){const t=e.target.assignedElements({flatten:!0}).reduce(((e,t)=>t?.matches("calcite-action")?(e.push(t),e):t?.matches("calcite-action-group")?e.concat(Array.from(t.querySelectorAll("calcite-action"))):e),[]);this.actionElements=t.filter((e=>!e.disabled&&!e.hidden))}isValidKey(e,t){return!!t.find((t=>t===e))}handleActionNavigation(e,t,n){if(!this.isValidKey(t,m))return;if(e.preventDefault(),!this.open)return this.toggleOpen(),("Home"===t||"ArrowDown"===t)&&(this.activeMenuItemIndex=0),void(("End"===t||"ArrowUp"===t)&&(this.activeMenuItemIndex=n.length-1));"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;"ArrowUp"===t&&(this.activeMenuItemIndex=(0,a.g)(Math.max(i-1,-1),n.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=(0,a.g)(i+1,n.length))}toggleOpen(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.open;this.open=e}handlePopoverOpen(){this.open=!0,this.setFocus()}handlePopoverClose(){this.open=!1}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:i}=this;return s.qy`<slot name=${h.S.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${e} class=${(0,l.CP)(h.C.defaultTrigger)} .icon=${h.I.menu} .scale=${n} .text=${t} .textEnabled=${i} ${(0,o.K)(this.setDefaultMenuButtonEl)}></calcite-action></slot>`}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,menuId:n,menuButtonEl:i,label:a,placement:c,overlayPositioning:u,flipPlacements:r}=this,d=e[t]?.id||null;return s.qy`<calcite-popover auto-close .flipPlacements=${r} focus-trap-disabled .label=${a} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${u} .placement=${c} pointer-disabled .referenceElement=${i} trigger-disabled ${(0,o.K)(this.setPopoverEl)}><div aria-activedescendant=${d??s.s6} aria-labelledby=${i?.id??s.s6} class=${(0,l.CP)(h.C.menu)} id=${n??s.s6} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`}render(){return s.qy`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${h.S.tooltip} @slotchange=${this.updateTooltip}></slot>`}}(0,i.c)("calcite-action-menu",g)},28460:(e,t,n)=>{n.d(t,{C:()=>i,I:()=>s,S:()=>o,a:()=>l});const i={menu:"menu",defaultTrigger:"default-trigger"},o={tooltip:"tooltip",trigger:"trigger"},s={menu:"ellipsis"},l="data-active"},41732:(e,t,n)=>{function i(e,t){return(e+t)%t}n.d(t,{g:()=>i})}}]);
//# sourceMappingURL=3671.6f1719d7.chunk.js.map
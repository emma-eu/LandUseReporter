"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[94536],{4763:(t,e,n)=>{n.d(e,{C:()=>O,FB:()=>o,ig:()=>R,m7:()=>A,ui:()=>m,vt:()=>f});var o,i,r,s=n(97467),h=n(34761),a=n(20664),l=n(9392),d=n(43047),u=n(55855),c=n(49595),_=n(13927),T=n(75762);function f(t){return t?[(0,_.vt)(t[0]),(0,_.vt)(t[1]),(0,_.vt)(t[2]),(0,_.vt)(t[3]),(0,_.vt)(t[4]),(0,_.vt)(t[5])]:[(0,_.vt)(),(0,_.vt)(),(0,_.vt)(),(0,_.vt)(),(0,_.vt)(),(0,_.vt)()]}function O(t,e){for(let n=0;n<b;n++)(0,_.C)(t[n],e[n]);return t}function m(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:F;const s=(0,h.lw)(T.Rc.get(),e,t);(0,h.B8)(s,s);for(let o=0;o<p;++o){const t=(0,d.t)(T.Km.get(),g[o],s);(0,a.i)(r[o],t[0]/t[3],t[1]/t[3],t[2]/t[3])}!function(t,e){(0,_.Cr)(e[i.FAR_BOTTOM_LEFT],e[i.NEAR_BOTTOM_LEFT],e[i.NEAR_TOP_LEFT],t[o.LEFT]),(0,_.Cr)(e[i.NEAR_BOTTOM_RIGHT],e[i.FAR_BOTTOM_RIGHT],e[i.FAR_TOP_RIGHT],t[o.RIGHT]),(0,_.Cr)(e[i.FAR_BOTTOM_LEFT],e[i.FAR_BOTTOM_RIGHT],e[i.NEAR_BOTTOM_RIGHT],t[o.BOTTOM]),(0,_.Cr)(e[i.NEAR_TOP_LEFT],e[i.NEAR_TOP_RIGHT],e[i.FAR_TOP_RIGHT],t[o.TOP]),(0,_.Cr)(e[i.NEAR_BOTTOM_LEFT],e[i.NEAR_BOTTOM_RIGHT],e[i.NEAR_TOP_RIGHT],t[o.NEAR]),(0,_.Cr)(e[i.FAR_BOTTOM_RIGHT],e[i.FAR_BOTTOM_LEFT],e[i.FAR_TOP_LEFT],t[o.FAR])}(n,r)}function A(t,e){for(let n=0;n<b;n++){const o=t[n];if(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]+o[3]>=e[3])return!1}return!0}function R(t,e){for(let n=0;n<b;n++){const o=t[n];if(!(0,_.b6)(o,e))return!1}return!0}(r=o||(o={}))[r.LEFT=0]="LEFT",r[r.RIGHT=1]="RIGHT",r[r.BOTTOM=2]="BOTTOM",r[r.TOP=3]="TOP",r[r.NEAR=4]="NEAR",r[r.FAR=5]="FAR",function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(i||(i={}));i.FAR_BOTTOM_RIGHT,i.NEAR_BOTTOM_RIGHT,i.NEAR_BOTTOM_LEFT,i.FAR_BOTTOM_LEFT,i.NEAR_BOTTOM_LEFT,i.NEAR_BOTTOM_RIGHT,i.NEAR_TOP_RIGHT,i.NEAR_TOP_LEFT,i.FAR_BOTTOM_RIGHT,i.FAR_BOTTOM_LEFT,i.FAR_TOP_LEFT,i.FAR_TOP_RIGHT,i.NEAR_BOTTOM_RIGHT,i.FAR_BOTTOM_RIGHT,i.FAR_TOP_RIGHT,i.NEAR_TOP_RIGHT,i.FAR_BOTTOM_LEFT,i.NEAR_BOTTOM_LEFT,i.NEAR_TOP_LEFT,i.FAR_TOP_LEFT,i.FAR_TOP_LEFT,i.NEAR_TOP_LEFT,i.NEAR_TOP_RIGHT,i.FAR_TOP_RIGHT;const b=6,p=8,g=[(0,u.fA)(-1,-1,-1,1),(0,u.fA)(1,-1,-1,1),(0,u.fA)(1,1,-1,1),(0,u.fA)(-1,1,-1,1),(0,u.fA)(-1,-1,1,1),(0,u.fA)(1,-1,1,1),(0,u.fA)(1,1,1,1),(0,u.fA)(-1,1,1,1)],F=(new s.I(c.vt),[(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)(),(0,l.vt)()])},49595:(t,e,n)=>{n.d(e,{$e:()=>h,j1:()=>a,mO:()=>l,vt:()=>s});var o=n(97467),i=n(20664),r=n(95925);function s(t){return t?{ray:(0,r.vt)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,r.vt)(),c0:0,c1:Number.MAX_VALUE}}function h(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();return(0,r.C)(t,e.ray),e.c0=0,e.c1=Number.MAX_VALUE,e}function a(t,e){return d(t,t.c0,e)}function l(t,e){return d(t,t.c1,e)}function d(t,e,n){return(0,i.g)(n,t.ray.origin,(0,i.h)(n,t.ray.direction,e))}new o.I((()=>s()))},94536:(t,e,n)=>{n.d(e,{A:()=>u});var o=n(3789),i=n(30015),r=n(20664),s=n(9392),h=n(4763),a=n(95925),l=n(78315),d=n(86994);class u{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new c,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),c.clearPool(),S[0]=null,I.prune(),D.prune()}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;this._objectCount+=e,this._grow(t,e);const n=c.acquire();for(let o=0;o<e;o++){const e=t[o];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}c.release(n)}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=t.length;const n=c.acquire();for(const o of t){const t=e??(0,l.e)(this.objectToBoundingSphere(o),L);E(t[3])?(n.init(this._root),f(o,t,n)):this._degenerateObjects.delete(o)}c.release(n),this._shrink()}update(t,e){if(!E(e[3])&&this._isDegenerate(t))return;const n=function(t){return S[0]=t,S}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=(0,a.LV)(t,e);_(this._root,(t=>{if(!function(t,e){return b((0,l.a)(e.bounds),2*-e.halfSize,j),b((0,l.a)(e.bounds),2*e.halfSize,P),(0,d.O_)(t.origin,t.direction,j,P)}(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=(0,a.LV)(t,e);_(this._root,(t=>{if(!function(t,e,n){return b((0,l.a)(e.bounds),2*-e.halfSize,j),b((0,l.a)(e.bounds),2*e.halfSize,P),n.applyToMinMax(j,P),(0,d.O_)(t.origin,t.direction,j,P)}(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){_(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,s=1/0,a=1/0,d=null;const u=g(t,e),c=r=>{if(--i,!o(r))return;const u=this.objectToBoundingSphere(r);if(!(0,h.m7)(n,u))return;const c=F(t,e,(0,l.a)(u)),_=c-u[3],T=c+u[3];_<s&&(s=_,a=T,d=r)};return T(this._root,(o=>{if(i<=0||!(0,h.m7)(n,o.bounds))return!1;if((0,r.h)(x,u,o.halfSize),(0,r.g)(x,x,(0,l.a)(o.bounds)),F(t,e,x)>a)return!1;const s=o.node;return s.terminals.forAll((t=>c(t))),null!==s.residents&&s.residents.forAll((t=>c(t))),!0}),t,e),d}forEachInDepthRange(t,e,n,o,i,s,a){let d=-1/0,c=1/0;const _={setRange:t=>{n===u.DepthOrder.FRONT_TO_BACK?(d=Math.max(d,t.near),c=Math.min(c,t.far)):(d=Math.max(d,-t.far),c=Math.min(c,-t.near))}};_.setRange(o);const f=F(e,n,t),O=g(e,n),m=g(e,-n),A=t=>{if(!a(t))return;const o=this.objectToBoundingSphere(t),r=(0,l.a)(o),u=F(e,n,r)-f,T=u-o[3],O=u+o[3];T>c||O<d||!(0,h.m7)(s,o)||i(t,_)};T(this._root,(t=>{if(!(0,h.m7)(s,t.bounds))return!1;if((0,r.h)(x,O,t.halfSize),(0,r.g)(x,x,(0,l.a)(t.bounds)),F(e,n,x)-f>c)return!1;if((0,r.h)(x,m,t.halfSize),(0,r.g)(x,x,(0,l.a)(t.bounds)),F(e,n,x)-f<d)return!1;const o=t.node;return o.terminals.forAll((t=>A(t))),null!==o.residents&&o.residents.forAll((t=>A(t))),!0}),e,n)}forEachNode(t){_(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,l.g)(e),o=(0,l.a)(e),i=e=>{const i=this.objectToBoundingSphere(e),s=(0,l.g)(i),h=n+s;return!((0,r.s)((0,l.a)(i),o)-h*h<=0)||t(e)};let s=!0;const h=t=>{s&&(s=i(t))};_(this._root,(t=>{const e=(0,l.g)(t.bounds),i=n+e;if((0,r.s)((0,l.a)(t.bounds),o)-i*i>0)return!1;const a=t.node;return a.terminals.forAll(h),s&&null!==a.residents&&a.residents.forAll(h),s})),s&&this.forEachDegenerateObject(h)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,l.i)(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||(0,l.i)(n.applyToBoundingSphere(o),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=c.acquire().init(t);this._add(e.at(n),o),c.release(o)}}_grow(t,e){if(0!==e&&(p(t,e,(t=>this.objectToBoundingSphere(t)),H),E(H[3])&&!this._fitsInsideTree(H)))if(m(this._root.node))(0,l.e)(H,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(H);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(H,t):this._growRootAsSubNode(t),c.release(t)}}_rebuildTree(t,e){(0,r.c)((0,l.a)(z),(0,l.a)(e.bounds)),z[3]=e.halfSize,p([t,z],2,(t=>t),G);const n=c.acquire().init(this._root);this._root.initFrom(null,G,G[3]),this._root.increaseHalfSize(1.25),_(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),c.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return _(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let h=0;h<3;h++){const t=i[h]-r-(n[h]-e),s=n[h]+e-(i[h]+r),a=Math.max(0,Math.ceil(t/(2*r))),l=Math.max(0,Math.ceil(s/(2*r)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);o=Math.max(o,d),C[h].min=a,C[h].max=l}for(let h=0;h<3;h++){let t=C[h].min,e=C[h].max;const n=(o-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=i[h]-r-t*r*2;v[h]=s+(e+t)*r}const s=o*r;return v[3]=s*B,c.acquire().initFrom(null,v,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,r.c)((0,l.a)(H),(0,l.a)(this._root.bounds)),H[3]=this._root.halfSize,this._root.init(t),t.advanceTo(H,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!E(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new u((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class c{constructor(){this.bounds=(0,l.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=null!=t?t:c.createEmptyNode(),e&&(0,l.e)(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*B}advance(t){let e=this.node.children[t];e||(e=c.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=N[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new i.A({shrink:!0}),residents:new i.A({shrink:!0})}}static acquire(){return c._pool.acquire()}static release(t){c._pool.release(t)}static clearPool(){c._pool.prune()}}function _(t,e){let n=c.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&o.push(c.acquire().init(n).advance(t));c.release(n)}}function T(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:u.DepthOrder.FRONT_TO_BACK,i=c.acquire().init(t);const r=[i];for(function(t,e,n){if(!D.length)for(let o=0;o<8;++o)D.push({index:0,distance:0});for(let o=0;o<8;++o){const n=N[o];D.data[o].index=o,D.data[o].distance=F(t,e,n)}D.sort(((t,e)=>t.distance-e.distance));for(let o=0;o<8;++o)n[o]=D.data[o].index}(n,o,w);0!==r.length;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=w[t];i.node.children[e]&&r.push(c.acquire().init(i).advance(e))}c.release(i)}}function f(t,e,n){I.clear();const o=n.advanceTo(e,((t,e)=>{I.push(t.node),I.push(e)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(t),0===o.length)for(let i=I.length-2;i>=0&&O(I.data[i],I.data[i+1]);i-=2);}function O(t,e){return e>=0&&(t.children[e]=null),!!m(t)&&(null===t.residents&&(t.residents=new i.A({shrink:!0})),!0)}function m(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function A(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function R(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function b(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function p(t,e,n,o){if(1===e){const e=n(t[0]);(0,l.e)(e,o)}else{j[0]=1/0,j[1]=1/0,j[2]=1/0,P[0]=-1/0,P[1]=-1/0,P[2]=-1/0;for(let o=0;o<e;o++){const e=n(t[o]);E(e[3])&&(A(j,e),R(P,e))}(0,r.m)((0,l.a)(o),j,P,.5),o[3]=Math.max(P[0]-j[0],P[1]-j[1],P[2]-j[2])/2}}function g(t,e){let n,o=1/0;for(let i=0;i<8;++i){const r=F(t,e,M[i]);r<o&&(o=r,n=M[i])}return n}function F(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function E(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}c._pool=new o.A(c),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(u);const N=[(0,s.fA)(-1,-1,-1),(0,s.fA)(1,-1,-1),(0,s.fA)(-1,1,-1),(0,s.fA)(1,1,-1),(0,s.fA)(-1,-1,1),(0,s.fA)(1,-1,1),(0,s.fA)(-1,1,1),(0,s.fA)(1,1,1)],M=[(0,s.fA)(-1,-1,-1),(0,s.fA)(-1,-1,1),(0,s.fA)(-1,1,-1),(0,s.fA)(-1,1,1),(0,s.fA)(1,-1,-1),(0,s.fA)(1,-1,1),(0,s.fA)(1,1,-1),(0,s.fA)(1,1,1)],B=Math.sqrt(3),S=[null];const v=(0,l.c)(),x=(0,s.vt)(),j=(0,s.vt)(),P=(0,s.vt)(),I=new i.A,L=(0,l.c)(),H=(0,l.c)(),z=(0,l.c)(),G=(0,l.c)(),C=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],D=new i.A,w=[0,0,0,0,0,0,0,0]}}]);
//# sourceMappingURL=94536.08f337f0.chunk.js.map
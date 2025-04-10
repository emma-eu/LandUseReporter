"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6064],{97937:(t,e,n)=>{n.d(e,{a:()=>b,c:()=>m,e:()=>A,f:()=>E,g:()=>R,i:()=>N,o:()=>C,s:()=>z,w:()=>p}),n(44208),n(53966);var i=n(34727),o=n(58083),r=n(38954),s=n(51850),c=n(87317),u=n(91829),a=n(34304),h=n(88582),d=n(71351);function l(t,e){const n=(0,r.l)(t),o=(0,i.YN)(t[2]/n),s=Math.atan2(t[1]/n,t[0]/n);return(0,r.i)(e,n,o,s),e}var _=n(44280),f=n(32114);const T=m();function m(){return(0,u.vt)()}const g=c.e,O=c.e;function A(t,e){return(0,c.c)(e,t)}function p(t){return t}function R(t){return t[3]}function b(t){return t}function E(t,e,n,i){return(0,u.fA)(t,e,n,i)}function v(t,e,n){if(null==e)return!1;if(!F(t,e,M))return!1;let{t0:i,t1:o}=M;if((i<0||o<i&&o>0)&&(i=o),i<0)return!1;if(n){const{origin:t,direction:o}=e;n[0]=t[0]+o[0]*i,n[1]=t[1]+o[1]*i,n[2]=t[2]+o[2]*i}return!0}const M={t0:0,t1:0};function F(t,e,n){const{origin:i,direction:o}=e,r=S;r[0]=i[0]-t[0],r[1]=i[1]-t[1],r[2]=i[2]-t[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===s)return!1;const c=2*(o[0]*r[0]+o[1]*r[1]+o[2]*r[2]),u=c*c-4*s*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return n.t0=(-c-a)/(2*s),n.t1=(-c+a)/(2*s),!0}const S=(0,s.vt)();function N(t,e){return v(t,e,null)}function P(t,e,n){const i=f.rq.get(),s=f.Rc.get();(0,r.e)(i,e.origin,e.direction);const c=R(t);(0,r.e)(n,i,e.origin),(0,r.h)(n,n,1/(0,r.l)(n)*c);const u=B(t,e.origin),a=(0,_.g7)(e.origin,n);return(0,o.$0)(s,a+u,i),(0,r.t)(n,n,s),n}function x(t,e,n){const i=(0,r.d)(f.rq.get(),e,t),o=(0,r.h)(f.rq.get(),i,t[3]/(0,r.l)(i));return(0,r.g)(n,o,t)}function B(t,e){const n=(0,r.d)(f.rq.get(),e,t),o=(0,r.l)(n),s=R(t),c=s+Math.abs(s-o);return(0,i.XM)(s/c)}const j=(0,s.vt)();function I(t,e,n,i){const o=(0,r.d)(j,e,t);switch(n){case h._.X:{const t=l(o,j)[2];return(0,r.i)(i,-Math.sin(t),Math.cos(t),0)}case h._.Y:{const t=l(o,j),e=t[1],n=t[2],s=Math.sin(e);return(0,r.i)(i,-s*Math.cos(n),-s*Math.sin(n),Math.cos(e))}case h._.Z:return(0,r.n)(i,o);default:return}}function L(t,e){const n=(0,r.d)(H,e,t);return(0,r.l)(n)-t[3]}function C(t,e){const n=(0,r.s)(t,e),i=R(t);return n<=i*i}const H=(0,s.vt)(),w=m(),z=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:T,altitudeAt:L,angleToSilhouette:B,axisAt:I,cameraFrustumCoverage:function(t,e,n,i){const o=R(t),r=o*o,s=e+.5*Math.PI,c=n*n+r-2*Math.cos(s)*n*o,u=Math.sqrt(c),a=c-r;if(a<=0)return.5;const h=Math.sqrt(a),d=Math.acos(h/u)-Math.asin(o/(u/Math.sin(s)));return Math.min(1,(d+.5*i)/i)},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,n){return v(t,e,n)?n:((0,d.oC)(e,t,n),x(t,n,n))},closestPointOnSilhouette:P,containsPoint:C,copy:A,create:m,distanceToSilhouette:function(t,e){const n=(0,r.d)(f.rq.get(),e,t),i=(0,r.k)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(i-o))},elevate:function(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n},equals:O,exactEquals:g,fromCenterAndRadius:function(t,e){return(0,u.fA)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:E,getCenter:b,getExtent:function(t,e){return e},getRadius:R,intersectLine:function(t,e,n){const i=(0,d.Cr)(e,n);if(!F(t,i,M))return[];const{origin:o,direction:c}=i,{t0:u,t1:h}=M,l=e=>{const n=(0,s.vt)();return(0,r.b)(n,o,c,e),x(t,n,n)};return Math.abs(u-h)<(0,a.FD)()?[l(u)]:[l(u),l(h)]},intersectRay:v,intersectRayClosestSilhouette:function(t,e,n){if(v(t,e,n))return n;const i=P(t,e,f.rq.get());return(0,r.g)(n,e.origin,(0,r.h)(f.rq.get(),e.direction,(0,r.j)(e.origin,i)/(0,r.l)(e.direction))),n},intersectsRay:N,projectPoint:x,setAltitudeAt:function(t,e,n,i){const o=L(t,e),s=I(t,e,h._.Z,H),c=(0,r.h)(H,s,n-o);return(0,r.g)(i,e,c)},setExtent:function(t,e,n){return t!==n&&A(t,n),n},tmpSphere:w,union:function(t,e,n=(0,u.vt)()){const i=(0,r.j)(t,e),o=t[3],s=e[3];return i+s<o?((0,c.c)(n,t),n):i+o<s?((0,c.c)(n,e),n):((0,r.m)(n,t,e,(i+s-o)/(2*i)),n[3]=(i+o+s)/2,n)},wrap:p},Symbol.toStringTag,{value:"Module"}))},4341:(t,e,n)=>{n.d(e,{I:()=>o});var i=n(26390);class o{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*r);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,r));t++)this._items.push(this._allocator())}}const r=1024},88582:(t,e,n)=>{var i;n.d(e,{_:()=>i}),function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(i||(i={}))},82919:(t,e,n)=>{n.d(e,{C:()=>g,vt:()=>m,ui:()=>O,m7:()=>A});var i=n(4341),o=n(58083),r=n(38954),s=n(51850),c=n(87317),u=n(91829),a=n(71351);function h(t){return t?{ray:(0,a.vt)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,a.vt)(),c0:0,c1:Number.MAX_VALUE}}new i.I((()=>h()));var d,l,_,f=n(27921),T=n(32114);function m(t){return t?[(0,f.vt)(t[0]),(0,f.vt)(t[1]),(0,f.vt)(t[2]),(0,f.vt)(t[3]),(0,f.vt)(t[4]),(0,f.vt)(t[5])]:[(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)()]}function g(t,e){for(let n=0;n<p;n++)(0,f.C)(t[n],e[n]);return t}function O(t,e,n,i=E){const s=(0,o.lw)(T.Rc.get(),e,t);(0,o.B8)(s,s);for(let t=0;t<R;++t){const e=(0,c.t)(T.Km.get(),b[t],s);(0,r.i)(i[t],e[0]/e[3],e[1]/e[3],e[2]/e[3])}!function(t,e){(0,f.Cr)(e[l.FAR_BOTTOM_LEFT],e[l.NEAR_BOTTOM_LEFT],e[l.NEAR_TOP_LEFT],t[d.LEFT]),(0,f.Cr)(e[l.NEAR_BOTTOM_RIGHT],e[l.FAR_BOTTOM_RIGHT],e[l.FAR_TOP_RIGHT],t[d.RIGHT]),(0,f.Cr)(e[l.FAR_BOTTOM_LEFT],e[l.FAR_BOTTOM_RIGHT],e[l.NEAR_BOTTOM_RIGHT],t[d.BOTTOM]),(0,f.Cr)(e[l.NEAR_TOP_LEFT],e[l.NEAR_TOP_RIGHT],e[l.FAR_TOP_RIGHT],t[d.TOP]),(0,f.Cr)(e[l.NEAR_BOTTOM_LEFT],e[l.NEAR_BOTTOM_RIGHT],e[l.NEAR_TOP_RIGHT],t[d.NEAR]),(0,f.Cr)(e[l.FAR_BOTTOM_RIGHT],e[l.FAR_BOTTOM_LEFT],e[l.FAR_TOP_LEFT],t[d.FAR])}(n,i)}function A(t,e){for(let n=0;n<p;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}(_=d||(d={}))[_.LEFT=0]="LEFT",_[_.RIGHT=1]="RIGHT",_[_.BOTTOM=2]="BOTTOM",_[_.TOP=3]="TOP",_[_.NEAR=4]="NEAR",_[_.FAR=5]="FAR",function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(l||(l={})),l.FAR_BOTTOM_RIGHT,l.NEAR_BOTTOM_RIGHT,l.NEAR_BOTTOM_LEFT,l.FAR_BOTTOM_LEFT,l.NEAR_BOTTOM_LEFT,l.NEAR_BOTTOM_RIGHT,l.NEAR_TOP_RIGHT,l.NEAR_TOP_LEFT,l.FAR_BOTTOM_RIGHT,l.FAR_BOTTOM_LEFT,l.FAR_TOP_LEFT,l.FAR_TOP_RIGHT,l.NEAR_BOTTOM_RIGHT,l.FAR_BOTTOM_RIGHT,l.FAR_TOP_RIGHT,l.NEAR_TOP_RIGHT,l.FAR_BOTTOM_LEFT,l.NEAR_BOTTOM_LEFT,l.NEAR_TOP_LEFT,l.FAR_TOP_LEFT,l.FAR_TOP_LEFT,l.NEAR_TOP_LEFT,l.NEAR_TOP_RIGHT,l.FAR_TOP_RIGHT;const p=6,R=8,b=[(0,u.fA)(-1,-1,-1,1),(0,u.fA)(1,-1,-1,1),(0,u.fA)(1,1,-1,1),(0,u.fA)(-1,1,-1,1),(0,u.fA)(-1,-1,1,1),(0,u.fA)(1,-1,1,1),(0,u.fA)(1,1,1,1),(0,u.fA)(-1,1,1,1)],E=(new i.I(h),[(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,s.vt)()])},11964:(t,e,n)=>{n.d(e,{Cr:()=>a,H6:()=>l,_I:()=>d,kb:()=>h,vt:()=>u});var i=n(34727),o=n(4341),r=n(38954),s=n(51850),c=n(32114);function u(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function a(t,e,n=u()){return(0,r.c)(n.origin,t),(0,r.d)(n.vector,e,t),n}function h(t,e){const n=(0,r.d)(c.rq.get(),e,t.origin),o=(0,r.f)(t.vector,n),s=(0,r.f)(t.vector,t.vector),u=(0,i.qE)(o/s,0,1),a=(0,r.d)(c.rq.get(),(0,r.h)(c.rq.get(),t.vector,u),n);return(0,r.f)(a,a)}function d(t,e,n){return l(t,e,0,1,n)}function l(t,e,n,o,s){const{vector:u,origin:a}=t,h=(0,r.d)(c.rq.get(),e,a),d=(0,r.f)(u,h)/(0,r.k)(u);return(0,r.h)(s,u,(0,i.qE)(d,n,o)),(0,r.g)(s,s,t.origin)}(0,s.vt)(),(0,s.vt)(),new o.I((()=>u()))},71351:(t,e,n)=>{n.d(e,{C:()=>d,Cr:()=>l,LV:()=>h,kb:()=>_,oC:()=>f,vt:()=>u}),n(4576);var i=n(4341),o=(n(77690),n(29242)),r=n(38954),s=n(51850),c=n(32114);function u(t){return t?a((0,s.o8)(t.origin),(0,s.o8)(t.direction)):a((0,s.vt)(),(0,s.vt)())}function a(t,e){return{origin:t,direction:e}}function h(t,e){const n=T.get();return n.origin=t,n.direction=e,n}function d(t,e=u()){return function(t,e,n=u()){return(0,r.c)(n.origin,t),(0,r.c)(n.direction,e),n}(t.origin,t.direction,e)}function l(t,e,n=u()){return(0,r.c)(n.origin,t),(0,r.d)(n.direction,e,t),n}function _(t,e){const n=(0,r.e)(c.rq.get(),(0,r.n)(c.rq.get(),t.direction),(0,r.d)(c.rq.get(),e,t.origin));return(0,r.f)(n,n)}function f(t,e,n){const i=(0,r.f)(t.direction,(0,r.d)(n,e,t.origin));return(0,r.g)(n,t.origin,(0,r.h)(n,t.direction,i)),n}const T=new i.I((()=>u()));(0,s.vt)(),(0,s.vt)(),(0,s.vt)(),(0,o.vt)()},78230:(t,e,n)=>{n.d(e,{A:()=>_});var i,o,r=n(93687),s=n(3694),c=n(38954),u=n(51850),a=n(82919),h=n(71351),d=n(97937),l=n(620);class _{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new f,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),f.clearPool(),x[0]=null,C.prune(),y.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=f.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}f.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=f.acquire();for(const i of t){const t=e??(0,d.e)(this.objectToBoundingSphere(i),H);F(t[3])?(n.init(this._root),g(i,t,n)):this._degenerateObjects.delete(i)}f.release(n),this._shrink()}update(t,e){if(!F(e[3])&&this._isDegenerate(t))return;const n=function(t){return x[0]=t,x}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,h.LV)(t,e);T(this._root,(t=>{if(!function(t,e){return b((0,d.a)(e.bounds),2*-e.halfSize,I),b((0,d.a)(e.bounds),2*e.halfSize,L),(0,l.O_)(t.origin,t.direction,I,L)}(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const o=(0,h.LV)(t,e);T(this._root,(t=>{if(!function(t,e,n){return b((0,d.a)(e.bounds),2*-e.halfSize,I),b((0,d.a)(e.bounds),2*e.halfSize,L),n.applyToMinMax(I,L),(0,l.O_)(t.origin,t.direction,I,L)}(o,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(o,t,i)&&n(t)})),!0}))}forEach(t){T(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=()=>!0,o=1/0){let r=1/0,s=1/0,u=null;const h=v(t,e),l=c=>{if(--o,!i(c))return;const h=this.objectToBoundingSphere(c);if(!(0,a.m7)(n,h))return;const l=M(t,e,(0,d.a)(h)),_=l-h[3],f=l+h[3];_<r&&(r=_,s=f,u=c)};return m(this._root,(i=>{if(o<=0||!(0,a.m7)(n,i.bounds))return!1;if((0,c.h)(j,h,i.halfSize),(0,c.g)(j,j,(0,d.a)(i.bounds)),M(t,e,j)>s)return!1;const r=i.node;return r.terminals.forAll((t=>l(t))),null!==r.residents&&r.residents.forAll((t=>l(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,i,o,r,s){let u=-1/0,h=1/0;const l={setRange:t=>{n===_.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),h=Math.min(h,t.far)):(u=Math.max(u,-t.far),h=Math.min(h,-t.near))}};l.setRange(i);const f=M(e,n,t),T=v(e,n),g=v(e,-n),O=t=>{if(!s(t))return;const i=this.objectToBoundingSphere(t),c=(0,d.a)(i),_=M(e,n,c)-f,T=_-i[3],m=_+i[3];T>h||m<u||!(0,a.m7)(r,i)||o(t,l)};m(this._root,(t=>{if(!(0,a.m7)(r,t.bounds))return!1;if((0,c.h)(j,T,t.halfSize),(0,c.g)(j,j,(0,d.a)(t.bounds)),M(e,n,j)-f>h)return!1;if((0,c.h)(j,g,t.halfSize),(0,c.g)(j,j,(0,d.a)(t.bounds)),M(e,n,j)-f<u)return!1;const i=t.node;return i.terminals.forAll((t=>O(t))),null!==i.residents&&i.residents.forAll((t=>O(t))),!0}),e,n)}forEachNode(t){T(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,d.g)(e),i=(0,d.a)(e),o=e=>{const o=this.objectToBoundingSphere(e),r=(0,d.g)(o),s=n+r;return!((0,c.s)((0,d.a)(o),i)-s*s<=0)||t(e)};let r=!0;const s=t=>{r&&(r=o(t))};T(this._root,(t=>{const e=(0,d.g)(t.bounds),o=n+e;if((0,c.s)((0,d.a)(t.bounds),i)-o*o>0)return!1;const u=t.node;return u.terminals.forAll(s),r&&null!==u.residents&&u.residents.forAll(s),r})),r&&this.forEachDegenerateObject(s)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,d.i)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this.objectToBoundingSphere(e);return!(i[3]>0)||(0,d.i)(n.applyToBoundingSphere(i),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=f.acquire().init(t);this._add(e.at(n),i),f.release(i)}}_grow(t,e){if(0!==e&&(E(t,e,(t=>this.objectToBoundingSphere(t)),w),F(w[3])&&!this._fitsInsideTree(w)))if(A(this._root.node))(0,d.e)(w,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(w);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(w,t):this._growRootAsSubNode(t),f.release(t)}}_rebuildTree(t,e){(0,c.c)((0,d.a)(z),(0,d.a)(e.bounds)),z[3]=e.halfSize,E([t,z],2,(t=>t),G);const n=f.acquire().init(this._root);this._root.initFrom(null,G,G[3]),this._root.increaseHalfSize(1.25),T(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),f.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return T(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const o=this._root.bounds,r=this._root.halfSize;for(let t=0;t<3;t++){const s=o[t]-r-(n[t]-e),c=n[t]+e-(o[t]+r),u=Math.max(0,Math.ceil(s/(2*r))),a=Math.max(0,Math.ceil(c/(2*r)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);i=Math.max(i,h),q[t].min=u,q[t].max=a}for(let t=0;t<3;t++){let e=q[t].min,n=q[t].max;const s=(i-(e+n))/2;e+=Math.ceil(s),n+=Math.floor(s);const c=o[t]-r-e*r*2;B[t]=c+(n+e)*r}const s=i*r;return B[3]=s*P,f.acquire().initFrom(null,B,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,c.c)((0,d.a)(w),(0,d.a)(this._root.bounds)),w[3]=this._root.halfSize,this._root.init(t),t.advanceTo(w,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!F(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,i=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:i}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),i=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:i}}static fromJSON(t){const e=new _((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class f{constructor(){this.bounds=(0,d.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=null!=t?t:f.createEmptyNode(),e&&(0,d.e)(e,this.bounds),this.halfSize=n,this.depth=i,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*P}advance(t){let e=this.node.children[t];e||(e=f.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=S[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new s.A({shrink:!0}),residents:new s.A({shrink:!0})}}static acquire(){return f._pool.acquire()}static release(t){f._pool.release(t)}static clearPool(){f._pool.prune()}}function T(t,e){let n=f.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(f.acquire().init(n).advance(t));f.release(n)}}function m(t,e,n,i=_.DepthOrder.FRONT_TO_BACK){let o=f.acquire().init(t);const r=[o];for(function(t,e,n){if(!y.length)for(let t=0;t<8;++t)y.push({index:0,distance:0});for(let n=0;n<8;++n){const i=S[n];y.data[n].index=n,y.data[n].distance=M(t,e,i)}y.sort(((t,e)=>t.distance-e.distance));for(let t=0;t<8;++t)n[t]=y.data[t].index}(n,i,D);0!==r.length;){if(o=r.pop(),e(o)&&!o.isLeaf())for(let t=7;t>=0;--t){const e=D[t];o.node.children[e]&&r.push(f.acquire().init(o).advance(e))}f.release(o)}}function g(t,e,n){C.clear();const i=n.advanceTo(e,((t,e)=>{C.push(t.node),C.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let t=C.length-2;t>=0&&O(C.data[t],C.data[t+1]);t-=2);}function O(t,e){return e>=0&&(t.children[e]=null),!!A(t)&&(null===t.residents&&(t.residents=new s.A({shrink:!0})),!0)}function A(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function p(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function R(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function b(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function E(t,e,n,i){if(1===e){const e=n(t[0]);(0,d.e)(e,i)}else{I[0]=1/0,I[1]=1/0,I[2]=1/0,L[0]=-1/0,L[1]=-1/0,L[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);F(e[3])&&(p(I,e),R(L,e))}(0,c.m)((0,d.a)(i),I,L,.5),i[3]=Math.max(L[0]-I[0],L[1]-I[1],L[2]-I[2])/2}}function v(t,e){let n,i=1/0;for(let o=0;o<8;++o){const r=M(t,e,N[o]);r<i&&(i=r,n=N[o])}return n}function M(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function F(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}f._pool=new r.A(f),(o=(i=_).DepthOrder||(i.DepthOrder={}))[o.FRONT_TO_BACK=1]="FRONT_TO_BACK",o[o.BACK_TO_FRONT=-1]="BACK_TO_FRONT";const S=[(0,u.fA)(-1,-1,-1),(0,u.fA)(1,-1,-1),(0,u.fA)(-1,1,-1),(0,u.fA)(1,1,-1),(0,u.fA)(-1,-1,1),(0,u.fA)(1,-1,1),(0,u.fA)(-1,1,1),(0,u.fA)(1,1,1)],N=[(0,u.fA)(-1,-1,-1),(0,u.fA)(-1,-1,1),(0,u.fA)(-1,1,-1),(0,u.fA)(-1,1,1),(0,u.fA)(1,-1,-1),(0,u.fA)(1,-1,1),(0,u.fA)(1,1,-1),(0,u.fA)(1,1,1)],P=Math.sqrt(3),x=[null],B=(0,d.c)(),j=(0,u.vt)(),I=(0,u.vt)(),L=(0,u.vt)(),C=new s.A,H=(0,d.c)(),w=(0,d.c)(),z=(0,d.c)(),G=(0,d.c)(),q=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],y=new s.A,D=[0,0,0,0,0,0,0,0]},46064:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var i=n(90237),o=n(74887),r=(n(53966),n(44208),n(87811),n(49186),n(40608)),s=n(38954),c=n(51850),u=n(11964),a=n(97937),h=n(78230),d=n(53099);function l(t,e,n){const i=(0,a.c)(),o=(0,a.a)(i);return(0,s.b)(o,o,t,.5),(0,s.b)(o,o,e,.5),i[3]=(0,s.j)(o,t),(0,s.g)(o,o,n),i}let _=class{constructor(){this._idToComponent=new Map,this._components=new h.A((t=>t.bounds)),this._edges=new h.A((t=>t.bounds)),this._tmpLineSegment=(0,u.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,o.Te)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<1e3)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:e,uid:i}=t;n.push({id:e,uid:i})}return!0}),t.bounds),!n.length)return;const i={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",i,e??{});for(const t of o.components)this._setFetchEdgeLocations(t)}async add(t){const e=new m(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(null==e||t.uid!==e.uid)return;const n=d.HY.createView(t.locations),i=new Array(n.count),o=(0,c.vt)(),r=(0,c.vt)();for(let s=0;s<n.count;s++){n.position0.getVec(s,o),n.position1.getVec(s,r);const c=l(o,r,t.origin),u=new g(e,s,c);i[s]=u}this._edges.add(i);const{objectIds:s,origin:u}=t;e.info={locations:n,objectIds:s,origin:u}}_addCandidates(t,e,n){const{info:i}=e.component,{origin:o,objectIds:r}=i,c=i.locations,u=c.position0.getVec(e.index,this._tmpP1),a=c.position1.getVec(e.index,this._tmpP2);(0,s.g)(u,u,o),(0,s.g)(a,a,o);const h=r[c.componentIndex.get(e.index)];this._addEdgeCandidate(t,h,u,a,n),T(t,h,u,n),T(t,h,a,n)}_addEdgeCandidate(t,e,n,i,o){if(!t.returnEdge)return;const r=(0,a.a)(t.bounds),h=(0,u.Cr)(n,i,this._tmpLineSegment),d=(0,u._I)(h,r,this._tmpP3);(0,a.o)(t.bounds,d)&&o.push({type:"edge",objectId:e,target:(0,c.o8)(d),distance:(0,s.j)(r,d),start:(0,c.o8)(n),end:(0,c.o8)(i)})}};_=(0,i._)([(0,r.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const f=_;function T(t,e,n,i){if(!t.returnVertex||!(0,a.o)(t.bounds,n))return;const o=(0,a.a)(t.bounds);i.push({type:"vertex",objectId:e,target:(0,c.o8)(n),distance:(0,s.j)(o,n)})}class m{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++m.uid}}m.uid=0;class g{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
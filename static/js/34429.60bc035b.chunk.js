"use strict";(self.webpackChunklandusereporter=self.webpackChunklandusereporter||[]).push([[34429],{34429:(e,t,s)=>{s.d(t,{QueueProcessor:()=>c});var r=s(30726),i=s(50346),h=s(59649),o=s(67993),l=s(52394),n=s(75540);class u{constructor(e,t){this.item=e,this.controller=t,this.promise=null}}class c{constructor(e){this._schedule=null,this._deferreds=new o.A,this._controllers=new o.A,this._processingItems=new o.A,this._pausedSignal=(0,n.v)(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new h.A(e.peeker),this.process=e.process}destroy(){this.clear(),this._schedule=(0,r.xt)(this._schedule)}get updating(){return this.running}get length(){return this._processingItems.size+this._queue.length}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}abort(e){const t=this._controllers.get(e);t&&t.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach((t=>e.push(t))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach(((t,s)=>e(s)))}get(e){const t=this._deferreds.get(e);return t?t.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,t){const s=this.get(e);if(s)return s;const r=new AbortController;let h=null;t&&(h=(0,i.u7)(t,(()=>r.abort())));const o=()=>{l.remove(),null!=h&&h.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},l=(0,i.NY)(r.signal,(()=>{const t=this._processingItems.get(e);t&&t.controller.abort(),o(),n.reject((0,i.NK)())})),n=(0,i.Tw)();return this._deferreds.set(e,n),this._controllers.set(e,r),n.promise.then(o,o),this._queue.push(e),this._scheduleNext(),n.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject((0,i.NK)()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const t of e)this._queue.push(t.item),t.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._pausedSignal.value||this._schedule||(this._schedule=(0,l._)((()=>{this._schedule=null,this._next()})))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(t))}_processError(e,t){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(t))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(null==e)return;let t;const s=new AbortController,r=new u(e,s);this._processingItems.set(e,r);try{t=this.process(e,s.signal)}catch(h){this._processError(r,h)}(0,i.$X)(t)?(r.promise=t,t.then((e=>this._processResult(r,e)),(e=>this._processError(r,e)))):this._processResult(r,t)}}},59649:(e,t,s)=>{s.d(t,{A:()=>h});var r=s(99486),i=s(99702);class h{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e.values().next().value;this._peeker=e,this._observable=new i.I,this._items=new Set}get length(){return(0,r.gc)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,r.gc)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const t=this.length;return this._items.forEach((t=>{e(t)||this._items.delete(t)})),t!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,r.gc)(this._observable),yield*this._items}}},67993:(e,t,s)=>{s.d(t,{A:()=>h});var r=s(99486),i=s(99702);class h{constructor(e){this._observable=new i.I,this._map=new Map(e)}get size(){return(0,r.gc)(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(e){const t=this._map.delete(e);return t&&this._observable.notify(),t}entries(){return(0,r.gc)(this._observable),this._map.entries()}forEach(e,t){(0,r.gc)(this._observable),this._map.forEach(((s,r)=>e.call(t,s,r,this)),t)}get(e){return(0,r.gc)(this._observable),this._map.get(e)}has(e){return(0,r.gc)(this._observable),this._map.has(e)}keys(){return(0,r.gc)(this._observable),this._map.keys()}set(e,t){return this._map.set(e,t),this._observable.notify(),this}values(){return(0,r.gc)(this._observable),this._map.values()}[Symbol.iterator](){return(0,r.gc)(this._observable),this._map[Symbol.iterator]()}[Symbol.dispose](){this._observable.destroy()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}},75540:(e,t,s)=>{s.d(t,{v:()=>l});var r=s(53084),i=s(99486),h=s(99702);class o{constructor(e,t){this._observable=new h.I,this._value=e,this._equalityFunction=t}get value(){return(0,i.gc)(this._observable),this._value}set value(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}mutate(e){e(this._value),this._observable.notify()}}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.gh;return new o(e,t)}}}]);
//# sourceMappingURL=34429.60bc035b.chunk.js.map
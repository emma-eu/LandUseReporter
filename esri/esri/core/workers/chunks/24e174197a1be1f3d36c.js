"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9949],{6774:(_,t,i)=>{var s,E,T;i.d(t,{O3:()=>A,Ox:()=>h,bR:()=>R,dC:()=>s}),(T=s||(s={}))[T.Unknown=0]="Unknown",T[T.Point=1]="Point",T[T.LineString=2]="LineString",T[T.Polygon=3]="Polygon";class R{constructor(_,t){this.x=_,this.y=t}clone(){return new R(this.x,this.y)}equals(_,t){return _===this.x&&t===this.y}isEqual(_){return _.x===this.x&&_.y===this.y}setCoords(_,t){return this.x=_,this.y=t,this}normalize(){const _=this.x,t=this.y,i=Math.sqrt(_*_+t*t);return this.x/=i,this.y/=i,this}rightPerpendicular(){const _=this.x;return this.x=this.y,this.y=-_,this}leftPerpendicular(){const _=this.x;return this.x=-this.y,this.y=_,this}move(_,t){return this.x+=_,this.y+=t,this}assign(_){return this.x=_.x,this.y=_.y,this}assignAdd(_,t){return this.x=_.x+t.x,this.y=_.y+t.y,this}assignSub(_,t){return this.x=_.x-t.x,this.y=_.y-t.y,this}rotate(_,t){const i=this.x,s=this.y;return this.x=i*_-s*t,this.y=i*t+s*_,this}scale(_){return this.x*=_,this.y*=_,this}length(){const _=this.x,t=this.y;return Math.sqrt(_*_+t*t)}sub(_){return this.x-=_.x,this.y-=_.y,this}add(_){return this.x+=_.x,this.y+=_.y,this}static distance(_,t){const i=t.x-_.x,s=t.y-_.y;return Math.sqrt(i*i+s*s)}static add(_,t){return new R(_.x+t.x,_.y+t.y)}static sub(_,t){return new R(_.x-t.x,_.y-t.y)}}class n{constructor(_,t,i){this.ratio=_,this.x=t,this.y=i}}class A{constructor(_,t,i,s=8,E=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=s,this._pixelMargin=E,this._tileSize=512*s,this._dz=_,this._yPos=t,this._xPos=i}setPixelMargin(_){_!==this._pixelMargin&&(this._pixelMargin=_,this.setExtent(this._extent))}setExtent(_){this._extent=_,this._finalRatio=this._tileSize/_*(1<<this._dz);let t=this._pixelRatio*this._pixelMargin;t/=this._finalRatio;const i=_>>this._dz;t>i&&(t=i),this._margin=t,this._xmin=i*this._xPos-t,this._ymin=i*this._yPos-t,this._xmax=this._xmin+i+2*t,this._ymax=this._ymin+i+2*t}reset(_){this._type=_,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(_,t){this._pushLine(),this._prevIsIn=this._isIn(_,t),this._moveTo(_,t,this._prevIsIn),this._prevPt=new R(_,t),this._firstPt=new R(_,t),this._dist=0}lineTo(_,t){const i=this._isIn(_,t),s=new R(_,t),E=R.distance(this._prevPt,s);let T,A,h,e,N,S,C,I;if(i)this._prevIsIn?this._lineTo(_,t,!0):(T=this._prevPt,A=s,h=this._intersect(A,T),this._start=this._dist+E*(1-this._r),this._lineTo(h.x,h.y,!0),this._lineTo(A.x,A.y,!0));else if(this._prevIsIn)A=this._prevPt,T=s,h=this._intersect(A,T),this._lineTo(h.x,h.y,!0),this._lineTo(T.x,T.y,!1);else{const _=this._prevPt,t=s;if(_.x<=this._xmin&&t.x<=this._xmin||_.x>=this._xmax&&t.x>=this._xmax||_.y<=this._ymin&&t.y<=this._ymin||_.y>=this._ymax&&t.y>=this._ymax)this._lineTo(t.x,t.y,!1);else{const i=[];if((_.x<this._xmin&&t.x>this._xmin||_.x>this._xmin&&t.x<this._xmin)&&(e=(this._xmin-_.x)/(t.x-_.x),I=_.y+e*(t.y-_.y),I<=this._ymin?S=!1:I>=this._ymax?S=!0:i.push(new n(e,this._xmin,I))),(_.x<this._xmax&&t.x>this._xmax||_.x>this._xmax&&t.x<this._xmax)&&(e=(this._xmax-_.x)/(t.x-_.x),I=_.y+e*(t.y-_.y),I<=this._ymin?S=!1:I>=this._ymax?S=!0:i.push(new n(e,this._xmax,I))),(_.y<this._ymin&&t.y>this._ymin||_.y>this._ymin&&t.y<this._ymin)&&(e=(this._ymin-_.y)/(t.y-_.y),C=_.x+e*(t.x-_.x),C<=this._xmin?N=!1:C>=this._xmax?N=!0:i.push(new n(e,C,this._ymin))),(_.y<this._ymax&&t.y>this._ymax||_.y>this._ymax&&t.y<this._ymax)&&(e=(this._ymax-_.y)/(t.y-_.y),C=_.x+e*(t.x-_.x),C<=this._xmin?N=!1:C>=this._xmax?N=!0:i.push(new n(e,C,this._ymax))),0===i.length)N?S?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):S?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(i.length>1&&i[0].ratio>i[1].ratio)this._start=this._dist+E*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0);else{this._start=this._dist+E*i[0].ratio;for(let _=0;_<i.length;_++)this._lineTo(i[_].x,i[_].y,!0)}this._lineTo(t.x,t.y,!1)}}this._dist+=E,this._prevIsIn=i,this._prevPt=s}close(){if(this._line.length>2){const _=this._firstPt,t=this._prevPt;_.x===t.x&&_.y===t.y||this.lineTo(_.x,_.y);const i=this._line;let s=i.length;for(;s>=4&&(i[0].x===i[1].x&&i[0].x===i[s-2].x||i[0].y===i[1].y&&i[0].y===i[s-2].y);)i.pop(),i[0].x=i[s-2].x,i[0].y=i[s-2].y,--s}}result(_=!0){return this._pushLine(),0===this._lines.length?null:(this._type===s.Polygon&&_&&e.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==s.LineString)throw new Error("Only valid for lines");this._pushLine();const _=this._lines,t=_.length;if(0===t)return null;const i=[];for(let s=0;s<t;s++)i.push({line:_[s],start:this._starts[s]||0});return i}_isIn(_,t){return _>=this._xmin&&_<=this._xmax&&t>=this._ymin&&t<=this._ymax}_intersect(_,t){let i,s,E;if(t.x>=this._xmin&&t.x<=this._xmax)s=t.y<=this._ymin?this._ymin:this._ymax,E=(s-_.y)/(t.y-_.y),i=_.x+E*(t.x-_.x);else if(t.y>=this._ymin&&t.y<=this._ymax)i=t.x<=this._xmin?this._xmin:this._xmax,E=(i-_.x)/(t.x-_.x),s=_.y+E*(t.y-_.y);else{s=t.y<=this._ymin?this._ymin:this._ymax,i=t.x<=this._xmin?this._xmin:this._xmax;const T=(i-_.x)/(t.x-_.x),R=(s-_.y)/(t.y-_.y);T<R?(E=T,s=_.y+T*(t.y-_.y)):(E=R,i=_.x+R*(t.x-_.x))}return this._r=E,new R(i,s)}_pushLine(){this._line&&(this._type===s.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===s.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===s.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(_,t,i){this._type!==s.Polygon?i&&(_=Math.round((_-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new R(_,t))):(i||(_<this._xmin&&(_=this._xmin),_>this._xmax&&(_=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),_=Math.round((_-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new R(_,t)),this._isH=!1,this._isV=!1)}_lineTo(_,t,i){let E,T;if(this._type!==s.Polygon)if(i){if(_=Math.round((_-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(E=this._line[this._line.length-1],E.equals(_,t)))return;this._line.push(new R(_,t))}else this._line&&this._line.length>0&&this._pushLine();else if(i||(_<this._xmin&&(_=this._xmin),_>this._xmax&&(_=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),_=Math.round((_-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){E=this._line[this._line.length-1];const i=E.x===_,s=E.y===t;if(i&&s)return;this._isH&&i||this._isV&&s?(E.x=_,E.y=t,T=this._line[this._line.length-2],T.x===_&&T.y===t?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(T=this._line[this._line.length-2],this._isH=T.x===_,this._isV=T.y===t)):(this._isH=T.x===_,this._isV=T.y===t)):(this._line.push(new R(_,t)),this._isH=i,this._isV=s)}else this._line.push(new R(_,t))}}class h{setExtent(_){this._ratio=4096===_?1:4096/_}get validateTessellation(){return this._ratio<1}reset(_){this._lines=[],this._line=null}moveTo(_,t){this._line&&this._lines.push(this._line),this._line=[];const i=this._ratio;this._line.push(new R(_*i,t*i))}lineTo(_,t){const i=this._ratio;this._line.push(new R(_*i,t*i))}close(){const _=this._line;_&&!_[0].isEqual(_[_.length-1])&&_.push(_[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(_){_[_.sideLeft=0]="sideLeft",_[_.sideRight=1]="sideRight",_[_.sideTop=2]="sideTop",_[_.sideBottom=3]="sideBottom"}(E||(E={}));class e{static simplify(_,t,i){if(!i)return;const s=-t,T=_+t,R=-t,n=_+t,A=[],h=[],N=i.length;for(let _=0;_<N;++_){const t=i[_];if(!t||t.length<2)continue;let e,N=t[0];const S=t.length;for(let i=1;i<S;++i)e=t[i],N.x===e.x&&(N.x<=s&&(N.y>e.y?(A.push(_),A.push(i),A.push(E.sideLeft),A.push(-1)):(h.push(_),h.push(i),h.push(E.sideLeft),h.push(-1))),N.x>=T&&(N.y<e.y?(A.push(_),A.push(i),A.push(E.sideRight),A.push(-1)):(h.push(_),h.push(i),h.push(E.sideRight),h.push(-1)))),N.y===e.y&&(N.y<=R&&(N.x<e.x?(A.push(_),A.push(i),A.push(E.sideTop),A.push(-1)):(h.push(_),h.push(i),h.push(E.sideTop),h.push(-1))),N.y>=n&&(N.x>e.x?(A.push(_),A.push(i),A.push(E.sideBottom),A.push(-1)):(h.push(_),h.push(i),h.push(E.sideBottom),h.push(-1)))),N=e}if(0===A.length||0===h.length)return;e.fillParent(i,h,A),e.fillParent(i,A,h);const S=[];e.calcDeltas(S,h,A),e.calcDeltas(S,A,h),e.addDeltas(S,i)}static fillParent(_,t,i){const s=i.length,T=t.length;for(let R=0;R<T;R+=4){const T=t[R],n=t[R+1],A=t[R+2],h=_[T][n-1],e=_[T][n];let S=8092,C=-1;for(let t=0;t<s;t+=4){if(i[t+2]!==A)continue;const s=i[t],T=i[t+1],R=_[s][T-1],n=_[s][T];switch(A){case E.sideLeft:case E.sideRight:if(N(h.y,R.y,n.y)&&N(e.y,R.y,n.y)){const _=Math.abs(n.y-R.y);_<S&&(S=_,C=t)}break;case E.sideTop:case E.sideBottom:if(N(h.x,R.x,n.x)&&N(e.x,R.x,n.x)){const _=Math.abs(n.x-R.x);_<S&&(S=_,C=t)}}}t[R+3]=C}}static calcDeltas(_,t,i){const s=t.length;for(let E=0;E<s;E+=4){const s=[],T=e.calcDelta(E,t,i,s);_.push(t[E]),_.push(t[E+1]),_.push(t[E+2]),_.push(T)}}static calcDelta(_,t,i,s){const E=t[_+3];if(-1===E)return 0;const T=s.length;return T>1&&s[T-2]===E?0:(s.push(E),e.calcDelta(E,i,t,s)+1)}static addDeltas(_,t){const i=_.length;let s=0;for(let t=0;t<i;t+=4){const i=_[t+3];i>s&&(s=i)}for(let T=0;T<i;T+=4){const i=t[_[T]],R=_[T+1],n=s-_[T+3];switch(_[T+2]){case E.sideLeft:i[R-1].x-=n,i[R].x-=n,1===R&&(i[i.length-1].x-=n),R===i.length-1&&(i[0].x-=n);break;case E.sideRight:i[R-1].x+=n,i[R].x+=n,1===R&&(i[i.length-1].x+=n),R===i.length-1&&(i[0].x+=n);break;case E.sideTop:i[R-1].y-=n,i[R].y-=n,1===R&&(i[i.length-1].y-=n),R===i.length-1&&(i[0].y-=n);break;case E.sideBottom:i[R-1].y+=n,i[R].y+=n,1===R&&(i[i.length-1].y+=n),R===i.length-1&&(i[0].y+=n)}}}}const N=(_,t,i)=>_>=t&&_<=i||_>=i&&_<=t},13195:(_,t,i)=>{i.d(t,{GW:()=>r,IU:()=>L,Jo:()=>R,MG:()=>T,Wh:()=>S,cP:()=>P,os:()=>e,p6:()=>O,pJ:()=>n,ru:()=>D,s3:()=>M,wV:()=>I,yM:()=>a,z0:()=>C});var s=i(95108),E=i(6774);const T=Number.POSITIVE_INFINITY,R=Math.PI,n=2*R,A=128/R,h=256/360,e=R/180,N=1/Math.LN2;function S(_,t){return(_%=t)>=0?_:_+t}function C(_){return S(_*A,256)}function I(_){return S(_*h,256)}function O(_){return Math.log(_)*N}function r(_,t,i){return _*(1-i)+t*i}const l=8,o=14,x=16;function L(_){return l+Math.max((_-o)*x,0)}function M(_,t,i){let s,E,T,R=0;for(const n of i){s=n.length;for(let i=1;i<s;++i)E=n[i-1],T=n[i],E.y>t!=T.y>t&&((T.x-E.x)*(t-E.y)-(T.y-E.y)*(_-E.x)>0?R++:R--)}return 0!==R}function D(_,t,i,E){let T,R,n,A;const h=E*E;for(const E of i){const i=E.length;if(!(i<2)){T=E[0].x,R=E[0].y;for(let e=1;e<i;++e){if(n=E[e].x,A=E[e].y,(0,s.Ng)(_,t,T,R,n,A)<h)return!0;T=n,R=A}}}return!1}function P(_,t){if(0===t||Number.isNaN(t))return _;const i=[],s=new E.bR(0,0),T=new E.bR(0,0),R=new E.bR(0,0);for(let n=0;n<_.length;n++){const A=_[n],h=[];for(let _=0;_<A.length;_++){const i=A[_-1],n=A[_],e=A[_+1];0===_?s.setCoords(0,0):s.assignSub(n,i).normalize().rightPerpendicular(),_===A.length-1?T.setCoords(0,0):T.assignSub(e,n).normalize().rightPerpendicular(),R.assignAdd(s,T).normalize();const N=R.x*T.x+R.y*T.y;0!==N&&R.scale(1/N),h.push(E.bR.add(n,R.scale(t)))}i.push(h)}return i}function a(_,t,i,s){const T=new E.bR(_[0],_[1]);if(T.scale(s),"viewport"===t){const _=-i*(Math.PI/180),t=Math.cos(_),s=Math.sin(_);T.rotate(t,s)}return T}},76213:(_,t,i)=>{i.d(t,{CQ:()=>s,DY:()=>E,GR:()=>r,Gh:()=>h,MZ:()=>C,TB:()=>O,U5:()=>A,_M:()=>e,cp:()=>l,dV:()=>R,eG:()=>T,fq:()=>I,hM:()=>S,ie:()=>N});const s=512,E=29,T=24;var R,n;(n=R||(R={}))[n.FilterFlags=0]="FilterFlags",n[n.Animation=1]="Animation",n[n.GPGPU=2]="GPGPU",n[n.VV=3]="VV",n[n.DD0=4]="DD0",n[n.DD1=5]="DD1",n[n.DD2=6]="DD2",n[n.LocalTimeOrigin=7]="LocalTimeOrigin";const A=6,h=1.05,e=3,N=3,S=4,C=1,I=10,O=256,r=32,l=512},63907:(_,t,i)=>{var s,E,T,R,n,A,h,e,N,S,C,I,O,r,l,o,x,L,M,D,P,a,G;i.d(t,{Ab:()=>r,Ac:()=>h,Ap:()=>O,CQ:()=>U,Cj:()=>C,H0:()=>l,Hr:()=>G,MT:()=>N,NV:()=>s,NZ:()=>n,Nm:()=>a,Tb:()=>R,WR:()=>E,Y7:()=>A,_U:()=>L,dn:()=>T,eA:()=>S,ld:()=>o,nI:()=>y,pF:()=>I,pe:()=>e,vt:()=>P,yQ:()=>x}),function(_){_[_.DEPTH=256]="DEPTH",_[_.STENCIL=1024]="STENCIL",_[_.COLOR=16384]="COLOR"}(s||(s={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(R||(R={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_[_.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(n||(n={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(h||(h={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT",_[_.HALF_FLOAT=5131]="HALF_FLOAT"}(e||(e={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(N||(N={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(S||(S={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(C||(C={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(r||(r={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(l||(l={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(o||(o={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(x||(x={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(M||(M={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={})),function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.TransformFeedback=7]="TransformFeedback",_[_.Sync=8]="Sync",_[_.UNCOUNTED=9]="UNCOUNTED",_[_.LinesOfCode=9]="LinesOfCode",_[_.Uniform=10]="Uniform",_[_.COUNT=11]="COUNT"}(P||(P={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(a||(a={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(G||(G={}));const y=33306;var U,u,B,c,F,m,f;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(U||(U={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(u||(u={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(B||(B={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(c||(c={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(F||(F={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(m||(m={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(f||(f={}))}}]);
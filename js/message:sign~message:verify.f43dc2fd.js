(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message:sign~message:verify"],{"0b25":function(t,r,e){var n=e("a691"),i=e("50c4");t.exports=function(t){if(void 0===t)return 0;var r=n(t),e=i(r);if(r!==e)throw RangeError("Wrong length or index");return e}},"145e":function(t,r,e){"use strict";var n=e("7b0b"),i=e("23cb"),o=e("50c4"),a=Math.min;t.exports=[].copyWithin||function(t,r){var e=n(this),f=o(e.length),u=i(t,f),c=i(r,f),s=arguments.length>2?arguments[2]:void 0,y=a((void 0===s?f:i(s,f))-c,f-u),d=1;c<u&&u<c+y&&(d=-1,c+=y-1,u+=y-1);while(y-- >0)c in e?e[u]=e[c]:delete e[u],u+=d,c+=d;return e}},"170b":function(t,r,e){"use strict";var n=e("ebb5"),i=e("50c4"),o=e("23cb"),a=e("4840"),f=n.aTypedArray,u=n.exportTypedArrayMethod;u("subarray",(function(t,r){var e=f(this),n=e.length,u=o(t,n);return new(a(e,e.constructor))(e.buffer,e.byteOffset+u*e.BYTES_PER_ELEMENT,i((void 0===r?n:o(r,n))-u))}))},"182d":function(t,r,e){var n=e("f8cd");t.exports=function(t,r){var e=n(t);if(e%r)throw RangeError("Wrong offset");return e}},"20bf":function(t,r,e){"use strict";var n=e("8aa7"),i=e("ebb5").exportTypedArrayStaticMethod,o=e("a078");i("from",o,n)},"219c":function(t,r,e){"use strict";var n=e("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=[].sort;o("sort",(function(t){return a.call(i(this),t)}))},"25a1":function(t,r,e){"use strict";var n=e("ebb5"),i=e("d58f").right,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduceRight",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},2954:function(t,r,e){"use strict";var n=e("ebb5"),i=e("4840"),o=e("d039"),a=n.aTypedArray,f=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod,c=[].slice,s=o((function(){new Int8Array(1).slice()}));u("slice",(function(t,r){var e=c.call(a(this),t,r),n=i(this,this.constructor),o=0,u=e.length,s=new(f(n))(u);while(u>o)s[o]=e[o++];return s}),s)},3280:function(t,r,e){"use strict";var n=e("ebb5"),i=e("e58c"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("lastIndexOf",(function(t){return i.apply(o(this),arguments)}))},"3a7b":function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").findIndex,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("findIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},"3c5d":function(t,r,e){"use strict";var n=e("ebb5"),i=e("50c4"),o=e("182d"),a=e("7b0b"),f=e("d039"),u=n.aTypedArray,c=n.exportTypedArrayMethod,s=f((function(){new Int8Array(1).set({})}));c("set",(function(t){u(this);var r=o(arguments.length>1?arguments[1]:void 0,1),e=this.length,n=a(t),f=i(n.length),c=0;if(f+r>e)throw RangeError("Wrong length");while(c<f)this[r+c]=n[c++]}),s)},"3fcc":function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").map,o=e("4840"),a=n.aTypedArray,f=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod;u("map",(function(t){return i(a(this),t,arguments.length>1?arguments[1]:void 0,(function(t,r){return new(f(o(t,t.constructor)))(r)}))}))},"5cc6":function(t,r,e){var n=e("74e8");n("Uint8",(function(t){return function(r,e,n){return t(this,r,e,n)}}))},"5f96":function(t,r,e){"use strict";var n=e("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=[].join;o("join",(function(t){return a.apply(i(this),arguments)}))},"60bd":function(t,r,e){"use strict";var n=e("da84"),i=e("ebb5"),o=e("e260"),a=e("b622"),f=a("iterator"),u=n.Uint8Array,c=o.values,s=o.keys,y=o.entries,d=i.aTypedArray,h=i.exportTypedArrayMethod,p=u&&u.prototype[f],l=!!p&&("values"==p.name||void 0==p.name),b=function(){return c.call(d(this))};h("entries",(function(){return y.call(d(this))})),h("keys",(function(){return s.call(d(this))})),h("values",b,!l),h(f,b,!l)},"621a":function(t,r,e){"use strict";var n=e("da84"),i=e("83ab"),o=e("a981"),a=e("9112"),f=e("e2cc"),u=e("d039"),c=e("19aa"),s=e("a691"),y=e("50c4"),d=e("0b25"),h=e("77a7"),p=e("e163"),l=e("d2bb"),b=e("241c").f,v=e("9bf2").f,g=e("81d5"),A=e("d44e"),w=e("69f3"),T=w.get,x=w.set,E="ArrayBuffer",M="DataView",m="prototype",I="Wrong length",O="Wrong index",R=n[E],S=R,L=n[M],B=L&&L[m],U=Object.prototype,_=n.RangeError,V=h.pack,F=h.unpack,C=function(t){return[255&t]},W=function(t){return[255&t,t>>8&255]},Y=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},D=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},N=function(t){return V(t,23,4)},P=function(t){return V(t,52,8)},j=function(t,r){v(t[m],r,{get:function(){return T(this)[r]}})},k=function(t,r,e,n){var i=d(e),o=T(t);if(i+r>o.byteLength)throw _(O);var a=T(o.buffer).bytes,f=i+o.byteOffset,u=a.slice(f,f+r);return n?u:u.reverse()},G=function(t,r,e,n,i,o){var a=d(e),f=T(t);if(a+r>f.byteLength)throw _(O);for(var u=T(f.buffer).bytes,c=a+f.byteOffset,s=n(+i),y=0;y<r;y++)u[c+y]=s[o?y:r-y-1]};if(o){if(!u((function(){R(1)}))||!u((function(){new R(-1)}))||u((function(){return new R,new R(1.5),new R(NaN),R.name!=E}))){S=function(t){return c(this,S),new R(d(t))};for(var K,J=S[m]=R[m],$=b(R),q=0;$.length>q;)(K=$[q++])in S||a(S,K,R[K]);J.constructor=S}l&&p(B)!==U&&l(B,U);var z=new L(new S(2)),H=B.setInt8;z.setInt8(0,2147483648),z.setInt8(1,2147483649),!z.getInt8(0)&&z.getInt8(1)||f(B,{setInt8:function(t,r){H.call(this,t,r<<24>>24)},setUint8:function(t,r){H.call(this,t,r<<24>>24)}},{unsafe:!0})}else S=function(t){c(this,S,E);var r=d(t);x(this,{bytes:g.call(new Array(r),0),byteLength:r}),i||(this.byteLength=r)},L=function(t,r,e){c(this,L,M),c(t,S,M);var n=T(t).byteLength,o=s(r);if(o<0||o>n)throw _("Wrong offset");if(e=void 0===e?n-o:y(e),o+e>n)throw _(I);x(this,{buffer:t,byteLength:e,byteOffset:o}),i||(this.buffer=t,this.byteLength=e,this.byteOffset=o)},i&&(j(S,"byteLength"),j(L,"buffer"),j(L,"byteLength"),j(L,"byteOffset")),f(L[m],{getInt8:function(t){return k(this,1,t)[0]<<24>>24},getUint8:function(t){return k(this,1,t)[0]},getInt16:function(t){var r=k(this,2,t,arguments.length>1?arguments[1]:void 0);return(r[1]<<8|r[0])<<16>>16},getUint16:function(t){var r=k(this,2,t,arguments.length>1?arguments[1]:void 0);return r[1]<<8|r[0]},getInt32:function(t){return D(k(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return D(k(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return F(k(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return F(k(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,r){G(this,1,t,C,r)},setUint8:function(t,r){G(this,1,t,C,r)},setInt16:function(t,r){G(this,2,t,W,r,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,r){G(this,2,t,W,r,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,r){G(this,4,t,Y,r,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,r){G(this,4,t,Y,r,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,r){G(this,4,t,N,r,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,r){G(this,8,t,P,r,arguments.length>2?arguments[2]:void 0)}});A(S,E),A(L,M),t.exports={ArrayBuffer:S,DataView:L}},"649e":function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").some,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("some",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},7156:function(t,r,e){var n=e("861d"),i=e("d2bb");t.exports=function(t,r,e){var o,a;return i&&"function"==typeof(o=r.constructor)&&o!==e&&n(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},"72f7":function(t,r,e){"use strict";var n=e("ebb5").exportTypedArrayMethod,i=e("d039"),o=e("da84"),a=o.Uint8Array,f=a&&a.prototype||{},u=[].toString,c=[].join;i((function(){u.call({})}))&&(u=function(){return c.call(this)});var s=f.toString!=u;n("toString",u,s)},"735e":function(t,r,e){"use strict";var n=e("ebb5"),i=e("81d5"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("fill",(function(t){return i.apply(o(this),arguments)}))},"73bf":function(t,r,e){"use strict";e.d(r,"a",(function(){return f})),e.d(r,"b",(function(){return u}));e("ace4"),e("d3b7"),e("25f0"),e("5cc6"),e("9a8c"),e("a975"),e("735e"),e("c1ac"),e("d139"),e("3a7b"),e("d5d6"),e("20bf"),e("82f8"),e("e91f"),e("60bd"),e("5f96"),e("3280"),e("3fcc"),e("ca91"),e("25a1"),e("cd26"),e("3c5d"),e("2954"),e("649e"),e("219c"),e("170b"),e("b39a"),e("72f7");var n=e("2330"),i=e.n(n),o=e("e307"),a=e("1c35"),f=function(t,r){var e=a["Buffer"].from(Object(o["sync"])(r),"hex");return{publicKey:a["Buffer"].from(i.a.publicKeyCreate(e)).toString("hex"),signature:a["Buffer"].from(i.a.signatureExport(i.a.ecdsaSign(a["Buffer"].from(Object(o["sync"])(t),"hex"),e).signature)).toString("hex"),message:t}},u=function(t){var r=t.message,e=t.publicKey,n=t.signature;return i.a.ecdsaVerify(i.a.signatureImport(Uint8Array.from(a["Buffer"].from(n,"hex"))),a["Buffer"].from(Object(o["sync"])(r),"hex"),a["Buffer"].from(e,"hex"))}},"74e8":function(t,r,e){"use strict";var n=e("23e7"),i=e("da84"),o=e("83ab"),a=e("8aa7"),f=e("ebb5"),u=e("621a"),c=e("19aa"),s=e("5c6c"),y=e("9112"),d=e("50c4"),h=e("0b25"),p=e("182d"),l=e("c04e"),b=e("5135"),v=e("f5df"),g=e("861d"),A=e("7c73"),w=e("d2bb"),T=e("241c").f,x=e("a078"),E=e("b727").forEach,M=e("2626"),m=e("9bf2"),I=e("06cf"),O=e("69f3"),R=e("7156"),S=O.get,L=O.set,B=m.f,U=I.f,_=Math.round,V=i.RangeError,F=u.ArrayBuffer,C=u.DataView,W=f.NATIVE_ARRAY_BUFFER_VIEWS,Y=f.TYPED_ARRAY_TAG,D=f.TypedArray,N=f.TypedArrayPrototype,P=f.aTypedArrayConstructor,j=f.isTypedArray,k="BYTES_PER_ELEMENT",G="Wrong length",K=function(t,r){var e=0,n=r.length,i=new(P(t))(n);while(n>e)i[e]=r[e++];return i},J=function(t,r){B(t,r,{get:function(){return S(this)[r]}})},$=function(t){var r;return t instanceof F||"ArrayBuffer"==(r=v(t))||"SharedArrayBuffer"==r},q=function(t,r){return j(t)&&"symbol"!=typeof r&&r in t&&String(+r)==String(r)},z=function(t,r){return q(t,r=l(r,!0))?s(2,t[r]):U(t,r)},H=function(t,r,e){return!(q(t,r=l(r,!0))&&g(e)&&b(e,"value"))||b(e,"get")||b(e,"set")||e.configurable||b(e,"writable")&&!e.writable||b(e,"enumerable")&&!e.enumerable?B(t,r,e):(t[r]=e.value,t)};o?(W||(I.f=z,m.f=H,J(N,"buffer"),J(N,"byteOffset"),J(N,"byteLength"),J(N,"length")),n({target:"Object",stat:!0,forced:!W},{getOwnPropertyDescriptor:z,defineProperty:H}),t.exports=function(t,r,e){var o=t.match(/\d+$/)[0]/8,f=t+(e?"Clamped":"")+"Array",u="get"+t,s="set"+t,l=i[f],b=l,v=b&&b.prototype,m={},I=function(t,r){var e=S(t);return e.view[u](r*o+e.byteOffset,!0)},O=function(t,r,n){var i=S(t);e&&(n=(n=_(n))<0?0:n>255?255:255&n),i.view[s](r*o+i.byteOffset,n,!0)},U=function(t,r){B(t,r,{get:function(){return I(this,r)},set:function(t){return O(this,r,t)},enumerable:!0})};W?a&&(b=r((function(t,r,e,n){return c(t,b,f),R(function(){return g(r)?$(r)?void 0!==n?new l(r,p(e,o),n):void 0!==e?new l(r,p(e,o)):new l(r):j(r)?K(b,r):x.call(b,r):new l(h(r))}(),t,b)})),w&&w(b,D),E(T(l),(function(t){t in b||y(b,t,l[t])})),b.prototype=v):(b=r((function(t,r,e,n){c(t,b,f);var i,a,u,s=0,y=0;if(g(r)){if(!$(r))return j(r)?K(b,r):x.call(b,r);i=r,y=p(e,o);var l=r.byteLength;if(void 0===n){if(l%o)throw V(G);if(a=l-y,a<0)throw V(G)}else if(a=d(n)*o,a+y>l)throw V(G);u=a/o}else u=h(r),a=u*o,i=new F(a);L(t,{buffer:i,byteOffset:y,byteLength:a,length:u,view:new C(i)});while(s<u)U(t,s++)})),w&&w(b,D),v=b.prototype=A(N)),v.constructor!==b&&y(v,"constructor",b),Y&&y(v,Y,f),m[f]=b,n({global:!0,forced:b!=l,sham:!W},m),k in b||y(b,k,o),k in v||y(v,k,o),M(f)}):t.exports=function(){}},"77a7":function(t,r){var e=1/0,n=Math.abs,i=Math.pow,o=Math.floor,a=Math.log,f=Math.LN2,u=function(t,r,u){var c,s,y,d=new Array(u),h=8*u-r-1,p=(1<<h)-1,l=p>>1,b=23===r?i(2,-24)-i(2,-77):0,v=t<0||0===t&&1/t<0?1:0,g=0;for(t=n(t),t!=t||t===e?(s=t!=t?1:0,c=p):(c=o(a(t)/f),t*(y=i(2,-c))<1&&(c--,y*=2),t+=c+l>=1?b/y:b*i(2,1-l),t*y>=2&&(c++,y/=2),c+l>=p?(s=0,c=p):c+l>=1?(s=(t*y-1)*i(2,r),c+=l):(s=t*i(2,l-1)*i(2,r),c=0));r>=8;d[g++]=255&s,s/=256,r-=8);for(c=c<<r|s,h+=r;h>0;d[g++]=255&c,c/=256,h-=8);return d[--g]|=128*v,d},c=function(t,r){var n,o=t.length,a=8*o-r-1,f=(1<<a)-1,u=f>>1,c=a-7,s=o-1,y=t[s--],d=127&y;for(y>>=7;c>0;d=256*d+t[s],s--,c-=8);for(n=d&(1<<-c)-1,d>>=-c,c+=r;c>0;n=256*n+t[s],s--,c-=8);if(0===d)d=1-u;else{if(d===f)return n?NaN:y?-e:e;n+=i(2,r),d-=u}return(y?-1:1)*n*i(2,d-r)};t.exports={pack:u,unpack:c}},"81d5":function(t,r,e){"use strict";var n=e("7b0b"),i=e("23cb"),o=e("50c4");t.exports=function(t){var r=n(this),e=o(r.length),a=arguments.length,f=i(a>1?arguments[1]:void 0,e),u=a>2?arguments[2]:void 0,c=void 0===u?e:i(u,e);while(c>f)r[f++]=t;return r}},"82f8":function(t,r,e){"use strict";var n=e("ebb5"),i=e("4d64").includes,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("includes",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},"8aa7":function(t,r,e){var n=e("da84"),i=e("d039"),o=e("1c7e"),a=e("ebb5").NATIVE_ARRAY_BUFFER_VIEWS,f=n.ArrayBuffer,u=n.Int8Array;t.exports=!a||!i((function(){u(1)}))||!i((function(){new u(-1)}))||!o((function(t){new u,new u(null),new u(1.5),new u(t)}),!0)||i((function(){return 1!==new u(new f(2),1,void 0).length}))},"9a8c":function(t,r,e){"use strict";var n=e("ebb5"),i=e("145e"),o=n.aTypedArray,a=n.exportTypedArrayMethod;a("copyWithin",(function(t,r){return i.call(o(this),t,r,arguments.length>2?arguments[2]:void 0)}))},a078:function(t,r,e){var n=e("7b0b"),i=e("50c4"),o=e("35a1"),a=e("e95a"),f=e("0366"),u=e("ebb5").aTypedArrayConstructor;t.exports=function(t){var r,e,c,s,y,d,h=n(t),p=arguments.length,l=p>1?arguments[1]:void 0,b=void 0!==l,v=o(h);if(void 0!=v&&!a(v)){y=v.call(h),d=y.next,h=[];while(!(s=d.call(y)).done)h.push(s.value)}for(b&&p>2&&(l=f(l,arguments[2],2)),e=i(h.length),c=new(u(this))(e),r=0;e>r;r++)c[r]=b?l(h[r],r):h[r];return c}},a640:function(t,r,e){"use strict";var n=e("d039");t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},a975:function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").every,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("every",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},a981:function(t,r){t.exports="undefined"!==typeof ArrayBuffer&&"undefined"!==typeof DataView},ace4:function(t,r,e){"use strict";var n=e("23e7"),i=e("d039"),o=e("621a"),a=e("825a"),f=e("23cb"),u=e("50c4"),c=e("4840"),s=o.ArrayBuffer,y=o.DataView,d=s.prototype.slice,h=i((function(){return!new s(2).slice(1,void 0).byteLength}));n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:h},{slice:function(t,r){if(void 0!==d&&void 0===r)return d.call(a(this),t);var e=a(this).byteLength,n=f(t,e),i=f(void 0===r?e:r,e),o=new(c(this,s))(u(i-n)),h=new y(this),p=new y(o),l=0;while(n<i)p.setUint8(l++,h.getUint8(n++));return o}})},b39a:function(t,r,e){"use strict";var n=e("da84"),i=e("ebb5"),o=e("d039"),a=n.Int8Array,f=i.aTypedArray,u=i.exportTypedArrayMethod,c=[].toLocaleString,s=[].slice,y=!!a&&o((function(){c.call(new a(1))})),d=o((function(){return[1,2].toLocaleString()!=new a([1,2]).toLocaleString()}))||!o((function(){a.prototype.toLocaleString.call([1,2])}));u("toLocaleString",(function(){return c.apply(y?s.call(f(this)):f(this),arguments)}),d)},c1ac:function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").filter,o=e("4840"),a=n.aTypedArray,f=n.aTypedArrayConstructor,u=n.exportTypedArrayMethod;u("filter",(function(t){var r=i(a(this),t,arguments.length>1?arguments[1]:void 0),e=o(this,this.constructor),n=0,u=r.length,c=new(f(e))(u);while(u>n)c[n]=r[n++];return c}))},ca91:function(t,r,e){"use strict";var n=e("ebb5"),i=e("d58f").left,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("reduce",(function(t){return i(o(this),t,arguments.length,arguments.length>1?arguments[1]:void 0)}))},cd26:function(t,r,e){"use strict";var n=e("ebb5"),i=n.aTypedArray,o=n.exportTypedArrayMethod,a=Math.floor;o("reverse",(function(){var t,r=this,e=i(r).length,n=a(e/2),o=0;while(o<n)t=r[o],r[o++]=r[--e],r[e]=t;return r}))},d139:function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").find,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("find",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},d58f:function(t,r,e){var n=e("1c0b"),i=e("7b0b"),o=e("44ad"),a=e("50c4"),f=function(t){return function(r,e,f,u){n(e);var c=i(r),s=o(c),y=a(c.length),d=t?y-1:0,h=t?-1:1;if(f<2)while(1){if(d in s){u=s[d],d+=h;break}if(d+=h,t?d<0:y<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:y>d;d+=h)d in s&&(u=e(u,s[d],d,c));return u}};t.exports={left:f(!1),right:f(!0)}},d5d6:function(t,r,e){"use strict";var n=e("ebb5"),i=e("b727").forEach,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("forEach",(function(t){i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},e58c:function(t,r,e){"use strict";var n=e("fc6a"),i=e("a691"),o=e("50c4"),a=e("a640"),f=e("ae40"),u=Math.min,c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0,y=a("lastIndexOf"),d=f("indexOf",{ACCESSORS:!0,1:0}),h=s||!y||!d;t.exports=h?function(t){if(s)return c.apply(this,arguments)||0;var r=n(this),e=o(r.length),a=e-1;for(arguments.length>1&&(a=u(a,i(arguments[1]))),a<0&&(a=e+a);a>=0;a--)if(a in r&&r[a]===t)return a||0;return-1}:c},e91f:function(t,r,e){"use strict";var n=e("ebb5"),i=e("4d64").indexOf,o=n.aTypedArray,a=n.exportTypedArrayMethod;a("indexOf",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},ebb5:function(t,r,e){"use strict";var n,i=e("a981"),o=e("83ab"),a=e("da84"),f=e("861d"),u=e("5135"),c=e("f5df"),s=e("9112"),y=e("6eeb"),d=e("9bf2").f,h=e("e163"),p=e("d2bb"),l=e("b622"),b=e("90e3"),v=a.Int8Array,g=v&&v.prototype,A=a.Uint8ClampedArray,w=A&&A.prototype,T=v&&h(v),x=g&&h(g),E=Object.prototype,M=E.isPrototypeOf,m=l("toStringTag"),I=b("TYPED_ARRAY_TAG"),O=i&&!!p&&"Opera"!==c(a.opera),R=!1,S={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L=function(t){var r=c(t);return"DataView"===r||u(S,r)},B=function(t){return f(t)&&u(S,c(t))},U=function(t){if(B(t))return t;throw TypeError("Target is not a typed array")},_=function(t){if(p){if(M.call(T,t))return t}else for(var r in S)if(u(S,n)){var e=a[r];if(e&&(t===e||M.call(e,t)))return t}throw TypeError("Target is not a typed array constructor")},V=function(t,r,e){if(o){if(e)for(var n in S){var i=a[n];i&&u(i.prototype,t)&&delete i.prototype[t]}x[t]&&!e||y(x,t,e?r:O&&g[t]||r)}},F=function(t,r,e){var n,i;if(o){if(p){if(e)for(n in S)i=a[n],i&&u(i,t)&&delete i[t];if(T[t]&&!e)return;try{return y(T,t,e?r:O&&v[t]||r)}catch(f){}}for(n in S)i=a[n],!i||i[t]&&!e||y(i,t,r)}};for(n in S)a[n]||(O=!1);if((!O||"function"!=typeof T||T===Function.prototype)&&(T=function(){throw TypeError("Incorrect invocation")},O))for(n in S)a[n]&&p(a[n],T);if((!O||!x||x===E)&&(x=T.prototype,O))for(n in S)a[n]&&p(a[n].prototype,x);if(O&&h(w)!==x&&p(w,x),o&&!u(x,m))for(n in R=!0,d(x,m,{get:function(){return f(this)?this[I]:void 0}}),S)a[n]&&s(a[n],I,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:R&&I,aTypedArray:U,aTypedArrayConstructor:_,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:F,isView:L,isTypedArray:B,TypedArray:T,TypedArrayPrototype:x}},f8cd:function(t,r,e){var n=e("a691");t.exports=function(t){var r=n(t);if(r<0)throw RangeError("The argument can't be less than 0");return r}}}]);
//# sourceMappingURL=message:sign~message:verify.f43dc2fd.js.map
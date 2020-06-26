(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wallet:passphrase"],{"0329":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"flex items-center wallet-from-passphrase mt-5"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.passphrase,expression:"passphrase"}],staticClass:"border p-4 mr-5",attrs:{type:"text",placeholder:"Enter your passphrase",id:"wallet-passphrase"},domProps:{value:e.passphrase},on:{input:function(r){r.target.composing||(e.passphrase=r.target.value)}}}),t("button",{staticClass:"primary-action-button",on:{click:function(r){return r.preventDefault(),e.generateWallet(r)}}},[e._v("Generate")])]),e.errorText?t("div",{staticClass:"flex flex-col items-center"},[t("Alert",{attrs:{message:e.errorText,type:"error"}}),t("button",{staticClass:"text-gray-500 inline-link mt-3",on:{click:function(r){return r.preventDefault(),e.forceGenerateWallet(r)}}},[e._v("Generate Anyway")])],1):e._e()])},a=[],o=t("d4ec"),i=t("bee2"),s=t("262e"),c=t("2caf"),f=t("9ab4"),u=t("2b0e"),l=t("2fe1"),p=t("29c9"),h=t("bd81"),d=t("98ab"),v=function(e){Object(s["a"])(t,e);var r=Object(c["a"])(t);function t(){var e;return Object(o["a"])(this,t),e=r.apply(this,arguments),e.passphrase=null,e.errorText=null,e}return Object(i["a"])(t,[{key:"generateWallet",value:function(){this.passphrase?Object(p["validateMnemonic"])(this.passphrase)?this.forceGenerateWallet():this.errorText="The passphrase does not appear to be BIP39":this.errorText="Please fill out the passphrase."}},{key:"forceGenerateWallet",value:function(){this.errorText=null,this.$router.push({name:"wallet",params:{wallet:JSON.stringify(Object(h["a"])(this.passphrase))}})}}]),t}(u["a"]);v=Object(f["a"])([Object(l["b"])({components:{Alert:d["a"]}})],v);var w=v,y=w,b=(t("96af"),t("2877")),g=Object(b["a"])(y,n,a,!1,null,null,null);r["default"]=g.exports},"06e9":function(e,r,t){"use strict";var n=t("0774"),a=t("8707").Buffer;e.exports=function(e){function r(r){var t=e(r);return n.encode(a.concat([r,t],r.length+4))}function t(r){var t=r.slice(0,-4),n=r.slice(-4),a=e(t);if(!(n[0]^a[0]|n[1]^a[1]|n[2]^a[2]|n[3]^a[3]))return t}function o(e){var r=n.decodeUnsafe(e);if(r)return t(r)}function i(r){var a=n.decode(r),o=t(a,e);if(!o)throw new Error("Invalid checksum");return o}return{encode:r,decode:i,decodeUnsafe:o}}},"0774":function(e,r,t){var n=t("42a71"),a="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";e.exports=n(a)},"42a71":function(e,r,t){"use strict";var n=t("8707").Buffer;function a(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),t=0;t<r.length;t++)r[t]=255;for(var a=0;a<e.length;a++){var o=e.charAt(a),i=o.charCodeAt(0);if(255!==r[i])throw new TypeError(o+" is ambiguous");r[i]=a}var s=e.length,c=e.charAt(0),f=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function l(r){if((Array.isArray(r)||r instanceof Uint8Array)&&(r=n.from(r)),!n.isBuffer(r))throw new TypeError("Expected Buffer");if(0===r.length)return"";var t=0,a=0,o=0,i=r.length;while(o!==i&&0===r[o])o++,t++;var f=(i-o)*u+1>>>0,l=new Uint8Array(f);while(o!==i){for(var p=r[o],h=0,d=f-1;(0!==p||h<a)&&-1!==d;d--,h++)p+=256*l[d]>>>0,l[d]=p%s>>>0,p=p/s>>>0;if(0!==p)throw new Error("Non-zero carry");a=h,o++}var v=f-a;while(v!==f&&0===l[v])v++;for(var w=c.repeat(t);v<f;++v)w+=e.charAt(l[v]);return w}function p(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return n.alloc(0);var t=0;if(" "!==e[t]){var a=0,o=0;while(e[t]===c)a++,t++;var i=(e.length-t)*f+1>>>0,u=new Uint8Array(i);while(e[t]){var l=r[e.charCodeAt(t)];if(255===l)return;for(var p=0,h=i-1;(0!==l||p<o)&&-1!==h;h--,p++)l+=s*u[h]>>>0,u[h]=l%256>>>0,l=l/256>>>0;if(0!==l)throw new Error("Non-zero carry");o=p,t++}if(" "!==e[t]){var d=i-o;while(d!==i&&0===u[d])d++;var v=n.allocUnsafe(a+(i-d));v.fill(0,0,a);var w=a;while(d!==i)v[w++]=u[d++];return v}}}function h(e){var r=p(e);if(r)return r;throw new Error("Non-base"+s+" character")}return{encode:l,decodeUnsafe:p,decode:h}}e.exports=a},"6f78":function(e,r,t){"use strict";var n=t("98e6"),a=t("06e9");function o(e){var r=n("sha256").update(e).digest();return n("sha256").update(r).digest()}e.exports=a(o)},"96af":function(e,r,t){"use strict";var n=t("a290"),a=t.n(n);a.a},a290:function(e,r,t){},a50f:function(e,r,t){(function(r){var n=t("6f78");function a(e,r){if(void 0!==r&&e[0]!==r)throw new Error("Invalid network version");if(33===e.length)return{version:e[0],privateKey:e.slice(1,33),compressed:!1};if(34!==e.length)throw new Error("Invalid WIF length");if(1!==e[33])throw new Error("Invalid compression flag");return{version:e[0],privateKey:e.slice(1,33),compressed:!0}}function o(e,t,n){var a=new r(n?34:33);return a.writeUInt8(e,0),t.copy(a,1),n&&(a[33]=1),a}function i(e,r){return a(n.decode(e),r)}function s(e,r,t){return"number"===typeof e?n.encode(o(e,r,t)):n.encode(o(e.version,e.privateKey,e.compressed))}e.exports={decode:i,decodeRaw:a,encode:s,encodeRaw:o}}).call(this,t("1c35").Buffer)},bd81:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return g}));t("d3b7"),t("25f0");var n=t("29c9"),a=t("2330"),o=t.n(a),i=t("b5ca"),s=t.n(i),c=t("e307"),f=t("1c35"),u=t("a50f"),l=t.n(u),p=t("6f78"),h=t.n(p),d=t("d70b"),v=function(e){var r=f["Buffer"].from((new s.a).update(f["Buffer"].from(e,"hex")).digest("hex"),"hex"),t=f["Buffer"].alloc(21);return t.writeUInt8(d["a"].getAddressPrefix(),0),r.copy(t,1),h.a.encode(t)},w=function(e){return f["Buffer"].from(o.a.publicKeyCreate(e)).toString("hex")},y=function(e){return l.a.encode(d["a"].getWIF(),e,!0)},b=function(e){var r=f["Buffer"].from(Object(c["sync"])(e),"hex"),t=w(r),a={passphrase:e,address:v(t),publicKey:t,wif:y(r),entropy:void 0};try{a.entropy=Object(n["mnemonicToEntropy"])(e)}catch(o){a.entropy=void 0}return a},g=function(e){return b(Object(n["entropyToMnemonic"])(e))}}}]);
//# sourceMappingURL=wallet:passphrase.5adc2af5.js.map
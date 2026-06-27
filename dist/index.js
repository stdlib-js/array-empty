"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var m=n(function(L,f){
var g=require('@stdlib/buffer-alloc-unsafe/dist'),w=require('@stdlib/assert-is-uint8array/dist');function x(){var e=g(1);return w(e)}f.exports=x
});var y=n(function(O,p){
var l=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,E=require('@stdlib/buffer-alloc-unsafe/dist'),U=require('@stdlib/array-typed-ctors/dist'),A=require('@stdlib/array-base-zeros/dist'),T=require('@stdlib/ndarray-base-bytes-per-element/dist'),P=require('@stdlib/array-defaults/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),z=P.get("dtypes.default");function B(e){var r,a,t,o,i,v,u;if(!l(e))throw new TypeError(c('1Zj2d',e));if(arguments.length>1?t=arguments[1]:t=z,t==="generic")return A(e);if(r=T(t),r===null)throw new TypeError(c('1ZjEC',t));return o=U(t),u=r*e,t==="complex128"&&(u+=8),i=E(u),a=i.byteOffset,t==="complex128"&&(l(a/r)||(a+=8)),v=new o(i.buffer,a,e),v}p.exports=B
});var d=n(function(S,b){
var D=require('@stdlib/array-bool/dist'),q=require('@stdlib/array-zeros/dist');function F(e){var r;return arguments.length>1?(r=arguments[1],r==="bool"?new D(e):q(e,r)):q(e)}b.exports=F
});var N=m(),V=y(),k=d(),s;N()?s=V:s=k;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

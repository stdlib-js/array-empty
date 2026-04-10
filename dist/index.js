"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=n(function(L,f){
var g=require('@stdlib/buffer-alloc-unsafe/dist'),w=require('@stdlib/assert-is-uint8array/dist');function x(){var r=g(1);return w(r)}f.exports=x
});var y=n(function(O,p){
var l=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,E=require('@stdlib/buffer-alloc-unsafe/dist'),U=require('@stdlib/array-typed-ctors/dist'),A=require('@stdlib/array-base-zeros/dist'),T=require('@stdlib/ndarray-base-bytes-per-element/dist'),P=require('@stdlib/array-defaults/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),z=P.get("dtypes.default");function B(r){var e,a,t,o,i,v,u;if(!l(r))throw new TypeError(c('1Zj2d',r));if(arguments.length>1?t=arguments[1]:t=z,t==="generic")return A(r);if(e=T(t),e===null)throw new TypeError(c('1ZjEC',t));return o=U(t),u=e*r,t==="complex128"&&(u+=8),i=E(u),a=i.byteOffset,t==="complex128"&&(l(a/e)||(a+=8)),v=new o(i.buffer,a,r),v}p.exports=B
});var d=n(function(S,b){
var D=require('@stdlib/array-bool/dist'),q=require('@stdlib/array-zeros/dist');function F(r){var e;return arguments.length>1?(e=arguments[1],e==="bool"?new D(r):q(r,e)):q(r)}b.exports=F
});var N=m(),V=y(),k=d(),s;N()?s=V:s=k;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

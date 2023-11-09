"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=n(function(F,v){
var d=require('@stdlib/buffer-alloc-unsafe/dist'),x=require('@stdlib/assert-is-uint8array/dist');function w(){var r=d(1);return x(r)}v.exports=w
});var y=n(function(I,p){
var c=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,U=require('@stdlib/buffer-alloc-unsafe/dist'),E=require('@stdlib/array-typed-ctors/dist'),z=require('@stdlib/array-base-zeros/dist'),A=require('@stdlib/ndarray-base-bytes-per-element/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function N(r){var e,a,t,o,i,f,u;if(!c(r))throw new TypeError(l('1Zj2d',r));if(arguments.length>1?t=arguments[1]:t="float64",t==="generic")return z(r);if(e=A(t),e===null)throw new TypeError(l('1ZjEC',t));return o=E(t),u=e*r,t==="complex128"&&(u+=8),i=U(u),a=i.byteOffset,t==="complex128"&&(c(a/e)||(a+=8)),f=new o(i.buffer,a,r),f}p.exports=N
});var b=n(function(O,g){
var q=require('@stdlib/array-zeros/dist');function P(r){return arguments.length>1?q(r,arguments[1]):q(r)}g.exports=P
});var T=m(),V=y(),k=b(),s;T()?s=V:s=k;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=s(function(I,o){
var d=require('@stdlib/buffer-alloc-unsafe/dist'),x=require('@stdlib/assert-is-uint8array/dist');function w(){var r=d(1);return x(r)}o.exports=w
});var y=s(function(L,p){
var c=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,E=require('@stdlib/buffer-alloc-unsafe/dist'),U=require('@stdlib/array-typed-ctors/dist'),T=require('@stdlib/array-base-zeros/dist'),A=require('@stdlib/ndarray-base-bytes-per-element/dist'),P=require('@stdlib/array-defaults/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist'),z=P.get("dtypes.default");function D(r){var e,a,t,f,i,v,u;if(!c(r))throw new TypeError(l('1Zj2d',r));if(arguments.length>1?t=arguments[1]:t=z,t==="generic")return T(r);if(e=A(t),e===null)throw new TypeError(l('1ZjEC',t));return f=U(t),u=e*r,t==="complex128"&&(u+=8),i=E(u),a=i.byteOffset,t==="complex128"&&(c(a/e)||(a+=8)),v=new f(i.buffer,a,r),v}p.exports=D
});var b=s(function(O,g){
var q=require('@stdlib/array-zeros/dist');function F(r){return arguments.length>1?q(r,arguments[1]):q(r)}g.exports=F
});var N=m(),V=y(),k=b(),n;N()?n=V:n=k;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

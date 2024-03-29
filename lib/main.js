/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var allocUnsafe = require( '@stdlib/buffer-alloc-unsafe' );
var ctors = require( '@stdlib/array-typed-ctors' );
var zeros = require( '@stdlib/array-base-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var defaults = require( '@stdlib/array-defaults' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Creates an uninitialized array having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} second argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = empty( 2 );
* // returns <Float64Array>
*
* @example
* var arr = empty( 2, 'float32' );
* // returns <Float32Array>
*/
function empty( length ) {
	var nbytes;
	var offset;
	var dtype;
	var ctor;
	var buf;
	var out;
	var nb;

	if ( !isNonNegativeInteger( length ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', length ) );
	}
	if ( arguments.length > 1 ) {
		dtype = arguments[ 1 ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	if ( dtype === 'generic' ) {
		return zeros( length );
	}
	nbytes = bytesPerElement( dtype );
	if ( nbytes === null ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a supported data type. Value: `%s`.', dtype ) );
	}
	// Resolve typed array constructor:
	ctor = ctors( dtype );

	// Compute the number of bytes to allocate:
	nb = nbytes * length;
	if ( dtype === 'complex128' ) {
		nb += 8; // Note: need to allocate additional bytes to ensure alignment
	}
	// Allocate binary buffer:
	buf = allocUnsafe( nb );

	// Resolve the byte offset:
	offset = buf.byteOffset;
	if ( dtype === 'complex128' ) {
		if ( !isNonNegativeInteger( offset/nbytes ) ) {
			offset += 8; // Note: ensure alignment
		}
	}
	// Reinterpret the binary buffer:
	out = new ctor( buf.buffer, offset, length );

	return out;
}


// EXPORTS //

module.exports = empty;

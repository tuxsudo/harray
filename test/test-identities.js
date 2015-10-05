import chai from 'chai';
import numArray from './samples/numbers.js';
import ids from '../lib/identities/index.js';

let assert = chai.assert;


describe('Identities', ()=> {

	it('removes falsey values', ()=> {
		var A = [0, false, undefined, NaN, '', 5, 3, 5],
			dA = [5, 3, 5];

		assert.deepEqual(A.filter(ids.truthy), dA);
	});

	it('removes truthy values', ()=> {
		var A = [0, false, undefined, NaN, '', 5, 3, 5],
			dA = [0, false, undefined, NaN, ''];

		assert.deepEqual(A.filter(ids.falsey), dA);
	});


	it('ensures uniqueness', ()=> {
		var A = [0, 5, 3, 5],
			dA = [0, 5, 3];

		assert.deepEqual(A.filter(ids.uniq), dA);
	});


	it('only duplicates', ()=> {
		var A = [0, 5, 3, 5],
			dA = [5];

		assert.deepEqual( A.filter(ids.duplicate), dA );
	});


});


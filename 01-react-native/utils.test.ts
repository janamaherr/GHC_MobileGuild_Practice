/// <reference path="./jest-shims.d.ts" />

import { add } from './utils';

describe('add', () => {
	test('returns the correct sum for positive numbers', () => {
		expect(add(2, 3)).toBe(5);
	});

	test('returns the correct sum for negative numbers', () => {
		expect(add(-2, -3)).toBe(-5);
	});

	test('returns the correct sum when one operand is zero', () => {
		expect(add(0, 7)).toBe(7);
		expect(add(9, 0)).toBe(9);
	});

	test('returns the correct sum for decimal numbers', () => {
		expect(add(1.5, 2.25)).toBe(3.75);
	});
});

import { expect, test,} from 'vitest'
import { multiply, sum } from "../math.ts";




test('test sum', () => {

	expect(sum(2, 4)).toBe(6);
})

test('test sum', () => {

	expect(multiply(2, 4)).toBe(8);
})
import test from 'ava';
import {firstAnswer} from '../index.js';

test('Valid triangle', t => {
  const result = firstAnswer('  3  4  5')
  t.deepEqual(result, 1)
});

test('Invalid triangle', t => {
  const result = firstAnswer('  5  10  25')
  t.deepEqual(result, 0)
});

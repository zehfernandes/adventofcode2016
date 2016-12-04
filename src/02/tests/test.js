import test from 'ava';
import {firstAnswer} from '../index.js';

test('Edges up left', t => {
  const result = firstAnswer('UUULLLL')
  t.deepEqual(result, "1")
});

test('Edges down right', t => {
  const result = firstAnswer('DDDDRRRR')
  t.deepEqual(result, "9")
});

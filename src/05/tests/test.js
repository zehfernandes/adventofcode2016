import test from 'ava';
import {firstAnswer, isRealRoom} from '../index.js';

test('Valid Room 1', t => {
  const result = isRealRoom('aaaaabbbzyx', 'abxyz')
  t.deepEqual(result, true)
});

test('Valid Room 2', t => {
  const result = isRealRoom('abcdefgh', 'abcde')
  t.deepEqual(result, true)
});

test('Valid Room 3', t => {
  const result = isRealRoom('notarealroom', 'oarel')
  t.deepEqual(result, true)
});

test('Invalid Room', t => {
  const result = isRealRoom('totallyrealroom', 'decoy')
  t.deepEqual(result, false)
});

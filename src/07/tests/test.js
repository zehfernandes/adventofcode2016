import test from 'ava';
import {firstAnswer, secondAnswer, checkABBA, checkSSL} from '../index.js';

test('Valid IP', t => {
  const result = checkABBA('abba[mnop]qrst')
  t.deepEqual(result, true)
});

test('Invalid IP', t => {
  const result = checkABBA('abcd[bddb]xyyx')
  t.deepEqual(result, false)
});

test('Invalid IP', t => {
  const result = checkABBA('aaaa[qwer]tyui')
  t.deepEqual(result, false)
});

test('Valid IP', t => {
  const result = checkABBA('ioxxoj[asdfgh]zxcvbn')
  t.deepEqual(result, true)
});

/* -----------
 Part Two
-------------- */

test('Valid SSL', t => {
  const result = checkSSL('aba[bab]xyz')
  t.deepEqual(result, true)
});

test('Invalid SSL', t => {
  const result = checkSSL('xyx[xyx]xyx')
  t.deepEqual(result, false)
});

test('Valid SSL', t => {
  const result = checkSSL('aaa[kek]eke')
  t.deepEqual(result, true)
});

test('Valid SSL', t => {
  const result = checkSSL('zazbz[bzb]cdb')
  t.deepEqual(result, true)
});



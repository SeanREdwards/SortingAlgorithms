import { expect } from '@jest/globals';
import insertion_sort from '../src/InsertionSort';

//Edge case
test('Insertion sort on empty array', () => {
  let arr = [];
  let expectedArr = [];

  insertion_sort(arr);
  expect(arr.length).toBe(0);
  expect(arr).toStrictEqual(expectedArr);
});

//Edge case
test('Insertion sort on array length 1', () => {
  let arr = [0];
  let expectedArr = [0];

  insertion_sort(arr);
  expect(arr.length).toBe(1);
  expect(arr).toStrictEqual(expectedArr);
});

//Edge case
test('Insertion sort on an ordered array length 2', () => {
  let arr = [0, 1];
  let expectedArr = [0, 1];

  insertion_sort(arr);
  expect(arr.length).toBe(2);
  expect(arr).toStrictEqual(expectedArr);
});

//Edge case
test('Insertion sort on an unordered array length 2', () => {
  let arr = [1, 0];
  let expectedArr = [0, 1];

  insertion_sort(arr);
  expect(arr.length).toBe(2);
  expect(arr).toStrictEqual(expectedArr);
});

//Standard test case
test('Insertion sort on an unordered array length 6', () => {
  let arr = [5, 2, 4, 6, 1, 3];
  let expectedArr = [1, 2, 3, 4, 5, 6];

  insertion_sort(arr);
  expect(arr.length).toBe(6);
  expect(arr).toStrictEqual(expectedArr);
});

//Standard test case
test('Insertion sort on a different unordered array length 6', () => {
  let arr = [31, 41, 59, 26, 41, 58];
  let expectedArr = [26, 31, 41, 41, 58, 59];

  insertion_sort(arr);
  expect(arr.length).toBe(6);
  expect(arr).toStrictEqual(expectedArr);
});
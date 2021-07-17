import { expect } from '@jest/globals';
import { mergeSort, merge } from '../src/MergeSort';

describe('Test of merge', () => {

  //Edge case
  test('merge on ordered two element array', () => {
    let arr = [0, 1];
    let expectedArr = [0, 1];

    merge(arr, 0, 0, arr.length - 1);
    expect(arr.length).toBe(2);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Edge case
  test('merge on unordered two element array', () => {
    let arr = [1, 0];
    let expectedArr = [0, 1];

    merge(arr, 0, 0, arr.length - 1);
    expect(arr.length).toBe(2);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Edge case
  test('merge on unordered three element array on subarray from indices 0 to 1', () => {
    let arr = [1, 0, 10];
    let expectedArr = [0, 1, 10];

    merge(arr, 0, 0, 1);
    expect(arr.length).toBe(3);
    expect(arr).toStrictEqual(expectedArr);
  });

    //Edge case
    test('merge on unordered three element array on subarray from indices 0 to 2', () => {
      let arr = [0, 11, 10];
      let expectedArr = [0, 10, 11];
  
      merge(arr, 0, 1, 2);
      expect(arr.length).toBe(3);
      expect(arr).toStrictEqual(expectedArr);
    });

  //Standard test case
  test('merge on 5 element array', () => {
    let arr = [1, 2, 4, 2, 3];
    let expectedArr = [1, 2, 2, 3, 4];

    merge(arr, 0, 2, arr.length - 1);
    expect(arr.length).toBe(5);
    expect(arr).toStrictEqual(expectedArr);
  });

    //Standard test case
    test('merge on 5 element array variation', () => {
      let arr = [1, 2, 4, 2, 3];
      let expectedArr = [1, 2, 2, 3, 4];
  
      merge(arr, 0, 2, arr.length - 1);
      expect(arr.length).toBe(5);
      expect(arr).toStrictEqual(expectedArr);
    });

  //Standard test case
  test('merge on 8 element array', () => {
    let arr = [2, 4, 5, 7, 1, 2, 3, 6];
    let expectedArr = [1, 2, 2, 3, 4, 5, 6, 7];

    merge(arr, 0, 3, arr.length - 1);
    expect(arr.length).toBe(8);
    expect(arr).toStrictEqual(expectedArr);
  });
})

describe('Tests of mergeSort', () => {

  //Edge case
  test('merge sort on empty array', () => {
    let arr = [];
    let expectedArr = [];

    mergeSort(arr, 0, arr.length);
    expect(arr.length).toBe(0);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Edge case
  test('merge sort on array length 1', () => {
    let arr = [0];
    let expectedArr = [0];

    mergeSort(arr, 0, arr.length - 1);
    expect(arr.length).toBe(1);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Edge case
  test('merge sort on an ordered array length 2', () => {
    let arr = [0, 1];
    let expectedArr = [0, 1];

    mergeSort(arr, 0, arr.length - 1);
    expect(arr.length).toBe(2);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Edge case
  test('merge sort on an unordered array length 2', () => {
    let arr = [5, 2];
    let expectedArr = [2, 5];
    
    mergeSort(arr, 0, arr.length - 1);
    expect(arr.length).toBe(2);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on an ordered array length 3', () => {
    let arr = [1, 3, 5];
    let expectedArr = [1, 3, 5];

    mergeSort(arr, 0, arr.length - 1); 
    expect(arr.length).toBe(3);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on an unordered array length 3', () => {
    let arr = [5, 3, 1];
    let expectedArr = [1, 3, 5];
  
    mergeSort(arr, 0, arr.length - 1); 
    expect(arr.length).toBe(3);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on an unordered array length 6', () => {
    let arr = [5, 2, 4, 6, 1, 3];
    let expectedArr = [1, 2, 3, 4, 5, 6];

    mergeSort(arr, 0, arr.length - 1);
    expect(arr.length).toBe(6);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on a different unordered array length 6', () => {
    let arr = [31, 41, 59, 26, 41, 58];
    let expectedArr = [26, 31, 41, 41, 58, 59];

    mergeSort(arr, 0 , arr.length - 1);
    expect(arr.length).toBe(6);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on an unordered array length 7', () => {
    let arr = [38, 27, 43, 3, 9, 82, 10];
    let expectedArr = [3, 9, 10, 27, 38, 43, 82];
      
    mergeSort(arr, 0, arr.length - 1); 
    expect(arr.length).toBe(7);
    expect(arr).toStrictEqual(expectedArr);
  });

  //Standard test case
  test('merge sort on an unordered array length 8 - example test taken from \"Introduction to Algorithms 3rd Edition\" by Cormen, Lesiserson, Rivest, & Stein pg 35', () => {
    let arr = [5, 2, 4, 7 , 1, 3, 2, 6];
    let expectedArr = [1, 2, 2, 3, 4, 5, 6, 7];
      
    mergeSort(arr, 0, arr.length - 1);
    expect(arr.length).toBe(8);
    expect(arr).toStrictEqual(expectedArr);
  });
});
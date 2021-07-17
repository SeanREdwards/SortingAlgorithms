import { expect } from '@jest/globals';
import { TestWatcher } from 'jest';
import { quickSort, partition, swap} from '../src/QuickSort';

describe('Tests for swap function', () => {

    //Edge test case
    test('swap on one element array', () => {
        let arr = [0];
        let expectedArr = [0];

        swap(arr, 0, 0);
        expect(arr.length).toBe(1);
        expect(arr).toStrictEqual(expectedArr);
    });

    //Edge test case
    test('swap on two element array', () => {
        let arr = [0 , 1];
        let expectedArr = [1, 0];

        swap(arr, 0, 1);
        expect(arr.length).toBe(2);
        expect(arr).toStrictEqual(expectedArr);
    });

    //Standard test case
    test('swap on two element array', () => {
        let arr = [0 , 1];
        let expectedArr = [1, 0];

        swap(arr, 0, 1);
        expect(arr.length).toBe(2);
        expect(arr).toStrictEqual(expectedArr);
    });

    //Standard test case
    test('swap on five element array', () => {
        let arr = [0 , 1, 7, 15, 12];
        let expectedArr = [0, 15, 7, 1, 12];

        swap(arr, 1, 3);
        expect(arr.length).toBe(5);
        expect(arr).toStrictEqual(expectedArr);
    });
});

describe('Tests of partition', () => {

    //Edge case
    test('partition on an ordered array length 2', () => {
        let arr = [2, 8];
        let expectedArr = [2, 8];
        let expectedVal = 1;
          
        let val = partition(arr, 0, arr.length - 1);

        expect(arr.length).toBe(2);
        expect(arr).toStrictEqual(expectedArr);
        expect(val).toStrictEqual(expectedVal);
      });

      //Standard test case
    test('partition on an unordered array length 8', () => {
        let arr = [2, 8, 7, 1, 3, 5, 6, 4];
        let expectedArr = [2, 1, 3, 4, 7, 5, 6, 8];
        let expectedVal = 3;
          
        let val = partition(arr, 0, arr.length - 1);
        expect(arr.length).toBe(8);
        expect(arr).toStrictEqual(expectedArr);
        expect(val).toStrictEqual(expectedVal);
      });
});

describe('Tests of quickSort', () => {

    //Edge case
    test('quick sort on empty array', () => {
      let arr = [];
      let expectedArr = [];
  
      quickSort(arr, 0, arr.length);
      expect(arr.length).toBe(0);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Edge case
    test('quick sort on array length 1', () => {
      let arr = [0];
      let expectedArr = [0];
  
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(1);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Edge case
    test('quick sort on an ordered array length 2', () => {
      let arr = [0, 1];
      let expectedArr = [0, 1];
  
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(2);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Edge case
    test('quick sort on an unordered array length 2', () => {
      let arr = [5, 2];
      let expectedArr = [2, 5];
      
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(2);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on an ordered array length 3', () => {
      let arr = [1, 3, 5];
      let expectedArr = [1, 3, 5];
  
      quickSort(arr, 0, arr.length - 1); 
      expect(arr.length).toBe(3);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on an unordered array length 3', () => {
      let arr = [5, 3, 1];
      let expectedArr = [1, 3, 5];
    
      quickSort(arr, 0, arr.length - 1); 
      expect(arr.length).toBe(3);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on an unordered array length 6', () => {
      let arr = [5, 2, 4, 6, 1, 3];
      let expectedArr = [1, 2, 3, 4, 5, 6];
  
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(6);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on a different unordered array length 6', () => {
      let arr = [31, 41, 59, 26, 41, 58];
      let expectedArr = [26, 31, 41, 41, 58, 59];
  
      quickSort(arr, 0 , arr.length - 1);
      expect(arr.length).toBe(6);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on an unordered array length 7', () => {
      let arr = [38, 27, 43, 3, 9, 82, 10];
      let expectedArr = [3, 9, 10, 27, 38, 43, 82];
        
      quickSort(arr, 0, arr.length - 1); 
      expect(arr.length).toBe(7);
      expect(arr).toStrictEqual(expectedArr);
    });
  
    //Standard test case
    test('quick sort on an unordered array length 8', () => {
      let arr = [5, 2, 4, 7 , 1, 3, 2, 6];
      let expectedArr = [1, 2, 2, 3, 4, 5, 6, 7];
        
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(8);
      expect(arr).toStrictEqual(expectedArr);
    });

    //Standard test case
    test('quick sort on an unordered array length 8', () => {
      let arr = [2, 8, 7, 1, 3, 5, 6, 4];
      let expectedArr = [1, 2, 3, 4, 5, 6, 7, 8];
        
      quickSort(arr, 0, arr.length - 1);
      expect(arr.length).toBe(8);
      expect(arr).toStrictEqual(expectedArr);
    });
});
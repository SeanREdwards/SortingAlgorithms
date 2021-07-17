/*
 *InsertionSort.js
 *A JavaScript implementation of the insertion sort algorithm (O(n^2)). Conceptually InsertionSort works the way a hand of cards is sorted,
 *and is efficient for a small number of elements. This is an in-place sorting algorithm. 
 * 
 *@Author Sean Edwards
 *@Date 7/6/2021
 */

/*
*Implementation of InsertionSort based upon the version discussed in "Introduction to Algorithms" by Cormen, Lesiserson, Rivest, & Stein.
*/
export function insertionSortV1(arr){
    for(let j = 1; j < arr.length; j++){
        let key = arr[j];

        //insertion of arr[j] into sorted sequence arr[1, ..., j-1]
        let i = j - 1;
        while (i >= 0 && arr[i] > key){
            arr[i + 1] = arr[i];
            i = i - 1;
        }
        arr[i + 1] = key;
    }
}

/*
*Alternative implementation of InsertionSort utilizing a double while loop.
*/
export function insertionSortV2(arr){
    let i = 1;
    while (i < arr.length){

        let j = i;
        while(j > 0 && (arr[j-1] > arr[j])){
            
            let swap = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = swap;
            j = j - 1;
        }
        i = i + 1;
    }
}
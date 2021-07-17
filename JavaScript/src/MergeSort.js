/*
 *MergeSort.js
 *A JavaScript implementation of the Merge Sort algorithm (O(nlog(n))). Conceptually InsertionSort works the way a hand of cards is sorted,
 *and is efficient for a small number of elements. This is an in-place sorting algorithm. 
 * 
 *@Author Sean Edwards
 *@Date 7/6/2021
 */

 /*
*Implementation of Merge Sort based upon the version discussed in "Introduction to Algorithms 3rd Edition"  by Cormen, Lesiserson, Rivest, & Stein.
*/
export function mergeSort(arr, startIndex, lastIndex){

    if(startIndex < lastIndex){
        let middleIndex = Math.floor((startIndex + lastIndex)/2);

        //Divide array
        mergeSort(arr, startIndex, middleIndex);
        mergeSort(arr, middleIndex + 1, lastIndex);

        //Merge sorted sub-arrays
        merge(arr, startIndex, middleIndex, lastIndex);
    }
}

export function merge(arr, firstIndex, secondIndex, lastIndex){

    let n1 = secondIndex - firstIndex + 1;
    let n2 = lastIndex - secondIndex; 

    //Instantiate new sub-arrays with space for sentinal element
    let leftArr = new Array(n1);
    let rightArr= new Array(n2);

    //Fill left and right arrays
    for(let i = 0; i < n1; i++){
        leftArr[i] = arr[firstIndex + i];
    }

    for(let j = 0; j < n2; j++){
        rightArr[j] = arr[secondIndex + j + 1];
    }
    
    //Set sentinal elements in array
    leftArr[n1] = Number.MAX_VALUE;
    rightArr[n2] = Number.MAX_VALUE;

    let i = 0;
    let j = 0;

    //Sort and merge sub arrays
    for(let k = firstIndex; k <= lastIndex; k++){
        if(leftArr[i] <= rightArr[j]){
            arr[k] = leftArr[i];
            i++;
        }else{
            arr[k] = rightArr[j];
            j++;
        }
    }
    
}

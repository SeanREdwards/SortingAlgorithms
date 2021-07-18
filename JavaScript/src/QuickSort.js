/*
 *QuickSort.js
 *A JavaScript implementation of the QuickSort algorithm (O(n^2)). Conceptually Quicksort is a divide and conquer algorithm that
 *partitions an array into sub-arrays around a pivot element, and then sorts the sub arrays with recursive calls.
 * 
 *@Author Sean Edwards
 *@Date 7/17/2021
 */

/*
 *Implementation of QuickSort based upon the version discussed in "Introduction to Algorithms 3rd Edition"  by Cormen, Leiserson, Rivest, & Stein pg 170.
 */
export function quickSort(arr, firstIndex, lastIndex){

    if (firstIndex < lastIndex){

        //Obtain the partition index where a pivot element has previously been relocated to
        let partitionIndex = partition(arr, firstIndex, lastIndex);

        //Recursive calls to sort sub-arrays
        quickSort(arr, firstIndex, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, lastIndex);
    }
}

/*
 *Partitions the array into sub-arrays by utilizing a pivot element determine which partition to 
  *place a compared element.
 */
export function partition(arr, firstIndex, lastIndex){
    let pivotElement = arr[lastIndex];
    let i = firstIndex - 1;

    //Rearrange the array based on the pivot element.
    for(let j = firstIndex; j < lastIndex; j++){

        if(arr[j] <= pivotElement){

            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i+1, lastIndex);
    return (i+1);
}

//Simple swap function to exchange two elements in an array
export function swap(arr, i, j){
    let swapVal = arr[i];
    arr[i] = arr[j];
    arr[j] = swapVal;
}

/*
 *Implementation of a randomized partition version of QuickSort based upon the version discussed in 
 *"Introduction to Algorithms 3rd Edition"  by Cormen, Leiserson, Rivest, & Stein pg 179. This utilizes
 *a randomized value to determine the partition indices.
 */
export function randomPartitionQuickSort(arr, firstIndex, lastIndex){
    if(firstIndex < lastIndex){
        let partitionIndex = randomPartition(arr, firstIndex, lastIndex);

        randomPartitionQuickSort(arr, firstIndex, partitionIndex - 1);
        randomPartitionQuickSort(arr, partitionIndex + 1, lastIndex)
    }
}

/*
 *Function to obtain the randomized partition index, utilizes a getRandomInt function to generate an
 *index value between the first (inclusive) and last(exclusive) indices Once obtained the randomized
 *value is passed to the partition function, returning the partition index of the randomized value.
 */
export function randomPartition(arr, firstIndex, lastIndex){
    let i = getRandomInt(firstIndex, lastIndex);
    swap(arr, lastIndex, i);
    
    return partition(arr, firstIndex, lastIndex);
}

//Generates a random number based on a provided inclusive min value and exclusive max value.
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min) + min));
}
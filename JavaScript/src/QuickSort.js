export function quickSort(arr, firstIndex, lastIndex){
    
    if (firstIndex < lastIndex){
        let partitionIndex = partition(arr, firstIndex, lastIndex);

        quickSort(arr, firstIndex, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, lastIndex);
    }
}

export function partition(arr, firstIndex, lastIndex){
    let pivotElement = arr[lastIndex];
    let i = firstIndex - 1;

    for(let j = firstIndex; j < lastIndex; j++){
        if(arr[j] <= pivotElement){
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i+1, lastIndex);
    return (i+1);
}

export function swap(arr, i, j){
    let swapVal = arr[i];
    arr[i] = arr[j];
    arr[j] = swapVal;
}
/*
JavaScript Algorithms and Data Structures Masterclass
Quick Sort
*/

const pivotHelper = (arr) => {
  let index = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[0]) {
      index++;
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  if(index > 0) {
    let holder = arr[0];
    arr[0] = arr[index];
    arr[index] = holder;
  }
  return index;
}

const quickSort = (arr) => {
let pivot = pivotHelper(arr);
pivotHelper(arr);
console.log('here is array after pivotHelper: ' + arr);
if(arr.slice(0, pivot).length > 2 && arr.slice(pivot + 1).length > 2) {
  return quickSort(arr.slice(0, pivot)).concat(arr[pivot], quickSort(arr.slice(pivot + 1)));
}
if(arr.slice(0, pivot).length <= 2 && arr.slice(pivot + 1).length > 2) {
  return arr.slice(0, pivot).concat(arr[pivot], quickSort(arr.slice(pivot + 1)));
}
if(arr.slice(0, pivot).length > 2 && arr.slice(pivot + 1).length <= 2) {
  return quickSort(arr.slice(0, pivot)).concat(arr[pivot], arr.slice(pivot + 1))
}
return arr.slice(0, pivot).concat(arr[pivot], arr.slice(pivot + 1));
}
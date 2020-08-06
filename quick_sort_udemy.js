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
  console.log('here is arr: ' + arr);
  return index;
}
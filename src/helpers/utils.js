export const shuffle = (arr) => {
  let m = arr.length, t, i;
  
  while (m) {
    i = Math.floor(Math.random() * m--);
    // console.log(i, 'i');
    t = arr[m];
    // console.log(t, 't');
    arr[m] = arr[i];
    // console.log(arr[m], 'arr[m]');
    arr[i] = t;
    // console.log(arr[i], 'arr[i]')
  }
  return arr;
}
/**
 思路:
 1. 构造一个大顶堆(或小顶堆).
 2. 交换根结点和最后一个叶子结点,然后删除交换后的叶子结点
 3. 此时形成了一个新的二叉树,重复步骤1直到最后排序完成.
*/
var arr = new Array(49,38,65,97,76,13,27,49,55,04);

function adjustHeap(arr,i,length) {
   var temp = arr[i];
   for (let k = 2 * i +1; k < length; k = 2 * k + 1){
       if (k+1 < length && arr[k]<arr[k+1]) {
           k++;
       }     
       if (arr[k] > temp) {
           arr[i] = arr[k];
           i = k;
       } else {
           break;
       }
   }
   arr[i] = temp;
}

function heapSort(arr) {
    var length = arr.length;
    for (let i = length/2 - 1; i >= 0; i--){
        adjustHeap(arr,i,length);
    }
    for (let j = arr.length - 1; j >0; j--) {
        swap(arr,0,j);
        adjustHeap(arr,0,j);
        console.log(arr);
    }
}

heapSort(arr);

alert(arr);
/**
 思路:
 1. 构造一个大顶堆(或小顶堆).
 2. 交换根结点和最后一个叶子结点,然后删除交换后的叶子结点
 3. 此时形成了一个新的二叉树,重复步骤1直到最后排序完成.
*/
var arr = new Array(49,38,65,97,76,13,27,49,55,04);

function adjustHeap(arr,i,length) {
    var left;
    var right;
    var j;
    var temp = arr[i];
    while ((left = 2 * i + 1) <= length) {
        right = left + 1;
        j = left; // 保存左结点
        if (j < length && arr[left] < arr[right]) {
            j++;
        }
        if (arr[i] < arr[j]){
            swap(arr,i,j);
        } else {
            break;
        }
        i = j;
    }
}

function heapSort(arr) {
    var length = arr.length - 1;
    for (let i = length/2 - 1; i >= 0; i--){
        adjustHeap(arr,i,arr.length);
    }
    while (length >= 0) {
        swap(arr,0,length--);
        adjustHeap(arr,0,length);
        console.log(arr);
    }
}

heapSort(arr);

alert(arr);
/**
 思路:利用了完全二叉树的性质
 1. 构造一个大顶堆(或小顶堆).
 2. 交换根结点和最后一个叶子结点,然后删除交换后的叶子结点
 3. 此时形成了一个新的二叉树,重复步骤1直到最后排序完成.
*/
var arr = new Array(49,38,65,97,76,13,27,49,55,04);

function adjustHeap(arr,i,length) {
   var temp = arr[i];
   // 比较难理解的是k = 2 * k + 1,其实这是下一次循环,需要比较的叶节点的初始位置
   for (let k = 2 * i +1; k < length; k = 2 * k + 1){
       // 如果同级子节点左子树小于右子树,就用右子树和父节点作比较
       if (k+1 < length && arr[k]<arr[k+1]) {
           k++;
       }     
       // 发现右子树大于父节点,就交换,否则不用调整
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
    // 从第一个非叶子结点开始构造顶堆
    for (let i = length/2 - 1; i >= 0; i--){
        adjustHeap(arr,i,length);
        console.log(arr);
    }
    // 交换顶部元素和最后一个元素,然后重新调整堆
    for (let j = arr.length - 1; j >0; j--) {
        swap(arr,0,j);
        adjustHeap(arr,0,j);
        // console.log(arr);
    }
}

heapSort(arr);

alert(arr);
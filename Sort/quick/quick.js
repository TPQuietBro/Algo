
var arr = new Array(49,38,65,97,76,13,27,49,55,04);

function pivot(arr,left,right) {
    var key = arr[right]; // 取最后一个值作为对比值(待优化)
    var index = right; // 记录右侧交换的值
    while (left < right) {
        // 如果left位置的元素大于key就交换
        while (left < right && arr[left] <= key){
            left ++;
        }
        // 如果right位置的元素小于key就交换
        while (left < right && arr[right] >= key){
            right --;
        }
        swap(arr,left,right);
    }
    // 最后交换left和key的位置
    swap(arr,left,index);
    return left;
}

function quickSort(arr,left,right) {
    if (left >= right) {
        return;
    }
    var pivotIndex = pivot(arr,left,right);
    quickSort(arr,left,pivotIndex - 1);
    quickSort(arr,pivotIndex + 1,right);
}

quickSort(arr,0,arr.length - 1);
alert(arr);
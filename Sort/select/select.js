
/*
选择排序的思想是先找出一个极值,然后从后面序列的元素中再继续找极值,如此反复,完成排序.
*/
var arr = new Array(49,38,65,97,76,13,27,49,55,04);
var min;
for (let j = 0; j < arr.length; j++) {
    min = j;
    for (let i = j + 1; i < arr.length; i++){
        if (arr[min] > arr[i]) {
            min = i;
            swap(arr,min,j);
        }    
    }
}
alert(arr);
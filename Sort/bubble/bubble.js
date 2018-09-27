

/*
冒泡排序的核心思想是,先找到最大或者最小的那个,排在最后面,然后剩下的序列继续找,重复这个过程,
所以在内循环中j < arr.length - 1 - i,因为找到的极值,没必要再判断了.
平均时间复杂度为O(n^2).
*/

var arr = new Array(49,38,65,97,76,13,27,49,55,04);
alert(arr);
var length = arr.length;
for (var i = 0;i < length;i++){
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j]>arr[j+1]) {
            swap(arr,j,j+1);
        }
    }
}
alert(arr);
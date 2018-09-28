/*
shell排序和直接插入排序区别在于,不需要遍历所有的元素然后进行插入,而是通过一个增量,
对增量范围内的数组进行插入排序,最后直到增量为1的时候停止.
时间复杂度为O(n^3/2)~O(n^2)
稳定性:不稳定
*/
var arr = new Array(49,38,65,97,76,13,27,49,55,4);
//增量初始值数组长度一半
var hb = parseInt(arr.length / 2);
//每次外循环hb的值就为之前的1/2
for (hb; hb > 0; hb = parseInt(hb / 2)) {
    //内循环从hb开始
    for(let i = hb; i < arr.length; i++){
        //设置一个临时变量用来比较
        var k = i;
        // 从减去增量的值开始比较
        while(k-hb >= 0 && arr[k] < arr[k-hb]){
            swap(arr,k,k-hb);
            //当前
            k -= hb;
        }
    }
}
alert(arr);

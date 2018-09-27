
function findLoops(number) {
    var count = 1;
    var temp = parseInt(number / 10);
    while (temp != 0) {
        temp = parseInt(temp / 10);
        count ++;
    }
    return count;
}
function findMaxNumber(array){
    var max;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) {
            max = array[i + 1];
        } else {
            max = array[i];
            swap(array,i,i + 1);
        }
    }
    return max;
}

var arr = new Array(49,38,65,97,76,13,27,49,55,04);
// var loops1 = findLoops(101);
// var loops2 = findLoops(11);
// var loops3 = findLoops(1);
// var loops4 = findLoops(3232);
var max = findMaxNumber(arr);
var loops = findLoops(max);
// 创建一个临时数组用来保存基数
var tempArray = new Array();
var lenth = arr.length;
// 这里采用从个位开始的方式
for (let i = 0; i < loops; i++) {
    var bucket = new Array();
    for (let j = 0; j < length; j++) {
        // 找到位数
        var rowIndex = parseInt(arr[j] / Math.pow(10,i))%10;
        
    }
}

// alert(max);
// alert(loops1 + "," + loops2 + "," + loops3 + "," + loops4);
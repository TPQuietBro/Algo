
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

function findPostion(number,loop) {
    return parseInt(number / Math.pow(10,loop))%10;
}

function tempTwoArray(rowLength,colLength) {
    var arr =  new Array(rowLength);   //表格有10行
    for(var i = 0;i < arr.length; i++){
        arr[i] = new Array(colLength);    //每行有10列
    }
    return arr;
}

function sort(arr,loop) {
    for (let j = 0; j < arr.length; j++) {
        // 找到位数
        var rowIndex = findPostion(arr[j],loop);
        for (let index = 0; index < 20; index++) {
            if (tempArray[rowIndex][index] == null){
                tempArray[rowIndex][index] = arr[j];
                break;
            } 
        }
    }
    var index = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            if (tempArray[i][j] != null) {
                arr[index] = tempArray[i][j];
                tempArray[i][j] = null;
                index++;
            }
        }
    }
}

var arr = new Array(49,38,65,97,76,13,27,49,55,04);
var max = findMaxNumber(arr);
var loops = findLoops(max);
// 创建一个临时数组用来保存基数
var tempArray = tempTwoArray(10,loops);
// 这里采用从个位开始的方式
for (let i = 0; i < loops; i++) {
    sort(arr,i);
}
alert(arr);
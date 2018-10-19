// 合并
function merge(arr,start,end,mid) {
    var tempArray = new Array();
    var i = start;
    var j = mid + 1;
    var k = 0;
    console.log("start1:"+start+",end1:"+end+",mid1:"+mid);
    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            tempArray[k++] = arr[i++];
        } else {
            tempArray[k++] = arr[j++];
        }
    }
    while (i <= mid){
        tempArray[k++] = arr[i++];
    }

    while (j <= end){
        tempArray[k++] = arr[j++];
    }

    for (let i = 0; i< k; i++) {
        arr[start + i] = tempArray[i];
    }
    console.log(tempArray);
}
// 拆分
function split(arr,start,end) {
    console.log("start:"+start+",end:"+end+",mid:"+mid);
    if (arr == null || start >= end) {
        return;
    }

    var mid = parseInt((start + end) * 0.5);
    console.log("start1:"+start+",end:"+mid);
    split(arr,start,mid);
    console.log("start2:"+(mid + 1)+",end:"+end);
    split(arr,mid + 1,end);
    console.log("start3:"+start+",end:"+end+",mid:"+mid);
    merge(arr,start,end,mid);
}

var arr = new Array(49,38,65,97,76,13,27,49,55,04);
split(arr,0,arr.length - 1);
alert(arr);

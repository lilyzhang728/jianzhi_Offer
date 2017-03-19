/*请设计一个复杂度为O(n)的算法，计算一个未排序数组中排序后相邻元素的最大差值。
给定一个整数数组A和数组的大小n，请返回最大差值。保证数组元素个数大于等于2小于等于500。
*/
function findMaxDivision(arr,n){
	var max = arr[0],
		min = arr[0];
	for(var i=0;i<arr.length;i++){
		if (max<arr[i]) {
			max=arr[i];
		}
		if (min>arr[i]) {
			min=arr[i];
		}
	}

	var pool=new Array(max-min+1);//生成桶
	for(var j=0;j<arr.length;j++){
		pool[arr[i]-min]++;
	}
	var count=0,	//连续空桶数
		max=0;
	for(var k=0;k<pool.length;k++){
		if (pool[k]==0) {
			count++;
		}else{
			max<count;
			max=count;
			count=0;
		}
	}
	return max+1;
}
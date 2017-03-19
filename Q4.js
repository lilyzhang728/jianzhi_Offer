/*把空格替换成指定字符*/
function replaceSpace(str){
	var arr=str.split(" ");
	var result=arr[0].toString();
	for(var i=1;i<arr.length;i++){
		result=result+"%20"+arr[i].toString();
	}
	return result;
}

replaceSpace("hello world")
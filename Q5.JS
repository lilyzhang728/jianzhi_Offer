	/*	function printListFromTailToHead(head){
			var result=[];
			function print(head){
				if (head==null) {return false;}
				if (head.next===null) {result.push(head.val);}
				else{
					printListFromTailToHead(head.next);
					result.push(head.val);
				}
			}
			return result;
		}*/

function printListFromTailToHead(head){
	if (head==null) {return []}
	var cur = head,
		arr =[];
	while(cur!=null){
		arr.push(cur.val);
		cur = cur.next;
	}
	arr.reverse();
	return arr;
}

printListFromTailToHead({67,0,24,58})
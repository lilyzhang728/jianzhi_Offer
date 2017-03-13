	function reOrderArray(array){
		var head=0,
			tail=array.length-1,
			temp;
		if (array===null || array.length===0) {return null;}
		while(head<tail){
			while(head<tail && (array[head] & 1)!==0){
				head++;
			}
			while(head<tail && (array[tail] & 1)===0){
				tail--;
			}
			if (head<tail) {
				temp=array[head];
				array[head]=array[tail];
				array[tail]=temp;
			}

		}
		return array;

	}
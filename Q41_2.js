	var head=1,
		tail=2,
		mid=Math.floor((sum+1)/2),
		result=[],
		sumPort=head+tail;
		if (sum<3) {return [];}
	outer:
	while(head<mid){
		if (sumPort === sum) {
			result.push(array(head,tail));
			++head;
			tail=head+1;
			sumPort=head+tail;
			continue outer;
		}
		while(sumPort>sum && head<mid){
			sumPort -= head;
			head++;

			if (sumPort === sum) {
				result.push(array(head,tail));
				++head;
				tail=head+1;
				sumPort=head+tail;
				continue outer;
			}
		}

		sumPort += ++tail;

	}
	return result;


	function array(head,tail){
		var res = [];
		for(var i=head;i<=tail;i++){
			res.push(i);
		}
		return res;
	}
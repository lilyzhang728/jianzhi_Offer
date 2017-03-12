		function minNumberInRotateArray(rotateArray){
			var head=0,
				tail=rotateArray.length-1;
			if (rotateArray==null||rotateArray.length===0) {return null;}
			if (rotateArray.length===1) {return rotateArray[0];}
			//长度>=2，非顺序或全相等
			while(rotateArray[head]>=rotateArray[tail]){
				if (tail-head===1) {return rotateArray[tail];}
				var mid = Math.floor((head+tail)/2);
				if (rotateArray[head]<rotateArray[mid]) {
					head=mid;
				} else if (rotateArray[head]>rotateArray[mid]) {
					tail = mid;
				} else{head++}
			}
			return rotateArray[0];
		}
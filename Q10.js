		function NumberOf1(n){
			var num = 0;

			while(n){
				n=(n-1)&n;
				num++;
			}

			return num;
		}
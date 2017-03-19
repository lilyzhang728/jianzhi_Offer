	function reConstructBinaryTree(pre, vin){
		if (pre==null || vin==null || pre.length!=vin.length) {return null;}
		return binarytree(pre,vin);

		function binarytree(pre,vin){
			var root = new TreeNode(pre[0]);
			//判断数组长度是否为1 且此时 两个数组是不是匹配	
			if (pre.length==1 && vin.length==1 && pre[0]===vin[0]) {return root;}
			if (pre.length==1 && vin.length==1 && pre[0]!==vin[0]) {return null;}
				
			var rootIndex = vin.indexOf(pre[0]);
			var left_vin=vin.slice(0,rootIndex),
				right_vin=vin.slice(rootIndex+1),
				left_pre=pre.slice(1,left_vin.length+1),
				right_pre=pre.slice(left_vin.length+1);
			root.left=reConstructBinaryTree(left_pre,left_vin);
			root.right=reConstructBinaryTree(right_pre,right_vin);
			return root;
		}
	}
function position(arr,sum){
  var head = 0,
      tail = arr.length-1;
  if(arr.length===1){
    return false;
  }
  while(head<tail){
    if((arr[head]+arr[tail])>sum){
      tail = tail-1;
    } else if((arr[head]+arr[tail])<sum){
      head = head + 1;
    } else{
      return [head,tail];
    }
  }
  return false;
}
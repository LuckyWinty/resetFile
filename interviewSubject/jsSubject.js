//高精度运算
function preciseAdd(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m+num2*m)/m;
}

function preciseSub(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=Math.max(len1,len2);
	var m=Math.pow(10,len);
	return (num1*m-num2*m)/m;
}

function preciseMul(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len1+len2;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1*num2)/Math.pow(10,len);
}

function preciseDiv(num1,num2){
	var len1;
	var len2;
	if(num1.toString().indexOf('.')!=-1){
		len1=num1.toString().split('.')[1].length;
	}else{
		len1=0;
	}
	if(num2.toString().indexOf('.')!=-1){
		len2=num2.toString().split('.')[1].length;
	}else{
		len2=0;
	}
	var len=len2-len1;
	num1=Number(num1.toString().replace('.',""));
	num2=Number(num2.toString().replace('.',""));	
	return (num1/num2)*Math.pow(10,len);
}
//千位分隔符
function num(num){
	if(typeof num!='number'){
		return;
	}
	num+='';
	if(num.indexOf('-')==0){
		return '-'+numChange(num.slice(1));
	}
	if(num.indexOf('.')!=-1){
		return numChange(num.split('.')[0])+'.'+num.split('.')[1];
	}else{
		return numChange(num);
	}
}
function numChange(num){
	var l=num.length;
	var newNum='';
	while(l>3){
		newNum=','+num.substring(l-3,l)+newNum;
		l=l-3;
	}
	newNum=num.substring(0,l)+newNum;
	return newNum;
}
//扩展对象方法
function cloneObj(oldObj) { //复制对象方法
	if (typeof(oldObj) != 'object') return oldObj;
	if (oldObj == null) return oldObj;
	var newObj = new Object();
	for (var i in oldObj)
		newObj[i] = cloneObj(oldObj[i]);
	return newObj;
};
function extendObj() { //扩展对象
	var args = arguments;
	if (args.length < 2) return;
var temp = cloneObj(args[0]); //调用复制对象方法
for (var n = 1; n < args.length; n++) {
	for (var i in args[n]) {
		temp[i] = args[n][i];
	}
}
return temp;
}
//快速排序
function quickSort(arr,left,right){
	if(left<right){
		var key=arr[left];
		var low=left;
		var high=right;

		while(low<high){
			while(low<high&&arr[high]>key){
				high--;
			}
			arr[low]=arr[high];
			while(low<high&&arr[low]<key){
				low++;
			}
			arr[high]=arr[low];
		}
		arr[low]=key;
		arguments.callee(arr,left,low-1);
		arguments.callee(arr,low+1,right);
	}
}
//树的遍历
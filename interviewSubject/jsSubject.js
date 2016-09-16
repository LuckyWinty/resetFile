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
//希尔排序
function shellSort(){
	vararr=[49,38,65,97,76,13,27,49,55,04],
	len=arr.length;
	for(varfraction=Math.floor(len/2);fraction>0;fraction=Math.floor(fraction/2)){
		for(vari=fraction;i<len;i++){
			for(varj=i-fraction;j>=0&&arr[j]>arr[fraction+j];j-=fraction){
				vartemp=arr[j];
				arr[j]=arr[fraction+j];
				arr[fraction+j]=temp;
			}
		}
	}
	console.log(arr);
}
//树的遍历
/*递归*/
//先序
function preTraversal(node){
	if(node){
		console.log(node.value);
		arguments.callee(node.left);
		arguments.callee(node.right);
	}
}
//中序
function orderTraversal(node){
	if(node){
		arguments.callee(node.left);
		console.log(node.value);
		arguments.callee(node.right);
	}
}
//后序
function postTraversal(node){
	if(node){
		arguments.callee(node.left);
		arguments.callee(node.right);
		console.log(node.value);
	}
}
/*非递归*/
function preTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			node=stack.pop();
			console.log(node.value);
			if(node.right){
				stack.push(node.right);
			}
			if(node.left){
				stack.push(node.left);
			}
		}
	}else{
		console.log("Empty Tree!")
	}
}
function orderTraversalN(node){
	var stack=[];
	while(stack.length!=0||node){
		if(node){
			stack.push(node);
			node=node.left;
		}else{
			node=stack.pop();
			console.log(node.value);
			node=node.right;
		}
	}
}
function postTraversalN(node){
	var stack=[];
	if(node){
		stack.push(node);
		while(stack.length!=0){
			var tmp=stack[stack.length-1];
			if(tmp.left&&node!=tmp.left&&node!=tmp.right){
				stack.push(tmp.left);
			}else if(tmp.right&&node!=tmp.right){
				stack.push(tmp.right);
			}else{
				console.log(stack.pop().value);
				node=tmp;
			}
		}
	}
}
//判断重复字符串个数
function countChar(str) {
	var count={};
	str.split('')
	.reduce(function(pre,cur){
		pre[cur] ? pre[cur]++:pre[cur]=1;
		return pre;
	},count);
	return count;
}
//去除数组重复字符
function unique(arr){
	var unique={};
	var uniqueArr=new Array();
	arr.forEach(function(item,index,array){
		if(!unique[item]){
			unique[item]=item;
			uniqueArr.push(item);
		}
	})
	return uniqueArr;
}
//十六进制随机颜色生成
function color(){
	var value=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
	var color='#';
	for(var i=0;i<6;i++){
		color+=value[Math.round(Math.random()*15)];
	}
	return color;
}
//①生成一个数组，数组的值为从0到100
function newArr(){
	var arr=new Array(100);
	return arr.fill('temp').map(function(item,index,array){
		return index;
	})
	//方法二
// 	var a = Array(100).join(',').split(',').map(function(item, index) {
// 　　return index;
// });
}
//随机打乱一个数组的顺序
function randomArr(arr){
	var temp='';
	var index='';
	for(var i=0;i<arr.length;i++){
		temp=arr[i];
		do{
			index=Math.round(Math.random()*arr.length);
		}while(index>=arr.length)
		arr[i]=arr[index];
		arr[index]=temp;
	}
}
//二分查找
function halfFind(value,arr){
	var low=0;
	var high=arr.length-1;

	while(low<high){
		var min=Math.round((high-low)/2);
		if(value==arr[min]){
			return true;
		}else if(value>arr[min]){
			low=min+1;
		}else{
			high=min-1;
		}
	}
	return false;
}
//编写一个方法 求一个字符串的字节长度
//假设：一个英文字符占用一个字节，一个中文字符占用两个字节
function GetBytes(str){
	var len = str.length;
	var bytes = len;
	for(var i=0; i<len; i++){
		if (str.charCodeAt(i) > 255) bytes++;
	}
	return bytes;
}
//JavaScript中检测一个变量是一个String类型
//String类型有两种生成方式：
//(1)Var str = “hello world”;
//(2)Var str2 = new String(“hello world”);
function IsString(str){
	return (typeof str == "string" || str.constructor == String);
}
//JavaScript中如何对一个对象进行深度clone
function cloneObject(o) {
	if(!o || 'object' !== typeof o) {
		return o;
	}
	var c = 'function' === typeof o.pop ? [] : {};
	var p, v;
	for(p in o) {
		if(o.hasOwnProperty(p)) {
			v = o[p];
			if(v && 'object' === typeof v) {
				c[p] = Ext.ux.clone(v);
			}
			else {
				c[p] = v;
			}
		}
	}
	return c;
};
 //请实现，鼠标点击页面中的任意标签，alert该标签的名称．（注意兼容性）
// <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html xmlns="http://www.w3.org/1999/xhtml">
// <head>
// <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
// <title>鼠标点击页面中的任意标签，alert该标签的名称</title>
// <style>
// div{ background:#0000FF;width:100px;height:100px;}
// span{ background:#00FF00;width:100px;height:100px;}
// p{ background:#FF0000;width:100px;height:100px;}
// </style>
// <script type="text/javascript">
// document.onclick = function(evt){
// var e = window.event || evt;
// var tag = e["target"] || e["srcElement"];
// alert(tag.tagName);
// };
// </script>
// </head>
// <body>
// <div id="div"><span>SPAN</span>DIV</div>
// <span>SPAN</span>
// <p>P</p>
// </body>
// </html>

//回文字符串
/*c++判断
#include<iostream>
#include<string.h>
using namespace std;

int c[1000][1000];
char str1[1000];
char str2[1000];

void func(int m,int n){
	if(m<0||n<0){
		return;
	}
	for(int i=0;i<m;i++){
		for(int j=0;j<n;j++){
			c[i][j]=0;
		}
	}
	int count=0;
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		if(str[i]==str[j]){
    			if(i==0&&j==0){
    				c[i][j]=1;
    			}else{
    				c[i][j]=c[i-1][j-1];
    			}
    		}else{
    			c[i][j]=0;
    		}
    	}
    }
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		if(c[i][j]>count){
    			count=c[i][j];
    		}
    	}
    }
    cout<<count<<endl;
}
*/
int main(){
	char s;
	while(cin>>s&&s){
		str1=s;
		m=strlen(str1);
		for(int i=m-1;i>=0;i--){
			str2[i]=str1[i];
		}
		func(m,m);
	}
}
/*原生JS判断复选框是否被选中和获取下拉框的值：
<body>
    <input type="checkbox" id="checkbox" checked="check"></input>
    <select id="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
*/
    <script type="text/javascript">
        console.log(document.getElementById('checkbox').checked);
        var se=document.getElementById('select');
        se.addEventListener('change',function(){
            console.log(se.options[se.selectedIndex].value);
            console.log(se.options[se.selectedIndex].text);
        },false);
    </script>

// /*
// 原生JS判断单选框是否被选中和获取值：
// <!--html-->
// <form id="list" method="post" action="">
// <input type="radio" name="user" value="1">1
// <input type="radio" name="user" checked="checked" value="2">2
// <input type="radio" name="user" value="3">3
// </form>
// */
<script language="javascript">
function usubmit(action){//获取radio的value的方法
var radios = document.getElementById("list").user;//获取id为list下的所有name为user的值的集合
for(var i=0;i<radios.length;i++){//循环值得集合
if(radios[i].checked){//通过checked属性判断是否被选中
var userid = radios[i].value//将被选择的radio的值赋给变量userid
}
}
alert(userid)//弹出被选中的radio的值
}

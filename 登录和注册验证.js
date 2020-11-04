  // JavaScript Document
   window.onload=initAll;
var idd=new Array();
var iddpass=new Array();
iddpass[0]="123";
idd[0]="晨翔";

var number=1;
function initAll(){
	var txt=document.getElementsByTagName("button");
	
	for(var i=0;i<txt.length;i++){
		txt[i].addEventListener("click",clickButton,false);
	}

}
function clickButton(){
	if(this.value=="退出"){
		alert("您即将退出此网站")
		window.opener=null;
		window.open('','_self');
		window.close();
		}
	else if(this.value=="登录"){
		var flag;
        var name=document.getElementById("firstname").value;
         flag=check(name,document.getElementById("password").value);
		if(flag){
			alert("欢迎您，尊敬的"+name+"客户！");		
		}
		else{
			alert("抱歉，您所输入的账号无效！");	
		}
	}
    else if(this.value=="注册"){
	alert("很抱歉，当前网站正在维护中，您暂时无法注册！");	
	}
}
function check(name,pass){
	for(var i=0;i<number;i++){
	if(name==idd[i]&&pass==iddpass[i]){
		return true;
		}
	}
	return false;
}

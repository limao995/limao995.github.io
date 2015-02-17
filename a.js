var s;
var e;
var r;
oScript.src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
do{
s = prompt("開始樓層","1");
}while(isNaN(s)||s<=0);
do{
e = prompt("結束樓層","");
}while(isNaN(e)||e<=0);
k=parseInt(Math.random()*(e-s+1))+parseInt(s);
alert(k);
if(window.location.href=="http://guild.gamer.com.tw/singleACMsg.php?sn=*"){
var sn = "replyMsg" + getUrlVars()["sn"];
document.getElementById(sn).value="中獎樓層:"+k;
}

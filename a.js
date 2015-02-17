var s;
var e;
var r;
do{
s = prompt("開始樓層","1");
}while(isNaN(s)||s<=0);
do{
e = prompt("結束樓層","");
}while(isNaN(e)||e<=0);
k=parseInt(Math.random()*(e-s+1))+parseInt(s);
alert(k);

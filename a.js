var s;
var e;
var r;
do{
s = prompt("�}�l�Ӽh","1");
}while(isNaN(s)||s<=0);
do{
e = prompt("�����Ӽh","");
}while(isNaN(e)||e<=0);
k=parseInt(Math.random()*(e-s+1))+parseInt(s);
alert(k);
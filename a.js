var s;
var e;
var r;
do{
s = prompt("¶}©l¼Ó¼h","1");
}while(isNaN(s)||s<=0);
do{
e = prompt("µ²§ô¼Ó¼h","");
}while(isNaN(e)||e<=0);
k=parseInt(Math.random()*(e-s+1))+parseInt(s);
alert(k);
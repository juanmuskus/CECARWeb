function promedio(n)
{
var p=0;
for (var i=0; i<10;i++)
  p=parseInt(n[i])+p;
  return (p/10);    
}
function llenar()
{
    var num=[];
    document.getElementById("res").innerHTML="Resultado: ";
     for (var i=1; i<11;i++){
         var tem=document.getElementById("num"+i.toString()).value;
       num.push(tem);
    }
     // mostrar array
    for (var i=0; i<10;i++)
    document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+"<br>"+num[i];
    // Mostrar mayor, menor y promedio
    document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+"<br> Mayor: "+Math.max.apply(null, num);
    document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+"<br> Menor: "+Math.min.apply(null, num);
    document.getElementById("res").innerHTML=document.getElementById("res").innerHTML+"<br> Promedio: "+promedio(num).toFixed(2);
}
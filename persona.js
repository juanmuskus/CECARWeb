// archivo persona.js
var per={
    id:null,
    nom:null,
    apel:null,
    fecha:new Date(),
    dir:null,
    cel:null,
    mayor:function()
    {
        var ano= new Date(this.fecha);
        var ano_actual=new Date();
         if ((ano_actual.getFullYear()-ano)<18)
           var texto='Mayor de edad';
           else
            texto='No es mayor de edad';
            return texto;
    }
}
 function Guardar()
 {
     var pers=per;
     var texto='';
     var i=0;
     pers.id=document.getElementById('id').value;  
     pers.nom=document.getElementById('nom').value;
     pers.apel=document.getElementById('apel').value;
     pers.fecha=document.getElementById('fecha').value;
     pers.dir=document.getElementById('dir').value;
     pers.cel=document.getElementById('cel').value;
      // mostrar los atributos del objeto pers
      for (var indice in pers) {
        if (i<6)  
        texto += pers[indice]+"<br>";
        i++;
      }
      document.getElementById('obj').innerHTML=texto+'<br>'+pers.mayor();
}

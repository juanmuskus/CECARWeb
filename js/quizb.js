// objeto para la IES
var escuela={
    id:null,
    nom:null,
    cant:null,
    pres:null,
    tipo:null,
    distri:function()
    {
            return (this.pres/this.cant);
    }
}
 function Guardar()
 {
     var IES=escuela;
     var texto='';
     var i=0;
     IES.id=document.getElementById('id').value;  
     IES.nom=document.getElementById('nom').value;
     IES.cant=document.getElementById('cant').value;
     IES.pres=document.getElementById('pre').value;
     IES.tipo=document.getElementById('tipo').value;
         // mostrar los atributos del objeto IES
      for (var indice in IES) {
        if (i<5)  
        texto += IES[indice]+"<br>";
        i++;
      }
      document.getElementById('res').innerHTML='Información IES'+'<br>'+texto+'<br> Presupuesto por estudiante: '+IES.distri().toFixed(2);
}

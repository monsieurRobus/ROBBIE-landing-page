var fecha1 = Date.now();
var fecha2 = Date.UTC(2017,10,6,13,0);
var resultado = fecha2 - fecha1;
var segundos,minutos,horas,dias,mes;
var sId,mId,hId,dId;
fecha1 = Date.now();
fecha2 = Date.UTC(2017,10,6,13,0);
resultado = ((fecha2 - fecha1)/1000);
dias = Math.floor(resultado/86400);
resultado = resultado - dias*86400;
horas = Math.floor(resultado/3600);
resultado = resultado - horas*3600;
minutos = Math.floor(resultado/60);
resultado = resultado - minutos*60;
segundos = Math.floor(resultado);
console.log(dias+" "+horas+" "+minutos+" "+segundos);
sId = document.getElementById('segundos');
mId = document.getElementById('minutos');
hId = document.getElementById('horas');
dId = document.getElementById('dias');
dId.innerHTML = dias;
hId.innerHTML = horas;
mId.innerHTML = minutos;
sId.innerHTML = segundos;

setInterval( () => {
      fecha1 = Date.now();
      fecha2 = Date.UTC(2017,10,6,13,0);
      resultado = ((fecha2 - fecha1)/1000);
      dias = Math.floor(resultado/86400);
      resultado = resultado - dias*86400;
      horas = Math.floor(resultado/3600);
      resultado = resultado - horas*3600;
      minutos = Math.floor(resultado/60);
      resultado = resultado - minutos*60;
      segundos = Math.floor(resultado);
      console.log(dias+" "+horas+" "+minutos+" "+segundos);
      dId.innerHTML = dias;
      hId.innerHTML = horas;
      mId.innerHTML = minutos;
      sId.innerHTML = segundos;
    }
  , 1000 );

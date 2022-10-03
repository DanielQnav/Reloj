(function(){

   // Creamos una funcion que se encarga de mostrar la hora actual
   var actualizarHora = function(){

    // Creamos las variables para rellenar la pagina html. Tiene que ser una variable por cada elemento del reloj.
    // La variable ampm se le agrega el valor mas adelante debido a que varia.
    // Estas variables solo nos traen la informacion
    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diasemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        año = fecha.getFullYear();

    // Ahora vamos a mostrar la infomracion usando los parrafos en HTML y debemos acceder a cada uno de ellos
    // Accedemos a su ubicaion en HTML y la guardamos en una variables, mediante la obtencion del elemento por el ID

        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiasemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMEs = document.getElementById('mes'),
            pAño = document.getElementById('año');

    // Lo primero que vamos a obtener es el dia de la semana, para eso crearemos un array

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    





   };
   actualizarHora();

}())
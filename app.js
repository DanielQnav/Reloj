(function(){

   // Creamos una funcion que se encarga de mostrar la hora actual
   var actualizarHora = function(){

    /*Creamos las variables para rellenar la pagina html. Tiene que ser una variable por cada elemento del reloj.
    La variable ampm se le agrega el valor mas adelante debido a que varia.
    Estas variables solo nos traen la informacion*/

    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        año = fecha.getFullYear();
       


    /*Ahora vamos a mostrar la infomracion usando los parrafos en HTML y debemos acceder a cada uno de ellos
    Accedemos a su ubicaion en HTML y la guardamos en una variables, mediante la obtencion del elemento por el ID*/

    var pHoras = document.getElementById('horas'),
        pAMPM = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pAño = document.getElementById('año');
       
    
                                                /*Inicio del widget de la fecha*/

    // Lo primero que vamos a obtener es el dia de la semana, para eso crearemos un array
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    /*Ahora mostraremos el dia de la semana en la pantalla debemos acceder a la
     variable, esto nos trae el numero correspondiendo al array*/
        pDiaSemana.textContent = semana[diaSemana];

    //Ahora mostraremos el dia
        pDia.textContent = dia;

    //ahora para el mes usaremos otro array, y replicamos el contenido de la variable como en el día
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    /*Ahora mostraremos el mes en la pantalla debemos acceder a la
     variable, esto nos trae el numero correspondiendo al array*/
        pMes.textContent = meses[mes];

    // Ahora, el año
        pAño.textContent = año;

                                                    /* Fin del widget de la Fecha*/


                                                    /*inicio del widget de la hora*/
    
    /* Primero crearemos un condicional para que el reloj sea de 12 hrs y usar la variable AM-PM*/
    
    if (horas >= 12) {
        horas = horas - 12;
        ampm ='PM';
    }
    else {
        ampm= 'AM';
    }

    /*Ahora haremos que no aparezca la 00:00, sino que diga 12 AM*/

    if (horas == 0) {
        horas = 12;
    }

    /*Ahora debemos mostrar las horas en el HTML, de la misma
    forma como lo hicimos con la fecha*/

    pAMPM.textContent = ampm;
    pHoras.textContent = horas;
    
    if (minutos < 10) { minutos = "0" + minutos}; // Esto es para que los minutos se muestren como "01"  no solo "1"
    pMinutos.textContent = minutos;

    if (segundos < 10) { segundos = "0" + segundos}
    pSegundos.textContent = segundos;

                                                    /*Fin del Widget de la hora*/
   

   };

  

                        /*Por ultimo, haremos que el reloj se vaya actualizando segundo a segundo, para eso creamos 
                        una variable y ejecutamos la funcion y le pedimos que se actualice segundo a segundo*/

   actualizarHora();
   var intervalo = setInterval(actualizarHora, 1000);

}())

/*function(){
    var actualizarCiudad = function(){

    var geo = new Geolocation(),
    ciudad = geo.getCurrentPosition,
    pGeo = document.getElementById('ciudad');

    Pgeo.textContent = geo[ciudad];
    };

    actualizarCiudad();
};*/
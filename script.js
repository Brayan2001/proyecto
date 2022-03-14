const subir_hora = document.querySelector(".boton-hora-arriba");
const subir_minuto = document.querySelector(".boton-minuto-arriba");
const subir_zona = document.querySelector(".boton-am-pm-arriba");

const bajar_hora = document.querySelector(".boton-hora-abajo");
const bajar_minuto = document.querySelector(".boton-minuto-abajo");
const bajar_zona = document.querySelector(".boton-am-pm-abajo");


subir_hora.addEventListener("click", function(){
    hora_string = document.getElementsByClassName("horas")[0].innerHTML;
    var num_hora = parseInt(hora_string);
    document.getElementsByClassName("horas")[0].innerHTML = convertirString(sumarHora(num_hora));
});
subir_minuto.addEventListener("click", function(){
    minuto_string = document.getElementsByClassName("minutos")[0].innerHTML;
    var num_minuto = parseInt(minuto_string);
    document.getElementsByClassName("minutos")[0].innerHTML = convertirString(sumarMinuto(num_minuto));
});
subir_zona.addEventListener("click", function(){
    zona_string = document.getElementsByClassName("am-pm")[0].innerHTML;
    if(zona_string == "AM"){
        document.getElementsByClassName("am-pm")[0].innerHTML = "PM";
    }else{
        document.getElementsByClassName("am-pm")[0].innerHTML = "AM";
    }
});
bajar_zona.addEventListener("click", function(){
    zona_string = document.getElementsByClassName("am-pm")[0].innerHTML;
    if(zona_string == "AM"){
        document.getElementsByClassName("am-pm")[0].innerHTML = "PM";
    }else{
        document.getElementsByClassName("am-pm")[0].innerHTML = "AM";
    }
});

function sumarHora(n){
    if(n < 12){
        return n+1;
    }else{
        return 1;
    }
};
function sumarMinuto(n){
    if(n < 59){
        return n+1;
    }else{
        return 0;
    }
};

bajar_hora.addEventListener("click", function(){
    hora_string = document.getElementsByClassName("horas")[0].innerHTML;
    var num_hora = parseInt(hora_string);
    document.getElementsByClassName("horas")[0].innerHTML = convertirString(restarHora(num_hora));
});
bajar_minuto.addEventListener("click", function(){
    minuto_string = document.getElementsByClassName("minutos")[0].innerHTML;
    var num_minuto = parseInt(minuto_string);
    document.getElementsByClassName("minutos")[0].innerHTML = convertirString(restarMinuto(num_minuto));
});

function restarHora(n){
    if(n == 1){
        return 12;
    }else{
        return n-1;
    }
};
function restarMinuto(n){
    if(n == 0){
        return 59;
    }else{
        return n-1;
    }
};

function convertirString(n){
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
};



/*
Tipos de Sueños.
*/

const peticion = document.querySelector(".peticion");

peticion.addEventListener("click", function(){
    hora_string = document.getElementsByClassName("horas")[0].innerHTML;
    minuto_string = document.getElementsByClassName("minutos")[0].innerHTML;
    zona_string = document.getElementsByClassName("am-pm")[0].innerHTML;

    document.getElementsByClassName("cc1")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 8, 00);
    document.getElementsByClassName("cc2")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 07, 30);
    document.getElementsByClassName("cc3")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 07, 00);
    document.getElementsByClassName("cc4")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 05, 30);
    document.getElementsByClassName("cc5")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 02, 30);
    document.getElementsByClassName("cc6")[0].innerHTML = restarTiempo(parseInt(hora_string), parseInt(minuto_string), zona_string, 00, 20);
});

/* h = horas, m = minutos, z = am o pm, mh = horas a restar, mm = minutos a restar */
function restarTiempo(h, m, z, rh, rm){
    if(h == rh){
        total_horas = 12;
    }else{
        if(h == 12 && m == 0){
            if(z == "AM"){
                z = "PM";
            }else{
                z = "AM";
            } 
        }
        if(h > rh){
            total_horas = h - rh; 
        }else{
            total_horas = h + 12 - rh;
            if(z == "AM"){
                z = "PM";
            }else{
                z = "AM";
            }
        }
    }
    let total_minutos = 0;
    
    if(m == rm){
        m = 0;
    }else{
        if(m >= rm){
            total_minutos = m - rm; 
        }else{
            total_minutos = m - rm + 60;
            if(total_horas == 1){
                total_horas = 12;
            }else{
                total_horas -= 1;
            }
        }
    }

    if(transformarDos(total_horas).length == 1){
        total_horas = "0" + transformarDos(total_horas);
    }
    if(transformarDos(total_minutos).length == 1){
        total_minutos = "0" + transformarDos(total_minutos);
    }
    return total_horas + ":" + total_minutos + " " + z;
};

function transformarDos(n){
    n_string = n + "";
    
    return n_string.substring(n_string.length-2, n_string.length);
}
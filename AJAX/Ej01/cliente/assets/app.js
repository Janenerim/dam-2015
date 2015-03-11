$(function(){
    var $ticker = $('#ticker');

    //Metodo generalista para llamar a ajax.
    //$.ajax();

    /* Forma básica -- no se guarda nada en ningún sitio
        $.ajax('../servidor/generaContenidos.php');
    */
    /*Podemos pasarle un parametro:
    $.ajax('../servidor/generaContenidos.php', {
        data:{
            user : 'Miren',
            pass : '1234'
        }
    });
    */
    /*Podemos decirle que va con el método POST
    $.ajax('../servidor/generaContenidos.php', {
        data:{
            user : 'Miren',
            pass : '1234'
        },
        method: 'POST'
    });
    */
    /*Podemos decirle lo que debe hacer en caso de acierto (success)
    $.ajax('../servidor/generaContenidos.php', {
        data:{
            user : 'Miren',
            pass : '1234'
        },
        method: 'POST',
        success: function(data, status, jqXHR){
            console.log(data);
            console.log(status);
            consoloe.log(ojqXHR);
        }
    });
    */
    /* Podemos decirle que lo "pinte" en un elemento HTML
    $.ajax('../servidor/generaContenidos.php', {
        success: function(data, status, jqXHR){
            $ticker.text(data);
        }
    });
    */
    /*No hacer nunca esto: (ES ASINCRONO!!!)
    var resul = $.ajax('../servidor/generaContenidos.php', {
        success: function(data, status, jqXHR){
            $ticker.text(data);
        }
    });
    //resul es un obj jquery por lo que nunca será vacío así que 
    if(resul){
        //siempres entrará aqui... preguntar por resul.length
        console.log(resul);
    }
    */

    /*en javascript podemos retardar una unica vez una función:
    setTimeout(fn, 1000);
    Y podemos decirle que algo se ejecute cada x tiempo:
    setInterval(fn, 1000);
    */

    var peticionAJAX = function(){
        $.ajax('../servidor/generaContenidos.php', {
            success: function(data, status, jqXHR){
                $ticker.text(data);
            }
        });
    };

    setInterval(peticionAJAX, 1000);

    /*Otra manera de hacer la funcion de peticionAJAX (en este caso) de forma más directa es:
    var peticionAJAX = function(){
        $get('../servidor/generaContenidos.php', null, function(data){
            $ticker.text(data);
        })
    };

    */
});
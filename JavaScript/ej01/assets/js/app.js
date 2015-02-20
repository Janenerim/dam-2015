(function() {
    var validarDNI = function(dni) {
        var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        var minimo = 0;
        var maximo = 99999999;
        var ok = false;

        if (dni.match(/^\d{8}[A-Z]$/)){

        };

        if (parseInt(dni)<=maximo && parseInt(dni)>=minimo){
            if (!(letras[parseInt(dni) % 23] == dni[8])){
                console.log("La letra del DNI no es correcta");
                return false;
            }
        }
        else{
            console.log("El número de DNI no está entre 0 y 99999999");
            return false;
        }
        return true;
    };
    console.log(validarDNI("45671330T") === true);
    console.log(validarDNI("23HSJDJET") === false);
    console.log(validarDNI("45671329E") === true);
    console.log(validarDNI("45671359A") === true);
    console.log(validarDNI("123456789A") === false);
    console.log(validarDNI("999999999A") === false);
    console.log(validarDNI("A") === true);
    console.log(validarDNI(undefined) === false);
    console.log(validarDNI({}) === false);

})();

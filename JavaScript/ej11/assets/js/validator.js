HTMLFormElement.prototype.validate = function(){
 
    var validador = {
        required : function(val){
            ok = false;
            if (val){
                for (var i = val.length -1; i>=0; i--){
                    
                }
            }
            return ok;
        },
        email : function(val){
            ok = false;
            if (val){

            }
            return ok;
        }
    };

    var required = this.querySelectorAll(".required");
    var email = this.querySelectorAll(".email");

    var validar = function(){
        ok = false;
        ok = validador.required(this) && validador.email(this);
        return ok;
    };


    this.addEventListener('submit', validar, false);
};
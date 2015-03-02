window.onload = function(){

    console.log("creando objetos");
    var loaded = false,
        video = document.querySelectorAll('videorep'),
        biniciar = document.getElementById('Iniciar'),
        bpausar = document.getElementById('Pausar'),
        bparar = document.getElementById('Parar'),
        bavanzar = document.getElementById('Avanzar'),
        bretroceder = document.getElementById('Retroceder'),
        binicio = document.getElementById('Inicio'),
        bfin = document.getElementById('Fin'),
        bfullscreen = document.getElementById('FullScreen'),
        bvolumen = document.getElementById('Volumen'),
        bprogreso = document.getElementById('Progreso'),
        playlist = document.querySelectorAll('#tracklist');

    var posvideo = 0;
    var volumen = 0;

    var iniciar = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].play();
        }
    };
    var pausar = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].pause();
        }
    };
    var parar = function(e){
        e.preventDefault();
         if (video.length && loaded){
            video[0].pause();
            video[0].currentTime = 0;
        }
    };
    var avanzar = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].currentTime += 10;
        }
    };
    var retroceder = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].currentTime -= 10;
        }
    };
    var inicio = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].currentTime = 0;
        }
    };
    var fin = function(e){
        e.preventDefault();
        if (video.length && loaded){
            video[0].currentTime = video[0].duration;
        }    
    };
    var fullScreen = function(e){

    };
    var mvolumen = function(e){
        if (video.length && loaded){
            video[0].volume =  bvolumen.value/100;
        }
    };
    var mprogreso = function(e){
        if (loaded && video.length && bprogreso){
            bprogreso.value = video[0].currentTime / video[0].duration *100;
        }
    };
    var canplay = function(e){
        loaded = true;
        bvolumen.value = video[0].volume*100;
        bprogreso.value = 0;
    };
    var playpausefunc = function(e){
        if (video.length && loaded){
            if (video[0].played){
                video[0].pause();
            }
            else{
                video[0].play();
            }
        }
    };


    var changeVideo = function(e){
        var src = e.target.dataset.src;
        stop(e);
        var ext = ".";
        if (Modernizr.video.h264){
            ext = ".mp4";
        }
        else{
            ext = ".webm";
        }
        if (video.length && loaded){
            video[0].src = src + ext;
            }
    };
    console.log("añadiendo eventos");
    if (video.length){
        video[0].addEventListener('canplay', canplay, false);
        video[0].addEventListener('click', playpausefunc, false);
        video[0].addEventListener('timeupdate', mprogreso, false);
        console.log("añadiendo eventos click, canplay y timeupdate");
    }

    if (biniciar){
        biniciar.addEventListener('click', iniciar,false);
        console.log("añadiendo eventos click al boton play");
    }
    if (bpausar){
        bpausar.addEventListener('click', pausar,false);
        console.log("añadiendo eventos click al boton pausa");
    }
    if (bparar){
        bparar.addEventListener('click', parar,false);
        console.log("añadiendo eventos click al boton parar");
    }
    if (bavanzar){
        bavanzar.addEventListener('click', avanzar,false);
        console.log("añadiendo eventos click al boton avanzar");
    }
    if (bretroceder){
        bretroceder.addEventListener('click', retroceder,false);
        console.log("añadiendo eventos click al boton retroceder");
    }
    if (binicio){
        binicio.addEventListener('click', inicio,false);
        console.log("añadiendo eventos click al boton inicio");
    }
    if (bfin){
        bfin.addEventListener('click', fin,false);
        console.log("añadiendo eventos click al boton fin");
    }
    if (bfullscreen){
        bfullscreen.addEventListener('click', fullScreen,false);
        console.log("añadiendo eventos click al boton fullscreen");
    }
    if (bvolumen){
        bvolumen.addEventListener('input', mvolumen, false);
        console.log("añadiendo eventos click al boton volumen");
    }
};



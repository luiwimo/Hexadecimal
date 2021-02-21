(function(){
    "use strict"
    var entrada = document.getElementById('entrada')
    var guardar = document.getElementById('guardar')
    var inicio = document.getElementById('Inicio')
    var colorB = document.getElementById('body');
    var resul = ''

    function obtenerColor(){
        var datos = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        var colorH = ''

        for( var i=0; i<6; i++){
            var random = (Math.floor(Math.random()*datos.length))
            console.log(random);
            colorH = colorH+datos[random]
        }
        return colorH;
    }

    resul = obtenerColor()
    colorB.style.backgroundColor = '#'+resul;

    guardar.addEventListener('click',function(){ //Función anónima
        console.log('Le di click');
       
        var tamanio = entrada.value
        if(tamanio.length !== 6){
            alert('Los caracteres ingresados debe estar entre 000000 y FFFFFF')
        }else{
            inicio.innerHTML = ''
            inicio.style.backgroundColor = '#'+resul;

            var sect = document.querySelector('.results') //Busca un tag clase table
            sect.innerHTML=''
            sect.innerHTML = '<h2 id="colorCorrecto"> Your color: </h2> <button id="graf"></button>' //Modifica el html dentro <div class="row"></div>
            +'<h2 id="answer">Answer: #'+resul+'</h2>'
            +'<span id="populatio" >Distance: 3173.73</span>'
            +'<span id="capital">Closest to 0 is the best</span>'
            +'<section id="Inicio"><button id="otro">Another</button></section>'

            var graph = document.getElementById('graf')
            graph.style.backgroundColor = '#'+entrada.value

            otro.addEventListener('click',function(){
                location.reload()
            })
            
            
        }
    
       
    })
    
})()
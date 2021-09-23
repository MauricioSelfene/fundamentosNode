function hola(nombre, miCallback){
    setTimeout(function () {
        console.log('Hola, ' + nombre);
        miCallback();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback();
    });
}

console.log('Iniciando proceso...');
hola('Mauricio',function() {
    adios('Mauricio', function(){
        console.log('Terminando proceso...');
    });
});

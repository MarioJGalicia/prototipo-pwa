
// confirmar si podemos usar el SW
if ( navigator.serviceWorker ) {

    navigator.serviceWorker.register('/sw.js');
    console.log("Se registro el serviceWorker");

}


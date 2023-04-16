const cambio = ['ai', 'enter', 'imes', 'ober', 'ufat'];
const vocales = ['a', 'e', 'i', 'o', 'u'];
const btnEncrip = document.querySelector('.btn-encrip');
const btnCopiar = document.querySelector('.btn-copiar');
const btnDesencrip = document.querySelector('.btn-desencrip');

const mostrar = document.getElementById("resultado");

//asignacion de evento al boton de Encriptar
btnEncrip.addEventListener("click", function (e) {
    e.preventDefault();
    const texto = document.getElementById("ingreso").value;
    let encrip = encriptador(texto)
    mostrar.innerHTML = encrip;
    // document.getElementById("result").value=encrip;

});

//Asignacion para el boton de desencriptar
btnDesencrip.addEventListener('click', function (e) {
    const texto = document.getElementById("ingreso").value;
    let encrip = desencriptador(texto)
    mostrar.innerHTML = encrip;
});


//puncion de encriptador
function encriptador(texto) {
    let mensaje = "";
    texto = texto.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
        let letra = vocales.indexOf(texto[i]);
        if (letra != -1) {
            mensaje += cambio[letra];

        } else {
            mensaje += texto[i]
        }


    }
    return mensaje;
}

function desencriptador(texto) {
    let mensaje = texto;
    // si ai esta incluido devuelvo a y continuo de la pos + lenght de ai
    cambio.forEach(x => {
        while (texto.includes(x)) {
            texto = texto.replace(x, x[0]);
        }

    })



    return texto;
}
//boton de copiar 
btnCopiar.addEventListener('click', function (e) {
    let textoEncrip =window.getSelection().toString();
    let ingreso =  document.getElementById("ingreso");
    ingreso.value = textoEncrip;
   
});

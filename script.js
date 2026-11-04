console.log("Página romántica iniciada 💗");


// PASAR ENTRE PREGUNTAS Y GUARDAR RESPUESTAS

function siguientePregunta(pagina) {


    let numero = document.body.dataset.pregunta;

    let respuesta = document.getElementById("respuesta").value;


    localStorage.setItem(
        "respuesta" + numero,
        respuesta
    );



    let carta = document.querySelector(".carta");


    carta.classList.add("salir");



    setTimeout(function(){

        window.location.href = pagina;

    },600);


}



// ABRIR CARTITA FINAL

function abrirCarta(){

    let sobre = document.getElementById("sobre");

    sobre.classList.toggle("abierto");

}



// ENVIAR RESPUESTAS AL CORREO

function enviarRespuestas(){


    let texto = "";



    for(let i = 1; i <= 10; i++){


        let respuesta = localStorage.getItem("respuesta" + i);



        texto += "Pregunta " + i + ":\n";

        texto += respuesta + "\n\n";


    }



    emailjs.send(

        "service_3cf4qzi",

        "template_7icckcx",

        {

            respuestas: texto

        },


        "UBPjIMA_fLkblNyr4"


    )

    .then(function(){

        alert("Tus respuestas fueron enviadas 💗");


    })


    .catch(function(error){


        console.log(error);

        alert("Hubo un error enviando las respuestas :c");


    });



}
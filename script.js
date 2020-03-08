console.log("TOONS");

const name = document.querySelector("#input-name");
const year = document.querySelector("#input-year");
const genere = document.querySelector("#input-genere");
const authors = document.querySelector("#input-authors");
const description = document.querySelector("#input-description");
const stars = document.querySelector("#input-stars");

const confirmButton = document.querySelector("#btn-confirm");
const clearButton = document.querySelector("#btn-clear");

const listaDeCaricaturas = document.querySelector("#listaCaricaturas");
const newToons = document.querySelector("#newCartoon");

//----------Agregando caricaturas----------
confirmButton.addEventListener("click",()=>{

    if(name.value== "" || year.value== "" || genere.value== "" || authors.value== "" || description.value== "" || stars.value == ""){
        alert("Faltan datos por ingresar")
    }
    else{
        console.log(name.value, year.value, genere.value, authors.value, description.value, stars.value);

    };

    crearImagen();

    const nuevoItem = document.createElement("ion-item"); 
    nuevoItem.textContent = "Name: " + name.value + " " +
                            "Year: " + year.value + " " +
                            "Genere: " + genere.value + " " + 
                            "Authors: " + authors.value + " " + 
                            "Description: " + description.value + " " + 
                            "Stars: " + stars.value + " ";
    listaDeCaricaturas.append(nuevoItem);

    clearAll();
    
    // const nuevoGasto = document.createElement("ion-item");
    // nuevoGasto.textContent=tituloIngresada + " $ " + cantidadIngresada;
    // listaDeGastos.appendChild(nuevoGasto);
 

})

//----------Limpiando inputs del formulario----------
clearButton.addEventListener("click",function(){
    clearAll();
});

function clearAll(){
    name.value="";
    year.value="";
    genere.value="";
    authors.value="";
    description.value="";
    stars.value="";
}

function crearImagen(){
    // const nuevoItem = document.createElement("ion-item");
    //crear nuevo elemento
    var imagen = document.createElement("img");
    
    //añadir atributos
    var ruta = prompt("introduce la ruta");
    imagen.setAttribute("alt",prompt("introduce texto alternativo"));
    imagen.src = ruta;

    var cont = document.getElementById("listaCaricaturas");
    cont.appendChild(imagen)
}

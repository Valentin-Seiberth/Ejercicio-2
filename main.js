const solPeruano = 400; 
const reales = 300;
const dolares = 1300;
const euro = 1400;
const yen = 100;
const dracmas = 900;
const libras = 2000;
const rublos = 600;

function suma(event){
    event.preventDefault();
    let lugarDestino = document.getElementById("opcion").value;
    let nroDias = parseFloat(document.getElementById("dias").value);

    let costoDelViaje = 100 * nroDias; 
    let costoEnPesos = 0;

    if(lugarDestino == "Cusco") costoEnPesos = costoDelViaje * solPeruano;
    if(lugarDestino == "Rio") costoEnPesos = costoDelViaje * reales;
    if(lugarDestino == "Miami") costoEnPesos = costoDelViaje * dolares;
    if(lugarDestino == "Barcelona") costoEnPesos = costoDelViaje * euro;
    if(lugarDestino == "Tokyo") costoEnPesos = costoDelViaje * yen;
    if(lugarDestino == "Atenas") costoEnPesos = costoDelViaje * dracmas;
    if(lugarDestino == "Londres") costoEnPesos = costoDelViaje * libras;
    if(lugarDestino == "Moscu") costoEnPesos = costoDelViaje * rublos;

    document.getElementById("costoFinal").textContent =
        "Necesitas: $" + costoEnPesos + " pesos argentinos";
}

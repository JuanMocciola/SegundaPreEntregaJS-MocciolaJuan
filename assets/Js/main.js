const talles = ["XS", "S", "M", "L", "XL", "XXL"];
const colores = ["Blanco", "Negro", "Rojo", "Verde", "Azul"];

class Camperas {
    constructor(modelo, talle, color, precio) {
        this.modelo = modelo;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }

    sumaIva() {
        this.precio = (this.precio * 1.21).toFixed(3);
    }
}

const Campera1 = new Camperas("Camperon", talles[4], colores[1], 170.000);
const Campera2 = new Camperas("Campera", talles[2], colores[2], 120.000);

Campera1.sumaIva();
Campera2.sumaIva();


function stockCampera1() {
    let consultaTalles = prompt("¿Qué talle necesitas?").toUpperCase();

    if (consultaTalles === "XS" || consultaTalles === "XXL") {
        alert("¡No hay stock!");
    } else if (talles.includes(consultaTalles)) {
        alert("¡Hay stock!");
    } else {
        alert("Talle inválido.");
    }
}
stockCampera1();


function stockCampera2() {
    let consultaTalles = prompt("Felicitaciones! Podes conocer un modelo exclusivo. Solo contamos con M, L Y XL. ¿Que talle sos?").toUpperCase();

    if (consultaTalles === "XS" || consultaTalles === "S" || consultaTalles === "XXL") {
        alert("Proximamente estara disponible en ese talle.");
    } else if (talles.includes(consultaTalles)) {
        alert("Hay stock.");
    } else {
        alert("Talle inválido.");
    }
}
stockCampera2();    
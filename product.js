const Contenedor = require('./desafio.js')

const run = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: "Pulsera",
        price: 30000,
        thumbnail: "https://acortar.link/68dexC"
    })

    contenedor.save({
        title: "Collar",
        price: 32500,
        thumbnail: "https://acortar.link/7hbS7X"
    })

    contenedor.save({
        title: "Anillo",
        price: 20900,
        thumbnail: "https://acortar.link/QoROsP"
    })
    console.log(contenedor.getById(1));
    console.log(contenedor.getById(5));
    console.log(contenedor.getAll());
    console.log(contenedor.deleteById(1));
    console.log(contenedor.deleteById(6));
    console.log(contenedor.getAll());
    contenedor.deleteAll();
    console.log(contenedor.getAll());
};

run();
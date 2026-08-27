// EJERCICIO 1

const usuario = {
  nombre: "Ana",
  edad: 16,
  suscripcion: "gratuita"
};

const acceso = usuario.edad >= 18 ? "Permitido" : "Denegado";

const plan = usuario.suscripcion === "premium" ? "Premium" : "Gratuito";

const saludo = usuario.nombre ? `Hola, ${usuario.nombre}` : "Hola, Invitado";

console.log(acceso);
console.log(plan);
console.log(saludo);


// EJERCICIO 2

const config = {
  tema: "oscuro",
  idioma: "",
  notificaciones: true,
  usuarioAdmin: false
};

const idioma = config.idioma || "español";

const badge = config.usuarioAdmin && "Admin";

config.notificaciones && console.log("Notificaciones activas");

console.log(idioma);
console.log(badge);


// EJERCICIO 3

const pelicula = {
  titulo: "Interstellar",
  director: "Christopher Nolan",
  año: 2014,
  duracion: 169,
  genero: "Ciencia ficción"
};

const { titulo, director, año } = pelicula;

const { duracion: duracionMinutos } = pelicula;

const { calificacion = "Sin calificar" } = pelicula;

function mostrarPelicula({ titulo, año, director }) {
  console.log(`${titulo} (${año}) — Dir. ${director}`);
}

mostrarPelicula(pelicula);


// EJERCICIO 4

const coordenadas = [40.7128, -74.0060, 10];

const [latitud, longitud, altitud] = coordenadas;

const colores = ["rojo", "verde", "azul", "amarillo"];

const [primero, , , ultimo] = colores;

const [colorInicial, ...resto] = colores;

console.log(latitud);
console.log(longitud);
console.log(altitud);

console.log(primero);
console.log(ultimo);

console.log(colorInicial);
console.log(resto);


// EJERCICIO 5

const base = {
  marca: "Samsung",
  modelo: "Galaxy S24",
  precio: 180000
};

const descuento = {
  precio: 150000,
  enOferta: true
};

const copiaBase = { ...base };

const oferta = {
  ...base,
  precio: 150000,
  enOferta: true
};

const productoCombinado = {
  ...base,
  ...descuento
};

const carrito = ["auriculares", "teclado"];

const carritoActualizado = [...carrito, "mouse"];

console.log(copiaBase);
console.log(oferta);
console.log(productoCombinado);
console.log(carritoActualizado);
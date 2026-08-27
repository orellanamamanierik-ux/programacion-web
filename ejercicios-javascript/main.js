import {
  formatearPrecio,
  calcularDescuento,
  estaDisponible
} from "./utilidades.js";

console.log(formatearPrecio(120000));
console.log(calcularDescuento(10000, 20));
console.log(estaDisponible(0));
console.log(estaDisponible(5));
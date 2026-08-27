export function formatearPrecio(precio) {
  return "$" + precio.toLocaleString("es-AR");
}

export function calcularDescuento(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

export function estaDisponible(stock) {
  return stock > 0;
}
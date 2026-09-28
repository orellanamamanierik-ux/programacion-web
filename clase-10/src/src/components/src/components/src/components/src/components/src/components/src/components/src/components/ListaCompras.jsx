import { useState } from "react"

function ListaCompras() {
  const [texto, setTexto] = useState("")
  const [items, setItems] = useState([])

  function agregarItem() {
    if (texto.trim() === "") {
      return
    }

    const nuevoItem = {
      id: Date.now(),
      nombre: texto,
      comprado: false
    }

    setItems([...items, nuevoItem])
    setTexto("")
  }

  function cambiarEstado(id) {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, comprado: !item.comprado }
          : item
      )
    )
  }

  function eliminarItem(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  const faltanComprar = items.filter(
    (item) => !item.comprado
  ).length

  return (
    <div>
      <input
        type="text"
        placeholder="Agregar producto"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button onClick={agregarItem}>Agregar</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.comprado}
              onChange={() => cambiarEstado(item.id)}
            />

            <span
              style={{
                textDecoration: item.comprado
                  ? "line-through"
                  : "none"
              }}
            >
              {item.nombre}
            </span>

            <button onClick={() => eliminarItem(item.id)}>
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p>Faltan comprar: {faltanComprar}</p>
    </div>
  )
}

export default ListaCompras
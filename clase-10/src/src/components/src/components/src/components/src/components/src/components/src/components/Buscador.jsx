import { useState } from "react"

function Buscador() {
  const [texto, setTexto] = useState("")

  const frutas = [
    "manzana",
    "pera",
    "naranja",
    "banana",
    "kiwi",
    "mango"
  ]

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(texto.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar fruta"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <ul>
        {frutasFiltradas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  )
}

export default Buscador
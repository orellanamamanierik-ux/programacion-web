import { useState } from "react"

function Acordeon({ titulo, contenido }) {
  const [abierto, setAbierto] = useState(false)

  function cambiar() {
    setAbierto(!abierto)
  }

  return (
    <div>
      <button onClick={cambiar}>
        {titulo} {abierto ? "▲" : "▼"}
      </button>

      {abierto && <p>{contenido}</p>}
    </div>
  )
}

export default Acordeon